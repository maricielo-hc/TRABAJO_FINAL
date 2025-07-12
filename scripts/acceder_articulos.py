import time
import json
import os
import sys
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from webdriver_manager.chrome import ChromeDriverManager

import subprocess
print("=== DEPENDENCIAS INSTALADAS ===")
subprocess.run(["pip", "list"], check=True)
print("\n=== CHROMIUM VERSION ===")
subprocess.run(["chromium-browser", "--version"], check=True)

URL = "https://es.mongabay.com/?s=&locations=latinoamerica+amazonia&topics=animales&formats=post+custom_story+podcasts+specials+short_article"
OUTPUT_FILE = "js/articulos.js" if os.path.exists("js") else "../js/articulos.js"

# Reemplaza la configuración del driver con esta versión más robusta
def configurar_driver():
    options = Options()
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    
    # Opción 1: Usar ChromeDriverManager
    try:
        from webdriver_manager.chrome import ChromeDriverManager
        service = Service(ChromeDriverManager().install())
        return webdriver.Chrome(service=service, options=options)
    except:
        # Opción 2: Fallback a chromedriver del sistema
        return webdriver.Chrome(options=options)

def cargar_todos_los_articulos(driver):
    """Carga todos los artículos haciendo clic en el botón 'Cargar más'"""
    print(f"🌍 Abriendo: {URL}")
    try:
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

                # Esperar hasta que cambie la cantidad de artículos
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
    
    except Exception as e:
        print(f"⚠️ Error al cargar artículos: {str(e)}")
        return driver.page_source  # Devuelve lo que haya podido cargar

def extraer_articulos(html):
    """Extrae la información de los artículos del HTML"""
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
    """Guarda los artículos en formato JS"""
    # Agrega una entrada de última actualización
    articulos.append({
        "titulo": f"Última actualización automática - {time.ctime()}",
        "imagen": "",
        "fecha": "",
        "url": "#"
    })

    # Asegura que el directorio existe
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("const articulos = ")
        json.dump(articulos, f, ensure_ascii=False, indent=2)
        f.write(";")

    print(f"\n✅ Se guardaron {len(articulos)} artículos en '{os.path.abspath(OUTPUT_FILE)}'")

def main():
    try:
        driver = configurar_driver()
        html = cargar_todos_los_articulos(driver)
        
        print("🔍 Extrayendo artículos...")
        articulos = extraer_articulos(html)
        print(f"✅ Se extrajeron {len(articulos)} artículos.")
        
        guardar_como_js(articulos)
        return 0
    except Exception as e:
        print(f"❌ Error crítico: {str(e)}", file=sys.stderr)
        return 1
    finally:
        if 'driver' in locals():
            driver.quit()

if __name__ == "__main__":
    sys.exit(main())