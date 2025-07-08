import requests
import csv
import json

def en_peru(lat, lon):
    return -20 < lat < 0 and -82 < lon < -68

def obtener_incendios_peru():
    url = "https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6.1/csv/MODIS_C6_1_South_America_24h.csv"
    res = requests.get(url)
    res.encoding = 'utf-8'
    lines = res.text.splitlines()
    reader = csv.DictReader(lines)

    incendios = []
    for row in reader:
        lat = float(row['latitude'])
        lon = float(row['longitude'])
        if en_peru(lat, lon):
            incendios.append({
                "tipo": "Incendio",
                "fecha": row["acq_date"],
                "hora": row["acq_time"],
                "lat": lat,
                "lon": lon,
                "intensidad": row.get("frp", "")
            })
    return incendios

def obtener_sismos_peru():
    url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    res = requests.get(url)
    data = res.json()

    sismos = []
    for feature in data.get("features", []):
        coords = feature["geometry"]["coordinates"]
        lon, lat = coords[0], coords[1]
        if en_peru(lat, lon):
            props = feature["properties"]
            sismos.append({
                "tipo": "Sismo",
                "fecha": props["time"],
                "lugar": props.get("place", ""),
                "magnitud": props.get("mag", ""),
                "lat": lat,
                "lon": lon
            })
    return sismos

# === EJECUTAR ===
incendios = obtener_incendios_peru()
sismos = obtener_sismos_peru()
todos = incendios + sismos

with open("eventos_naturales.js", "w", encoding="utf-8") as f:
    f.write("const eventosNaturales = ")
    json.dump(todos, f, ensure_ascii=False, indent=2)
    f.write(";")

print("✅ Archivo generado: eventos_naturales.js")
