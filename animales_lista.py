import urllib.request
from bs4 import BeautifulSoup
import json
import re

# Leer y decodificar el HTML
url = 'https://www.peruecologico.com.pe/esp_extincion.htm'
response = urllib.request.urlopen(url)
html = response.read().decode('latin1')  # Importante para acentos

# Parsear con BeautifulSoup
sopa = BeautifulSoup(html, 'html.parser')

# Buscar todos los <td> con width="380"
tds = sopa.find_all('td', width="380")

# Extraer y limpiar nombres científicos
nombres = []
for td in tds:
    texto = td.get_text(strip=True)

    # Limpiar: eliminar saltos de línea, tabulaciones, y espacios múltiples
    texto_limpio = re.sub(r'\s+', ' ', texto).strip()

    if texto_limpio and not texto_limpio.lower().startswith("nombre"):
        nombres.append({"nombre_cientifico": texto_limpio})

# Eliminar duplicados si existieran
nombres_unicos = list({json.dumps(n, ensure_ascii=False): n for n in nombres}.values())

# Ordenar alfabéticamente por nombre científico
nombres_ordenados = sorted(nombres_unicos, key=lambda x: x['nombre_cientifico'])

# Guardar en archivo JSON
with open('especies_animales.json', 'w', encoding='utf-8') as f:
    json.dump(nombres_ordenados, f, ensure_ascii=False, indent=2)

print("Datos limpios y guardados en 'especies_animales.json'")

