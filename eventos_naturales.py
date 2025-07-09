import requests
import csv
import json

# 📍 Limites geográficos de Perú
def en_peru(lat, lon):
    return -19.0 <= lat <= 0.0 and -82.0 <= lon <= -68.0

# 🔥 Incendios de NASA FIRMS
def obtener_incendios_peru():
    url = "https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6.1/csv/MODIS_C6_1_South_America_24h.csv"
    res = requests.get(url)
    res.encoding = 'utf-8'
    reader = csv.DictReader(res.text.splitlines())

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
                "lon": lon
            })
    return incendios

# 🌍 Sismos desde USGS
def obtener_sismos_peru():
    url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv"
    res = requests.get(url)
    res.encoding = 'utf-8'
    reader = csv.DictReader(res.text.splitlines())

    sismos = []
    for row in reader:
        lat = float(row['latitude'])
        lon = float(row['longitude'])
        if en_peru(lat, lon):
            sismos.append({
                "tipo": "Sismo",
                "fecha": row["time"],
                "lugar": row["place"],
                "magnitud": row["mag"],
                "lat": lat,
                "lon": lon
            })
    return sismos

# 📦 Ejecutar
incendios = obtener_incendios_peru()
sismos = obtener_sismos_peru()
eventos = incendios + sismos

# 💾 Guardar JSON
with open("eventos_naturales.json", "w", encoding="utf-8") as f:
    json.dump(eventos, f, ensure_ascii=False, indent=2)

# 💾 Guardar como JS
with open("eventos_naturales.js", "w", encoding="utf-8") as f:
    f.write("const eventosNaturales = ")
    json.dump(eventos, f, ensure_ascii=False, indent=2)
    f.write(";")

print(f"✅ Se guardaron {len(incendios)} incendios y {len(sismos)} sismos en eventos_naturales.js")
