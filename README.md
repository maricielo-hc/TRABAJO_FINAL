
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
### 🔍 Wikipedia en Español – Identificación de nombres comunes
📌 Objetivo
Buscar el nombre común en español de especies a partir del nombre científico, y verificar si la página corresponde a una especie real mediante la infobox biológica.

🔧 Acceso

Sitio: https://es.wikipedia.org

Se usa la API pública de MediaWiki:
https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=Panthera&format=json  
  
Ingresar en Panthera el nombre cientifico del animal requerido
Si se encuentra una coincidencia, se accede a la página HTML para validar la infobox

---

### 🌍 GBIF API – Nombres vernáculos de especies
📌 Objetivo
Obtener el nombre común en español a partir del nombre científico, usando la base de datos mundial de biodiversidad.

🔧 Acceso

Sitio: https://www.gbif.org

API pública y abierta:

Buscar especie: https://api.gbif.org/v1/species

Obtener nombres vernáculos: https://api.gbif.org/v1/species/{usageKey}/vernacularNames

Se filtra el resultado por idioma "spa" (español)

---

### 🌱 iNaturalist API – Nombre común alternativo
🔍 Objetivo
Proporcionar una tercera opción para obtener el nombre común en español si Wikipedia y GBIF no devuelven resultados.

🔧 Acceso

- Sitio: https://api.inaturalist.org/v1
- Endpoint usado: https://api.inaturalist.org/v1/taxa?q=[nombre_cientifico]
Se recorren los resultados buscando locale = "es"
API libre, sin autenticación  
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

'''bash
git clone https://github.com/maricielo-hc/TRABAJO_FINAL.git
cd TRABAJO_FINAL
pip install -r requirements.txt
python scripts/eventos_naturales.py
python scripts/acceder_articulos.py
'''

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

