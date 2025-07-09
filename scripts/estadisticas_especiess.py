#ESTADISTICAS ESPECIES (NOMBRE CIENTIF, COMÚN Y CANTIDAD)

#Importando librerías
import requests
import json

estadisticas = []
total_coordenadas = 0

for especie in especies:
    nombre = especie["nombre_cientifico"]

    # Consulta rápida para obtener solo el total de ocurrencias
    url = (
        "https://api.gbif.org/v1/occurrence/search?"
        f"scientificName={nombre.replace(' ', '%20')}&"
        "country=PE&hasCoordinate=true&year=2015,2025&limit=1"
    ) #Observar el total de ocurrencias en Perú con coordenadas ente 2015-2025

    try:
        res = requests.get(url, timeout=15)
        data = res.json()
        cantidad = data.get("count", 0)  # Total registros reales
    except Exception as e:
        print(f"Error con {nombre}: {e}")
        cantidad = 0

    total_coordenadas += cantidad
    estadisticas.append({
        "nombre_cientifico": nombre,
        "nombre_comun": especie.get("nombre_comun", nombre),
        "cantidad": cantidad
    })

# Ordenamos y guardamos
estadisticas_ordenadas = sorted(estadisticas, key=lambda x: x["cantidad"], reverse=True)

with open("estadisticas_especies.js", "w", encoding="utf-8") as f:
    f.write("const estadisticasEspecies = ")
    json.dump(estadisticas_ordenadas, f, ensure_ascii=False, indent=2)
    f.write(";")

print(f"✅ Archivo generado: estadisticas_especies.js")
print(f"📍 Total de coordenadas (sumadas): {total_coordenadas}")
print(f"🐾 Total de especies: {len(estadisticas_ordenadas)}")
