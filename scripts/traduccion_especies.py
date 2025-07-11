import json 
import requests
from bs4 import BeautifulSoup

# === Diccionario que traduce estados de conservación del inglés (y abreviaciones) al español ===
TRADUCCION_ESTADO = {
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

# Traduce el estado original usando el diccionario. Si no se encuentra, devuelve el original.
def traducir_estado(estado_original):
    return TRADUCCION_ESTADO.get(estado_original.strip(), estado_original)

# Verifica si una página de Wikipedia contiene una infobox biológica (de una especie real)
def es_infobox_de_especie(soup):
    infobox = soup.select_one("table.infobox")
    if not infobox:
        return False
    cabecera = infobox.select_one("th.cabecera")
    if not cabecera or not cabecera.get_text(strip=True):
        return False
    etiquetas_clave = {"Reino", "Clase", "Filo", "Orden", "Familia", "Género", "Especie"}
    for fila in infobox.find_all("tr"):
        celda = fila.find("th")
        if celda and any(et in celda.get_text() for et in etiquetas_clave):
            return True
    return False

# Busca el nombre común en español en Wikipedia, solo si la infobox es válida
def obtener_nombre_wikipedia_infobox(nombre_cientifico):
    try:
        search_url = "https://es.wikipedia.org/w/api.php"
        params = {
            "action": "query",
            "list": "search",
            "srsearch": nombre_cientifico,
            "format": "json"
        }
        r = requests.get(search_url, params=params)
        resultados = r.json().get("query", {}).get("search", [])
        if not resultados:
            return None
        titulo = resultados[0]["title"]
        url = f"https://es.wikipedia.org/wiki/{titulo.replace(' ', '_')}"
        html = requests.get(url).text
        soup = BeautifulSoup(html, "html.parser")
        if not es_infobox_de_especie(soup):
            return None
        th = soup.select_one("table.infobox th.cabecera")
        if th:
            return th.get_text(strip=True)
        return None
    except Exception as e:
        print(f"[Wikipedia] {nombre_cientifico}: {e}")
        return None

# Busca el nombre común en español desde la API de GBIF
def obtener_nombre_gbif(nombre_cientifico):
    try:
        match_url = f"https://api.gbif.org/v1/species/match?name={nombre_cientifico}"
        match = requests.get(match_url).json()
        key = match.get("usageKey")
        if not key:
            return None
        vernacular_url = f"https://api.gbif.org/v1/species/{key}/vernacularNames"
        data = requests.get(vernacular_url).json()
        for item in data.get("results", []):
            if item.get("language") == "spa":
                return item.get("vernacularName")
        return None
    except Exception as e:
        print(f"[GBIF] {nombre_cientifico}: {e}")
        return None

# Busca el nombre común en español usando iNaturalist
def obtener_nombre_inaturalist(nombre_cientifico):
    try:
        url = f"https://api.inaturalist.org/v1/taxa?q={nombre_cientifico}"
        r = requests.get(url).json()
        if not r["results"]:
            return None
        taxon = r["results"][0]
        for n in taxon.get("names", []):
            if n.get("locale") == "es":
                return n.get("name")
        return None
    except Exception as e:
        print(f"[iNaturalist] {nombre_cientifico}: {e}")
        return None

# === Cargar el archivo de especies original ===
with open("especies.js", "r", encoding="utf-8") as f:
    contenido = f.read()

# Extrae el arreglo JSON del archivo JavaScript
inicio = contenido.find("[")
fin = contenido.rfind("]")
json_texto = contenido[inicio : fin + 1]
especies = json.loads(json_texto)

# === Procesar cada especie ===
for especie in especies:
    cientifico = especie.get("nombre_cientifico", "")
    nombre_en = especie.get("nombre_comun", "")
    estado_original = especie.get("estado", "")

    # Intenta obtener el nombre en español de Wikipedia, GBIF, iNaturalist (en ese orden)
    nombre_es = obtener_nombre_wikipedia_infobox(cientifico)
    if not nombre_es:
        nombre_es = obtener_nombre_gbif(cientifico)
    if not nombre_es:
        nombre_es = obtener_nombre_inaturalist(cientifico)
    if not nombre_es:
        nombre_es = nombre_en  # si no encuentra, deja el nombre en inglés

    especie["nombre_comun_es"] = nombre_es
    especie["estado"] = traducir_estado(estado_original)

    print(f"✅ {cientifico} ➜ {nombre_es} | Estado: {especie['estado']}")

# === Guardar el nuevo archivo traducido ===
with open("especies_traducidas.js", "w", encoding="utf-8") as f:
    f.write("especies = ")
    json.dump(especies, f, indent=2, ensure_ascii=False)

print("✅ Finalizado: Wikipedia (validada) → GBIF → iNaturalist → nombre original.")




