import requests
import csv
import json
import os  # ✅ Necesario para crear carpetas

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
            hora_raw = row["acq_time"].zfill(4)
            hora_formateada = f"{hora_raw[:2]}:{hora_raw[2:]}"
            incendios.append({
                "tipo": "Incendio",
                "fecha": row["acq_date"],
                "hora": hora_formateada,
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

# 📁 Obtener la ruta base del proyecto (una carpeta arriba de /scripts)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ✅ Crear carpetas en la raíz del proyecto si no existen
os.makedirs(os.path.join(BASE_DIR, "data"), exist_ok=True)
os.makedirs(os.path.join(BASE_DIR, "js"), exist_ok=True)

# 💾 Guardar JSON en la raíz del repo
with open(os.path.join(BASE_DIR, "data", "eventos_naturales.json"), "w", encoding="utf-8") as f:
    json.dump(eventos, f, ensure_ascii=False, indent=2)

# 💾 Guardar JS en la raíz del repo
with open(os.path.join(BASE_DIR, "js", "eventos_naturales.js"), "w", encoding="utf-8") as f:
    f.write("const eventosNaturales = ")
    json.dump(eventos, f, ensure_ascii=False, indent=2)
    f.write(";")

