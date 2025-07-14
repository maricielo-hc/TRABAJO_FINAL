# Importar librerías necesarias
import json                     # Para manejar y guardar datos en formato JSON
import requests                 # Para hacer solicitudes HTTP a APIs
from bs4 import BeautifulSoup   # Para analizar y extraer datos de HTML

# === Diccionario que traduce estados de conservación del inglés al español ===
TRADUCCION_ESTADO = {
    # Traducciones directas de la IUCN y otras abreviaciones frecuentes
    "Critically Endangered": "En peligro crítico",
    "Endangered": "En peligro",
    "Endangered (S/A)": "En peligro según la similitud de apariencia",
    "Threatened": "Amenazada",
    "Threatened (S/A)": "Amenazada según la similitud de apariencia",
    "Vulnerable": "Vulnerable",
    "Near Threatened": "Casi amenazada",
    "Least Concern": "Preocupación menor",
    "Data Deficient": "Datos insuficientes",
    "Extinct": "Extinta",
    "Extinct in the Wild": "Extinta en estado silvestre",
    "EX": "Extinta",
    "EW": "Extinta en estado silvestre",
    "NX": "Extinta a nivel nacional",
    "XN": "Población experimental no esencial",
    "XE": "Población experimental esencial",
    "DD": "Datos insuficientes",
    "NT": "Casi amenazada",
    "LC": "Preocupación menor",
    "VU": "Vulnerable",
    "EN": "En peligro",
    "CR": "En peligro crítico"
}

# === Función para traducir estado de conservación usando el diccionario anterior ===
def traducir_estado(estado_original):
    # Si el estado existe en el diccionario, devuelve su traducción; si no, lo deja igual
    return TRADUCCION_ESTADO.get(estado_original.strip(), estado_original)

# === Verifica si la página de Wikipedia contiene una infobox válida de una especie ===
def es_infobox_de_especie(soup):
    infobox = soup.select_one("table.infobox")  # Buscar la tabla infobox
    if not infobox:
        return False

    cabecera = infobox.select_one("th.cabecera")  # Verifica si tiene cabecera
    if not cabecera or not cabecera.get_text(strip=True):
        return False

    # Verifica si tiene al menos uno de los campos biológicos comunes
    etiquetas_clave = {"Reino", "Clase", "Filo", "Orden", "Familia", "Género", "Especie"}
    for fila in infobox.find_all("tr"):
        celda = fila.find("th")
        if celda and any(et in celda.get_text() for et in etiquetas_clave):
            return True

    return False  # Si no encuentra nada relevante, no es válida

# === Obtiene el nombre común en español desde la infobox de Wikipedia ===
def obtener_nombre_wikipedia_infobox(nombre_cientifico):
    try:
        # Consulta a la API de Wikipedia en español
        search_url = "https://es.wikipedia.org/w/api.php"
        params = {
            "action": "query",
            "list": "search",
            "srsearch": nombre_cientifico,
            "format": "json"
        }

        # Buscar artículo relacionado al nombre científico
        r = requests.get(search_url, params=params)
        resultados = r.json().get("query", {}).get("search", [])

        if not resultados:
            return None

        # Obtener el título del primer resultado
        titulo = resultados[0]["title"]
        url = f"https://es.wikipedia.org/wiki/{titulo.replace(' ', '_')}"
        html = requests.get(url).text
        soup = BeautifulSoup(html, "html.parser")

        # Validar que sea una infobox de especie biológica
        if not es_infobox_de_especie(soup):
            return None

        # Extraer el nombre común desde la cabecera
        th = soup.select_one("table.infobox th.cabecera")
        if th:
            return th.get_text(strip=True)

        return None
    except Exception as e:
        print(f"[Wikipedia] {nombre_cientifico}: {e}")
        return None

# === Obtiene el nombre común desde la API de GBIF (Global Biodiversity Information Facility) ===
def obtener_nombre_gbif(nombre_cientifico):
    try:
        # Buscar el identificador de la especie (usageKey)
        match_url = f"https://api.gbif.org/v1/species/match?name={nombre_cientifico}"
        match = requests.get(match_url).json()
        key = match.get("usageKey")
        if not key:
            return None

        # Usar el identificador para buscar nombres comunes
        vernacular_url = f"https://api.gbif.org/v1/species/{key}/vernacularNames"
        data = requests.get(vernacular_url).json()

        # Filtrar por idioma español
        for item in data.get("results", []):
            if item.get("language") == "spa":
                return item.get("vernacularName")

        return None
    except Exception as e:
        print(f"[GBIF] {nombre_cientifico}: {e}")
        return None

# === Obtiene el nombre común en español desde la API de iNaturalist ===
def obtener_nombre_inaturalist(nombre_cientifico):
    try:
        url = f"https://api.inaturalist.org/v1/taxa?q={nombre_cientifico}"
        r = requests.get(url).json()

        if not r["results"]:
            return None

        taxon = r["results"][0]
        # Buscar nombre común con idioma español (es)
        for n in taxon.get("names", []):
            if n.get("locale") == "es":
                return n.get("name")

        return None
    except Exception as e:
        print(f"[iNaturalist] {nombre_cientifico}: {e}")
        return None

# === Cargar el archivo original de especies (en formato JavaScript) ===
with open("especies.js", "r", encoding="utf-8") as f:
    contenido = f.read()

# Extraer el arreglo JSON desde el archivo JavaScript
inicio = contenido.find("[")
fin = contenido.rfind("]")
json_texto = contenido[inicio : fin + 1]  # Extrae solo el contenido JSON
especies = json.loads(json_texto)         # Carga como lista de diccionarios

# === Procesar cada especie en la lista ===
for especie in especies:
    cientifico = especie.get("nombre_cientifico", "")     # Nombre científico
    nombre_en = especie.get("nombre_comun", "")           # Nombre común original (en inglés)
    estado_original = especie.get("estado", "")           # Estado de conservación original

    # Intentar obtener el nombre común en español usando Wikipedia, GBIF e iNaturalist (en ese orden)
    nombre_es = obtener_nombre_wikipedia_infobox(cientifico)
    if not nombre_es:
        nombre_es = obtener_nombre_gbif(cientifico)
    if not nombre_es:
        nombre_es = obtener_nombre_inaturalist(cientifico)
    if not nombre_es:
        nombre_es = nombre_en  # Si no se encuentra, usar el nombre en inglés

    # Guardar el nombre traducido y el estado traducido
    especie["nombre_comun_es"] = nombre_es
    especie["estado"] = traducir_estado(estado_original)

    # Imprimir resultado en consola
    print(f"✅ {cientifico} ➜ {nombre_es} | Estado: {especie['estado']}")

# === Guardar el nuevo archivo con los nombres traducidos ===
with open("especies_traducidas.js", "w", encoding="utf-8") as f:
    f.write("especies = ")  # Definir la variable para JavaScript
    json.dump(especies, f, indent=2, ensure_ascii=False)  # Guardar como JSON legible

print("✅ Finalizado: Wikipedia (validada) → GBIF → iNaturalist → nombre original.")
