import time
import json
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.common.exceptions import ElementClickInterceptedException, NoSuchElementException

# URL de búsqueda de artículos en Mongabay filtrados por Latinoamérica, Amazonía y tema "animales"
URL = "https://es.mongabay.com/?s=&locations=latinoamerica+amazonia&topics=animales&formats=post+custom_story+podcasts+specials+short_article"

# Nombre del archivo de salida
OUTPUT_FILE = "articulos.js"

# Función para configurar el navegador Chrome en modo "headless" (sin interfaz gráfica)
def configurar_driver():
    options = Options()
    options.add_argument("--headless")      # Ejecutar sin ventana
    options.add_argument("--disable-gpu")   # Desactivar aceleración gráfica
    options.add_argument("--window-size=1920,1080")  # Tamaño de ventana estándar
    return webdriver.Chrome(options=options)

# Función para abrir la página y hacer clic repetidamente en "Cargar más" hasta que no haya más artículos
def cargar_todos_los_articulos(driver):
    print(f"🌍 Abriendo: {URL}")
    driver.get(URL)
    time.sleep(2)  # Espera que cargue la página inicial

    total_anterior = 0
    intentos_sin_cambio = 0  # Controla si ya no aparecen artículos nuevos

    while True:
        # Hacer scroll al final de la página para cargar más contenido
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(2)

        try:
            # Buscar y hacer clic en el botón "Cargar más"
            boton = driver.find_element(By.CSS_SELECTOR, "button.load-more")
            driver.execute_script("arguments[0].scrollIntoView(true);", boton)
            time.sleep(1)
            driver.execute_script("arguments[0].click();", boton)
            print("🔁 Clic en 'Cargar más'")
            time.sleep(3)

        except NoSuchElementException:
            # Si no hay más botón, se terminó la carga
            print("✅ No se encontró más el botón 'Cargar más'. Fin.")
            break

        # Verificamos si realmente se cargaron nuevos artículos
        contenedores = driver.find_elements(By.CSS_SELECTOR, "div.article--container")
        total_actual = len(contenedores)

        if total_actual == total_anterior:
            intentos_sin_cambio += 1
            print(f"⏳ No hay nuevos artículos. Intento {intentos_sin_cambio}")
        else:
            intentos_sin_cambio = 0  # Reinicia el contador si sí hubo cambios

        if intentos_sin_cambio >= 3:
            break  # Rompe el bucle si ya no hay nuevos artículos tras 3 intentos

        total_anterior = total_actual  # Actualiza el total para la siguiente iteración

    return driver.page_source  # Devuelve todo el HTML cargado

# Función para extraer los artículos desde el HTML usando BeautifulSoup
def extraer_articulos(html):
    soup = BeautifulSoup(html, "html.parser")
    contenedores = soup.select("div.article--container")  # Todos los artículos visuales
    articulos = []

    for cont in contenedores:
        # Extrae la URL del artículo
        a_tag = cont.find("a", href=True)
        url = a_tag["href"] if a_tag else ""

        # Extrae el título
        titulo_tag = cont.select_one(".title h4")
        titulo = titulo_tag.get_text(strip=True) if titulo_tag else ""

        # Extrae la imagen: puede estar en src, data-src o srcset
        img_tag = cont.find("img")
        imagen = ""
        if img_tag:
            imagen = img_tag.get("src") or img_tag.get("data-src") or ""
            if not imagen and img_tag.has_attr("srcset"):
                srcset = img_tag["srcset"].split(",")[0].strip()
                imagen = srcset.split(" ")[0]

        # Extrae la fecha de publicación
        fecha_tag = cont.select_one(".post-meta .date")
        fecha = fecha_tag.get_text(strip=True) if fecha_tag else ""

        # Solo guarda artículos completos con título, imagen y url
        if titulo and url and imagen:
            articulos.append({
                "titulo": titulo,
                "imagen": imagen,
                "fecha": fecha,
                "url": url
            })

    return articulos

# Función para guardar la lista de artículos en un archivo JavaScript como una variable JS
def guardar_como_js(articulos):
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("const articulos = ")
        json.dump(articulos, f, ensure_ascii=False, indent=2)  # Guarda el JSON con indentado legible
        f.write(";")
    print(f"\n✅ Se guardaron {len(articulos)} artículos en '{OUTPUT_FILE}'")

# Función principal que orquesta todo el flujo
def main():
    driver = configurar_driver()            # Configura Selenium
    html = cargar_todos_los_articulos(driver)  # Carga todo el contenido dinámico
    driver.quit()                           # Cierra el navegador

    print("🔍 Extrayendo artículos...")
    articulos = extraer_articulos(html)     # Extrae la info del HTML
    print(f"✅ Se extrajeron {len(articulos)} artículos.")
    guardar_como_js(articulos)              # Guarda como JS

# Ejecuta el script si es llamado directamente (no importado)
if __name__ == "__main__":
    main()

