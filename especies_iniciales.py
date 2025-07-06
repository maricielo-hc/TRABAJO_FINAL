import requests
from bs4 import BeautifulSoup
import json
import time
from urllib.parse import quote

def obtener_info_wikidata(nombre_cientifico):
    url_busqueda = "https://www.wikidata.org/w/api.php"
    headers = {"User-Agent": "bot-especies-chatgpt"}

    params = {
        "action": "wbsearchentities",
        "search": nombre_cientifico,
        "language": "es",
        "format": "json",
        "type": "item"
    }

    res = requests.get(url_busqueda, params=params, headers=headers)
    if res.status_code != 200 or not res.json().get("search"):
        return None, None

    qid = res.json()["search"][0]["id"]
    url_entidad = f"https://www.wikidata.org/wiki/Special:EntityData/{qid}.json"
    data = requests.get(url_entidad, headers=headers).json()
    entidad = data["entities"][qid]

    desc = entidad.get("descriptions", {}).get("es", {}).get("value") or \
           entidad.get("descriptions", {}).get("en", {}).get("value")

    imagen_nombre = entidad.get("claims", {}).get("P18", [{}])[0].get("mainsnak", {}).get("datavalue", {}).get("value", "")
    if imagen_nombre:
        nombre_formateado = quote(imagen_nombre.replace(" ", "_"))
        url_imagen = f"https://commons.wikimedia.org/wiki/Special:FilePath/{nombre_formateado}?width=300"
    else:
        url_imagen = ""

    if not url_imagen:
        return None, None

    return desc or "Sin descripción", url_imagen


# SCRAPING AWI

url = "https://awionline.org/content/list-endangered-species"
res = requests.get(url)
soup = BeautifulSoup(res.text, "html.parser")

rows = soup.select("table tr")
species = []
vistos = set()

traducciones_tipo = {
    "Mammals": "Mamíferos",
    "Birds": "Aves",
    "Reptiles": "Reptiles",
    "Fishes": "Peces",
    "Amphibians": "Anfibios",
    "Insects": "Insectos"
}

print("🔍 Enriqueciendo especies...")
contador_total = 0
sin_imagen = 0

for i, row in enumerate(rows):
    cols = row.find_all("td")
    if len(cols) == 4:
        common = cols[0].get_text(strip=True)
        scientific = cols[1].get_text(strip=True)
        status = cols[2].get_text(strip=True)
        group = cols[3].get_text(strip=True)

        if scientific in vistos:
            continue
        vistos.add(scientific)
        contador_total += 1

        descripcion, imagen = obtener_info_wikidata(scientific)
        if not imagen:
            sin_imagen += 1
            continue

        print(f"{len(species)+1}. ✅ {scientific}")

        species.append({
            "nombre_comun": common,
            "nombre_cientifico": scientific,
            "estado": status,
            "tipo": traducciones_tipo.get(group, group),
            "descripcion": descripcion,
            "imagen": imagen
        })

        time.sleep(1.2)

print(f"\n✅ Total encontrados: {contador_total}")
print(f"✅ Con imagen (incluidos): {len(species)}")
print(f"❌ Sin imagen (descartados): {sin_imagen}")


# GUARDAR COMO especies.js

filename = "especies.js"
with open(filename, "w", encoding="utf-8") as f:
    f.write("const especies = ")
    json.dump(species, f, ensure_ascii=False, indent=2)
    f.write(";")

print(f"\n📦 Archivo '{filename}' generado correctamente.")
