import json
import re

# Cargar el JSON
with open("especies_animales.json", "r", encoding="utf-8") as f:
    json_data = json.load(f)

# Cargar el JS (parsear el array JS a lista Python)
with open("especies_animales1.js", "r", encoding="utf-8") as f:
    js_raw = f.read()

# Extraer objetos del JS con regex
matches = re.findall(r'{\s*nombre_cientifico:\s*"([^"]+)"\s*}', js_raw)
js_data = [{"nombre_cientifico": name} for name in matches]

# Unir ambas listas y eliminar duplicados
nombres_unicos = set()
combinado = []

for item in json_data + js_data:
    nombre = item["nombre_cientifico"]
    if nombre not in nombres_unicos:
        nombres_unicos.add(nombre)
        combinado.append({"nombre_cientifico": nombre})

# Generar nuevo JS
with open("especies_unico.js", "w", encoding="utf-8") as f:
    f.write("const especies = [\n")
    f.write(",\n".join(f'  {{ nombre_cientifico: "{item["nombre_cientifico"]}" }}' for item in combinado))
    f.write("\n];\n")

print(f"Archivo combinado generado: especies_unico.js")
