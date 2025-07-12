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

# Intenta importar webdriver_manager, si falla usa chromedriver del sistema
try:
    from webdriver_manager.chrome import ChromeDriverManager
    USE_DRIVER_MANAGER = True
except ImportError:
    USE_DRIVER_MANAGER = False
    print("⚠️ webdriver_manager no encontrado, usando chromedriver del sistema")

URL = "https://es.mongabay.com/?s=&locations=latinoamerica+amazonia&topics=animales&formats=post+custom_story+podcasts+specials+short_article"
OUTPUT_FILE = os.path.join("..", "js", "articulos.js")

def configurar_driver():
    options = Options()
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    
    if USE_DRIVER_MANAGER:
        service = Service(ChromeDriverManager().install())
    else:
        # Usa chromedriver del sistema (instalado por apt-get)
        service = Service(executable_path="/usr/bin/chromedriver")
    
    return webdriver.Chrome(service=service, options=options)

# ... (resto de tus funciones existentes)

def main():
    try:
        print("=== INICIANDO SCRAPER ===")
        print(f"Python path: {sys.executable}")
        print(f"Working dir: {os.getcwd()}")
        
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