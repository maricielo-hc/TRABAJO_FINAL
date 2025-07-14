
# 🐾 **SISTEMA DE IDENTIFICACIÓN DE ANIMALES EN PELIGRO DE EXTINCIÓN**

---  
Este proyecto es una página web interactiva dedicada a mostrar información actualizada sobre los animales en peligro de extinción, con énfasis en  y **articulos actuales**. Utiliza tecnologías web simples y automatización en segundo plano para mantenerse actualizado sin intervención manual.
  
## 🧠 ¿Qué ofrece esta web?    
- ✅ **Identificación automatizada** de especies amenazadas a partir de datos confiables y actualizados.
- 🌋 **Visualización de eventos naturales recientes** como incendios y sismos cercanos a los avistamientos de especies .
- 📰 **Noticias sobre especies en peligro** extraídas desde fuentes confiables.
- 🧩 Código limpio y organizado en módulos Python y HTML/CSS/JS.
- 🗺️ **Visualización interactiva** con gráficos y mapas que muestran zonas de distribución y nivel de amenaza, facilitando la comprensión para diversos públicos.  
Puedes ver la web en vivo aquí:  
👉 [GeoVida](https://maricielo-hc.github.io/TRABAJO_FINAL/index.html)      
---

## 🌍 Relevancia del Proyecto

- 🆘 **Contexto actual de crisis ecológica:** En un momento crítico de pérdida acelerada de biodiversidad, contar con herramientas tecnológicas que integren y comuniquen información actualizada es vital para proteger el equilibrio ecológico.
- 💡 Promueve el **uso de tecnologías sostenibles**, demostrando cómo la programación y el análisis de datos pueden ser aliados de la conservación ambiental.

![Habitat](imagenes/HABITAT.jpg)

---

## 🌐 **Fuentes de Datos**
---  
### 📰 Mongabay Latinoamérica – Noticias sobre fauna y medio ambiente
📌 Objetivo
Extraer automáticamente noticias actualizadas relacionadas con biodiversidad, conservación, fauna silvestre, y cambio climático desde Mongabay en español.

🔧 Acceso
- Sitio: https://es.mongabay.com/?s=&locations=latinoamerica+amazonia&topics=animales&formats=post+custom_story+podcasts+specials+short_article
- Acceso libre vía web pública
- Se utiliza Selenium para simular scroll y cargar más artículos
- Se extrae contenido con BeautifulSoup para obtener:
  - Título del artículo
  - Fecha de publicación
  - Imagen destacada
  - Enlace directo a la noticia  
  
---  
### 🧬 Wikipedia en Español – Identificación de especies y estados de conservación
📌 Objetivo
Buscar información de especies a partir del nombre científico, verificando si corresponde a una página válida en Wikipedia, y extrayendo el nombre común en español y su estado de conservación (cuando esté disponible).

🔧 Acceso

- Sitio: https://es.wikipedia.org

<u>Se usa la API pública de MediaWiki:</u>
https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch={nombre}&format=json  
  
🔎 Procedimiento
- Búsqueda inicial: Se consulta la API con el nombre científico.
- Validación: Si existe una coincidencia, se accede al HTML de la página para comprobar si tiene una infobox biológica.
- Nombre común: Se extrae si está presente en la infobox.

<u>URL construida dinámicamente:</u>
https://es.wikipedia.org/wiki/{nombre_cientifico_formateado}
*(reemplaza espacios por guiones bajos)*
🔍 Procedimiento
- Se accede a la página individual de cada especie usando su nombre científico.
- Se utiliza BeautifulSoup para extraer la tabla de información biológica (infobox).
- Se busca específicamente el campo "Estado de conservación".


---

### 🌐 GBIF API – Información global de biodiversidad
📌 Objetivo
Consultar datos sobre especies a partir de su nombre científico utilizando la API de GBIF, incluyendo:

- Identificación taxonómica
- Nombres comunes (vernáculos)
- Registros de ocurrencias geográficas

🔧 Acceso
- Sitio oficial: [https://www.gbif.org](https://www.gbif.org/)
- API abierta y pública
- Endpoints utilizados:
  - 🔍 Buscar especie (por nombre científico): https://api.gbif.org/v1/species
  - 🗣️ Nombres comunes (vernáculos): https://api.gbif.org/v1/species/{usageKey}/vernacularNames
  - 📍 Registros de ocurrencia (coordenadas y localización): https://api.gbif.org/v1/occurrence/search?

📑 Filtros aplicados
- Se filtran nombres comunes por idioma "spa" (español).
- Para ocurrencias, se puede filtrar por país, rango de fechas u otros parámetros.


---

### 🌱 iNaturalist API – Nombre común alternativo
🔍 Objetivo
Proporcionar una tercera opción para obtener el nombre común en español si Wikipedia y GBIF no devuelven resultados.

🔧 Acceso

- Sitio: [https://api.inaturalist.org/v1](https://api.inaturalist.org/v1/)
- Apoyo alternativo para coincidencias (iNaturalist): https://api.inaturalist.org/v1/taxa?q={nombre_cientifico}&locale=es
Se recorren los resultados buscando locale = "es"
API libre, sin autenticación  
---

### 🦩 Fauna peruana en extinción - Lista de animales en observación
📌 Objetivo
Extraer los nombres científicos de animales en observación, ya que esto ayudara a ser más especificos con la busqueda por animal.

🔧 Acceso

- Sitio: [https://www.peruecologico.com.pe/esp_extincion.htm](https://www.peruecologico.com.pe/esp_extincion.htm)
- Acceso libre vía HTML público (no requiere login)
- Se utiliza urllib.request para hacer la solicitud y BeautifulSoup para parsear el HTML
- Se usa codificación latin1 al leer el HTML, ya que la página original no está en UTF-8.

---

### 📋 Checklist of CITES Species
📌 Objetivo
Contar con una lista oficial de especies incluidas en los apéndices de la Convención sobre el Comercio Internacional de Especies Amenazadas de Fauna y Flora Silvestres (CITES), específicamente para el país Perú.

🔧 Acceso

- Sitio: [Checklist of CITES Species](https://checklist.cites.org/#/en/search/country_ids%5B%5D=228&cites_region_ids%5B%5D=2&output_layout=alphabetical&level_of_listing=0&show_synonyms=1&show_author=1&show_english=1&show_spanish=1&show_french=1&scientific_name=&page=1&per_page=20)
- Se utilizó el siguiente filtro para la descarga:
  - País: Perú
  - Región CITES: América Central y del Sur
  - Formato: JSON
- Este archivo sirve como base para cruzar información con otras fuentes, identificar especies en riesgo reguladas por CITES, y alimentar visualizaciones o herramientas de monitoreo.

---

### 🔥 NASA FIRMS – Incendios activos en Perú
📌 Objetivo
Obtener los focos de calor activos en las últimas 24 horas dentro del territorio peruano utilizando los datos satelitales de la NASA (FIRMS – Fire Information for Resource Management System).

🔧 Acceso

- Sitio oficial: [NASA FIRMS](https://firms.modaps.eosdis.nasa.gov/)
- Fuente de datos (CSV 24h – MODIS Sudamérica): https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6.1/csv/MODIS_C6_1_South_America_24h.csv
- Acceso libre y sin autenticación (formato CSV)
  
📦 Proceso
- Se descarga el archivo CSV que contiene todos los focos de calor activos detectados en Sudamérica en las últimas 24 horas.
- Se filtran únicamente aquellos registros dentro de los límites geográficos de Perú

---

### 🌍 USGS – Registro de Sismos en Perú
📌 Objetivo
Obtener información sobre los sismos de magnitud mayor a 2.5 ocurridos durante la última semana, y filtrar únicamente aquellos localizados dentro del territorio peruano.

🔧 Acceso
- Sitio oficial: [USGS Earthquake Hazards Program](https://earthquake.usgs.gov/earthquakes/map/?extent=-27.48878,-88.28613&extent=3.38182,-54.09668)
- Fuente de datos (CSV público):
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv
- No requiere autenticación

📦 Proceso
- Se descarga un archivo CSV con todos los eventos sísmicos de magnitud ≥ 2.5 reportados a nivel mundial en la última semana.
- Se filtran los registros que se encuentran dentro de los límites geográficos de Perú, usando la misma función en_peru() basada en latitud y longitud.
  
---  
### 📍 Nominatim API: Obtener las regiones según coordenadas (latitudes y longitudes)
*🔍 Objetivo* 
Determinar la región (departamento) del Perú en la que se encuentra cada coordenada geográfica registrada para especies en peligro, con el fin de realizar análisis geográficos y visualizaciones basadas en ubicación.

*🔧 Acceso*

- Servicio: [Nominatim – OpenStreetMap](https://nominatim.openstreetmap.org/reverse)  

- Tipo: API REST (gratuita y pública, sujeta a límites de uso)  

*📥 Datos disponibles*   

- Especies por departamento.  

- Distribución geográfica en gráficos y mapas.  

- Regiones con mayor presencia de especies en riesgo.  

---
Estas fuentes permiten integrar información científica, ambiental y mediática en un sistema unificado para monitorear y visualizar la situación de especies amenazadas en todo el mundo.

---

## 🧭 Instrucciones para el usuario
### 🔧 Requisitos  
Antes de comenzar, asegúrate de tener instalado:
- Python 3.10 o superior
- Navegador Google Chrome  
- ChromeDriver compatible (o usar webdriver-manager, si lo configuras)
### 📦 Instalación de dependencias 

```bash      
git clone https://github.com/maricielo-hc/TRABAJO_FINAL.git  
cd TRABAJO_FINAL  
pip install -r requirements.txt  
python scripts/eventos_naturales.py  
python scripts/acceder_articulos.py  
```  

---
🧰 Librerías y herramientas Python
- **requests** – Para hacer peticiones HTTP a APIs
- **BeautifulSoup** – Para parsear y analizar contenido HTML
- **Selenium** – Para automatizar navegación y scroll en páginas dinámicas
- **json** – Para leer/escribir archivos .js estructurados como JSON

---

## 🌿 **Objetivos y Productos Finales**

---

### 🐼 **Objetivo General**

Se busca utilizar herramientas digitales para la **recolección**, **análisis** y **visualización de datos** sobre **especies en peligro de extinción**, relacionando esta información con **reportes noticiosos** y **eventos climáticos** que afectan críticamente sus hábitats.  
El fin último es **generar conciencia ambiental** y contribuir a una **toma de decisiones informada** frente a la pérdida de biodiversidad.


<p align="center">
  <img src="imagenes/ososs.gif" alt="osos" width="400"/>
</p>



---

### 🐼 **Objetivos Específicos**

- 📚 **Recolectar información** desde fuentes confiables, como la **nombre**, portales climáticos y bases de datos de biodiversidad.
- 📰 **Detectar noticias recientes** que informen sobre la **pérdida de hábitats** o **amenazas directas** a especies en peligro.
- 🔥 **Analizar la relación** entre el **cambio climático** (temperaturas extremas, sequías, incendios) y la **reducción de los ecosistemas naturales**.
- 🗺️ **Visualizar geográficamente** las especies afectadas y su nivel de amenaza mediante **mapas interactivos**.
- 📊 **Desarrollar un dashboard interactivo** que permita al usuario **explorar la información por especie, región o tipo de amenaza**, en un entorno accesible y comprensible.

---


## 🌿 **Resultado Final del Proyecto**

Con el proyecto se busca un sistema funcional capaz de:

- 🔗 **Consultar múltiples APIs** de datos ambientales y noticiosos de forma automatizada.
- 📌 **Detectar menciones** de especies y amenazas relevantes en medios de comunicación.
- 🗺️ **Generar un mapa interactivo** que muestre la distribución de especies amenazadas, filtrable por país, especie o tipo de riesgo.
- 💻 **Presentar la información** en una **interfaz web amigable**, enfocada en el usuario, con énfasis en la **comunicación visual**, dejando de lado tecnicismos innecesarios.
- 🌱 **Contribuir a la concientización** y **sensibilización de la comunidad** mediante la presentación **clara, visual y accesible** de datos críticos sobre la biodiversidad global.

  <img src="imagenes/ajolote.gif" alt="ajolote" width="400"/>
</p>

---

