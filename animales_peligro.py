import json
import requests
from bs4 import BeautifulSoup
from time import sleep
import os

def obtener_estado_conservacion(nombre_especie):
    url_nombre = nombre_especie.replace(' ', '_')
    url = f"https://es.wikipedia.org/wiki/{url_nombre}"
    headers = {'User-Agent': 'Mozilla/5.0'}

    try:
        response = requests.get(url, headers=headers, timeout=10)
    except Exception:
        return "Estado no disponible"

    if response.status_code != 200:
        return "Estado no disponible"

    soup = BeautifulSoup(response.text, 'html.parser')
    estado_th = soup.find('th', string='Estado de conservación')

    if not estado_th:
        return "Estado no disponible"

    estado_td = estado_th.find_next('td')
    if not estado_td:
        return "Estado no disponible"

    texto = estado_td.get_text(strip=True)
    link = estado_td.find('a') # type: ignore
    title = link.get('title') if link and link.get('title') else "" # type: ignore

    estados_validos = [
        "Vulnerable", "En peligro crítico", "En peligro",
        "Extinto", "Casi amenazado", "Preocupación menor",
        "Datos insuficientes"
    ]

    for estado in estados_validos:
        if estado in texto or estado in title: # type: ignore
            return estado

    return "Estado no disponible"

# 📥 Leer archivo de entrada
input_path = "especies_animalesunc.json"

if not os.path.exists(input_path):
    print(f"❌ Archivo no encontrado: {input_path}")
    exit()

with open(input_path, "r", encoding="utf-8") as f:
    especies = json.load(f)

# 🔁 Agregar estado de conservación
for especie in especies:
    nombre = especie.get("nombre_cientifico")
    print(f"🔍 Buscando estado para: {nombre}")
    estado = obtener_estado_conservacion(nombre)
    especie["estado"] = estado
    sleep(1.2)  # evitar sobrecargar Wikipedia

# ❌ Filtrar especies que no están en peligro
estados_excluir = [
    "Preocupación menor", "Datos insuficientes",
    "Estado no identificado", "No se encontró sección",
     "No se pudo acceder (404)","Estado no disponible"
]
especies_filtradas = [
    especie for especie in especies
    if especie.get("estado") not in estados_excluir
]

# 💾 Guardar JSON limpio
with open("especies_peligro.json", "w", encoding="utf-8") as f:
    json.dump(especies_filtradas, f, ensure_ascii=False, indent=2)

# 💾 Guardar versión JS para usar en HTML
with open("especies_peligro.js", "w", encoding="utf-8") as f:
    f.write("const especiesEnPeligro = ")
    json.dump(especies_filtradas, f, ensure_ascii=False, indent=2)
    f.write(";")

print(f"✅ Se guardaron {len(especies_filtradas)} especies en riesgo.")
