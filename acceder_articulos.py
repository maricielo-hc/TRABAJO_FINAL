from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from bs4 import BeautifulSoup
import time
import json

URL = "https://es.mongabay.com/?s=&locations=latinoamerica+amazonia&topics=animales&formats=post+custom_story+podcasts+specials+short_article"
OUTPUT_FILE = "articulos.js"

def cargar_toda_la_pagina(driver):
    print("📥 Cargando artículos dinámicamente...")
    max_intentos = 20
    intentos = 0

    while intentos < max_intentos:
        soup = BeautifulSoup(driver.page_source, "html.parser")
        articulos_antes = len(soup.select("div.article--container"))

        try:
            boton = driver.find_element(By.CLASS_NAME, "load-more")
            driver.execute_script("arguments[0].scrollIntoView();", boton)
            time.sleep(1.5)

            # 🔧 Clic usando JavaScript
            driver.execute_script("arguments[0].click();", boton)
            print(f"🔁 Clic en 'Cargar más' (artículos hasta ahora: {articulos_antes})")
            time.sleep(3)

            articulos_despues = len(BeautifulSoup(driver.page_source, "html.parser").select("div.article--container"))
            if articulos_despues == articulos_antes:
                intentos += 1
                print(f"⏳ No hay nuevos artículos. Intento {intentos}")
                time.sleep(2)
            else:
                intentos = 0
        except NoSuchElementException:
            print("✅ No se encontró más el botón 'Cargar más'. Fin.")
            break

def extraer_articulos(html):
    soup = BeautifulSoup(html, "html.parser")
    contenedores = soup.select("div.article--container")
    articulos = []

    for cont in contenedores:
        a_tag = cont.find("a", href=True)
        url = a_tag["href"] if a_tag else ""

        titulo_tag = cont.select_one(".title h4")
        titulo = titulo_tag.get_text(strip=True) if titulo_tag else ""

        img_tag = cont.find("img")
        if img_tag:
            imagen = img_tag.get("src") or img_tag.get("data-src") or ""
        else:
            imagen = ""

        fecha_tag = cont.select_one(".post-meta .date")
        fecha = fecha_tag.get_text(strip=True) if fecha_tag else ""

        articulos.append({
            "titulo": titulo,
            "imagen": imagen,
            "fecha": fecha,
            "url": url
        })

    return articulos


def main():
    print(f"🌍 Abriendo: {URL}")
    chrome_options = Options()
    chrome_options.add_argument("--headless=new")
    chrome_options.add_argument("--disable-gpu")
    driver = webdriver.Chrome(options=chrome_options)
    driver.get(URL)

    cargar_toda_la_pagina(driver)

    print("🔍 Extrayendo artículos...")
    html = driver.page_source
    driver.quit()

    articulos = extraer_articulos(html)

    print(f"✅ Se extrajeron {len(articulos)} artículos.")
    # Guardar como archivo .js
    with open("articulos.js", "w", encoding="utf-8") as f:
        f.write("const articulos = ")
        json.dump(articulos, f, ensure_ascii=False, indent=2)
        f.write(";")

    print(f"\n✅ Se guardaron {len(articulos)} artículos en 'articulos.js'")


if __name__ == "__main__":
    main()

