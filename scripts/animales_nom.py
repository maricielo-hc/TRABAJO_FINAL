import requests
import json
import time

def obtener_nombre_comun_espanol(nombre_cientifico):
    url = f"https://api.inaturalist.org/v1/taxa?q={nombre_cientifico}&locale=es"
    try:
        res = requests.get(url, timeout=10)
        data = res.json()
        resultados = data.get("results", [])
        if resultados:
            return resultados[0].get("preferred_common_name")
    except Exception as e:
        print(f"❌ Error con {nombre_cientifico}: {e}")
    return None

# 📥 Leer archivo JSON directamente
with open("especies_animalesunc.json", "r", encoding="utf-8") as f:
    especies = json.load(f)

# 🔁 Agregar nombre común a cada especie
for especie in especies:
    nombre_cientifico = especie["nombre_cientifico"]
    nombre_comun = obtener_nombre_comun_espanol(nombre_cientifico)
    especie["nombre_comun"] = nombre_comun or nombre_cientifico
    print(f"✔️ {nombre_cientifico} → {especie['nombre_comun']}")
    time.sleep(1.0)  # para evitar saturar la API

# 💾 Guardar como JSON enriquecido
with open("especies_nom_coord.json", "w", encoding="utf-8") as f:
    json.dump(especies, f, ensure_ascii=False, indent=2)

print("✅ Archivo generado: especies_nom_coord.json")
