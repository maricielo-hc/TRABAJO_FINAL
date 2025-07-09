import json
import plotly.express as px

# Leer archivo .js y convertir a JSON
with open("estadisticas_especies.js", "r", encoding="utf-8") as f:
    contenido = f.read()

json_str = contenido.replace("const estadisticasEspecies = ", "").rstrip(";").strip()
especies = json.loads(json_str)

# Ordenar y seleccionar el top 15
especies_top = sorted(especies, key=lambda x: x["cantidad"], reverse=True)[:15]

# Gráfico de barras sin texto encima
fig = px.bar(
    especies_top,
    x="nombre_comun",
    y="cantidad",
    title="🐢🌿🌍 <b>Top 15 animales en peligro de extinción más observados en Perú</b>",
    labels={"nombre_comun": "Nombre común", "cantidad": "Cantidad de observaciones"},
    color="cantidad",
    color_continuous_scale="Reds"
)

# Estilo y eliminar números en las barras
fig.update_traces(texttemplate=None)  # 👈 Esto oculta los textos
fig.update_layout(
    xaxis_tickangle=-45,
    height=600,
    plot_bgcolor="white",
    paper_bgcolor="white",
    font=dict(size=13, family="Arial"),
    coloraxis_showscale=False,
    title=dict(
        x=0.5,
        xanchor="center",
        font=dict(size=24, color="#2c3e50")
    )
)

# Mostrar y guardar
fig.show()
fig.write_html("grafico_top_especies.html")
