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

# Configuración de importación alternativa
try:
    from webdriver_manager.chrome import ChromeDriverManager
    USE_DRIVER_MANAGER = True
except ImportError:
    USE_DRIVER_MANAGER = False
    print("⚠️ webdriver_manager no encontrado, usando chromedriver del sistema")

URL = "https://es.mongabay.com/?s=&locations=latinoamerica+amazonia&topics=animales&formats=post+custom_story+podcasts+specials+short_article"
OUTPUT_FILE = os.path.join("js", "articulos.js")

def configurar_driver():
    """Configura el navegador Chrome para scraping"""
    options = Options()
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    
    if USE_DRIVER_MANAGER:
        service = Service(ChromeDriverManager().install())
    else:
        service = Service(executable_path="/usr/bin/chromedriver")
    
    return webdriver.Chrome(service=service, options=options)

def cargar_todos_los_articulos(driver):
    """Carga todos los artículos haciendo clic en 'Cargar más'"""
    print(f"🌍 Abriendo URL: {URL}")
    driver.get(URL)
    time.sleep(3)

    total_articulos = 0
    intentos = 0

    while intentos < 5:
        articulos = driver.find_elements(By.CSS_SELECTOR, "div.article--container")
        
        if len(articulos) > total_articulos:
            total_articulos = len(articulos)
            intentos = 0
        else:
            intentos += 1

        try:
            boton = driver.find_element(By.CSS_SELECTOR, "button.load-more")
            driver.execute_script("arguments[0].click();", boton)
            time.sleep(3)
        except NoSuchElementException:
            break

    return driver.page_source

def extraer_articulos(html):
    """Extrae información de artículos del HTML con manejo seguro de atributos"""
    soup = BeautifulSoup(html, "html.parser")
    articulos = []

    for articulo in soup.select("div.article--container"):
        try:
            # Extracción segura del título
            titulo_elem = articulo.select_one(".title h4")
            titulo = titulo_elem.get_text(strip=True) if titulo_elem else "Sin título"
            
            # Extracción segura del enlace
            enlace_elem = articulo.find("a")
            enlace = enlace_elem["href"] if enlace_elem and enlace_elem.has_attr("href") else "#"
            
            # Extracción segura de la imagen
            imagen_elem = articulo.find("img")
            imagen = ""
            if imagen_elem:
                if imagen_elem.has_attr("src"):
                    imagen = imagen_elem["src"]
                elif imagen_elem.has_attr("data-src"):
                    imagen = imagen_elem["data-src"]
            
            # Extracción segura de la fecha
            fecha_elem = articulo.select_one(".post-meta .date")
            fecha = fecha_elem.get_text(strip=True) if fecha_elem else "Fecha no disponible"

            if titulo and enlace:
                articulos.append({
                    "titulo": titulo,
                    "url": enlace,
                    "imagen": imagen,
                    "fecha": fecha
                })
        except Exception as e:
            print(f"⚠️ Error procesando artículo: {str(e)}")
            continue

    return articulos

def guardar_como_js(articulos):
    """Guarda los artículos en formato JS"""
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("const articulos = ")
        json.dump(articulos, f, ensure_ascii=False, indent=2)
        f.write(";")
    
    print(f"✅ Guardados {len(articulos)} artículos en {OUTPUT_FILE}")

def main():
    try:
        print("=== INICIANDO SCRAPER ===")
        print(f"Python path: {sys.executable}")
        print(f"Working dir: {os.getcwd()}")
        
        driver = configurar_driver()
        html = cargar_todos_los_articulos(driver)
        articulos = extraer_articulos(html)
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