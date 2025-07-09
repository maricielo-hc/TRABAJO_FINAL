import json
import requests
import time

# Leer archivo JS
with open("estadisticas_especies.js", "r", encoding="utf-8") as f:
    contenido = f.read()

json_str = contenido.replace("const estadisticasEspecies =", "").rstrip(";").strip()
especies = json.loads(json_str)

# Función para obtener el grupo taxonómico
def obtener_grupo(nombre_cientifico):
    url = f"https://api.inaturalist.org/v1/taxa?q={nombre_cientifico}"
    try:
        res = requests.get(url, timeout=10)
        data = res.json()
        resultados = data.get("results", [])
        if resultados:
            return resultados[0].get("iconic_taxon_name", "Otro")  # Ej: "Aves", "Mammalia", etc.
    except Exception as e:
        print(f"❌ Error con {nombre_cientifico}: {e}")
    return "Otro"

# Mapear nombres científicos a grupos legibles
traduccion_grupo = {
    "Aves": "Ave",
    "Mammalia": "Mamífero",
    "Reptilia": "Reptil",
    "Amphibia": "Anfibio",
    "Actinopterygii": "Pez",
    "Insecta": "Insecto"
}

# Añadir grupo a cada especie
for especie in especies:
    nombre = especie["nombre_cientifico"]
    grupo_inaturalist = obtener_grupo(nombre)
    grupo = traduccion_grupo.get(grupo_inaturalist, "Otro")
    especie["grupo"] = grupo
    print(f"✔️ {nombre} → {grupo}")
    time.sleep(1.2)  # evitar bloqueo de la API

# Guardar de nuevo como JS
with open("estadisticas_especies.js", "w", encoding="utf-8") as f:
    f.write("const estadisticasEspecies = ")
    json.dump(especies, f, ensure_ascii=False, indent=2)
    f.write(";")

print("✅ Archivo actualizado con campo 'grupo'")
