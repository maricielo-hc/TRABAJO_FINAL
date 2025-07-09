import json
import plotly.express as px

# Leer y limpiar archivo
with open("estadisticas_regiones.js", "r", encoding="utf-8") as f:
    contenido = f.read()

json_str = contenido.replace("const estadisticasRegiones = ", "").rstrip(";").strip()
estadisticas = json.loads(json_str)

# Clasificación por zona geográfica
zona_region = {
    "Tumbes": "Costa", "Piura": "Costa", "Lambayeque": "Costa", "La Libertad": "Costa",
    "Ancash": "Costa", "Lima": "Costa", "Ica": "Costa", "Arequipa": "Costa",
    "Moquegua": "Costa", "Tacna": "Costa",
    "Cajamarca": "Sierra", "Huánuco": "Sierra", "Pasco": "Sierra", "Junín": "Sierra",
    "Huancavelica": "Sierra", "Ayacucho": "Sierra", "Apurímac": "Sierra",
    "Cusco": "Sierra", "Puno": "Sierra",
    "Amazonas": "Selva", "San Martín": "Selva", "Ucayali": "Selva",
    "Loreto": "Selva", "Madre de Dios": "Selva"
}

for item in estadisticas:
    region = item["region"]
    item["zona"] = zona_region.get(region, "Desconocido")

estadisticas = [item for item in estadisticas if item["zona"] != "Desconocido"]
estadisticas = sorted(estadisticas, key=lambda x: x["cantidad"], reverse=True)

# Colores por zona
colores_zona = {
    "Selva": "#27ae60",   # Verde intenso
    "Costa": "#f39c12",   # Amarillo cálido
    "Sierra": "#a0522d"   # Marrón claro
}

# Crear gráfico con estilo
fig = px.bar(
    estadisticas,
    x="region",
    y="cantidad",
    color="zona",
    color_discrete_map=colores_zona,
    title="🦧 <b style='font-size:30px;'>Especies observadas en peligro de extinción en Perú</b>",
    labels={"region": "Departamento", "cantidad": "Cantidad de especies", "zona": "Región"},
    category_orders={"region": [item["region"] for item in estadisticas]}
)

# Personalizar el gráfico
fig.update_layout(
    xaxis_tickangle=-45,
    height=650,
    plot_bgcolor="#f9f9f9",         # Fondo claro
    paper_bgcolor="#f4f6f7",        # Fondo general más suave
    font=dict(family="Arial", size=14, color="#2c3e50"),
    title_x=0.5,                    # Centrar el título
    legend=dict(
        title="Región",
        font=dict(size=13),
        orientation="h",
        yanchor="bottom", y=1.02,
        xanchor="center", x=0.5
    )
)

# Bordes simulados en las barras
fig.update_traces(marker_line_width=1.5, marker_line_color="black")

# Mostrar y guardar
fig.show()
fig.write_html("grafico_especies_por_region.html")
