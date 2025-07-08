import json

# Archivos de entrada y salida
input_path = "Index_of_CITES_Species_[CUSTOM]_2025-07-08 04_04.json"
output_path = "especies_animales1.json"

# Leer archivo original
with open(input_path, "r", encoding="utf-8") as f:
    data = json.load(f)

# Filtrar: solo animales con nombre científico
animales = [
    {"nombre_cientifico": item["full_name"]}
    for item in data
    if item.get("kingdom_name") == "Animalia" and "full_name" in item
]

# Guardar como archivo JSON
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(animales, f, ensure_ascii=False, indent=2)

print(f"✅ Archivo generado: {output_path} con {len(animales)} especies.")

