#DEPARTAMENTOS DONDE SE TIENE OBSERVACIONES DE CIERTAS ESPECIES EN EXTINCIÓN EN PERÚ

#Importamos librerías
import requests
import json
import time

# Leer el .js de coordenadas
with open("coordenadas_especies.js", "r", encoding="utf-8") as f:
    contenido = f.read()

json_str = contenido.replace("const datosEspecies = ", "").rstrip(";").strip()
especies = json.loads(json_str)

def obtener_region_peru(lat, lon):
    url = "https://nominatim.openstreetmap.org/reverse"
    params = {
        "format": "json",
        "lat": lat,
        "lon": lon,
        "zoom": 6,  # nivel departamental
        "addressdetails": 1
    }
    headers = {"User-Agent": "proyecto-especies@app.com"}

    try:
        res = requests.get(url, params=params, headers=headers, timeout=10)
        data = res.json()
        address = data.get("address", {})
        region = address.get("state") or address.get("region") or address.get("province")
        return region or "Desconocido"
    except Exception as e:
        print(f"❌ Error con lat:{lat}, lon:{lon}: {e}")
        return "Error"

resultado = []

for especie in especies:
    nombre = especie["nombre_cientifico"]
    comun = especie.get("nombre_comun", nombre)
    coords = especie.get("coordenadas", [])

    regiones = set()
    for c in coords[:3]:  # limitar a 3 para evitar bloqueos
        region = obtener_region_peru(c["lat"], c["lon"])
        if region and region != "Error":
            regiones.add(region)
        time.sleep(1.2)

    resultado.append({
        "nombre_cientifico": nombre,
        "nombre_comun": comun,
        "regiones": list(regiones)
    })

# Guardar en .js
with open("regiones_especies.js", "w", encoding="utf-8") as f:
    f.write("const regionesEspecies = ")
    json.dump(resultado, f, ensure_ascii=False, indent=2)
    f.write(";")

print("✅ Archivo generado: regiones_especies.js")
