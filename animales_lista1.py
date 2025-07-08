import json

# Archivos de entrada y salida
input_path = "Index_of_CITES_Species_[CUSTOM]_2025-07-08 04_04.json"
output_path = "especies_animales.js"

# Leer archivo original
with open(input_path, "r", encoding="utf-8") as f:
    data = json.load(f)

# Filtrar: solo animales con nombre científico
animales = [
    {"nombre_cientifico": item["full_name"]}
    for item in data
    if item.get("kingdom_name") == "Animalia" and "full_name" in item
]

# Generar código JS
js_code = "const especies = [\n"
js_code += ",\n".join(
    f'  {{ nombre_cientifico: "{item["nombre_cientifico"]}" }}'
    for item in animales
)
js_code += "\n];\n"

# Guardar el archivo
with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_code)

print(f"✅ Archivo generado: {output_path} con {len(animales)} especies.")
