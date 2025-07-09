import json
import pandas as pd
import plotly.express as px

# Leer archivo JS y limpiar encabezado
with open("estadisticas_especies.js", "r", encoding="utf-8") as f:
    contenido = f.read()

# Quitar encabezado JS y punto y coma final
json_str = contenido.replace("const estadisticasEspecies = ", "").strip().rstrip(";")

# Cargar JSON
data = json.loads(json_str)

# Convertir a DataFrame
df = pd.DataFrame(data)

# Agrupar por grupo
grupo_df = df.groupby("grupo", as_index=False)["cantidad"].sum()

# Ordenar por cantidad (ascendente para barras horizontales)
grupo_df = grupo_df.sort_values(by="cantidad", ascending=True)

# Crear gráfico de barras horizontales
fig = px.bar(
    grupo_df,
    x="cantidad",
    y="grupo",
    orientation="h",
    title="🦜 Especies observadas por tipo de especie en Perú",
    labels={"cantidad": "Cantidad observada", "grupo": "Grupo taxonómico"},
    color="grupo",
    color_discrete_sequence=px.colors.qualitative.Set2
)

# Estética del gráfico
fig.update_layout(
    title={
        "text": "🦜 Especies observadas por tipo de especie en Perú",
        "x": 0.5,  # Centrado (de 0 a 1)
        "xanchor": "center",
        "font": {"size": 24}  # Tamaño del título
    },
    height=500,
    plot_bgcolor="rgba(0,0,0,0)",
    paper_bgcolor="white",
    font=dict(size=13)
)

# Mostrar en Colab
fig.show()

# Guardar como HTML
fig.write_html("grafico_grupo_horizontal.html")
