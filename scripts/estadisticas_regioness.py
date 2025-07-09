#ESTADISTICAS POR DEPARTAMENTOS EN PERU (ESPECIES EN PELIGRO)

import json
from collections import defaultdict

# Leer archivo regiones_especies.js
with open("regiones_especies.js", "r", encoding="utf-8") as f:
    contenido = f.read()

# Limpiar y convertir a JSON
json_str = contenido.replace("const regionesEspecies = ", "").rstrip(";").strip()
especies = json.loads(json_str)

# Contar especies por región
conteo_regiones = defaultdict(int)

for especie in especies:
    for region in especie.get("regiones", []):
        conteo_regiones[region] += 1

# Convertir a lista de objetos para JS
resultado = [{"region": region, "cantidad": cantidad} for region, cantidad in conteo_regiones.items()]
resultado_ordenado = sorted(resultado, key=lambda x: x["cantidad"], reverse=True)

# Guardar como archivo JS
with open("estadisticas_regiones.js", "w", encoding="utf-8") as f:
    f.write("const estadisticasRegiones = ")
    json.dump(resultado_ordenado, f, ensure_ascii=False, indent=2)
    f.write(";")

print("✅ Archivo generado: estadisticas_regiones.js")
