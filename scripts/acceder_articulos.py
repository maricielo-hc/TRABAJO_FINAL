# Importación de librerías estándar
import time           # Para pausas y espera entre acciones
import json           # Para guardar los datos extraídos en formato JSON
import os             # Para manejar rutas de archivos y carpetas

# Importación de librerías externas
from bs4 import BeautifulSoup  # Para analizar el HTML y extraer información
from selenium import webdriver  # Para controlar el navegador automáticamente
from selenium.webdriver.chrome.options import Options  # Para configurar opciones del navegador
from selenium.webdriver.common.by import By  # Para ubicar elementos por selectores (como CSS o XPath)
from selenium.common.exceptions import NoSuchElementException  # Para manejar errores si un elemento no se encuentra

# URL objetivo: página de Mongabay con artículos sobre animales en la Amazonía latinoamericana
URL = "https://es.mongabay.com/?s=&locations=latinoamerica+amazonia&topics=animales&formats=post+custom_story+podcasts+specials+short_article"

# Ruta donde se guardará el archivo de salida en formato JavaScript
OUTPUT_FILE = "../js/articulos_Animales.js"

# ---------------------------------------------
# FUNCIONES PRINCIPALES
# ---------------------------------------------

# Función que configura el navegador para Selenium en modo "headless"
def configurar_driver():
    options = Options()
    options.add_argument("--headless")       # Ejecutar sin abrir ventana (modo invisible)
    options.add_argument("--disable-gpu")    # Desactivar gráficos (necesario en servidores)
    options.add_argument("--no-sandbox")     # Requerido en algunos entornos de Linux
    options.add_argument("--window-size=1920,1080")  # Tamaño de pantalla virtual
    options.binary_location = "/usr/bin/google-chrome"  # Ruta para Chrome (útil en GitHub Actions)
    return webdriver.Chrome(options=options)  # Retorna el navegador configurado

# Función para cargar todos los artículos con scroll infinito
def cargar_todos_los_articulos(driver):
    print(f"🌍 Abriendo: {URL}")
    driver.get(URL)           # Abrir la página en el navegador
    time.sleep(3)             # Esperar a que cargue la página

    total_anterior = 0
    intentos_sin_cambio = 0  # Contador de intentos sin nuevos artículos

    while True:
        # Obtener todos los contenedores de artículos en la página
        contenedores = driver.find_elements(By.CSS_SELECTOR, "div.article--container")
        total_actual = len(contenedores)

        try:
            # Intentar encontrar y hacer clic en el botón "Cargar más"
            boton = driver.find_element(By.CSS_SELECTOR, "button.load-more")
            driver.execute_script("arguments[0].scrollIntoView(true);", boton)  # Hacer scroll hasta el botón
            time.sleep(1)
            driver.execute_script("arguments[0].click();", boton)  # Hacer clic
            print(f"🔁 Clic en 'Cargar más' ({total_actual} artículos hasta ahora)")
            time.sleep(5)

            # Esperar hasta que se carguen más artículos (máx 10 intentos)
            for _ in range(10):
                nuevos = driver.find_elements(By.CSS_SELECTOR, "div.article--container")
                if len(nuevos) > total_actual:
                    break
                time.sleep(1)

        except NoSuchElementException:
            # Si no se encuentra el botón, se asume que no hay más artículos
            print("✅ No se encontró más el botón 'Cargar más'. Fin.")
            break

        # Si no se cargaron nuevos artículos, aumentar contador
        if total_actual == total_anterior:
            intentos_sin_cambio += 1
            print(f"⏳ Sin nuevos artículos. Intento {intentos_sin_cambio}")
        else:
            intentos_sin_cambio = 0  # Reiniciar si sí hubo cambio

        # Romper el bucle si ya van muchos intentos sin cambio
        if intentos_sin_cambio >= 5:
            print("🚫 Se alcanzó el límite de intentos sin cambios. Deteniendo.")
            break

        total_anterior = total_actual  # Actualizar contador de artículos

    return driver.page_source  # Devolver todo el HTML final de la página

# Función que analiza el HTML y extrae los datos de cada artículo
def extraer_articulos(html):
    soup = BeautifulSoup(html, "html.parser")  # Crear objeto BeautifulSoup
    contenedores = soup.select("div.article--container")  # Seleccionar todos los artículos
    articulos = []  # Lista donde se almacenarán los artículos

    for cont in contenedores:
        # Extraer URL del artículo
        a_tag = cont.find("a", href=True)
        url = a_tag["href"] if a_tag else ""

        # Extraer título
        titulo_tag = cont.select_one(".title h4")
        titulo = titulo_tag.get_text(strip=True) if titulo_tag else ""

        # Extraer imagen
        img_tag = cont.find("img")
        imagen = ""
        if img_tag:
            imagen = img_tag.get("src") or img_tag.get("data-src") or ""
            if not imagen and img_tag.has_attr("srcset"):
                # Si hay srcset, tomar el primer valor
                srcset = img_tag["srcset"].split(",")[0].strip()
                imagen = srcset.split(" ")[0]

        # Extraer fecha de publicación
        fecha_tag = cont.select_one(".post-meta .date")
        fecha = fecha_tag.get_text(strip=True) if fecha_tag else ""

        # Guardar el artículo solo si tiene los campos necesarios
        if titulo and url and imagen:
            articulos.append({
                "titulo": titulo,
                "imagen": imagen,
                "fecha": fecha,
                "url": url
            })

    return articulos  # Devolver lista de artículos

# Función que guarda los artículos como un archivo JS que define una variable `articulos`
def guardar_como_js(articulos):
    # Agregar entrada "fantasma" para marcar hora de actualización (útil en GitHub Pages)
    articulos.append({
        "titulo": f"Última actualización automática - {time.ctime()}",
        "imagen": "",
        "fecha": "",
        "url": "#"
    })

    # Guardar en formato JavaScript (como variable global)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("const articulos = ")  # Nombre de la variable
        json.dump(articulos, f, ensure_ascii=False, indent=2)  # Dump de JSON formateado
        f.write(";")  # Cierre de instrucción JS

    print(f"\n✅ Se guardaron {len(articulos)} artículos en '{OUTPUT_FILE}'")

# Función principal que ejecuta todo el flujo del programa
def main():
    driver = configurar_driver()                      # 1. Configurar navegador
    html = cargar_todos_los_articulos(driver)         # 2. Cargar todos los artículos con scroll
    driver.quit()                                     # 3. Cerrar navegador

    print("🔍 Extrayendo artículos...")
    articulos = extraer_articulos(html)               # 4. Analizar HTML y extraer artículos
    print(f"✅ Se extrajeron {len(articulos)} artículos.")
    guardar_como_js(articulos)                        # 5. Guardar los resultados en un archivo .js

# Ejecutar solo si se llama directamente (no cuando se importa)
if __name__ == "__main__":
    main()
