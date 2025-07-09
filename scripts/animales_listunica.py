import json

# Archivos de entrada
archivo1 = "especies_animales.json"
archivo2 = "especies_animales1.json"

# Leer los dos archivos
with open(archivo1, "r", encoding="utf-8") as f1:
    datos1 = json.load(f1)

with open(archivo2, "r", encoding="utf-8") as f2:
    datos2 = json.load(f2)

# Unir y eliminar duplicados por nombre_cientifico
nombres_unicos = set()
combinado = []

for item in datos1 + datos2:
    nombre = item.get("nombre_cientifico")
    if nombre and nombre not in nombres_unicos:
        nombres_unicos.add(nombre)
        combinado.append({ "nombre_cientifico": nombre })

# Guardar en un nuevo archivo JSON
with open("especies_animalesunc.json", "w", encoding="utf-8") as f:
    json.dump(combinado, f, ensure_ascii=False, indent=2)

print(f"✅ Archivo combinado creado: especies_animalesunc.json ({len(combinado)} especies)")

