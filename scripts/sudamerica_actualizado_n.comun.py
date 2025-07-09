import json
import time
import requests

# Cargar archivo existente
with open("estadisticas_sudamerica.js", "r", encoding="utf-8") as f:
    contenido = f.read()

json_str = contenido.replace("const estadisticasSudamerica = ", "").rstrip(";").strip()
especies = json.loads(json_str)

def obtener_nombre_comun(nombre_cientifico):
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

# Actualizar solo si nombre común es igual al científico
for especie in especies:
    if especie["nombre_cientifico"].lower() == especie["nombre_comun"].lower():
        nuevo_nombre = obtener_nombre_comun(especie["nombre_cientifico"])
        if nuevo_nombre:
            print(f"✔️ {especie['nombre_cientifico']} → {nuevo_nombre}")
            especie["nombre_comun"] = nuevo_nombre
        time.sleep(1.2)

# Guardar el archivo actualizado
with open("estadisticas_sudamerica.js", "w", encoding="utf-8") as f:
    f.write("const estadisticasSudamerica = ")
    json.dump(especies, f, ensure_ascii=False, indent=2)
    f.write(";")

print("✅ Archivo actualizado: estadisticas_sudamerica.js")
