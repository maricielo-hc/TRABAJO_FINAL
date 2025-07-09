import json
import plotly.express as px

# Mapeo ISO-2 a ISO-3 (necesario para plotly)
iso_2_to_3 = {
    "AR": "ARG", "BO": "BOL", "BR": "BRA", "CL": "CHL",
    "CO": "COL", "EC": "ECU", "GY": "GUY", "PE": "PER",
    "PY": "PRY", "SR": "SUR", "UY": "URY", "VE": "VEN"
}

# Leer archivo JS
with open("estadisticas_sudamerica.js", "r", encoding="utf-8") as f:
    contenido = f.read()

json_str = contenido.replace("const estadisticasSudamerica = ", "").strip().rstrip(";")
especies = json.loads(json_str)

# Contar ocurrencias por país (usando código ISO-3)
conteo_por_pais = {}

for especie in especies:
    for pais_info in especie["paises"]:
        codigo_iso2 = pais_info["codigo"]
        codigo_iso3 = iso_2_to_3.get(codigo_iso2)
        if not codigo_iso3:
            continue
        cantidad = pais_info["cantidad"]
        conteo_por_pais[codigo_iso3] = conteo_por_pais.get(codigo_iso3, 0) + cantidad

# Lista para gráfico
datos_mapa = [{"codigo": codigo, "cantidad": cantidad} for codigo, cantidad in conteo_por_pais.items()]

# Crear mapa
fig = px.choropleth(
    data_frame=datos_mapa,
    locations="codigo",
    locationmode="ISO-3",
    color="cantidad",
    color_continuous_scale="YlGnBu",
    title="🌍 Mapa de calor de observaciones de animales en peligro de extinción en Sudamérica",
    labels={"codigo": "País", "cantidad": "Total observaciones"}
)

fig.update_layout(
    geo=dict(
        scope="south america",
        showframe=False,
        showcoastlines=True,
        projection_type="mercator"
    ),
    height=600,
    title=dict(
        text="🗺️ Mapa de calor de observaciones de animales en peligro de extinción en Sudamérica",
        x=0.5,  # Centrado horizontal
        xanchor="center",
        font=dict(size=22)  # Tamaño más grande del título
    ),
    margin=dict(t=80)
)

# Mostrar en Colab (opcional)
fig.show()

# Guardar como HTML
fig.write_html("mapa_calor_sudamerica.html")
print("✅ Mapa generado correctamente.")
