import time
import json
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.common.exceptions import ElementClickInterceptedException, NoSuchElementException

URL = "https://es.mongabay.com/?s=&locations=latinoamerica+amazonia&topics=animales&formats=post+custom_story+podcasts+specials+short_article"
OUTPUT_FILE = "articulos.js"

def configurar_driver():
    options = Options()
    options.add_argument("--headless")  # Opcional: ocultar navegador
    options.add_argument("--disable-gpu")
    options.add_argument("--window-size=1920,1080")
    return webdriver.Chrome(options=options)

def cargar_todos_los_articulos(driver):
    print(f"🌍 Abriendo: {URL}")
    driver.get(URL)
    time.sleep(2)

    total_anterior = 0
    intentos_sin_cambio = 0

    while True:
        # Scroll hasta el final
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(2)

        try:
            boton = driver.find_element(By.CSS_SELECTOR, "button.load-more")
            driver.execute_script("arguments[0].scrollIntoView(true);", boton)
            time.sleep(1)

            # ✅ Hacemos clic con JavaScript para evitar interferencias visuales
            driver.execute_script("arguments[0].click();", boton)
            print("🔁 Clic en 'Cargar más'")
            time.sleep(3)

        except NoSuchElementException:
            print("✅ No se encontró más el botón 'Cargar más'. Fin.")
            break

        # Verificación de si hubo cambio
        contenedores = driver.find_elements(By.CSS_SELECTOR, "div.article--container")
        total_actual = len(contenedores)

        if total_actual == total_anterior:
            intentos_sin_cambio += 1
            print(f"⏳ No hay nuevos artículos. Intento {intentos_sin_cambio}")
        else:
            intentos_sin_cambio = 0

        if intentos_sin_cambio >= 3:
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

        # Imagen desde src, data-src o srcset
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
    with open("articulos.js", "w", encoding="utf-8") as f:
        f.write("const articulos = ")
        json.dump(articulos, f, ensure_ascii=False, indent=2)
        f.write(";")
    print(f"\n✅ Se guardaron {len(articulos)} artículos en '{articulos}'")

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
