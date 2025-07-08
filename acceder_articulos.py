import requests
from bs4 import BeautifulSoup
import json
import time

BASE_URL = "https://news.mongabay.com/list/endangered-species/page/{}/"
HEADERS = {"User-Agent": "Mozilla/5.0"}

# Palabras clave para excluir (relacionadas a plantas, árboles, corales, etc.)
PALABRAS_EXCLUIDAS = [
    "plant", "tree", "flora", "forest", "mangrove", "peat", "reef", "coral",
    "mushroom", "fungi", "grain", "crop", "rice", "soy", "sugar", "wheat",
    "maize", "corn", "coffee", "cacao", "cocoa", "bean", "timber", "banana",
    "bamboo", "coconut", "fruit", "vegetable", "oil palm", "palma aceitera"
]

def contiene_palabra_excluida(texto):
    texto = texto.lower()
    return any(palabra in texto for palabra in PALABRAS_EXCLUIDAS)

def extraer_articulos_de_pagina(html):
    soup = BeautifulSoup(html, "html.parser")
    contenedores = soup.find_all("div", class_="article--container")
    articulos = []

    for cont in contenedores:
        a_tag = cont.find("a", href=True)
        if not a_tag:
            continue

        url = a_tag["href"]

        titulo_tag = cont.find("div", class_="title")
        titulo = titulo_tag.get_text(strip=True) if titulo_tag else ""

        if contiene_palabra_excluida(titulo):
            continue  # saltar si trata sobre plantas, cultivos, etc.

        img_tag = cont.find("img")
        imagen = img_tag["src"] if img_tag else ""

        fecha_tag = cont.find("span", class_="date")
        fecha = fecha_tag.get_text(strip=True) if fecha_tag else ""

        articulos.append({
            "titulo": titulo,
            "imagen": imagen,
            "fecha": fecha,
            "url": url
        })

    return articulos

def obtener_articulos(paginas=143):
    todos = []
    for i in range(1, paginas + 1):
        url = BASE_URL.format(i)
        print(f"🌐 Procesando: {url}")
        try:
            res = requests.get(url, headers=HEADERS, timeout=10)
            if res.status_code != 200:
                print(f"❌ Error en página {i}: Código {res.status_code}")
                continue

            articulos = extraer_articulos_de_pagina(res.text)
            print(f"✅ Página {i}: {len(articulos)} artículos válidos encontrados")
            todos.extend(articulos)
            time.sleep(1)
        except Exception as e:
            print(f"❌ Error procesando página {i}: {e}")

    # Guardar como archivo .js
    with open("articulos.js", "w", encoding="utf-8") as f:
        f.write("const articulos = ")
        json.dump(todos, f, ensure_ascii=False, indent=2)
        f.write(";")

    print(f"\n✅ Se guardaron {len(todos)} artículos en 'articulos.js'")

if __name__ == "__main__":
    obtener_articulos(paginas=143)
