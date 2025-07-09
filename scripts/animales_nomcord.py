import requests
import json
import time
import os

# --------- CONFIGURACIÓN ---------
input_json = "especies_nom_coord.json"
output_json = "especies_nom_coord.json"
output_js = "especies_nom_coord.js"
pausa = 1.2
limite_por_especie = 300
# ---------------------------------

# Verificar existencia
if not os.path.exists(input_json):
    print(f"❌ No se encontró el archivo: {input_json}")
    exit()

# Leer JSON base
with open(input_json, "r", encoding="utf-8") as f:
    especies = json.load(f)

# Filtrar solo especies que no estén en "Preocupación menor"
especies_filtradas = [
    especie for especie in especies
    if especie.get("estado", "").lower() != "preocupación menor"
]

print(f"🔍 {len(especies_filtradas)} especies serán procesadas (excluyendo 'Preocupación menor').")

# Buscar coordenadas e integrarlas
for especie in especies_filtradas:
    nombre = especie["nombre_cientifico"]
    print(f"🌎 Consultando coordenadas para: {nombre}")

    url = (
        "https://api.gbif.org/v1/occurrence/search?"
        f"scientificName={nombre.replace(' ', '%20')}&"
        "country=PE&hasCoordinate=true&year=2015,2025&limit="
        + str(limite_por_especie)
    )

    try:
        res = requests.get(url, timeout=15)
        data = res.json()

        coords = []
        for item in data.get("results", []):
            lat = item.get("decimalLatitude")
            lon = item.get("decimalLongitude")
            if lat is not None and lon is not None:
                coords.append({"lat": lat, "lon": lon})

        especie["coordenadas"] = coords
        print(f"✅ {len(coords)} coordenadas encontradas")

    except Exception as e:
        print(f"❌ Error al procesar {nombre}: {e}")
        especie["coordenadas"] = []

    time.sleep(pausa)

# Guardar JSON actualizado
with open(output_json, "w", encoding="utf-8") as f:
    json.dump(especies_filtradas, f, ensure_ascii=False, indent=2)
print(f"📁 JSON guardado: {output_json}")

# Guardar como archivo JS
with open(output_js, "w", encoding="utf-8") as f:
    f.write("const especiesNomCoord = ")
    json.dump(especies_filtradas, f, ensure_ascii=False, indent=2)
    f.write(";")
print(f"🧭 JS generado: {output_js}")
