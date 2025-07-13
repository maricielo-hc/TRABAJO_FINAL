import time
import json
import os  # 👈 Asegúrate de importar esto
from bs4 import BeautifulSoup
import time
import json
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException

URL = "https://es.mongabay.com/?s=&locations=latinoamerica+amazonia&topics=animales&formats=post+custom_story+podcasts+specials+short_article"
OUTPUT_FILE = "../js/articulos_Animales.js"

def configurar_driver():
    options = Options()
    options.add_argument("--headless")  # Modo sin interfaz
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("--window-size=1920,1080")
    options.binary_location = "/usr/bin/google-chrome"  # Necesario para GitHub Actions
    return webdriver.Chrome(options=options)

def cargar_todos_los_articulos(driver):
    print(f"🌍 Abriendo: {URL}")
    driver.get(URL)
    time.sleep(3)

    total_anterior = 0
    intentos_sin_cambio = 0

    while True:
        contenedores = driver.find_elements(By.CSS_SELECTOR, "div.article--container")
        total_actual = len(contenedores)

        try:
            boton = driver.find_element(By.CSS_SELECTOR, "button.load-more")
            driver.execute_script("arguments[0].scrollIntoView(true);", boton)
            time.sleep(1)
            driver.execute_script("arguments[0].click();", boton)
            print(f"🔁 Clic en 'Cargar más' ({total_actual} artículos hasta ahora)")
            time.sleep(5)

            # Esperar a que cargue más
            for _ in range(10):
                nuevos = driver.find_elements(By.CSS_SELECTOR, "div.article--container")
                if len(nuevos) > total_actual:
                    break
                time.sleep(1)

        except NoSuchElementException:
            print("✅ No se encontró más el botón 'Cargar más'. Fin.")
            break

        if total_actual == total_anterior:
            intentos_sin_cambio += 1
            print(f"⏳ Sin nuevos artículos. Intento {intentos_sin_cambio}")
        else:
            intentos_sin_cambio = 0

        if intentos_sin_cambio >= 5:
            print("🚫 Se alcanzó el límite de intentos sin cambios. Deteniendo.")
            break

        total_anterior = total_actual

    return driver.page_source

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
        imagen = ""
        if img_tag:
            imagen = img_tag.get("src") or img_tag.get("data-src") or ""
            if not imagen and img_tag.has_attr("srcset"):
                srcset = img_tag["srcset"].split(",")[0].strip()
                imagen = srcset.split(" ")[0]

        fecha_tag = cont.select_one(".post-meta .date")
        fecha = fecha_tag.get_text(strip=True) if fecha_tag else ""

        if titulo and url and imagen:
            articulos.append({
                "titulo": titulo,
                "imagen": imagen,
                "fecha": fecha,
                "url": url
            })

    return articulos

def guardar_como_js(articulos):
    # Entrada fantasma con la hora para forzar commit en GitHub
    articulos.append({
        "titulo": f"Última actualización automática - {time.ctime()}",
        "imagen": "",
        "fecha": "",
        "url": "#"
    })

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("const articulos = ")
        json.dump(articulos, f, ensure_ascii=False, indent=2)
        f.write(";")

    print(f"\n✅ Se guardaron {len(articulos)} artículos en '{OUTPUT_FILE}'")

def main():
    driver = configurar_driver()
    html = cargar_todos_los_articulos(driver)
    driver.quit()

    print("🔍 Extrayendo artículos...")
    articulos = extraer_articulos(html)
    print(f"✅ Se extrajeron {len(articulos)} artículos.")
    guardar_como_js(articulos)

if __name__ == "__main__":
    main()
