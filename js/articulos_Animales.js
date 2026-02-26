const articulos = [
  {
    "titulo": "Confirmado: nueva especie de pulpo en aguas profundas chilenas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/02/24123637/Proyecto-nuevo-15-768x512.jpg",
    "fecha": "Feb 24, 2026",
    "url": "https://es.mongabay.com/2026/02/nueva-especie-pulpo-chile-oceanos/"
  },
  {
    "titulo": "Semana de las especies invasoras: historias de peces, insectos y caracoles que amenazan ecosistemas en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/02/24175638/Pez-diablo-768x512.jpg",
    "fecha": "Feb 23, 2026",
    "url": "https://es.mongabay.com/2026/02/semana-especies-invasoras-peces-insectos-caracoles-amenazan-ecosistemas-latinoamerica/"
  },
  {
    "titulo": "Pumas y pingüinos en la Patagonia: el regreso de los felinos expone el impacto de la acción humana en la naturaleza | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/02/18200145/Puma-blood-JoelReyero-768x512.jpg",
    "fecha": "Feb 20, 2026",
    "url": "https://es.mongabay.com/2026/02/pumas-pinguinos-patagonia-impacto-accion-humana-estudio/"
  },
  {
    "titulo": "¿Qué pescados estás comiendo?: fraude y mal etiquetado amenazan a los tiburones en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/09/15020702/Copia-de-tiburon-azul-OCEANA-LX-20315-768x512.jpg",
    "fecha": "Feb 19, 2026",
    "url": "https://es.mongabay.com/2026/02/que-pescados-estas-comiendo-fraude-etiquetado-amenazan-tiburones-peru/"
  },
  {
    "titulo": "¿Por qué la tortuga laúd está desapareciendo en Ecuador?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/24032838/FOTO_1_Carlos-Salas-768x512.jpg",
    "fecha": "Feb 16, 2026",
    "url": "https://es.mongabay.com/short-article/2026/02/tortuga-laud-esta-desapareciendo-ecuador/"
  },
  {
    "titulo": "Jaguares, osos andinos y cóndores: las áreas naturales de Bolivia protegen a sus especies más emblemáticas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/27151941/D54eGErWAAAXuTj-e1737991209999-768x442.jpeg",
    "fecha": "Feb 14, 2026",
    "url": "https://es.mongabay.com/2026/02/jaguares-osos-andinos-condores-conservacion-areas-naturales-bolivia/"
  },
  {
    "titulo": "Imágenes muestran el horror que viven los felinos víctimas del tráfico ilegal en Latinoamérica | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/07235550/Colombia-7-Barto-hogar-de-paso-Foto-Santiago-Wills-768x512.jpg",
    "fecha": "Feb 13, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/02/imagenes-horror-felinos-victimas-trafico-ilegal-latinoamerica-reportaje-fotografico/"
  },
  {
    "titulo": "¿Cómo compiten jaguares, pumas, ocelotes y tigrillos por alimento? Estudio de felinos en Guatemala revela sus formas de caza",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/02/10080843/felinos-guatemala-caza-alimento-estudio4-768x512.jpg",
    "fecha": "Feb 12, 2026",
    "url": "https://es.mongabay.com/2026/02/felinos-guatemala-caza-alimento-estudio/"
  },
  {
    "titulo": "Serranía de Sunsas: un santuario poco explorado en Bolivia que protege 176 especies de aves",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/02/06212904/Proyecto-nuevo-4-768x512.jpg",
    "fecha": "Feb 10, 2026",
    "url": "https://es.mongabay.com/2026/02/serrania-de-sunsas-bolivia-protege-aves/"
  },
  {
    "titulo": "¿Conoces al sapo concho que apareció en el Super Bowl con Bad Bunny?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/14001151/Cullen-Hanks-2-768x512.jpg",
    "fecha": "Feb 09, 2026",
    "url": "https://es.mongabay.com/short-article/2026/02/sapo-concho-extincion-super-bowl-bad-bunny/"
  },
  {
    "titulo": "Inteligencia artificial, turismo y ganadería: tres amenazas para la fauna silvestre",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/30031955/Oso-Hormiguero-3-768x512.jpg",
    "fecha": "Feb 07, 2026",
    "url": "https://es.mongabay.com/2026/02/inteligencia-artificial-turismo-ganaderia-amenazas-fauna-silvestre/"
  },
  {
    "titulo": "Tortuga laúd, jambato negro y nutrias marinas del sur: tres especies emblemáticas al borde de la extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/12/27075825/Nutria-marina-del-sur-Lilian-Carswell-USFWS-768x512.jpg",
    "fecha": "Jan 31, 2026",
    "url": "https://es.mongabay.com/2026/01/tortuga-laud-jambato-negro-nutrias-marinas-sur-extincion/"
  },
  {
    "titulo": "Iguana verde: el reptil invasor comercializado durante años que causa estragos en el Caribe",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/01/29130257/20150820_100015_Original-768x512.jpeg",
    "fecha": "Jan 30, 2026",
    "url": "https://es.mongabay.com/2026/01/iguana-verde-reptil-invasor-caribe/"
  },
  {
    "titulo": "Argentina: el trabajo silencioso de rescatistas para salvar a los animales de los incendios",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/21210435/Incendios-en-Epuyen-%C2%A9-Matias-Garay-Greenpeace-07-768x512.jpg",
    "fecha": "Jan 30, 2026",
    "url": "https://es.mongabay.com/2026/01/argentina-incendios-rescatistas-salvar-animales/"
  },
  {
    "titulo": "Caza & Safari: fiscalía en Bolivia busca reabrir la causa contra la empresa argentina acusada de cazar jaguares",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/01/28154236/Proyecto-nuevo-1-768x512.jpg",
    "fecha": "Jan 29, 2026",
    "url": "https://es.mongabay.com/short-article/2026/01/caza-safari-bolivia-reabrir-causa-contra-empresa-argentina-cazar-jaguares/"
  },
  {
    "titulo": "Científicos logran imágenes únicas de orcas depredando tiburones blancos juveniles en México | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/01/28193343/portada-orcas-1-768x512.jpg",
    "fecha": "Jan 29, 2026",
    "url": "https://es.mongabay.com/2026/01/mexico-primer-registro-orcas-depredando-tiburones-estudio/"
  },
  {
    "titulo": "Sin playas ni protección legal: la odisea de las tortugas marinas más grandes del mundo para anidar en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/01/28042550/nacimiento-laud-2021-768x512.jpeg",
    "fecha": "Jan 28, 2026",
    "url": "https://es.mongabay.com/2026/01/sin-playas-proteccion-legal-odisea-tortuga-laud-anidar-ecuador/"
  },
  {
    "titulo": "Los tiburones y una ventana al pasado: cómo era el Pacífico Este Tropical antes de la pesca indiscriminada | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/01/22170947/Silvertip-shark-Revillagigedo_Credit-Pelayo-Salinas-768x512.jpg",
    "fecha": "Jan 23, 2026",
    "url": "https://es.mongabay.com/2026/01/tiburones-pacifico-este-tropical-pesca-indiscriminada/"
  },
  {
    "titulo": "Descubren cómo se recupera un bosque tropical en el Chocó ecuatoriano tras la deforestación | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/01/20001640/Piaya-cayana-768x512.jpg",
    "fecha": "Jan 21, 2026",
    "url": "https://es.mongabay.com/2026/01/recuperacion-bosque-tropical-choco-ecuatoriano-deforestacion-estudio/"
  },
  {
    "titulo": "De ríos y tortugas a lagos y abejas amazónicas: conoce quiénes han sido declarados sujetos de derecho en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/01/15061043/Photo-by-Luis-Garcia-Solsol-9-768x512.jpg",
    "fecha": "Jan 16, 2026",
    "url": "https://es.mongabay.com/2026/01/abejas-peru-sujetos-derecho-latinoamerica/"
  },
  {
    "titulo": "Alerta en el Chaco paraguayo: así resiste el oso hormiguero a la invasión de su hábitat",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/01/08042732/Olfateando-2-1-1-e1767846674355-768x512.jpg",
    "fecha": "Jan 14, 2026",
    "url": "https://es.mongabay.com/2026/01/alerta-chaco-paraguayo-oso-hormiguero-invasion-habitat/"
  },
  {
    "titulo": "Los animales que protagonizaron las historias ambientales de 2025 en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/17172404/tata-aguayo-5-768x512.jpeg",
    "fecha": "Jan 04, 2026",
    "url": "https://es.mongabay.com/2026/01/animales-protagonistas-historias-ambientales-2025-latinoamerica/"
  },
  {
    "titulo": "Latinoamérica: los 10 mejores videos de 2025 en Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/03/23230435/09-Reserva-Tesoro-Escondido-2019-A%CC%81gula-Arpi%CC%81a-Scott-Trageser-768x512.jpg",
    "fecha": "Jan 02, 2026",
    "url": "https://es.mongabay.com/2026/01/latinoamerica-mejores-videos-2025-mongabay-latam/"
  },
  {
    "titulo": "El 2025 ambiental de Latinoamérica en 10 historias gráficas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/12/17162747/Lista-HistoriasGraficas-Cover-768x512.jpg",
    "fecha": "Jan 02, 2026",
    "url": "https://es.mongabay.com/2026/01/latinoamerica-ambiental-10-historias-graficas-2025/"
  },
  {
    "titulo": "Latinoamérica: las historias ambientales que nos trajeron esperanza en 2025",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/29221744/%C2%A9Camilo-Diaz-WWF-Colombia-Retratos-en-la-Estrella-Fluvial-de-Inirida-Guania-3-768x512.jpg",
    "fecha": "Dec 31, 2025",
    "url": "https://es.mongabay.com/2025/12/latinoamerica-las-historias-ambientales-que-nos-trajeron-esperanza-en-2025/"
  },
  {
    "titulo": "Las 12 fotografías que resumen el año ambiental de Latinoamérica en 2025",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/22085034/Echinosaura_embera_1-768x512.jpg",
    "fecha": "Dec 26, 2025",
    "url": "https://es.mongabay.com/2025/12/las-12-fotografias-que-resumen-el-ano-ambiental-de-latinoamerica-en-2025/"
  },
  {
    "titulo": "Argentina: las 10 historias ambientales que marcaron 2025",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/22162537/2-e1737565052970-768x512.jpeg",
    "fecha": "Dec 19, 2025",
    "url": "https://es.mongabay.com/2025/12/argentina-mejores-historias-ambientales/"
  },
  {
    "titulo": "Colombia: las 10 historias ambientales que marcaron 2025",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/30194755/Copy-of-_DSC1626-768x512.jpg",
    "fecha": "Dec 19, 2025",
    "url": "https://es.mongabay.com/2025/12/colombia-top-historias-ambientales/"
  },
  {
    "titulo": "Chile: las 10 historias ambientales que marcaron 2025",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/05184819/Captura-de-pantalla-2025-08-05-a-las-11.45.52-a.m-768x512.png",
    "fecha": "Dec 18, 2025",
    "url": "https://es.mongabay.com/2025/12/chile-top-historias-ambientales/"
  },
  {
    "titulo": "El “turismo psicodélico” amenaza a las plantas y animales de Latinoamérica y África | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/12/17212034/Captura-de-pantalla-2025-12-17-a-las-3.19.45-p.m-768x512.png",
    "fecha": "Dec 18, 2025",
    "url": "https://es.mongabay.com/2025/12/turismo-psicodelico-amenaza-plantas-animales-latinoamerica-africa/"
  },
  {
    "titulo": "Bolivia: las 10 historias ambientales que marcaron 2025",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/29212220/4.-Los-ancianos-leco-sostienen-una-imagen-de-la-palkachupa.-FOTO-CORTESIA-ARMONIA-768x512.jpeg",
    "fecha": "Dec 18, 2025",
    "url": "https://es.mongabay.com/2025/12/bolivia-mejores-historias-ambientales/"
  },
  {
    "titulo": "Los especiales transfronterizos más leídos en 2025",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/12/16143417/Puma-cover-768x512.jpg",
    "fecha": "Dec 17, 2025",
    "url": "https://es.mongabay.com/2025/12/especiales-transfronterizos-mas-leidos/"
  },
  {
    "titulo": "México: las 12 historias ambientales que marcaron 2025",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/10/10114451/DSC09931-768x512.jpg",
    "fecha": "Dec 17, 2025",
    "url": "https://es.mongabay.com/2025/12/mexico-mejores-historias-ambientales/"
  },
  {
    "titulo": "Perú: las 10 historias ambientales que marcaron 2025",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/22134214/DJI_0245-768x512.jpg",
    "fecha": "Dec 16, 2025",
    "url": "https://es.mongabay.com/2025/12/peru-mejores-historias-ambientales/"
  },
  {
    "titulo": "Justicia de Bolivia cierra caso Caza & Safari: no investigará más a empresa argentina que promovía la caza de jaguares",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/22162556/8-2-768x512.jpg",
    "fecha": "Dec 16, 2025",
    "url": "https://es.mongabay.com/2025/12/bolivia-cierra-caso-caza-safari-empresa-argentina-caza-jaguares/"
  },
  {
    "titulo": "Mercurio, cambio climático y redes de pesca amenazan a las tortugas marinas de México y Chile | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/06/30123404/Caretta-Caretta-768x512.jpeg",
    "fecha": "Dec 13, 2025",
    "url": "https://es.mongabay.com/2025/12/amenazas-tortugas-marinas-mexico-chile/"
  },
  {
    "titulo": "Perú amplía su biblioteca molecular con registros genéticos de especies de mamíferos y aves de la Amazonía",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/12/11041305/Band-tailed-manakin-Pipra-fasciicauda_credit-Field-Projects-International-768x512.jpg",
    "fecha": "Dec 12, 2025",
    "url": "https://es.mongabay.com/2025/12/peru-amplia-biblioteca-molecular-registros-geneticos-mamiferos-aves-amazonia/"
  },
  {
    "titulo": "Yaguara: una jaguar rescatada de los incendios en Bolivia está lista para regresar a su hábitat",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/12/12133424/Yaguara-cover-768x512.jpg",
    "fecha": "Dec 12, 2025",
    "url": "https://es.mongabay.com/2025/12/yaguara-jaguar-rescatada-incendios-bolivia-regresa-habitat/"
  },
  {
    "titulo": "México pierde sus tesoros naturales: manglares y playas desaparecen por el boom inmobiliario | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/20023506/cabo-pulmo-mexico-proyectos-turisticos-4-768x512.jpg",
    "fecha": "Dec 07, 2025",
    "url": "https://es.mongabay.com/2025/12/mexico-manglares-playas-desaparecen-boom-inmobiliario/"
  },
  {
    "titulo": "¿A dónde van los pulpos maya en Yucatán?: los impactos del cambio climático en esta emblemática especie de México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/12/05142008/Pulpos-cover-768x512.jpg",
    "fecha": "Dec 06, 2025",
    "url": "https://es.mongabay.com/2025/12/pulpos-maya-yucatan-impactos-cambio-climatico-mexico/"
  },
  {
    "titulo": "Enfermedades letales atacan a murciélagos, vicuñas y elefantes marinos en América Latina | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/17020420/Elefantes-marinos-madre-cria-foto-Adriana-Sanz-R4I8107-768x512.jpg",
    "fecha": "Dec 06, 2025",
    "url": "https://es.mongabay.com/2025/12/enfermedades-letales-atacan-murcielagos-vicunas-elefantes-marinos-america-latina/"
  },
  {
    "titulo": "Nacen tres polluelos de cóndor en Colombia: incubación artificial da esperanza a la conservación de una especie en peligro de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/06/29193457/condor-andino-Chile-4-hernan-povedano-wildlife-pnp-valchacnn025-1536x1024-1-768x512.jpg",
    "fecha": "Dec 05, 2025",
    "url": "https://es.mongabay.com/short-article/2025/12/nacen-polluelos-condor-incubacion-artificial-extincion-colombia/"
  },
  {
    "titulo": "México: la expansión inmobiliaria pone en peligro al cangrejo azul en la Riviera Veracruzana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/11/28143457/cangrejo-cover-768x512.jpg",
    "fecha": "Nov 29, 2025",
    "url": "https://es.mongabay.com/2025/11/mexico-expansion-inmobiliaria-peligro-cangrejo-azul-riviera-veracruzana/"
  },
  {
    "titulo": "Día Internacional del Jaguar: ¿Cómo protegen al felino más grande de América frente a la deforestación, minería y caza ilegal?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/04/05175825/Sugar-2-768x512.jpg",
    "fecha": "Nov 29, 2025",
    "url": "https://es.mongabay.com/2025/11/dia-internacional-jaguar-conservacion-deforestacion-mineria-caza-ilegal/"
  },
  {
    "titulo": "¿Cómo protegen en Colombia al tiburón martillo más pequeño del mundo?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/30194805/Copy-of-_DSC1443-768x512.jpg",
    "fecha": "Nov 27, 2025",
    "url": "https://es.mongabay.com/short-article/2025/11/conservacion-tiburon-martillo-extincion-colombia/"
  },
  {
    "titulo": "El santuario de aves que busca detener la devastación de la Sierra de Agalta en Honduras",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/11/22232435/DSC00687-768x512.jpg",
    "fecha": "Nov 27, 2025",
    "url": "https://es.mongabay.com/2025/11/santuario-aves-busca-detener-devastacion-sierra-agalta-honduras/"
  },
  {
    "titulo": "Tres nuevas ranas endémicas revelan una biodiversidad oculta en el norte peruano",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/11/25011451/Foto-5-Pristimantis-nunezcortezi-768x512.jpg",
    "fecha": "Nov 26, 2025",
    "url": "https://es.mongabay.com/2025/11/tres-nuevas-ranas-endemicas-revelan-biodiversidad-norte-peruano/"
  },
  {
    "titulo": "El murciélago que pesca en el desierto está bajo amenaza en el Golfo de California | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/11/26140106/murcielago-pescador-cover3-768x512.jpeg",
    "fecha": "Nov 26, 2025",
    "url": "https://es.mongabay.com/2025/11/murcielago-pesca-desierto-bajo-amenaza-golfo-california-entrevista/"
  },
  {
    "titulo": "Las vicuñas y guanacos de Sudamérica enfrentan la amenaza de la sarna, alertan científicos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/11/25000251/camelidos-cover-768x512.jpg",
    "fecha": "Nov 25, 2025",
    "url": "https://es.mongabay.com/2025/11/vicunas-guanacos-sudamerica-enfrentan-amenaza-sarna/"
  },
  {
    "titulo": "Comunidades y científicos se unen para proteger tres especies marinas clave en Chile | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/25154044/puye-en-balde.-Autora-Gabriela-Nunez-Arancibia-768x512.jpeg",
    "fecha": "Nov 22, 2025",
    "url": "https://es.mongabay.com/2025/11/comunidades-cientificos-protegen-especies-marinas-clave-chile/"
  },
  {
    "titulo": "Corazón del bosque: comunidades descubren una nueva especie de rana amenazada en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/11/17163320/Captura-de-pantalla-2025-11-17-a-las-9.32.46-a.m-768x512.png",
    "fecha": "Nov 18, 2025",
    "url": "https://es.mongabay.com/2025/11/comunidades-descubren-nueva-especie-rana-amenazada-peru/"
  },
  {
    "titulo": "La reubicación de un jaguar genera polémica entre investigadores y autoridades ambientales en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/11/12183255/Captura-de-pantalla-2025-11-12-a-las-11.32.19-a.m-768x512.png",
    "fecha": "Nov 15, 2025",
    "url": "https://es.mongabay.com/2025/11/reubicacion-jaguar-genera-polemica-colombia/"
  },
  {
    "titulo": "¿Qué revela el monitoreo satelital de elefantes marinos sobre el cambio climático?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/13000206/Elefantes-marinos-con-transmisores-satelitales-en-Bahia-Jackson.-Cortesia-Maritza-Sepulveda-768x512.jpg",
    "fecha": "Nov 03, 2025",
    "url": "https://es.mongabay.com/short-article/2025/11/monitoreo-satelital-elefantes-marinos-cambio-climatico/"
  },
  {
    "titulo": "¿Cómo el cambio climático amenaza la supervivencia de tortugas, aves, peces y mamíferos en América Latina? | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/05023839/Monodelphis-domestica-un-marsupial-encontrado-en-Iguatu-en-el-estado-de-Ceara-Brasil.-Foto_-Dra.-Ludmilla-da-Costa-Pinto-768x512.jpg",
    "fecha": "Nov 02, 2025",
    "url": "https://es.mongabay.com/2025/11/calentamiento-global-amenaza-animales-america-latina/"
  },
  {
    "titulo": "Parabas barba azul, palkachupas y cigüeñas: tres poderosas aves que renacen en medio de graves amenazas en Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/14081531/Paraba-barba-Azul-2-Fundacio%CC%81n-Loros-de-Bolivia-768x512.jpg",
    "fecha": "Nov 01, 2025",
    "url": "https://es.mongabay.com/2025/11/parabas-barba-azul-palkachupas-ciguenas-renacen-amenazas-bolivia/"
  },
  {
    "titulo": "Expertos temen que proyecto minero de cobre en Chile amenace al gato andino, uno de los felinos más raros de América",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/27010620/FOTO-ABRE-AGA-768x512.jpg",
    "fecha": "Oct 27, 2025",
    "url": "https://es.mongabay.com/short-article/2025/10/proyecto-minero-cobre-chile-amenaza-gato-andino/"
  },
  {
    "titulo": "Descubren curiosos marsupiales, cocodrilos y roedores en América Latina y el Caribe | Coyuntura Ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/06/01131713/Desmarests-hutia-2-768x512.jpg",
    "fecha": "Oct 25, 2025",
    "url": "https://es.mongabay.com/2025/10/descubren-marsupiales-cocodrilos-roedores/"
  },
  {
    "titulo": "Zapotitlán: la comunidad pesquera que convirtió sus arrecifes en una reserva para el futuro en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/10/21143927/lancha-cover-768x512.jpg",
    "fecha": "Oct 22, 2025",
    "url": "https://es.mongabay.com/2025/10/zapotitlan-comunidad-pesquera-protege-arrecifes-reserva-mexico/"
  },
  {
    "titulo": "La güiña: el felino salvaje más pequeño de América está menos amenazado, pero sigue en riesgo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/02223431/guina-jerry-laker-1-768x512.jpg",
    "fecha": "Oct 20, 2025",
    "url": "https://es.mongabay.com/short-article/2025/10/guina-felino-menos-amenazado-pero-sigue-riesgo/"
  },
  {
    "titulo": "Mercurio amenaza a tortugas, delfines, tiburones y más especies en Latinoamérica | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/17145913/Alopias_pelagicus-Jenvit_Seriburi-inaturalist-768x512.jpg",
    "fecha": "Oct 19, 2025",
    "url": "https://es.mongabay.com/2025/10/mercurio-amenaza-tortugas-delfines-tiburones-especies-latinoamerica/"
  },
  {
    "titulo": "¿Dónde nacen las mantas oceánicas? La respuesta se busca en el Archipiélago de Revillagigedo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/10/16155242/manta-portada-768x512.jpg",
    "fecha": "Oct 17, 2025",
    "url": "https://es.mongabay.com/2025/10/donde-nacen-mantas-oceanicas-archipielago-revillagigedo/"
  },
  {
    "titulo": "El gran retorno de las cigüeñas a un área protegida de Bolivia amenazada por invasores e incendios",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/10/13161635/5-Ciguenas-en-la-copa-768x512.jpg",
    "fecha": "Oct 14, 2025",
    "url": "https://es.mongabay.com/2025/10/retorno-ciguenas-area-protegida-bolivia-amenazada-invasores-incendios/"
  },
  {
    "titulo": "¿Qué está causando que animales en peligro de extinción mueran ahogados en Argentina?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/12190348/Denise_Griguol-7-768x512.jpg",
    "fecha": "Oct 13, 2025",
    "url": "https://es.mongabay.com/short-article/2025/10/animales-mueren-ahogados-argentina/"
  },
  {
    "titulo": "Descubrimiento en el Caribe mexicano: los cocodrilos se adaptaron a las islas y se transformaron en nuevas especies",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/10/10114451/DSC09931-768x512.jpg",
    "fecha": "Oct 11, 2025",
    "url": "https://es.mongabay.com/2025/10/descubrimiento-cocodrilos-caribe-mexicano-nuevas-especies/"
  },
  {
    "titulo": "Cinco proyectos que demuestran que sí es posible la convivencia en paz entre comunidades, jaguares y pumas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/22211717/jaguar-estribaciones-2-768x512.jpg",
    "fecha": "Oct 11, 2025",
    "url": "https://es.mongabay.com/2025/10/proyectos-convivencia-entre-comunidades-jaguares-pumas/"
  },
  {
    "titulo": "Una millonaria obra de energía amenaza al santuario Passiflora, refugio del jaguar en la Amazonía boliviana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/10/08130746/jaguar-cover-768x512.jpg",
    "fecha": "Oct 09, 2025",
    "url": "https://es.mongabay.com/2025/10/millonaria-obra-energia-amenaza-passiflora-refugio-jaguar-bolivia/"
  },
  {
    "titulo": "Con cámaras trampa, los castañeros de Perú trabajan en la conservación y monitoreo de especies en la Amazonía",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/10/06210449/10170092-768x512.jpg",
    "fecha": "Oct 08, 2025",
    "url": "https://es.mongabay.com/2025/10/camaras-trampa-castaneros-peru-conservacion-monitoreo-especies-amazonia/"
  },
  {
    "titulo": "El legado de Jane Goodall: conservacionistas latinoamericanos recuerdan cómo la primatóloga impactó en sus vidas y sus carreras",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/10/03202633/IMG00987-DG-768x450.jpg",
    "fecha": "Oct 07, 2025",
    "url": "https://es.mongabay.com/2025/10/el-legado-de-jane-goodall-conservacionistas-latinoamerica-primatologa/"
  },
  {
    "titulo": "Día Mundial de los Animales: cámaras trampa para conservar  jaguares y delfines en la Selva Maya y la Amazonía",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/10/03075428/dia-mundial-de-los-animales-monitoreo-especies7-768x512.jpg",
    "fecha": "Oct 07, 2025",
    "url": "https://es.mongabay.com/2025/10/dia-mundial-de-los-animales-monitoreo-especies/"
  },
  {
    "titulo": "Cámaras trampa registran un jaguar “negro”, un oso de anteojos y la reaparición de un conejo que se creía extinto",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/07175937/Registro-de-camara-trampa-de-WCS-Argentina-5-Mendoza-2024-768x512.jpg",
    "fecha": "Oct 04, 2025",
    "url": "https://es.mongabay.com/2025/10/camaras-trampa-registran-jaguar-negro-oso-anteojos-reaparicion-conejo-extinto/"
  },
  {
    "titulo": "Indígenas leco recuperaron la población de un ave endémica de Bolivia que se creía extinta",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/29212230/1.-La-palkachupa-es-una-especie-endemica-de-Bolivia-que-vive-unicamente-en-el-norte-de-La-Paz.-FOTO-TEODORO-CAMACHO-768x512.jpg",
    "fecha": "Oct 02, 2025",
    "url": "https://es.mongabay.com/2025/10/indigenas-leco-recuperaron-ave-pallkachupa-bolivia-extincion/"
  },
  {
    "titulo": "Rastreando el nacimiento de la tortuga verde: el aumento de la temperatura en el mar impacta en la anidación de la especie en las costas de México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/10/02140648/tortuga-cover-768x512.jpg",
    "fecha": "Oct 02, 2025",
    "url": "https://es.mongabay.com/2025/10/aumento-temperatura-mar-impacta-anidacion-tortuga-verde-mexico/"
  },
  {
    "titulo": "Colombia: tres resguardos indígenas monitorearon sus peces y detectaron altos niveles de mercurio",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/30135605/resguardo-peces-portada-768x512.jpg",
    "fecha": "Sep 30, 2025",
    "url": "https://es.mongabay.com/2025/09/colombia-resguardos-indigenas-detectan-mercurio-peces/"
  },
  {
    "titulo": "Al borde del abismo: tres asombrosas aves sobreviven en medio de graves amenazas | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/17134408/Paraba-Barba-Azul-Gerrit-Vyn-Armonia-768x513.jpg",
    "fecha": "Sep 27, 2025",
    "url": "https://es.mongabay.com/2025/09/asombrosas-aves-sobreviven-amenazas/"
  },
  {
    "titulo": "Cámaras trampa, inteligencia artificial y trabajo comunitario para monitorear la biodiversidad de Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/26142946/danta-portada-768x512.jpg",
    "fecha": "Sep 26, 2025",
    "url": "https://es.mongabay.com/2025/09/camaras-trampa-colombia-biodiversidad-inteligencia-artificial/"
  },
  {
    "titulo": "Chile: estudio científico alerta sobre niveles récord de mercurio en tortugas verdes que se alimentan en Rapa Nui",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/25132135/1.2-768x512.jpg",
    "fecha": "Sep 25, 2025",
    "url": "https://es.mongabay.com/2025/09/chile-estudio-alerta-niveles-record-mercurio-tortugas-verdes-rapa-nui/"
  },
  {
    "titulo": "Colombia: así es como comunidades de los Llanos del Yarí protegen el corredor del jaguar en el Caquetá",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/24174031/DSCF3355-768x512.jpg",
    "fecha": "Sep 25, 2025",
    "url": "https://es.mongabay.com/2025/09/colombia-comunidades-llanos-yari-protegen-corredor-jaguar/"
  },
  {
    "titulo": "Minería ilegal y mercurio: un veneno para los delfines rosados de la Amazonía",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/23231546/%C2%A9-%40camilodiazphotography-WWF-Colombia-8X2A9118-768x512.jpg",
    "fecha": "Sep 24, 2025",
    "url": "https://es.mongabay.com/short-article/2025/09/mineria-ilegal-mercurio-veneno-delfines-rosados-amazonia/"
  },
  {
    "titulo": "La paraba barba azul está al borde de la extinción: un nuevo censo busca salvar a una de las especies más amenazadas del mundo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/22230710/paraba-portada-768x512.jpg",
    "fecha": "Sep 23, 2025",
    "url": "https://es.mongabay.com/2025/09/paraba-barba-azul-extincion-nuevo-censo-conservacion/"
  },
  {
    "titulo": "Bolivia: resurge la caza y el tráfico de jaguares",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/22141003/bolivia-jaguar-portada-768x512.jpg",
    "fecha": "Sep 22, 2025",
    "url": "https://es.mongabay.com/2025/09/bolivia-resurge-caza-trafico-jaguares/"
  },
  {
    "titulo": "Investigación de Mongabay Latam destapa  tráfico ilegal de tiburones en puertos peruanos | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/11/28140754/sunat-768x512.jpg",
    "fecha": "Sep 20, 2025",
    "url": "https://es.mongabay.com/2025/09/tiburones-peligro-fiscalizacion-deficiente-amenaza-supervivencia-peru/"
  },
  {
    "titulo": "¿Por qué felinos sin cola y coatíes con pérdida de pelo alertan sobre la fauna en Cerro Blanco?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/01152719/Ocelote-sin-cola-1-768x512.jpg",
    "fecha": "Sep 19, 2025",
    "url": "https://es.mongabay.com/short-article/2025/09/alertan-sobre-graves-anomalias-fauna-cerro-blanco/"
  },
  {
    "titulo": "Los otros crocodilianos: el caimán del Orinoco no es el único que corre peligro en Venezuela",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/16180422/Imagen-1-768x512.jpg",
    "fecha": "Sep 18, 2025",
    "url": "https://es.mongabay.com/2025/09/los-otros-crocodilianos-caiman-orinoco-peligro-venezuela/"
  },
  {
    "titulo": "Científicos y buzos luchan por salvar al caballito de mar patagónico en Argentina descubierto hace apenas 20 años",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/17172345/Diego-Luzzatto-4-768x512.jpg",
    "fecha": "Sep 18, 2025",
    "url": "https://es.mongabay.com/2025/09/cientificos-buzos-salvar-caballito-de-mar-patagonico-argentina/"
  },
  {
    "titulo": "Enemigo silencioso: confirman en México la presencia de hongo mortal que amenaza a los murciélagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/16153617/murrcielago-portada-768x512.jpg",
    "fecha": "Sep 16, 2025",
    "url": "https://es.mongabay.com/2025/09/confirman-mexico-presencia-hongo-mortal-amenaza-murcielagos/"
  },
  {
    "titulo": "Increíble travesía marina: ¿por qué una tiburón martillo recorrió 1300 kilómetros desde Galápagos hasta Panamá?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/17205200/SHH-with-towed-tag_Credit-to-Pelayo-Salinas-1-768x512.jpg",
    "fecha": "Sep 15, 2025",
    "url": "https://es.mongabay.com/short-article/2025/09/increible-travesia-marina-tiburon-martillo-galapagos-panama/"
  },
  {
    "titulo": "Muertes masivas de ballenas en América Latina generan alerta: colisiones, proyectos extractivos y cambio climático ponen en riesgo su supervivencia | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/02185948/Ballena_Cria_5-768x512.jpg",
    "fecha": "Sep 15, 2025",
    "url": "https://es.mongabay.com/2025/09/muertes-masivas-ballenas-colisiones-proyectos-extractivos-cambio-climatico-supervivencia-lecturas-ambientales/"
  },
  {
    "titulo": "Especies invasoras atacan la biodiversidad única de Galápagos | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/10143452/MG_5040-768x512.jpg",
    "fecha": "Sep 13, 2025",
    "url": "https://es.mongabay.com/2025/09/especies-invasoras-atacan-biodiversidad-galapagos/"
  },
  {
    "titulo": "Las ingenieras de Galápagos están en peligro: el cedro, un árbol introducido, amenaza la migración de las tortugas gigantes | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/09215343/MaraSPEECE_DSC05884-2-768x512.jpg",
    "fecha": "Sep 11, 2025",
    "url": "https://es.mongabay.com/2025/09/galapagos-cedro-amenaza-migracion-tortugas-gigantes/"
  },
  {
    "titulo": "Un refugio en las alturas: cámaras trampa en copas de árboles revelan la presencia de mamíferos en una reserva amenazada de México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/11143300/upscalemedia-transformed-4-768x512.jpeg",
    "fecha": "Sep 11, 2025",
    "url": "https://es.mongabay.com/2025/09/camaras-trampa-copas-arboles-revelan-presencia-mamiferos-mexico/"
  },
  {
    "titulo": "Felinos en cautiverio: ¿qué pasa después del rescate del tráfico ilegal",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/07235810/Colombia-8-Barto-ojos-color-caramelo-Foto-Santiago-Wills-768x512.jpg",
    "fecha": "Sep 10, 2025",
    "url": "https://es.mongabay.com/specials/2025/09/felinos-cautiverio-trafico-ilegal/"
  },
  {
    "titulo": "¿Qué daños ambientales y sociales podría causar la minería submarina de fósforo en Baja California Sur?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/06/30123437/Zalophus-californianus-768x512.jpg",
    "fecha": "Sep 10, 2025",
    "url": "https://es.mongabay.com/short-article/2025/09/afectaciones-ambientales-sociales-mineria-submarina-baja-california-sur/"
  },
  {
    "titulo": "Felinos en cautiverio: la odisea de los animales rescatados del tráfico ilegal en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/08070240/Mexico-7-linces-bebes-son-alimentados-con-biberon-Foto-Lizeth-Ovando-768x512.jpg",
    "fecha": "Sep 08, 2025",
    "url": "https://es.mongabay.com/2025/09/felinos-cautiverio-trafico-ilegal-latinoamerica/"
  },
  {
    "titulo": "Jaguardianes, la iniciativa comunitaria que cambió para siempre la relación entre pobladores y jaguares en Chiapas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/08184702/Portada-Jaguares2-768x512.jpg",
    "fecha": "Sep 08, 2025",
    "url": "https://es.mongabay.com/2025/09/jaguardianes-jaguares-chiapas-iniciativa-comunitaria/"
  },
  {
    "titulo": "Saberes indígenas y ciencia unen fuerzas para recuperar el choro zapato en Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/02224307/PORTADA-Integrantes-del-GEF-Pesca-Sustentable-y-gente-local-trabajando-en-terreno-en-caleta-Huellelhue.-Cortesia-Pesca-Sustentable-768x512.jpg",
    "fecha": "Sep 06, 2025",
    "url": "https://es.mongabay.com/2025/09/saberes-indigenas-ciencia-recuperar-choro-zapato-chile/"
  },
  {
    "titulo": "¿Cómo ayuda el ADN a proteger a los loros más traficados en Colombia?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/29153345/WhatsApp-Image-2025-01-28-at-13.40.40-2-768x512.jpeg",
    "fecha": "Sep 05, 2025",
    "url": "https://es.mongabay.com/short-article/2025/09/adn-proteger-loros-mas-traficados-colombia/"
  },
  {
    "titulo": "Crisis silenciosa en México: 92 ballenas grises muertas en Baja California Sur",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/04134612/PRIMMA-UABCS-1-768x512.jpg",
    "fecha": "Sep 04, 2025",
    "url": "https://es.mongabay.com/2025/09/crisis-silenciosa-ballenas-grises-muertas-baja-california-sur/"
  },
  {
    "titulo": "¿Cómo están nuestras aves?: una guía para científicos y monitores comunitarios que buscan proteger la biodiversidad",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/01200343/05-768x512.jpg",
    "fecha": "Sep 03, 2025",
    "url": "https://es.mongabay.com/2025/09/guia-cientificos-monitores-comunitarios-proteger-aves/"
  },
  {
    "titulo": "La extensión de las áreas naturales protegidas fue la principal clave en el aumento de la población de jaguares en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/03063927/jaguares-mexico-poblacion-claves-1-768x512.jpg",
    "fecha": "Sep 03, 2025",
    "url": "https://es.mongabay.com/2025/09/jaguares-mexico-aumento-poblacion-claves/"
  },
  {
    "titulo": "Embarcaciones japonesas desembarcaron ilegalmente en Perú más de 17 000 kilos de aletas de tiburón",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/02132140/Portada-Aletas-2-1-768x512.png",
    "fecha": "Sep 02, 2025",
    "url": "https://es.mongabay.com/2025/09/embarcaciones-japonesas-desembarcaron-ilegalmente-aletas-tiburon-peru/"
  },
  {
    "titulo": "Honduras: cómo cinco comunidades logran proteger a la tortuga golfina en el Golfo de Fonseca",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/02164502/whatsapp-image-2023-11-01-at-3.49.01-pm-678x381-1.jpg",
    "fecha": "Sep 02, 2025",
    "url": "https://es.mongabay.com/2025/09/honduras-comunidades-logran-proteger-tortuga-golfina/"
  },
  {
    "titulo": "Día Internacional de los Primates: esfuerzos científicos que empoderan a comunidades en Sudamérica para conservar especies y sus ecosistemas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/30065733/dia-internacional-primates-cientificos-comunidades-sudamerica-14-768x512.jpeg",
    "fecha": "Sep 01, 2025",
    "url": "https://es.mongabay.com/2025/09/dia-internacional-primates-cientificos-comunidades-sudamerica/"
  },
  {
    "titulo": "Al rescate del «colibrí maravilloso»: reforestan con plantas nativas el Alto Utcubamba para proteger al colibrí cola de espátula",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/28160717/2S6A9958-DeNoiseAI-standard-marv-scaled-portada-768x512.jpg",
    "fecha": "Aug 29, 2025",
    "url": "https://es.mongabay.com/2025/08/reforestacion-alto-utcubamba-proteger-colibri-cola-de-espatula-peru/"
  },
  {
    "titulo": "Aves tropicales en declive: el aumento del calor extremo provoca la disminución de sus poblaciones | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/22232736/Captura-de-pantalla-2025-08-22-a-las-4.27.00-p.m-768x512.png",
    "fecha": "Aug 27, 2025",
    "url": "https://es.mongabay.com/2025/08/aves-tropicales-declive-aumento-calor-extremo/"
  },
  {
    "titulo": "¿Cómo una planta de aguas residuales en La Paz se convirtió en santuario de aves? Datos clave",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/30221508/Tachybaptus-dominicus-768x512.jpg",
    "fecha": "Aug 16, 2025",
    "url": "https://es.mongabay.com/short-article/2025/08/planta-aguas-residuales-conservacion-aves/"
  },
  {
    "titulo": "Jaguares son liberados con éxito en Brasil, pero las amenazas persisten",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/08005218/Brasil-1-Jaguar-Panthera-onca-en-el-Pantanal-brasileno-2025-Foto-Gregoire-Dubois-768x512.jpg",
    "fecha": "Aug 16, 2025",
    "url": "https://es.mongabay.com/2025/08/jaguares-liberados-brasil-amenazas/"
  },
  {
    "titulo": "De Galápagos al Atlántico Sur: el viaje de ballenas francas y tiburones en busca de reproducción y supervivencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/30023843/Ballena-TELURIUM_Fecha-12Sept2024_credito-Paula-Faiferman-Siguiendoballenas-768x512.jpg",
    "fecha": "Aug 16, 2025",
    "url": "https://es.mongabay.com/2025/08/viaje-ballenas-francas-tiburones-reproduccion-supervivencia/"
  },
  {
    "titulo": "La lucha silenciosa por rehabilitar y liberar al yaguarundí en Guatemala",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/08073949/Guatemala-1-Yaguarundies-recuperados-del-trafico-de-especies-rehabilitados-por-Arcas-Foto-Christian-Gutierrez-768x513.jpg",
    "fecha": "Aug 15, 2025",
    "url": "https://es.mongabay.com/2025/08/rehabilitar-liberar-yaguarundi-guatemala/"
  },
  {
    "titulo": "El tráfico ilegal que maltrata y vende pumas para garantizarles trofeos a los cazadores en Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/06232428/Puma-silvestre-Foto-Susana-Torres-Mongabay-Latam-768x512.jpg",
    "fecha": "Aug 14, 2025",
    "url": "https://es.mongabay.com/2025/08/trafico-ilegal-pumas-trofeos-cazadores-argentina/"
  },
  {
    "titulo": "La sorprendente misión de elefantes marinos que ayudan a científicos a entender la enigmática corriente del Cabo de Hornos y el cambio climático",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/13000252/PORTADA-Elefante-marino-con-transmisor-satelital-en-bahia-Jackson.-Cortesia-Maritza-Sepulveda-768x512.jpg",
    "fecha": "Aug 14, 2025",
    "url": "https://es.mongabay.com/2025/08/elefantes-marinos-exploran-cabo-de-hornos-cambio-climatico-chile/"
  },
  {
    "titulo": "Los linces vendidos como gatos domésticos que son rehabilitados en un centro de rescate en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/08070259/Mexico-9-El-lince-despierta-el-interes-de-los-cazadores-para-su-comercializacion-Foto-Lizeth-Ovando-768x512.jpg",
    "fecha": "Aug 13, 2025",
    "url": "https://es.mongabay.com/2025/08/linces-vendidos-rehabilitados-mexico/"
  },
  {
    "titulo": "Un refugio para Prince: la historia del rescate de un jaguar que no podrá regresar a la selva en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/08020849/Peru-1-Prince-Jaguar-centro-de-rescate-Pilpintuwasi-Foto-Max-Cabello-768x512.jpg",
    "fecha": "Aug 13, 2025",
    "url": "https://es.mongabay.com/2025/08/refugio-prince-rescate-jaguar-peru/"
  },
  {
    "titulo": "Así es la vida de Barto, un ocelote rescatado del tráfico de vida silvestre en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/08000354/Colombia-1-Barto-ocelote-rescatado-en-vivienda-en-Colombia-2025-Foto-Santiago-Wills-768x512.jpg",
    "fecha": "Aug 12, 2025",
    "url": "https://es.mongabay.com/2025/08/incierto-destino-ocelotes-rescatados-trafico-colombia/"
  },
  {
    "titulo": "Sin salida: la irreversible realidad de los felinos que son rescatados del tráfico de animales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/12153222/Portada-V4-768x512.jpg",
    "fecha": "Aug 12, 2025",
    "url": "https://es.mongabay.com/2025/08/felinos-rescatados-trafico-animales-latinoamerica/"
  },
  {
    "titulo": "Denuncian traslado ilegal de 12 toneladas de aletas de tiburón en Costa Rica bajo figura de “reexportación”",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/11133243/costa-rica-tiburones-aletas-exportacion-entrevista-768x512.jpg",
    "fecha": "Aug 12, 2025",
    "url": "https://es.mongabay.com/2025/08/costa-rica-tiburones-aletas-exportacion-entrevista/"
  },
  {
    "titulo": "“Los drones nos permiten obtener información para tomar medidas de manejo de la naturaleza” | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/11145749/Gonzalo-Rivas-Torres-2025-08-10-at-18.29.47-e1754925145226-768x512.jpeg",
    "fecha": "Aug 11, 2025",
    "url": "https://es.mongabay.com/2025/08/drones-informacion-conservacion-naturaleza-entrevista/"
  },
  {
    "titulo": "Aumentan los erizos negros en Chile: la inteligencia artificial se sumerge en el océano para estudiarlos y controlarlos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/06215400/Erizos-negros-de-puas-largas-en-Rapa-Nui.-Autor-CIMARQ-768x512.png",
    "fecha": "Aug 08, 2025",
    "url": "https://es.mongabay.com/2025/08/sobrepoblacion-erizos-negros-chile-inteligencia-artificial-oceanos/"
  },
  {
    "titulo": "Exploración submarina en Argentina: la expedición científica que cautiva al mundo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/08/06194805/MAR_8-768x512.jpg",
    "fecha": "Aug 07, 2025",
    "url": "https://es.mongabay.com/2025/08/en-vivo-expedicion-submarina-argentina-oceanos/"
  },
  {
    "titulo": "¿Es posible mejorar la relación entre felinos y ganaderos en Costa Rica? Datos clave de un asombroso proyecto de conservación",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/07/31220319/Jaguar-capturado-por-una-camara-trampa-en-una-finca-con-problemas-de-depredacion-en-el-Area-de-Conservacion-La-Amistad-Caribe-2014-768x512.jpg",
    "fecha": "Aug 05, 2025",
    "url": "https://es.mongabay.com/short-article/2025/08/mejorar-relacion-felinos-ganaderos-costa-rica-proyecto-conservacion/"
  },
  {
    "titulo": "El nacimiento de 47 pichones de cardenalitos revive la esperanza a una especie en peligro en Venezuela",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/02021009/Pichones_Samuel-Beomon-2-768x512.jpg",
    "fecha": "Aug 03, 2025",
    "url": "https://es.mongabay.com/short-article/2025/08/nacimiento-pichones-cardenalitos-conservacion-venezuela/"
  },
  {
    "titulo": "Videos captan al conejo de Omiltemi, especie que se creía extinta desde hace  120 años en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/04051644/Octubre_2021_Sylvilagus-insonus-768x512.jpg",
    "fecha": "Aug 01, 2025",
    "url": "https://es.mongabay.com/short-article/2025/08/videos-conejo-de-omiltemi-especie-extinta-mexico/"
  },
  {
    "titulo": "Siguiendo ballenas francas: cómo funciona el proyecto que rastrea sus rutas migratorias desde el espacio exterior | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/30024146/Ballena-SULFURIUM_Fecha-09Sept2024_credito-Paula-Faiferman-Siguiendoballenas-768x512.jpg",
    "fecha": "Jul 31, 2025",
    "url": "https://es.mongabay.com/2025/07/ballenas-francas-monitoreo-satelital-rutas-migratorias-entrevista/"
  },
  {
    "titulo": "Perú: cómo científicos descubrieron una nueva especie de marsupial en el Parque Nacional Río Abiseo mediante códigos de barras de ADN",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/14095848/PNRAB-Marsupial-Pedreo-Peloso-en-Paven-et-al.-2025-1-768x512.png",
    "fecha": "Jul 30, 2025",
    "url": "https://es.mongabay.com/2025/07/peru-descubrieron-nueva-especie-marsupial-adn/"
  },
  {
    "titulo": "Descubren asombrosa especie de nutria en América Latina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/08/26161202/nutria-1-768x512.jpg",
    "fecha": "Jul 28, 2025",
    "url": "https://es.mongabay.com/short-article/2025/07/increible-hallazgo-cientificos-descubren-nueva-nutria/"
  },
  {
    "titulo": "¿En qué se relaciona el avistamiento de una puma hembra con sus crías y la conservación del agua en Ecuador?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/18230502/Copy-of-puma-dormido-768x512.jpg",
    "fecha": "Jul 25, 2025",
    "url": "https://es.mongabay.com/short-article/2025/07/avistamiento-puma-conservacion-agua-ecuador/"
  },
  {
    "titulo": "Datos clave para entender cómo la muerte de una vicuña revela el conflicto entre comunidades indígenas y una minera de litio en Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/14125522/Proyectos-de-litio-y-una-vicuna-en-el-Salar-del-Hombre-Muerto.-Foto-cortesia-de-la-Asamblea-Pueblos-Catamarquenos-en-Resistencia-y-Autodeterminacion-Pucara-768x513.jpg",
    "fecha": "Jul 24, 2025",
    "url": "https://es.mongabay.com/short-article/2025/07/datos-clave-muerte-vicuna-conflicto-comunidad-indigena-litio-argentina/"
  },
  {
    "titulo": "México: ante los derrames de petróleo en el mar, pescadores son compensados con la siembra de tilapias, una especie considerada invasora",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/24133124/1000104091-768x512.jpg",
    "fecha": "Jul 24, 2025",
    "url": "https://es.mongabay.com/2025/07/mexico-derrames-petroleo-pescadores-compensados-siembra-tilapias-invasora/"
  },
  {
    "titulo": "Tras las huellas del jaguar: comunidades shuar y guardaparques se unen para proteger al felino en la Amazonía ecuatoriana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/29001333/Foto-jaguares-Ecuador-1-scaled-e1748477844527-768x512.jpg",
    "fecha": "Jul 23, 2025",
    "url": "https://es.mongabay.com/2025/07/comunidades-shuar-guardaparques-proteger-jaguar-amazonia-ecuatoriana/"
  },
  {
    "titulo": "Escapando de la extinción: imágenes captadas por un campesino confirman el regreso del águila harpía en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/10020947/AguilaHarpia_Juvenil_AlanMonroy-768x512.jpg",
    "fecha": "Jul 22, 2025",
    "url": "https://es.mongabay.com/short-article/2025/07/extincion-imagenes-aguila-harpia-mexico/"
  },
  {
    "titulo": "Colisiones mortales: muerte de ballenas genera alerta en Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/10160827/Ballena-de-Bryde_-Mantagua_Simon-Frenkel_3-768x512.jpg",
    "fecha": "Jul 22, 2025",
    "url": "https://es.mongabay.com/short-article/2025/07/muerte-ballenas-genera-alerta-chile/"
  },
  {
    "titulo": "Cinco impactos ambientales de la nueva autopista de Oaxaca en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/07205346/DJI_0419-768x512.jpg",
    "fecha": "Jul 20, 2025",
    "url": "https://es.mongabay.com/short-article/2025/07/impactos-ambientales-nueva-autopista-oaxaca/"
  },
  {
    "titulo": "Serpientes loro, dragones acuáticos y murciélagos: descubrimientos que asombran a la ciencia | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/22085034/Echinosaura_embera_1-768x512.jpg",
    "fecha": "Jul 19, 2025",
    "url": "https://es.mongabay.com/2025/07/serpientes-loro-dragones-acuaticos-murcielagos-descubrimientos/"
  },
  {
    "titulo": "De Galápagos a Panamá: la épica travesía de Alicia, la tiburón martillo que nadó 1300 km para dar a luz",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/17205402/Researcher-about-to-tag-a-SHH_Credit-to-Mark-Wong-768x512.jpg",
    "fecha": "Jul 18, 2025",
    "url": "https://es.mongabay.com/2025/07/epica-travesia-alicia-tiburon-martillo-dar-a-luz-ecuador-panama/"
  },
  {
    "titulo": "Delfines rosados: científicos detectan altos niveles de mercurio y neumonía en los cetáceos de río en Colombia | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/18024117/Captura-de-pantalla-2025-07-17-a-las-10.40.14%E2%80%AFp.m-768x512.png",
    "fecha": "Jul 18, 2025",
    "url": "https://es.mongabay.com/2025/07/delfines-rosados-contaminacion-mercurio-neumonia-colombia-entrevista/"
  },
  {
    "titulo": "#EnCorto: cinco impactos ambientales de la nueva autopista de Oaxaca en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/07203732/03.-Maria-Arely-Penguilly-768x512.jpg",
    "fecha": "Jul 17, 2025",
    "url": "https://es.mongabay.com/2025/07/en-corto-impactos-ambientales-autopista-oaxaca-mexico/"
  },
  {
    "titulo": "Velo de la Novia: una nueva área natural protegida resguarda uno de los tesoros de la Amazonía peruana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/20214555/Velo-de-La-Novia-4-1_11zon-768x512.jpg",
    "fecha": "Jul 17, 2025",
    "url": "https://es.mongabay.com/2025/07/velo-de-la-novia-nueva-area-natural-protegida-amazonia-peruana/"
  },
  {
    "titulo": "Día Mundial de las Serpientes: cambiar el miedo por el respeto, la misión de quienes las protegen",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/14170933/verde-768x512.jpeg",
    "fecha": "Jul 16, 2025",
    "url": "https://es.mongabay.com/2025/07/dia-mundial-de-las-serpientes-conservacion/"
  },
  {
    "titulo": "Día Mundial de los tiburones: científicos se unen para descifrar sus rutas migratorias y protegerlos alrededor del mundo | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/11141643/Captura-de-pantalla-2025-07-11-a-las-10.08.33%E2%80%AFa.m-768x512.png",
    "fecha": "Jul 14, 2025",
    "url": "https://es.mongabay.com/2025/07/dia-mundial-de-los-tiburones-descifrar-rutas-migratorias-protegerlos-entrevista/"
  },
  {
    "titulo": "Salmón Chinook en Chile: qué hacer con una especie invasora que sustenta a la pesca artesanal de caleta La Barra",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/11202936/creative-commons-768x512.jpg",
    "fecha": "Jul 14, 2025",
    "url": "https://es.mongabay.com/2025/07/salmon-chinook-chile-especie-invasora/"
  },
  {
    "titulo": "Trampa mortal: animales en peligro de extinción mueren ahogados por fallas ambientales y técnicas en el Canal de la Patria en Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/12185756/We_Are_Wild_Foundation-5-768x512.jpg",
    "fecha": "Jul 13, 2025",
    "url": "https://es.mongabay.com/2025/07/trampa-mortal-animales-peligro-extincion-mueren-ahogados-canal-de-la-patria-argentina/"
  },
  {
    "titulo": "Iguanas, caballitos de mar y primates traficados ilegalmente tiene en alerta a Ecuador | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/17232159/Iguana-de-SantaFe-%40PNG-Tui-De-Roy-2019-768x512.jpg",
    "fecha": "Jul 12, 2025",
    "url": "https://es.mongabay.com/2025/07/iguanas-caballitos-de-mar-primates-traficados-ilegalmente-alerta-ecuador/"
  },
  {
    "titulo": "Expedición virtual: un paseo por el Parque Nacional Cordillera Azul de la Amazonía peruana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/09184959/9-Ranas-foto-Alvaro-Del-Campo-1-1-768x512.jpg",
    "fecha": "Jul 11, 2025",
    "url": "https://es.mongabay.com/2025/07/expedicion-virtual-parque-nacional-cordillera-azul-amazonia-peruana/"
  },
  {
    "titulo": "Un refugio inesperado: el amenazado ostrero americano del Pacífico encontró un hogar vital en el noroeste de México | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/10202909/Captura-de-pantalla-2025-07-10-a-las-4.28.37%E2%80%AFp.m-768x512.png",
    "fecha": "Jul 11, 2025",
    "url": "https://es.mongabay.com/2025/07/conservacion-ostrero-americano-pacifico-mexico-entrevista/"
  },
  {
    "titulo": "Castores invasores en Tierra del Fuego: la especie que está arrasando el paisaje natural entre Chile y Argentina | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/26005415/Castor-comiendo-Jan-768x512.jpg",
    "fecha": "Jul 11, 2025",
    "url": "https://es.mongabay.com/2025/07/castores-invasores-tierra-del-fuego-reportaje-fotografico/"
  },
  {
    "titulo": "Galápagos: redescubren un coral solitario que se creía extinto y renueva la esperanza sobre la conservación marina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/08215015/Luis-Rocha-%C2%A9-California-Academy-of-Sciences-768x512.jpg",
    "fecha": "Jul 09, 2025",
    "url": "https://es.mongabay.com/2025/07/galapagos-redescubren-coral-solitario-extinto-conservacion-marina/"
  },
  {
    "titulo": "El legado invisible de los mastodontes: científicos explican cómo su extinción aún afecta a la vegetación chilena | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/08025240/Diversidad-de-mamiferos-extintos-que-habitaron-en-los-alrededores-del-Antiguo-Lago-Tagua-Tagua-ubicado-en-la-zona-central-de-Chile-Ilustracion-por-Mauricio-Alvarez-768x512.jpg",
    "fecha": "Jul 08, 2025",
    "url": "https://es.mongabay.com/2025/07/mastodontes-cientificos-extincion-afecta-vegetacion-chilena-entrevista/"
  },
  {
    "titulo": "Pepino de mar: científicos buscan cultivarlo para preservar la especie frente a la pesca ilegal",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/03140444/CICESE.jpg",
    "fecha": "Jul 03, 2025",
    "url": "https://es.mongabay.com/2025/07/pepino-de-mar-cientificos-buscan-cultivarlo-preservar-especie-pesca-ilegal/"
  },
  {
    "titulo": "Siguiendo a los tiburones: científicos argentinos hallan nuevas pistas sobre sus rutas migratorias y zonas de cría en el Atlántico Sur",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/03095001/Gatopardos-y-cazones-vistos-mediante-estaciones-de-video-subacuaticas-con-cebo-BRUVs-en-Chubut-Patagonia-argentina.-Foto-cortesia-de-Agustin-De-Wysiecki.-Creditos-ProyectoArrecife-768x512.png",
    "fecha": "Jul 03, 2025",
    "url": "https://es.mongabay.com/2025/07/tiburones-cientificos-hallan-nuevas-rutas-migratorias-zonas-cria-atlantico-sur/"
  },
  {
    "titulo": "Tráfico de caballitos de mar: el cruel viaje desde las redes de arrastre hacia los mercados asiáticos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/06/30222658/Sea-Horse-2-copy-768x512.jpg",
    "fecha": "Jul 01, 2025",
    "url": "https://es.mongabay.com/2025/07/trafico-caballitos-de-mar-cruel-viaje-redes-arrastre-mercados-asiaticos/"
  },
  {
    "titulo": "Honduras: proteger al manatí antillano, un compromiso que unió a las comunidades de Salado Barra",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/06/23022849/FOTO-01-768x512.jpg",
    "fecha": "Jun 24, 2025",
    "url": "https://es.mongabay.com/2025/06/honduras-proteger-manati-antillano-comunidades-salado-barra/"
  },
  {
    "titulo": "Puerto Rico crea nueva área marina protegida, clave para la conservación de tortugas, corales y praderas submarinas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/06/18133702/Credit_-Ron-Watkins-_-Ocean-Image-Bank-768x512.jpg",
    "fecha": "Jun 23, 2025",
    "url": "https://es.mongabay.com/2025/06/nueva-area-marina-protegida-conservacion-puerto-rico/"
  },
  {
    "titulo": "Cuando la moda se vuelve amenaza: la historia del visón americano como especie invasora en Argentina | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/09/09205223/Patrick-Buchanan_5-Vison-en-un-criadero-768x512.jpeg",
    "fecha": "Jun 20, 2025",
    "url": "https://es.mongabay.com/2025/06/moda-amenaza-vison-americano-especie-invasora-argentina-reportaje-fotografico/"
  },
  {
    "titulo": "Crean nueva área de conservación regional que concentra más del 50% de carbono de la Amazonía norte del Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/06/19222357/IMG_3945-1-768x512.jpg",
    "fecha": "Jun 20, 2025",
    "url": "https://es.mongabay.com/2025/06/crean-area-conservacion-medio-putumayo-algodon-peru/"
  },
  {
    "titulo": "Paiche en Bolivia: el pez invasor arrasa ríos, cambia la pesca y desafía a la gastronomía local",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/06/17213836/paiche_laguna-Mentiroso_Trinidadcito_Beni_Aldo-Echeverria-2-768x512.jpg",
    "fecha": "Jun 18, 2025",
    "url": "https://es.mongabay.com/2025/06/paiche-bolivia-pez-invasor-arrasa-rios/"
  },
  {
    "titulo": "Nace el corredor de bosque continuo más grande de Ecuador  para almacenar 2.8 billones de toneladas de carbono",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/06/13045747/1-Foto-apertura-768x512.jpeg",
    "fecha": "Jun 16, 2025",
    "url": "https://es.mongabay.com/2025/06/corredor-bosque-continuo-mas-grande-ecuador-almacenar-carbono/"
  },
  {
    "titulo": "Jaguares acorralados: minería ilegal avanza hacia el Parque Nacional Cotacachi-Cayapas, uno de sus últimos refugios en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/29001333/Foto-jaguares-Ecuador-1-scaled-e1748477844527-768x512.jpg",
    "fecha": "Jun 11, 2025",
    "url": "https://es.mongabay.com/2025/06/jaguares-acorralados-mineria-ilegal-parque-cotacachi-cayapas-ecuador/"
  },
  {
    "titulo": "«No se ama lo que no se conoce»: el mensaje detrás del nuevo libro que ilustra y revela la vasta biodiversidad peruana | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/06/09232411/00-CARATULAPARA-mongabay-2025-768x512.jpg",
    "fecha": "Jun 10, 2025",
    "url": "https://es.mongabay.com/2025/06/nuevo-libro-abc-ilustrado-biodiversidad-peru-entrevista-sheila-alvarado/"
  },
  {
    "titulo": "Curiosas imágenes dan esperanza a la supervivencia de las tortugas en América Latina | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/03/30134532/305A0521-1536x1024-1-768x512.jpg",
    "fecha": "Jun 06, 2025",
    "url": "https://es.mongabay.com/2025/06/curiosas-imagenes-supervivencia-tortugas-america-latina-reportaje-fotografico/"
  },
  {
    "titulo": "Historia gráfica | Contaminación por mercurio amenaza a los tiburones en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/06/04145317/1-768x512-1749049984.png",
    "fecha": "Jun 04, 2025",
    "url": "https://es.mongabay.com/2025/06/historia-grafica-contaminacion-mercurio-tiburones-colombia/"
  },
  {
    "titulo": "Argentina: un reducto para las ballenas corre el riesgo de convertirse en zona de sacrificio",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/12/09010047/balance-argentina-5.jpg",
    "fecha": "Jun 02, 2025",
    "url": "https://es.mongabay.com/2025/06/argentina-ballenas-riesgo-zona-sacrificio/"
  },
  {
    "titulo": "Alerta por el incremento de tráfico de tortugas de la Amazonía boliviana hacia Brasil, Perú y Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/02/27155358/45-768x512.jpg",
    "fecha": "Jun 02, 2025",
    "url": "https://es.mongabay.com/2025/06/alerta-incremento-trafico-tortugas-amazonia-boliviana/"
  },
  {
    "titulo": "Ruthmery Pillco recibe el prestigioso Future For Nature Award: “Los niños son agentes para la conservación” | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/29041232/Captura-de-pantalla-2025-05-28-a-las-9.02.02%E2%80%AFp.m-768x512.png",
    "fecha": "May 30, 2025",
    "url": "https://es.mongabay.com/2025/05/ruthmery-pillco-biologa-quechua-recibe-future-for-nature-award-entrevista/"
  },
  {
    "titulo": "Tragedia silenciosa: cientos de aves y mamíferos han muerto ha causa de la gripe aviar en América Latina | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/17021950/Elefantes-marinos-haren-desde-acantilado-foto-Valeria-Falabella-IMG_5643-768x512.jpeg",
    "fecha": "May 30, 2025",
    "url": "https://es.mongabay.com/2025/05/tragedia-silenciosa-muerte-animales-gripe-aviar-america-latina-reportaje-fotografico/"
  },
  {
    "titulo": "Un hotspot en Ecuador muestra cómo los bosques pueden recuperarse de la destrucción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/19134208/Masked-Tree-Frog-Smilisca-phaeota-768x512.jpg",
    "fecha": "May 28, 2025",
    "url": "https://es.mongabay.com/2025/05/hotspot-ecuador-bosques-recuperarse-destruccion/"
  },
  {
    "titulo": "De tierras ganaderas a santuario de biodiversidad: proyecto en Santander revive bosque andino en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/26173518/Andinobates-768x512.jpg",
    "fecha": "May 27, 2025",
    "url": "https://es.mongabay.com/2025/05/proyecto-revive-bosque-andino-colombia/"
  },
  {
    "titulo": "Moscas vampiros, escarabajos y anémonas: tres especies invasoras que amenazan la biodiversidad de América Latina | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/24122122/NestlingFinches-768x512-1.jpg",
    "fecha": "May 24, 2025",
    "url": "https://es.mongabay.com/2025/05/moscas-vampiros-escarabajos-anemonas-especies-invasoras-america-latina/"
  },
  {
    "titulo": "Dragones acuáticos: nueva especie de lagarto espinoso es descrita en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/22084525/00-768x512-1748013154.png",
    "fecha": "May 22, 2025",
    "url": "https://es.mongabay.com/2025/05/dragones-acuaticos-nueva-especie-lagarto-espinoso-colombia/"
  },
  {
    "titulo": "Día Internacional de la Diversidad Biológica: tres proyectos para proteger tapires, ajolotes y árboles",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/20202538/Captura-de-pantalla-2025-05-20-a-las-1.25.04%E2%80%AFp.m-768x512.png",
    "fecha": "May 22, 2025",
    "url": "https://es.mongabay.com/2025/05/dia-internacional-diversidad-biologica-proteger-tapires-ajolotes-arboles/"
  },
  {
    "titulo": "#En Corto: tres claves sobre cómo salvaron a los albatros de patas negras en el Pacífico mexicano",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/03/02010555/BFL_9049-768x512.jpg",
    "fecha": "May 21, 2025",
    "url": "https://es.mongabay.com/2025/05/en-corto-como-salvaron-albatros-de-patas-negras-pacifico-mexicano/"
  },
  {
    "titulo": "Día mundial de las abejas: cinco proyectos que están logrando conservar a una especie clave para la seguridad alimentaria de la humanidad",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/06/13234901/abeja_Omar-Torrico_WCS-768x512.jpg",
    "fecha": "May 20, 2025",
    "url": "https://es.mongabay.com/2025/05/dia-mundial-de-las-abejas-conservar-especie-clave-seguridad-alimentaria/"
  },
  {
    "titulo": "El Triángulo del Puma: la iniciativa de la sociedad civil para proteger la biodiversidad de la Orinoquía en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/06/18042000/Puma-en-Santa-Cruz-Credito-Franco-Bucci-Rewilding-Argentina-768x512.jpeg",
    "fecha": "May 20, 2025",
    "url": "https://es.mongabay.com/2025/05/triangulo-del-puma-sociedad-civil-proteger-biodiversidad-colombia/"
  },
  {
    "titulo": "Elefantes marinos podrían tardar 100 años en recuperarse del impacto de la gripe aviar en Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/17014718/Captura-de-pantalla-2025-05-16-a-las-6.46.45%E2%80%AFp.m-768x512.png",
    "fecha": "May 19, 2025",
    "url": "https://es.mongabay.com/2025/05/elefantes-marinos-gripe-aviar-argentina/"
  },
  {
    "titulo": "¿Se pueden salvar los humedales? Jóvenes, científicos y comunidades en Latinoamérica lo están logrando | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/30221615/241122_LEGR-768x512.jpg",
    "fecha": "May 18, 2025",
    "url": "https://es.mongabay.com/2025/05/salvar-humedales-latinoamerica-conservacion-lecturas-ambientales/"
  },
  {
    "titulo": "Tres latinoamericanos recibieron el premio Whitley, considerado el “Oscar verde” de la conservación",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/16031318/Premio-whitley-2025-05-15-a-las-22.02.24-768x512.png",
    "fecha": "May 16, 2025",
    "url": "https://es.mongabay.com/2025/05/tres-latinoamericanos-recibieron-premio-whitley-conservacion/"
  },
  {
    "titulo": "#EnCorto: tres claves de un proyecto que busca descifrar el misterio de las tortugas viajeras",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/05/06072739/Captura-de-Pantalla-2024-05-06-a-las-0.16.59-768x512.png",
    "fecha": "May 16, 2025",
    "url": "https://es.mongabay.com/2025/05/en-corto-proyecto-descifrar-misterio-tortugas-viajeras/"
  },
  {
    "titulo": "Expedición Virtual: un paseo por la reserva de los machiguengas de Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/13234751/Rana-1-1-768x512.jpg",
    "fecha": "May 14, 2025",
    "url": "https://es.mongabay.com/2025/05/expedicion-virtual-reserva-machiguengas-peru/"
  },
  {
    "titulo": "#EnCorto: tres claves sobre cómo Colombia podría ayudar en la salvación del jaguar en el continente",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/12133741/Foto-1-1-768x512.jpg",
    "fecha": "May 13, 2025",
    "url": "https://es.mongabay.com/2025/05/en-corto-colombia-conservacion-jaguar-continente/"
  },
  {
    "titulo": "Luces de esperanza: la pesca con redes iluminadas protege a las tortugas marinas en el Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/12194810/WWF-2-768x512.jpg",
    "fecha": "May 13, 2025",
    "url": "https://es.mongabay.com/2025/05/pesca-redes-iluminadas-protege-tortugas-marinas-peru/"
  },
  {
    "titulo": "El fin de la abundancia: la crisis climática golpea a la pesca de langosta y al sustento de comunidades en Baja California Sur",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/12202857/expanded-768x512.jpg",
    "fecha": "May 13, 2025",
    "url": "https://es.mongabay.com/2025/05/crisis-climatica-golpea-pesca-langosta-comunidades-baja-california-sur/"
  },
  {
    "titulo": "Monstruos marinos: pesca ilegal, barcos y megaproyectos amenazan la supervivencia de las especies de Latinoamérica | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/10160735/Ballena-fin_Chiloe_ONG-Panthalassa_1-768x512.jpg",
    "fecha": "May 11, 2025",
    "url": "https://es.mongabay.com/2025/05/monstruos-marinos-pesca-ilegal-barcos-megaproyectos-amenazan-especies-latinoamerica-lecturas-ambientales/"
  },
  {
    "titulo": "Asombrosas imágenes de cámaras trampa revelan la urgencia de crear corredores de conservación para proteger a los felinos de América Latina | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/10/19010000/IMG_0011-768x512.jpg",
    "fecha": "May 09, 2025",
    "url": "https://es.mongabay.com/2025/05/camaras-trampa-corredores-conservacion-felinos-america-latina-reportaje-fotografico/"
  },
  {
    "titulo": "Científicas suman tecnología y perros entrenados para salvar a la tortuga terrestre más austral del mundo en Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/02235213/Dario-Podesta-2-768x512.jpg",
    "fecha": "May 06, 2025",
    "url": "https://es.mongabay.com/2025/05/cientificas-tecnologia-perros-entrenados-salvar-tortuga-terrestre-mas-austral-del-mundo-argentina/"
  },
  {
    "titulo": "Proyecto de escalera náutica amenaza a mantarrayas gigantes, ballenas y tortugas en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/02185957/Ballena_Juvenil_5-768x512.jpg",
    "fecha": "May 05, 2025",
    "url": "https://es.mongabay.com/2025/05/proyecto-escalera-nautica-amenaza-mantarrayas-gigantes-ballenas-tortugas-mexico/"
  },
  {
    "titulo": "Proyecto portuario pone en riesgo al sistema de arrecifes de Veracruz, pese a fallo de la Corte mexicana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/05/01195900/puerto1-768x512.jpg",
    "fecha": "May 02, 2025",
    "url": "https://es.mongabay.com/2025/05/proyecto-portuario-riesgo-sistema-arrecifes-veracruz-corte-mexicana/"
  },
  {
    "titulo": "Buena noticia para los elefantes marinos: una colonia en Chile duplicó sus individuos tras padecer la gripe aviar",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/30164705/Elefante-marino.-Autor-Francisco-Branas-768x512.jpg",
    "fecha": "May 01, 2025",
    "url": "https://es.mongabay.com/2025/05/buena-noticia-elefantes-marinos-chile-gripe-aviar/"
  },
  {
    "titulo": "De planta de aguas residuales a santuario de aves: humedal artificial alberga a 13 mil aves en Baja California Sur",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/30201215/Captura-de-Pantalla-2025-04-30-a-las-13.11.55-768x512.png",
    "fecha": "May 01, 2025",
    "url": "https://es.mongabay.com/2025/05/santuario-de-aves-humedal-artificial-baja-california-sur/"
  },
  {
    "titulo": "Justicia peruana evalúa si Repsol pagará $128 millones por derrame de petróleo para evitar juicio",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/25203732/Ancon_004-768x512.jpg",
    "fecha": "Apr 30, 2025",
    "url": "https://es.mongabay.com/2025/04/justicia-peruana-repsol-multa-derrame-petroleo/"
  },
  {
    "titulo": "México: pesca ilegal en la Reserva de la Biosfera Islas Marías amenaza tiburones y otras especies protegidas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/29183407/Octavio_Aburto-_DSC7516-768x513.jpg",
    "fecha": "Apr 30, 2025",
    "url": "https://es.mongabay.com/2025/04/mexico-pesca-ilegal-islas-marias-amenaza-tiburones-especies-protegidas/"
  },
  {
    "titulo": "Tribunal boliviano emite fallo inédito a favor del jaguar, su hábitat y sus defensores",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/03111733/Jaguar-SERFOR-768x512.jpg",
    "fecha": "Apr 28, 2025",
    "url": "https://es.mongabay.com/2025/04/tribunal-boliviano-fallo-inedito-jaguar-defensores/"
  },
  {
    "titulo": "«El tráfico ilegal no es nacional, es un problema mundial y es el tercer negocio más lucrativo ilegal del mundo» | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/30162653/FOTO-2-trafico-de-fauna-madre-de-dios-18-768x512.jpg",
    "fecha": "Apr 26, 2025",
    "url": "https://es.mongabay.com/podcast/2025/04/trafico-ilegal-problema-mundial-tercer-negocio-mas-lucrativo-ilegal-del-mundo-entrevista/"
  },
  {
    "titulo": "Día Mundial de los Pingüinos: la batalla por conservar a estas extraordinarias aves en Chile, Argentina y Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/22193120/Captura-de-Pantalla-2025-04-22-a-las-12.28.33-768x512.png",
    "fecha": "Apr 25, 2025",
    "url": "https://es.mongabay.com/2025/04/dia-mundial-de-los-pinguinos-conservar-extraordinarias-aves-chile-argentina-peru/"
  },
  {
    "titulo": "Salvar a los locos: buzos de la isla chilena Ascensión restauran el fondo marino para asegurar su subsistencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/23013411/Buzos-Ascension-2025-04-15-at-18.58.04-768x512.jpeg",
    "fecha": "Apr 24, 2025",
    "url": "https://es.mongabay.com/2025/04/locos-isla-ascension-restauran-fondo-marino-chile/"
  },
  {
    "titulo": "“Lima es uno de los lugares donde fluye una gran parte del tráfico de especies para salir hacia el extranjero” | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/02/01045024/loros_trafico_mongabay1-768x512.jpeg",
    "fecha": "Apr 24, 2025",
    "url": "https://es.mongabay.com/2025/04/peru-trafico-especies-aves-entrevista/"
  },
  {
    "titulo": "Cristino Castro, el defensor que ayudó a crear un santuario de tortugas en las costas de Oaxaca y fue asesinado",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/08004302/Cristino-2-768x512.jpg",
    "fecha": "Apr 23, 2025",
    "url": "https://es.mongabay.com/2025/04/cristino-castro-defensor-oaxaca-asesinado/"
  },
  {
    "titulo": "Serpientes, peces, ratones y murciélagos: científicos descubren fascinantes especies en Latinoamérica | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/20144706/Nueva-especie-1_batcheditor_fotor-768x512.jpg",
    "fecha": "Apr 19, 2025",
    "url": "https://es.mongabay.com/2025/04/serpientes-peces-ratones-y-murcielagos-cientificos-descubren-fascinantes-especies-en-latinoamerica-coyuntura-ambiental/"
  },
  {
    "titulo": "Tortugas gigantes, jaguares y ranas regresan a su hábitat gracias a proyectos de reintroducción | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/02/24000322/305A0584-768x512.jpg",
    "fecha": "Apr 18, 2025",
    "url": "https://es.mongabay.com/2025/04/tortugas-gigantes-jaguares-ranas-reintroduccion-reportaje-fotografico/"
  },
  {
    "titulo": "Proyecto Tiburón: una alianza entre científicas y pescadores busca salvar a estas especies en el Golfo de California",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/16054054/04-2025-ORGCAS-TIBURON-1-768x512.jpg",
    "fecha": "Apr 16, 2025",
    "url": "https://es.mongabay.com/2025/04/proyecto-tiburon-salvar-especies-golfo-de-california/"
  },
  {
    "titulo": "Descubren nueva especie de serpiente loro en el Cerrado brasileño gracias a un curioso bigote",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/14175333/IMG_5116-scaled-1-768x512.jpg",
    "fecha": "Apr 15, 2025",
    "url": "https://es.mongabay.com/2025/04/descubren-serpiente-loro-brasil/"
  },
  {
    "titulo": "Tras el rastro del jaguar: excazadores y científicos se unen para obtener una radiografía del amenazado felino en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/10062200/Jaguar-capture-in-Laguna-Om-Daniela-Medellin-Laboratory-of-ecology-and-conservation-of-wildlife-UNAM-91-768x511.jpg",
    "fecha": "Apr 14, 2025",
    "url": "https://es.mongabay.com/2025/04/excazadores-cientificos-conservacion-jaguar-mexico/"
  },
  {
    "titulo": "Animales traficados, congelados y a punto de ser fusilados: así avanza el escándalo de Caza & Safari en Argentina | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/12171102/Jason-Bruce-2014-e1739381628432-768x512.jpg",
    "fecha": "Apr 13, 2025",
    "url": "https://es.mongabay.com/2025/04/animales-trafico-congelados-escandalo-caza-safari-argentina/"
  },
  {
    "titulo": "Caza & Safari: la Justicia argentina procesa a otro de los acusados en el caso de presunto tráfico de fauna",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/22192435/6-2-768x512.jpg",
    "fecha": "Apr 10, 2025",
    "url": "https://es.mongabay.com/2025/04/caza-safari-justicia-argentina-procesa-acusado-trafico-fauna/"
  },
  {
    "titulo": "Áreas protegidas y territorios indígenas: el refugio clave para los jaguares en la Amazonía",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/11/15002019/JAGUAR3-768x512.jpeg",
    "fecha": "Apr 08, 2025",
    "url": "https://es.mongabay.com/2025/04/areas-protegidas-territorios-indigenas-refugio-clave-jaguares-amazonia/"
  },
  {
    "titulo": "Cultivar ostiones: la odisea de los buzos mexicanos que se sumergen en la pesca responsable",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/08124345/Foto-1_Heladio-Soriano-coloca-los-ostiones-que-captura-en-la-red-adherida-a-una-camara-de-llanta_Foto_Julien-Guichard-768x512.jpeg",
    "fecha": "Apr 08, 2025",
    "url": "https://es.mongabay.com/2025/04/cultivar-ostiones-buzos-mexicanos-pesca-responsable/"
  },
  {
    "titulo": "El impacto de la actividad humana en la biodiversidad: “Tenemos que aprender a convivir y no destrozar todo”",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/10/25235019/%C2%A9-Ian-Dyball-_-Shutterstock.com_-768x512.jpg",
    "fecha": "Apr 07, 2025",
    "url": "https://es.mongabay.com/2025/04/impacto-actividad-humana-biodiversidad-entrevista/"
  },
  {
    "titulo": "La reintroducción de los jaguares: ¿qué pasa con los animales que son rescatados del tráfico?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/21233829/WhatsApp-Image-2025-03-18-at-10.46.50-AM-768x512.jpeg",
    "fecha": "Apr 03, 2025",
    "url": "https://es.mongabay.com/2025/04/reintroduccion-jaguares-animales-rescatados-trafico/"
  },
  {
    "titulo": "La nutria gigante lucha por prevalecer: científicos identifican 22 zonas claves para protegerla",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/01171828/nutrias-peru-768x450.png",
    "fecha": "Apr 01, 2025",
    "url": "https://es.mongabay.com/2025/04/nutria-gigante-lucha-por-prevalecer-identifican-zonas-claves-para-protegerla/"
  },
  {
    "titulo": "Jaguares, tiburones, peces y ranas bajo grave amenaza por proyectos extractivos y de construcción | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/26144513/Jaguar-en-el-Parque-de-las-Leyendas-Patronato-del-Parque-de-las-Leyendas-768x512.jpeg",
    "fecha": "Mar 29, 2025",
    "url": "https://es.mongabay.com/2025/03/jaguares-tiburones-peces-ranas-bajo-amenaza-proyectos-extractivos-construccion/"
  },
  {
    "titulo": "Peleas ilegales de gallos amenazan a tortugas marinas en peligro de extinción en Centroamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/24042045/PORTADA-hawksbill-sea-turtle-2-768x512.jpg",
    "fecha": "Mar 29, 2025",
    "url": "https://es.mongabay.com/2025/03/peleas-ilegales-gallos-amenazan-tortugas-marinas-en-peligro-de-extincion-centroamerica/"
  },
  {
    "titulo": "Científicos de Brasil trabajan para proteger y rehabilitar a dos especies de manatíes",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/25223959/WhatsApp-Image-2025-03-25-at-5.31.12-PM-1-768x512.jpeg",
    "fecha": "Mar 28, 2025",
    "url": "https://es.mongabay.com/2025/03/cientificos-brasil-proteger-rehabilitar-manaties/"
  },
  {
    "titulo": "Chile: pescadores artesanales protegen a un pequeño pez dentro del área marina protegida Pitipalena Añihué",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/25154008/Pesca-estuario-fiordo.-Autora-Gabriela-Nunez-Arancibi-768x512.jpeg",
    "fecha": "Mar 27, 2025",
    "url": "https://es.mongabay.com/2025/03/chile-pescadores-artesanales-protegen-pez-puye-pitipalena-anihue/"
  },
  {
    "titulo": "¿Qué está pasando con la pesca ilegal frente a la Reserva Nacional de Illescas? | Podcast",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/23223209/DJI_0567-768x512.jpg",
    "fecha": "Mar 26, 2025",
    "url": "https://es.mongabay.com/podcast/2025/03/que-esta-pasando-con-la-pesca-ilegal-en-la-resera-nacional-de-illescas-podcast/"
  },
  {
    "titulo": "Con olfato y corazón: la historia del entrenador y los “perros tigreros” que rastrean jaguares para protegerlos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/19210650/Captura-de-Pantalla-2025-03-19-a-las-14.06.26-768x512.png",
    "fecha": "Mar 25, 2025",
    "url": "https://es.mongabay.com/2025/03/entrenador-perros-tigreros-rastrean-jaguares-protegerlos/"
  },
  {
    "titulo": "Sol y Luna, los dos cachorros de jaguar rescatados del tráfico de fauna silvestre en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/24134919/1-768x512.jpeg",
    "fecha": "Mar 24, 2025",
    "url": "https://es.mongabay.com/2025/03/sol-luna-cachorros-jaguar-rescatados-trafico-fauna-silvestre-peru/"
  },
  {
    "titulo": "Océanos en crisis: derrames de petróleo, megacruceros y proyectos urbanísticos ponen en peligro la biodiversidad marina de México |  Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/17025300/MG_9846-768x512.jpg",
    "fecha": "Mar 23, 2025",
    "url": "https://es.mongabay.com/2025/03/oceanos-en-crisis-derrames-de-petroleo-megacruceros-mexico/"
  },
  {
    "titulo": "Imágenes de cámaras trampa y sonidos revelan los secretos mejor guardado de cinco pequeños gatos silvestres de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/27012656/FOTO-5-PRO-CARNIVOROS-768x512.jpg",
    "fecha": "Mar 22, 2025",
    "url": "https://es.mongabay.com/2025/03/camaras-trampa-sonidos-revelan-secretos-pequenos-gatos-silvestres-latinoamerica/"
  },
  {
    "titulo": "Conservación en la Caatinga: ¿cómo priorizar áreas protegidas para el futuro?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/05231350/MONODE_1-Portada-768x512.jpg",
    "fecha": "Mar 21, 2025",
    "url": "https://es.mongabay.com/2025/03/conservacion-caatinga-como-priorizar-areas-protegidas-futuro/"
  },
  {
    "titulo": "Cuando el agua volvió a un páramo de Ecuador también regresaron los venados y los pumas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/19193516/puma-768x450.png",
    "fecha": "Mar 19, 2025",
    "url": "https://es.mongabay.com/2025/03/conservacion-agua-paramo-ecuador-regresaron-venados-pumas/"
  },
  {
    "titulo": "¿Cuál es el impacto de los perros ferales en la biodiversidad de Latinoamérica?  | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/06/04001916/Perros-atacan-danta-768x375.jpg",
    "fecha": "Mar 16, 2025",
    "url": "https://es.mongabay.com/2025/03/perros-ferales-sin-control-amenazan-biodiversidad-latinoamerica/"
  },
  {
    "titulo": "Muerte de jaguares, ballenas y vicuñas alertan sobre la grave situación que enfrenta la biodiversidad en la Latinoamérica | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/10160827/Ballena-de-Bryde_-Mantagua_Simon-Frenkel_3-768x512.jpg",
    "fecha": "Mar 15, 2025",
    "url": "https://es.mongabay.com/2025/03/muerte-jaguares-ballenas-vicunas-grave-situacion-biodiversidad-latinoamerica/"
  },
  {
    "titulo": "Imágenes revelan la tragedia de los cóndores: disparos, envenenamiento y contaminación amenazan a la especie en Sudamérica | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/28043628/condor1-768x512.jpeg",
    "fecha": "Mar 14, 2025",
    "url": "https://es.mongabay.com/2025/03/imagenes-revelan-tragedia-condores-sudamerica-reportaje-fotografico/"
  },
  {
    "titulo": "En Perú introducen ilegalmente a los capibaras en la comercialización de carnes silvestres",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/04/13164011/Cabybara-colombia_5964-768x512.jpg",
    "fecha": "Mar 14, 2025",
    "url": "https://es.mongabay.com/2025/03/peru-introducen-ilegalmente-capibaras-comercializacion-carnes-silvestres/"
  },
  {
    "titulo": "El lobo mexicano, una especie en peligro de extinción que se resiste a desaparecer de los territorios que alguna vez reinó",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/11214312/Lobo_Mexicano_0009-768x512.jpg",
    "fecha": "Mar 12, 2025",
    "url": "https://es.mongabay.com/2025/03/lobo-mexicano-peligro-extincion/"
  },
  {
    "titulo": "Deficiente fiscalización de autoridades peruanas facilita transporte irregular de más de 1500 toneladas de tiburones protegidos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/10180912/Portada-2-768x512.jpg",
    "fecha": "Mar 12, 2025",
    "url": "https://es.mongabay.com/2025/03/deficiente-fiscalizacion-autoridades-peruanas-facilita-transporte-irregular-toneladas-tiburones-protegidos/"
  },
  {
    "titulo": "Gato andino y su cachorro grabados por primera vez en Mendoza: imágenes clave del felino más amenazado de América",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/07174457/gato-andino-1_-credito_-Juan-Repucci-de-Alianza-Gato-Andino-768x512.jpg",
    "fecha": "Mar 10, 2025",
    "url": "https://es.mongabay.com/2025/03/gato-andino-cachorro-grabados-por-primera-vez-mendoza-felino-mas-amenazado-america/"
  },
  {
    "titulo": "México: imágenes satelitales revelan los impactos del boom inmobiliario de Oaxaca tras la nueva autopista",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/07205346/DJI_0419-768x512.jpg",
    "fecha": "Mar 10, 2025",
    "url": "https://es.mongabay.com/2025/03/mexico-imagenes-satelitales-revelan-impactos-boom-inmobiliario-oaxaca-nueva-autopista/"
  },
  {
    "titulo": "Jaguares, tiburones ballena, tortugas, osos y armadillos se convierten en aliados inesperados de las comunidades para conservar la biodiversidad |  Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/07/31220319/Jaguar-capturado-por-una-camara-trampa-en-una-finca-con-problemas-de-depredacion-en-el-Area-de-Conservacion-La-Amistad-Caribe-2014-768x512.jpg",
    "fecha": "Mar 09, 2025",
    "url": "https://es.mongabay.com/2025/03/jaguares-tiburones-ballena-tortugas-osos-armadillos-aliados-conservacion/"
  },
  {
    "titulo": "Imágenes del horror de la caza y del tráfico de fauna silvestre en Argentina | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/06/18042009/Pumas-Gonzalo-Pardo-1-768x512.jpg",
    "fecha": "Mar 07, 2025",
    "url": "https://es.mongabay.com/2025/03/imagenes-horror-caza-trafico-fauna-silvestre-argentina-reportaje-fotografico/"
  },
  {
    "titulo": "Más de 1300 animales estarían en peligro por la futura construcción del Arena de Lima dentro de un zoológico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/26144508/Primate-en-el-Parque-de-la-leyendas-Patronato-del-Parque-de-las-Leyendas-768x512.jpeg",
    "fecha": "Mar 06, 2025",
    "url": "https://es.mongabay.com/2025/03/animales-peligro-construccion-arena-de-lima-peru-zoologico/"
  },
  {
    "titulo": "Cierra la COP16 con avances tímidos y dudas sobre cómo implementarlos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/03221108/WhatsApp-Image-2025-02-27-at-19.38.46-768x512.jpeg",
    "fecha": "Mar 04, 2025",
    "url": "https://es.mongabay.com/2025/03/cop16-avances-timidos-dudas-sobre-como-implementarlos/"
  },
  {
    "titulo": "Día Mundial de la Vida Silvestre: del jaguar a la ballena jorobada, un viaje a iniciativas exitosas de conservación",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/03/01170326/Ballena-Jorobada-aleta-caudal-credito-Depositphotos-gentileza-WCS-Argentina_-web_1-768x512.jpg",
    "fecha": "Mar 03, 2025",
    "url": "https://es.mongabay.com/2025/03/dia-mundial-vida-silvestre-iniciativas-exitosas-de-conservacion/"
  },
  {
    "titulo": "De la extinción a la esperanza: la historia de supervivencia del cardenalito, el periquito dorado y el semillero de pico grande",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/02021009/Pichones_Samuel-Beomon-2-768x512.jpg",
    "fecha": "Mar 01, 2025",
    "url": "https://es.mongabay.com/2025/03/extincion-esperanza-historia-supervivencia-aves-conservacion/"
  },
  {
    "titulo": "Amenazas silenciosas: nuevo censo analiza situación de los flamencos en el Triángulo del Litio",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/28033114/d3afa360-d213-47a0-8d38-b928cf073652-768x512.jpeg",
    "fecha": "Feb 28, 2025",
    "url": "https://es.mongabay.com/2025/02/amenazas-silenciosas-censo-analiza-situacion-flamencos-triangulo-del-litio/"
  },
  {
    "titulo": "Ostión de placer: la cruzada de un grupo de pescadores mexicanos para proteger a una especie en peligro",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/03192131/pescadores-ostiones-mexico-cultivo-nayarit-1-768x512.jpg",
    "fecha": "Feb 26, 2025",
    "url": "https://es.mongabay.com/2025/02/pescadores-ostiones-mexico-cultivo-nayarit-conservacion/"
  },
  {
    "titulo": "Ballenas y delfines en peligro: el Golfo de California sufre disminución alarmante de especies",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/09073923/08-768x512.jpg",
    "fecha": "Feb 25, 2025",
    "url": "https://es.mongabay.com/2025/02/ballenas-delfines-peligro-golfo-de-california-disminucion-alarmante-especies/"
  },
  {
    "titulo": "La cruda realidad de la caza y el tráfico ilegal de especies en América Latina | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/22131351/caza-en-argentina-768x450.png",
    "fecha": "Feb 23, 2025",
    "url": "https://es.mongabay.com/2025/02/caza-trafico-ilegal-especies-america-latina/"
  },
  {
    "titulo": "Oso de anteojos: campesinos se unen a científicos para proteger la especie",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/20025841/5.-Foto-22El-PATO22-Salcedo-WCS-Colombia-DSC_5123-768x511.jpg",
    "fecha": "Feb 21, 2025",
    "url": "https://es.mongabay.com/2025/02/oso-de-anteojos-campesinos-cientificos-conservacion/"
  },
  {
    "titulo": "Nuevo proyecto de megacruceros amenaza al pez más grande del mundo en Baja California Sur",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/17023449/MG_9822-768x512.jpg",
    "fecha": "Feb 20, 2025",
    "url": "https://es.mongabay.com/2025/02/megacruceros-amenaza-pez-mas-grande-del-mundo-baja-california-sur/"
  },
  {
    "titulo": "Argentina: la muerte de una vicuña expone la pelea de una comunidad de Catamarca contra un gigante del litio",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/14125347/Vicunas-en-la-Puna-catamarquena.-Foto-cortesia-de-la-Asamblea-Pueblos-Catamarquenos-en-Resistencia-y-Autodeterminacion-Pucara-1-768x501.jpg",
    "fecha": "Feb 17, 2025",
    "url": "https://es.mongabay.com/2025/02/argentina-muerte-vicuna-expone-pelea-comunidad-catamarca-contra-gigante-litio/"
  },
  {
    "titulo": "Descubren en Ecuador una nueva especie de anaconda gigante en tierras indígenas waorani",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/12174219/PORTADA-A-northern-green-anaconda-eating-a-deer.-Credit-Jesus-Rivas-3-768x512.jpg",
    "fecha": "Feb 12, 2025",
    "url": "https://es.mongabay.com/2025/02/descubren-nueva-especie-anaconda-gigante-ecuador/"
  },
  {
    "titulo": "Investigación apunta a Europa y Norteamérica por la reproducción y exportación ilegales de ranas venenosas de Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/10175547/Phyllobates-terribilis_Jhonattan-Vanegas-2-768x512.jpg",
    "fecha": "Feb 11, 2025",
    "url": "https://es.mongabay.com/2025/02/europa-norteamerica-reproduccion-exportacion-ilegal-ranas-venenosas-colombia/"
  },
  {
    "titulo": "Tragedia silenciosa: Chile encabeza las cifras de muertes de ballenas debido a colisiones con barcos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/10160735/Ballena-fin_Chiloe_ONG-Panthalassa_1-768x512.jpg",
    "fecha": "Feb 11, 2025",
    "url": "https://es.mongabay.com/2025/02/chile-encabeza-cifras-muertes-ballenas-colisiones-barcos/"
  },
  {
    "titulo": "Mussa Coral Fest: la ciencia de la restauración de corales se va de fiesta en México | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/30063827/grupalbuzosportada.jpg-768x512.jpeg",
    "fecha": "Feb 06, 2025",
    "url": "https://es.mongabay.com/2025/02/mussa-coral-fest-ciencia-restauracion-corales-mexico-entrevista/"
  },
  {
    "titulo": "Misterioso gato de las pampas es registrado por primera vez en el bosque seco de Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/10/07024012/FOTO-1-Pampas-cat_Peru3_Alvaro-Garcia-768x512.jpg",
    "fecha": "Feb 06, 2025",
    "url": "https://es.mongabay.com/2025/02/misterioso-gato-de-las-pampas-registrado-por-primera-vez-bosque-seco-ecuador/"
  },
  {
    "titulo": "Cardenalito pa’ rato: la batalla de expertos en Venezuela para salvar a un ave en peligro",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/02011521/Red-Siskin-Flock-photo-by-Samuel-Beomon-2-768x511.jpg",
    "fecha": "Feb 04, 2025",
    "url": "https://es.mongabay.com/2025/02/cardenalito-batalla-venezuela-salvar-ave-en-peligro/"
  },
  {
    "titulo": "Historia gráfica | Concho, el sapo en peligro que aparece en el nuevo álbum de Bad Bunny",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/02/01002024/concho-768x450.png",
    "fecha": "Feb 01, 2025",
    "url": "https://es.mongabay.com/2025/02/historia-grafica-concho-sapo-en-peligro-bad-bunny/"
  },
  {
    "titulo": "Una rana mexicana se enfrenta al gobierno de Aguascalientes: lucha judicial para salvarla de la extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/28180923/Smilisca-dentata-1-foto_-Bruno-Sanchez-768x512.jpeg",
    "fecha": "Jan 30, 2025",
    "url": "https://es.mongabay.com/2025/01/rana-mexicana-enfrenta-gobierno-aguascaliente-lucha-judicial-salvarla-extincion/"
  },
  {
    "titulo": "Descubren 27 nuevas especies en el paisaje del Alto Mayo, en la Amazonía peruana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/20145034/2.-Scolomys-sp-new-spiny-mouse-Ronald-Diaz-768x512.jpg",
    "fecha": "Jan 28, 2025",
    "url": "https://es.mongabay.com/2025/01/descubren-nuevas-especies-bosque-de-proteccion-alto-mayo-amazonia-peruana/"
  },
  {
    "titulo": "Fauna silvestre atrapada por el muro fronterizo entre Estados Unidos y México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/12/11181003/black-bear-still-768x512.jpg",
    "fecha": "Jan 20, 2025",
    "url": "https://es.mongabay.com/2025/01/fauna-silvestre-atrapada-por-muro-fronterizo-entre-estados-unidos-mexico/"
  },
  {
    "titulo": "Concho, el sapo que recuerda la urgencia de salvar de la extinción a las especies del planeta | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/14203358/1-1-768x512.jpg",
    "fecha": "Jan 18, 2025",
    "url": "https://es.mongabay.com/2025/01/concho-sapo-urgencia-salvar-extincion-especies-planeta/"
  },
  {
    "titulo": "La historia de Concho, el sapo en peligro que aparece en el nuevo álbum de Bad Bunny | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/13234317/sapo-concho-768x512.jpg",
    "fecha": "Jan 14, 2025",
    "url": "https://es.mongabay.com/2025/01/concho-sapo-en-peligro-que-aparece-nuevo-album-bad-bunny/"
  },
  {
    "titulo": "Latinoamérica: las 10 historias gráficas que marcaron nuestra cobertura en 2024",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/02215447/banner-wp-768x450.png",
    "fecha": "Jan 05, 2025",
    "url": "https://es.mongabay.com/2025/01/latinoamerica-historias-graficas-que-marcaron-nuestra-cobertura-2024/"
  },
  {
    "titulo": "Cámaras trampa: 10 imágenes asombrosas que registraron a especies emblemáticas en 2024",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/01/03161210/osa-de-anteojos-768x450.png",
    "fecha": "Jan 03, 2025",
    "url": "https://es.mongabay.com/2025/01/camaras-trampa-imagenes-asombrosas-que-registraron-especies-emblematicas-2024/"
  },
  {
    "titulo": "La ley de la UE contra la deforestación pone presión sobre la ganadería colombiana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/04063615/Captura-de-Pantalla-2023-08-03-a-las-22.55.05-768x512.png",
    "fecha": "Dec 31, 2024",
    "url": "https://es.mongabay.com/2024/12/ley-contra-deforestacion-pone-presion-sobre-ganaderia-colombiana/"
  },
  {
    "titulo": "Mongabay Latam: las 10 historias sobre mujeres que nos inspiraron en 2024",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/05/30063431/adler-0417-768x512.jpg",
    "fecha": "Dec 26, 2024",
    "url": "https://es.mongabay.com/2024/12/historias-sobre-mujeres-que-nos-inspiraron-en-2024/"
  },
  {
    "titulo": "Derrame de petróleo amenaza una de las áreas marinas más biodiversas de Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/12/24150308/derrame-petroleo-lobitos1-foto-minam-768x512.jpg",
    "fecha": "Dec 24, 2024",
    "url": "https://es.mongabay.com/2024/12/derrame-de-petroleo-amenaza-areas-marinas-biodiversas-peru/"
  },
  {
    "titulo": "Cazadores, narcotráfico y deforestación: las graves amenazas que enfrenta el jaguar | Cinco lecturas sobre el tema",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/12/05201703/Jaguar_Carlos-Navarro-03-768x512.jpg",
    "fecha": "Dec 16, 2024",
    "url": "https://es.mongabay.com/2024/12/cazadores-narcotrafico-deforestacion-graves-amenazas-enfrenta-jaguar/"
  },
  {
    "titulo": "Tres especies invasoras que amenazan la biodiversidad de Colombia, México y Argentina | #CoyunturaAmbiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/02/13070605/naturalista-leon-768x512.jpeg",
    "fecha": "Dec 14, 2024",
    "url": "https://es.mongabay.com/2024/12/especies-invasoras-amenazan-biodiversidad-colombia-mexico-argentina/"
  },
  {
    "titulo": "Científicos argentinos advierten sobre el impacto de la explotación de litio en anfibios",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/12/03181038/leptodactylus-luctator-768x512.jpg",
    "fecha": "Dec 10, 2024",
    "url": "https://es.mongabay.com/2024/12/cientificos-argentinos-advierten-impacto-explotacion-litio-en-anfibios/"
  },
  {
    "titulo": "Pelea de invasores: descubren escarabajo invasor en Bolivia que ataca a eucaliptos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/12/03162149/Un-escarabajo-ingresando-a-un-tronco-de-un-eucalipto.-Foto-Fernando-Guerra-768x513.jpg",
    "fecha": "Dec 04, 2024",
    "url": "https://es.mongabay.com/2024/12/pelea-de-invasores-descubren-escarabajo-invasor-bolivia-ataca-eucaliptos/"
  },
  {
    "titulo": "Volver al valle: 21 ranas en peligro crítico de extinción regresan a su hogar en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/11/28025521/Captura-de-Pantalla-2024-11-27-a-las-19.54.55-768x512.png",
    "fecha": "Nov 30, 2024",
    "url": "https://es.mongabay.com/2024/11/ranas-en-peligro-critico-de-extincion-regresan-a-su-hogar-colombia/"
  },
  {
    "titulo": "#ExpediciónVirtual | Tres santuarios naturales que resguardan a los únicos mamíferos voladores del mundo y a orquídeas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/14201537/Antrozous-vuelo-768x512.png",
    "fecha": "Nov 30, 2024",
    "url": "https://es.mongabay.com/2024/11/expedicion-virtual-santuarios-naturales-resguardan-unicos-mamiferos-voladores-del-mundo-orquideas/"
  },
  {
    "titulo": "Las huellas del jaguar siguen manchadas con sangre en Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/11/15002010/Foto-6-768x512.jpg",
    "fecha": "Nov 15, 2024",
    "url": "https://es.mongabay.com/2024/11/las-huellas-del-jaguar-siguen-manchadas-con-sangre-en-bolivia/"
  },
  {
    "titulo": "#EnCorto: 5 claves sobre la misión de los cofán para salvar a las tortugas de río en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/02/14014001/CharapasZabaloMJTI-WWF-6-768x512.jpg",
    "fecha": "Nov 06, 2024",
    "url": "https://es.mongabay.com/2024/11/encorto-5-claves-sobre-la-mision-de-los-cofan-para-salvar-a-las-tortugas-de-rio-en-ecuador/"
  },
  {
    "titulo": "#EnCorto: tres claves para entender cómo unos bebederos de agua salvan de atropellos a la fauna en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/24102837/WhatsApp-Image-2023-10-24-at-5.28.11-AM-768x512.jpeg",
    "fecha": "Nov 05, 2024",
    "url": "https://es.mongabay.com/2024/11/en-corto-tres-claves-bebederos-de-agua-salvan-fauna-peru/"
  },
  {
    "titulo": "#Expedición virtual: una reserva que permite la conservación de murciélagos en Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/10/10220658/P7251784-768x512.jpg",
    "fecha": "Nov 01, 2024",
    "url": "https://es.mongabay.com/2024/11/expedicion-virtual-reserva-que-permite-conservacion-murcielagos-bolivia/"
  },
  {
    "titulo": "COP16: dos opciones se discuten para lograr la movilización de recursos para detener la pérdida de biodiversidad",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/22002444/Cebus-versicolor_CIM23189_DxO_Felipe-Villegas-Velez-768x512.jpg",
    "fecha": "Oct 25, 2024",
    "url": "https://es.mongabay.com/2024/10/cop16-lograr-movilizacion-recursos-para-detener-perdida-de-biodiversidad/"
  },
  {
    "titulo": "Cocodrilos y caimanes bajo amenaza: “Mucha gente los ve feos o peligrosos, pero son muy sensibles” | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/10/17005932/Captura-de-Pantalla-2024-10-16-a-las-17.58.17-768x512.png",
    "fecha": "Oct 22, 2024",
    "url": "https://es.mongabay.com/2024/10/cocodrilos-caimanes-bajo-amenaza-entrevista/"
  },
  {
    "titulo": "Un corredor y un área protegida para evitar la extinción del ocelote en el sur de Brasil",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/10/07154624/Ocelote-Leopardus-pardalis-768x512.jpg",
    "fecha": "Oct 18, 2024",
    "url": "https://es.mongabay.com/2024/10/corredor-area-protegida-para-evitar-extincion-del-ocelote-sur-brasil/"
  },
  {
    "titulo": "El puma del Chaco sobrevive en corredores dominados por los ganaderos en Paraguay",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/10/08184220/Puma-Puma-concolor-768x512.jpg",
    "fecha": "Oct 17, 2024",
    "url": "https://es.mongabay.com/2024/10/puma-del-chaco-sobrevive-en-corredores-dominados-por-ganaderos-paraguay/"
  },
  {
    "titulo": "Macizo Colombiano: un puente natural está en peligro para las poblaciones de la oncilla",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/10/07161925/leopardo-tigre-Leopardus-tigrinus-768x512.jpg",
    "fecha": "Oct 16, 2024",
    "url": "https://es.mongabay.com/2024/10/macizo-colombiano-puente-natural-en-peligro-para-oncilla/"
  },
  {
    "titulo": "La agricultura, la ganadería ilegal y las carreteras amenazan al jaguar de Mesoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/10/09034806/Jaguar-Panthera-onca-768x512.jpg",
    "fecha": "Oct 16, 2024",
    "url": "https://es.mongabay.com/2024/10/agricultura-ganaderia-ilegal-carreteras-amenazan-al-jaguar-mesoamerica/"
  },
  {
    "titulo": "La cacería pone en riesgo al gato de las pampas en la frontera de Perú y Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/10/16161004/Gato-de-las-pampas-1-768x512.jpg",
    "fecha": "Oct 15, 2024",
    "url": "https://es.mongabay.com/2024/10/caceria-pone-en-riesgo-gato-de-las-pampas-peru-ecuador/"
  },
  {
    "titulo": "Corredores de conservación: una esperanza para los felinos de América Latina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/10/16160755/ilustracion-portada-1-768x512.jpg",
    "fecha": "Oct 15, 2024",
    "url": "https://es.mongabay.com/2024/10/corredores-de-conservacion-una-esperanza-para-felinos-de-america-latina/"
  },
  {
    "titulo": "En Perú, conservacionistas y arqueólogos se unen para salvar a un gecko amenazado",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/10/01160108/IMG_0049-scaled-1-768x512.jpg",
    "fecha": "Oct 11, 2024",
    "url": "https://es.mongabay.com/2024/10/peru-conservacionistas-arqueologos-se-unen-para-salvar-gecko-amenazado/"
  },
  {
    "titulo": "Comunidades indígenas de Guyana están ganando la lucha para salvar al cardenalito",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/09/26095404/5-Illegal-bird-traders-have-aggressively-sought-the-Red-Siskin-for-over-a-century.-Credit_-SRCS-768x512.jpg",
    "fecha": "Oct 10, 2024",
    "url": "https://es.mongabay.com/2024/10/comunidades-indigenas-guyana-estan-ganando-lucha-para-salvar-al-cardenalito/"
  },
  {
    "titulo": "#EnCorto: Tres claves sobre la conservación del tiburón ballena en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/11/27055343/387269930_785696289974584_1170252808080408173_n.webp_-768x512.jpeg",
    "fecha": "Oct 04, 2024",
    "url": "https://es.mongabay.com/2024/10/en-corto-tres-claves-conservacion-tiburon-ballena-peru/"
  },
  {
    "titulo": "Fraude y corrupción: los principales motores del comercio ilegal de fauna silvestre en la Amazonía de Brasil",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/09/19113724/6.-Hyacinth-macaw_Giovanna-Gomes_Unsplash-768x512.jpg",
    "fecha": "Oct 04, 2024",
    "url": "https://es.mongabay.com/2024/10/fraude-corrupcion-comercio-ilegal-de-fauna-silvestre-amazonia-brasil/"
  },
  {
    "titulo": "Manatíes quedan expuestos a la caza furtiva debido al retroceso de los ríos amazónicos por la sequía",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/09/20113447/amazonian-manatee-1-768x512.jpg",
    "fecha": "Oct 01, 2024",
    "url": "https://es.mongabay.com/2024/10/manaties-expuestos-caza-furtiva-debido-retroceso-rios-amazonicos-sequia/"
  },
  {
    "titulo": "Las granjas camaroneras amenazan los manglares y jaguares de México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/02/10224011/Jaguar-Me%CC%81xico-Medelli%CC%81n-2-768x512.jpg",
    "fecha": "Sep 30, 2024",
    "url": "https://es.mongabay.com/2024/09/granjas-camaroneras-amenazan-manglares-jaguares-mexico/"
  },
  {
    "titulo": "Maravillas del mar: tres descubrimientos que asombran a la ciencia | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/09/18140120/FKt240708-scicam-NiceScorpionfishGreatZoomFraming-Schmidt-Ocean-Institute-768x512.jpg",
    "fecha": "Sep 29, 2024",
    "url": "https://es.mongabay.com/2024/09/maravillas-del-mar-tres-descubrimientos-asombran-a-la-ciencia/"
  },
  {
    "titulo": "El manejo de especies invasoras sigue siendo un reto en la lucha contra la crisis de biodiversidad",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/23161352/Hippo-comiendo-768x512.jpg",
    "fecha": "Sep 27, 2024",
    "url": "https://es.mongabay.com/2024/09/manejo-de-especies-invasoras-reto-en-lucha-contra-crisis-de-biodiversidad/"
  },
  {
    "titulo": "Iniciativa comunitaria indígena: mujeres en Perú conservan felinos de los Andes",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/09/10152250/cat-mural-2-e1724336298482-768x512.jpg",
    "fecha": "Sep 23, 2024",
    "url": "https://es.mongabay.com/2024/09/iniciativa-comunitaria-indigena-mujeres-peru-conservan-felinos-andes/"
  },
  {
    "titulo": "#EnCorto: Tres claves para entender cómo 204 especies exóticas e invasoras impactan áreas protegidas en la Amazonía ecuatoriana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/16001753/P1760907-768x512.jpg",
    "fecha": "Sep 21, 2024",
    "url": "https://es.mongabay.com/2024/09/en-corto-especies-exoticas-invasoras-impactan-areas-protegidas-amazonia-ecuatoriana/"
  },
  {
    "titulo": "Descubren nueva montaña submarina y 20 posibles nuevas especies",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/09/18140129/FKt240708-scicam-Casper_Octopus-Schmidt-Ocean-Institute-768x512.jpg",
    "fecha": "Sep 18, 2024",
    "url": "https://es.mongabay.com/2024/09/descubren-nueva-montana-submarina-posibles-nuevas-especies/"
  },
  {
    "titulo": "La familia que revivió la esperanza a un pedazo de selva en el Guaviare en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/09/06233809/Foto-1.-Familia-Zapata-Sanchez-768x512.jpeg",
    "fecha": "Sep 10, 2024",
    "url": "https://es.mongabay.com/2024/09/familia-revivio-esperanza-a-un-pedazo-de-selva-guaviare-colombia/"
  },
  {
    "titulo": "Jardinería de coral: los viveros que florecen bajo el mar en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/09/03195203/Captura-de-Pantalla-2024-09-03-a-las-12.51.35-768x512.png",
    "fecha": "Sep 04, 2024",
    "url": "https://es.mongabay.com/2024/09/jardineria-de-coral-viveros-florecen-bajo-el-mar-mexico/"
  },
  {
    "titulo": "#EnCorto: Tres claves para comprender la importante misión de salvar a los manatíes que quedan encallados en el Magdalena Medio, Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/10/13152847/Trichechus-inunguis_Fundacion-Omacha_Brayan-Cruz-768x512.jpg",
    "fecha": "Sep 03, 2024",
    "url": "https://es.mongabay.com/2024/09/en-corto-salvar-manaties-encallados-magdalena-medio-colombia/"
  },
  {
    "titulo": "Esperanza para los primates: proyectos innovadores para salvar a la especie",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/09191625/Lagothrix-lagotricha-churuco-%C2%A9Pablo-Meji%CC%81a-_WWF-Colombia--768x512.jpg",
    "fecha": "Sep 01, 2024",
    "url": "https://es.mongabay.com/2024/09/esperanza-para-primates-proyectos-innovadores-para-salvar-la-especie/"
  },
  {
    "titulo": "#ExpediciónVirtual | Tres parques que resguardan a nuevas especies, antiguos refugios de dinosaurios e importantes fuentes de agua",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/08/21200731/Churrete-2-768x512.jpg",
    "fecha": "Aug 30, 2024",
    "url": "https://es.mongabay.com/2024/08/expedicion-virtual-parques-resguardan-nuevas-especies-refugio-dinosaurios-fuentes-de-agua/"
  },
  {
    "titulo": "Descubren una nueva especie de nutria en América Latina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/08/26163120/nutria-5-768x512.jpg",
    "fecha": "Aug 26, 2024",
    "url": "https://es.mongabay.com/2024/08/descubren-nueva-especie-nutria-america-latina/"
  },
  {
    "titulo": "El asesinato de un jaguar en Argentina recuerda la urgencia de proteger a la especie en Latinoamérica | Cinco lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/04/21220543/Monitoreo-de-poblacion-Creditos-Proyecto-Yaguarete_CeIBA_IBS_CONICET-768x512.jpg",
    "fecha": "Aug 25, 2024",
    "url": "https://es.mongabay.com/2024/08/asesinato-jaguar-argentina-urgencia-proteger-especie-latinoamerica/"
  },
  {
    "titulo": "#ExpediciónVirtual: Conguillío, el parque nacional con el otoño más hermoso de Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/08/21201431/Otono-Rocio-del-Valle-768x512.jpg",
    "fecha": "Aug 23, 2024",
    "url": "https://es.mongabay.com/2024/08/expedicion-virtual-conguillio-parque-nacional-otono-hermoso-chile/"
  },
  {
    "titulo": "Huellas en la arena: el tráfico de tortugas charapa en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/08/20204811/Portada-Ecuador-768x512.jpg",
    "fecha": "Aug 21, 2024",
    "url": "https://es.mongabay.com/2024/08/huellas-en-la-arena-trafico-tortugas-charapa-ecuador/"
  },
  {
    "titulo": "Colombia necesita 960 corredores para conectar áreas de conservación y recuperación de hábitat para el jaguar | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/12/28205323/2.-Jaguar-Wikimedia-Commons-768x512.jpg",
    "fecha": "Aug 20, 2024",
    "url": "https://es.mongabay.com/2024/08/colombia-necesita-corredores-conectar-areas-conservacion-recuperacion-habitat-jaguar/"
  },
  {
    "titulo": "Chorlo nevado: el ave playera que lucha por sobrevivir a la sequía en el noroeste de México | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/08/12234231/Captura-de-Pantalla-2024-08-12-a-las-16.29.06-768x512.png",
    "fecha": "Aug 14, 2024",
    "url": "https://es.mongabay.com/2024/08/chorlo-nevado-ave-playera-que-lucha-por-sobrevivir-sequia-mexico-entrevista/"
  },
  {
    "titulo": "La cacería de uno de los últimos jaguares del Chaco argentino pone en jaque la supervivencia de la especie",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/08/12165652/Ejemplar-Reserva-Formosa-768x512.jpeg",
    "fecha": "Aug 13, 2024",
    "url": "https://es.mongabay.com/2024/08/caceria-ultimos-jaguares-del-chaco-argentino-pone-en-jaque-supervivencia-de-la-especie/"
  },
  {
    "titulo": "Celestún: el refugio pesquero que busca frenar la pesca furtiva en Yucatán",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/08/08010708/Captura-de-Pantalla-2024-08-07-a-las-18.06.38-768x512.png",
    "fecha": "Aug 12, 2024",
    "url": "https://es.mongabay.com/2024/08/celestun-refugio-pesquero-que-busca-frenar-pesca-furtiva-yucatan/"
  },
  {
    "titulo": "Murciélagos y templos mayas: las zonas arqueológicas tienen un gran potencial para conservar a las especies en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/08/02020949/Captura-de-Pantalla-2024-08-01-a-las-19.08.25-768x512.png",
    "fecha": "Aug 05, 2024",
    "url": "https://es.mongabay.com/2024/08/murcielagos-templos-mayas-conservacion-mexico/"
  },
  {
    "titulo": "¿Cuál es el estado actual de la vaquita marina, el mamífero marino más amenazado del mundo? | Cinco lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/17142202/vaquitaaa-768x352.jpg",
    "fecha": "Aug 04, 2024",
    "url": "https://es.mongabay.com/2024/08/estado-actual-vaquita-marina-mamifero-marino-mas-amenazado-del-mundo/"
  },
  {
    "titulo": "EN VIDEO | Jaguares, tigrillos y delfines de río: tres especies protagonistas de buenas noticias",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/04/05175757/Simulador-vientre-768x512.jpg",
    "fecha": "Aug 03, 2024",
    "url": "https://es.mongabay.com/2024/08/video-jaguares-tigrillos-delfines-de-rio-buenas-noticias/"
  },
  {
    "titulo": "Jaguares y pumas se han convertido en los inesperados aliados de los ganaderos en Costa Rica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/07/31220319/Jaguar-capturado-por-una-camara-trampa-en-una-finca-con-problemas-de-depredacion-en-el-Area-de-Conservacion-La-Amistad-Caribe-2014-768x512.jpg",
    "fecha": "Aug 01, 2024",
    "url": "https://es.mongabay.com/2024/08/jaguares-pumas-aliados-de-ganaderos-costa-rica/"
  },
  {
    "titulo": "«Estas son las primeras imágenes aéreas de la vaquita marina en vida silvestre» |  ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/07/30035020/Captura-de-Pantalla-2024-07-29-a-las-20.49.44-768x512.png",
    "fecha": "Jul 30, 2024",
    "url": "https://es.mongabay.com/2024/07/primeras-imagenes-aereas-vaquita-marina-vida-silvestre-entrevista/"
  },
  {
    "titulo": "Perú: así lograron los pescadores de Marcona recuperar el erizo rojo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/07/26185702/1-1-2-768x512.jpg",
    "fecha": "Jul 29, 2024",
    "url": "https://es.mongabay.com/2024/07/peru-pescadores-de-marcona-recuperar-erizo-rojo/"
  },
  {
    "titulo": "Dantas, periquitos aliamarillos y cocodrilos de las Américas: tres especies que están escapando de la extinción | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/07/28012712/Unknown-768x512.jpg",
    "fecha": "Jul 28, 2024",
    "url": "https://es.mongabay.com/2024/07/dantas-periquitos-aliamarillos-cocodrilos-de-las-americas-escapando-de-extincion/"
  },
  {
    "titulo": "#ExpediciónVirtual: un recorrido por un parque de volcanes y glaciares en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/07/17224203/Volcan-Cayambe-768x512.jpeg",
    "fecha": "Jul 22, 2024",
    "url": "https://es.mongabay.com/2024/07/expedicion-virtual-recorrido-parque-cayambe-coca-volcanes-glaciares-ecuador/"
  },
  {
    "titulo": "Alto Calima: la nueva área protegida para las aves de Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/07/16011018/Ave312deOctubre29-01-24YuberGarcia_U-768x512.jpg",
    "fecha": "Jul 17, 2024",
    "url": "https://es.mongabay.com/2024/07/alto-calima-nueva-area-protegida-para-aves-colombia/"
  },
  {
    "titulo": "Día mundial de las serpientes: científicos buscan descifrar el misterio detrás de los venenos de estos reptiles en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/07/15024536/Cmolossus_SS-1-of-1-768x512.jpg",
    "fecha": "Jul 16, 2024",
    "url": "https://es.mongabay.com/2024/07/dia-mundial-de-las-serpientes-descifrar-misterio-detras-de-venenos-reptiles-mexico/"
  },
  {
    "titulo": "Descubren en Chile el bosque de hidrocorales rojos más austral y somero del mundo | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/07/12131132/pablo-zavala-expedicion-marina-magallanes-ii-PZB_0604-768x512.jpg",
    "fecha": "Jul 12, 2024",
    "url": "https://es.mongabay.com/2024/07/descubren-en-chile-bosque-de-hidrocorales-rojos-mas-austral-somero-del-mundo-estudio/"
  },
  {
    "titulo": "Científicos descubren monumentales arrecifes de coral en el Golfo de México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/07/10002908/Captura-de-Pantalla-2024-07-09-a-las-17.28.46-768x512.png",
    "fecha": "Jul 10, 2024",
    "url": "https://es.mongabay.com/2024/07/cientificos-descubren-monumentales-arrecifes-de-coral-golfo-de-mexico/"
  },
  {
    "titulo": "Parque Revillagigedo en México: un refugio para las mantas gigantes durante el fenómeno de El Niño | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/06/29031657/Captura-de-Pantalla-2024-06-28-a-las-20.16.33-768x512.png",
    "fecha": "Jun 27, 2024",
    "url": "https://es.mongabay.com/2024/06/parque-revillagigedo-mexico-refugio-mantas-gigantes-fenomeno-el-nino-entrevista/"
  },
  {
    "titulo": "El permiso para cazar pumas, zorros y guanacos genera polémica y aviva el conflicto con ganaderos en el sur de Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/06/18042009/Pumas-Gonzalo-Pardo-1-768x512.jpg",
    "fecha": "Jun 19, 2024",
    "url": "https://es.mongabay.com/2024/06/permiso-para-cazar-pumas-zorros-guanacos-genera-polemica-argentina/"
  },
  {
    "titulo": "ESTUDIO: ballenas cambian sus hábitos de canto dependiendo de la presencia humana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/06/12182740/Tribuga-port-1400x700-1-768x512.jpg",
    "fecha": "Jun 18, 2024",
    "url": "https://es.mongabay.com/2024/06/ballenas-jorobadas-cambian-patrones-de-canto-presencia-humana/"
  },
  {
    "titulo": "La exitosa recuperación del cocodrilo de las Américas en el Pacífico Mexicano",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/06/17151044/WhatsApp-Image-2024-06-04-at-12.15.24-1-768x512.jpeg",
    "fecha": "Jun 18, 2024",
    "url": "https://es.mongabay.com/2024/06/exitosa-recuperacion-cocodrilo-de-las-americas-pacifico-mexicano/"
  },
  {
    "titulo": "Día mundial de las tortugas marinas: ¿Qué se está haciendo para protegerlas? | Cinco lecturas sobre el tema",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/10/14181820/%C2%A9PelayoSalinas-1-768x512.jpg",
    "fecha": "Jun 16, 2024",
    "url": "https://es.mongabay.com/2024/06/dia-mundial-tortugas-marinas-que-se-esta-haciendo-para-protegerlas-conservacion/"
  },
  {
    "titulo": "México: los números de vaquitas marinas se mantienen estables aunque críticos, según el último censo realizado",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/06/13163235/Captura-de-Pantalla-2024-06-13-a-las-9.32.21-768x512.png",
    "fecha": "Jun 14, 2024",
    "url": "https://es.mongabay.com/2024/06/mexico-numeros-de-vaquitas-marinas-se-mantienen-estables-aunque-criticos/"
  },
  {
    "titulo": "“Salvar a los arrecifes es un trabajo colaborativo de todos, no sólo de los biólogos” | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/06/13125731/BiologaHonduras_1-768x512.jpg",
    "fecha": "Jun 14, 2024",
    "url": "https://es.mongabay.com/2024/06/salvar-arrecifes-es-un-trabajo-colaborativo-de-todos-entrevista-honduras/"
  },
  {
    "titulo": "Día Mundial de los Océanos: expertos advierten sobre estrategia de Japón para reanudar la caza de ballenas en el océano Austral",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/14003514/fin1-768x512.jpg",
    "fecha": "Jun 08, 2024",
    "url": "https://es.mongabay.com/2024/06/dia-mundial-de-los-oceanos-expertos-advierten-estrategia-de-japon-para-caza-ballenas-oceano-austral/"
  },
  {
    "titulo": "La historia del pintor que descubrió fósiles de tortugas gigantes en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/05/30073451/FotoCampo3-768x512.jpg",
    "fecha": "Jun 07, 2024",
    "url": "https://es.mongabay.com/2024/06/pintor-descubrio-fosiles-tortugas-gigantes-colombia/"
  },
  {
    "titulo": "Ataques de perros ferales o sin supervisión aumentan el riesgo de extinción de la danta de montaña en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/06/04000217/CHF_6458-768x512.jpg",
    "fecha": "Jun 06, 2024",
    "url": "https://es.mongabay.com/2024/06/ataques-de-perros-aumentan-riesgo-de-extincion-de-danta-colombia/"
  },
  {
    "titulo": "EN VIDEO | Nuevas especies descubiertas en Perú, Bolivia y Chile asombran a la ciencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/03/11174936/Un-calamar-latigazo-rara-vez-visto-Foto-ROV-SuBastian-Schmidt-Ocean-Institute-768x512.jpg",
    "fecha": "Jun 01, 2024",
    "url": "https://es.mongabay.com/2024/06/video-nuevas-especies-descubiertas-peru-bolivia-chile-asombran/"
  },
  {
    "titulo": "Peces de la Amazonía ecuatoriana contienen metales pesados por encima de los límites permitidos | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/07191908/fish_market_oriente_Ricardo_1000-768x512.jpg",
    "fecha": "May 24, 2024",
    "url": "https://es.mongabay.com/2024/05/peces-de-la-amazonia-ecuatoriana-contienen-metales-pesados-por-encima-de-los-limites-permitidos-estudio/"
  },
  {
    "titulo": "Chaco argentino: una ley provincial pone en peligro un corredor biológico vital para el jaguar, el tapir y el pecarí",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/05/22022831/Troncos-en-Chaco-Foto-Qi-Argentina-768x512.jpg",
    "fecha": "May 23, 2024",
    "url": "https://es.mongabay.com/2024/05/chaco-argentino-ley-pone-en-peligro-corredor-biologico/"
  },
  {
    "titulo": "Esperanza para la conservación: nacen tres periquitos aliamarillos fuera de su hábitat",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/05/21013807/brown-breasted-parakeet-768x512.jpg",
    "fecha": "May 22, 2024",
    "url": "https://es.mongabay.com/2024/05/esperanza-para-la-conservacion-nacen-tres-periquitos-aliamarillos-fuera-de-su-habitat/"
  },
  {
    "titulo": "Día mundial de las aves migratorias: las incansables viajeras de los cielos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/05/11003535/Ave-migratoria-7-768x512.jpg",
    "fecha": "May 11, 2024",
    "url": "https://es.mongabay.com/2024/05/dia-mundial-de-las-aves-migratorias-incansables-viajeras-de-los-cielos/"
  },
  {
    "titulo": "La épica travesía de las tortugas caguama: científicos buscan descifrar el viaje que empieza en Japón y llega a Norteamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/05/06072739/Captura-de-Pantalla-2024-05-06-a-las-0.16.59-768x512.png",
    "fecha": "May 08, 2024",
    "url": "https://es.mongabay.com/2024/05/epica-travesia-tortugas-caguama-japon-norteamerica/"
  },
  {
    "titulo": "EN VIDEO | Un noticiero con historias que dan esperanza a la conservación en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/02/08065618/1D3A3625-768x512.jpg",
    "fecha": "May 04, 2024",
    "url": "https://es.mongabay.com/2024/05/video-noticiero-esperanza-conservacion-latinoamerica/"
  },
  {
    "titulo": "La transición de los murui-muinani: usar la energía del sol para comercializar peces ornamentales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/04/22185444/F12-768x512.jpg",
    "fecha": "Apr 28, 2024",
    "url": "https://es.mongabay.com/2024/04/murui-muinani-energia-del-sol-para-comercializar-peces-ornamentales-peru/"
  },
  {
    "titulo": "El planeta ahora tiene tres tigrillos: describen nueva especie para Centro y Sudamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/04/22145826/Image-1-Leopardus-tigrinus-pardinoides-Cuenca-3-1-768x512.jpg",
    "fecha": "Apr 26, 2024",
    "url": "https://es.mongabay.com/2024/04/describen-nueva-especie-tigrillo-para-centro-sudamerica/"
  },
  {
    "titulo": "“Hay proyecciones de especies de pingüinos que no llegarán al 2050” | Entrevista",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/04/24144203/Pinguino-papua-Global-Penguin-Society-768x512.jpg",
    "fecha": "Apr 25, 2024",
    "url": "https://es.mongabay.com/2024/04/especies-de-pinguinos-no-llegaran-al-2050-conservacion-entrevista/"
  },
  {
    "titulo": "Colombia: Pesca ilegal de caracol pala pone en peligro a la pesca artesanal y la salud de los ecosistemas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/04/23182310/WhatsApp-Image-2024-04-09-at-4.06.42-PM-768x512.jpeg",
    "fecha": "Apr 25, 2024",
    "url": "https://es.mongabay.com/2024/04/colombia-pesca-ilegal-de-caracol-pala-pone-en-peligro-a-la-pesca-artesanal-y-la-salud-de-los-ecosistemas/"
  },
  {
    "titulo": "México: científicos intentan salvar los corales de las islas Marietas afectados por calentamiento oceánico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/04/22201338/DSCI1004-768x512.jpg",
    "fecha": "Apr 24, 2024",
    "url": "https://es.mongabay.com/2024/04/mexico-cientificos-intentan-salvar-corales-islas-marietas-afectados-calentamiento-oceanico/"
  },
  {
    "titulo": "¿Cuál ha sido el impacto de la gripe aviar en Latinoamérica? | Cinco lecturas sobre el tema",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/03/22133959/Lobo-marino-gripe-aviar-Foto-Sernapesca-Chile-768x512.jpeg",
    "fecha": "Apr 21, 2024",
    "url": "https://es.mongabay.com/2024/04/impacto-gripe-aviar-latinoamerica/"
  },
  {
    "titulo": "Seis décadas de sobrepesca han disminuido las poblaciones de peces de arrecife en Brasil",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/04/16092013/DJI_0268-2-scaled-e1711565527516-768x512.jpg",
    "fecha": "Apr 18, 2024",
    "url": "https://es.mongabay.com/2024/04/seis-decadas-sobrepesca-disminuido-peces-de-arrecife-brasil/"
  },
  {
    "titulo": "Expedición científica a la Antártida reporta casos positivos de gripe aviar en aves marinas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/04/12172302/WhatsApp-Image-2024-04-10-at-17.36.00-1-768x512.jpeg",
    "fecha": "Apr 16, 2024",
    "url": "https://es.mongabay.com/2024/04/antartida-casos-positivos-gripe-aviar-aves-marinas/"
  },
  {
    "titulo": "EN VIDEO | Vaquitas de San Antonio, cóndores y tortugas gigantes: tres especies protagonistas de la conservación en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/02/13065956/Nido-condor_Dic-2-Victor-Gamarra-Toledo-768x512.jpg",
    "fecha": "Apr 13, 2024",
    "url": "https://es.mongabay.com/2024/04/video-vaquitas-de-san-antonio-condores-tortugas-gigantes-conservacion-latinoamerica/"
  },
  {
    "titulo": "Lucha contra el tráfico de animales en Colombia: lanzan guía para detectar partes de félidos en el mercado ilegal",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/04/09153928/WhatsApp-Image-2024-03-15-at-11.13.26-AM-768x512.jpeg",
    "fecha": "Apr 11, 2024",
    "url": "https://es.mongabay.com/2024/04/lucha-contra-trafico-animales-colombia-guia-detectar-partes-felidos/"
  },
  {
    "titulo": "El 97% de los peces migratorios está amenazado de extinción | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/21184932/cc0b9ce0c5c6a8fb829d6d65975f4a44-768x512.jpg",
    "fecha": "Apr 10, 2024",
    "url": "https://es.mongabay.com/2024/04/peces-migratorios-extincion-estudio/"
  },
  {
    "titulo": "Escuela para jaguares: el santuario donde se les enseña habilidades para retornar a la vida silvestre",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/04/05175550/Juntas-768x512.jpg",
    "fecha": "Apr 08, 2024",
    "url": "https://es.mongabay.com/2024/04/escuela-para-jaguares-conservacion-habilidades-para-retornar-vida-silvestre-mexico/"
  },
  {
    "titulo": "La odisea de las tortugas hicoteas: son los animales más traficados durante la Semana Santa en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/04/04143513/WhatsApp-Image-2024-04-03-at-3.48.17-PM-768x512.jpeg",
    "fecha": "Apr 05, 2024",
    "url": "https://es.mongabay.com/2024/04/tortugas-hicoteas-animales-mas-traficados-durante-semana-santa-colombia/"
  },
  {
    "titulo": "Gigante de la Amazonía: descubren fósil del que habría sido el delfín de río más grande del mundo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/04/03215601/Pebanista-yacuruna-portada-2-768x512.jpg",
    "fecha": "Apr 04, 2024",
    "url": "https://es.mongabay.com/2024/04/descubren-fosil-delfin-rio-mas-grande-del-mundo/"
  },
  {
    "titulo": "Amenaza silenciosa: comercio de aceite y carne amenaza a tiburones y rayas de aguas profundas | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/03/31065549/Captura-de-Pantalla-2024-03-30-a-las-23.55.34-768x512.png",
    "fecha": "Apr 03, 2024",
    "url": "https://es.mongabay.com/2024/04/comercio-aceite-carne-amenaza-tiburones-rayas-aguas-profundas-estudio/"
  },
  {
    "titulo": "Guardianes de las tortugas: tres historias de conservación que demuestra que es posible proteger a las especies en peligro de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/03/30134532/305A0521-1536x1024-1-768x512.jpg",
    "fecha": "Mar 30, 2024",
    "url": "https://es.mongabay.com/2024/03/guardianes-de-tortugas-conservacion-peligro-de-extincion/"
  },
  {
    "titulo": "Panzootia emergente: gripe aviar afecta ya a 48 especies de mamíferos en el mundo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/20115507/Gripe-aviar-3-Sernanp-768x512.jpg",
    "fecha": "Mar 21, 2024",
    "url": "https://es.mongabay.com/2024/03/panzootia-gripe-aviar-afecta-mamiferos-en-el-mundo/"
  },
  {
    "titulo": "Los secretos del mar: científicos descubren más de cien especies marinas que podrían ser nuevas para la ciencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/03/11174932/Pez-del-genero-Chaunacops-visto-a-1388-metros-de-profundidad-Foto-ROV-SuBastian-Schmidt-Ocean-Institute-768x512.jpg",
    "fecha": "Mar 20, 2024",
    "url": "https://es.mongabay.com/2024/03/los-secretos-del-mar-cientificos-descubren-mas-de-cien-especies-marinas-que-podrian-ser-nuevas-para-la-ciencia/"
  },
  {
    "titulo": "El tráfico de totoaba aumenta en Internet y con ello el riesgo de que se extinga la vaquita marina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/03/05122336/Screenshot-2024-02-07-102723-768x450.jpg",
    "fecha": "Mar 20, 2024",
    "url": "https://es.mongabay.com/2024/03/el-trafico-totoaba-aumenta-en-internet-y-con-ello-el-riesgo-de-que-se-extinga-la-vaquita-marina/"
  },
  {
    "titulo": "Contaminación por mercurio de minería ilegal ya puede detectarse en aves de Madre de Dios en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/03/14223746/thumbnail_IMG_5640-768x512.jpg",
    "fecha": "Mar 19, 2024",
    "url": "https://es.mongabay.com/2024/03/contaminacion-por-mercurio-de-mineria-ilegal-ya-puede-detectarse-en-aves-de-madre-de-dios-en-peru/"
  },
  {
    "titulo": "EN VIDEO | Expedición virtual por tres santuarios naturales que protegen a especies emblemáticas del Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/09/15001548/MG_8531-768x512.jpg",
    "fecha": "Mar 16, 2024",
    "url": "https://es.mongabay.com/2024/03/en-video-expedicion-virtual-por-tres-santuarios-naturales-que-protegen-a-especies-emblematicas-del-peru/"
  },
  {
    "titulo": "El descubrimiento del misterioso pudú de la yunga peruana: una nueva especie que habita los bosques nubosos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/03/15011029/FOTO-0-ABRE-768x512.jpg",
    "fecha": "Mar 15, 2024",
    "url": "https://es.mongabay.com/2024/03/el-descubrimiento-del-misterioso-pudu-de-la-yunga-peruana-una-nueva-especie-que-habita-los-bosques-nubosos/"
  },
  {
    "titulo": "Incendios en Chile destruyen más de 4 mil hectáreas de bosque nativo y amenazan a especie de palma en peligro de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/03/12120710/IMG_8304-768x512.jpg",
    "fecha": "Mar 12, 2024",
    "url": "https://es.mongabay.com/2024/03/incendios-chile-destruyen-bosque-nativo-amenazan-palma-extincion/"
  },
  {
    "titulo": "Alas de esperanza: cóndores y albatros, dos historias de supervivencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/03/02010205/D5S_4683-768x512.jpg",
    "fecha": "Mar 08, 2024",
    "url": "https://es.mongabay.com/2024/03/condores-albatros-conservacion-latinoamerica/"
  },
  {
    "titulo": "Turismo en la Serranía del Perijá: contar la memoria y conservar los bosques en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/03/01205444/IMG20231103125144-768x512.jpg",
    "fecha": "Mar 07, 2024",
    "url": "https://es.mongabay.com/2024/03/turismo-serrania-del-perija-conservar-bosques-colombia/"
  },
  {
    "titulo": "Cuatro cóndores son liberados en el Parque Nacional Patagonia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/02/26103621/condor-andino-Chile-4-hernan-povedano-wildlife-pnp-valchacnn025-768x512.jpg",
    "fecha": "Mar 06, 2024",
    "url": "https://es.mongabay.com/podcast/2024/03/podcast-ambiental-cuatro-condores-son-liberados-parque-nacional-patagonia/"
  },
  {
    "titulo": "Chile: La fórmula de minera Quiborax para saltarse las reglas en el Salar de Surire",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/03/04212902/portada-1-768x513.jpg",
    "fecha": "Mar 06, 2024",
    "url": "https://es.mongabay.com/2024/03/chile-formula-de-minera-quiborax-para-saltarse-reglas-en-salar-de-surire/"
  },
  {
    "titulo": "La increíble historia de Bruno y Hope, los polluelos albatros de patas negras que son una esperanza para la conservación de su especie",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/03/01231917/BFL_9032-Pano-768x512.jpg",
    "fecha": "Mar 03, 2024",
    "url": "https://es.mongabay.com/2024/03/bruno-y-hope-polluelos-albatros-de-patas-negras-conservacion/"
  },
  {
    "titulo": "Ecuador: 500 tortugas gigantes fueron reintroducidas a su hábitat natural en Galápagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/02/24000322/305A0584-768x512.jpg",
    "fecha": "Feb 29, 2024",
    "url": "https://es.mongabay.com/2024/02/ecuador-tortugas-gigantes-reintroducidas-habitat-natural-galapagos/"
  },
  {
    "titulo": "México: “Hay sitios en donde han desaparecido las especies nativas y prácticamente ya todo es pez diablo” | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/02/13060121/pez_diablo_-_copia-768x512.jpeg",
    "fecha": "Feb 29, 2024",
    "url": "https://es.mongabay.com/2024/02/mexico-pez-diablo-pez-leon-especies-invasoras-entrevista/"
  },
  {
    "titulo": "El vuelo del cóndor: cuatro aves fueron liberadas en el Parque Nacional Patagonia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/02/26103636/condor-andino-Chile-6-marcelo_mascareno-0375-768x513.jpg",
    "fecha": "Feb 28, 2024",
    "url": "https://es.mongabay.com/2024/02/cuatro-condores-fueron-liberadas-en-parque-nacional-patagonia-chile/"
  },
  {
    "titulo": "#EnCorto: tres claves para conocer la ruta del jaguar mapeada por indígenas arhuacos en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/26120507/ProCAT-14-768x512.jpg",
    "fecha": "Feb 28, 2024",
    "url": "https://es.mongabay.com/2024/02/en-corto-ruta-del-jaguar-mapeada-por-indigenas-arhuacos-colombia/"
  },
  {
    "titulo": "La exitosa misión del pueblo indígena Cofán para salvar a las tortugas de río en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/02/14012258/CharapasZabaloMJTI-WWF-2-768x512.jpg",
    "fecha": "Feb 26, 2024",
    "url": "https://es.mongabay.com/2024/02/exitosa-mision-pueblo-indigena-cofan-para-salvar-tortugas-ecuador/"
  },
  {
    "titulo": "Historia gráfica | ¿Cómo están protegiendo de la extinción a jaguares, osos hormigueros y loros tricahue en Latinoamérica?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/02/23233238/historia-grafica-768x450.png",
    "fecha": "Feb 23, 2024",
    "url": "https://es.mongabay.com/2024/02/historia-grafica-protegiendo-de-extincion-jaguares-osos-hormigueros-loros-tricahue-latinoamerica/"
  },
  {
    "titulo": "Día Internacional para la Protección de los Osos: una mirada a la especie emblemática de Sudamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/02/14192159/Osos-de-anteojos-3-Robert-Wallace_WCS-768x512.jpg",
    "fecha": "Feb 21, 2024",
    "url": "https://es.mongabay.com/2024/02/dia-internacional-para-la-proteccion-de-osos-conservacion-sudamerica/"
  },
  {
    "titulo": "Controversia en Colombia por norma que permite aprovechamiento de tiburones y rayas que provengan de la pesca incidental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/09/03181946/1.-%C2%A9Jim-Abernthy-Tiger-Shark-Mensaje-6-768x512.jpg",
    "fecha": "Feb 19, 2024",
    "url": "https://es.mongabay.com/2024/02/controversia-colombia-norma-permite-aprovechamiento-de-tiburones-rayas-pesca-incidental/"
  },
  {
    "titulo": "Podcast ambiental | Tráfico de tiburones, minería ilegal y resguardos indígenas bajo amenaza en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/11/30220404/Foto2_Puinawai_RNN-PUINAWAI-Resguardo-CMARI-Rodrigo-Duran-Bahamon_0136_1-768x512.jpg",
    "fecha": "Feb 17, 2024",
    "url": "https://es.mongabay.com/2024/02/podcast-ambiental-trafico-de-tiburones-mineria-ilegal-colombia/"
  },
  {
    "titulo": "Un nido de cóndores en los Andes peruanos permite a científicos estudiar sobre reproducción de la especie y cuidado de polluelos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/02/13151728/Nido-condor_Ene-5-Victor-Gamarra-Toledo-1-768x512.jpg",
    "fecha": "Feb 15, 2024",
    "url": "https://es.mongabay.com/2024/02/hallan-nido-de-condores-andes-peruanos-polluelos-conservacion/"
  },
  {
    "titulo": "Coyuntura ambiental | Incendios afectan bosques, frailejones, fauna y espacios de conservación en Colombia y Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/02/07204048/GFWU3t9WkAAn-TI-768x512.jpeg",
    "fecha": "Feb 10, 2024",
    "url": "https://es.mongabay.com/2024/02/coyuntura-ambiental-incendios-afectan-bosques-frailejones-fauna-y-espacios-de-conservacion-en-colombia-y-chile/"
  },
  {
    "titulo": "Búhos, reptiles y roedores silvestres: fauna afectada por los incendios forestales en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/02/06003836/GEpoXSKWYAAnsNJ-768x512.jpg",
    "fecha": "Feb 07, 2024",
    "url": "https://es.mongabay.com/2024/02/buhos-reptiles-y-roedores-silvestres-fauna-afectada-por-los-incendios-forestales-en-colombia/"
  },
  {
    "titulo": "EN VIDEO | Expedición virtual por tres asombrosos santuarios naturales de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/09/21060437/1K7A5575-Editar-768x512.jpg",
    "fecha": "Feb 02, 2024",
    "url": "https://es.mongabay.com/2024/02/en-video-expedicion-virtual-por-tres-asombrosos-santuarios-naturales-de-latinoamerica/"
  },
  {
    "titulo": "México: el emprendimiento de una familia de pescadores que ayuda a conservar las tortugas marinas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/01/31224825/PORTADA-768x512.png",
    "fecha": "Feb 02, 2024",
    "url": "https://es.mongabay.com/2024/02/mexico-el-emprendimiento-de-una-familia-de-pescadores-que-ayuda-a-conservar-las-tortugas-marinas/"
  },
  {
    "titulo": "México: Colección Nacional de Equinodermos, una gran ventana para conocer a los arquitectos del mar",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/01/31210502/8922-768x512.jpg",
    "fecha": "Feb 01, 2024",
    "url": "https://es.mongabay.com/2024/02/mexico-coleccion-nacional-de-equinodermos-una-gran-ventana-para-conocer-a-los-arquitectos-del-mar/"
  },
  {
    "titulo": "México: comunidad maya afectada por granjas porcícolas solicita intervención de la Suprema Corte de Justicia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/01/27033945/3-Produccion-local-de-traspatio-de-cerdo-pelon-1320x881-1-768x513.jpeg",
    "fecha": "Jan 30, 2024",
    "url": "https://es.mongabay.com/2024/01/mexico-comunidad-maya-afectada-por-granjas-porcicolas-solicita-intervencion-de-la-suprema-corte-de-justicia/"
  },
  {
    "titulo": "Mujeres, investigaciones, animales y fotografías: estas son las historias ambientales más impactantes del 2023",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/09/21071934/1K7A3749-Editar-768x512.jpg",
    "fecha": "Jan 20, 2024",
    "url": "https://es.mongabay.com/2024/01/historias-ambientales-mas-impactantes-del-2023/"
  },
  {
    "titulo": "¿Qué tanto sabes del zopilote rey? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/03/09224819/Nuevo-Be%CC%81cal_Foto_3_FSC_GD-768x512.jpg",
    "fecha": "Jan 19, 2024",
    "url": "https://es.mongabay.com/2024/01/que-tanto-sabes-del-zopilote-rey-trivia/"
  },
  {
    "titulo": "Colombia: resguardo Curare Los Ingleses apuesta por acciones comunitarias para proteger y conservar el territorio",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/01/17132435/VIC5063-768x512.jpg",
    "fecha": "Jan 18, 2024",
    "url": "https://es.mongabay.com/2024/01/colombia-resguardo-curare-los-ingleses-conservar-el-territorio/"
  },
  {
    "titulo": "Ecuador: grabaciones de sonidos e inteligencia artificial, una amalgama que ayuda a saber si los bosques se están recuperando | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/03/29160745/Gallito-de-las-rocas-Manu-Peru-768x512.jpg",
    "fecha": "Jan 17, 2024",
    "url": "https://es.mongabay.com/2024/01/ecuador-grabaciones-de-sonidos-inteligencia-artificial-bosques-conservacion/"
  },
  {
    "titulo": "Desafíos de Colombia para el 2024: proteger a los defensores ambientales, reforestar y tomar el control de los territorios",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/26151146/foto-1-curare-768x512.jpg",
    "fecha": "Jan 16, 2024",
    "url": "https://es.mongabay.com/2024/01/desafios-de-colombia-2024-proteger-defensores-ambientales/"
  },
  {
    "titulo": "Arañas, ranas, árboles y orquídeas: estas son las nuevas especies de flora y fauna descubiertas en Latinoamérica | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/28042215/DSC_7929-768x512.jpg",
    "fecha": "Jan 13, 2024",
    "url": "https://es.mongabay.com/2024/01/nuevas-especies-de-flora-y-fauna-descubiertas-latinoamerica/"
  },
  {
    "titulo": "Latinoamérica: los animales que fueron protagonistas de grandes historias durante el 2023",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/01/14210111/LEOPARDUS-TIGRINUS-FUNDACION-JAGUAR-768x511.jpg",
    "fecha": "Dec 27, 2023",
    "url": "https://es.mongabay.com/2023/12/latinoamerica-los-animales-que-fueron-protagonistas-de-grandes-historias-durante-el-2023/"
  },
  {
    "titulo": "Latinoamérica: los 12 videos ambientales del 2023",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/11/16201301/FOTO-1-Cre%CC%81dito-Jose-Guarnizo-Vora%CC%81gine2-768x512.jpg",
    "fecha": "Dec 26, 2023",
    "url": "https://es.mongabay.com/2023/12/latinoamerica-los-12-videos-ambientales-mas-impactantes-del-2023/"
  },
  {
    "titulo": "Latinoamérica: las 10 historias gráficas que marcaron el 2023",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/08014638/PORTADA-Especial-Los-pequenos-y-olvidados-gatos-silvestres-de-Latinoamerica-768x512.png",
    "fecha": "Dec 21, 2023",
    "url": "https://es.mongabay.com/2023/12/latinoamerica-historias-graficas-que-marcaron-2023/"
  },
  {
    "titulo": "Cámaras trampa: las imágenes más asombrosas del 2023 que revelan el estado de conservación de las especies en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/30051037/IMG_0129-768x512.jpg",
    "fecha": "Dec 17, 2023",
    "url": "https://es.mongabay.com/2023/12/camaras-trampa-imagenes-asombrosas-2023-latinoamerica/"
  },
  {
    "titulo": "¿Qué tanto sabes del manatí del Caribe? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/06234830/DSCN0120-768x512.jpg",
    "fecha": "Dec 15, 2023",
    "url": "https://es.mongabay.com/2023/12/que-tanto-sabes-del-manati-del-caribe-trivia/"
  },
  {
    "titulo": "Colombia: las 12 historias ambientales que marcaron el 2023",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/04/15003937/Hembra5_Merecure_MVR-1-768x512.jpg",
    "fecha": "Dec 12, 2023",
    "url": "https://es.mongabay.com/2023/12/colombia-12-historias-ambientales-que-marcaron-el-2023/"
  },
  {
    "titulo": "¿Qué tanto sabes de los armadillos? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/03/29153020/tatu-carreta-768x450.png",
    "fecha": "Dec 08, 2023",
    "url": "https://es.mongabay.com/2023/12/que-tanto-sabes-de-armadillos-trivia/"
  },
  {
    "titulo": "Venezuela: la sequía acelera el ciclo de desarrollo de las águilas harpía | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/11/22154516/resized_image-768x512.jpg",
    "fecha": "Dec 07, 2023",
    "url": "https://es.mongabay.com/2023/12/venezuela-sequia-acelera-ciclo-de-desarrollo-aguilas-harpia-entrevista/"
  },
  {
    "titulo": "Liberación del manatí antillano Pompeyo trae esperanza para la especie en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/12/06020959/Captura-de-Pantalla-2023-12-05-a-las-19.06.58-768x484.png",
    "fecha": "Dec 06, 2023",
    "url": "https://es.mongabay.com/2023/12/liberacion-manati-antillano-pompeyo-conservacion-mexico/"
  },
  {
    "titulo": "Coyuntura ambiental | Lecciones de conservación en la Amazonía colombiana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/18095736/DSC08724-Mejorado-NR-Editar-1-768x512.jpg",
    "fecha": "Dec 02, 2023",
    "url": "https://es.mongabay.com/2023/12/lecciones-de-conservacion-amazonia-colombiana/"
  },
  {
    "titulo": "Día Internacional del Jaguar: tres historias de conservación del félido más grande de América",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/11/24115011/Cuentos-del-Jaguar-WWF-Ecuador-768x512.png",
    "fecha": "Nov 29, 2023",
    "url": "https://es.mongabay.com/2023/11/dia-internacional-del-jaguar-historias-conservacion-latinoamerica/"
  },
  {
    "titulo": "En casi cuatro años, más de 400 animales silvestres fueron atropellados en carreteras de Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/11/28035529/Letreros-en-Chachapoyas-2_Alvaro-Garcia-768x512.jpg",
    "fecha": "Nov 28, 2023",
    "url": "https://es.mongabay.com/2023/11/animales-silvestres-atropellados-carreteras-peru/"
  },
  {
    "titulo": "Perú: un proyecto de conservación del tiburón ballena logró la convivencia pacífica entre la especie y los pescadores",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/11/27055337/387675267_290113120626136_9120815967175842054_n.webp_-768x512.jpeg",
    "fecha": "Nov 27, 2023",
    "url": "https://es.mongabay.com/2023/11/peru-proyecto-conservacion-tiburon-ballena-convivencia-pacifica-pescadores/"
  },
  {
    "titulo": "¿Qué tanto sabes del tirica? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/04173059/tirica-4-768x512.jpeg",
    "fecha": "Nov 24, 2023",
    "url": "https://es.mongabay.com/2023/11/que-tanto-sabes-del-tirica-trivia/"
  },
  {
    "titulo": "Chile: cámaras trampa en tiempo real ayudan a controlar los ataques de perros contra huemules",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/11/20154351/huemul-HERNAN-POVEDANO7-768x511.jpg",
    "fecha": "Nov 21, 2023",
    "url": "https://es.mongabay.com/2023/11/chile-camaras-trampa-ayudan-a-controlar-ataques-de-perros-contra-huemules/"
  },
  {
    "titulo": "Coyuntura ambiental | Tres reservas naturales que dan esperanza a la conservación de ecosistemas y animales en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/19221204/photos_birds_ggm_wild_2017_-photo-credit-Macaw-Recovery-Network-768x512.jpg",
    "fecha": "Nov 18, 2023",
    "url": "https://es.mongabay.com/2023/11/reservas-naturales-conservacion-de-ecosistemas-animales-latinoamerica/"
  },
  {
    "titulo": "¿Qué tanto sabes de la palomilla de nopal? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/26180724/Palomilla-del-Nopal-adulta-Foto-Wikimedia-Commons-768x511.jpg",
    "fecha": "Nov 17, 2023",
    "url": "https://es.mongabay.com/2023/11/que-tanto-sabes-de-palomilla-de-nopal-trivia/"
  },
  {
    "titulo": "Los morichales, un ecosistema de los Llanos Orientales colombianos que se seca y no crece",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/11/15213636/D3_2091_Felipe-Villegas-768x512.jpg",
    "fecha": "Nov 16, 2023",
    "url": "https://es.mongabay.com/2023/11/morichales-ecosistema-de-llanos-orientales-colombianos-se-seca-y-no-crece/"
  },
  {
    "titulo": "#EnCorto: cuatro claves sobre el tigrillo, un gato silvestre poco estudiado",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/31234913/Tigrillo-5-1-e1690848693153-768x512.png",
    "fecha": "Nov 16, 2023",
    "url": "https://es.mongabay.com/2023/11/en-corto-cuatro-claves-sobre-tigrillo-poco-estudiado/"
  },
  {
    "titulo": "Ultimátum para Ecuador: el país será sancionado si no garantiza la sostenibilidad en el comercio de tiburones",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/11/15161000/Oceana-768x450.png",
    "fecha": "Nov 15, 2023",
    "url": "https://es.mongabay.com/2023/11/ecuador-podria-ser-sancionado-si-no-garantiza-sostenibilidad-en-comercio-de-tiburones/"
  },
  {
    "titulo": "Lo más leído | Tráfico de aletas de tiburón en Colombia, protestas por minería en Panamá, pérdida de superficie de agua dulce en Latinoamérica y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/11/01201052/Foto1_Decomiso-de-las-aletas-de-tiburon-en-el-aeropuerto-de-Bogota-Foto-Secretaria-de-Ambiente-de-Bogota-768x512.jpeg",
    "fecha": "Nov 12, 2023",
    "url": "https://es.mongabay.com/2023/11/lo-mas-leido-trafico-de-aletas-de-tiburon-en-colombia-protestas-por-mineria-en-panama-perdida-de-superficie-de-agua-dulce-en-latinoamerica-y-mas/"
  },
  {
    "titulo": "¿Qué tanto sabes del gato huiña? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/28191445/guina-jerry-laker-1-768x512.jpg",
    "fecha": "Nov 10, 2023",
    "url": "https://es.mongabay.com/2023/11/que-tanto-sabes-del-gato-huina-la-trivia-de-mongabay-latam/"
  },
  {
    "titulo": "Carreteras: una amenaza mortal para la fauna de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/02174510/Zorro-de-sechura-768x512.jpg",
    "fecha": "Nov 04, 2023",
    "url": "https://es.mongabay.com/2023/11/carreteras-amenaza-mortal-para-fauna-latinoamerica/"
  },
  {
    "titulo": "Los cuidadores del Amazonas que ahora deben ser cuidados",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/26151146/foto-1-curare-768x512.jpg",
    "fecha": "Nov 01, 2023",
    "url": "https://es.mongabay.com/2023/11/resguardo-curare-los-ingleses-cuidadores-del-amazonas-que-ahora-deben-ser-cuidados/"
  },
  {
    "titulo": "Deforestación, minería ilegal y narcotráfico acorralan a resguardos indígenas de la Amazonía de Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/27161705/foto-portada-nota-principal-resguardos-Colombia-1-768x512.jpg",
    "fecha": "Nov 01, 2023",
    "url": "https://es.mongabay.com/2023/11/deforestacion-mineria-ilegal-narcotrafico-acorralan-resguardos-indigenas-amazonia-colombia/"
  },
  {
    "titulo": "Jararanko: la amenazada lagartija que es convertida en pasta contra los dolores musculares",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/16193518/3-Jararanko-768x512.jpg",
    "fecha": "Oct 30, 2023",
    "url": "https://es.mongabay.com/2023/10/jararanko-amenazada-lagartija-convertida-en-pasta-contra-dolores-musculares-bolivia/"
  },
  {
    "titulo": "¿Qué tanto sabes de los impactos de la salmonicultura? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/04/13174831/WhatsApp-Image-2021-04-11-at-18.53.55-768x512.jpeg",
    "fecha": "Oct 27, 2023",
    "url": "https://es.mongabay.com/2023/10/que-tanto-sabes-de-los-impactos-de-la-salmonicultura-la-trivia/"
  },
  {
    "titulo": "Ecuador crea nueva área para proteger el agua y la biodiversidad en Cuenca",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/24231316/FRL_0372-768x512.jpg",
    "fecha": "Oct 26, 2023",
    "url": "https://es.mongabay.com/2023/10/ecuador-crea-nueva-area-para-proteger-agua-biodiversidad-en-cuenca/"
  },
  {
    "titulo": "Perú: los bebederos artificiales que convirtieron a la reserva de Milpuj en un refugio de vida",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/24102837/WhatsApp-Image-2023-10-24-at-5.28.11-AM-768x512.jpeg",
    "fecha": "Oct 26, 2023",
    "url": "https://es.mongabay.com/2023/10/peru-bebederos-artificiales-reserva-de-milpuj-animales-conservacion/"
  },
  {
    "titulo": "Las plumas ocultas del Guaviare",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/18095518/DSC06339-Mejorado-NR-Editar-768x512.jpg",
    "fecha": "Oct 25, 2023",
    "url": "https://es.mongabay.com/2023/10/las-plumas-ocultas-del-guaviare-conservacion-aves-amazonia-colombia/"
  },
  {
    "titulo": "Salvar a los delfines de río: la urgencia que une a nueve países en una declaración para proteger a las seis especies que hay en el mundo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/23220006/Captura-de-Pantalla-2023-10-23-a-las-14.59.45-768x431.png",
    "fecha": "Oct 25, 2023",
    "url": "https://es.mongabay.com/2023/10/paises-firman-declaracion-para-proteger-delfines-de-rio-conservacion/"
  },
  {
    "titulo": "¿Qué tanto sabes de los cantos de las ballenas? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/09073328/06-1-768x512.jpg",
    "fecha": "Oct 20, 2023",
    "url": "https://es.mongabay.com/2023/10/que-tanto-sabes-de-ballenas-trivia/"
  },
  {
    "titulo": "Gripe aviar: el virus H5N1 llegó al Parque Nacional Galápagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/13124510/Gripe-aviar-Parque-Nacional-Galapagos-768x512.png",
    "fecha": "Oct 16, 2023",
    "url": "https://es.mongabay.com/2023/10/gripe-aviar-virus-h5n1-parque-nacional-galapagos/"
  },
  {
    "titulo": "EN VIDEO | Cantos, fósiles y especies únicas en el mundo: tres secretos sobre las ballenas que asombran a la ciencia en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/12/07055210/1-768x512.jpg",
    "fecha": "Oct 14, 2023",
    "url": "https://es.mongabay.com/2023/10/video-tres-secretos-sobre-ballenas-latinoamerica/"
  },
  {
    "titulo": "«Observando la naturaleza podemos encontrar respuestas que hemos estado buscando para llevar mejor nuestras vidas» | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/10170357/IMG_1081-768x512.jpeg",
    "fecha": "Oct 11, 2023",
    "url": "https://es.mongabay.com/2023/10/aprendizaje-fotografia-naturaleza-seres-humanos-entrevista-francisco-vera/"
  },
  {
    "titulo": "Una misión de peso: salvar a los manatíes que quedan encallados en el Magdalena Medio, en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/06234810/DSCN0115-768x512.jpg",
    "fecha": "Oct 09, 2023",
    "url": "https://es.mongabay.com/2023/10/salvar-manaties-que-quedan-encallados-magdalena-medio-colombia/"
  },
  {
    "titulo": "Gatos olvidados | La investigación transnacional que revela las graves amenazas que enfrentan cinco gatos silvestres de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/28192743/Margay-subadulto-en-Valle-del-Bravo-Foto-Arturo-Caso-PREDATOR-CONSERVATION-AC-768x512.jpg",
    "fecha": "Oct 08, 2023",
    "url": "https://es.mongabay.com/2023/10/gatos-olvidados-graves-amenazas-que-enfrentan-cinco-gatos-silvestres-latinoamerica/"
  },
  {
    "titulo": "Sin pulmones, con características únicas y bailarinas: las nuevas especies descritas en Colombia que asombran a la ciencia |  Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/08030831/Bolitoglossa-muisca_1-768x512.png",
    "fecha": "Oct 07, 2023",
    "url": "https://es.mongabay.com/2023/10/nuevas-especies-descritas-en-colombia-animales-conservacion/"
  },
  {
    "titulo": "¿Qué tanto sabes del tigrillo? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/31235335/Tigrillo-4-768x512.png",
    "fecha": "Oct 06, 2023",
    "url": "https://es.mongabay.com/2023/10/que-tanto-sabes-del-tigrillo-trivia/"
  },
  {
    "titulo": "Más de 70 países firman un histórico Tratado de Alta Mar, sigue etapa de ratificación",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/24035356/Ballenas_10_Foto-con-%C2%A9-768x512.jpg",
    "fecha": "Oct 04, 2023",
    "url": "https://es.mongabay.com/2023/10/paises-firman-historico-tratado-de-alta-mar-oceanos/"
  },
  {
    "titulo": "¿Qué tanto sabes de la rana coquí antillano? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/06/01125215/Rana-coqui-antillano-en-Cali-Foto-Santiago-Saldarriaga.-EL-TIEMPO-1-768x512.jpg",
    "fecha": "Sep 29, 2023",
    "url": "https://es.mongabay.com/2023/09/que-tanto-sabes-de-la-rana-coqui-antillano-la-trivia/"
  },
  {
    "titulo": "Los vecinos incomprendidos: tlacuaches enfrentan atropellamientos y otras amenazas en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/09/23061505/00-Portada-768x501.png",
    "fecha": "Sep 26, 2023",
    "url": "https://es.mongabay.com/2023/09/tlacuaches-enfrentan-atropellamientos-en-mexico/"
  },
  {
    "titulo": "#EnCorto: cuatro claves para entender por qué la contaminación por plásticos pone en riesgo a la raya Wira",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/22181505/226_4385.jpeg",
    "fecha": "Sep 26, 2023",
    "url": "https://es.mongabay.com/2023/09/en-corto-contaminacion-por-plasticos-en-riesgo-raya-wira/"
  },
  {
    "titulo": "#ExpediciónVirtual: una caminata por el bosque nuboso de Baja Verapaz, en Guatemala",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/09/21071237/Captura-de-Pantalla-2023-09-21-a-las-0.12.16-768x512.png",
    "fecha": "Sep 22, 2023",
    "url": "https://es.mongabay.com/2023/09/expedicion-virtual-bosque-nuboso-de-baja-verapaz-guatemala/"
  },
  {
    "titulo": "¿Qué tanto sabes del cocodrilo del Orinoco? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/04/15004145/DSC_9905-768x511.jpg",
    "fecha": "Sep 22, 2023",
    "url": "https://es.mongabay.com/2023/09/que-tanto-sabes-del-cocodrilo-del-orinoco-la-trivia/"
  },
  {
    "titulo": "El hombre que hizo un pacto con las abejas para salvar a su comunidad en Guainía",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/09/19161608/DSC_2687-768x512.jpg",
    "fecha": "Sep 20, 2023",
    "url": "https://es.mongabay.com/2023/09/el-hombre-que-hizo-pacto-con-abejas-para-salvar-comunidad-en-guainia-conservacion/"
  },
  {
    "titulo": "¿Qué tanto sabes del yunco? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/08/12211923/Yunco1-768x512.jpg",
    "fecha": "Sep 15, 2023",
    "url": "https://es.mongabay.com/2023/09/que-tanto-sabes-del-yunco-la-trivia-de-mongabay-latam/"
  },
  {
    "titulo": "Veinte años de investigación en la Amazonía peruana anticipan el destino de los trópicos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/08133014/7.-Andean-motmot-768x512.jpg",
    "fecha": "Sep 14, 2023",
    "url": "https://es.mongabay.com/2023/09/investigacion-amazonia-peruana-anticipan-destino-de-tropicos/"
  },
  {
    "titulo": "Conservación sobre ruedas: pedalear para salvar a la danta de montaña y al oso de anteojos en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/09/14174137/Paulo-Quintero-768x450.png",
    "fecha": "Sep 14, 2023",
    "url": "https://es.mongabay.com/2023/09/conservacion-sobre-ruedas-danta-de-montana-oso-de-anteojos-colombia-entrevista/"
  },
  {
    "titulo": "EN VIDEO | Tres expediciones científicas revelan la importancia de conservar a escarabajos, caimanes del Orinoco y oso andino de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/09/03171708/oso-andino-bolivia-mongabay-latam-494x330.jpg",
    "fecha": "Sep 10, 2023",
    "url": "https://es.mongabay.com/2023/09/video-expediciones-cientificas-conservar-escarabajos-caimanes-del-orinoco-oso-andino-latinoamerica/"
  },
  {
    "titulo": "Colombia: actividades humanas alteran horarios y comportamientos de aves y mamíferos | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/09/06175211/Cuniculus-paca-768x512.jpg",
    "fecha": "Sep 07, 2023",
    "url": "https://es.mongabay.com/2023/09/colombia-actividades-humanas-alteran-horarios-y-comportamientos-de-aves-mamiferos-estudio/"
  },
  {
    "titulo": "Colombia: investigadores del Instituto Humboldt describen a un nuevo escarabajo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/09/06170702/escarabajo-en-colombia-768x450.png",
    "fecha": "Sep 06, 2023",
    "url": "https://es.mongabay.com/2023/09/colombia-investigadores-describen-un-nuevo-escarabajo/"
  },
  {
    "titulo": "Las especies invasoras han contribuido con el 60 % de todas las extinciones registradas en el mundo | INFORME",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/09/05034803/8-Invasive-beaver-768x512.jpg",
    "fecha": "Sep 05, 2023",
    "url": "https://es.mongabay.com/2023/09/especies-invasoras-han-contribuido-en-extinciones-registradas-en-el-mundo-informe/"
  },
  {
    "titulo": "Día Internacional de los Primates: esperanza para dos de los monos más grandes y amenazados de Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/09191625/Lagothrix-lagotricha-churuco-%C2%A9Pablo-Meji%CC%81a-_WWF-Colombia--768x512.jpg",
    "fecha": "Sep 01, 2023",
    "url": "https://es.mongabay.com/2023/09/dia-internacional-de-los-primates-esperanza-monos-colombia/"
  },
  {
    "titulo": "¿Qué tanto sabes del gato andino? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/12215704/Gato-Andino-2-firma-Ingle%CC%81s-768x512.jpg",
    "fecha": "Sep 01, 2023",
    "url": "https://es.mongabay.com/2023/09/que-tanto-sabes-del-gato-andino-la-trivia/"
  },
  {
    "titulo": "Comunidades aprenden a convivir con osos de anteojos y águilas en los bosques de niebla de Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/10155631/2.-spectacled-bear-768x512.jpg",
    "fecha": "Aug 31, 2023",
    "url": "https://es.mongabay.com/2023/08/comunidades-aprenden-a-convivir-con-osos-de-anteojos-y-aguilas-colombia/"
  },
  {
    "titulo": "Ecuador: descubren una nueva especie de araña cangrejo gigante en el Parque Yasuní",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/28042104/DSC_0134-768x512.jpg",
    "fecha": "Aug 30, 2023",
    "url": "https://es.mongabay.com/2023/08/ecuador-descubren-nueva-especie-de-arana-cangrejo-gigante-parque-yasuni/"
  },
  {
    "titulo": "#ExpedicionesCientíficas | La increíble travesía de siete caimanes del Orinoco",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/17230746/unnamed-4-1536x1152-1-768x512.jpg",
    "fecha": "Aug 27, 2023",
    "url": "https://es.mongabay.com/2023/08/expediciones-cientificas-increible-travesia-de-siete-caimanes-del-orinoco/"
  },
  {
    "titulo": "Coyuntura ambiental | ¿Cómo han logrado expertos y comunidades de México  trabajar juntos para conservar a las especies de flora y fauna de su país?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/03/27235252/Captura-de-Pantalla-2023-03-27-a-las-16.51.59-768x463.png",
    "fecha": "Aug 26, 2023",
    "url": "https://es.mongabay.com/2023/08/expertos-y-comunidades-conservan-especies-de-mexico/"
  },
  {
    "titulo": "¿Qué tanto sabes del visón americano? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/09/09205216/Romina-Mancilla-Visones-768x512.jpg",
    "fecha": "Aug 25, 2023",
    "url": "https://es.mongabay.com/2023/08/que-tanto-sabes-del-vison-americano-trivia/"
  },
  {
    "titulo": "La danza del cortejo: las dos primeras especies de moscas bailarinas descubiertas en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/21121732/Habito_Macho_Hoplopeza-colombiana-sp-nov-768x512.jpg",
    "fecha": "Aug 24, 2023",
    "url": "https://es.mongabay.com/2023/08/dos-primeras-especies-de-moscas-bailarinas-descubiertas-en-colombia/"
  },
  {
    "titulo": "Día Internacional de los Parques Nacionales: un recorrido por cinco asombrosos ecosistemas de Latinoamérica | #ExpediciónVirtual",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/10003938/PN-4582-768x512.jpg",
    "fecha": "Aug 24, 2023",
    "url": "https://es.mongabay.com/2023/08/dia-internacional-de-parques-nacionales-cinco-asombrosos-ecosistemas-de-latinoamerica/"
  },
  {
    "titulo": "Perú: estudio muestra que aves y murciélagos ayudan a los agricultores del cacao a tener mayor producción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/02135808/cacao_open-sun-768x512.jpeg",
    "fecha": "Aug 24, 2023",
    "url": "https://es.mongabay.com/2023/08/peru-estudio-aves-murcielagos-ayudan-agricultores-cacao/"
  },
  {
    "titulo": "Biólogos y guardaparques hallan una nueva especie de árbol y de rana en áreas protegidas de Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/21153838/Parque-Nacional-Cordillera-Azul-Jardin-Botanico-de-Missouri-9-768x512.jpg",
    "fecha": "Aug 23, 2023",
    "url": "https://es.mongabay.com/2023/08/hallan-nueva-especie-de-arbol-y-de-rana-en-peru/"
  },
  {
    "titulo": "Chocó ecuatoriano: el proyecto que busca salvar al mono araña de cabeza café, uno de los primates más amenazados en el mundo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/18060629/Mono-Arana-de-Cabeza-Cafe-2-768x512.jpg",
    "fecha": "Aug 21, 2023",
    "url": "https://es.mongabay.com/2023/08/choco-ecuatoriano-proyecto-busca-salvar-mono-arana-cabeza-cafe/"
  },
  {
    "titulo": "Perú: el desafío de desenterrar el fósil de la ballena más grande conocida hasta hoy",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/14223137/Field-excavation3-Giovanni-Bianucci-768x512.jpg",
    "fecha": "Aug 16, 2023",
    "url": "https://es.mongabay.com/2023/08/peru-desafio-de-desenterrar-fosil-de-ballena-mas-grande-conocida-hasta-hoy/"
  },
  {
    "titulo": "EN VIDEO | Tres estrategias de conservación que están salvando de la extinción a las aves de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/02/01225700/polluelo-de-yunco-768x512.jpg",
    "fecha": "Aug 12, 2023",
    "url": "https://es.mongabay.com/2023/08/video-conservacion-extincion-aves-latinoamerica/"
  },
  {
    "titulo": "¿Qué tanto sabes de las luciérnagas? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/10224728/28533412766_6a19271a6a_o-768x512.jpg",
    "fecha": "Aug 11, 2023",
    "url": "https://es.mongabay.com/2023/08/que-tanto-sabes-de-las-luciernagas-trivia/"
  },
  {
    "titulo": "Tirica: las enormes amenazas al gato silvestre más pequeño del Bosque Atlántico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/04173050/tirica-6-768x512.jpeg",
    "fecha": "Aug 08, 2023",
    "url": "https://es.mongabay.com/2023/08/tirica-desconocimiento-perdida-de-habitat-bosque-atlantico/"
  },
  {
    "titulo": "ESPECIAL | Los pequeños y olvidados gatos silvestres de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/08014638/PORTADA-Especial-Los-pequenos-y-olvidados-gatos-silvestres-de-Latinoamerica-768x512.png",
    "fecha": "Aug 08, 2023",
    "url": "https://es.mongabay.com/2023/08/especial-los-pequenos-y-olvidados-gatos-silvestres-de-latinoamerica/"
  },
  {
    "titulo": "Margay: el trapecista de los árboles amenazado por la pérdida de bosque",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/28192743/Margay-subadulto-en-Valle-del-Bravo-Foto-Arturo-Caso-PREDATOR-CONSERVATION-AC-768x512.jpg",
    "fecha": "Aug 08, 2023",
    "url": "https://es.mongabay.com/2023/08/margay-trapecista-de-arboles-amenazado-por-perdida-de-bosque/"
  },
  {
    "titulo": "Dulce solución: la miel que ayuda a los apicultores y armadillos gigantes de Brasil",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/03001559/Captura-de-Pantalla-2023-08-02-a-las-17.15.36-768x484.png",
    "fecha": "Aug 03, 2023",
    "url": "https://es.mongabay.com/2023/08/conservacion-miel-apicultores-armadillos-gigantes-brasil/"
  },
  {
    "titulo": "Más de 5 000 atropellamientos de animales silvestres se registraron en los últimos 15 años en Ecuador | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/08/02174455/hormiguero-2-768x512.jpg",
    "fecha": "Aug 03, 2023",
    "url": "https://es.mongabay.com/2023/08/atropellamientos-de-animales-silvestres-en-ecuador-estudio/"
  },
  {
    "titulo": "Coyuntura ambiental | Mujeres asombrosas que protegen los bosques, el agua y las abejas en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/19214616/01-Dia-de-cosecha-con-productores-de-miel-768x512.jpg",
    "fecha": "Jul 29, 2023",
    "url": "https://es.mongabay.com/2023/07/mujeres-que-protegen-bosques-agua-abejas-latinoamerica/"
  },
  {
    "titulo": "La extraña piel que revelaría una nueva especie de félido en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/25033406/guina_eduardo-silva-rodriguez-1600x1267-1-768x512.jpg",
    "fecha": "Jul 27, 2023",
    "url": "https://es.mongabay.com/2023/07/extrana-piel-que-revelaria-nueva-especie-de-felido-en-colombia/"
  },
  {
    "titulo": "Investigadores encuentran el primer nido de la misteriosa águila albinegra en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/26073542/Captura-de-Pantalla-2023-07-26-a-las-0.35.09-768x479.png",
    "fecha": "Jul 27, 2023",
    "url": "https://es.mongabay.com/2023/07/investigadores-encuentran-primer-nido-de-misteriosa-aguila-albinegra-mexico/"
  },
  {
    "titulo": "Cóndor de California: el ave que voló lejos de la extinción gracias a los zoológicos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/25031829/6-768x512.jpg",
    "fecha": "Jul 25, 2023",
    "url": "https://es.mongabay.com/2023/07/condor-de-california-ave-que-volo-lejos-de-la-extincion-gracias-a-zoologicos/"
  },
  {
    "titulo": "¿Qué tanto sabes de los osos? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/08/31010654/Cuenca-alta-y-media-Mira-Mataje-FOTOS-ANDRES-LAGUNA-11-768x512.jpg",
    "fecha": "Jul 21, 2023",
    "url": "https://es.mongabay.com/2023/07/que-tanto-sabes-de-los-osos-trivia/"
  },
  {
    "titulo": "Mongabay abre nueva convocatoria de la beca para jóvenes periodistas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/19213453/03-manu_0230_22-768x512.jpg",
    "fecha": "Jul 18, 2023",
    "url": "https://es.mongabay.com/2023/07/mongabay-abre-nueva-convocatoria-de-beca-para-jovenes-periodistas-ambientales/"
  },
  {
    "titulo": "Día Mundial de las Serpientes: la gran esperanza médica está detrás de sus venenos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/15051808/Corallus-hortulanus_Salazar-Valenzuela-768x512.jpg",
    "fecha": "Jul 16, 2023",
    "url": "https://es.mongabay.com/2023/07/dia-mundial-de-las-serpientes-la-gran-esperanza-medica-esta-detras-de-sus-venenos/"
  },
  {
    "titulo": "EN VIDEO | Expedición virtual por cuatro santuarios naturales del Perú que destacan por su biodiversidad",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/12/30065458/Gabriel-Herrera-Pampa-Galeras-WHW_3211-768x512.jpg",
    "fecha": "Jul 15, 2023",
    "url": "https://es.mongabay.com/2023/07/video-expedicion-virtual-santuarios-naturales-peru-biodiversidad/"
  },
  {
    "titulo": "#EnCorto: Cuatro claves sobre la exportación de tiburones desde Perú con permisos irregulares",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/30201216/Shutterstock-Alopias-pelagicus-768x512.jpg",
    "fecha": "Jul 14, 2023",
    "url": "https://es.mongabay.com/2023/07/en-corto-exportacion-de-tiburones-desde-peru-con-permisos-irregulares/"
  },
  {
    "titulo": "¿Qué tanto sabes de los murciélagos? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/09191653/Platyrrhinus-brachycephalus-%C2%A9Pablo-Meji%CC%81a-_WWF-Colombia-768x512.jpg",
    "fecha": "Jul 14, 2023",
    "url": "https://es.mongabay.com/2023/07/que-tanto-sabes-de-los-murcielagos-trivia/"
  },
  {
    "titulo": "Izabela Stachowicz: la bióloga que conserva los ecosistemas únicos de la Gran Sabana de Venezuela",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/07225406/MA_20130409_249393_D-768x512.jpg",
    "fecha": "Jul 12, 2023",
    "url": "https://es.mongabay.com/2023/07/izabela-stachowicz-conserva-ecosistemas-unicos-de-gran-sabana-venezuela/"
  },
  {
    "titulo": "Peces que sobreviven fuera del agua y otros que generan campos eléctricos son noticia en Bolivia, Colombia y Venezuela | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/06/20190211/BOJX0346_Felipe-Villegas-768x512.jpg",
    "fecha": "Jul 07, 2023",
    "url": "https://es.mongabay.com/2023/07/peces-que-sobreviven-fuera-del-agua-otros-generan-campos-electricos-latinoamerica/"
  },
  {
    "titulo": "La guía de campo que busca sacar de la oscuridad a las polillas | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/06222418/Automeris_jucunda-Saturniidae-Qui-Guadualito-20101115-RB_10-768x512.jpg",
    "fecha": "Jul 07, 2023",
    "url": "https://es.mongabay.com/2023/07/guia-de-campo-que-busca-sacar-de-la-oscuridad-a-polillas-entrevista/"
  },
  {
    "titulo": "¿Qué tanto sabes del huemul? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/06/07163943/Silueta-de-dos-Huemules-machos-768x512.jpg",
    "fecha": "Jul 07, 2023",
    "url": "https://es.mongabay.com/2023/07/que-tanto-sabes-del-huemul-trivia/"
  },
  {
    "titulo": "Científicas descifran el canto de las ballenas jorobadas del Pacífico colombiano",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/07/05160241/13JUL2019_BM_D7200__0302-768x512.jpg",
    "fecha": "Jul 06, 2023",
    "url": "https://es.mongabay.com/2023/07/cientificas-descifran-el-canto-de-las-ballenas-jorobadas-del-pacifico-colombiano/"
  },
  {
    "titulo": "#EnCorto: tres claves para entender el desafío de conservar al tigrillo lanudo en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/01/14210111/LEOPARDUS-TIGRINUS-FUNDACION-JAGUAR-768x511.jpg",
    "fecha": "Jul 05, 2023",
    "url": "https://es.mongabay.com/2023/07/en-corto-tres-claves-para-conservar-tigrillo-lanudo-colombia/"
  },
  {
    "titulo": "#ExpedicionesCientíficas | Escarabajos: pequeños guardianes de la conservación en el Parque Manu",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/01/16052132/RAP-valle-de-Zongo-Escarabajo-de-los-hongos-Erotylus-voeti-Foto-Trond-Larsen-Conservation-International-768x512.jpg",
    "fecha": "Jul 01, 2023",
    "url": "https://es.mongabay.com/2023/07/expediciones-cientificas-escarabajos-conservacion-parque-manu/"
  },
  {
    "titulo": "EN VIDEO | Cinco especies invasoras que amenazan gravemente la biodiversidad de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/28234349/Rana-coqui-antillano-en-Cali-Foto-Santiago-Saldarriaga.-EL-TIEMPO-2-768x512.jpg",
    "fecha": "Jun 24, 2023",
    "url": "https://es.mongabay.com/2023/06/video-cinco-especies-invasoras-que-amenazan-biodiversidad-de-latinoamerica/"
  },
  {
    "titulo": "¿Qué tanto sabes sobre los félidos? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/26181841/Jaguar-en-Peru%CC%81-Pucallpa-Musuk-Nolte-para-WCS-Peru%CC%81-768x512.jpg",
    "fecha": "Jun 23, 2023",
    "url": "https://es.mongabay.com/2023/06/que-tanto-sabes-sobre-los-felidos-trivia/"
  },
  {
    "titulo": "Peces que generan campos eléctricos o que son ciegos: así son algunos habitantes de las profundidades del río Orinoco | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/06/20185957/OJO0162_Felipe-Villegas-768x512.jpg",
    "fecha": "Jun 21, 2023",
    "url": "https://es.mongabay.com/2023/06/peces-que-generan-campos-electricos-rio-orinoco-entrevista/"
  },
  {
    "titulo": "Ecuador: organizaciones denuncian que préstamos del Banco Mundial y del BID para financiar granjas de cerdos y pollos ignoraron denuncias ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/08/03152621/Hog_confinement_barn_interior-1-768x512.jpg",
    "fecha": "Jun 20, 2023",
    "url": "https://es.mongabay.com/2023/06/denuncian-que-prestamos-del-banco-mundial-y-del-bid-para-financiar-granjas-de-cerdos-y-pollos-ignoraron-denuncias-ambientales-ecuador/"
  },
  {
    "titulo": "Día Mundial de las Tortugas Marinas: tres iniciativas para mitigar la captura incidental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/05/18032100/Foto-11-768x512.jpg",
    "fecha": "Jun 16, 2023",
    "url": "https://es.mongabay.com/2023/06/dia-mundial-de-las-tortugas-marinas-mitigar-la-captura-incidental/"
  },
  {
    "titulo": "¿Qué tanto sabes sobre los primates? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/02/27181154/colombia-primates-biodiversidad-fauna-animales-689x512.jpg",
    "fecha": "Jun 16, 2023",
    "url": "https://es.mongabay.com/2023/06/que-tanto-sabes-sobre-los-primates-la-trivia/"
  },
  {
    "titulo": "“Engordar erizos”: el desafío de conservar a una especie, a los bosques marinos y el sustento de pescadores en el norte de México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/06/02235657/Ensenada-Carlos-AguileraDJI_0210-768x512.jpg",
    "fecha": "Jun 13, 2023",
    "url": "https://es.mongabay.com/2023/06/conservacion-erizos-bosques-marinos-sustento-de-pescadores-mexico/"
  },
  {
    "titulo": "EN VIDEO | Tres estrategias de conservación lideradas por mujeres para proteger a tortugas, monos y abejas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/11/23171518/Captura-de-Pantalla-2022-11-23-a-las-10.13.52-768x512.png",
    "fecha": "Jun 09, 2023",
    "url": "https://es.mongabay.com/2023/06/video-mujeres-conservacion-tortugas-monos-abejas/"
  },
  {
    "titulo": "#ExpediciónVirtual: una caminata en Ampay, el santuario peruano que protege al árbol del sol",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/06/08232257/Purple-backed-Thornbill-Ramphomicron-microrhynchum-768x512.jpg",
    "fecha": "Jun 09, 2023",
    "url": "https://es.mongabay.com/2023/06/expedicion-virtual-santuario-nacional-de-ampay-peru/"
  },
  {
    "titulo": "La pequeña y ruidosa rana que ha invadido grandes ciudades de Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/28224624/Coqui-Antillano-Foto-Alexandre-Roux-Flickr-PARA-WEB-768x512.jpg",
    "fecha": "Jun 06, 2023",
    "url": "https://es.mongabay.com/2023/06/rana-coqui-ha-invadido-ciudades-de-colombia/"
  },
  {
    "titulo": "La palomilla que es una amenaza latente para los nopales en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/26180724/Palomilla-del-Nopal-adulta-Foto-Wikimedia-Commons-768x511.jpg",
    "fecha": "Jun 06, 2023",
    "url": "https://es.mongabay.com/2023/06/palomilla-invasora-amenaza-latente-para-nopales-mexico/"
  },
  {
    "titulo": "La liebre europea amenaza la biodiversidad de la sierra y la costa de Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/25215536/Liebre-Europea-Foto-Wikimedia-Commons-768x512.jpg",
    "fecha": "Jun 06, 2023",
    "url": "https://es.mongabay.com/2023/06/liebre-europea-invasora-amenaza-biodiversidad-de-peru/"
  },
  {
    "titulo": "Caracol africano: la plaga silenciosa que invadió Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/25211944/CARACOL-AFRICANO-4-768x512.jpeg",
    "fecha": "Jun 06, 2023",
    "url": "https://es.mongabay.com/2023/06/caracol-africano-invasor-plaga-que-invadio-ecuador/"
  },
  {
    "titulo": "El castor, la plaga que arrasa los bosques de Tierra del Fuego en Argentina y Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/26005547/Castor-2-768x512.jpg",
    "fecha": "Jun 06, 2023",
    "url": "https://es.mongabay.com/2023/06/castor-invasor-plaga-que-arrasa-bosques-de-tierra-del-fuego-argentina-chile/"
  },
  {
    "titulo": "Enemigas de la biodiversidad: especies invasoras avanzan sin control en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/26005415/Castor-comiendo-Jan-768x512.jpg",
    "fecha": "Jun 06, 2023",
    "url": "https://es.mongabay.com/2023/06/enemigas-de-la-biodiversidad-especies-invasoras-avanzan-sin-control-latinoamerica/"
  },
  {
    "titulo": "“Es verdad que enfrentamos la sexta extinción, pero es posible revertirla” | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/06/01225205/Captura-de-Pantalla-2023-06-01-a-las-16.49.52-768x427.png",
    "fecha": "Jun 02, 2023",
    "url": "https://es.mongabay.com/2023/06/enfrentamos-la-sexta-extincion-pero-es-posible-revertirla-entrevista-jon-paul-rodriguez/"
  },
  {
    "titulo": "Una gran orquesta canora: aves de Colombia son protagonistas de una canción experimental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/30235929/Captura-de-Pantalla-2023-05-30-a-las-16.56.14-768x370.png",
    "fecha": "Jun 01, 2023",
    "url": "https://es.mongabay.com/2023/06/aves-de-colombia-son-protagonistas-de-una-cancion-experimental/"
  },
  {
    "titulo": "Disparos, venenos y cables de alta tensión amenazan a los cóndores en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/31225439/9.-CONDOR-AL-ESCAPE-2DA.-TEMPORADA-768x512.jpeg",
    "fecha": "Jun 01, 2023",
    "url": "https://es.mongabay.com/2023/06/disparos-venenos-cables-de-alta-tension-amenazan-condores-peru/"
  },
  {
    "titulo": "Perú: 153 toneladas de aletas de tiburones amenazados fueron exportadas con permisos irregulares",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/30201310/OCEANA-Incautaci%C2%A2n-de-aletas-de-tibur%C2%A2n-0026-scaled-e1685486559247-768x512.jpg",
    "fecha": "May 31, 2023",
    "url": "https://es.mongabay.com/2023/05/peru-aletas-de-tiburones-amenazados-fueron-exportadas-con-permisos-irregulares/"
  },
  {
    "titulo": "¿Un pez capaz de sobrevivir fuera del agua? Así es la nueva especie que se identificó en Bolivia | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/16093405/Moema-juanderibaensis-55-Heinz-Arno-Drawert-768x512.jpg",
    "fecha": "May 31, 2023",
    "url": "https://es.mongabay.com/2023/05/pez-capaz-de-sobrevivir-fuera-del-agua-nueva-especie-bolivia-entrevista/"
  },
  {
    "titulo": "Factores impulsores de la degradación ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/06001207/1_Mongabay_amazon_200260-768x512.jpg",
    "fecha": "May 27, 2023",
    "url": "https://es.mongabay.com/2023/05/factores-impulsores-de-la-degradacion-ambiental-libro/"
  },
  {
    "titulo": "Nuevas especies, proyectos de conservación y mucha ciencia: tres especies asombrosas que son noticia en Latinoamérica | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/08030817/Bolitoglossa-muisca-2-768x512.jpg",
    "fecha": "May 27, 2023",
    "url": "https://es.mongabay.com/2023/05/nuevas-especies-proyectos-de-conservacion-latinoamerica/"
  },
  {
    "titulo": "¿Qué tanto sabes sobre los hipopótamos? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/10/13175155/DSC_0747-768x428.jpg",
    "fecha": "May 26, 2023",
    "url": "https://es.mongabay.com/2023/05/que-tanto-sabes-sobre-hipopotamos-trivia/"
  },
  {
    "titulo": "La energía de la montaña: el proyecto que salva a las abejas nativas y restaura su hábitat en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/19211346/Captura-de-Pantalla-2023-05-19-a-las-14.11.28-768x477.png",
    "fecha": "May 20, 2023",
    "url": "https://es.mongabay.com/2023/05/proyecto-que-salva-abejas-nativas-y-restaura-su-habitat-en-peru/"
  },
  {
    "titulo": "Día Mundial de las Especies Amenazadas: tres historias exitosas de conservación en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/18181632/Captura-de-Pantalla-2023-05-18-a-las-11.14.20-768x512.png",
    "fecha": "May 19, 2023",
    "url": "https://es.mongabay.com/2023/05/dia-mundial-de-las-especies-amenazadas-conservacion-en-latinoamerica/"
  },
  {
    "titulo": "La biodiversidad de los bosques más australes del mundo amenazada por los animales exóticos e invasores",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/17011847/Mink-en-nido-de-Caiquen-768x512.jpg",
    "fecha": "May 18, 2023",
    "url": "https://es.mongabay.com/2023/05/bosques-australes-del-mundo-amenazados-por-animales-exoticos-invasores-chile/"
  },
  {
    "titulo": "¿Qué tanto sabes de la paraba barba azul? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/14081032/Paraba-barba-Azul-2-Asociacio%CC%81n-Armoni%CC%81a-768x512.jpg",
    "fecha": "May 12, 2023",
    "url": "https://es.mongabay.com/2023/05/que-tanto-sabes-de-la-paraba-barba-azul-trivia/"
  },
  {
    "titulo": "#EnCorto: tres claves para conocer la biodiversidad y la cultura en los Llanos de Moxos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/31021154/44Euphractus-sexcinctus-Rob-Wallace-WCS-35374-lagos-768x512.jpg",
    "fecha": "May 10, 2023",
    "url": "https://es.mongabay.com/2023/05/en-corto-biodiversidad-cultura-llanos-de-moxos-bolivia/"
  },
  {
    "titulo": "Operación Jaguar: investigadores detectan dos de las redes más poderosas del tráfico de jaguar en Surinam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/08191254/Britta-Jaschinski-IUCN-NL-Natuurbeheer-educatie-en-voorlichting-Suriname_HR-20-768x513.jpg",
    "fecha": "May 09, 2023",
    "url": "https://es.mongabay.com/2023/05/operacion-jaguar-detecta-redes-del-trafico-de-jaguar-en-surinam/"
  },
  {
    "titulo": "Colombia: descubren nueva especie de salamandra en los bosques nublados de Cundinamarca",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/08031006/Bolitoglossa-muisca_8-768x512.png",
    "fecha": "May 09, 2023",
    "url": "https://es.mongabay.com/2023/05/descubren-nueva-especie-de-salamandra-en-colombia-animales/"
  },
  {
    "titulo": "¿Qué tanto sabes del cóndor andino? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/19163903/Captura-de-Pantalla-2022-08-19-a-las-9.38.46-768x513.png",
    "fecha": "May 05, 2023",
    "url": "https://es.mongabay.com/2023/05/que-tanto-sabes-del-condor-andino-trivia-animales/"
  },
  {
    "titulo": "Fanny Cornejo: la bióloga peruana premiada mundialmente por su trabajo para evitar la extinción del mono choro de cola amarilla | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/05/01163404/FannyM.Cornejo_IndiPrize%C2%A9GersonFerrer-Yunkawasi-13-768x512.jpg",
    "fecha": "May 02, 2023",
    "url": "https://es.mongabay.com/2023/05/fanny-cornejo-premiada-conservacion-mono-choro-de-cola-amarilla-entrevista/"
  },
  {
    "titulo": "Tatú carreta, cachicamo sabanero y culotapado: tres asombrosos armadillos seriamente amenazados en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/04/02002504/Dasypus-kappleri-Emilio-Constantino-2-720x512.jpg",
    "fecha": "Apr 29, 2023",
    "url": "https://es.mongabay.com/2023/04/tres-asombrosos-armadillos-amenazados-en-latinoamerica-animales/"
  },
  {
    "titulo": "#EnCorto: Tres claves para saber cómo el zopilote rey mejoró prácticas de manejo forestal en la selva maya",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/03/09224819/Nuevo-Be%CC%81cal_Foto_3_FSC_GD-768x512.jpg",
    "fecha": "Apr 28, 2023",
    "url": "https://es.mongabay.com/2023/04/en-corto-zopilote-rey-mejoro-practicas-de-manejo-forestal-mexico/"
  },
  {
    "titulo": "Día Internacional del Tapir: ¿qué está pasando en Latinoamérica con esta especie milenaria?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/04/24165841/Foto-2-Fernando-Contreras-WWF-MX-768x512.jpg",
    "fecha": "Apr 27, 2023",
    "url": "https://es.mongabay.com/2023/04/dia-internacional-del-tapir-conservacion-latinoamerica/"
  },
  {
    "titulo": "¿Qué tanto sabes del tapir? | La trivia de Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/23044014/Daniel-Restrepo-Marin_1-768x513.jpg",
    "fecha": "Apr 27, 2023",
    "url": "https://es.mongabay.com/2023/04/que-tanto-sabes-del-tapir-trivia-animales/"
  },
  {
    "titulo": "Yuliana Bedolla gana el premio Whitley 2023, uno de los más importantes del mundo de la conservación",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/04/24203541/Adulto_Petrel-negro_%C2%A9GECI-_-Yuliana-Bedolla-768x512.jpg",
    "fecha": "Apr 26, 2023",
    "url": "https://es.mongabay.com/2023/04/yuliana-bedolla-gana-premio-whitley-2023-conservacion/"
  },
  {
    "titulo": "La vaquita marina tiene suficiente fortaleza genética para sobrevivir | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/04/21023515/1.-Vaquita-con-bebe-768x389.jpg",
    "fecha": "Apr 24, 2023",
    "url": "https://es.mongabay.com/2023/04/vaquita-marina-tiene-suficiente-fortaleza-genetica-para-sobrevivir-estudio-oceanos/"
  },
  {
    "titulo": "Chile: después de 70 años, el nacimiento de un yunco despierta esperanzas para esta ave en la isla Chañaral",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/02/01225700/polluelo-de-yunco-768x512.jpg",
    "fecha": "Apr 20, 2023",
    "url": "https://es.mongabay.com/2023/04/nacimiento-de-un-yunco-despierta-esperanzas-para-esta-ave-isla-chanaral/"
  },
  {
    "titulo": "Científicos identifican 65 zonas importantes para la supervivencia de tiburones entre México y Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/05/11140128/Salas-y-G%C3%B3mez-16-Eduardo-Sorensen-Oceana-Chile-768x512.png",
    "fecha": "Apr 18, 2023",
    "url": "https://es.mongabay.com/2023/04/identifican-zonas-importantes-para-supervivencia-de-tiburones/"
  },
  {
    "titulo": "#EnCorto: Tres datos sobre las ranas diminutas descubiertas en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/29233320/P1780420-copy-768x512.jpg",
    "fecha": "Apr 17, 2023",
    "url": "https://es.mongabay.com/2023/04/en-corto-ranas-diminutas-descubiertas-en-ecuador/"
  },
  {
    "titulo": "Colombia: la liberación de cocodrilos del Orinoco que lleva la esperanza de salvar a su especie",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/04/15003115/Foto-Camila-Duran_WCS-Colombia-2-768x512.jpg",
    "fecha": "Apr 17, 2023",
    "url": "https://es.mongabay.com/2023/04/conservacion-cocodrilos-del-orinoco-colombia/"
  },
  {
    "titulo": "Perú: estudio revela la presencia de 150 especies y más de mil corredores de conectividad en áreas impactadas por minería en Madre de Dios",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/04/13021901/Oso-bandera-Myrmecophaga-tridactyla-Nuevo-San-Juan-768x512.jpg",
    "fecha": "Apr 13, 2023",
    "url": "https://es.mongabay.com/2023/04/estudio-revela-presencia-de-especies-en-areas-impactadas-por-mineria-madre-de-dios/"
  },
  {
    "titulo": "Volver a la naturaleza: la árdua tarea de rescatar a los animales silvestres del tráfico ilegal en Guatemala",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/04/11145047/Guacamaya-roja-768x450.png",
    "fecha": "Apr 12, 2023",
    "url": "https://es.mongabay.com/2023/04/animales-silvestres-trafico-ilegal-guatemala-conservacion/"
  },
  {
    "titulo": "#EnCorto: la lucha por rescatar a los primates del tráfico ilegal en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/02070558/DSC_0284-768x512.jpg",
    "fecha": "Apr 12, 2023",
    "url": "https://es.mongabay.com/2023/04/en-corto-conservacion-primates-trafico-ilegal-colombia/"
  },
  {
    "titulo": "Tiburones en las playas de Perú: “Debemos tener la misma precaución que con un lobo marino o un delfín”",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/11/05073840/TIBURON-AZUL-credito-Martin-Prochazkacz-768x512.jpg",
    "fecha": "Apr 11, 2023",
    "url": "https://es.mongabay.com/2023/04/tiburones-en-playas-de-peru-oceanos/"
  },
  {
    "titulo": "Elizabeth Kerr: la fascinante y poco conocida historia de la científica que recolectó más de 500 aves en Colombia a inicios del siglo XX",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/04/06140517/5_Team-outside-tent-lab-Proyecto-Expediciones-BIO-Alas-cantos-y-colores-768x512.jpg",
    "fecha": "Apr 10, 2023",
    "url": "https://es.mongabay.com/2023/04/elizabeth-kerr-primera-ornitologa-en-colombia/"
  },
  {
    "titulo": "Avistamientos extraordinarios: cinco especies que volvieron a ser observadas luego de años de ausencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/07/27155827/muitu-ave-argentina-3-768x512.jpg",
    "fecha": "Apr 09, 2023",
    "url": "https://es.mongabay.com/2023/04/especies-que-volvieron-a-ser-observadas-en-latinoamerica-conservacion/"
  },
  {
    "titulo": "#ExpediciónVirtual: una visita a Putumayo-Algodón, un paisaje megadiverso en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/04/04172711/IMG_3612-768x512.jpg",
    "fecha": "Apr 08, 2023",
    "url": "https://es.mongabay.com/2023/04/expedicion-virtual-putumayo-algodon-conservacion-peru/"
  },
  {
    "titulo": "EN VIDEO | ¿Cómo protegen a las ballenas azules, mantas gigantes y tiburones martillo en Latinoamérica?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/09/14173251/Proyecto-Manta_Jalisco_210502-14_Negra-herida-interaccio%CC%81n-C.-sexfasciatus-1-768x512.jpg",
    "fecha": "Apr 01, 2023",
    "url": "https://es.mongabay.com/2023/04/video-conservacion-especies-marinas-latinoamerica/"
  },
  {
    "titulo": "#Expediciones científicas | ¿Qué se está haciendo para proteger al oso andino en Perú?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/20170850/oso-andino-ecuador-4-768x512.jpg",
    "fecha": "Mar 31, 2023",
    "url": "https://es.mongabay.com/2023/03/expediciones-cientificas-conservacion-oso-andino-peru/"
  },
  {
    "titulo": "#EnCorto: los armadillos ya tienen un plan para su conservación en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/04/02002508/Dasypus-sabanicola_Lukas-Jaramillo-1-768x512.jpg",
    "fecha": "Mar 28, 2023",
    "url": "https://es.mongabay.com/2023/03/en-corto-conservacion-armadillos-colombia/"
  },
  {
    "titulo": "Expedición virtual | Un viaje por tres asombrosos refugios naturales que protegen aves en peligro de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/11/10064841/01-Perico-de-Orc%E2%80%9As-reserva-Buenaventura-Michael-Moens-768x512.jpg",
    "fecha": "Mar 25, 2023",
    "url": "https://es.mongabay.com/2023/03/expedicion-virtual-refugios-naturales-aves-en-peligro-de-extincion-ecuador/"
  },
  {
    "titulo": "Gripe aviar: estudios advierten la posibilidad de que el virus H5N1 se transmita entre mamíferos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/03/22133959/Lobo-marino-gripe-aviar-Foto-Sernapesca-Chile-768x512.jpeg",
    "fecha": "Mar 22, 2023",
    "url": "https://es.mongabay.com/2023/03/gripe-aviar-estudios-transmision-mamiferos/"
  },
  {
    "titulo": "Mujeres, comunidades indígenas y científicos luchan por salvar a las tortugas del planeta | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/24032838/FOTO_1_Carlos-Salas-768x512.jpg",
    "fecha": "Mar 11, 2023",
    "url": "https://es.mongabay.com/2023/03/como-salvar-a-las-tortugas-del-planeta/"
  },
  {
    "titulo": "Venezuela: la carrera contra el tiempo para salvar al sapo arlequín de Rancho Grande | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/03/10171317/sapo-arlequin-de-Rancho-Grande-768x450.png",
    "fecha": "Mar 10, 2023",
    "url": "https://es.mongabay.com/2023/03/conservacion-sapo-arlequin-de-rancho-grande-venezuela-entrevista/"
  },
  {
    "titulo": "El destello de luces que ayuda a conservar a las tortugas marinas en El Salvador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/03/09173608/tortugas-marinas-el-salvador-768x450.png",
    "fecha": "Mar 09, 2023",
    "url": "https://es.mongabay.com/2023/03/conservacion-tortugas-marinas-el-salvador/"
  },
  {
    "titulo": "Pudu del norte: un venado poco conocido amenazado por la caza deportiva y la destrucción de su hábitat | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/03/03145633/unnamed-768x512.jpg",
    "fecha": "Mar 06, 2023",
    "url": "https://es.mongabay.com/2023/03/amenazas-pudu-del-norte-entrevista-maria-rivera/"
  },
  {
    "titulo": "EN VIDEO | Tres biólogos que luchan por salvar de la extinción a las especies de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/23044014/Daniel-Restrepo-Marin_1-768x513.jpg",
    "fecha": "Mar 04, 2023",
    "url": "https://es.mongabay.com/2023/03/video-biologos-conservacion-de-especies-extincion-latinoamerica/"
  },
  {
    "titulo": "Día Mundial de la Vida Silvestre: tres iniciativas para salvar a la tortuga charapa, al matorralero cabecipálido y al manatí amazónico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/03/01173501/DSC_5127-1-768x511.jpg",
    "fecha": "Mar 03, 2023",
    "url": "https://es.mongabay.com/2023/03/dia-mundial-de-la-vida-silvestre-conservacion-en-latinoamerica/"
  },
  {
    "titulo": "La increíble hazaña de investigar a las aves rapaces más amenazadas del mundo | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/24214613/Black-and-chestnut-Eagle-trapped-in-Argentina-PH-Americo-Vilte-e1677278771881-768x512.jpg",
    "fecha": "Feb 28, 2023",
    "url": "https://es.mongabay.com/2023/02/investigacion-de-aves-rapaces-entrevista-tomas-rivas/"
  },
  {
    "titulo": "Una serpiente que lleva el apellido DiCaprio y cuatro más recién descritas están en riesgo en Ecuador y Panamá",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/24174751/Screen-Shot-2023-02-24-at-12.41.13-PM-768x443.png",
    "fecha": "Feb 28, 2023",
    "url": "https://es.mongabay.com/2023/02/serpientes-en-riesgo-en-ecuador-y-panama/"
  },
  {
    "titulo": "EN VIDEO | ¿Qué especies invasoras amenazan la biodiversidad en Latinoamérica?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/12/18170246/27750349_2624652777675423_1342982160910064733_n.jpg",
    "fecha": "Feb 25, 2023",
    "url": "https://es.mongabay.com/2023/02/video-especies-invasoras-en-latinoamerica/"
  },
  {
    "titulo": "Tortuga laúd: la gigante del Océano Pacífico en riesgo de desaparecer | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/24041446/326547714_718459666357773_359804161575748254_n-768x512.jpeg",
    "fecha": "Feb 24, 2023",
    "url": "https://es.mongabay.com/2023/02/conservacion-tortuga-laud-entrevista-bryan-wallace/"
  },
  {
    "titulo": "Jaguares en riesgo: carreteras y comercio ilegal aumentan sus amenazas en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/23160633/mario-buil-e1677170686495-768x403.jpeg",
    "fecha": "Feb 23, 2023",
    "url": "https://es.mongabay.com/2023/02/jaguares-en-riesgo-carreteras-comercio-ilegal-en-mexico/"
  },
  {
    "titulo": "El sueño nonuya – muinane: el rescate de tortugas en el río Caquetá",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/21035613/DTR6010_Arrau.jpg",
    "fecha": "Feb 22, 2023",
    "url": "https://es.mongabay.com/2023/02/rescate-de-tortugas-en-el-rio-caqueta-colombia/"
  },
  {
    "titulo": "Día para la Protección de los Osos: dos proyectos para salvar al oso andino en Ecuador y Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/20170307/Foto-1_Oso-andino-768x512.jpg",
    "fecha": "Feb 21, 2023",
    "url": "https://es.mongabay.com/2023/02/conservacion-del-oso-andino-en-ecuador-y-argentina/"
  },
  {
    "titulo": "Gripe aviar: por primera vez se ha dado un contagio masivo de aves a mamíferos en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/20115520/Gripe-aviar-5-Sernanp-768x512.jpg",
    "fecha": "Feb 20, 2023",
    "url": "https://es.mongabay.com/2023/02/contagio-masivo-de-aves-a-mamiferos-de-gripe-aviar-en-peru/"
  },
  {
    "titulo": "Científicos identifican 204 especies exóticas e invasoras en el nororiente de la Amazonía ecuatoriana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/16001753/P1760907-768x512.jpg",
    "fecha": "Feb 20, 2023",
    "url": "https://es.mongabay.com/2023/02/cientificos-identifican-especies-invasoras-en-ecuador/"
  },
  {
    "titulo": "Travesías, mapas y mucha ciencia: cuatro especies asombrosas que son noticia en Latinoamérica | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/01/28045622/Sternarchorhynchus-hagedornae-Rob-Wallace-WCS-5621-LIGHT-768x512.jpg",
    "fecha": "Feb 18, 2023",
    "url": "https://es.mongabay.com/2023/02/cuatro-especies-asombrosas-que-son-noticia-en-latinoamerica/"
  },
  {
    "titulo": "Animales intoxicados por el humo y con quemaduras: los otros afectados por los incendios de Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/15203721/IMG-5970-scaled-e1676494852554-768x512.jpg",
    "fecha": "Feb 16, 2023",
    "url": "https://es.mongabay.com/2023/02/animales-intoxicados-por-el-humo-y-con-quemaduras-los-otros-afectados-por-los-incendios-de-chile/"
  },
  {
    "titulo": "#EnCorto: Río Magdalena, el paraíso colombiano en donde se multiplicaron los hipopótamos de Pablo Escobar",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/23161258/DSC00544-768x512.jpg",
    "fecha": "Feb 10, 2023",
    "url": "https://es.mongabay.com/2023/02/en-corto-el-paraiso-colombiano-en-donde-se-multiplicaron-los-hipopotamos-de-pablo-escobar/"
  },
  {
    "titulo": "#ExpediciónVirtual: Río Abiseo, un recorrido por la selva y la impresionante arqueología del Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/09235053/02-PN-4629-768x512.jpg",
    "fecha": "Feb 10, 2023",
    "url": "https://es.mongabay.com/2023/02/expedicion-virtual-rio-abiseo-un-recorrido-por-la-selva-y-la-impresionante-arqueologia-del-peru/"
  },
  {
    "titulo": "#EnCorto: El pez invasor que avanza sin trabas por los ríos amazónicos de Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/02/26152615/paiche-yanayacu-amazonia-pesca-peru-14-768x512.jpg",
    "fecha": "Feb 08, 2023",
    "url": "https://es.mongabay.com/2023/02/en-corto-el-pez-invasor-que-avanza-sin-trabas-por-rios-de-bolivia/"
  },
  {
    "titulo": "Ecuador: científicos hallan nueva especie de rana que evoca al universo fantástico de Tolkien",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/02/07163723/banner-wp-768x450.png",
    "fecha": "Feb 07, 2023",
    "url": "https://es.mongabay.com/2023/02/cientificos-hallan-nueva-especie-de-rana-que-evoca-al-universo-fantastico-de-tolkien-en-ecuador/"
  },
  {
    "titulo": "De Venezuela a Dinamarca: la larga travesía de siete caimanes del Orinoco | Entrevista",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/01/27174047/unnamed-3-768x512.jpg",
    "fecha": "Feb 06, 2023",
    "url": "https://es.mongabay.com/2023/02/de-venezuela-a-dinamarca-la-larga-travesia-de-siete-caimanes-del-orinoco-entrevista/"
  },
  {
    "titulo": "#EnCorto | Tres datos sobre las diminutas arañas que viven en oscuros túneles de Galápagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/19132800/Metagonia_zatoichi-e1660915850218-768x512.jpg",
    "fecha": "Feb 05, 2023",
    "url": "https://es.mongabay.com/2023/02/en-corto-tres-datos-sobre-las-diminutas-aranas-que-viven-en-oscuros-tuneles-de-galapagos/"
  },
  {
    "titulo": "Parque Madidi: científicos identifican más de 300 especies de peces y algunas podrían ser nuevas para la ciencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/01/28045402/Anablepsoides-beniensis-Rob-Wallace-WCS-2090-LIGHT-768x512.jpg",
    "fecha": "Feb 02, 2023",
    "url": "https://es.mongabay.com/2023/02/cientificos-identifican-mas-de-300-especies-de-peces-y-algunas-podrian-ser-nuevas-para-la-ciencia-en-parque-madidi/"
  },
  {
    "titulo": "Comunidades indígenas arhuacas mapean la ruta del jaguar en el Caribe colombiano",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/01/10202013/EK000557-768x512.jpg",
    "fecha": "Feb 01, 2023",
    "url": "https://es.mongabay.com/2023/02/comunidades-indigenas-arhuacas-mapean-la-ruta-del-jaguar-en-colombiano/"
  },
  {
    "titulo": "#EnCorto: Seis especies invasoras que se convirtieron en un peligro en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/10/13175529/DSC_0734-768x472.jpg",
    "fecha": "Jan 25, 2023",
    "url": "https://es.mongabay.com/2023/01/en-corto-especies-invasoras-que-se-convirtieron-en-un-peligro-en-latinoamerica/"
  },
  {
    "titulo": "Expedición virtual | Un recorrido por tres asombrosos parques naturales de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/10/05105112/0189_X4T6929-new-2017-1-768x512.jpg",
    "fecha": "Jan 21, 2023",
    "url": "https://es.mongabay.com/2023/01/expedicion-virtual-un-recorrido-por-tres-asombrosos-parques-naturales-de-latinoamerica/"
  },
  {
    "titulo": "#EnCorto | Visón americano: un carnívoro voraz de piel sedosa que se adueñó de la Patagonia argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/09/09205216/Romina-Mancilla-Visones-768x512.jpg",
    "fecha": "Jan 20, 2023",
    "url": "https://es.mongabay.com/2023/01/en-corto-vison-americano-especie-invasora-en-argentina/"
  },
  {
    "titulo": "Científicos descubren que el plástico es una nueva amenaza para el cóndor andino en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/01/13221112/Condor-San-Fernando6-Victor-Gamarra-Toledo-768x512.jpg",
    "fecha": "Jan 18, 2023",
    "url": "https://es.mongabay.com/2023/01/cientificos-descubren-que-el-plastico-es-una-nueva-amenaza-para-el-condor-andino-en-peru/"
  },
  {
    "titulo": "Tigrillo lanudo: el desafío de conservar a uno de los pequeños félidos que sobreviven en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/01/14210111/LEOPARDUS-TIGRINUS-FUNDACION-JAGUAR-768x511.jpg",
    "fecha": "Jan 17, 2023",
    "url": "https://es.mongabay.com/2023/01/el-desafio-de-conservar-al-tigrillo-lanudo-en-colombia/"
  },
  {
    "titulo": "Las historias ambientales que marcaron el 2022 en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/14003514/fin1-768x512.jpg",
    "fecha": "Jan 02, 2023",
    "url": "https://es.mongabay.com/2023/01/las-historias-ambientales-que-marcaron-el-2022-en-latinoamerica/"
  },
  {
    "titulo": "Cámaras trampa: las imágenes más asombrosas del 2022",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/12/22214222/Captura-de-pantalla-cachorro-1-Fundacion-Rewilding-Argentina-scaled-1-768x512.jpg",
    "fecha": "Dec 29, 2022",
    "url": "https://es.mongabay.com/2022/12/imagenes-de-camaras-tampa-mas-asombrosas-del-2022/"
  },
  {
    "titulo": "Reporteros en acción: coberturas extremas del 2022",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/12/28160337/ana-cristina-768x512.jpeg",
    "fecha": "Dec 28, 2022",
    "url": "https://es.mongabay.com/2022/12/reporteros-en-accion-coberturas-extremas-del-2022/"
  },
  {
    "titulo": "Latinoamérica: animales que fueron protagonistas de grandes historias durante el año 2022",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/12/24183619/19_Autopistas-para-perezosos_Bridge-1-at-Annanci-Village_-The-Sloth-conservation-foundation-2-768x512.jpg",
    "fecha": "Dec 26, 2022",
    "url": "https://es.mongabay.com/2022/12/latinoamerica-animales-que-fueron-protagonistas-de-grandes-historias-durante-el-ano-2022/"
  },
  {
    "titulo": "Expediciones científicas | ¿Cómo salvar la danta de montaña de la extinción?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/23044509/Gustavo-Adolfo-Pisso-Florez_2-768x512.jpg",
    "fecha": "Dec 18, 2022",
    "url": "https://es.mongabay.com/2022/12/expediciones-cientificas-como-salvar-la-danta-de-montana-de-la-extincion/"
  },
  {
    "titulo": "EN VIDEO | Los secretos mejor guardados de tres asombrosas especies de Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/19163903/Captura-de-Pantalla-2022-08-19-a-las-9.38.46-768x513.png",
    "fecha": "Dec 10, 2022",
    "url": "https://es.mongabay.com/2022/12/en-video-los-secretos-mejor-guardados-de-tres-asombrosas-especies-de-bolivia/"
  },
  {
    "titulo": "Operación Jaguar: nueva investigación muestra las redes criminales inmersas en el tráfico de estos félidos en Latinoamérica y Asia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/12/05195716/00-Jaguar_Carlos-Navarro-01-e1670270329367-768x512.jpg",
    "fecha": "Dec 06, 2022",
    "url": "https://es.mongabay.com/2022/12/investigacion-muestra-las-redes-criminales-inmersas-en-el-trafico-de-jaguares-en-latinoamerica/"
  },
  {
    "titulo": "COP15: “Los Estados tienen una nueva oportunidad para demostrar que realmente están decididos a abordar el declive diario de la biodiversidad” | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/03/02221104/felinos-bosques-amazonia-biodiversidad-animales-4-e1670019063787-768x512.jpg",
    "fecha": "Dec 04, 2022",
    "url": "https://es.mongabay.com/2022/12/cuales-son-los-principales-objetivos-en-biodiversidad-de-la-cop15-entrevista/"
  },
  {
    "titulo": "El rugido de Surinam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/11205216/Amalia-resident-female-Brownsberg-Nature-Park-Suriname-%C2%A9NeoWild-768x512.jpg",
    "fecha": "Nov 30, 2022",
    "url": "https://es.mongabay.com/2022/11/trafico-ilegal-de-jaguares-en-surinam/"
  },
  {
    "titulo": "Científicos hacen aliados a pescadores en su misión de conservar al bufeo boliviano",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/11/28205703/CARMELO-CALDERON-FUNDACIO%CC%81N-VIVA-768x512.jpg",
    "fecha": "Nov 29, 2022",
    "url": "https://es.mongabay.com/2022/11/cientificos-hacen-aliados-a-pescadores-en-su-mision-de-conservar-al-bufeo-boliviano/"
  },
  {
    "titulo": "Luis Castillo: el herpetólogo que busca salvar a dos especies de ranas que habitan en la Reserva Nacional de Junín | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/11/20000444/4.-NatGeo-agent-2-768x512.jpg",
    "fecha": "Nov 28, 2022",
    "url": "https://es.mongabay.com/2022/11/luis-castillo-el-herpetologo-que-busca-salvar-a-dos-especies-de-ranas-en-peru-entrevista/"
  },
  {
    "titulo": "Recolectar, sembrar y liberar: mujeres huitoto evitan que tortugas taricaya desaparezcan del río Putumayo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/11/23165808/ci_82829638_Large-768x511.jpg",
    "fecha": "Nov 23, 2022",
    "url": "https://es.mongabay.com/2022/11/mujeres-huitoto-evitan-que-tortugas-taricaya-desaparezcan-del-rio-putumayo-peru/"
  },
  {
    "titulo": "COP 19 CITES: “La mayoría de los tiburones que están sujetos a comercio de aletas a nivel mundial van a estar regulados” | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/11/18145148/AA146cgX.jpeg",
    "fecha": "Nov 20, 2022",
    "url": "https://es.mongabay.com/2022/11/conservacion-de-tiburones-en-la-cop-19-cites-entrevista-adrian-reuter/"
  },
  {
    "titulo": "El comercio de vida silvestre del Amazonas al sudeste asiático va en aumento",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/10/26154217/3.-Jaguar-skin-for-sale-in-Iquitos-Belen-market--768x512.jpg",
    "fecha": "Nov 18, 2022",
    "url": "https://es.mongabay.com/2022/11/comercio-de-vida-silvestre-del-amazonas-al-sudeste-asiatico-va-en-aumento/"
  },
  {
    "titulo": "Ilustración científica: una poderosa herramienta para impulsar el cuidado de la naturaleza | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/11/16010841/Portada-pleudorema2-768x512.png",
    "fecha": "Nov 16, 2022",
    "url": "https://es.mongabay.com/2022/11/ilustracion-cientifica-una-poderosa-herramienta-para-impulsar-el-cuidado-de-la-naturaleza-entrevista/"
  },
  {
    "titulo": "#ExpediciónVirtual: una mirada a la Reserva Buenaventura, el mundo de las aves en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/11/10060109/00-Perico-de-Orc%E2%80%9As-reserva-Buenaventura-James-Muchmore-768x512.jpg",
    "fecha": "Nov 15, 2022",
    "url": "https://es.mongabay.com/2022/11/expedicion-virtual-por-la-reserva-buenaventura-en-ecuador/"
  },
  {
    "titulo": "Chile: nuevo proyecto minero amenaza a la Reserva Nacional Las Chinchillas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/11/14151209/Chinchilla-chilena-imagen-de-Conaf-768x512.jpeg",
    "fecha": "Nov 14, 2022",
    "url": "https://es.mongabay.com/2022/11/nuevo-proyecto-minero-amenaza-la-reserva-nacional-las-chinchillas-chile/"
  },
  {
    "titulo": "EN VIDEO | Los jaguares del Chaco argentino captados en cámara trampa",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/11/09185222/Nuevo-registro-yaguaret%C2%AE-Fundaci%C2%A6n-Rewilding-Argentina-30-768x512.jpg",
    "fecha": "Nov 14, 2022",
    "url": "https://es.mongabay.com/2022/11/en-video-los-jaguares-del-chaco-argentino-captados-en-camara-trampa/"
  },
  {
    "titulo": "Aparición simultánea de dos jaguares machos reaviva la esperanza de recuperar la población de la especie en el Chaco argentino",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/11/09184338/Jaguar_ElChaco-768x512.jpeg",
    "fecha": "Nov 11, 2022",
    "url": "https://es.mongabay.com/2022/11/aparicion-de-dos-jaguares-machos-reaviva-la-esperanza-de-recuperar-la-especie-en-el-chaco-argentino/"
  },
  {
    "titulo": "EN VIDEO | Tres estrategias de conservación que buscan proteger a las especies de tortugas en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/05231338/Pacuare025-768x512.jpg",
    "fecha": "Nov 05, 2022",
    "url": "https://es.mongabay.com/2022/11/en-video-tres-estrategias-de-conservacion-que-buscan-proteger-a-las-especies-de-tortugas-en-latinoamerica/"
  },
  {
    "titulo": "Santuario de ballenas es nuevamente bloqueado en negociaciones internacionales y expertos denuncian sabotaje",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/24035356/Ballenas_10_Foto-con-%C2%A9-768x512.jpg",
    "fecha": "Nov 02, 2022",
    "url": "https://es.mongabay.com/2022/11/santuario-de-ballenas-es-nuevamente-bloqueado-en-negociaciones-internacionales/"
  },
  {
    "titulo": "Mono tocón de Aquino: la nueva especie descubierta en Perú, después de 20 años de estudios | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/11/01203303/Mono-tocon-de-Aquino-768x450.png",
    "fecha": "Nov 01, 2022",
    "url": "https://es.mongabay.com/2022/11/mono-tocon-de-aquino-es-la-nueva-especie-descubierta-en-peru-entrevista/"
  },
  {
    "titulo": "#ExpediciónVirtual: visita al Parque Nacional Yaguas, el laboratorio natural del Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/10/21025531/IMG_1886-768x512.jpg",
    "fecha": "Oct 30, 2022",
    "url": "https://es.mongabay.com/2022/10/expedicion-virtual-por-el-parque-nacional-yaguas-en-peru-conservacion/"
  },
  {
    "titulo": "Perú implementará sistema para vigilar la salud animal en Áreas Naturales Protegidas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/10/25131548/Guardaparques-Sernanp-2-768x512.jpeg",
    "fecha": "Oct 28, 2022",
    "url": "https://es.mongabay.com/2022/10/peru-implementara-sistema-para-vigilar-la-salud-animal-en-areas-naturales-protegidas/"
  },
  {
    "titulo": "«En donde hay manatíes hay más peces y se conserva el agua»: Dalila Caicedo | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/10/13152847/Trichechus-inunguis_Fundacion-Omacha_Brayan-Cruz-768x512.jpg",
    "fecha": "Oct 27, 2022",
    "url": "https://es.mongabay.com/2022/10/conservacion-de-manaties-en-colombia-entrevista-dalila-caicedo/"
  },
  {
    "titulo": "La lucha para salvar al cauquén colorado, un ave en peligro crítico de extinción en Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/10/24181027/Cauquenes_2-768x512.jpg",
    "fecha": "Oct 26, 2022",
    "url": "https://es.mongabay.com/2022/10/la-lucha-para-salvar-al-cauquen-colorado-de-la-extincion-en-argentina/"
  },
  {
    "titulo": "¿Qué tienen en común una nueva especie de rana y la serie animada Family Guy?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/10/07140257/DSC_0047-768x512.jpg",
    "fecha": "Oct 25, 2022",
    "url": "https://es.mongabay.com/2022/10/que-tienen-en-comun-una-nueva-especie-de-rana-de-ecuador-y-la-serie-family-guy/"
  },
  {
    "titulo": "Informe Planeta Vivo: 94 % de las poblaciones de las especies están en declive en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/10/24181730/Copy-of-Page-43-Sharks-and-rays-Original_WW235082-768x512.jpg",
    "fecha": "Oct 25, 2022",
    "url": "https://es.mongabay.com/2022/10/informe-planeta-vivo-especies-estan-en-declive-en-latinoamerica/"
  },
  {
    "titulo": "Paraba barba azul: crece la esperanza para salvar a esta especie endémica de Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/10/08144609/Paraba-barba-azul-Reserva-Laney-Rickman-Asociacio%CC%81n-Armonia-17-768x512.jpg",
    "fecha": "Oct 14, 2022",
    "url": "https://es.mongabay.com/2022/10/conservacion-de-la-paraba-barba-azul-en-bolivia/"
  },
  {
    "titulo": "#ExpediciónVirtual: Los Petreles, refugio clave para las aves y orquídeas de Galápagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/10/12002111/Petrel-de-Galapagos-Rashid-Cruz-768x512.jpg",
    "fecha": "Oct 14, 2022",
    "url": "https://es.mongabay.com/2022/10/expedicion-virtual-por-los-petreles-en-galapagos-conservacion/"
  },
  {
    "titulo": "Chile: sequía y expansión urbana y agrícola amenazan al Parque Nacional La Campana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/10/10144009/DSC01886-768x512.jpg",
    "fecha": "Oct 10, 2022",
    "url": "https://es.mongabay.com/2022/10/sequia-y-expansion-urbana-y-agricola-amenazan-al-parque-la-campana-en-chile/"
  },
  {
    "titulo": "EN VIDEO | Tres estrategias que dan esperanza a la conservación de primates, del oso andino y la danta de montaña en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/23044509/Gustavo-Adolfo-Pisso-Florez_2-768x512.jpg",
    "fecha": "Oct 08, 2022",
    "url": "https://es.mongabay.com/2022/10/en-video-tres-estrategias-que-dan-esperanza-a-la-conservacion-de-primates-del-oso-andino-y-la-danta-de-montana-en-colombia/"
  },
  {
    "titulo": "Río Hondo: el afluente que urge proteger para conservar al manatí antillano en México y Belice",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/10/05164457/Florida-768x512.jpg",
    "fecha": "Oct 07, 2022",
    "url": "https://es.mongabay.com/2022/10/rio-hondo-conservacion-de-manati-antillano-en-mexico-y-belice/"
  },
  {
    "titulo": "“Las carreteras son cazadoras que operan día y noche”: Daniela Araya Gamboa | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/10/05234709/04-Panthera-onca-crossing-2015-Costa-Rica-Credits-Helder-Casanova-ICE--768x512.jpg",
    "fecha": "Oct 06, 2022",
    "url": "https://es.mongabay.com/2022/10/como-impactan-las-carreteras-a-felinos-silvestres-de-costa-rica-daniela-araya-gamboa-entrevista/"
  },
  {
    "titulo": "Perú: nuevo libro documenta más de 700 especies de orquídeas en la Reserva Oxapampa",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/09/29060823/07-Ida-locusta-768x512.jpg",
    "fecha": "Sep 30, 2022",
    "url": "https://es.mongabay.com/2022/09/libro-documenta-mas-de-700-especies-de-orquideas-en-reserva-oxapampa-en-peru/"
  },
  {
    "titulo": "México: ciencia y participación social para proteger a las gigantes de Bahía de Banderas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/09/14170346/Proyecto-Manta_Jalisco_9-768x512.jpg",
    "fecha": "Sep 28, 2022",
    "url": "https://es.mongabay.com/2022/09/ciencia-y-participacion-social-para-proteger-las-mantas-gigantes-de-bahia-de-banderas-en-mexico/"
  },
  {
    "titulo": "EN VIDEO | El extraordinario trabajo de tres biólogas premiadas por proteger a los animales en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/29173932/bolivia-oso-andino-4.jpg",
    "fecha": "Sep 24, 2022",
    "url": "https://es.mongabay.com/2022/09/en-video-el-extraordinario-trabajo-de-tres-biologas-premiadas-por-proteger-a-los-animales-en-latinoamerica/"
  },
  {
    "titulo": "Bolivia: científicos exploran y descubren algunos secretos de los Llanos de Moxos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/31021131/21Myrmecophaga-tridactyla-Rob-Wallace-WCS-1431Iruyanez-Guachuna-y-Rogaguado-768x512.jpg",
    "fecha": "Sep 21, 2022",
    "url": "https://es.mongabay.com/2022/09/cientificos-descubren-nuevas-especies-en-los-llanos-de-moxos-en-bolivia/"
  },
  {
    "titulo": "#ExpediciónVirtual: Parque Nacional Tingo María, un viaje a la casa de la Bella Durmiente",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/09/19015121/CQS1427-768x512.jpg",
    "fecha": "Sep 19, 2022",
    "url": "https://es.mongabay.com/2022/09/expedicion-virtual-por-el-parque-nacional-tingo-maria-en-peru-conservacion/"
  },
  {
    "titulo": "La tilapia: una especie invasora que se extiende en Ecuador sin controles del Estado",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/09/09193659/5.-El-cultivo-de-tilapia-crece-en-Santo-Domingo-768x512.jpg",
    "fecha": "Sep 12, 2022",
    "url": "https://es.mongabay.com/2022/09/la-tilapia-es-una-especie-invasora-en-ecuador/"
  },
  {
    "titulo": "Río Magdalena: el paraíso en donde se multiplicaron los cuatro hipopótamos de Pablo Escobar en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/10/13175531/DSC_0765-768x512.jpg",
    "fecha": "Sep 12, 2022",
    "url": "https://es.mongabay.com/2022/09/hipopotamo-es-una-especie-invasora-en-colombia/"
  },
  {
    "titulo": "El paiche: un pez invasor que avanza sin trabas por los ríos amazónicos de Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/09/09211050/paiche3-Sernap-768x512.jpg",
    "fecha": "Sep 12, 2022",
    "url": "https://es.mongabay.com/2022/09/paiche-es-un-pez-invasor-en-bolivia/"
  },
  {
    "titulo": "Visón americano: un carnívoro voraz de piel sedosa que se hizo dueño de la Patagonia argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/09/09205158/vison-Laura-Fasola-768x511.jpg",
    "fecha": "Sep 12, 2022",
    "url": "https://es.mongabay.com/2022/09/vison-americano-es-una-especie-invasora-en-argentina/"
  },
  {
    "titulo": "Especies invasoras: las enemigas silenciosas que son ya un peligro en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/23161258/DSC00544-768x512.jpg",
    "fecha": "Sep 12, 2022",
    "url": "https://es.mongabay.com/2022/09/especies-invasoras-son-un-peligro-en-latinoamerica/"
  },
  {
    "titulo": "#Expedición virtual: Tapichalaca, el hogar de un ave que revolucionó la conservación en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/09/07191126/00-Jocotoco-Antpitta-Alex-Wiles-768x513.jpg",
    "fecha": "Sep 09, 2022",
    "url": "https://es.mongabay.com/2022/09/expedicion-virtual-por-la-reserva-tapichalaca-en-ecuador-conservacion/"
  },
  {
    "titulo": "“Si queremos conservar al puma también debemos cuidar a sus presas principales”: Héctor Luque | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/09/06094242/%C2%A9-PROCARNI%CC%81VOROS-Puma-en-la-RNSAB-Ca%CC%81mara-trampa-768x512.jpg",
    "fecha": "Sep 09, 2022",
    "url": "https://es.mongabay.com/2022/09/conservacion-del-puma-hector-luque-entrevista/"
  },
  {
    "titulo": "Un resguardo indígena en Colombia protege al caimán negro, especie seriamente amenazada en la Amazonía",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/09/06204808/Caima%CC%81n-negro-3-Foto-Jack-Herna%CC%81ndez-768x512.jpg",
    "fecha": "Sep 07, 2022",
    "url": "https://es.mongabay.com/2022/09/resguardo-indigena-en-colombia-protege-al-caiman-negro-conservacion/"
  },
  {
    "titulo": "Día mundial de los primates: el reto de salvar a tres especies amenazadas en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/31031010/C.-niveivetris-subadulto-P.-Ye%CC%81pez-768x512.jpg",
    "fecha": "Aug 31, 2022",
    "url": "https://es.mongabay.com/2022/08/dia-mundial-de-los-primates-el-reto-de-salvar-a-tres-especies-en-latinoamerica/"
  },
  {
    "titulo": "#EnCorto: cuatro datos sobre la dramática situación de las ranas arlequín y el esfuerzo por salvarlas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/10/06025206/A_spumarius_Ecuador_JaimeCulebras_watermark-768x512.jpg",
    "fecha": "Aug 29, 2022",
    "url": "https://es.mongabay.com/2022/08/en-corto-cuatro-datos-sobre-las-amenazas-que-enfrentan-las-ranas-arlequin-conservacion/"
  },
  {
    "titulo": "#ExpediciónVirtual: un viaje a Huascarán, el corazón de los Andes en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/19163037/Wilfredo-Espinoza-9-768x512.jpg",
    "fecha": "Aug 26, 2022",
    "url": "https://es.mongabay.com/2022/08/expedicion-virtual-en-el-parque-nacional-huascaran-en-peru-conservacion/"
  },
  {
    "titulo": "#EnCorto: Tres datos sobre los albatros que adoptaron polluelos de otra especie para salvarlos en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/29200325/D5S_5241-768x512.jpg",
    "fecha": "Aug 25, 2022",
    "url": "https://es.mongabay.com/2022/08/en-corto-conservacion-de-albatros-de-patas-negras-en-mexico/"
  },
  {
    "titulo": "Bolivia: estudio sugiere que el Tipnis alberga la mayor población del pilisto, un ave endémica en peligro de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/24005650/Imagen-de-ca%CC%81mara-trampa-del-pilisto-Pauxi-unicornis-en-el-Tipnis-Foto-Asociacio%CC%81n-Armoni%CC%81a-3-768x512.jpg",
    "fecha": "Aug 24, 2022",
    "url": "https://es.mongabay.com/2022/08/estudio-sobre-el-pilisto-un-ave-endemica-en-peligro-de-extincion-en-bolivia/"
  },
  {
    "titulo": "Cámaras trampa: «Todo el trabajo está enfocado en democratizar la información, bajarla de la nube técnica y que la gente pueda mirar sus datos» | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/19211620/Chimpanzee-Nouabale-Ndoki-Republic-of-Congo-768x512.jpg",
    "fecha": "Aug 23, 2022",
    "url": "https://es.mongabay.com/2022/08/camaras-trampa-conservacion-jorge-ahumada-entrevista/"
  },
  {
    "titulo": "Las habitantes de cuevas: tres especies de arañas son descubiertas en islas Galápagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/19132800/Metagonia_zatoichi-e1660915850218-768x512.jpg",
    "fecha": "Aug 23, 2022",
    "url": "https://es.mongabay.com/2022/08/tres-especies-de-aranas-son-descubiertas-en-islas-galapagos-ecuador/"
  },
  {
    "titulo": "EN VIDEO | Nuevas especies marinas, anfibios y reptiles fueron descubiertas en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/10/13104837/Serpiente-en-Puno-Alessandro-Catenazzi-5-768x511.jpg",
    "fecha": "Aug 20, 2022",
    "url": "https://es.mongabay.com/2022/08/en-video-nuevas-especies-marinas-anfibios-y-reptiles-fueron-descubiertas-en-latinoamerica/"
  },
  {
    "titulo": "“El cóndor es un mensajero que nos habla del estado de nuestros hábitats en los Andes”: María Alejandra Parrado | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/11/09194932/plan_conservacion_mongabay2-e1660756969530-768x512.jpg",
    "fecha": "Aug 18, 2022",
    "url": "https://es.mongabay.com/2022/08/conservacion-del-condor-andino-en-colombia-maria-alejandra-parrado-entrevista/"
  },
  {
    "titulo": "#EnCorto: tres datos sobre los guardianes del oso andino en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/19173802/Oso-en-La-Cruz-Narin%CC%83o-Credito-Juan-Camilo-Rubiano-768x512.jpg",
    "fecha": "Aug 15, 2022",
    "url": "https://es.mongabay.com/2022/08/en-corto-conservacion-del-oso-andino-en-colombia/"
  },
  {
    "titulo": "Codo del Pozuzo: la nueva área de conservación regional que protegerá fuentes hídricas del Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/13172255/3-768x512.jpg",
    "fecha": "Aug 15, 2022",
    "url": "https://es.mongabay.com/2022/08/codo-del-pozuzo-protegera-fuentes-hidricas-del-peru-conservacion/"
  },
  {
    "titulo": "Nace Tic Toc – Golfo Corcovado, el parque marino que protege a las ballenas azules en Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/08155041/Ballena-Azul-Nico-768x512.jpg",
    "fecha": "Aug 10, 2022",
    "url": "https://es.mongabay.com/2022/08/el-parque-marino-tic-toc-golfo-corcovado-protege-a-ballenas-azules-en-chile/"
  },
  {
    "titulo": "#EnCorto: Biólogos y comunidades salvan a los felinos que aún quedan en Guerrero, México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/03/17163400/2R-M02-1-768x512.jpg",
    "fecha": "Aug 08, 2022",
    "url": "https://es.mongabay.com/2022/08/biologos-y-comunidades-salvan-a-los-felinos-de-guerrero-mexico/"
  },
  {
    "titulo": "EN VIDEO | Muerte de especies prende las alarmas en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/09/14153547/Beached-Whale-Cta-Buena2-768x513.jpg",
    "fecha": "Aug 06, 2022",
    "url": "https://es.mongabay.com/2022/08/en-video-muerte-de-especies-prende-las-alarmas-en-latinoamerica/"
  },
  {
    "titulo": "#Expedición virtual: un viaje al Parque Nacional Podocarpus, un inmenso jardín botánico en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/02171140/00-tucan-andino-768x512.jpg",
    "fecha": "Aug 03, 2022",
    "url": "https://es.mongabay.com/2022/08/expedicion-virtual-por-el-parque-nacional-podocarpus-en-ecuador/"
  },
  {
    "titulo": "#EnCorto: más de 20 mil registros de animales con cámaras trampa en la Orinoquía y el Magdalena Medio, en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/09/24235623/Copia-de-P_concolor_04-768x512.jpeg",
    "fecha": "Jul 28, 2022",
    "url": "https://es.mongabay.com/2022/07/mas-de-20-mil-registros-de-animales-con-camaras-trampa-en-colombia/"
  },
  {
    "titulo": "#EnCorto: los científicos que salvaron de la extinción a la ranita del Loa en Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/04233331/T.dankoi-autor-Pablo-Fibla-768x512.jpg",
    "fecha": "Jul 27, 2022",
    "url": "https://es.mongabay.com/2022/07/cientificos-que-salvaron-de-la-extincion-a-la-ranita-del-loa-en-chile/"
  },
  {
    "titulo": "Cámaras trampa revelan la presencia de un roedor considerado extinto en el Santuario Histórico Machu Picchu",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/07/22173121/Ca%CC%81maras-trampa-Machu-Picchu-3-768x512.jpg",
    "fecha": "Jul 26, 2022",
    "url": "https://es.mongabay.com/2022/07/camaras-trampa-revelan-la-presencia-de-un-roedor-considerado-extinto-en-machu-picchu-peru/"
  },
  {
    "titulo": "Los grandes retos de la reintroducción de monos churucos en Colombia | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/07/25112957/IMG_3792-768x512.jpg",
    "fecha": "Jul 25, 2022",
    "url": "https://es.mongabay.com/2022/07/los-grandes-retos-de-la-reintroduccion-de-monos-churucos-en-colombia-entrevista/"
  },
  {
    "titulo": "Expedición virtual: Ansenuza, el paraíso de las aves en Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/07/20043333/AUSTRALES-7-1200x800-1-e1658291692247-768x510.jpeg",
    "fecha": "Jul 20, 2022",
    "url": "https://es.mongabay.com/2022/07/expedicion-virtual-ansenuza-el-paraiso-de-las-aves-en-argentina/"
  },
  {
    "titulo": "#EnCorto: cuatro datos sobre la preocupante situación de los peces de agua dulce en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/07191908/fish_market_oriente_Ricardo_1000-768x512.jpg",
    "fecha": "Jul 20, 2022",
    "url": "https://es.mongabay.com/2022/07/cuatro-datos-sobre-la-preocupante-situacion-de-los-peces-de-agua-dulce-en-ecuador/"
  },
  {
    "titulo": "Día mundial de las serpientes: urge más investigación para protegerlas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/07/15033909/oxybelis-fulgidus-2-768x512.jpg",
    "fecha": "Jul 16, 2022",
    "url": "https://es.mongabay.com/2022/07/dia-mundial-de-las-serpientes-urge-mas-investigacion-para-protegerlas/"
  },
  {
    "titulo": "EN VIDEO | La carrera por salvar a los delfines de río en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/02/25034154/biodiversidad-delfines-rios-amazonia-extincion-conservacion-2-768x512.jpg",
    "fecha": "Jul 16, 2022",
    "url": "https://es.mongabay.com/2022/07/en-video-la-carrera-por-salvar-a-los-delfines-de-rio-en-latinoamerica/"
  },
  {
    "titulo": "#EnCorto: Pescadores mexicanos ayudan a la ciencia a descifrar los misterios del tiburón ballena",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/10/10000415/JRG7286HR-768x513.jpg",
    "fecha": "Jul 15, 2022",
    "url": "https://es.mongabay.com/2022/07/pescadores-mexicanos-ayudan-a-la-ciencia-a-descifrar-los-misterios-del-tiburon-ballena/"
  },
  {
    "titulo": "Expedición virtual: un recorrido por el Parque Nacional Natural Amacayacu en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/07/13194028/00-Buri-buri-musmuqui-aotus-sp-PAOLAGUALTEROS-768x512.jpg",
    "fecha": "Jul 14, 2022",
    "url": "https://es.mongabay.com/2022/07/expedicion-virtual-por-el-parque-nacional-natural-amacayacu-en-colombia/"
  },
  {
    "titulo": "#EnCorto: tres claves sobre las nuevas especies descubiertas en la Cordillera de Colán",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/15141513/Cordillera-de-Cola%CC%81n-Pablo-Venegas-10-768x512.jpg",
    "fecha": "Jul 11, 2022",
    "url": "https://es.mongabay.com/2022/07/nuevas-especies-descubiertas-en-la-cordillera-de-colan-en-peru/"
  },
  {
    "titulo": "#ExpedicionesCientíficas | ¿Por qué es importante conservar al zopilote rey en México?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/12/19174956/6-768x512.jpg",
    "fecha": "Jul 09, 2022",
    "url": "https://es.mongabay.com/2022/07/expedicionescientificas-por-que-es-importante-conservar-al-zopilote-rey-en-mexico/"
  },
  {
    "titulo": "¿Por qué las aves tropicales son más coloridas? Un estudio inédito sugiere algunas respuestas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/06/01141539/3-Painted_Bunting_Passerina_ciris_24160640865-e1652736613651-768x512.jpg",
    "fecha": "Jul 08, 2022",
    "url": "https://es.mongabay.com/2022/07/por-que-las-aves-tropicales-son-mas-coloridas/"
  },
  {
    "titulo": "#ExpedicionesCientíficas | Un corredor forestal para el jaguar en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/03/17163400/2R-M02-1-768x512.jpg",
    "fecha": "Jul 08, 2022",
    "url": "https://es.mongabay.com/2022/07/expediciones-cientificas-un-corredor-forestal-para-el-jaguar-en-mexico/"
  },
  {
    "titulo": "“Los desiertos no son estériles”: registran más de 80 especies vegetales nuevas para Ica, Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/07/06224002/00-PORTADA-IMG_9213-768x512.jpg",
    "fecha": "Jul 07, 2022",
    "url": "https://es.mongabay.com/2022/07/registran-mas-de-80-especies-vegetales-nuevas-en-desierto-para-ica-peru/"
  },
  {
    "titulo": "La laguna salobre más grande de sudamérica se convierte en el nuevo parque nacional de Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/07/01183901/AUSTRALES-7-768x512.jpg",
    "fecha": "Jul 04, 2022",
    "url": "https://es.mongabay.com/2022/07/nuevo-parque-nacional-de-ansenuza-en-argentina-conservacion/"
  },
  {
    "titulo": "EN VIDEO | Tres estrategias de conservación que protegen al mono araña en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/14015914/Mono_Arana_jagsphoto-768x512.jpg",
    "fecha": "Jul 02, 2022",
    "url": "https://es.mongabay.com/2022/07/en-video-tres-estrategias-de-conservacion-que-protegen-al-mono-arana/"
  },
  {
    "titulo": "#EnCorto: tres claves detrás del avistamiento, después de cien años, de una nutria gigante en el Chaco argentino",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/03033308/Impenetrable-Nutria-Gigante-Gerardo-Ceron-Rewilding-Argentina-2-768x512.jpg",
    "fecha": "Jun 26, 2022",
    "url": "https://es.mongabay.com/2022/06/tres-claves-detras-del-avistamiento-de-una-nutria-gigante-en-argentina/"
  },
  {
    "titulo": "EN VIDEO | Tres asombrosas estrategias de conservación que buscan proteger a los anfibios de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/27020628/Andinobates-bombetes-768x512.jpg",
    "fecha": "Jun 25, 2022",
    "url": "https://es.mongabay.com/2022/06/estrategias-de-conservacion-que-buscan-proteger-a-los-anfibios-en-video/"
  },
  {
    "titulo": "Sierra de Quila: jaguares recolonizan área forestal del occidente de México | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/06/16020549/jaguar-sierra-quila-cortesia-Efren-Moreno-Arzate-e1655347840349.jpg",
    "fecha": "Jun 20, 2022",
    "url": "https://es.mongabay.com/2022/06/jaguares-recolonizan-area-forestal-de-mexico-en-video/"
  },
  {
    "titulo": "#EnCorto: Tres claves para entender el riesgo que enfrenta el tití cabeciblanco en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/02/27182230/colombia-primates-biodiversidad-fauna-animales-4-683x512.jpg",
    "fecha": "Jun 20, 2022",
    "url": "https://es.mongabay.com/2022/06/tres-claves-sobre-el-riesgo-que-enfrenta-el-titi-cabeciblanco-en-colombia/"
  },
  {
    "titulo": "Los Becerra, expescadores que hoy monitorean y rescatan tortugas marinas en el noroeste de México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/06/13191615/Foto-Becerras-scaled-e1655332070420-768x512.jpeg",
    "fecha": "Jun 15, 2022",
    "url": "https://es.mongabay.com/2022/06/expescadores-monitorean-y-rescatan-tortugas-marinas-en-mexico/"
  },
  {
    "titulo": "Perú: la historia de cómo científicos y pescadores se unieron para salvar a las mantarrayas gigantes",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/06/15131205/manta-june-2019-JMccarty-768x512.jpg",
    "fecha": "Jun 15, 2022",
    "url": "https://es.mongabay.com/2022/06/como-cientificos-y-pescadores-salvan-a-las-mantarrayas-gigantes-en-peru/"
  },
  {
    "titulo": "#ExpedicionesCientíficas | Nuevos hallazgos para la conservación de bosques de oyameles y mariposas monarcas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/09/01140846/%C2%A9-Alianza-WWF-Telcel10608-768x512.jpg",
    "fecha": "Jun 11, 2022",
    "url": "https://es.mongabay.com/2022/06/expediciones-cientificas-conservacion-de-bosques-de-oyameles-y-mariposas-monarcas/"
  },
  {
    "titulo": "Las majestuosas tortugas yabotí vuelven a recorrer los bosques del Chaco argentino",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/06/07214305/La-tortuga-yaboti%CC%81-es-la-especie-de-tortuga-terrestre-ma%CC%81s-grande-de-Argentina-%C2%A9Sebastia%CC%81n-Navajas-Rewilding-Argentina-768x512.jpg",
    "fecha": "Jun 09, 2022",
    "url": "https://es.mongabay.com/2022/06/conservacion-de-tortugas-yaboti-en-argentina/"
  },
  {
    "titulo": "Colombia: las expediciones a los montes submarinos de Malpelo para proteger a los tiburones martillo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/06/03172957/3-1-768x512.jpeg",
    "fecha": "Jun 08, 2022",
    "url": "https://es.mongabay.com/2022/06/expediciones-a-los-montes-submarinos-de-malpelo-para-proteger-a-los-tiburones-martillo-en-colombia/"
  },
  {
    "titulo": "#EnCorto: Tres claves para entender cómo las tortugas gigantes hicieron brillar el café en Galápagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/10/27152028/37207560725_29133c97f2_o-768x512.jpg",
    "fecha": "Jun 03, 2022",
    "url": "https://es.mongabay.com/2022/06/como-las-tortugas-gigantes-hicieron-brillar-el-cafe-en-galapagos/"
  },
  {
    "titulo": "México: comunidades pesqueras del Sistema Lagunar de Alvarado logran que vuelva el manatí",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/10/21014319/3ManatiAntillano-TrichechusManatus-WWF-1-768x512.jpg",
    "fecha": "Jun 01, 2022",
    "url": "https://es.mongabay.com/2022/06/comunidades-pesqueras-conservan-al-manati-en-mexico/"
  },
  {
    "titulo": "#EnCorto: Tres claves para entender por qué las abejas están en peligro en Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/18203341/centris-nigerrima-768x512.jpg",
    "fecha": "May 31, 2022",
    "url": "https://es.mongabay.com/2022/05/por-que-las-abejas-estan-en-peligro-en-chile/"
  },
  {
    "titulo": "México: investigación con cámaras trampa revela el estado de la población de ocelotes en Tamaulipas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/05/27202417/Ocelote-4-Foto-Predator-Conservation-CKWRI-1-768x512.jpg",
    "fecha": "May 31, 2022",
    "url": "https://es.mongabay.com/2022/05/camaras-trampa-revela-el-estado-de-los-ocelotes-en-mexico/"
  },
  {
    "titulo": "Guardaparques del Yasuní: actores clave para estudiar el futuro de las mariposas en el mundo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/05/24180144/Image_4-768x512.jpg",
    "fecha": "May 31, 2022",
    "url": "https://es.mongabay.com/2022/05/guardaparques-de-ecuador-son-clave-para-estudiar-las-mariposas/"
  },
  {
    "titulo": "Argentina: la odisea de criar a las ranas marsupiales para que no vuelvan a desaparecer",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/05/27231941/Ranas-Banderita-juveniles-reserva-Horco-Molle-768x512.jpg",
    "fecha": "May 30, 2022",
    "url": "https://es.mongabay.com/2022/05/conservacion-de-ranas-marsupiales-en-argentina/"
  },
  {
    "titulo": "¿Es posible salvar la flora y fauna de Latinoamérica? 262 proyectos que lo están logrando",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/08151120/WFN_Sarasola_Chacoeagle_Argentina-768x512.jpg",
    "fecha": "May 30, 2022",
    "url": "https://es.mongabay.com/2022/05/estrategias-de-conservacion-que-protegen-la-flora-y-fauna-de-latinoamerica/"
  },
  {
    "titulo": "EN VIDEO | Tres viajes submarinos que sorprenden a la ciencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/04/01201308/Antares-y-su-cri%CC%81a-2021-Paula-Fairferman-ICB-1-768x512.jpg",
    "fecha": "May 28, 2022",
    "url": "https://es.mongabay.com/2022/05/en-video-tres-viajes-submarinos-que-sorprenden-a-la-ciencia/"
  },
  {
    "titulo": "Mariposa monarca en México: pequeños avances son aún insuficientes para asegurar su conservación",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/05/25212815/Monarca_3-768x512.jpg",
    "fecha": "May 27, 2022",
    "url": "https://es.mongabay.com/2022/05/como-asegurar-la-conservacion-de-la-mariposa-monarca-en-mexico/"
  },
  {
    "titulo": "Día mundial de la nutria: la lucha incansable para salvar a los chungungos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/05/23160812/Changuita-bebiendo-leche-autor-Javier-Trivelli-768x512.jpg",
    "fecha": "May 25, 2022",
    "url": "https://es.mongabay.com/2022/05/dia-mundial-de-la-nutria-conservacion-de-chungungos/"
  },
  {
    "titulo": "#EnCorto: Tres claves para entender por qué El Gran Chaco Sudamericano muestra un drástico declive en su biodiversidad",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/08/25010001/jaguares-bolivia-6-1-768x512.jpg",
    "fecha": "May 23, 2022",
    "url": "https://es.mongabay.com/2022/05/por-que-el-chaco-sudamericano-muestra-un-declive-en-su-biodiversidad/"
  },
  {
    "titulo": "Día mundial de las especies amenazadas: evitando la extinción de cuatro animales en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/05/19231526/IMG_6650-copy-768x512.jpg",
    "fecha": "May 20, 2022",
    "url": "https://es.mongabay.com/2022/05/dia-mundial-de-las-especies-amenazadas-como-evitar-la-extincion-en-latinoamerica/"
  },
  {
    "titulo": "¿Cómo salvar los océanos?: 76 proyectos que lo están logrando",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/04215058/ESM5166-Eduardo-Sorensen-Rapa-nui-768x513.jpg",
    "fecha": "May 16, 2022",
    "url": "https://es.mongabay.com/2022/05/como-salvar-los-oceanos/"
  },
  {
    "titulo": "EN VIDEO | ¿Por qué los murciélagos son importantes para la biodiversidad y los ecosistemas?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/04/12161627/Foto-5-768x512.jpg",
    "fecha": "May 14, 2022",
    "url": "https://es.mongabay.com/2022/05/en-video-por-que-los-murcielagos-son-importantes-para-la-biodiversidad-y-ecosistemas/"
  },
  {
    "titulo": "‘Bativillas’: científicos construyen casetas para alojar murciélagos y disminuir con ello el impacto de los pesticidas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/05/06144641/Colonia-de-Myotis-chiloensis.-768x512.jpg",
    "fecha": "May 10, 2022",
    "url": "https://es.mongabay.com/2022/05/construyen-casetas-para-proteger-murcielagos-y-disminuir-impacto-de-pesticidas/"
  },
  {
    "titulo": "EN VIDEO | Misterios de la biodiversidad de Chile y Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/03/22223441/Ballena-Franca-Austral-768x512.jpg",
    "fecha": "May 07, 2022",
    "url": "https://es.mongabay.com/2022/05/misterios-de-la-biodiversidad-de-chile-y-peru-en-video/"
  },
  {
    "titulo": "Flor del bosque: la defensa ciudadana de una zona forestal bajo el acecho de inmobiliarias",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/04/28183149/Flor-del-Bosque_3-768x512.jpg",
    "fecha": "May 03, 2022",
    "url": "https://es.mongabay.com/2022/05/flor-del-bosque-bajo-amenaza-de-inmobiliarias-en-mexico/"
  },
  {
    "titulo": "EN VIDEO | Escenas sorprendentes de la naturaleza registradas en cámara trampa",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/03/14154800/spider-vs-opossum-768x512.jpg",
    "fecha": "Apr 29, 2022",
    "url": "https://es.mongabay.com/2022/04/en-video-escenas-sorprendentes-de-la-naturaleza-registradas-en-camara-trampa/"
  },
  {
    "titulo": "Científicos buscan descifrar la vida del pejegallo, el extraño pez con boca de trompeta y cola de rata",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/04/14143456/Cri%CC%81a-de-pejegallo-autor-Barinia-Montoya.-scaled-e1649947464593-768x512.jpg",
    "fecha": "Apr 25, 2022",
    "url": "https://es.mongabay.com/2022/04/cientificos-buscan-decifrar-la-vida-del-pejegallo/"
  },
  {
    "titulo": "EN VIDEO | Tres estrategias para proteger a los tiburones en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/15162905/Tiburo%CC%81n-Escalandru%CC%81n_Julie-Larsen-Maher_WCS-768x512.jpg",
    "fecha": "Apr 23, 2022",
    "url": "https://es.mongabay.com/2022/04/video-tres-estrategias-para-proteger-a-los-tiburones-en-latinoamerica/"
  },
  {
    "titulo": "El camino para salvar especies: cinco estrategias de conservación para animales en riesgo de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/06/30161121/11059351_1200475503298456_3860861026664317626_n-768x512.jpg",
    "fecha": "Apr 16, 2022",
    "url": "https://es.mongabay.com/2022/04/cinco-estrategias-de-conservacion-para-animales-en-riesgo-de-extincion/"
  },
  {
    "titulo": "La hazaña de rescatar a 600 tortugas marinas en la costa de Uruguay",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/04/05213029/P1690693-768x512.jpg",
    "fecha": "Apr 11, 2022",
    "url": "https://es.mongabay.com/2022/04/la-hazana-de-rescatar-a-600-tortugas-marinas-en-uruguay/"
  },
  {
    "titulo": "En video | Cuatro asombrosas historias de animales bebés que dan esperanza a la recuperación de las especies",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/07202410/baby-pangolin-1200x800-1-768x512.jpg",
    "fecha": "Apr 09, 2022",
    "url": "https://es.mongabay.com/2022/04/video-asombrosas-historias-de-animales-bebes/"
  },
  {
    "titulo": "Ocelotes en Costa Rica: ¿Por qué hacer estudios genéticos en felinos silvestres es importante para su conservación? | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/04/04124002/L.pardalis_SBBD2013-2014_11-768x512.jpg",
    "fecha": "Apr 06, 2022",
    "url": "https://es.mongabay.com/2022/04/estudios-geneticos-ocelotes-en-costa-rica-conservacion/"
  },
  {
    "titulo": "Colombia: cómo los armadillos pasaron del anonimato a tener un plan para su conservación en los Llanos Orientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/04/02002508/Dasypus-sabanicola_Lukas-Jaramillo-1-768x512.jpg",
    "fecha": "Apr 05, 2022",
    "url": "https://es.mongabay.com/2022/04/colombia-plan-para-la-conservacion-de-armadillos/"
  },
  {
    "titulo": "Atrevida: la ballena que sorprende a la ciencia con un viaje inesperado por las aguas argentinas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/04/01201317/Colocacio%CC%81n-de-dispositivos-Paula-Faiferman-ICB-768x512.jpg",
    "fecha": "Apr 04, 2022",
    "url": "https://es.mongabay.com/2022/04/atrevida-la-ballena-que-sorprende-a-la-ciencia-argentina/"
  },
  {
    "titulo": "#EnCorto: Tres claves sobre el nacimiento de guacamayos rojos en Iberá, tras más de 100 años de ausencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/11/02195328/Pichones-Guacamayo-Rojo-MatiasRebak-00019-768x512.jpg",
    "fecha": "Mar 31, 2022",
    "url": "https://es.mongabay.com/2022/03/conservacion-nacimiento-de-guacamayos-rojos-en-argentina/"
  },
  {
    "titulo": "#EnCorto: ¿Qué se sabe sobre los pumas del Parque Nacional Patagonia?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/11152226/Puma-macho-recien-comido-I-768x512.jpg",
    "fecha": "Mar 29, 2022",
    "url": "https://es.mongabay.com/2022/03/que-se-sabe-sobre-los-pumas-del-parque-nacional-patagonia/"
  },
  {
    "titulo": "ESTUDIO | La estrategia secreta de las hembras de jaguar para evitar el asesinato de sus crías",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/03/25234730/1-RP8ButA-768x512.png",
    "fecha": "Mar 28, 2022",
    "url": "https://es.mongabay.com/2022/03/estudio-estrategia-de-hembras-de-jaguar-para-evitar-asesinato-de-sus-crias/"
  },
  {
    "titulo": "Expedición virtual: Reserva Canandé y la lucha por conservar al Chocó ecuatoriano",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/03/23231110/17-Reserva-Canande%CC%81-2019-Spider-Monkey-Scott-Trageser-768x512.jpg",
    "fecha": "Mar 25, 2022",
    "url": "https://es.mongabay.com/2022/03/expedicion-virtual-reserva-canande-conservar-al-choco-ecuatoriano/"
  },
  {
    "titulo": "En video | Reptiles, anfibios e insectos descubiertos en la espesura de la selva del Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/04/01144547/Bothrops-heath-2-768x512.jpg",
    "fecha": "Mar 19, 2022",
    "url": "https://es.mongabay.com/2022/03/video-reptiles-anfibios-e-insectos-descubiertos-en-peru/"
  },
  {
    "titulo": "Un corredor forestal para el jaguar: la apuesta de biólogos y comunidades para salvar a los felinos que aún quedan en Guerrero | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/03/17163400/2R-M02-1-768x512.jpg",
    "fecha": "Mar 18, 2022",
    "url": "https://es.mongabay.com/2022/03/corredor-forestal-para-el-jaguar-la-apuesta-para-salvar-a-los-felinos-en-guerrero-videos/"
  },
  {
    "titulo": "Zopilote rey, el ave divina que mejoró prácticas de manejo forestal en una comunidad de la selva maya",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/03/10014957/Zopilote-rey-juvenil-768x512.jpg",
    "fecha": "Mar 14, 2022",
    "url": "https://es.mongabay.com/2022/03/zopilote-rey-el-ave-divina-que-mejoro-practicas-de-manejo-forestal-en-una-comunidad-de-la-selva-maya/"
  },
  {
    "titulo": "En video | Asombrosas especies que escapan de la extinción en Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/30031948/Oso-Hormiguero-2-768x512.jpg",
    "fecha": "Mar 12, 2022",
    "url": "https://es.mongabay.com/2022/03/video-asombrosas-especies-que-escapan-de-la-extincion-en-argentina/"
  },
  {
    "titulo": "El Arca de los Peces: la hazaña que rescató a un pez de la extinción | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/03/04022344/Pez_Tequila_8-768x512.jpg",
    "fecha": "Mar 09, 2022",
    "url": "https://es.mongabay.com/2022/03/la-hazana-que-rescato-a-un-pez-de-la-extincion-entrevista/"
  },
  {
    "titulo": "Polémica por exportaciones de aletas de tiburón, conservación del oso andino, mujeres le hacen frente a la pandemia y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/09/01150653/WhatsApp-Image-2021-03-27-at-20.34.28-768x512.jpeg",
    "fecha": "Mar 06, 2022",
    "url": "https://es.mongabay.com/2022/03/polemica-por-exportaciones-de-aletas-de-tiburon-conservacion-del-oso-andino-mujeres-le-hacen-frente-a-la-pandemia/"
  },
  {
    "titulo": "Colmenas en adopción: el proyecto que busca salvar a las abejas nativas en la Península de Yucatán",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/28233824/Abejas_Cancu%CC%81n_5-768x512.jpg",
    "fecha": "Mar 04, 2022",
    "url": "https://es.mongabay.com/2022/03/colmenas-en-adopcion-proyecto-que-busca-salvar-abejas-nativas-en-peninsula-de-yucatan/"
  },
  {
    "titulo": "Día Mundial de la Vida Silvestre: “Nunca hemos logrado tener un equilibrio entre desarrollo y ambiente”: Ella Vázquez | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/03/03010713/Ella-Vazquez-e1646270846655-768x512.png",
    "fecha": "Mar 03, 2022",
    "url": "https://es.mongabay.com/2022/03/dia-mundial-de-la-vida-silvestre-ella-vazquez-entrevista/"
  },
  {
    "titulo": "La carrera para salvar de la extinción al oso andino en Venezuela",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/03/01151458/6-oso-768x512.jpg",
    "fecha": "Mar 02, 2022",
    "url": "https://es.mongabay.com/2022/03/la-carrera-para-salvar-de-la-extincion-al-oso-andino-en-venezuela/"
  },
  {
    "titulo": "Ecuador: vacíos legales disparan las exportaciones de aletas de tiburón en 2021",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/28215345/PORTADA-GALAPAGOS-BECARIOS-copy-768x512.jpg",
    "fecha": "Feb 28, 2022",
    "url": "https://es.mongabay.com/2022/02/ecuador-vacios-legales-disparan-exportaciones-de-aletas-de-tiburon-en-2021/"
  },
  {
    "titulo": "Expedición virtual: una visita a Punta Laguna, refugio de los monos araña en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/23204450/01-aran%CC%83a-768x512.jpg",
    "fecha": "Feb 28, 2022",
    "url": "https://es.mongabay.com/2022/02/expedicion-virtual-una-visita-a-punta-laguna-refugio-de-los-monos-arana-mexico/"
  },
  {
    "titulo": "Comunidades acorraladas por petróleo, conservación de especies en peligro de extinción, ballenas amenazadas y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/24035356/Ballenas_10_Foto-con-%C2%A9-768x512.jpg",
    "fecha": "Feb 27, 2022",
    "url": "https://es.mongabay.com/2022/02/comunidades-acorraladas-por-petroleo-conservacion-de-especies-en-peligro-de-extincion-ballenas-amenazadas/"
  },
  {
    "titulo": "EN VIDEO | ¿Cómo ayudan las hormigas, tapires y pumas a la conservación de los bosques?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/10/24232439/fig-7-Dontomachus-davisoni-Philipp-Honle-PS-768x512.jpg",
    "fecha": "Feb 26, 2022",
    "url": "https://es.mongabay.com/2022/02/en-video-como-ayudan-las-hormigas-tapires-y-pumas-a-la-conservacion-de-los-bosques/"
  },
  {
    "titulo": "Viajes de alto riesgo: ballenas enfrentan cada vez más peligros en sus rutas migratorias",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/23022126/BALLENAS_8_FOTO-CON-%C2%A9-768x512.jpg",
    "fecha": "Feb 25, 2022",
    "url": "https://es.mongabay.com/2022/02/viajes-de-alto-riesgo-ballenas-enfrentan-cada-vez-mas-peligros-en-sus-rutas-migratorias/"
  },
  {
    "titulo": "Naciones Unidas recomienda “utilizar técnicas de limpieza más eficaces” para atender el derrame de petróleo en el Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/28232800/Ancon_009-768x512.jpg",
    "fecha": "Feb 24, 2022",
    "url": "https://es.mongabay.com/2022/02/naciones-unidas-recomienda-utilizar-tecnicas-de-limpieza-mas-eficaces-para-atender-el-derrame-de-petroleo-en-peru/"
  },
  {
    "titulo": "Colombia ya tiene un programa de conservación para la danta de montaña, especie en peligro de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/23044014/Daniel-Restrepo-Marin_1-768x513.jpg",
    "fecha": "Feb 24, 2022",
    "url": "https://es.mongabay.com/2022/02/colombia-ya-tiene-un-programa-de-conservacion-para-la-danta-de-montana-especie-en-peligro-de-extincion/"
  },
  {
    "titulo": "Argentina: el cardenal amarillo le da batalla al tráfico de animales y comienza a recuperarse",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/22003343/cardenal_1720-768x512.jpeg",
    "fecha": "Feb 22, 2022",
    "url": "https://es.mongabay.com/2022/02/argentina-el-cardenal-amarillo-le-da-batalla-al-trafico-de-animales-y-comienza-a-recuperarse/"
  },
  {
    "titulo": "El programa de conservación que ha ganado hábitat para el oso andino en las cordilleras Central y Occidental de Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/19173729/Foto-oso-pato-1-768x511.jpg",
    "fecha": "Feb 21, 2022",
    "url": "https://es.mongabay.com/2022/02/programa-de-conservacion-que-ha-ganado-habitat-para-el-oso-andino-en-colombia/"
  },
  {
    "titulo": "#EntrevistaMongabay a ex ministro del Ambiente Gabriel Quijandría: «Desde el primer día debió tratarse el derrame de petróleo como una emergencia»",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/25204300/Ancon_J0A3139-768x512.jpg",
    "fecha": "Feb 20, 2022",
    "url": "https://es.mongabay.com/2022/02/entrevistamongabay-gabriel-quijandria-desde-el-primer-dia-debio-tratarse-el-derrame-de-petroleo-como-una-emergencia/"
  },
  {
    "titulo": "EN VIDEO | Estrategias de conservación que han salvado a tres aves de Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/19034405/IMG_0276-2.jpeg",
    "fecha": "Feb 19, 2022",
    "url": "https://es.mongabay.com/2022/02/en-video-estrategias-de-conservacion-que-han-salvado-a-tres-aves-de-ecuador/"
  },
  {
    "titulo": "Basura con etiquetas asiáticas contamina las islas Galápagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/11165717/Relleno-sanitario-San-Cristo%CC%81bal-768x512.jpeg",
    "fecha": "Feb 14, 2022",
    "url": "https://es.mongabay.com/2022/02/basura-con-etiquetas-asiaticas-contamina-las-islas-galapagos/"
  },
  {
    "titulo": "Incendios en Chile, conservación de bosques en México, alarma por cultivos de eucalipto en Perú y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/04172050/Mixteca-alta_3-768x512.jpg",
    "fecha": "Feb 11, 2022",
    "url": "https://es.mongabay.com/2022/02/incendios-en-chile-conservacion-de-bosques-en-mexico-alarma-por-cultivos-de-eucalipto-en-peru/"
  },
  {
    "titulo": "Ecuador: comunidades de Íntag demandan al Estado para proteger a la naturaleza de la minería",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/08/31050219/EXTRA-Atelopus-longirostris-1650030-cropped-Carlos-Zorrilla-768x512.jpg",
    "fecha": "Feb 10, 2022",
    "url": "https://es.mongabay.com/2022/02/ecuador-comunidades-de-intag-demandan-al-estado-para-proteger-a-la-naturaleza-de-la-mineria/"
  },
  {
    "titulo": "“En el Golfo de California las especies se encargan de seguirme maravillando”: Héctor Pérez Puig | Entrevista",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/09065051/00-PORTADA-768x512.jpg",
    "fecha": "Feb 10, 2022",
    "url": "https://es.mongabay.com/2022/02/en-el-golfo-de-california-las-especies-se-encargan-de-seguirme-maravillando-hector-perez-puig-entrevista/"
  },
  {
    "titulo": "#EnCorto | Tres claves para conocer la sorprendente biodiversidad que la guerra ocultó en Picachos, Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/09191129/Sarcoramphus-papa-Rey-gallinazo-%C2%A9Pablo-Meji%CC%81a-_WWF-Colombia4-768x512.jpg",
    "fecha": "Feb 05, 2022",
    "url": "https://es.mongabay.com/2022/02/encorto-tres-claves-para-conocer-la-biodiversidad-de-picachos-colombia/"
  },
  {
    "titulo": "Volver al bosque: la lucha por rescatar a los primates del tráfico ilegal en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/02065100/WhatsApp-Image-2021-12-11-at-08.15.24-3-768x513.jpeg",
    "fecha": "Feb 04, 2022",
    "url": "https://es.mongabay.com/2022/02/la-lucha-por-rescatar-a-los-primates-del-trafico-ilegal-en-colombia/"
  },
  {
    "titulo": "Expedición virtual: El Soldado, un pequeño estero con un impresionante paisaje en el noroeste de México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/02/01084241/03-768x512.jpg",
    "fecha": "Feb 02, 2022",
    "url": "https://es.mongabay.com/2022/02/expedicion-virtual-el-soldado-un-pequeno-estero-mexico/"
  },
  {
    "titulo": "Derrame de petróleo en Perú: “No importa si trabajan desde ahora hasta el 2050, no recuperarán todo”",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/28232626/Ancon_J0A2665-768x512.jpg",
    "fecha": "Feb 01, 2022",
    "url": "https://es.mongabay.com/2022/02/limpieza-por-derrame-de-petroleo-en-peru-no-recuperaran-todo-segun-expertos/"
  },
  {
    "titulo": "Desastre ambiental en Perú: ¿Qué ha pasado con el derrame de más de 11 mil barriles de petróleo en el mar?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/19114740/Derrame-de-petro%CC%81leo-en-Ventanilla-Sernanp-4-768x512.jpeg",
    "fecha": "Jan 31, 2022",
    "url": "https://es.mongabay.com/2022/01/desastre-ambiental-en-peru-que-ha-pasado-con-el-derrame-de-mas-de-11-mil-barriles-de-petroleo-en-el-mar/"
  },
  {
    "titulo": "Ranas diminutas: Describen dos nuevos anfibios para la ciencia en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/29233313/P1780406-copy-768x512.jpg",
    "fecha": "Jan 31, 2022",
    "url": "https://es.mongabay.com/2022/01/ecuador-nuevos-anfibios-para-la-ciencia-ranas/"
  },
  {
    "titulo": "Los animales que no pudieron escapar del derrame de petróleo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/25203732/Ancon_004-768x512.jpg",
    "fecha": "Jan 29, 2022",
    "url": "https://es.mongabay.com/2022/01/animales-que-no-pudieron-escapar-del-derrame-petroleo-peru/"
  },
  {
    "titulo": "«Buscar el futuro económico de un país en los combustibles fósiles es una inmoralidad»: Claudio Campagna | Entrevista",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/25054946/Claudio-Campagna-fielwork1-photo-Jim-Large-768x512.jpg",
    "fecha": "Jan 28, 2022",
    "url": "https://es.mongabay.com/2022/01/buscar-el-futuro-economico-de-un-pais-en-los-combustibles-fosiles-es-una-inmoralidad-entrevista/"
  },
  {
    "titulo": "Costa Rica: puentes aéreos para que los perezosos puedan desplazarse donde no hay árboles",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/12/24183619/19_Autopistas-para-perezosos_Bridge-1-at-Annanci-Village_-The-Sloth-conservation-foundation-2-768x512.jpg",
    "fecha": "Jan 27, 2022",
    "url": "https://es.mongabay.com/2022/01/costa-rica-puentes-aereos-para-los-perezosos/"
  },
  {
    "titulo": "FOTOS | Animales muertos flotan en el mar: el devastador impacto ambiental del derrame de petróleo de Repsol en las áreas protegidas de Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/25213247/Ancon_002-768x512.jpg",
    "fecha": "Jan 26, 2022",
    "url": "https://es.mongabay.com/2022/01/fotos-animales-muertos-flotan-en-el-mar-de-peru-por-derrame-de-petroleo-oceanos/"
  },
  {
    "titulo": "Perú: cinco nuevas áreas de conservación privada protegen bosques y fauna en Cusco y Madre de Dios",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/24130512/ACP-Collpapampa-1-768x512.jpg",
    "fecha": "Jan 25, 2022",
    "url": "https://es.mongabay.com/2022/01/peru-cinco-nuevas-areas-de-conservacion-privada-en-cusco-y-madre-de-dios/"
  },
  {
    "titulo": "Incendios forestales en Bolivia: nuevo estudio revela que 60 especies de aves han perdido parte importante de sus hogares",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/17134354/Culicivora-caudacuta_Lennart-Verheuve-768x512.jpg",
    "fecha": "Jan 24, 2022",
    "url": "https://es.mongabay.com/2022/01/incendios-forestales-en-bolivia-nuevo-estudio-revela-que-60-aves-han-perdido-parte-importante-de-sus-hogares/"
  },
  {
    "titulo": "Derrame de petróleo en Perú, conservación del jaguar en Argentina, entrevista sobre hipopótamos y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/19174002/Derrame-de-Petro%CC%81leo-La-Pampilla-Serfor-3-768x512.jpeg",
    "fecha": "Jan 23, 2022",
    "url": "https://es.mongabay.com/2022/01/derrame-de-petroleo-en-peru-conservacion-del-jaguar-en-argentina/"
  },
  {
    "titulo": "«Ninguna región de la costa del Perú tiene un centro de rescate»: Carlos Calvo | Entrevista",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/19174011/Derrame-de-Petro%CC%81leo-La-Pampilla-Serfor-768x512.jpeg",
    "fecha": "Jan 21, 2022",
    "url": "https://es.mongabay.com/2022/01/ninguna-region-de-la-costa-del-peru-tiene-un-centro-de-rescate-carlos-calvo-entrevista-derrame-petroleo/"
  },
  {
    "titulo": "“Espero que en 2022 el gobierno declare al hipopótamo como especie invasora en Colombia”: Nataly Castelblanco | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/23161258/DSC00544-768x512.jpg",
    "fecha": "Jan 20, 2022",
    "url": "https://es.mongabay.com/2022/01/hipopotamo-especie-invasora-en-colombia-nataly-castelblanco-entrevista/"
  },
  {
    "titulo": "Expedición Virtual: un recorrido por la Reserva Nacional Illescas en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/01/17211159/ILLESCASALTAS36-768x512.jpg",
    "fecha": "Jan 19, 2022",
    "url": "https://es.mongabay.com/2022/01/expedicion-virtual-reserva-nacional-illescas-en-peru/"
  },
  {
    "titulo": "Los desafíos ambientales para salvar los océanos de Latinoamérica en 2022",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/04215047/ESM2818-Eduardo-Sorensen-Las-Tacas-768x512.jpg",
    "fecha": "Jan 15, 2022",
    "url": "https://es.mongabay.com/2022/01/desafios-ambientales-para-salvar-los-oceanos-de-latinoamerica-en-2022/"
  },
  {
    "titulo": "Los desafíos ambientales de México en 2022: detener deforestación, proteger áreas naturales y valorar a comunidades forestales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/05/17182924/Peni%CC%81nsula-de-Yucata%CC%81nFoto-Cuauhte%CC%81moc-Moreno-768x512.jpg",
    "fecha": "Jan 13, 2022",
    "url": "https://es.mongabay.com/2022/01/desafios-ambientales-de-mexico-en-el-2022/"
  },
  {
    "titulo": "Las 15 historias de Mongabay Latam que nos inspiran a seguir conservando el ambiente",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/10235733/Yaguarete-Cachorros-Tania-y-Qaramta-Matias-Rebak-Rewilding-Argentina-Cachorros-Tania-154-768x512.jpg",
    "fecha": "Dec 29, 2021",
    "url": "https://es.mongabay.com/2021/12/las-15-historias-de-mongabay-latam-que-nos-inspiran-a-seguir-conservando-el-ambiente/"
  },
  {
    "titulo": "Los 10 videos más vistos del año en Mongabay Latam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/09/20212854/8.-Babosa-marina-768x512.jpg",
    "fecha": "Dec 27, 2021",
    "url": "https://es.mongabay.com/2021/12/los-10-videos-mas-vistos-del-ano-en-mongabay-latam/"
  },
  {
    "titulo": "Mongabay Latam: las 10 entrevistas que impactaron en 2021",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/18173240/5-1-768x512.jpeg",
    "fecha": "Dec 27, 2021",
    "url": "https://es.mongabay.com/2021/12/mongabay-latam-las-10-entrevistas-que-impactaron-en-2021/"
  },
  {
    "titulo": "Las fotografías que marcaron el año 2021",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/14003453/B65B2008-768x512.jpg",
    "fecha": "Dec 22, 2021",
    "url": "https://es.mongabay.com/2021/12/las-fotografias-que-marcaron-el-ano-2021/"
  },
  {
    "titulo": "Bolivia: las 10 historias ambientales que marcaron el 2021",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/10/26043318/INCENDIOS-Robore%CC%81-Naranjos-N%CC%83embi-Guasu-Claudia-Belaunde-FCBC-768x511.jpg",
    "fecha": "Dec 20, 2021",
    "url": "https://es.mongabay.com/2021/12/bolivia-las-10-historias-ambientales-que-marcaron-el-2021/"
  },
  {
    "titulo": "Argentina: las 10 historias ambientales que marcaron el 2021",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/10235733/Yaguarete-Cachorros-Tania-y-Qaramta-Matias-Rebak-Rewilding-Argentina-Cachorros-Tania-154-768x512.jpg",
    "fecha": "Dec 16, 2021",
    "url": "https://es.mongabay.com/2021/12/argentina-las-10-historias-ambientales-que-marcaron-el-2021/"
  },
  {
    "titulo": "#ExpedicionesCientíficas | ¿Cómo se protege al ave rapaz más grande de Sudamérica?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/03/18124139/featured-eagle-768x512.png",
    "fecha": "Dec 12, 2021",
    "url": "https://es.mongabay.com/2021/12/expediciones-cientificas-conservacion-aguila-arpia-video/"
  },
  {
    "titulo": "Asesinan a defensor ambiental, tráfico de especies, tortugas marinas en peligro y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/19175010/trafico-de-fauna-madre-de-dios-18-768x512.jpg",
    "fecha": "Dec 12, 2021",
    "url": "https://es.mongabay.com/2021/12/asesinan-a-defensor-ambiental-trafico-especies-medioambiente/"
  },
  {
    "titulo": "Costa Rica: la historia de una pareja que busca salvar de los pesticidas a la abeja sagrada de los Maya",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/08183212/6_Historia-meliponicultores-768x512.jpg",
    "fecha": "Dec 10, 2021",
    "url": "https://es.mongabay.com/2021/12/costa-rica-salvar-de-los-pesticidas-a-las-abejas/"
  },
  {
    "titulo": "Perú: diez animales silvestres fueron rescatados de un centro de exhibición ilegal en la triple frontera",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/12/06045321/Rescate-de-animales-silvestres-FEMA-Loreto-5-768x512.jpeg",
    "fecha": "Dec 07, 2021",
    "url": "https://es.mongabay.com/2021/12/peru-animales-silvestres-fueron-rescatados-en-la-triple-frontera/"
  },
  {
    "titulo": "Argentina: la historia de los pescadores deportivos que decidieron cambiar y ayudar a la ciencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/15162852/Tiburo%CC%81n-bacota_Conservar-Tiburones-en-Argentina-4-768x512.jpg",
    "fecha": "Dec 03, 2021",
    "url": "https://es.mongabay.com/2021/12/argentina-pescadores-deportivos-ayudan-a-la-ciencia-oceanos/"
  },
  {
    "titulo": "Oso hormiguero gigante: la especie carismática que marcó el retorno de la biodiversidad al Iberá",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/30031948/Oso-Hormiguero-2-768x512.jpg",
    "fecha": "Nov 30, 2021",
    "url": "https://es.mongabay.com/2021/11/oso-hormiguero-gigante-conservacion-biodiversidad-ibera/"
  },
  {
    "titulo": "Día Internacional del Jaguar: ¿Qué se está haciendo en Latinoamérica para salvar al felino más grande del continente?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/26181841/Jaguar-en-Peru%CC%81-Pucallpa-Musuk-Nolte-para-WCS-Peru%CC%81-768x512.jpg",
    "fecha": "Nov 29, 2021",
    "url": "https://es.mongabay.com/2021/11/dia-internacional-del-jaguar-conservacion-latinoamerica/"
  },
  {
    "titulo": "Defensoras indígenas amenazadas, venta ilegal de hipopótamos, bosques en peligro y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/23161352/Hippo-comiendo-768x512.jpg",
    "fecha": "Nov 28, 2021",
    "url": "https://es.mongabay.com/2021/11/defensoras-indigenas-amenazadas-venta-ilegal-de-hipopotamos-bosques-en-peligro-y-mas/"
  },
  {
    "titulo": "Cámaras trampa registran cachorros de aguará guazú en Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/26160010/Ibera-Cachorros-de-Aguara-8-768x512.jpeg",
    "fecha": "Nov 28, 2021",
    "url": "https://es.mongabay.com/2021/11/camaras-trampa-cachorros-aguara-guazu-argentina/"
  },
  {
    "titulo": "El problema sigue creciendo: hipopótamos a la venta en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/23161235/chica-con-hippo-silla-768x512.jpg",
    "fecha": "Nov 25, 2021",
    "url": "https://es.mongabay.com/2021/11/problema-hipopotamos-a-la-venta-colombia/"
  },
  {
    "titulo": "#ExpedicionesCientíficas | El vuelo de la paraba barba azul en la sabana boliviana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/14081515/Paraba-barba-Azul-4-Fundacio%CC%81n-Loros-de-Bolivia-768x512.jpg",
    "fecha": "Nov 22, 2021",
    "url": "https://es.mongabay.com/2021/11/expediciones-cientificas-paraba-barba-azul-bolivia-video-conservacion/"
  },
  {
    "titulo": "Perú: Congreso debate proyecto sobre tráfico de vida silvestre que pone en riesgo la legislación contra delitos ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/19175010/trafico-de-fauna-madre-de-dios-18-768x512.jpg",
    "fecha": "Nov 19, 2021",
    "url": "https://es.mongabay.com/2021/11/peru-proyecto-trafico-de-vida-silvestre-delitos-ambientales/"
  },
  {
    "titulo": "Nación Comcaac: el grupo tortuguero indígena que está salvando a las tortugas marinas en el noroeste de México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/17233736/portada-768x512.jpeg",
    "fecha": "Nov 19, 2021",
    "url": "https://es.mongabay.com/2021/11/grupo-tortuguero-indigena-conservacion-tortugas-marinas-mexico-oceanos/"
  },
  {
    "titulo": "Pescadores de Bahía de los Ángeles en México ayudan a la ciencia a descifrar los misterios del tiburón ballena",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/08/16162055/tiburon-jpg-768x512.jpg",
    "fecha": "Nov 18, 2021",
    "url": "https://es.mongabay.com/2021/11/pescadores-mexico-conservacion-tiburon-ballena-oceanos/"
  },
  {
    "titulo": "ENTREVISTA | «Con la información que hay publicada, Colombia es el país con más mariposas en el mundo»",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/04043803/Juan-Gmo-Jaramillo-Familia-Papilionidae-768x512.jpg",
    "fecha": "Nov 08, 2021",
    "url": "https://es.mongabay.com/2021/11/entrevista-colombia-es-el-pais-con-mas-mariposas-en-el-mundo/"
  },
  {
    "titulo": "Humedales sin protección, conservación de bosques, especies durante la pandemia y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/10/15151347/WhatsApp-Image-2021-10-15-at-10.05.42-768x512.jpeg",
    "fecha": "Nov 07, 2021",
    "url": "https://es.mongabay.com/2021/11/humedales-sin-proteccion-conservacion-de-bosques-especies/"
  },
  {
    "titulo": "Bolivia: cinco ciudadanos chinos detenidos por tráfico de partes de jaguar",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/11/04142716/Operacio%CC%81n-Jaguar-detencio%CC%81n-ciudadanos-chinos-Foto-ELI-1-768x512.jpeg",
    "fecha": "Nov 05, 2021",
    "url": "https://es.mongabay.com/2021/11/bolivia-cinco-ciudadanos-chinos-detenidos-por-trafico-de-partes-de-jaguar/"
  },
  {
    "titulo": "Un corredor reforestado evita la extinción de las especies en los Andes colombianos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/10/13152436/5-header-Spizaetus_isidori_Juv_OsmanLopez-768x512.jpg",
    "fecha": "Nov 05, 2021",
    "url": "https://es.mongabay.com/2021/11/corredor-reforestado-evita-extincion-de-especies-colombia/"
  },
  {
    "titulo": "Científicos exploran el lugar más remoto de Chile en busca de crías de ballenas en peligro crítico de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/12/09010047/balance-argentina-5.jpg",
    "fecha": "Nov 03, 2021",
    "url": "https://es.mongabay.com/2021/11/chile-ballenas-extincion-expedicion-cientifica/"
  },
  {
    "titulo": "¿Qué pasó con las tortugas marinas de Galápagos cuando se detuvo el turismo debido a la pandemia?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/10/14181357/DSC2046-768x512.jpg",
    "fecha": "Nov 01, 2021",
    "url": "https://es.mongabay.com/2021/11/pandemia-turismo-tortugas-marinas-galapagos/"
  },
  {
    "titulo": "¿Qué amenazas enfrentarían los mamíferos marinos de Chile con la construcción del proyecto Dominga? | Entrevista",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/10/22173723/MG_7171-768x512.jpg",
    "fecha": "Oct 29, 2021",
    "url": "https://es.mongabay.com/2021/10/amenazas-mamiferos-marinos-chile-proyecto-dominga-entrevista/"
  },
  {
    "titulo": "Una empresa minera amenaza la vida del oso andino en Colombia | Historia gráfica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/10/27163408/banner-wp-3-768x450.png",
    "fecha": "Oct 27, 2021",
    "url": "https://es.mongabay.com/2021/10/empresa-minera-amenazas-oso-andino-colombia-historia-grafica/"
  },
  {
    "titulo": "En video | Tres especies difíciles de ver fueron captadas en Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/08/16232214/Chipi-chipi-3-Mileniusz-Spanowicz_WCS-768x512.jpg",
    "fecha": "Oct 23, 2021",
    "url": "https://es.mongabay.com/2021/10/video-especies-dificiles-de-ver-en-bolivia/"
  },
  {
    "titulo": "Las tortugas gigantes que hicieron brillar el café de Galápagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/10/15151407/WhatsApp-Image-2021-10-15-at-10.05.43-1-768x512.jpeg",
    "fecha": "Oct 18, 2021",
    "url": "https://es.mongabay.com/2021/10/las-tortugas-gigantes-que-hicieron-brillar-el-cafe-de-galapagos/"
  },
  {
    "titulo": "#PodcastAmbiental: ¿Por qué los perros abandonados se han convertido en una amenaza para especies silvestres de Ecuador y Chile?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/07/20145324/DomesticDog4-768x512.jpg",
    "fecha": "Oct 14, 2021",
    "url": "https://es.mongabay.com/2021/10/podcast-ambiental-perros-abandonados-amenazas-ecuador-chile/"
  },
  {
    "titulo": "#EnCorto | Cuatro claves para entender el riesgo que enfrenta el jaguar en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/09/09225822/Planeta-Vivo-2020-Foto-Lynn-M.-Stone-WWF-768x512.jpg",
    "fecha": "Oct 13, 2021",
    "url": "https://es.mongabay.com/2021/10/el-riesgo-que-enfrenta-el-jaguar-en-ecuador/"
  },
  {
    "titulo": "#EnCorto | Cuatro claves para entender qué está pasando con el caimán negro en Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/28075139/Caima%CC%81n-negro-%C2%A9-Jean-Christophe-Vi-UICN-768x512.png",
    "fecha": "Oct 11, 2021",
    "url": "https://es.mongabay.com/2021/10/caiman-negro-bolivia-amenazas/"
  },
  {
    "titulo": "Asombrosas cámaras trampa, ranas arlequín en riesgo de extinción, cifras alarmantes de deforestación en Perú y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/09/24235623/Copia-de-P_concolor_04-768x512.jpeg",
    "fecha": "Oct 10, 2021",
    "url": "https://es.mongabay.com/2021/10/asombrosas-camaras-trampa-ranas-arlequin-en-riesgo-de-extincion-cifras-alarmantes-de-deforestacion-en-peru-y-mas/"
  },
  {
    "titulo": "Galápagos: “casi 30 especies migratorias no han mejorado su condición a pesar de tener la reserva” | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/08/16162055/tiburon-jpg-768x512.jpg",
    "fecha": "Oct 08, 2021",
    "url": "https://es.mongabay.com/2021/10/galapagos-nueva-area-marina-protegida-entrevista/"
  },
  {
    "titulo": "En video | Muitú: el ave que volvió a nacer tras su extinción en el Iberá",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/07/27155827/muitu-ave-argentina-3-768x512.jpg",
    "fecha": "Oct 08, 2021",
    "url": "https://es.mongabay.com/2021/10/video-muitu-extincion-conservacion-ibera/"
  },
  {
    "titulo": "La carrera contra el tiempo para salvar de la extinción a las ranas arlequín en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/10/06025206/A_spumarius_Ecuador_JaimeCulebras_watermark-768x512.jpg",
    "fecha": "Oct 07, 2021",
    "url": "https://es.mongabay.com/2021/10/salvar-de-la-extincion-a-las-ranas-arlequin-latinoamerica/"
  },
  {
    "titulo": "Colombia: más de 20 mil registros de animales con cámaras trampa en la Orinoquía y el Magdalena Medio",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/09/24235445/12010131-768x512.jpg",
    "fecha": "Oct 05, 2021",
    "url": "https://es.mongabay.com/2021/10/colombia-animales-camaras-trampa/"
  },
  {
    "titulo": "Ecuador: Asambleístas solicitarán a la Fiscalía acelerar la investigación sobre tráfico de aletas de tiburón",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/09/01150734/WhatsApp-Image-2021-02-19-at-14.32.54-768x512.jpeg",
    "fecha": "Oct 05, 2021",
    "url": "https://es.mongabay.com/2021/10/ecuador-investigacion-trafico-de-aletas-de-tiburon/"
  },
  {
    "titulo": "En video | La asombrosa biodiversidad de los mares de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/30212808/lobos-marinos-punta-san-juan-FINOS-5-768x512.jpg",
    "fecha": "Oct 03, 2021",
    "url": "https://es.mongabay.com/2021/10/video-biodiversidad-mares-de-latinoamerica/"
  },
  {
    "titulo": "Comunidades en resistencia, deforestación y narcotráfico en Perú, tráfico de caballitos de mar y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/08161114/HK01SEAHORSES_009-768x512.jpg",
    "fecha": "Oct 03, 2021",
    "url": "https://es.mongabay.com/2021/10/comunidades-en-resistencia-deforestacion-y-narcotrafico-en-peru-trafico-de-caballitos-de-mar-y-mas/"
  },
  {
    "titulo": "#EnCorto | Cuatro claves para entender cómo funciona el tráfico de caballitos de mar desde México a China",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/08160841/HK01SEAHORSES_005-768x512.jpg",
    "fecha": "Sep 29, 2021",
    "url": "https://es.mongabay.com/2021/09/trafico-de-caballitos-de-mar-mexico-china/"
  },
  {
    "titulo": "En video | Tres estrategias que buscan evitar la desaparición del jaguar en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/10235729/Yaguarete-Cachorros-Tania-y-Qaramta-Matias-Rebak-Rewilding-Argentina-Cachorros-Tania-122-768x512.jpg",
    "fecha": "Sep 25, 2021",
    "url": "https://es.mongabay.com/2021/09/video-conservacion-jaguar-latinoamerica/"
  },
  {
    "titulo": "Descubren la primera “abeja andrógina” de Ecuador | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/09/18010126/WhatsApp-Image-2021-09-17-at-5.01.50-PM-768x512.jpeg",
    "fecha": "Sep 21, 2021",
    "url": "https://es.mongabay.com/2021/09/descubren-abeja-androgina-ecuador-entrevista/"
  },
  {
    "titulo": "#EnCorto | Cuatro claves para entender por qué los delfines del Golfo de Guayaquil están desapareciendo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/09/27173302/Foto-6-768x512.jpg",
    "fecha": "Sep 20, 2021",
    "url": "https://es.mongabay.com/2021/09/delfines-golfo-de-guayaquil-peligro-oceanos/"
  },
  {
    "titulo": "En video | Extraordinarias especies que han escapado de la extinción en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/20022938/MTF_1687_foto-Michael_Tweddle-768x513.jpg",
    "fecha": "Sep 19, 2021",
    "url": "https://es.mongabay.com/2021/09/en-video-extraordinarias-especies-que-han-escapado-de-la-extincion-en-latinoamerica/"
  },
  {
    "titulo": "#EnCorto | Cuatro claves para entender el rol de las ballenas en la lucha contra el cambio climático",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/05170453/patagoniaphotosafaris15-768x512.jpg",
    "fecha": "Sep 16, 2021",
    "url": "https://es.mongabay.com/2021/09/ballenas-cambio-climatico-oceanos/"
  },
  {
    "titulo": "En video | Chile: 35 años de exitosa recuperación de los loros tricahue",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/03164341/Eduardo-Pavez-3-768x512.jpg",
    "fecha": "Sep 16, 2021",
    "url": "https://es.mongabay.com/2021/09/video-conservacion-loros-tricahue-chile/"
  },
  {
    "titulo": "Expedición virtual: un paseo inolvidable por las altas cumbres del Parque Nacional Lauca en Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/09/06151729/Mongabay-Andres-Puiggros-16-768x512.jpg",
    "fecha": "Sep 13, 2021",
    "url": "https://es.mongabay.com/2021/09/expedicion-virtual-parque-nacional-lauca-chile/"
  },
  {
    "titulo": "En video | Los secretos de la asombrosa biodiversidad de tres áreas protegidas de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/09/30022701/GPA_OsoHormiguero-768x512.jpg",
    "fecha": "Sep 12, 2021",
    "url": "https://es.mongabay.com/2021/09/video-biodiversidad-areas-protegidas-latinoamerica/"
  },
  {
    "titulo": "Tráfico de tiburones, comunidades indígenas bajo amenaza, conservación de especies y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/09/01150653/WhatsApp-Image-2021-03-27-at-20.34.28-768x512.jpeg",
    "fecha": "Sep 12, 2021",
    "url": "https://es.mongabay.com/2021/09/trafico-de-tiburones-comunidades-indigenas-conservacion/"
  },
  {
    "titulo": "Costa Rica: el lugar donde las ballenas mejoraron la calidad de vida de los pescadores",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/09/09203729/pexels-elianne-dipp-4666750-768x513.jpg",
    "fecha": "Sep 10, 2021",
    "url": "https://es.mongabay.com/2021/09/costa-rica-el-lugar-donde-las-ballenas-mejoraron-la-calidad-de-vida-de-los-pescadores/"
  },
  {
    "titulo": "#EnCorto | Cuatro claves para entender cómo los espantapájaros salvan de las redes de pesca a los albatros de ceja negra",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/03/26151838/Albatros-2-1-768x511.jpg",
    "fecha": "Sep 09, 2021",
    "url": "https://es.mongabay.com/2021/09/cuatro-claves-espantapajaros-salvan-albatros-de-ceja-negra/"
  },
  {
    "titulo": "Tráfico de tiburones: empresa ecuatoriana sospechosa de contrabandear 26 toneladas de aletas sigue exportando",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/09/06214144/PORTADA-1200X450-768x450.png",
    "fecha": "Sep 09, 2021",
    "url": "https://es.mongabay.com/2021/09/trafico-de-tiburones-empresa-ecuatoriana-sigue-exportando-peru/"
  },
  {
    "titulo": "México: «Aquí va aumentando la deforestación. Si esto sigue así, la mariposa monarca ya no va a llegar, va a buscar otros sitios»",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/09/01140846/%C2%A9-Alianza-WWF-Telcel10608-768x512.jpg",
    "fecha": "Sep 06, 2021",
    "url": "https://es.mongabay.com/2021/09/mexico-amenazas-reserva-biosfera-mariposa-monarca-bosques/"
  },
  {
    "titulo": "“Un grupo que me parece enigmático y apasionante son las serpientes venenosas” | Entrevista",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/09/01192438/Xenoxybelis_argenteus-768x512.jpg",
    "fecha": "Sep 02, 2021",
    "url": "https://es.mongabay.com/2021/09/serpientes-venenosas-entrevista-nuevas-especies-biodiversidad/"
  },
  {
    "titulo": "Día Internacional de los Primates: tres historias de esperanza sobre especies amenazadas en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/31142446/A.-palliata-I.-Duch-Latorre-4-768x512.jpg",
    "fecha": "Sep 01, 2021",
    "url": "https://es.mongabay.com/2021/09/dia-internacional-de-los-primates-conservacion-latinoamerica/"
  },
  {
    "titulo": "La “revolución” de los carpinchos renueva el debate sobre la protección de los humedales en Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/30011926/carpinchos-1-20210821_165629_01-768x512.jpg",
    "fecha": "Aug 30, 2021",
    "url": "https://es.mongabay.com/2021/08/carpinchos-humedales-argentina-nordelta/"
  },
  {
    "titulo": "En video | Cuatro estrategias de conservación que usan tecnología para salvar especies de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/10/10000409/JRG7187HR-768x513.jpg",
    "fecha": "Aug 29, 2021",
    "url": "https://es.mongabay.com/2021/08/video-estrategias-de-conservacion-tecnologia-especies-latinoamerica/"
  },
  {
    "titulo": "Probabilidad de nuevas pandemias, pueblos indígenas amenazados, biodiversidad en peligro en Chile y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/14182941/Sepahua-Ucayali-Microred-de-salud-Sepahua-7-768x512.jpg",
    "fecha": "Aug 28, 2021",
    "url": "https://es.mongabay.com/2021/08/nuevas-pandemias-biodiversidad-en-peligro-en-chile-y-mas/"
  },
  {
    "titulo": "En video | Conozcamos al oso de anteojos en #LaVidaSecretaDeLosAnimales | Episodio 55",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/07/06004017/Nuevo-Oso-Andino-4-SBC-Peru-768x512.jpg",
    "fecha": "Aug 27, 2021",
    "url": "https://es.mongabay.com/2021/08/video-oso-de-anteojos-la-vida-secreta-de-los-animales/"
  },
  {
    "titulo": "¿Cómo es la nueva serpiente ‘ojo de gato’ descubierta en Ecuador?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/03/22030030/leptodeira-misinawui-8-768x450.jpg",
    "fecha": "Aug 27, 2021",
    "url": "https://es.mongabay.com/2021/08/nueva-serpiente-ojo-de-gato-descubierta-en-ecuador/"
  },
  {
    "titulo": "En video | Tres descubrimientos extraordinarios de especies en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/11/18064338/culebra-ciega-humboldt-768x512.jpeg",
    "fecha": "Aug 22, 2021",
    "url": "https://es.mongabay.com/2021/08/video-descubrimientos-extraordinarios-de-especies/"
  },
  {
    "titulo": "Tráfico de especies:  la cadena de protección de la fauna silvestre en Madre de Dios | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/19175056/trafico-de-fauna-madre-de-dios-29-768x512.jpg",
    "fecha": "Aug 21, 2021",
    "url": "https://es.mongabay.com/2021/08/trafico-de-especies-amazonia-madre-de-dios-reportaje-fotografico/"
  },
  {
    "titulo": "Los anfibios están entre los animales más amenazados por el cambio climático | Entrevista a Mauricio Ortega",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/19000713/Campus_Ikiam-1-768x512.jpg",
    "fecha": "Aug 19, 2021",
    "url": "https://es.mongabay.com/2021/08/anfibios-amenazados-cambio-climatico-entrevista/"
  },
  {
    "titulo": "Las ballenas francas de Chile y Perú son únicas, y solo quedan 50 en el mundo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/05/31175634/CCC_SouthernRightWhale1006_112-768x512.jpg",
    "fecha": "Aug 17, 2021",
    "url": "https://es.mongabay.com/2021/08/ballenas-francas-de-chile-y-peru-son-unicas-oceanos/"
  },
  {
    "titulo": "Sorprendentes estrategias de conservación que han salvado de la extinción a diversas aves de Latinoamérica | EN VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/22012059/cotorra3.jpg",
    "fecha": "Aug 15, 2021",
    "url": "https://es.mongabay.com/2021/08/sorprendentes-estrategias-de-conservacion-extincion-aves-de-latinoamerica-video/"
  },
  {
    "titulo": "Población del oso andino amenazada, incendios forestales en Latinoamérica, conservación de pumas y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/11152226/Puma-macho-recien-comido-I-768x512.jpg",
    "fecha": "Aug 15, 2021",
    "url": "https://es.mongabay.com/2021/08/poblacion-del-oso-andino-amenazada-incendios-forestales-conservacion-de-pumas/"
  },
  {
    "titulo": "La mitad de los bosques de Latinoamérica no sobreviviría luego de sufrir su primer incendio | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/11165202/ARMADILLO-768x512.jpg",
    "fecha": "Aug 13, 2021",
    "url": "https://es.mongabay.com/2021/08/bosques-de-latinoamerica-incendios-estudio/"
  },
  {
    "titulo": "Chile: la sana y vigorosa población de pumas del Parque Nacional Patagonia | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/11152148/camaras-trampa-pnp-sendero-ago-2020-feb-2021-08240089-768x512.jpg",
    "fecha": "Aug 12, 2021",
    "url": "https://es.mongabay.com/2021/08/chile-la-sana-y-vigorosa-poblacion-de-pumas-videos/"
  },
  {
    "titulo": "Colombia: una expedición reveló la sorprendente biodiversidad que la guerra ocultaba en el parque nacional Picachos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/09191653/Platyrrhinus-brachycephalus-%C2%A9Pablo-Meji%CC%81a-_WWF-Colombia-768x512.jpg",
    "fecha": "Aug 12, 2021",
    "url": "https://es.mongabay.com/2021/08/colombia-expedicion-revelo-la-sorprendente-biodiversidad-del-parque-picachos/"
  },
  {
    "titulo": "Incendios en Bolivia: fuego afecta el hogar de la paraba azul en San Matías",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/11165159/ANMI-san.matias-4-768x512.jpg",
    "fecha": "Aug 11, 2021",
    "url": "https://es.mongabay.com/2021/08/incendios-en-bolivia-fuego-afecta-a-la-paraba-barba-azul-san-matias/"
  },
  {
    "titulo": "Chile: Santuario de la Naturaleza Humedal Río Maipo en alerta por ampliación del puerto de San Antonio",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/10223929/Zarapito-comu%CC%81n-2-Vicente-Pantoja-768x512.jpg",
    "fecha": "Aug 11, 2021",
    "url": "https://es.mongabay.com/2021/08/chile-humedal-rio-maipo-alerta-puerto-de-san-antonio/"
  },
  {
    "titulo": "Ecuador ha ignorado a sus peces de agua dulce y hoy están en grave peligro",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/07191908/fish_market_oriente_Ricardo_1000-768x512.jpg",
    "fecha": "Aug 10, 2021",
    "url": "https://es.mongabay.com/2021/08/ecuador-peces-de-agua-dulce-grave-peligro/"
  },
  {
    "titulo": "Una empresa minera amenaza la vida del oso andino en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/09144233/oso-de-anteojos-tamesis-7-1-e1628520218491-768x512.jpg",
    "fecha": "Aug 09, 2021",
    "url": "https://es.mongabay.com/2021/08/mineria-amenaza-oso-andino-colombia-bosques/"
  },
  {
    "titulo": "Comunidades indígenas bajo amenaza en México, flotas chinas, nuevas áreas protegidas y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/08/16182519/portada-2-768x512.jpeg",
    "fecha": "Aug 08, 2021",
    "url": "https://es.mongabay.com/2021/08/comunidades-indigenas-amenazadas-flotas-chinas-nuevas-areas-protegidas/"
  },
  {
    "titulo": "Chile: aumentan los casos de pudúes heridos por ataques de perros sin supervisión en Chiloé",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/08/03142955/Nature-Consevancy-768x512.jpeg",
    "fecha": "Aug 04, 2021",
    "url": "https://es.mongabay.com/2021/08/chile-aumentan-los-casos-de-pudues-heridos-por-ataques-de-perros/"
  },
  {
    "titulo": "Perú: tres nuevas áreas de conservación regional protegerán paisajes únicos y fauna espectacular",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/07/29182031/ACR-Codo-del-Pozuzo-IBC-2-768x512.jpg",
    "fecha": "Aug 03, 2021",
    "url": "https://es.mongabay.com/2021/08/peru-tres-nuevas-areas-de-conservacion-regional/"
  },
  {
    "titulo": "Flotas chinas: estudio revela los impactos del mayor caso de pesca ilegal reportado en Galápagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/10/05151147/23810677638_c32de3244f_3k-768x512.jpg",
    "fecha": "Aug 03, 2021",
    "url": "https://es.mongabay.com/2021/08/flotas-chinas-estudio-pesca-ilegal-galapagos/"
  },
  {
    "titulo": "Muitú: el ave que volvió a nacer tras su extinción en el Iberá",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/07/27155833/muitu-ave-argentina-4-768x512.jpg",
    "fecha": "Jul 29, 2021",
    "url": "https://es.mongabay.com/2021/07/muitu-aves-extincion-ibera-argentina/"
  },
  {
    "titulo": "Tráfico de tiburones: autoridades ecuatorianas identifican a empresa sospechosa de millonaria exportación de aletas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/07/26213723/IMG_0689-768x512.jpg",
    "fecha": "Jul 27, 2021",
    "url": "https://es.mongabay.com/2021/07/trafico-de-tiburones-ecuador-empresa-sospechosa-de-millonaria-exportacion-de-aletas/"
  },
  {
    "titulo": "«Implicaría una vergüenza internacional que el gobierno mexicano haya dejado extinguir a una especie» | Alejandro Olivera sobre vaquita marina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/09/07024358/1-2-768x512.jpg",
    "fecha": "Jul 26, 2021",
    "url": "https://es.mongabay.com/2021/07/entrevista-alejandro-olivera-vaquita-marina-extincion/"
  },
  {
    "titulo": "El viaje de Cassiopeia: la tiburón martillo que dejó Galápagos para dar a luz a sus crías",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/07/23160722/casipea-3-768x512.jpeg",
    "fecha": "Jul 26, 2021",
    "url": "https://es.mongabay.com/2021/07/la-tiburon-martillo-que-dejo-galapagos-para-dar-a-luz-a-sus-crias/"
  },
  {
    "titulo": "Perros abandonados o sin supervisión se han convertido en una gran amenaza para las especies silvestres de Ecuador y Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/07/20145345/DomesticDog6-768x512.jpg",
    "fecha": "Jul 21, 2021",
    "url": "https://es.mongabay.com/2021/07/perros-abandonados-amenaza-para-especies-silvestres-de-ecuador-y-chile/"
  },
  {
    "titulo": "«Las serpientes son capturadas para el consumo de su carne y su piel» | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/07/12151735/Oxyrhopus-sp.-768x512.jpg",
    "fecha": "Jul 16, 2021",
    "url": "https://es.mongabay.com/2021/07/serpientes-capturadas-para-consumo-entrevista/"
  },
  {
    "titulo": "Asombrosas cámaras trampa, polémico proyecto de minería en Perú, impactante incendio en México y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/07/05125945/Tamandua-mexicana-Estudios-bosques-secos-ca%CC%81maras-trampa-768x512.jpg",
    "fecha": "Jul 11, 2021",
    "url": "https://es.mongabay.com/2021/07/asombrosas-camaras-trampa-polemico-proyecto-mineria-impactante-incendio/"
  },
  {
    "titulo": "Perú: ¿Por qué la minería podría reducir las poblaciones de peces y nutrias gigantes en Madre De Dios?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/28090922/Investigacion-lagunas-mineri%CC%81a-lobos-y-peces-MDD-Foto-Adi-Barocas-8-1-768x512.jpg",
    "fecha": "Jul 09, 2021",
    "url": "https://es.mongabay.com/2021/07/peru-mineria-amenaza-peces-nutrias-gigantes/"
  },
  {
    "titulo": "¿Qué son los corredores biológicos y por qué son clave para salvar la biodiversidad en el mundo?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/08/04003150/Se-han-identificado-16-ecosistemas-dentro-del-Corredor-de-Conectividad-Sangay-Podocarpus.jpg",
    "fecha": "Jul 08, 2021",
    "url": "https://es.mongabay.com/2021/07/que-son-los-corredores-biologicos-biodiversidad/"
  },
  {
    "titulo": "Cámaras trampa captan la fauna poco explorada de desierto y bosques secos de Perú y Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/07/05125933/calopex-sechurae-Estudios-bosques-secos-ca%CC%81maras-trampa-768x512.jpg",
    "fecha": "Jul 06, 2021",
    "url": "https://es.mongabay.com/2021/07/camaras-trampa-captan-fauna-poco-explorada-peru-ecuador/"
  },
  {
    "titulo": "En video | Conozcamos al mono nocturno de Spix en #LaVidaSecretaDeLosAnimales | Episodio 51",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/05164501/MTR_6183_mono_nocturno_andino-%C2%A9Michael_Tweddle-768x512.jpg",
    "fecha": "Jul 02, 2021",
    "url": "https://es.mongabay.com/2021/07/video-mono-nocturno-de-spix-en-lavidasecretadelosanimales/"
  },
  {
    "titulo": "El cóndor andino no pasa por un buen momento en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/28043628/condor1-768x512.jpeg",
    "fecha": "Jun 30, 2021",
    "url": "https://es.mongabay.com/2021/06/condor-andino-amenazado-colombia/"
  },
  {
    "titulo": "Camarón tigre: la especie invasora que acecha a la pesquería de cangrejo azul en Venezuela",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/26015046/Camaron-tigre-Credito-AquafeedCo.jpg",
    "fecha": "Jun 29, 2021",
    "url": "https://es.mongabay.com/2021/06/camaron-tigre-especie-invasora-venezuela/"
  },
  {
    "titulo": "Bolivia: captura de caimán negro enciende alarma sobre la situación de la especie",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/28075639/Caima%CC%81n-negro-Dennis-Lizarro-768x512.jpeg",
    "fecha": "Jun 28, 2021",
    "url": "https://es.mongabay.com/2021/06/bolivia-captura-de-caiman-negro/"
  },
  {
    "titulo": "¿Especies invasoras versus especies nativas?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/10/13175529/DSC_0734-768x472.jpg",
    "fecha": "Jun 27, 2021",
    "url": "https://es.mongabay.com/2021/06/especies-invasoras-versus-especies-nativas/"
  },
  {
    "titulo": "Defensora del agua amenazada de muerte, descubren población de osos de anteojos, deforestación en el Gran Chaco y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/27125719/WhatsApp-Image-2021-06-27-at-7.57.08-AM-768x512.jpeg",
    "fecha": "Jun 27, 2021",
    "url": "https://es.mongabay.com/2021/06/defensora-amenazada-descubren-osos-de-anteojos-deforestacion/"
  },
  {
    "titulo": "Video | ¿Se puede combatir el comercio ilegal de tiburones con pruebas de ADN?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/04215147/ESM_2319-Oceana-Eduardo-Sorensen-Motu-Motiro-Hiva-768x512.jpg",
    "fecha": "Jun 26, 2021",
    "url": "https://es.mongabay.com/2021/06/video-comercio-ilegal-tiburones-pruebas-adn/"
  },
  {
    "titulo": "«El peligro que desaparezca la rana gigante del Titicaca es muy grande»: Jhazel Quispe | Entrevista",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/21082149/Investigacion-Rana-768x512.png",
    "fecha": "Jun 25, 2021",
    "url": "https://es.mongabay.com/2021/06/peru-rana-gigante-del-titicaca-jhazel-quispe/"
  },
  {
    "titulo": "Paraba frente roja: por primera vez se realiza censo en simultáneo de especie en peligro de extinción en Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/18165945/Paraba-frente-roja-ara-rubrogenys-Asociacio%CC%81n-Armoni%CC%81a-768x512.jpg",
    "fecha": "Jun 21, 2021",
    "url": "https://es.mongabay.com/2021/06/bolivia-censo-paraba-frente-roja/"
  },
  {
    "titulo": "Deforestación por minería legal, Premio Goldman, animales en riesgo por contaminación y más",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/10/25235019/%C2%A9-Ian-Dyball-_-Shutterstock.com_-768x512.jpg",
    "fecha": "Jun 20, 2021",
    "url": "https://es.mongabay.com/2021/06/deforestacion-por-mineria-legal-premio-goldman-animales-en-riesgo-por-contaminacion/"
  },
  {
    "titulo": "En video | Conozcamos al oso hormiguero gigante en #LaVidaSecretaDeLosAnimales | Episodio 50",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/07/24181256/PN-El-Impenetrable_Ph_ParquesNacionales_06-768x512.jpg",
    "fecha": "Jun 19, 2021",
    "url": "https://es.mongabay.com/2021/06/video-oso-hormiguero-gigante-en-la-vida-secreta-de-los-animales/"
  },
  {
    "titulo": "Ecuador: invasores intentan vender lotes en una playa vital para la tortuga carey",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/14023519/7B0A5C61-E07A-4CFA-96FA-3F88AD691F0E-copy-768x512.jpeg",
    "fecha": "Jun 16, 2021",
    "url": "https://es.mongabay.com/2021/06/ecuador-invasores-playa-vital-para-tortuga-carey/"
  },
  {
    "titulo": "Galápagos: 36 especies están en riesgo por contaminación con plásticos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/13205824/4-768x512.jpeg",
    "fecha": "Jun 15, 2021",
    "url": "https://es.mongabay.com/2021/06/galapagos-especies-riesgo-contaminacion-plasticos/"
  },
  {
    "titulo": "Estudio en Bolivia estima que casi seis millones de animales murieron en la Chiquitania por los incendios del 2019",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/09/23080924/Incendios-Bolivia-5-Natura-768x512.jpg",
    "fecha": "Jun 11, 2021",
    "url": "https://es.mongabay.com/2021/06/bolivia-seis-millones-animales-calcinados-en-2019/"
  },
  {
    "titulo": "«La situación de conservación y el riesgo de extinción de algunas especies ha empeorado»: Diego Cisneros-Heredia | Entrevista",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/08073600/Explorando-cuevas-en-Gala%CC%81pagos-en-busca-de-aran%CC%83as.-768x512.jpeg",
    "fecha": "Jun 10, 2021",
    "url": "https://es.mongabay.com/2021/06/conservacion-y-riesgo-de-extincion-de-especies-ha-empeorado-entrevista/"
  },
  {
    "titulo": "Los loros tricahue se salvan de la extinción en Chile | Historia gráfica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/09133631/loro-768x450.png",
    "fecha": "Jun 09, 2021",
    "url": "https://es.mongabay.com/2021/06/los-loros-tricahue-se-salvan-de-la-extincion-en-chile-historia-grafica/"
  },
  {
    "titulo": "Chile: dos científicos logran salvar de la extinción a la ranita del Loa",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/04233337/T.dankoi-Pabo-Fibla-768x512.jpg",
    "fecha": "Jun 07, 2021",
    "url": "https://es.mongabay.com/2021/06/chile-logran-salvar-de-la-extincion-a-ranita-del-loa/"
  },
  {
    "titulo": "La primera nutria gigante en más de cien años aparece por sorpresa en el Chaco argentino",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/06/02203438/Screen-Shot-2021-06-02-at-15.28.44-768x512.png",
    "fecha": "Jun 03, 2021",
    "url": "https://es.mongabay.com/2021/06/nutria-gigante-chaco-argentino-animales/"
  },
  {
    "titulo": "México: la historia de los albatros que adoptaron polluelos de otra especie para salvarlos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/29200259/D5S_3624-768x512.jpg",
    "fecha": "Jun 01, 2021",
    "url": "https://es.mongabay.com/2021/06/mexico-albatros-adoptaron-polluelos-de-otra-especie/"
  },
  {
    "titulo": "El efecto negativo de los incendios sobre los pequeños mamíferos de la Orinoquía colombiana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/28222729/Zarigueya-comun-Didelphis-marsupialis.-Foto-Tania-Gonzalez-768x512.jpg",
    "fecha": "Jun 01, 2021",
    "url": "https://es.mongabay.com/2021/06/efecto-negativo-de-incendios-sobre-los-mamiferos-colombia/"
  },
  {
    "titulo": "Expedición virtual: un paseo por la biodiversidad del Parque Nacional Madidi",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/05/30180634/5_BrilliantBlueDragonfly-MS-WCS-768x513.jpg",
    "fecha": "Jun 01, 2021",
    "url": "https://es.mongabay.com/2021/06/expedicion-virtual-biodiversidad-parque-nacional-madidi/"
  },
  {
    "titulo": "¿Cómo registran los científicos los secretos de la vida silvestre de un bosque?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/02/01123730/biodiversidad-ganaderia-animales-conservacion-bosques-5-e1622417666781-768x512.jpg",
    "fecha": "May 31, 2021",
    "url": "https://es.mongabay.com/2021/05/como-registran-los-cientificos-los-secretos-de-la-vida-silvestre/"
  },
  {
    "titulo": "Más de 350 anfibios de Ecuador están en riesgo de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/22053238/Rana-portada-768x450.jpg",
    "fecha": "May 25, 2021",
    "url": "https://es.mongabay.com/2021/05/anfibios-de-ecuador-en-riesgo-de-extincion/"
  },
  {
    "titulo": "Chile: la científica que alertó el riesgo de colisión entre ballenas y barcos en Mejillones",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/21180750/ballena-muerta-por-colisio%CC%81n-768x512.jpg",
    "fecha": "May 24, 2021",
    "url": "https://es.mongabay.com/2021/05/chile-colision-entre-ballenas-y-barcos-en-mejillones/"
  },
  {
    "titulo": "#ExpedicionesCientíficas: La científica que estudia jaguares en zona de conflicto armado",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/12133757/Foto-4-1-768x512.jpeg",
    "fecha": "May 23, 2021",
    "url": "https://es.mongabay.com/2021/05/expedicionescientificas-cientifica-estudia-jaguares-en-zona-de-conflicto/"
  },
  {
    "titulo": "Día de las especies amenazadas: 665 están en peligro crítico de extinción en Sudamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/09210621/mono_andrew_mongabay2-768x512.jpg",
    "fecha": "May 21, 2021",
    "url": "https://es.mongabay.com/2021/05/dia-de-las-especies-amenazadas-665-estan-en-peligro-critico-de-extincion/"
  },
  {
    "titulo": "Kini Roesler: el biólogo argentino que ganó el prestigioso premio Whitley por salvar a un ave endémica de la Patagonia | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/19223249/kini-roesler-maca-tobiano-5-768x512.jpg",
    "fecha": "May 20, 2021",
    "url": "https://es.mongabay.com/2021/05/kini-roesler-gano-el-prestigioso-premio-whitley-entrevista/"
  },
  {
    "titulo": "¿Cómo proteger a las abejas, responsables de la polinización del 75% de los cultivos alimentarios en el mundo?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/18203352/megachile-sp-768x512.jpg",
    "fecha": "May 20, 2021",
    "url": "https://es.mongabay.com/2021/05/como-proteger-a-las-abejas-responsables-de-la-polinizacion-de-cultivos/"
  },
  {
    "titulo": "Perú: cuatro experiencias de comunidades que le hacen frente a la pandemia y conservan su biodiversidad",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/16204516/arahuanas-huitotos-parque-yaguas-4-768x512.jpg",
    "fecha": "May 19, 2021",
    "url": "https://es.mongabay.com/2021/05/peru-comunidades-le-hacen-frente-a-la-pandemia-conservacion/"
  },
  {
    "titulo": "Patagonia chilena: estancia apuesta por la convivencia entre pumas, perros protectores y ganado",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/17150112/Raya-y-cachorros-jugando-Alfredo-Rivera-768x512.jpg",
    "fecha": "May 18, 2021",
    "url": "https://es.mongabay.com/2021/05/patagonia-chilena-convivencia-entre-pumas-y-ganado/"
  },
  {
    "titulo": "Colombia: los campesinos de Norte de Santander ahora son amigos de los felinos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/14162105/Puma-en-Hogar-de-paso-Corponor-768x512.jpg",
    "fecha": "May 17, 2021",
    "url": "https://es.mongabay.com/2021/05/colombia-los-campesinos-de-norte-de-santander-ahora-son-amigos-de-los-felinos/"
  },
  {
    "titulo": "Cuatro experiencias de rescate de aves en peligro de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/11/02195314/Pichones-Guacamayo-Rojo-MatiasRebak-00015-768x512.jpg",
    "fecha": "May 13, 2021",
    "url": "https://es.mongabay.com/2021/05/cuatro-experiencias-de-rescate-de-aves-en-peligro-de-extincion/"
  },
  {
    "titulo": "Aguaymanto: ¿Una fruta que protege al oso andino que habita en el parque Manu de Perú?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/11165453/oso-anteojos-aguaymanto-manu-peru-13-768x512.jpg",
    "fecha": "May 12, 2021",
    "url": "https://es.mongabay.com/2021/05/aguaymanto-fruta-que-protege-al-oso-andino-peru/"
  },
  {
    "titulo": "Argentina: los guanacos vuelven a repoblar un área protegida donde se habían extinguido",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/07151818/Lama_1-768x512.jpg",
    "fecha": "May 10, 2021",
    "url": "https://es.mongabay.com/2021/05/argentina-los-guanacos-vuelven-a-repoblar-un-area-protegida/"
  },
  {
    "titulo": "#ExpedicionesCientíficas​: Delfines rosados: “Los jaguares del agua”",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/10/08015924/dolphin4-768x512.jpg",
    "fecha": "May 09, 2021",
    "url": "https://es.mongabay.com/2021/05/expediciones-cientificas​-delfines-rosados/"
  },
  {
    "titulo": "Día Mundial de las Aves Migratorias: buscando el vuelo directo hacia la conservación",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/04201017/Gavioti%CC%81n-Real_Ave-marina-migratoria-768x512.jpg",
    "fecha": "May 08, 2021",
    "url": "https://es.mongabay.com/2021/05/dia-mundial-de-las-aves-migratorias/"
  },
  {
    "titulo": "Chile: cuatro cosas que debes saber sobre la interacción entre ballenas y barcos en la Patagonia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/11/05073936/ballena-azul-shutterstock-768x512.jpg",
    "fecha": "May 06, 2021",
    "url": "https://es.mongabay.com/2021/05/impactos-interaccion-entre-ballenas-y-barcos-en-chile/"
  },
  {
    "titulo": "Colombia: cientos de aves revelan los secretos de una de las zonas más inexploradas de Córdoba",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/03074145/Glacidium-griseiceps-Central-American-Pygmy-Owl-2-Carlos-Bran-Castrillon-Uraba-Nature-Tours-768x512.jpg",
    "fecha": "May 05, 2021",
    "url": "https://es.mongabay.com/2021/05/colombia-cientos-de-aves-revelan-los-secretos-de-cordoba/"
  },
  {
    "titulo": "Chile: 35 años de exitosa recuperación de los loros tricahue",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/05/03164341/Eduardo-Pavez-3-768x512.jpg",
    "fecha": "May 04, 2021",
    "url": "https://es.mongabay.com/2021/05/chile-exitosa-recuperacion-de-los-loros-tricahue/"
  },
  {
    "titulo": "La estrategia que protege a los albatros de ceja negra en el mar argentino | Historia gráfica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/04/30133036/historia-grafica-albatros-768x450.png",
    "fecha": "Apr 30, 2021",
    "url": "https://es.mongabay.com/2021/04/la-estrategia-que-protege-a-los-albatros-de-ceja-negra-en-el-mar-argentino-historia-grafica/"
  },
  {
    "titulo": "Alerta por el riesgo de desaparición de peces migratorios",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/04/28232535/WhatsApp-Image-2021-04-28-at-18.15.41-768x512.jpeg",
    "fecha": "Apr 29, 2021",
    "url": "https://es.mongabay.com/2021/04/alerta-por-el-riesgo-de-desaparicion-de-peces-migratorios/"
  },
  {
    "titulo": "Chile, Perú y Ecuador se unen para salvar al gaviotín chico en peligro de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/04/27222448/INV_Monitoreo_Pollo-en-Shelter_refugio_pampa1_27-11-2019-5-768x512.jpg",
    "fecha": "Apr 29, 2021",
    "url": "https://es.mongabay.com/2021/04/chile-peru-y-ecuador-se-unen-para-salvar-al-gaviotin-chico-en-peligro-de-extincion/"
  },
  {
    "titulo": "Día Internacional del Tapir: el ‘arquitecto del bosque’ enfrenta la extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/04/24091047/Ca%CC%81maras-trampa-Tapir-11-SBC-768x512.jpg",
    "fecha": "Apr 27, 2021",
    "url": "https://es.mongabay.com/2021/04/dia-internacional-tapir-extincion/"
  },
  {
    "titulo": "Día mundial de los pingüinos: la historia de la bióloga latinoamericana que investigó el origen de la especie",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/04/23150645/WhatsApp-Image-2021-04-15-at-17.18.14-1-768x512.jpeg",
    "fecha": "Apr 25, 2021",
    "url": "https://es.mongabay.com/2021/04/dia-mundial-de-los-pinguinos-la-latinoamericana-que-descubrio-el-origen/"
  },
  {
    "titulo": "Ocho libros recomendados por científicos de Latinoamérica para saber más de animales, epidemias y gérmenes",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/04/23172213/portada-libros-768x450.jpg",
    "fecha": "Apr 23, 2021",
    "url": "https://es.mongabay.com/2021/04/dia-del-libro-ocho-libros-recomendados-por-cientificos-de-latinoamerica/"
  },
  {
    "titulo": "“Sabemos que el envenenamiento es la principal amenaza para el cóndor”: Diego Méndez | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/04/17050745/Trabajando-en-la-estimacio%CC%81n-del-taman%CC%83o-y-estructura-de-las-poblaciones-de-co%CC%81ndor-en-Bolivia_-Cumbre-de-Alisos-Reserva-Nacional-de-Flora-y-Fauna-Tariqui%CC%81a-Tarija.-Foto_Rube%CC%81n-Rami%CC%81rez-768x512.jpg",
    "fecha": "Apr 20, 2021",
    "url": "https://es.mongabay.com/2021/04/bolivia-envenenamiento-amenaza-condor-diego-mendez/"
  },
  {
    "titulo": "Proyecto Tití: el esfuerzo por proteger a un primate y a un bosque en peligro de extinción en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/04/16212911/Foto-3.-Titi%CC%81-cabeciblanco-adulto.-Foto-tomada-por-Lisa-Hoffner.-768x512.jpg",
    "fecha": "Apr 19, 2021",
    "url": "https://es.mongabay.com/2021/04/proyecto-titi-el-esfuerzo-por-proteger-a-un-primate-y-a-un-bosque-en-peligro-de-extincion-en-colombia/"
  },
  {
    "titulo": "“Perú está entre los países con mayor número de rapaces en el mundo”: Renzo Piana | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/04/12091422/RPA-Pomac.-Photo-Michell-Leon-SBC-Peru-768x512.jpg",
    "fecha": "Apr 14, 2021",
    "url": "https://es.mongabay.com/2021/04/peru-entre-los-paises-con-mayor-numero-de-rapaces-renzo-piana-entrevista/"
  },
  {
    "titulo": "Jaguares: «Es muy importante trabajar eliminando la demanda en el continente asiático» | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/03/22161016/Angela-Nunez-768x437.jpg",
    "fecha": "Mar 24, 2021",
    "url": "https://es.mongabay.com/2021/03/si-desaparece-el-jaguar-estariamos-tambien-arriesgando-la-salud-humana-angela-nunez-entrevista/"
  },
  {
    "titulo": "¿Peligra la vida en la Tierra a causa de la pérdida de insectos?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/05162516/vassen-cover-768x512.jpg",
    "fecha": "Mar 20, 2021",
    "url": "https://es.mongabay.com/2021/03/peligra-la-vida-en-la-tierra-a-causa-de-la-perdida-de-insectos/"
  },
  {
    "titulo": "Tráfico de jaguar: tres claves para conocer cómo operan las mafias en Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/01/26235451/Jaguar-fangs-in-Bolivia-768x512.jpg",
    "fecha": "Mar 16, 2021",
    "url": "https://es.mongabay.com/2021/03/trafico-de-jaguar-tres-claves-para-conocer-como-operan-las-mafias-en-bolivia/"
  },
  {
    "titulo": "Javier Vallejos: «Después de mi familia, están los osos de anteojos» | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/03/04114559/Jose%CC%81-Vallejos-768x513.jpg",
    "fecha": "Mar 04, 2021",
    "url": "https://es.mongabay.com/2021/03/javier-vallejos-cazador-fotografia-conservacion-entrevista/"
  },
  {
    "titulo": "«1481 aves en el mundo están en peligro de extinción» | Entrevista a Stuart Butchart",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/19195238/Carpintero-Ahumado-Dryobates-fumigatus-Foto-Luis-Carlos-Mora-768x512.jpg",
    "fecha": "Mar 01, 2021",
    "url": "https://es.mongabay.com/2021/03/conservacion-de-aves-colombia-latinoamerica/"
  },
  {
    "titulo": "Un ‘robot colibrí’ espía a millones de mariposas monarcas y las filma alzando vuelo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/02013343/Screen-Shot-2021-02-02-at-11.21.04-AM-768x512.jpg",
    "fecha": "Feb 28, 2021",
    "url": "https://es.mongabay.com/2021/02/un-robot-colibri-espia-a-millones-de-mariposas-monarcas-y-las-filma-alzando-vuelo/"
  },
  {
    "titulo": "“No es una sorpresa que hay venta de partes de jaguar online, se está convirtiendo en algo importante”: John Polisar | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/25181459/Female-w-cub-Kaa-Iya-National-Park-Bolivia-Gran-Chaco-JCU-Daniel-Alarcon-1-768x512.jpg",
    "fecha": "Feb 26, 2021",
    "url": "https://es.mongabay.com/2021/02/john-polisar-plan-jaguar-2030/"
  },
  {
    "titulo": "Amenaza latente: 34 cóndores mueren envenenados en Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/21080259/Co%CC%81ndor-Bolivia-Juan-de-Dios-Garay-10-768x512.jpeg",
    "fecha": "Feb 25, 2021",
    "url": "https://es.mongabay.com/2021/02/condor-andino-envenenamiento-bolivia/"
  },
  {
    "titulo": "Boris y Bruce: tras las huellas del tráfico de jaguares | Historia gráfica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/16203554/boris-bruce-portada-768x450.jpg",
    "fecha": "Feb 17, 2021",
    "url": "https://es.mongabay.com/2021/02/perros-rastrean-jaguares-en-sudamerica/"
  },
  {
    "titulo": "Expedición virtual a Paracas: un paraíso en el desierto del Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/05012346/Paracas-Gabriel-Herrera-4-768x512.jpg",
    "fecha": "Feb 17, 2021",
    "url": "https://es.mongabay.com/2021/02/expedicion-virtual-a-paracas-un-paraiso-en-el-desierto-del-peru/"
  },
  {
    "titulo": "De las cámaras trampa al ADN ambiental: la tecnología se une a la ciencia para salvar al felino de América",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/14070136/01-%C2%A9-Diego-Perez-_-WWF-Peru%CC%81-1-768x512.jpg",
    "fecha": "Feb 16, 2021",
    "url": "https://es.mongabay.com/2021/02/jaguares-tecnologia-conservacion/"
  },
  {
    "titulo": "Tráfico y minería ilegal acorralan al jaguar en áreas protegidas de Surinam",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/11205126/Poached-near-ricefield-2-768x512.jpg",
    "fecha": "Feb 15, 2021",
    "url": "https://es.mongabay.com/2021/02/trafico-de-jaguar-en-surinam-acecha-areas-naturales-protegidas/"
  },
  {
    "titulo": "Tráfico de jaguares en Bolivia: ¿Dónde están los colmillos?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/05180503/Foto2-1-768x512.jpg",
    "fecha": "Feb 14, 2021",
    "url": "https://es.mongabay.com/2021/02/decomisos-de-colmillos-de-jaguar-en-bolivia-quien-los-custodia/"
  },
  {
    "titulo": "Pruebas de ADN contra el comercio ilegal de tiburones | Historia gráfica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/10124400/c1-768x512.png",
    "fecha": "Feb 10, 2021",
    "url": "https://es.mongabay.com/2021/02/pruebas-de-adn-contra-el-comercio-ilegal-de-tiburones-historia-grafica/"
  },
  {
    "titulo": "México: de caballitos de mar a polvos medicinales y afrodisíacos en China",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/08161126/HK01SEAHORSES_011-768x512.jpg",
    "fecha": "Feb 10, 2021",
    "url": "https://es.mongabay.com/2021/02/mexico-de-caballitos-de-mar-a-polvos-medicinales-y-afrodisiacos-en-china-videos/"
  },
  {
    "titulo": "Científicos identifican seis nuevas especies de peces en una de las áreas más conservadas de la Amazonía",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/01/15082356/2-768x513.png",
    "fecha": "Feb 07, 2021",
    "url": "https://es.mongabay.com/2021/02/brasil-cientificos-seis-nuevas-especies-peces-amazonia/"
  },
  {
    "titulo": "México: científicos detectan especie marina que podría ser nueva para la ciencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/01/12123024/201205-MS-ODG-SA-Possible-new-species-of-Beaked-whale-201205-MS-ODG-SA-2_00x-2-Credit-Simon-Ager-Sea-Shepherd-768x512.jpg",
    "fecha": "Feb 05, 2021",
    "url": "https://es.mongabay.com/2021/02/mexico-expedicion-zifio-nueva-especie/"
  },
  {
    "titulo": "¿Qué se sabe del tráfico de carne de tiburón desde Ecuador? | Historia gráfica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/03144322/c5-768x512.png",
    "fecha": "Feb 04, 2021",
    "url": "https://es.mongabay.com/2021/02/que-se-sabe-del-trafico-de-carne-de-tiburon-desde-ecuador-historia-grafica/"
  },
  {
    "titulo": "Guillermo Blanco: una década tras la pista de la paraba frente roja | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/02/03162220/Paraba-frente-roja-Jose-L.-Tella-5-768x512.jpg",
    "fecha": "Feb 04, 2021",
    "url": "https://es.mongabay.com/2021/02/genetica-paraba-frente-roja-guillermo-blanco/"
  },
  {
    "titulo": "El coyote: un invitado peligroso en Colombia | Historia gráfica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/01/29152141/Portada-coyote-768x450.jpg",
    "fecha": "Jan 29, 2021",
    "url": "https://es.mongabay.com/2021/01/coyote-entrara-a-colombia-sudamerica-historia-garafica/"
  },
  {
    "titulo": "Bolivia: investigación revela que tres grupos criminales internacionales controlan el tráfico de jaguares",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/01/26235200/6-Bolivia-Santa-Cruz-768x512.png",
    "fecha": "Jan 27, 2021",
    "url": "https://es.mongabay.com/2021/01/trafico-de-jaguar-en-bolivia-tres-bandas-internacionales-chinas/"
  },
  {
    "titulo": "«La fotografía puede crear empatía hacia el mar en personas que han vivido alejadas de él»: Anuar Patjane | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/01/20213210/escuela-de-jureles-en-parque-nacional-cabo-pulmo-mexico-768x512.jpg",
    "fecha": "Jan 27, 2021",
    "url": "https://es.mongabay.com/2021/01/la-fotografia-puede-crear-empatia-hacia-el-mar-en-personas-que-han-vivido-alejadas-de-el-anuar-patjane-entrevista/"
  },
  {
    "titulo": "Boris y Bruce: los perros que rastrearán el tráfico de jaguares en Sudamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/01/23001958/Boris-768x512.jpg",
    "fecha": "Jan 26, 2021",
    "url": "https://es.mongabay.com/2021/01/perros-rastrean-jaguar-trafico-vida-silvestre/"
  },
  {
    "titulo": "“Es increíble saber cuánta biodiversidad está aún por descubrirse”: Trond Larsen | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/01/16055544/Trond-Larsen-archivo-personal-768x512.jpeg",
    "fecha": "Jan 26, 2021",
    "url": "https://es.mongabay.com/2021/01/es-increible-saber-cuanta-biodiversidad-esta-aun-por-descubrirse-trond-larsen-entrevista/"
  },
  {
    "titulo": "Expedición virtual a Pampa Galeras: el hogar de las vicuñas en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/12/30065414/Gabriel-Herrera-Pampa-Galeras-WHW_2623-768x512.jpg",
    "fecha": "Jan 15, 2021",
    "url": "https://es.mongabay.com/2021/01/expedicion-virtual-pampa-galeras-vicunas-peru/"
  },
  {
    "titulo": "“Mis máximos maestros han sido los pescadores”: Santiago De la Puente | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2021/01/02084712/Santiago-de-La-Puente-Oce%CC%81anos-24-768x512.jpeg",
    "fecha": "Jan 14, 2021",
    "url": "https://es.mongabay.com/2021/01/oceanos-pescadores-peru-santiago-de-la-puente-entrevista/"
  },
  {
    "titulo": "ENTREVISTAS | Colombia: la bióloga que busca ADN de manatíes en las aguas del Magdalena",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/01/19133028/manat%C3%AD-del-Amazonas-trichechus-inunguis-Federico-Mosquera-768x512.jpg",
    "fecha": "Jan 11, 2021",
    "url": "https://es.mongabay.com/2021/01/colombia-la-biologa-que-busca-adn-de-manaties-en-las-aguas-del-magdalena/"
  },
  {
    "titulo": "Los secretos de la fauna silvestre: las mejores cámaras trampa del 2020",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/09/30022701/GPA_OsoHormiguero-768x512.jpg",
    "fecha": "Dec 29, 2020",
    "url": "https://es.mongabay.com/2020/12/fauna-silvestre-camaras-trampa-2020/"
  },
  {
    "titulo": "Historias en 1 minuto: los mejores vídeos ambientales del 2020",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/07/04230252/Manta-18-768x512.jpg",
    "fecha": "Dec 26, 2020",
    "url": "https://es.mongabay.com/2020/12/historias-en-1-minuto-los-mejores-videos-ambientales-del-2020/"
  },
  {
    "titulo": "Chile: las 10 historias ambientales que marcaron el 2020",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/11/01135221/Nicol_3-768x512.jpeg",
    "fecha": "Dec 23, 2020",
    "url": "https://es.mongabay.com/2020/12/chile-las-10-historias-ambientales-que-marcaron-el-2020/"
  },
  {
    "titulo": "Bolivia: las 10 historias ambientales que marcaron el 2020",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/12/18014642/Bolovia-Madidi-Miguel-Roca-1-768x512.jpg",
    "fecha": "Dec 23, 2020",
    "url": "https://es.mongabay.com/2020/12/bolivia-10-historias-ambientales-2020/"
  },
  {
    "titulo": "Tres claves para conocer la aguerrida historia de los científicos que investigan en isla Guafo | Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/10/22133900/Pascal-537-768x512.jpg",
    "fecha": "Dec 11, 2020",
    "url": "https://es.mongabay.com/2020/12/ciencia-extrema-tres-claves-para-conocer-la-aguerrida-historia-de-los-cientificos-que-investigan-en-isla-guafo-chile/"
  },
  {
    "titulo": "Microrreservas: la estrategia que puede salvar de la extinción al pequeño picaflor de Arica | Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/11/30124852/DSC02165-768x512.jpg",
    "fecha": "Dec 09, 2020",
    "url": "https://es.mongabay.com/2020/12/microrreservas-la-estrategia-que-puede-salvar-de-la-extincion-al-pequeno-picaflor-de-arica-chile/"
  },
  {
    "titulo": "Costa Rica: el lugar donde las ballenas mejoraron la calidad de vida de los pescadores | Entrevista",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/01/17202329/Gorgona-ballenas-768x428.jpg",
    "fecha": "Nov 29, 2020",
    "url": "https://es.mongabay.com/2020/11/costa-rica-el-lugar-donde-las-ballenas-mejoraron-la-calidad-vida-de-los-pescadores-entrevista/"
  },
  {
    "titulo": "Argentina: incendio forestal castiga uno de los últimos tesoros naturales del Bosque Atlántico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/11/27195357/WhatsApp-Image-2020-11-25-at-22.46.04-1-768x512.jpeg",
    "fecha": "Nov 28, 2020",
    "url": "https://es.mongabay.com/2020/11/argentina-incendio-forestal-castiga-uno-de-los-ultimos-tesoros-naturales-del-bosque-atlantico/"
  },
  {
    "titulo": "El sorprendente viaje del zarapito de pico recto | Historia gráfica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/11/26210845/c6-768x512.png",
    "fecha": "Nov 26, 2020",
    "url": "https://es.mongabay.com/2020/11/el-sorprendente-viaje-del-zarapito-de-pico-recto-historia-grafica/"
  },
  {
    "titulo": "“La perturbación humana tiene efectos negativos en las áreas naturales protegidas”: Gonzalo Cisternas, guardaparque en Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/11/23121058/Gonzalo-Cisternas-guardaparques-Torres-del-Paine-Chile-3-768x512.jpg",
    "fecha": "Nov 24, 2020",
    "url": "https://es.mongabay.com/2020/11/chile-parque-nacional-torres-paine-gonzalo-cisternas-guardaparque/"
  },
  {
    "titulo": "Las aventuras de Palca: científicos siguen por año y medio a un cóndor andino",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/09/30182720/Palca-Rob-Wallace-WCS-768x512.jpg",
    "fecha": "Nov 21, 2020",
    "url": "https://es.mongabay.com/2020/11/la-ruta-de-los-animales-cientificos-siguen-por-ano-y-medio-a-un-condor-andino-llamado-palca/"
  },
  {
    "titulo": "Chile: ¿qué pasó con los 17 tiburones en peligro hallados en un vertedero clandestino?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/11/17231601/WhatsApp-Image-2020-11-09-at-10.34.54-768x512.jpeg",
    "fecha": "Nov 18, 2020",
    "url": "https://es.mongabay.com/2020/11/chile-que-paso-con-los-17-tiburones-en-peligro-hallados-en-un-vertedero-clandestino/"
  },
  {
    "titulo": "Argentina: científicos hallan plásticos en el intestino de una ballena franca austral varada en reserva marina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/11/13000726/DSC_0296-768x512.jpg",
    "fecha": "Nov 16, 2020",
    "url": "https://es.mongabay.com/2020/11/argentina-plasticos-ballena-franca-austral-reserva-marina/"
  },
  {
    "titulo": "Ximena Vélez: la bióloga marina que une ecología con genética para proteger el océano",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/11/11222555/xvz_scuba-768x512.jpg",
    "fecha": "Nov 14, 2020",
    "url": "https://es.mongabay.com/2020/11/ximena-velez-la-biologa-marina-que-une-ecologia-con-genetica-para-proteger-el-oceano/"
  },
  {
    "titulo": "Recuperar las poblaciones de ballenas sería clave en la lucha contra el cambio climático",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/05/31180254/Right-whales-in-Patagonia-Photo-Mariano-Sironi-2007-768x512.jpg",
    "fecha": "Nov 11, 2020",
    "url": "https://es.mongabay.com/2020/11/recuperar-las-poblaciones-de-ballenas-seria-clave-en-la-lucha-contra-el-cambio-climatico/"
  },
  {
    "titulo": "Las aventuras de Coco el tiburón ballena | Historia gráfica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/11/02165559/c2-768x512.jpg",
    "fecha": "Nov 03, 2020",
    "url": "https://es.mongabay.com/2020/11/las-aventuras-de-coco-el-tiburon-ballena-historia-grafica/"
  },
  {
    "titulo": "Cámaras trampa revelan los secretos de la “Depresión de Huancabamba” en el Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/10/27203239/Tapir-de-montan%CC%83a-SBC-768x512.png",
    "fecha": "Oct 29, 2020",
    "url": "https://es.mongabay.com/2020/10/peru-bosques-montanos-camaras-trampa/"
  },
  {
    "titulo": "La flota china que cercó Galápagos | Historia gráfica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/10/26205338/04-2-768x512.png",
    "fecha": "Oct 27, 2020",
    "url": "https://es.mongabay.com/2020/10/la-flota-china-que-cerco-galapagos-historia-grafica/"
  },
  {
    "titulo": "Pesca para el cambio: la gestión de los peces más grandes de la Amazonía empodera a las mujeres",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/09/24145834/Arapaima-and-fisherman-2-1200x800-1-768x512.jpg",
    "fecha": "Oct 17, 2020",
    "url": "https://es.mongabay.com/2020/10/pesca-para-el-cambio-la-gestion-de-los-peces-mas-grandes-de-la-amazonia-empodera-a-las-mujeres/"
  },
  {
    "titulo": "Las ranas le ganan una batalla judicial a la minería en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/10/09173411/Foto-2-768x512.jpeg",
    "fecha": "Oct 13, 2020",
    "url": "https://es.mongabay.com/2020/10/ranas-le-ganan-a-la-mineria-en-ecuador/"
  },
  {
    "titulo": "Perú: descubren nueva especie de lagartija en los bosques fragmentados de Huancabamba",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/09/30144429/Screen-Shot-2020-09-30-at-09.43.01-768x512.png",
    "fecha": "Sep 30, 2020",
    "url": "https://es.mongabay.com/2020/09/peru-nueva-especie-lagartija-bosques-fragmentados-huancabamba/"
  },
  {
    "titulo": "Argentina: la increíble biodiversidad de El Impenetrable grabada en cámaras trampa | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/11/27162357/PN-El-Impenetrable_Ph_ParquesNacionales_07-768x512.jpg",
    "fecha": "Sep 29, 2020",
    "url": "https://es.mongabay.com/2020/09/argentina-la-increible-biodiversidad-de-el-impenetrable-grabada-en-camaras-trampa-videos/"
  },
  {
    "titulo": "Colombia: los secretos del Parque El Tuparro descubiertos a través de 44 cámaras trampa",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/09/27150752/RCNX0142-768x512.jpg",
    "fecha": "Sep 28, 2020",
    "url": "https://es.mongabay.com/2020/09/parque-nacional-el-tuparro-colombia-presiones-y-conservacion/"
  },
  {
    "titulo": "Video | ¿Qué es la lista roja de la UICN? #MongabayExplica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/03/29201408/3fa6261a-gp0stpaf5-768x512.jpg",
    "fecha": "Sep 23, 2020",
    "url": "https://es.mongabay.com/2020/09/video-lista-roja-de-la-uicn/"
  },
  {
    "titulo": "Chile: el parque Archipiélago de Juan Fernández se defiende de las especies invasoras",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/09/21182726/Isla-Robinson-Crusoe_Hector-Gutierrez-768x512.jpg",
    "fecha": "Sep 22, 2020",
    "url": "https://es.mongabay.com/2020/09/chile-parque-archipielago-juan-fernandez-especies-invasoras/"
  },
  {
    "titulo": "Fiestas patrias en Chile: la biodiversidad celebrada en cuatro historias",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/05170316/patagoniaphotosafaris1-768x512.jpg",
    "fecha": "Sep 18, 2020",
    "url": "https://es.mongabay.com/2020/09/fiestas-patrias-chile-biodiversidad/"
  },
  {
    "titulo": "Tres estrategias de conservación para salvar a las aves migratorias del Pacífico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/07/06204818/Brad-Winn_Calidris-mauri-768x512.jpg",
    "fecha": "Sep 15, 2020",
    "url": "https://es.mongabay.com/2020/09/estrategias-de-conservacion-para-salvar-a-las-aves-migratorias-del-pacifico/"
  },
  {
    "titulo": "Informe Planeta Vivo: América Latina y el Caribe enfrentan la mayor reducción de especies y hábitats",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/09/09224722/Planeta-Vivo-WWF-768x511.jpg",
    "fecha": "Sep 09, 2020",
    "url": "https://es.mongabay.com/2020/09/informe-planeta-vivo-america-latina-y-el-caribe-enfrentan-la-mayor-reduccion-de-especies-y-habitats/"
  },
  {
    "titulo": "El Teuco: así funciona una estación científica en el corazón del Gran Chaco argentino | Cámaras trampa",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/09/09143442/Alejandro-Serrano-en-laboratorio-Impenetrable-Fundacion-Rewilding-Argentina-768x512.jpg",
    "fecha": "Sep 09, 2020",
    "url": "https://es.mongabay.com/2020/09/el-teuco-gran-chaco-argentina-camaras-trampa/"
  },
  {
    "titulo": "Cámaras trampa: animales difíciles de ver en los bosques de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/09/06234429/MTF_0446_golden_spectacled_bear_%C2%A9michael_tweddle-768x428.jpg",
    "fecha": "Sep 07, 2020",
    "url": "https://es.mongabay.com/2020/09/camara-trampa-animales-bosques-latinoamerica/"
  },
  {
    "titulo": "Tráfico de jaguares: «Lo más importante ya no es la piel, sino los colmillos y los huesos» | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/09/05231444/Andrea-Crosta-portada-768x512.jpg",
    "fecha": "Sep 07, 2020",
    "url": "https://es.mongabay.com/2020/09/andrea-crosta-trafico-de-jaguar-latinoamerica/"
  },
  {
    "titulo": "Coyotes, jaguares y resistencia frente al COVID-19: la semana ambiental del 24 al 28 de agosto",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/08/24054027/EK000053-768x512.jpg",
    "fecha": "Aug 29, 2020",
    "url": "https://es.mongabay.com/2020/08/coyotes-jaguares-covid-19-semana-ambiental/"
  },
  {
    "titulo": "VIDEO |  ¿Por qué el jaguar está en la mira de los traficantes? #MongabayExplica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/09/03172029/El-parque-Madidi-tiene-una-poblacion-de-300-jaguares-498x330.png",
    "fecha": "Aug 27, 2020",
    "url": "https://es.mongabay.com/2020/08/mongabay-explica-trafico-jaguar/"
  },
  {
    "titulo": "Bolivia: Tribunal de la Naturaleza culpa a Morales y Añez por incendios del 2019",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/22200049/incendios-bolivia-4-IMG-20190821-WA0227-768x512.jpg",
    "fecha": "Aug 24, 2020",
    "url": "https://es.mongabay.com/2020/08/bolivia-tribunal-de-la-naturaleza-culpa-a-morales-y-anez-por-incendios-del-2019/"
  },
  {
    "titulo": "Luciérnagas iluminan la conservación de un bosque en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/08/15021917/Lucie%CC%81rnagas-5-768x512.jpg",
    "fecha": "Aug 17, 2020",
    "url": "https://es.mongabay.com/2020/08/luciernagas-iluminan-la-conservacion-de-un-bosque-en-mexico/"
  },
  {
    "titulo": "México: los bosques que dan una esperanza al pecarí de labios blancos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/08/05164204/PecariLB-05-768x512.jpg",
    "fecha": "Aug 11, 2020",
    "url": "https://es.mongabay.com/2020/08/mexico-los-bosques-que-dan-una-esperanza-al-pecari-de-labios-blancos/"
  },
  {
    "titulo": "Los sonidos de la reserva Yátaros: un tesoro para la investigación biológica en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/08/07200252/Yataros10-768x512.jpg",
    "fecha": "Aug 10, 2020",
    "url": "https://es.mongabay.com/2020/08/investigacion-acustica-investigacion-biologica-con-sonidos-en-colombia/"
  },
  {
    "titulo": "Candid Animal Cam: conozcamos al dhole | Episodio 19 | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/08/06224518/Foto-CandidAnimalCam-episodio-19-768x422.jpg",
    "fecha": "Aug 07, 2020",
    "url": "https://es.mongabay.com/2020/08/candid-animal-cam-conozcamos-al-dhole-episodio-19-video/"
  },
  {
    "titulo": "Libro rojo: cinco claves sobre la situación de la fauna silvestre amenazada en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/07/06004017/Nuevo-Oso-Andino-4-SBC-Peru-768x512.jpg",
    "fecha": "Aug 06, 2020",
    "url": "https://es.mongabay.com/2020/08/libro-rojo-fauna-silvestre-amenazada-peru/"
  },
  {
    "titulo": "‘Qaramta’: Crónica de un jaguar enamorado",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/08/02025247/jaguares-chaco-portada-768x512.png",
    "fecha": "Aug 03, 2020",
    "url": "https://es.mongabay.com/2020/08/gran-chaco-argentino-jaguar-qaramta-videos-camaras-trampa/"
  },
  {
    "titulo": "Argentina: corredores biológicos para salvar el Chaco no avanzan pese a donaciones internacionales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/07/24181153/Gerardo-Cer%C3%B3n-El-Impenetrable-tapir-2019-103-2-1-768x512.jpg",
    "fecha": "Jul 27, 2020",
    "url": "https://es.mongabay.com/2020/07/argentina-corredores-biologicos-chaco-no-avanzan/"
  },
  {
    "titulo": "Más del 80% de los tiburones que se extraen en Chile son juveniles | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/07/19221713/DSC_1626-768x512.jpg",
    "fecha": "Jul 20, 2020",
    "url": "https://es.mongabay.com/2020/07/chile-oceanos-carlos-bustamante-tiburones-entrevista/"
  },
  {
    "titulo": "Pac-man, el jaguar que delató a traficantes chinos en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/02/10224747/Pac-Man-Medelli%CC%81n.jpg",
    "fecha": "Jul 13, 2020",
    "url": "https://es.mongabay.com/2020/07/mexico-pac-man-el-jaguar-trafico-ilegal/"
  },
  {
    "titulo": "Argentina: instalación de cercos salva relación entre ganaderos y jaguares | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/14230159/jaguares-america-del-sur-trafico-3-768x512.jpg",
    "fecha": "Jul 10, 2020",
    "url": "https://es.mongabay.com/2020/07/argentina-jaguar-yaguarete-cercos-ganaderos-misiones-video/"
  },
  {
    "titulo": "Tigre: el perro que rastrea felinos para impulsar su conservación en Costa Rica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/07/01000652/Gira-by-Ian-Thomson-9-768x513.jpg",
    "fecha": "Jul 09, 2020",
    "url": "https://es.mongabay.com/2020/07/perro-rastreador-de-felinos-conservacion-costa-rica/"
  },
  {
    "titulo": "Aves migratorias: 13 países se unen para proteger sus viajes por América",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/07/06204822/Brad-Winn_Limosa-haemastica_Flock-768x512.jpg",
    "fecha": "Jul 08, 2020",
    "url": "https://es.mongabay.com/2020/07/oceanos-aves-playeras-red-continental-conservacion/"
  },
  {
    "titulo": "Así descubrieron en Ecuador a la población de mantas gigantes más grande del mundo | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/07/04232802/mantas-oceana-768x512.jpg",
    "fecha": "Jul 07, 2020",
    "url": "https://es.mongabay.com/2020/07/ecuador-mantas-gigantes-michael-guerrero-entrevista-videos/"
  },
  {
    "titulo": "México: la comunidad que cuida a las orquídeas y usa cámaras trampa para conocer la fauna de sus bosques",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/27202537/ORQUIDEAS_IXTLAN-DIEGO-768x512.jpg",
    "fecha": "Jul 01, 2020",
    "url": "https://es.mongabay.com/2020/07/mexico-bosques-de-ixtlan-de-juarez-oaxaca-camaras-trampa-video/"
  },
  {
    "titulo": "Argentina: cuarentena impide que ranitas de valcheta vuelvan a su hogar",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/25230406/unnamed-768x512.jpg",
    "fecha": "Jun 30, 2020",
    "url": "https://es.mongabay.com/2020/06/argentina-cuarentena-impide-que-ranitas-de-valcheta-vuelvan-a-su-hogar/"
  },
  {
    "titulo": "Cámaras trampa muestran por primera vez al perro de monte en Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/26213134/Pero-de-monte-Mongabay-.jpg",
    "fecha": "Jun 30, 2020",
    "url": "https://es.mongabay.com/2020/06/bolivia-perro-de-monte-camaras-trampa-video/"
  },
  {
    "titulo": "Bolivia: investigadores le siguen el rastro a la paraba barba azul",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/22223600/Paraba-Barba-Azul-Tjalle-Boorsma-Armoni%CC%81a-768x512.jpg",
    "fecha": "Jun 23, 2020",
    "url": "https://es.mongabay.com/2020/06/bolivia-investigacion-paraba-barba-azul/"
  },
  {
    "titulo": "Ecuador prohibirá la comercialización y exportación de cinco especies de tiburones amenazados de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/05/11023012/1-1.jpg",
    "fecha": "Jun 18, 2020",
    "url": "https://es.mongabay.com/2020/06/oceanos-pesca-de-tiburones-ecuador-prohibira-comercializacion-exportacion/"
  },
  {
    "titulo": "Jaguares: el reloj juega en contra para el gran felino de América",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/16203748/jaguares-america-del-sur-trafico-4-1-768x512.jpg",
    "fecha": "Jun 17, 2020",
    "url": "https://es.mongabay.com/2020/06/jaguares-america-del-sur-trafico-conservacion/"
  },
  {
    "titulo": "Pechiche: el árbol que puede salvar al segundo colibrí más pequeño del mundo en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/15000831/Foto5-768x512.jpg",
    "fecha": "Jun 16, 2020",
    "url": "https://es.mongabay.com/2020/06/conservacion-de-aves-colibri-ecuador/"
  },
  {
    "titulo": "Expedición virtual a las profundidades del mar de Chile: las sorprendentes imágenes de Eduardo Sorensen",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/04215058/ESM5166-Eduardo-Sorensen-Rapa-nui-768x513.jpg",
    "fecha": "Jun 15, 2020",
    "url": "https://es.mongabay.com/2020/06/oceanos-expediciones-las-increibles-imagenes-submarinas-de-eduardo-sorensen/"
  },
  {
    "titulo": "Salvar a una rana gigante, pero también al Lago Titicaca",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/11/09195758/plan_conservacion_mongabay-8-493x330.jpg",
    "fecha": "Jun 11, 2020",
    "url": "https://es.mongabay.com/2020/06/peru-bolivia-rana-gigante-del-lago-titicaca/"
  },
  {
    "titulo": "Quince años monitoreando primates en el parque Yasuní de Ecuador | Entrevista a Galo Zapata-Ríos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/07033208/RCueva_Titi-rojiso-Pleuturocebus-discolor-768x512.jpg",
    "fecha": "Jun 10, 2020",
    "url": "https://es.mongabay.com/2020/06/conservacion-de-primates-en-ecuador-parque-yasuni/"
  },
  {
    "titulo": "Chile: el Rayadito de isla Selkirk se recupera de su estado crítico en casitas artificiales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/04232029/eBird-768x512.jpg",
    "fecha": "Jun 09, 2020",
    "url": "https://es.mongabay.com/2020/06/chile-el-rayadito-de-isla-selkirk-se-recupera-casitas-artificiales/"
  },
  {
    "titulo": "Nicaragua y COVID-19: temen saqueo masivo de huevos de tortugas ante disminución de vigilancia en playas | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/08/17130821/IMG_2787-768x512.jpg",
    "fecha": "Jun 03, 2020",
    "url": "https://es.mongabay.com/2020/06/oceanos-covid-19-pone-en-peligro-a-las-tortugas-de-nicaragua-video/"
  },
  {
    "titulo": "Perú: la batalla por salvar a las vicuñas de la caza furtiva en medio de la pandemia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/06/02041610/vicu%C3%B1as-covid-caza-peru-22-768x512.jpg",
    "fecha": "Jun 02, 2020",
    "url": "https://es.mongabay.com/2020/06/vicunas-caza-furtiva-covid-19-conservacion-peru/"
  },
  {
    "titulo": "Eugui Roy Martínez: la increíble vida del biólogo asesinado en Loxicha | México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/05/20225906/Foto-Eugui-Cover-768x450.jpg",
    "fecha": "May 25, 2020",
    "url": "https://es.mongabay.com/2020/05/eugui-biologo-asesinado-en-mexico/"
  },
  {
    "titulo": "Día Mundial de las Tortugas: cuidar nidos y evitar que la bella carey desaparezca del océano",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/05/18033814/Foto5-768x512.jpg",
    "fecha": "May 23, 2020",
    "url": "https://es.mongabay.com/2020/05/conservacion-tortugas-carey-ecuador-dia-mundial/"
  },
  {
    "titulo": "Sin turismo no hay dinero: COVID-19 detiene el 60% de los ingresos de Galápagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/10/27152028/37207560725_29133c97f2_o-768x512.jpg",
    "fecha": "May 21, 2020",
    "url": "https://es.mongabay.com/2020/05/ecuador-turismo-en-galapagos-covid-19/"
  },
  {
    "titulo": "La carrera por salvar especies amenazadas en tiempos de COVID-19",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/05/18181752/Plecturocebus-modestus-Jesus-Martinez-WCS-768x512.jpg",
    "fecha": "May 21, 2020",
    "url": "https://es.mongabay.com/2020/05/la-carrera-por-salvar-especies-amenazadas-en-tiempos-de-covid-19/"
  },
  {
    "titulo": "Diego Barrales: el biólogo que usa la ciencia y Twitter para salvar arácnidos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/04/26010759/Diego-Barrales-Alcala-4-768x512.jpg",
    "fecha": "Apr 29, 2020",
    "url": "https://es.mongabay.com/2020/04/diego-barrales-ciencia-y-twitter-para-salvar-aracnidos/"
  },
  {
    "titulo": "Carlos Zambrana –Torrelio: “La deforestación va a producir nuevas enfermedades como el coronavirus”",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/06/26022945/4-768x512.jpg",
    "fecha": "Apr 28, 2020",
    "url": "https://es.mongabay.com/2020/04/entrevista-zambrana-torrelio-deforestacion-coronavirus-covid-19/"
  },
  {
    "titulo": "Día Internacional del Tapir: las amenazas que enfrenta el gran arquitecto de los bosques",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/04/24164647/Ca%CC%81mara-trampa-tapir-WWF-768x512.jpg",
    "fecha": "Apr 27, 2020",
    "url": "https://es.mongabay.com/2020/04/dia-internacional-tapir-amenazas-estudio/"
  },
  {
    "titulo": "Día mundial de los Pingüinos: retrocede la población de una de sus especies más emblemáticas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/04/18184251/mtr_3791_marcona-foto_michael_tweddle-768x512.jpg",
    "fecha": "Apr 25, 2020",
    "url": "https://es.mongabay.com/2020/04/dia-mundial-de-los-pinguinos-retrocede-la-poblacion-de-una-de-sus-especies-mas-emblematicas/"
  },
  {
    "titulo": "Tecnología permite que las aves marinas detecten pesca ilegal | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/04/14215816/UNADJUSTEDNONRAW_thumb_1e8b-768x512.jpg",
    "fecha": "Apr 16, 2020",
    "url": "https://es.mongabay.com/2020/04/entrevista-carlos-zavalaga-el-uso-de-tecnologia-en-investigacion-de-aves-marinas/"
  },
  {
    "titulo": "Ecuador: la hazaña de conservar murciélagos en medio de los prejuicios",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/04/12161627/Foto-5-768x512.jpg",
    "fecha": "Apr 13, 2020",
    "url": "https://es.mongabay.com/2020/04/conservacion-de-murcielagos-en-ecuador-areas-protegidas/"
  },
  {
    "titulo": "Bolivia: refugios de fauna silvestre en crisis por coronavirus",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/07150629/Senda-Verde-25-768x512.jpg",
    "fecha": "Apr 06, 2020",
    "url": "https://es.mongabay.com/2020/04/bolivia-refugios-animales-coronavirus/"
  },
  {
    "titulo": "Irma Franke: cuatro décadas destinadas al estudio de las aves en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/03/31213511/Con-Tristan-Davis-y-John-O%E2%80%99Neill-en-el-campamento-de-Millpo-expedicio%CC%81n-de-LSU-de-1985-Foto-Tristan-Davis-768x512.jpg",
    "fecha": "Apr 01, 2020",
    "url": "https://es.mongabay.com/2020/04/irma-franke-cuatro-decadas-destinadas-al-estudio-de-las-aves-en-peru/"
  },
  {
    "titulo": "En defensa de los murciélagos: resistentes a los virus, pero no a los humanos | Coronavirus",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/03/30040522/malaysia-BAts-Rhett-759x512.jpg",
    "fecha": "Mar 31, 2020",
    "url": "https://es.mongabay.com/2020/03/coronavirus-murcielagos-humanos-virus-covid-19/"
  },
  {
    "titulo": "Pumas, zorros y otros animales exploran ciudades latinoamericanas durante la pandemia del COVID-19 | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/03/29225244/puma-chile-2-768x512.jpeg",
    "fecha": "Mar 30, 2020",
    "url": "https://es.mongabay.com/2020/03/animales-silvestres-coronavirus-llegan-a-las-ciudades-de-latinoamerica/"
  },
  {
    "titulo": "Conoce al científico que observó  ataques de orcas a ballenas durante 30 años",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/11/25170326/JC-trabajando-768x512.jpg",
    "fecha": "Mar 27, 2020",
    "url": "https://es.mongabay.com/2020/03/juan-capella-ataque-de-orcas-a-ballenas-entrevista-video/"
  },
  {
    "titulo": "Día Mundial del Clima y la Adaptación al Cambio Climático: las lecciones del coronavirus",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/05/03172830/TAMARIN-MONKEY-520x325.jpg",
    "fecha": "Mar 26, 2020",
    "url": "https://es.mongabay.com/2020/03/dia-mundial-del-clima-y-la-adaptacion-al-cambio-climatico-las-lecciones-del-coronavirus/"
  },
  {
    "titulo": "Tráfico ilegal: el impacto que tiene la demanda asiática en cinco especies",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/10/07080806/Aletas-de-tiburon-XI-Oceana-768x512.jpg",
    "fecha": "Mar 20, 2020",
    "url": "https://es.mongabay.com/2020/03/trafico-ilegal-de-vida-silvestre/"
  },
  {
    "titulo": "Día Mundial del Agua: ocho historias sobre los recursos hídricos de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/03/20193633/amazon_200260-768x512.jpg",
    "fecha": "Mar 20, 2020",
    "url": "https://es.mongabay.com/2020/03/dia-mundial-del-agua/"
  },
  {
    "titulo": "Mariposa Monarca: ¿por qué disminuyó este año su presencia en los bosques mexicanos?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/03/16095955/Mariposa-Monarca-4-768x512.jpg",
    "fecha": "Mar 19, 2020",
    "url": "https://es.mongabay.com/2020/03/mariposa-monarca-en-bosques-mexicanos/"
  },
  {
    "titulo": "Polillas nocturnas: las polinizadoras ignoradas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/03/02192504/Nueva-especie-Polilla.jpg",
    "fecha": "Mar 04, 2020",
    "url": "https://es.mongabay.com/2020/03/polillas-nocturnas-nueva-especie/"
  },
  {
    "titulo": "Contra la extinción: cómo se lucha por salvar a osos andinos, jaguares, lobos grises y ballenas azules",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/09201846/Miguel-Armella1-768x512.jpg",
    "fecha": "Mar 03, 2020",
    "url": "https://es.mongabay.com/2020/03/salvar-osos-andinos-jaguares-lobos-ballenas/"
  },
  {
    "titulo": "Colombia: campesinos del sur del Huila instalan cámaras trampa y registran osos, dantas y pumas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/02/22184303/OSO-APERTURA-768x450.jpg",
    "fecha": "Mar 02, 2020",
    "url": "https://es.mongabay.com/2020/03/camaras-trampa-en-el-sur-de-colombia-osos-dantas-pumas/"
  },
  {
    "titulo": "Venezuela: la científica que estudia a los jaguares en medio de un conflicto armado",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/07193144/jaguares-venezuela-amenazas-zulia-20-768x512.jpg",
    "fecha": "Mar 02, 2020",
    "url": "https://es.mongabay.com/2020/03/venezuela-maria-fernanda-puerto-jaguares-entrevista-video/"
  },
  {
    "titulo": "Gerardo Ceballos: “Somos la última generación que puede revertir la acelerada extinción de especies”",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/02/25141000/Calakmul-768x512.jpg",
    "fecha": "Feb 26, 2020",
    "url": "https://es.mongabay.com/2020/02/gerardo-ceballos-revertir-la-acelerada-extincion-de-especies/"
  },
  {
    "titulo": "La apuesta de un científico mexicano por salvar al ‘tiburón sierra’ | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/02/09031321/Ramo%CC%81n-Bonfil-3-768x512.jpeg",
    "fecha": "Feb 12, 2020",
    "url": "https://es.mongabay.com/2020/02/mexico-salvar-al-tiburon-sierra-ramon-bonfil-entrevista/"
  },
  {
    "titulo": "Una cría de mono araña da esperanza al Parque Nacional Cañón del Sumidero en México | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/01/10191625/Archivo-CONANP-PNCS-Cri%CC%81a-de-Mono-Aran%CC%83a-2-768x512.jpg",
    "fecha": "Jan 20, 2020",
    "url": "https://es.mongabay.com/2020/01/una-cria-de-mono-arana-da-esperanza-al-parque-nacional-canon-del-sumidero-en-mexico-i-video/"
  },
  {
    "titulo": "Mongabay Latam: las entrevistas que impactaron en el 2019",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/12215213/3.png",
    "fecha": "Dec 30, 2019",
    "url": "https://es.mongabay.com/2019/12/mongabay-latam-las-entrevistas-que-impactaron-en-el-2019/"
  },
  {
    "titulo": "Lo que nos deja el 2019: el año ambiental en 12 fotografías",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/11/06200632/tierra-de-resistentes-patricia-gualinga-5-17-768x512.jpg",
    "fecha": "Dec 30, 2019",
    "url": "https://es.mongabay.com/2019/12/balance-2019-el-ano-ambiental-en-12-fotos/"
  },
  {
    "titulo": "El campanero blanco macho de la Amazonía y su ruidoso llamado | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/11/11201745/1-3-768x512.jpg",
    "fecha": "Dec 27, 2019",
    "url": "https://es.mongabay.com/2019/12/campanero-blanco-llamada-mas-ruidosa-video/"
  },
  {
    "titulo": "Perú: una nueva especie de mantis religiosa imita a una avispa",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/11/07045236/Screen-Shot-2019-11-07-at-2.57.11-PM-768x512.jpg",
    "fecha": "Dec 21, 2019",
    "url": "https://es.mongabay.com/2019/12/mantis-religiosa-imita-avispa/"
  },
  {
    "titulo": "Venezuela: las siete historias ambientales más leídas del 2019",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/07193018/jaguares-venezuela-amenazas-zulia-5-768x512.jpg",
    "fecha": "Dec 18, 2019",
    "url": "https://es.mongabay.com/2019/12/venezuela-las-siete-historias-ambientales-mas-leidas-del-2019/"
  },
  {
    "titulo": "Los 10 reportajes ambientales más leídos del Perú en 2019",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/04/04095324/Peque-draga-ri%CC%81o-Napo-Yvette-Sierra-Praeli-11-768x512.jpg",
    "fecha": "Dec 17, 2019",
    "url": "https://es.mongabay.com/2019/12/peru-10-reportajes-2019/"
  },
  {
    "titulo": "Los 10 reportajes ambientales más leídos de Bolivia en 2019",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/30235721/incendios-bolivia-1-768x512.jpg",
    "fecha": "Dec 16, 2019",
    "url": "https://es.mongabay.com/2019/12/mongabay-latam-los-10-reportajes-ambientales-mas-leidos-de-bolivia-en-2019/"
  },
  {
    "titulo": "Panthera: «al menos 500 jaguares perdieron su hábitat o murieron en los incendios de la Amazonía»",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/12/07123829/animals_04898-768x512.jpg",
    "fecha": "Dec 07, 2019",
    "url": "https://es.mongabay.com/2019/12/jaguares-en-incendios-amazonia/"
  },
  {
    "titulo": "Se publica primera guía sobre los reptiles de Galápagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/11/25151023/nueva_especie_phyllodactylus_andysabini-1200x800-1-768x512.jpg",
    "fecha": "Dec 06, 2019",
    "url": "https://es.mongabay.com/2019/12/ecuador-nuevas-especies-en-galapagos/"
  },
  {
    "titulo": "Bolivia: refugios de animales silvestres en crisis por el caos político y social",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/12/02103552/Animales-rescatados-Agroflori-2-768x512.jpg",
    "fecha": "Dec 05, 2019",
    "url": "https://es.mongabay.com/2019/12/bolivia-ciris-refugios-animales-silvestres/"
  },
  {
    "titulo": "Venezuela: la batalla por salvar a las ranitas merideñas en medio de la crisis",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/12/01143007/Aromobates-meridensis-768x512.jpg",
    "fecha": "Dec 03, 2019",
    "url": "https://es.mongabay.com/2019/12/venezuela-salvan-ranitas-meridenas-en-medio-de-la-crisis/"
  },
  {
    "titulo": "¿Crees que comes bacalao? Nuevo informe revela que los mexicanos están comiendo tiburón",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/11/26164005/TIBURO%CC%81N-PUNTAS-NEGRAS-768x512.jpeg",
    "fecha": "Dec 02, 2019",
    "url": "https://es.mongabay.com/2019/12/pesca-de-tiburon-en-mexico/"
  },
  {
    "titulo": "Rodrigo Barahona: «La idea es que los zoológicos se conviertan en centros de rescate de fauna nativa»",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/03/27015454/45-768x512.jpg",
    "fecha": "Nov 29, 2019",
    "url": "https://es.mongabay.com/2019/11/el-rol-de-los-zoologicos/"
  },
  {
    "titulo": "México: así esta comunidad se reencontró con animales de sus tierras | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/11/18043625/Comunidad-768x512.jpeg",
    "fecha": "Nov 19, 2019",
    "url": "https://es.mongabay.com/2019/11/camaras-trampa-en-mexico-oaxaca-animales/"
  },
  {
    "titulo": "Peces loro ingresan a la lista de especies en riesgo | México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/11/08224825/Pez-Loro-3-768x512.jpg",
    "fecha": "Nov 14, 2019",
    "url": "https://es.mongabay.com/2019/11/peces-loro-corales-y-mantas-proteccion-especial-mexico/"
  },
  {
    "titulo": "Investigación sobre tráfico de jaguares reconocida en Premios Colpin",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/12/02162834/Jaguar-4-Richard-Barrett-WWF-UK-768x512.jpg",
    "fecha": "Nov 11, 2019",
    "url": "https://es.mongabay.com/2019/11/investigacion-sobre-trafico-de-jaguares-reconocida-en-premios-colpin/"
  },
  {
    "titulo": "Tiburones en Colombia: ¿Por qué científicos piden eliminar la cuota de extracción de aletas?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/30083442/3-3-768x512.jpg",
    "fecha": "Nov 11, 2019",
    "url": "https://es.mongabay.com/2019/11/colombia-cientificos-piden-eliminar-las-cuotas-de-aletas-de-la-resolucion-de-pesca/"
  },
  {
    "titulo": "Argentina: el ciervo de los pantanos se recupera en el Delta del Paraná",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/10/30051005/ciervo-de-los-pantanos-argentina-8-HEMBRA-DE-CIERVO-DE-LOS-PANTANOS-4-768x512.jpg",
    "fecha": "Oct 31, 2019",
    "url": "https://es.mongabay.com/2019/10/argentina-ciervo-de-los-pantanos-biodiversidad/"
  },
  {
    "titulo": "Chile: la increíble historia de Kalfu, la cría de chungungo que lucha por su vida",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/10/21142320/5AXVxO38-768x512.jpeg",
    "fecha": "Oct 24, 2019",
    "url": "https://es.mongabay.com/2019/10/chile-rehabilitacion-de-chungungos/"
  },
  {
    "titulo": "El bosque seco de Costa Rica se queda sin insectos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/10/19010253/Guanacaste-0-768x512.jpg",
    "fecha": "Oct 22, 2019",
    "url": "https://es.mongabay.com/2019/10/conservacion-en-costa-rica-extincion-de-insectos/"
  },
  {
    "titulo": "Declaración de Lima: tráfico de vida silvestre es crimen organizado",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/10/07165805/mono-choro-peru-biodiversidad-animales-2-768x512.jpg",
    "fecha": "Oct 08, 2019",
    "url": "https://es.mongabay.com/2019/10/declaracion-de-lima-trafico-de-vida-silvestre-crimen-organizado/"
  },
  {
    "titulo": "El Gran Chaco también arde y se deforesta",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/12/19174948/51-768x512.jpg",
    "fecha": "Oct 02, 2019",
    "url": "https://es.mongabay.com/2019/10/latinoamerica-el-gran-chaco/"
  },
  {
    "titulo": "Amenazas y esfuerzos para proteger a los tiburones en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/30083442/3-3-768x512.jpg",
    "fecha": "Oct 01, 2019",
    "url": "https://es.mongabay.com/2019/10/latinoamerica-tiburones-amenazas-y-esfuerzos-de-conservacion/"
  },
  {
    "titulo": "Tráfico de loros choroy en Chile: el lento proceso de reinserción en la vida silvestre",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/25222917/loro-choroy-1ok-768x512.jpg",
    "fecha": "Sep 30, 2019",
    "url": "https://es.mongabay.com/2019/09/chile-rehabilitacion-de-loros-choroy-2/"
  },
  {
    "titulo": "Bolivia: tecnología para medir en tiempo real los incendios que siguen quemando la Chiquitania",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/09/23080909/Incendios-Bolivia-7-Natura-768x512.jpg",
    "fecha": "Sep 24, 2019",
    "url": "https://es.mongabay.com/2019/09/ibolivia-incendios-forestales-tecnologia/"
  },
  {
    "titulo": "¿Por qué las aves cantoras terrestres son presa fácil de tiburones bebé en el Golfo de México?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/30083442/3-3-768x512.jpg",
    "fecha": "Sep 23, 2019",
    "url": "https://es.mongabay.com/2019/09/mexico-tiburones-tigre-aves-cantoras/"
  },
  {
    "titulo": "¿Cómo repoblar manglares de Tumbes con conchas negras y cangrejos? | Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/09/15214317/000486416W-768x512.jpg",
    "fecha": "Sep 16, 2019",
    "url": "https://es.mongabay.com/2019/09/peru-manglares-de-tumbes-conchas-negras-cangrejos/"
  },
  {
    "titulo": "Científicos intentan descubrir el origen de las tortugas marinas de Rapa Nui",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/21185059/dsc_9183_copy-768x512.jpg",
    "fecha": "Sep 12, 2019",
    "url": "https://es.mongabay.com/2019/09/tortugas-marinas-de-rapa-nui/"
  },
  {
    "titulo": "CITES regulará comercialización del tiburón mako para proteger a la especie",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/09/08211929/CREDITO-oceana_Carlos_Suarez_01-768x512.jpg",
    "fecha": "Sep 11, 2019",
    "url": "https://es.mongabay.com/2019/09/cites-regulara-comercializacion-del-tiburon-mako/"
  },
  {
    "titulo": "Pericos amenazados ayudan a conservar ecosistemas en el sur de Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/09/06231305/Perico-Orce%CC%81s-Foto-ElianaMontenegro-768x512.jpg",
    "fecha": "Sep 10, 2019",
    "url": "https://es.mongabay.com/2019/09/conservacion-de-aves-en-ecuador-pericos-el-oro/"
  },
  {
    "titulo": "Bolivia y Perú: buenas noticias para la rana gigante del Titicaca",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/09/10133058/6504987f-af24-44b6-948b-9ab240325d70-768x512.jpg",
    "fecha": "Sep 10, 2019",
    "url": "https://es.mongabay.com/2019/09/bolivia-peru-rana-gigante-del-titicaca/"
  },
  {
    "titulo": "Sequía en Chile: la falta de agua y comida mata a miles de animales en Putaendo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/09/08194417/IMG_9710-768x512.jpg",
    "fecha": "Sep 09, 2019",
    "url": "https://es.mongabay.com/2019/09/chile-sequia-en-putaendo/"
  },
  {
    "titulo": "Tapir: el arquitecto de los bosques latinoamericanos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/05145957/El-Diamante-danta-o-tapi%C4%9Br-Tapirus-terrestris-768x512.jpg",
    "fecha": "Sep 04, 2019",
    "url": "https://es.mongabay.com/2019/09/tapir-arquitecto-de-los-bosques-latinoamericanos/"
  },
  {
    "titulo": "Amenazas y esfuerzos de recuperación del oso hormiguero",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/04/30124627/oso-hormiguero-colombia-animales-biodiversidad-768x512.jpg",
    "fecha": "Sep 04, 2019",
    "url": "https://es.mongabay.com/2019/09/oso-hormiguero-amenazas-y-esfuerzos-de-recuperacion/"
  },
  {
    "titulo": "¿Por qué los murciélagos necesitan ser conservados?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/08012806/murcielagos-latinoamerica-bolivia-luis-aguirre-768x512.jpg",
    "fecha": "Sep 04, 2019",
    "url": "https://es.mongabay.com/2019/09/murcielagos-latinoamerica-bolivia-amenazas/"
  },
  {
    "titulo": "James Aparicio: “En el área donde hubo fuego todos los anfibios y reptiles han muerto”",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/31221404/Saltuni.5310m-768x512.jpg",
    "fecha": "Sep 03, 2019",
    "url": "https://es.mongabay.com/2019/09/bolivia-james-aparicio-anfibios-reptiles/"
  },
  {
    "titulo": "Chile: autoridades reciben quinta denuncia por matanza de lobos marinos en salmoneras",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/05170223/DSC3534-768x512.jpg",
    "fecha": "Sep 02, 2019",
    "url": "https://es.mongabay.com/2019/09/chile-autoridades-reciben-quinta-denuncia-por-matanza-de-lobos-marinos-en-salmoneras/"
  },
  {
    "titulo": "Tortugas carey: hasta 1600 crías son liberadas cada año por cuidadores de huevos en Panamá",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/23021705/liberacion-2-2-768x512.jpg",
    "fecha": "Aug 28, 2019",
    "url": "https://es.mongabay.com/2019/08/conservacion-de-tortugas-carey-en-panama/"
  },
  {
    "titulo": "Incendios consumen 37 000 hectáreas de bosques en Paraguay",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/24025132/WhatsApp-Image-2019-08-22-at-11.35.14-AM-1-768x512.jpeg",
    "fecha": "Aug 26, 2019",
    "url": "https://es.mongabay.com/2019/08/incendio-en-el-pantanal-paraguayo/"
  },
  {
    "titulo": "Día Mundial de los Parques Nacionales: cuatro áreas biodiversas de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/29013051/Chiribiquete_Amazon_Conservation_Team-768x512.jpg",
    "fecha": "Aug 24, 2019",
    "url": "https://es.mongabay.com/2019/08/dia-mundial-de-los-parques-nacionales/"
  },
  {
    "titulo": "Desastre ambiental en Bolivia: incendios forestales arrasan bosques de la Chiquitania",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/22173345/incendios-bolivia-chiquitania-6-WhatsApp-Image-2019-08-21-at-20.14.53-2-768x512.jpeg",
    "fecha": "Aug 22, 2019",
    "url": "https://es.mongabay.com/2019/08/incendios-quemas-bolivia-chiquitania/"
  },
  {
    "titulo": "Bolivia: ¿Cuántos anfibios son salvados de la extinción en el Centro K’ayra?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/02/20225621/Romeo02_Photo-by-Arturo-Mu%C3%B1oz_Bolivian-Amphibian-Initiative-1-768x512.jpg",
    "fecha": "Aug 21, 2019",
    "url": "https://es.mongabay.com/2019/08/bolivia-cuantos-anfibios-son-salvados-de-la-extincion-en-el-centro-kayra/"
  },
  {
    "titulo": "Tinamous: la enigmática ave de los huevos turquesa",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/04/26142336/Huevo-Tinamou-768x512.jpg",
    "fecha": "Aug 19, 2019",
    "url": "https://es.mongabay.com/2019/08/tinamous-la-enigmatica-ave-de-los-huevos-turquesa/"
  },
  {
    "titulo": "Ecuador: nueva reserva para proteger un ave emblemática y en peligro en Galápagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/19034319/Galapagos-Petrel-Michael-Moens-768x512.png",
    "fecha": "Aug 19, 2019",
    "url": "https://es.mongabay.com/2019/08/ecuador-conservacion-del-petrel-de-galapagos/"
  },
  {
    "titulo": "UICN actualiza su Lista Roja: más de 28000 especies están en peligro de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/17142202/vaquitaaa-768x352.jpg",
    "fecha": "Aug 13, 2019",
    "url": "https://es.mongabay.com/2019/08/uicn-lista-roja-de-especies-en-peligro-de-extincion/"
  },
  {
    "titulo": "Jaguares: amenazas y esfuerzos por salvar al felino más grande de América",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/03/30124847/felinos-bosques-amazonia-biodiversidad-animales-3-768x432.jpg",
    "fecha": "Aug 12, 2019",
    "url": "https://es.mongabay.com/2019/08/amenazas-del-jaguar-conservacion/"
  },
  {
    "titulo": "Venezuela: científicos intentan salvar población de jaguares en Zulia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/07192958/jaguares-venezuela-amenazas-zulia-1-768x512.jpg",
    "fecha": "Aug 08, 2019",
    "url": "https://es.mongabay.com/2019/08/venezuela-jaguares-amenazas-zulia/"
  },
  {
    "titulo": "Macá tobiano: la pequeña y elegante ave argentina que lucha por sobrevivir en la Patagonia | FOTOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/05213749/maca-tobiano-argentina13-768x512.jpg",
    "fecha": "Aug 08, 2019",
    "url": "https://es.mongabay.com/2019/08/argentina-maca-tobiano-aves-fotos/"
  },
  {
    "titulo": "Redes iluminadas podrían disminuir la pesca incidental de los amenazados Albatros de Galápagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/05113453/Wildlife-Waved-Albatross-%C2%A9Judi-Miller-768x512.jpg",
    "fecha": "Aug 05, 2019",
    "url": "https://es.mongabay.com/2019/08/peru-albatros-de-galapagos-redes-iluminadas/"
  },
  {
    "titulo": "Costa Rica: restauran bosque degradado por ganadería y regresan los animales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/27194238/NIN_9627-768x513.jpg",
    "fecha": "Aug 02, 2019",
    "url": "https://es.mongabay.com/2019/08/costa-rica-bosque-en-campo-geotermico-restauracion-video/"
  },
  {
    "titulo": "Perú: lobos marinos a salvo en un paraíso llamado Punta San Juan | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/30212756/lobos-marinos-punta-san-juan-FINOS-3-CR%C3%8DA-768x512.jpg",
    "fecha": "Aug 01, 2019",
    "url": "https://es.mongabay.com/2019/08/peru-lobos-marinos-en-punta-san-juan-oceanos-videos/"
  },
  {
    "titulo": "México: científicos llaman a no minimizar los impactos ambientales y antecedentes tras derrame de ácido sulfúrico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/29122629/guaymas-port_iO8tVPk-768x512.jpg",
    "fecha": "Jul 31, 2019",
    "url": "https://es.mongabay.com/2019/07/mexico-impactos-del-derrame-de-acido-sulfurico/"
  },
  {
    "titulo": "Argentina: animales extintos del Iberá son reinsertados en el parque nacional | FOTOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/25202156/Oso-hormiguero-01-CLT-768x512.jpg",
    "fecha": "Jul 29, 2019",
    "url": "https://es.mongabay.com/2019/07/argentina-reinsercion-de-especies-en-el-parque-nacional-ibera/"
  },
  {
    "titulo": "María José Abarca: la veterinaria chilena que rehabilita a loros choroy víctimas del tráfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/25221255/07-2-768x512.jpg",
    "fecha": "Jul 25, 2019",
    "url": "https://es.mongabay.com/2019/07/chile-rehabilitacion-de-loros-choroy/"
  },
  {
    "titulo": "El ajolote de Alchichica evade la extinción en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/23160418/ajolote3-768x513.jpeg",
    "fecha": "Jul 24, 2019",
    "url": "https://es.mongabay.com/2019/07/ajolote-de-alchichica-mexico-extincion/"
  },
  {
    "titulo": "Salmones en Chile: los problemas ambientales tras las cifras adulteradas de la empresa Nova Austral",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/08/17003629/MKohut_WWF_CHILE_AQUACHILE_SALMON_FARM--768x512.jpg",
    "fecha": "Jul 24, 2019",
    "url": "https://es.mongabay.com/2019/07/salmones-en-chile-cifras-adulteradas-nova-austral/"
  },
  {
    "titulo": "Fauna regresa tras recuperar el corredor Urugua-í – Foerster en Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/16182158/Corredor-Urugua-%C3%AD-Foerster-Argentina-16-768x512.jpg",
    "fecha": "Jul 18, 2019",
    "url": "https://es.mongabay.com/2019/07/animales-corredor-urugua-i-foerster-argentina-fotos/"
  },
  {
    "titulo": "La frontera del jaguar: confirman presencia del felino en áreas protegidas de Perú, Ecuador y Colombia | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/14070136/01-%C2%A9-Diego-Perez-_-WWF-Peru%CC%81-1-768x512.jpg",
    "fecha": "Jul 16, 2019",
    "url": "https://es.mongabay.com/2019/07/frontera-jaguar-peru-ecuador-colombia-video/"
  },
  {
    "titulo": "Cintia Tellaeche: una científica argentina tras los pasos del gato fantasma",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/12215704/Gato-Andino-2-firma-Ingle%CC%81s-768x512.jpg",
    "fecha": "Jul 15, 2019",
    "url": "https://es.mongabay.com/2019/07/argentina-cintia-tellaeche-gato-andino-fotos/"
  },
  {
    "titulo": "Nueva tecnología mapea corales desde el aire y determina su estado de conservación",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/08004923/DSC7635-768x512.jpg",
    "fecha": "Jul 12, 2019",
    "url": "https://es.mongabay.com/2019/07/republica-dominicana-corales-desde-el-aire/"
  },
  {
    "titulo": "Chile: preocupación a ocho meses de la desaparición de las tortugas marinas de Arica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/10142228/051.jpg",
    "fecha": "Jul 09, 2019",
    "url": "https://es.mongabay.com/2019/07/oceanos-chile-tortugas-de-arica/"
  },
  {
    "titulo": "Senda Verde: un refugio para animales rescatados del tráfico de especies en Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/07150705/Mi-jungla-Senda-Verde-768x512.jpg",
    "fecha": "Jul 09, 2019",
    "url": "https://es.mongabay.com/2019/07/bolivia-senda-verde-refugio-animales-video/"
  },
  {
    "titulo": "Perú: osos de anteojos y yaguarundis entre la increíble fauna de los bosques nublados de Udima",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/03062613/Oso-de-anteojos-SBC-Peru%CC%81-768x512.jpg",
    "fecha": "Jul 08, 2019",
    "url": "https://es.mongabay.com/2019/07/peru-fauna-bosques-nublados-udima-cajamarca-video/"
  },
  {
    "titulo": "Los tapires podrían ser la clave para recuperar las selvas degradadas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/06/19151208/brazil_1378.ed30600c50f540709f28abbc1ca9f71c-768x450.jpg",
    "fecha": "Jul 05, 2019",
    "url": "https://es.mongabay.com/2019/07/tapires-selvas-degradadas/"
  },
  {
    "titulo": "Kathia Rivero: la bióloga boliviana que analizó las partes de jaguar confiscadas al tráfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/07/04034820/cuerojaguar-768x512.jpg",
    "fecha": "Jul 04, 2019",
    "url": "https://es.mongabay.com/2019/07/entrevista-a-kathia-rivero-perita-en-partes-de-jaguar-traficadas/"
  },
  {
    "titulo": "Chile: los únicos pingüinos rey de Sudamérica se recuperan en Tierra del Fuego",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/06/30155025/red-observadores-768x512.jpg",
    "fecha": "Jul 03, 2019",
    "url": "https://es.mongabay.com/2019/07/chile-pinguinos-rey-tierra-del-fuego-video/"
  },
  {
    "titulo": "Argentina: triplican la población de cocodrilos gracias a estrategia de aprovechamiento sustentable",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/06/30161128/13082642_1236087703070569_3190874009812690729_n-768x512.jpg",
    "fecha": "Jul 01, 2019",
    "url": "https://es.mongabay.com/2019/07/cocodrilos-de-argentina/"
  },
  {
    "titulo": "Bolivia: esfuerzos y esperanza para salvar a la paraba frente roja",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/06/27074213/PFR_89A4819-768x512.jpg",
    "fecha": "Jun 27, 2019",
    "url": "https://es.mongabay.com/2019/06/bolivia-esfuerzos-y-esperanza-para-salvar-a-la-paraba-frente-roja/"
  },
  {
    "titulo": "Estudio: cerca de 16 000 toneladas de tiburones son desembarcadas al año en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/09/15022741/Copia-de-puede-ser-tiburon-martillo-no-sabemos-a-ciencia-cierta-768x512.jpg",
    "fecha": "Jun 26, 2019",
    "url": "https://es.mongabay.com/2019/06/tiburones-en-peru-estudio/"
  },
  {
    "titulo": "Confirman las sospechas: el jaguar ya no habita el área protegida Santa Cruz La Vieja en Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/09/08203419/jaguar-2-768x512.jpg",
    "fecha": "Jun 24, 2019",
    "url": "https://es.mongabay.com/2019/06/jaguar-en-bolivia-videos-santa-cruz-tucavaca/"
  },
  {
    "titulo": "Chile: la población de ballena jorobada se recupera y pasa de 40 a 190 individuos | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/05170439/patagoniaphotosafaris12-768x511.jpg",
    "fecha": "Jun 20, 2019",
    "url": "https://es.mongabay.com/2019/06/chile-ballena-jorobada-se-recupera-video/"
  },
  {
    "titulo": "La leyenda era cierta: población “secreta” de huemules en Chile aumenta esperanza de salvarlos | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/06/07163955/huemul1-768x512.jpg",
    "fecha": "Jun 12, 2019",
    "url": "https://es.mongabay.com/2019/06/chile-huemul-patagonia-videos/"
  },
  {
    "titulo": "Día Mundial de los Océanos: amenazas y estrategias científicas para salvarlos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/31202518/pexels-photo-1125979-768x512.jpg",
    "fecha": "Jun 08, 2019",
    "url": "https://es.mongabay.com/2019/06/dia-mundial-de-los-oceanos/"
  },
  {
    "titulo": "El regreso del lobo gris al suelo mexicano podría hacer que las lluvias también vuelvan",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/09204728/3Foto-Cortesi%CC%81a-Wolf-Conservation-Center1-768x512.jpg",
    "fecha": "Jun 05, 2019",
    "url": "https://es.mongabay.com/2019/06/mexico-lobo-gris-regreso/"
  },
  {
    "titulo": "Bolivia y Paraguay se unen para proteger al guanaco",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/06/02033436/Copia-de-Area-de-vida-del-guanaco-Bolivia-1-Fundacio%CC%81n-Natura-768x512.png",
    "fecha": "Jun 03, 2019",
    "url": "https://es.mongabay.com/2019/06/bolivia-paraguay-proteger-guanaco/"
  },
  {
    "titulo": "Costa Rica: proteger a la víbora matabuey para que Centroamérica no quede sin antídotos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/24193536/Culebra_atenorio_IeCR-11-768x512.jpg",
    "fecha": "May 29, 2019",
    "url": "https://es.mongabay.com/2019/05/vibora-matabuey-antidotos-centroamerica-costa-rica/"
  },
  {
    "titulo": "México: la guacamaya roja regresa de la extinción en la selva más boreal del continente",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/27194004/LA_OTRA_OPCION_DIANA_CABALLERO_5-768x512.jpg",
    "fecha": "May 28, 2019",
    "url": "https://es.mongabay.com/2019/05/mexico-guacamaya-roja-regresa-de-la-extincion/"
  },
  {
    "titulo": "Colombia: cinco áreas protegidas pueden salvar de la extinción a muchos anfibios | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/27021149/Hyloscirtus-palmeri-768x512.jpg",
    "fecha": "May 28, 2019",
    "url": "https://es.mongabay.com/2019/05/colombia-anfibios-conservacion-parques-nacionales-video/"
  },
  {
    "titulo": "Día mundial de las tortugas: el crítico estado de la especie más bella del mundo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/21185027/jurgen_freund___wwf-768x512.jpg",
    "fecha": "May 23, 2019",
    "url": "https://es.mongabay.com/2019/05/dia-mundial-de-las-tortugas-2/"
  },
  {
    "titulo": "Oso de anteojos: la deuda pendiente del Perú con una especie vulnerable",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/22184404/Oso-Andino-01-SERFOR-David-Piaggio-768x512.jpg",
    "fecha": "May 22, 2019",
    "url": "https://es.mongabay.com/2019/05/oso-de-anteojos-conflicto-peru-ganado-maiz/"
  },
  {
    "titulo": "Venezuela: científicos le ganan a la crisis alimentaria y frenan el consumo de tiburón ballena",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/18170358/DSC8681-2-768x512.jpg",
    "fecha": "May 22, 2019",
    "url": "https://es.mongabay.com/2019/05/venezuela-crisis-alimentaria-consumo-de-tiburon-ballena/"
  },
  {
    "titulo": "Reintroducción de iguanas terrestres en Galápagos se perfila como modelo mundial de conservación",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/11005038/Santiago-Liberaci%C3%B3n-IMG_3354-768x512.jpg",
    "fecha": "May 17, 2019",
    "url": "https://es.mongabay.com/2019/05/ecuador-iguanas-galapagos/"
  },
  {
    "titulo": "Ñembi Guasu: la nueva área de conservación en el Chaco de Bolivia | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/15160127/N%CC%83embi-Guasu-5-Nativa-768x512.jpg",
    "fecha": "May 16, 2019",
    "url": "https://es.mongabay.com/2019/05/bolivia-nembi-guasu-conservacion-chaco-video/"
  },
  {
    "titulo": "Cóndor andino: 28 años de protección para el señor de los cielos sudamericanos | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/08194939/WhatsApp-Image-2019-04-11-at-15.28.54-768x512.jpg",
    "fecha": "May 14, 2019",
    "url": "https://es.mongabay.com/2019/05/condor-andino-conservacion-argentina/"
  },
  {
    "titulo": "La salud de los océanos deteriorada a niveles nunca antes registrados en la historia de la humanidad | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/09/03184845/27-768x512.jpg",
    "fecha": "May 14, 2019",
    "url": "https://es.mongabay.com/2019/05/oceanos-informe-ipbes-salud-video/"
  },
  {
    "titulo": "México: ¿dejarán que el lobo vuelva y traiga la lluvia?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/09203320/1Foto-cortesi%CC%81a-Wolf-Conservation-Center1-768x512.jpg",
    "fecha": "May 13, 2019",
    "url": "https://es.mongabay.com/2019/05/mexico-conservacion-lobo-gris-mexicano/"
  },
  {
    "titulo": "Chile: expedición al fin del mundo donde las ballenas jorobadas se han casi quintuplicado | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/05170453/patagoniaphotosafaris15-768x512.jpg",
    "fecha": "May 09, 2019",
    "url": "https://es.mongabay.com/2019/05/chile-ballenas-jorobadas-francisco-coloane-oceanos/"
  },
  {
    "titulo": "Premios Whitley: tres latinoamericanos reciben el “Oscar Verde” por conservar loros, águilas y tiburones",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/05/08155037/Banner_rotativo_site_web_premio_jon_paul_mayo_2019-768x320.jpg",
    "fecha": "May 08, 2019",
    "url": "https://es.mongabay.com/2019/05/premios-whitley-tres-latinoamericanos-reciben-el-oscar-verde-por-conservar-loros-aguilas-y-tiburones/"
  },
  {
    "titulo": "Honduras: patrullas comunitarias reducen en 80%  los saqueos de nidos de los guacamayos rojos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/04/11235657/scarlet-macaws-pair-768x512.jpg",
    "fecha": "May 01, 2019",
    "url": "https://es.mongabay.com/2019/05/guacamayos-rojos-honduras-videos/"
  },
  {
    "titulo": "Chile: crecimiento de la acuicultura podría aumentar las enfermedades en animales acuáticos | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/04/17223237/15673358716_83da81b60f_o-768x511.jpg",
    "fecha": "Apr 22, 2019",
    "url": "https://es.mongabay.com/2019/04/chile-acuicultura-enfermedades-animales-acuaticos-video/"
  },
  {
    "titulo": "Peregocetus: la ballena con cuatro patas capaz de caminar y nadar que vivió en el Perú | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/04/12145353/21_Peregocetus-life-reconstruction_high-res-768x512.jpg",
    "fecha": "Apr 16, 2019",
    "url": "https://es.mongabay.com/2019/04/peregocetus-fosil-de-ballena-peru-video/"
  },
  {
    "titulo": "La labor titánica del único centro de rehabilitación de fauna marina de Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/04/13174131/WhatsApp-Image-2019-04-09-at-11.22.51-PM-2-768x512.jpeg",
    "fecha": "Apr 15, 2019",
    "url": "https://es.mongabay.com/2019/04/ecuador-machalilla-rehabilitacion-de-fauna-marina-video/"
  },
  {
    "titulo": "En Bogotá existe un lugar donde salvan miles de animales silvestres al año",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/04/08022826/61-768x512.jpeg",
    "fecha": "Apr 11, 2019",
    "url": "https://es.mongabay.com/2019/04/colombia-animales-silvestres-trafico-ilegal-bogota/"
  },
  {
    "titulo": "Chile: nuevo varamiento de delfines oscuros en el norte del país",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/04/05212852/delfin_oscuro-768x500.jpg",
    "fecha": "Apr 10, 2019",
    "url": "https://es.mongabay.com/2019/04/chile-delfines-oscuros-pescados-en-las-redes-de-anchovetas/"
  },
  {
    "titulo": "Contra el reloj: Colombia intenta salvar de la extinción al paujil de pico azul",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/04/06041459/Paujil-de-pico-azul-Archivo-fotogr%C3%A1fico-Fundaci%C3%B3n-Bot%C3%A1nica-y-Zool%C3%B3gica-de-Barranquilla-3-768x512.jpg",
    "fecha": "Apr 09, 2019",
    "url": "https://es.mongabay.com/2019/04/contra-el-reloj-colombia-intenta-salvar-de-la-extincion-al-paujil-de-pico-azul/"
  },
  {
    "titulo": "Ecuador vive el boom de las ranas: dos nuevas especies descubiertas en marzo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/03/29070153/Lynchius-megacephalus-1-768x512.jpg",
    "fecha": "Apr 04, 2019",
    "url": "https://es.mongabay.com/2019/04/ranas-en-ecuador-avance-investigacion-cientifica/"
  },
  {
    "titulo": "Científicos logran encuentro con singulares orcas que podrían ser una nueva especie marina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/03/22114613/Type-D_Jean-Pierre-Sylvestre_BR-Orcinus-orca-S.-Georgia_2011_28112011-WSG-1340-768x512.jpg",
    "fecha": "Mar 29, 2019",
    "url": "https://es.mongabay.com/2019/03/nueva-especie-de-orca/"
  },
  {
    "titulo": "Colombia: conoce a la fauna que habita en lo más profundo de la Amazonía | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/03/21153725/51_05240030-768x512.jpg",
    "fecha": "Mar 27, 2019",
    "url": "https://es.mongabay.com/2019/03/colombia-rio-pure-fauna-amazonia-videos/"
  },
  {
    "titulo": "La increíble vida de Silvia, la tortuga marina que venció los peligros de altamar para reproducirse | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/03/15153432/15428688038_9d59882a37_o-768x512.jpg",
    "fecha": "Mar 19, 2019",
    "url": "https://es.mongabay.com/2019/03/oceanos-tortuga-marina-silvia-peru-ecuador/"
  },
  {
    "titulo": "El área protegida que resolvió conflictos entre pescadores artesanales e industriales en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/01/12194103/%C2%A9-MarViva-_Juan-Manuel-D%C3%ADaz-NIQUIPLAYA-768x512.jpg",
    "fecha": "Mar 12, 2019",
    "url": "https://es.mongabay.com/2019/03/pesca-area-protegida-resolvio-conflictos-colombia/"
  },
  {
    "titulo": "Luces intermitentes alejan a pumas que cazan ganado en el norte de Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/03/15131959/Puma-Rhett-768x512.jpg",
    "fecha": "Mar 11, 2019",
    "url": "https://es.mongabay.com/2019/03/chile-pumas-luces-intermitentes/"
  },
  {
    "titulo": "Día mundial de la vida silvestre: esfuerzos de conservación en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/02/28105447/FunGrupoArgosOso2-768x512.jpg",
    "fecha": "Mar 03, 2019",
    "url": "https://es.mongabay.com/2019/03/dia-mundial-de-la-vida-silvestre-esfuerzos-de-conservacion-en-latinoamerica/"
  },
  {
    "titulo": "Colombia: descubren al cangrejo mandarina debajo de las piedras en Santander | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/02/20044821/O7A7338_FelipeVillegas-768x512.jpg",
    "fecha": "Feb 27, 2019",
    "url": "https://es.mongabay.com/2019/02/colombia-cangrejo-mandarina-santander-video/"
  },
  {
    "titulo": "Esteban Payán: “el jaguar representa lo más fuerte de América Latina”",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/02/13140733/EstebanPayanBioPic-768x512.jpg",
    "fecha": "Feb 20, 2019",
    "url": "https://es.mongabay.com/2019/02/jaguar-esteban-payan-latinoamerica-entrevista/"
  },
  {
    "titulo": "Colombia: “El caimán aguja se ha recuperado en Cispatá gracias a la labor de la comunidad”",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/02/04021058/DSC01588-768x512.jpg",
    "fecha": "Feb 08, 2019",
    "url": "https://es.mongabay.com/2019/02/caiman-aguja-colombia-polemica-caza-cispata-2/"
  },
  {
    "titulo": "Perú: cámaras trampa registran por primera vez un felino milenario en Laquipampa | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/01/31191249/jaguarundi-SBC2.jpg",
    "fecha": "Feb 06, 2019",
    "url": "https://es.mongabay.com/2019/02/peru-yaguarundi-osos-anteojos-laquipampa-videos/"
  },
  {
    "titulo": "El suri en peligro: cinco claves sobre el ave más grande de Sudamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/01/26001700/Suri-Serfor.jpg",
    "fecha": "Jan 29, 2019",
    "url": "https://es.mongabay.com/2019/01/suri-peligro-ave-grande-peru/"
  },
  {
    "titulo": "Colombia: cambio climático está desplazando a las aves de Bogotá",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/01/06174209/aves-bogota-768x513.jpg",
    "fecha": "Jan 28, 2019",
    "url": "https://es.mongabay.com/2019/01/cambio-climatico-desplaza-aves-bogota/"
  },
  {
    "titulo": "Delfines de la Amazonía entre las especies más amenazadas del planeta",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/01/19080902/Delfin-de-la-Amazoni%CC%81a-Julio-Garcia-%40-768x512.jpg",
    "fecha": "Jan 22, 2019",
    "url": "https://es.mongabay.com/2019/01/delfines-amazonas-amenazados/"
  },
  {
    "titulo": "Perú: conozca la increíble fauna silvestre del bosque nublado de Pampa Hermosa | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/01/10030027/Tremarctos-ornatus-1-Sean-Mchugh-y-Jasmina-McKibben-Rainforest-Partnership-768x512.jpg",
    "fecha": "Jan 15, 2019",
    "url": "https://es.mongabay.com/2019/01/peru-pampa-hermosa-videos/"
  },
  {
    "titulo": "Mongabay Latam: los 10 reportajes ambientales más leídos de Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/07/26205348/Deforestaci%C3%B3n-Guaviare-Foto-FCDS-768x512.jpg",
    "fecha": "Dec 26, 2018",
    "url": "https://es.mongabay.com/2018/12/reportajes-ambientales-colombia/"
  },
  {
    "titulo": "Los conflictos del humano con el oso andino, el jaguar y el tiburón en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/12/02213232/tibosojag1-768x512.jpg",
    "fecha": "Dec 04, 2018",
    "url": "https://es.mongabay.com/2018/12/conflictos-humano-oso-andino-jaguar-tiburon-en-colombia/"
  },
  {
    "titulo": "Plan Jaguar 2030: la iniciativa que reúne a catorce países por el gran felino de America Latina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/12/02163039/Jaguar-Richard-Barrett-WWF-UK-768x512.jpg",
    "fecha": "Dec 03, 2018",
    "url": "https://es.mongabay.com/2018/12/plan-jaguar-2030/"
  },
  {
    "titulo": "Tráfico de fauna en Perú: imágenes impactantes del comercio ilegal de especies | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/14172435/WCS_perezoso-768x512.jpg",
    "fecha": "Nov 23, 2018",
    "url": "https://es.mongabay.com/2018/11/trafico-fauna-peru-fotos-videos/"
  },
  {
    "titulo": "Descubren nueva especie de lagartija entre Ecuador y Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/11/17125054/Anolis-37_-Juan-Pablo-Reyes-768x512.jpg",
    "fecha": "Nov 19, 2018",
    "url": "https://es.mongabay.com/2018/11/descubren-nueva-especie-de-lagartija-entre-ecuador-y-colombia/"
  },
  {
    "titulo": "Venezuela traza un plan para salvar delfines, nutrias y manatíes de sus ríos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/11/10102242/Delfines-Tonina-del-Orinoco-Venezuela-Plan-de-Accio%CC%81n-768x509.png",
    "fecha": "Nov 13, 2018",
    "url": "https://es.mongabay.com/2018/11/venezuela-delfines-nutrias-y-manaties-rios/"
  },
  {
    "titulo": "Animales atropellados: un reto para la expansión de carreteras en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/11/07231351/Fauna-Jueteadora-Chironius-monticola-Atropellada-en-la-V%C3%ADa-El-Escobero-Envigado-Foto-de-Tayra-440x330.jpg",
    "fecha": "Nov 05, 2018",
    "url": "https://es.mongabay.com/2018/11/colombia-animales-atropellados-carreteras/"
  },
  {
    "titulo": "Latinoamérica es la región que más animales ha perdido en medio siglo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/11/02122410/Copia-de-%C2%A9-WWF-Peru%CC%81-especie-oso-andino-768x512.jpg",
    "fecha": "Nov 02, 2018",
    "url": "https://es.mongabay.com/2018/11/latinoamerica-perdio-animales-amazonia/"
  },
  {
    "titulo": "El santuario colombiano donde renacen las aves traficadas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/10/16004457/Harpy-eagle-Harpia-harpyja-2-768x512.jpg",
    "fecha": "Oct 30, 2018",
    "url": "https://es.mongabay.com/2018/10/aviario-de-colombia-rescate-aves-traficadas/"
  },
  {
    "titulo": "Crisis en Venezuela: la pelea por conservar manatíes, caimanes y tortugas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/10/29200504/P5090412-768x512.jpg",
    "fecha": "Oct 30, 2018",
    "url": "https://es.mongabay.com/2018/10/especies-amenazadas-conservacion-crisis-economica-en-venezuela/"
  },
  {
    "titulo": "¿Qué hacer con los hipopótamos de Pablo Escobar que «reinan» en el río Magdalena?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/10/13175201/DSC_0783-768x408.jpg",
    "fecha": "Oct 16, 2018",
    "url": "https://es.mongabay.com/2018/10/colombia-hipopotamos-pablo-escobar-rio-magdalena/"
  },
  {
    "titulo": "El lugar de Ecuador donde el cóndor andino escapa de cinco amenazas contra su vida | VIDEO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/04/23192409/image-4-768x512.png",
    "fecha": "Oct 15, 2018",
    "url": "https://es.mongabay.com/2018/10/ecuador-condor-andino-conservacion-video/"
  },
  {
    "titulo": "Colombia sigue sin conocer los impactos biológicos de los asesinatos de osos andinos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/09/21053543/2014-01-27-DSC_0212-768x512.jpg",
    "fecha": "Sep 26, 2018",
    "url": "https://es.mongabay.com/2018/09/colombia-oso-andino-asesinatos-conservacion/"
  },
  {
    "titulo": "Rodrigo Medellín, el ‘Batman’ de México: “gusanos serán la proteína más importante en 20 años”",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/09/13183955/Rodrigo-Medelli%CC%81n-Instituto-de-Ecologi%CC%81a-de-UNAM1.jpg",
    "fecha": "Sep 20, 2018",
    "url": "https://es.mongabay.com/2018/09/mexico-rodrigo-medellin-batman-gusanos/"
  },
  {
    "titulo": "Día de México: conoce los cinco animales que hay que proteger de la extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/18212356/ajolote-mexico-animales-fauna-biodiversidad-3-768x465.jpg",
    "fecha": "Sep 16, 2018",
    "url": "https://es.mongabay.com/2018/09/dia-de-mexico-cinco-animales-peligro-extincion/"
  },
  {
    "titulo": "Perú: mafias arremeten contra la población de jaguares en Iquitos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/09/08201216/24-768x512.jpg",
    "fecha": "Sep 11, 2018",
    "url": "https://es.mongabay.com/2018/09/trafico-ilegal-jaguares-peru-iquitos/"
  },
  {
    "titulo": "Saqueo masivo de nidos de tortuga: la cara ambiental de la crisis en Nicaragua",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/08/17130821/IMG_2787-768x512.jpg",
    "fecha": "Aug 23, 2018",
    "url": "https://es.mongabay.com/2018/08/oceanos-saqueo-de-huevos-de-tortuga-en-nicaragua/"
  },
  {
    "titulo": "Luis Añez: “Los zoológicos de Venezuela están desapareciendo”",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/08/19190750/Leon-Africano-zoologico-de-Zulia-Twitter-768x448.jpg",
    "fecha": "Aug 22, 2018",
    "url": "https://es.mongabay.com/2018/08/luis-anez-zoologicos-venezuela/"
  },
  {
    "titulo": "Chile: nueva área marina protegerá focas, albatros y elefantes marinos en Tierra del Fuego",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/07/30011859/Albatros_AlejandroVilaWCS-768x512.jpg",
    "fecha": "Aug 03, 2018",
    "url": "https://es.mongabay.com/2018/08/chile-area-marina-tierra-del-fuego/"
  },
  {
    "titulo": "Perú: primer diagnóstico sobre fauna amenazada muestra 64 especies en peligro crítico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/05164501/MTR_6183_mono_nocturno_andino-%C2%A9Michael_Tweddle-768x512.jpg",
    "fecha": "Aug 02, 2018",
    "url": "https://es.mongabay.com/2018/08/peru-libro-rojo-fauna-amenazada/"
  },
  {
    "titulo": "Ecuador: niños aprenden con fascinantes imágenes de jaguares, monos y pumas de la reserva Cuyabeno",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/07/20144009/Ca%CC%81maras-trampa-Jaguar-Pantera-onca-WWF-768x512.png",
    "fecha": "Jul 24, 2018",
    "url": "https://es.mongabay.com/2018/07/ecuador-camaras-trampa-reserva-cuyabeno/"
  },
  {
    "titulo": "Tráfico de fauna: más de mil animales y partes disecadas fueron incautados en el Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/07/18173731/Incautacio%CC%81n-15-13-de-junio-Direccio%CC%81n-de-Medio-Ambiente-PNP-768x512.jpg",
    "fecha": "Jul 18, 2018",
    "url": "https://es.mongabay.com/2018/07/trafico-de-fauna-peru/"
  },
  {
    "titulo": "Mono Tití del Caquetá: de descubierto a En Peligro de extinción en 8 años | Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/05/22183402/Javier-Garcia_Fundacion_Herencia_Natural_Mico-Bonitodel-caqueta_-Plecturocebus-caquetensis-768x512.jpg",
    "fecha": "Jul 12, 2018",
    "url": "https://es.mongabay.com/2018/07/colombia-mono-titi-del-caqueta-en-peligro-de-extincion/"
  },
  {
    "titulo": "Videos: esta es la maravillosa fauna silvestre del ACP Milpuj La Heredad en el Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/02/26181057/Foto-Gato2-768x512.jpg",
    "fecha": "Jul 10, 2018",
    "url": "https://es.mongabay.com/2018/07/peru-fauna-milpuj-la-heredad/"
  },
  {
    "titulo": "Videos: este es el hogar del oso de anteojos en los bosques secos del Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/07/06004017/Nuevo-Oso-Andino-4-SBC-Peru-768x512.jpg",
    "fecha": "Jul 06, 2018",
    "url": "https://es.mongabay.com/2018/07/oso-andino-bosque-seco-peru/"
  },
  {
    "titulo": "Tres razones que explican el peligro de los grandes vertebrados de Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/26091406/IMG_2691_Bolivia-200612-copia_Oso-andino_Robert-Wallace_WCS-768x512.jpg",
    "fecha": "Jul 04, 2018",
    "url": "https://es.mongabay.com/2018/07/peligro-grandes-vertebrados-de-colombia/"
  },
  {
    "titulo": "Imágenes desoladoras: cinco claves para entender el tráfico de fauna en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/14172435/WCS_perezoso-768x512.jpg",
    "fecha": "Jun 27, 2018",
    "url": "https://es.mongabay.com/2018/06/trafico-fauna-cinco-claves-peru/"
  },
  {
    "titulo": "Esta es la selección Colombia de la biodiversidad",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/22044958/mundial-biodiversidad.jpg",
    "fecha": "Jun 22, 2018",
    "url": "https://es.mongabay.com/2018/06/seleccion-colombia-biodiversidad/"
  },
  {
    "titulo": "Tráfico de fauna: estos son los reptiles más amenazados en el Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/22165821/Serfor_decomiso41-768x512.jpg",
    "fecha": "Jun 22, 2018",
    "url": "https://es.mongabay.com/2018/06/reptiles-trafico-especies-peru/"
  },
  {
    "titulo": "Territorios libres de minas antipersonal: se abre una puerta para  la biodiversidad en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/21071435/bi20681-768x512.jpg",
    "fecha": "Jun 21, 2018",
    "url": "https://es.mongabay.com/2018/06/minas-antipersonal-biodiversidad-en-colombia/"
  },
  {
    "titulo": "Los once animales de la selección peruana de la biodiversidad",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/21143037/cancha-final-11-768x512.jpg",
    "fecha": "Jun 21, 2018",
    "url": "https://es.mongabay.com/2018/06/peru-seleccion-peruana-animales/"
  },
  {
    "titulo": "El mono araña regresa a su casa en Tambopata",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/20022938/MTF_1687_foto-Michael_Tweddle-768x513.jpg",
    "fecha": "Jun 20, 2018",
    "url": "https://es.mongabay.com/2018/06/peru-monos-arana-tambopata/"
  },
  {
    "titulo": "Las cámaras trampa del Proyecto Providence revelan los misterios de la Amazonía de Brasil",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/05/24175640/Copia-de-24-04-2015-Equipe-ariranhas-Foto-Amanda-Lelis-37-768x512.jpg",
    "fecha": "Jun 16, 2018",
    "url": "https://es.mongabay.com/2018/06/brasil-camaras-trampa-proyecto-providence/"
  },
  {
    "titulo": "Nuevas rutas y modalidades del tráfico de fauna silvestre en el Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/14172824/Serfor_mono-Serfor-768x512.jpg",
    "fecha": "Jun 14, 2018",
    "url": "https://es.mongabay.com/2018/06/peru-rutas-trafico-fauna-silvestre/"
  },
  {
    "titulo": "Ecuador: Waoranis del Pastaza graban a los increíbles animales que viven en sus bosques | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/13142255/IMG_6162-768x512.jpg",
    "fecha": "Jun 13, 2018",
    "url": "https://es.mongabay.com/2018/06/ecuador-waoranis-camaras-trampa-videos/"
  },
  {
    "titulo": "Nuevo puerto marítimo de carga pone en riesgo a la bahía de Cispatá en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/12181305/Mangles-foto-Clara-Lucia-Sierra-768x512.jpg",
    "fecha": "Jun 12, 2018",
    "url": "https://es.mongabay.com/2018/06/puertos-maritimos-riesgo-bahia-cispata-colombia/"
  },
  {
    "titulo": "Cámara trampa capta por primera vez un oso dorado en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/05163850/MTF_0409_golden_spectacled_bear_%C2%A9michael_tweddle-768x512.jpg",
    "fecha": "Jun 05, 2018",
    "url": "https://es.mongabay.com/2018/06/camara-trampa-oso-dorado-peru/"
  },
  {
    "titulo": "Día mundial del Medio Ambiente: los plásticos están acabando con la vida marina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/02/12223741/Manta-with-plastic-in-Indonesia-Elitza-Germanov-Marine-Megafauna-Foundation-2-768x512.jpg",
    "fecha": "Jun 05, 2018",
    "url": "https://es.mongabay.com/2018/06/dia-mundial-medio-ambiente-plasticos/"
  },
  {
    "titulo": "Colombia: ¿Servirá el cierre de Playa Blanca en Cartagena para salvar a la tortuga Carey?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/05/31194246/Carey_Verde_Corpoturismo.093-768x512.jpg",
    "fecha": "May 31, 2018",
    "url": "https://es.mongabay.com/2018/05/cierre-de-playa-blanca-cartagena-para-salvar-tortuga-carey/"
  },
  {
    "titulo": "Centro de Rescate Amazónico: un refugio de manatíes en la selva peruana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/05/02192234/Educacion-ambiental-CREA-.jpg",
    "fecha": "May 31, 2018",
    "url": "https://es.mongabay.com/2018/05/centro-de-rescate-amazonico-manaties-peru/"
  },
  {
    "titulo": "Las maravillosas nuevas especies registradas en el Parque Nacional Madidi | Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/05/30180318/9_Onychorhynchus-coronatus-coronatus-BF2H4085-768x512.jpg",
    "fecha": "May 30, 2018",
    "url": "https://es.mongabay.com/2018/05/bolivia-expedicion-cientifica-parque-nacional-madidi/"
  },
  {
    "titulo": "Proyecto Providence: monitoreo en tiempo real que integra imágenes y sonidos de la Amazonía",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/05/24175744/09-04-2015-Expedic%CC%A7a%CC%83o-Jabutis-Foto-Amanda-Lelis-421-768x512.jpg",
    "fecha": "May 24, 2018",
    "url": "https://es.mongabay.com/2018/05/proyecto-providence-monitoreo-amazonia/"
  },
  {
    "titulo": "La deforestación en Colombia tiene en peligro de extinción al mono tití del Caquetá",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/05/22182611/Fundaci%C3%B3n_Herencia_Natural_Mico-Bonitodel-caqueta_-Plecturocebus-caquetensis-768x512.jpg",
    "fecha": "May 22, 2018",
    "url": "https://es.mongabay.com/2018/05/mono-titi-del-caqueta-en-peligro-por-deforestacion/"
  },
  {
    "titulo": "Colombia: La muerte de Hugo y Luis, dos líderes que se enfrentaban a Hidroituango",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/05/11181903/Hidroituango-5-768x512.jpg",
    "fecha": "May 11, 2018",
    "url": "https://es.mongabay.com/2018/05/asesinan-dos-lideres-ambientales-opositores-a-hidroituango-colombia/"
  },
  {
    "titulo": "Colombia: 20 años sin un Plan de Manejo Ramsar para la Ciénaga Grande de Santa Marta",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/05/04174706/WhatsApp-Image-2018-05-02-at-4.18.00-PM-768x512.jpeg",
    "fecha": "May 04, 2018",
    "url": "https://es.mongabay.com/2018/05/sitio-ramsar-cienaga-grande-de-santa-marta-colombia-en-peligro/"
  },
  {
    "titulo": "Centro de Rescate Amazónico: nueve mil pequeñas tortugas regresan a la selva del Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/05/02172605/Taricaya-21-768x512.jpg",
    "fecha": "May 02, 2018",
    "url": "https://es.mongabay.com/2018/05/nueve-mil-pequenas-tortugas-selva-peru/"
  },
  {
    "titulo": "La deforestación de la industria petrolera pone en riesgo al Parque Yasuní | Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/04/25073008/Block31Zoom-768x512.png",
    "fecha": "Apr 25, 2018",
    "url": "https://es.mongabay.com/2018/04/ecuador-deforestacion-petroleo-parque-yasuni/"
  },
  {
    "titulo": "La marcha del pingüino de Humboldt en Punta San Juan",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/01/20153301/IMG_4294-720x512.jpg",
    "fecha": "Apr 25, 2018",
    "url": "https://es.mongabay.com/2018/04/pinguino-humboldt-dia-mundial/"
  },
  {
    "titulo": "Complejo Cenagoso de Zapatosa: nuevo sitio Ramsar en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/04/21160604/WhatsApp-Image-2018-04-21-at-8.15.57-AM-1-768x512.jpeg",
    "fecha": "Apr 21, 2018",
    "url": "https://es.mongabay.com/2018/04/zapatosa-nueva-area-protegida-colombia/"
  },
  {
    "titulo": "Un millón de hogares campesinos en Colombia tienen menos tierra que una vaca",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/04/18053901/minagricultura-actualiza-precio-litro-leche-cruda-980-768x400.png",
    "fecha": "Apr 18, 2018",
    "url": "https://es.mongabay.com/2018/04/distribucion-de-la-tierra-en-colombia/"
  },
  {
    "titulo": "Áreas protegidas son insuficientes para proteger los grandes vertebrados de Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/12/28205323/2.-Jaguar-Wikimedia-Commons-768x512.jpg",
    "fecha": "Apr 12, 2018",
    "url": "https://es.mongabay.com/2018/04/areas-protegidas-conservacion-animales-colombia/"
  },
  {
    "titulo": "10 datos sobre la rana boliviana que lucha contra la extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/02/20225615/Romeo01_Photo-by-Matias-Careaga-1-768x512.jpg",
    "fecha": "Apr 11, 2018",
    "url": "https://es.mongabay.com/2018/04/rana-acuatica-extincion-bolivia/"
  },
  {
    "titulo": "Importante avance: mejora la salud del arrecife mesoamericano",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/03/21110616/Francesca-Diaco-Pargos-768x451.jpg",
    "fecha": "Apr 07, 2018",
    "url": "https://es.mongabay.com/2018/04/arrecife-mesoamericano/"
  },
  {
    "titulo": "Salvando la fauna afectada por el derrame de petróleo en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/04/05195604/WhatsApp-Image-2018-04-04-at-6.44.39-AM-768x512.jpeg",
    "fecha": "Apr 06, 2018",
    "url": "https://es.mongabay.com/2018/04/rescate-fauna-derrame-petroleo-colombia/"
  },
  {
    "titulo": "Los sonidos de la biodiversidad: el monitoreo acústico en la investigación científica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/04/04170906/coqui-llanero.png",
    "fecha": "Apr 04, 2018",
    "url": "https://es.mongabay.com/2018/04/sonido-biodiversidad-monitoreo-acustico/"
  },
  {
    "titulo": "La lucha por salvar a los 350 suris que quedan en el Altiplano del Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/03/29074040/suri_Plan-768x511.jpg",
    "fecha": "Mar 29, 2018",
    "url": "https://es.mongabay.com/2018/03/peru-suri-extincion-altiplano/"
  },
  {
    "titulo": "José Luis Mena: las cámaras trampa al servicio de la ciencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/03/22183234/Jose%CC%81-Luis-Mena-2-768x512.jpg",
    "fecha": "Mar 22, 2018",
    "url": "https://es.mongabay.com/2018/03/peru-jose-luis-mena-camaras-trampa/"
  },
  {
    "titulo": "Tráfico de aves en Perú: las 6 especies más buscadas en el mercado ilegal",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/03/06165518/pihuicho_WCS3-768x512.jpg",
    "fecha": "Mar 07, 2018",
    "url": "https://es.mongabay.com/2018/03/peru-trafico-de-aves/"
  },
  {
    "titulo": "Dos nuevos murciélagos con cara de perro descubiertos en Panamá y Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/02/20113806/32-666x512.jpg",
    "fecha": "Feb 27, 2018",
    "url": "https://es.mongabay.com/2018/02/murcielagos-con-cara-de-perro-ecuador-panama/"
  },
  {
    "titulo": "Milpuj La Heredad: felinos y aves captados por cámaras trampa en bosques secos de Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/02/26181048/Foto-Gato-768x512.jpg",
    "fecha": "Feb 26, 2018",
    "url": "https://es.mongabay.com/2018/02/peru-camaras-trampa-en-milpuj-la-heredad/"
  },
  {
    "titulo": "Bosques secos de Perú: esperanza para la conservación en el ACP Milpuj La Heredad",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/02/20080144/Cosecha-de-tara-768x512.jpg",
    "fecha": "Feb 20, 2018",
    "url": "https://es.mongabay.com/2018/02/milpuj-la-heredad-bosques-secos-peru/"
  },
  {
    "titulo": "Colombia: la tortuga carranchina se enfrenta al riesgo de la extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/02/16082104/Tortuga-carranchina-1-1-768x512.jpg",
    "fecha": "Feb 16, 2018",
    "url": "https://es.mongabay.com/2018/02/colombia-tortuga-carranchina/"
  },
  {
    "titulo": "El sangriento y lucrativo tráfico de colmillos de jaguar en Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/01/11232244/COLMILLO-CLOVIS-7.jpg",
    "fecha": "Feb 15, 2018",
    "url": "https://es.mongabay.com/2018/02/bolivia-trafico-de-colmillos-de-jaguar/"
  },
  {
    "titulo": "Perú: cámaras de monitoreo ayudarían a controlar pesca incidental de tortugas y mamíferos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/01/29191529/Tortuga-liberada-768x504.jpg",
    "fecha": "Jan 29, 2018",
    "url": "https://es.mongabay.com/2018/01/pesca-incidental-camaras-monitoreo/"
  },
  {
    "titulo": "Menos de 10 mil: la güiña lucha contra la extinción en bosques de Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/01/25025542/Guina-photo-by-Jerry-Laker-768x511.jpg",
    "fecha": "Jan 25, 2018",
    "url": "https://es.mongabay.com/2018/01/chile-guina-gato-montes-extincion/"
  },
  {
    "titulo": "Océanos de plástico: la biodiversidad marina se ahoga por basura en las playas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/01/24173501/Ilo-El-Puerto-Noticias-768x430.jpg",
    "fecha": "Jan 24, 2018",
    "url": "https://es.mongabay.com/2018/01/oceanos-plastico-en-las-playas/"
  },
  {
    "titulo": "Susana Cárdenas Alayza: defensora de los pingüinos de Humboldt",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/01/20133109/pinguinos-adultos-768x512.jpg",
    "fecha": "Jan 20, 2018",
    "url": "https://es.mongabay.com/2018/01/susana-cardenas-alayza-pinguino-de-humbolt/"
  },
  {
    "titulo": "‘Hormiguero de la Cordillera Azul’: la nueva ave descubierta en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/01/18030909/Hormiguero-de-la-Cordillera-Azul-Myrmoderus-eowilsoni-foto-F.-Angulo-768x512.jpg",
    "fecha": "Jan 18, 2018",
    "url": "https://es.mongabay.com/2018/01/peru-ave-hormiguero-nueva-especie/"
  },
  {
    "titulo": "Chile: estas productoras de salmón usan cantidad excesiva de antibióticos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/09/03172129/003-JA0A5199-495x330.jpg",
    "fecha": "Jan 11, 2018",
    "url": "https://es.mongabay.com/2018/01/chile-salmon-antibioticos/"
  },
  {
    "titulo": "Tráfico de fauna en Perú: ranas y tortugas entre las especies que más se rescataron en el 2017",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/03/30124955/Taricaya_WalterWust_Mongabay3-768x512.jpg",
    "fecha": "Jan 10, 2018",
    "url": "https://es.mongabay.com/2018/01/trafico-fauna-peru-ranas-tortugas-las-especies-mas-se-rescataron-2017/"
  },
  {
    "titulo": "Cinco historias para entender qué significa ser científico en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/09/03171503/biodiversidad_investigacion_cientifica-bosques-areas_naturales_protegidas-conservacion-9-440x330.png",
    "fecha": "Jan 07, 2018",
    "url": "https://es.mongabay.com/2018/01/cientifico-en-latinoamerica/"
  },
  {
    "titulo": "Grandes sorpresas que registraron las cámaras trampa",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/12/29181651/perro_tambopata_camara-683x512-768x463.jpg",
    "fecha": "Jan 02, 2018",
    "url": "https://es.mongabay.com/2018/01/grandes-sorpresas-registraron-las-camaras-trampa/"
  },
  {
    "titulo": "Ecuador: descubren nueva especie de rana en los bosques nublados de la Cordillera del Cóndor",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/12/11165644/nueva-especie-rana-ecuador.jpg",
    "fecha": "Dec 12, 2017",
    "url": "https://es.mongabay.com/2017/12/ecuador-descubren-nueva-especie-rana-los-bosques-nublados-la-cordillera-del-condor/"
  },
  {
    "titulo": "Tráfico de totoaba: un problema de conservación y de seguridad",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/11/27154113/GP0STP8QG-768x451.jpg",
    "fecha": "Dec 07, 2017",
    "url": "https://es.mongabay.com/2017/12/trafico-totoaba-problema-conservacion-seguridad/"
  },
  {
    "titulo": "Madre de Dios: las sorpresas que esconde la selva de Tahuamanu | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/11/14043903/EK002477-720x512.jpg",
    "fecha": "Dec 04, 2017",
    "url": "https://es.mongabay.com/2017/12/peru-tahuamanu-jaguar-yaguarundi-videos/"
  },
  {
    "titulo": "¿Invasión o revolución? El paiche se hace fuerte en la Amazonía de Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/11/25005409/bolivia-paiche-portada-768x420.jpg",
    "fecha": "Nov 27, 2017",
    "url": "https://es.mongabay.com/2017/11/paiche-amazonia-bolivia/"
  },
  {
    "titulo": "Tahuamanu: las sorpresas que esconde la selva de Madre de Dios | VIDEOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/11/14044944/062500311-720x512.jpg",
    "fecha": "Nov 14, 2017",
    "url": "https://es.mongabay.com/2017/11/tahuamanu-jaguar-yaguarundi-videos/"
  },
  {
    "titulo": "Caimán del Orinoco: esto hacen Colombia y Venezuela para protegerlo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/08164025/caiman-llanero-animales-fauna-extincion-colombia-venezuela-768x513.jpg",
    "fecha": "Nov 03, 2017",
    "url": "https://es.mongabay.com/2017/11/caiman-del-orinoco-colombia-venezuela/"
  },
  {
    "titulo": "Perú: esta es  la nueva especie de babosa marina que habita en la costa norte",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/10/23154208/Rostro-felimare-portada-768x512.jpg",
    "fecha": "Oct 27, 2017",
    "url": "https://es.mongabay.com/2017/10/peru-esta-la-nueva-especie-babosa-marina-habita-la-costa-norte/"
  },
  {
    "titulo": "Perú: deforestación causada por extracción de oro continúa en la Amazonía",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/10/16155022/peru_166780-2-768x451.jpg",
    "fecha": "Oct 26, 2017",
    "url": "https://es.mongabay.com/2017/10/peru-deforestacion-causada-extraccion-oro-continua-la-amazonia/"
  },
  {
    "titulo": "Colombia: descubren 47 nuevas especies en la Amazonía",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/10/13235205/Especie-Nueva-Pristimantis-sp.-portada-768x512.jpg",
    "fecha": "Oct 20, 2017",
    "url": "https://es.mongabay.com/2017/10/colombia-descubren-47-nuevas-especies-la-amazonia/"
  },
  {
    "titulo": "Colombia: una bióloga tras las huellas de las tortugas marinas en Serrana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/10/13203444/tortugas-portada-768x512.jpg",
    "fecha": "Oct 19, 2017",
    "url": "https://es.mongabay.com/2017/10/colombia-una-biologa-tras-las-huellas-las-tortugas-marinas-serrana/"
  },
  {
    "titulo": "Ecuador: cinco claves para entender por qué el oso de anteojos está en peligro",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/02/17180443/PICT0004-768x432.jpg",
    "fecha": "Oct 18, 2017",
    "url": "https://es.mongabay.com/2017/10/ecuador-cinco-claves-oso-anteojos-peligro/"
  },
  {
    "titulo": "Colombia: potencial económico y de conservación del aviturismo en áreas posconflicto",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/10/13221044/Avituristas-portada-768x502.jpg",
    "fecha": "Oct 17, 2017",
    "url": "https://es.mongabay.com/2017/10/colombia-estudio-analiza-potencial-economico-conservacion-del-aviturismo-areas-posconflicto/"
  },
  {
    "titulo": "Perú: ¿Cómo puedes ayudar con tus fotos a combatir el comercio ilegal de fauna?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/10/03171152/cazador_traficodeespecies_mongabay-6-508x330.jpg",
    "fecha": "Sep 21, 2017",
    "url": "https://es.mongabay.com/2017/09/peru-fotos-combatir-comercio-ilegal-fauna/"
  },
  {
    "titulo": "Los últimos guanacos del Gran Chaco en Bolivia y los indígenas guaraníes que quieren salvarlos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/09/15224932/bolivia-gran-chaco-guanaco-portada-768x448.jpg",
    "fecha": "Sep 18, 2017",
    "url": "https://es.mongabay.com/2017/09/bolivia-salvar-guanacos-del-gran-chaco/"
  },
  {
    "titulo": "Chile: tres historias sobre su riqueza natural y la importancia de protegerla",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/02/09202159/juan-fernandez-768x439.jpg",
    "fecha": "Sep 17, 2017",
    "url": "https://es.mongabay.com/2017/09/chile-tres-historias-riqueza-natural-la-importancia-protegerla/"
  },
  {
    "titulo": "Animales que nunca pensaste ver tan cerca",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/07/21224144/otorongo_madrededios_tambopata-683x512.jpg",
    "fecha": "Jul 21, 2017",
    "url": "https://es.mongabay.com/2017/07/animales-camaras-trampa-conservacion-especies/"
  },
  {
    "titulo": "¿Fauna urbana? Curiosos habitantes en la ciudad",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/07/05210653/halcon_acanelado-768x511.png",
    "fecha": "Jul 05, 2017",
    "url": "https://es.mongabay.com/2017/07/fauna-urbana-lima-animales/"
  },
  {
    "titulo": "Ecuador: la difícil realidad del delfín nariz de botella en el Golfo de Guayaquil",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/06/26195155/Delf%C3%ADn-con-cicatriz-1-F-F%C3%A9lix-768x396.jpg",
    "fecha": "Jun 27, 2017",
    "url": "https://es.mongabay.com/2017/06/ecuador-la-dificil-realidad-del-delfin-nariz-botella-golfo-guayaquil/"
  },
  {
    "titulo": "Perder animales grandes causa serios problemas en los bosques tropicales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/06/22082726/Pyroderus_scutatus-683x512.jpg",
    "fecha": "Jun 22, 2017",
    "url": "https://es.mongabay.com/2017/06/perder-animales-grandes-causa-serios-problemas-los-bosques-tropicales/"
  },
  {
    "titulo": "Guacamayo barba azul: cómo revitalizar poblaciones silvestres de loros con aves cautivas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/06/06163334/NEW-FEATURED-515x512.jpg",
    "fecha": "Jun 07, 2017",
    "url": "https://es.mongabay.com/2017/06/notas-de-campo-revitalizar-poblaciones-silvestres-de-loros-con-aves-cautivas/"
  },
  {
    "titulo": "Descubren una nueva especie de rana de cristal en la Amazonía ecuatoriana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/06/05150635/rana-de-cristal-ecuador-2-768x512.jpg",
    "fecha": "Jun 06, 2017",
    "url": "https://es.mongabay.com/2017/06/rana-amazonia-ecuador-animales/"
  },
  {
    "titulo": "Estas son las cinco noticias más leídas de mayo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/11215810/biodiversidad-conservacion-reforestacion-animales-colombia-6-768x466.jpg",
    "fecha": "May 31, 2017",
    "url": "https://es.mongabay.com/2017/05/estas-las-cinco-noticias-mas-leidas-mayo/"
  },
  {
    "titulo": "Boliviana ganadora de Premio Whitley: 18 años trabajando en la conservación del oso andino",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/29173555/bolivia-oso-andino-3.jpg",
    "fecha": "May 31, 2017",
    "url": "https://es.mongabay.com/2017/05/boliviana-ganadora-premio-whitley-18-anos-trabajando-la-conservacion-del-oso-andino/"
  },
  {
    "titulo": "Perú: el mono choro de cola amarilla se aferra a la vida en los bosques nublados",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/15154339/mono-choro-peru-biodiversidad-animales-4-768x510.jpg",
    "fecha": "May 27, 2017",
    "url": "https://es.mongabay.com/2017/05/peru-mono-choro-de-cola-amarilla/"
  },
  {
    "titulo": "Galápagos: la culebra de Floreana y el centenario misterio de su ausencia en su isla",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/24232456/galapagos-islas-culebras-6-683x512.jpg",
    "fecha": "May 25, 2017",
    "url": "https://es.mongabay.com/2017/05/ecuador-galapagos-culebra-de-floreana-misterio/"
  },
  {
    "titulo": "Fauna en peligro de extinción: siete historias de especies emblemáticas bajo amenaza",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/08172734/bolivia-guacamayos-animales-extincion-765x512.jpg",
    "fecha": "May 22, 2017",
    "url": "https://es.mongabay.com/2017/05/fauna-peligro-extincion-siete-historias-especies-emblematicas-amenaza/"
  },
  {
    "titulo": "Papagayo de Guayaquil: ave emblema de la ciudad bajo amenaza por la destrucción de su hábitat",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/19225439/papagayo-de-guayaquil-ecuador-3-768x512.jpg",
    "fecha": "May 21, 2017",
    "url": "https://es.mongabay.com/2017/05/ecuador-guayaquil-papagayo-extincion/"
  },
  {
    "titulo": "Cardenalito: belleza alada que desaparece progresivamente de cielos y bosques de Venezuela",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/20151729/cardenalito-11-768x395.jpg",
    "fecha": "May 20, 2017",
    "url": "https://es.mongabay.com/2017/05/cardenalito-venezuela-extincion/"
  },
  {
    "titulo": "Ajolote: el símbolo mexicano que se resiste a la extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/18212356/ajolote-mexico-animales-fauna-biodiversidad-3-768x465.jpg",
    "fecha": "May 19, 2017",
    "url": "https://es.mongabay.com/2017/05/ajolote-lucha-contra-extincion/"
  },
  {
    "titulo": "Huemul: ganadería, crecimiento urbano y turismo acorralan al ciervo emblemática de Argentina y Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/17192453/huemul-argentina-chile-animales-fauna-6-678x512.jpg",
    "fecha": "May 18, 2017",
    "url": "https://es.mongabay.com/2017/05/huemul-argentina-chile/"
  },
  {
    "titulo": "El barbudito azul está de regreso y se resiste a desaparecer | Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/16234638/colombia-fauna-barbudito-azul-768x431.jpg",
    "fecha": "May 17, 2017",
    "url": "https://es.mongabay.com/2017/05/colombia-aves-barbudito-azul/"
  },
  {
    "titulo": "Paraba frente roja: volando entre amenazas y esfuerzos de conservación",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/08173934/bolivia-guacamayos-animales-extincion-8-693x512.jpg",
    "fecha": "May 16, 2017",
    "url": "https://es.mongabay.com/2017/05/guacamayo-frente-roja-volando-amenazas-esfuerzos-conservacion/"
  },
  {
    "titulo": "Día de la Madre: la fauna silvestre y sus muestras de amor maternal",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/14134909/armadillo_gigante_mongabay2.jpg",
    "fecha": "May 14, 2017",
    "url": "https://es.mongabay.com/2017/05/dia-madre-conservacion-animales/"
  },
  {
    "titulo": "¿Qué hacen Venezuela y Colombia para preservar al caimán del Orinoco?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/08164522/caiman-llanero-animales-fauna-extincion-colombia-venezuela-5-683x512.jpg",
    "fecha": "May 12, 2017",
    "url": "https://es.mongabay.com/2017/05/hacen-venezuela-colombia-preservar-al-caiman-del-orinoco/"
  },
  {
    "titulo": "El ecólogo mexicano José Sarukhán gana el Premio Tyler 2017",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/07070309/Screen-Shot-2017-05-03-at-12.21.10-PM-1-768x479.png",
    "fecha": "May 08, 2017",
    "url": "https://es.mongabay.com/2017/05/ecologo-mexicano-jose-sarukhan-gana-premio-tyler-2017/"
  },
  {
    "titulo": "El cóndor andino retorna a sus territorios ancestrales en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/05/03153035/colombia-condor-andino-768x432.jpg",
    "fecha": "May 03, 2017",
    "url": "https://es.mongabay.com/2017/05/colombia-condor-andino/"
  },
  {
    "titulo": "Día de la Tierra: cinco historias que muestran cómo la dañamos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/03/30125013/mineria-mercurio-rios-pueblos_indigenas-colombia-8-768x512.jpg",
    "fecha": "Apr 22, 2017",
    "url": "https://es.mongabay.com/2017/04/dia-la-tierra-cinco-historias-muestran-la-danamos/"
  },
  {
    "titulo": "Perú: sorprendentes registros con cámaras trampa y nuevos insectos  en Tambopata",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/04/19191853/Amazonia-tambopata-animales-2-683x512.jpg",
    "fecha": "Apr 20, 2017",
    "url": "https://es.mongabay.com/2017/04/tambopata-amazonia-jaguar-animales/"
  },
  {
    "titulo": "Última muerte revela la difícil situación del oso de anteojos en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/04/30124608/1200px-Tremarctos_ornatus_25-768x512.jpg",
    "fecha": "Apr 12, 2017",
    "url": "https://es.mongabay.com/2017/04/ultima-muerte-revela-la-dificil-situacion-del-oso-anteojos-colombia/"
  },
  {
    "titulo": "La lucha para salvar al cóndor andino en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/04/30124622/condor1-768x512.jpg",
    "fecha": "Apr 11, 2017",
    "url": "https://es.mongabay.com/2017/04/condor-andino-ecuador/"
  },
  {
    "titulo": "¿Cuáles son las amenazas para el oso hormiguero en Colombia?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/04/30124627/oso-hormiguero-colombia-animales-biodiversidad-768x512.jpg",
    "fecha": "Apr 10, 2017",
    "url": "https://es.mongabay.com/2017/04/colombia-oso-hormiguero/"
  },
  {
    "titulo": "Comercio ilegal: una amenaza para las tortugas charapa y terecay en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/04/14172309/es-turtles-768x280.jpg",
    "fecha": "Apr 06, 2017",
    "url": "https://es.mongabay.com/2017/04/comercio-ilegal-una-amenaza-las-tortugas-charapa-terecay-colombia/"
  },
  {
    "titulo": "Ecuador: descubren cuatro nuevas especies de ranas en el Parque Nacional Sangay",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/04/30124710/ecuador-biodiversidad-ranas-768x476.jpg",
    "fecha": "Apr 05, 2017",
    "url": "https://es.mongabay.com/2017/04/ecuador-descubren-cuatro-nuevas-especies-ranas-parque-nacional-sangay/"
  },
  {
    "titulo": "Las cinco noticias ambientales más leídas de marzo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/03/30124759/inundaciones-nino_costero-rios-desastres_ambientales-11-768x431.jpeg",
    "fecha": "Mar 31, 2017",
    "url": "https://es.mongabay.com/2017/03/las-cinco-noticias-ambientales-mas-leidas-marzo/"
  },
  {
    "titulo": "Descubren la primera rana fluorescente del mundo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/03/30124754/fluorescent-frog-768x461.jpg",
    "fecha": "Mar 29, 2017",
    "url": "https://es.mongabay.com/2017/03/descubren-la-primera-rana-fluorescente-del-mundo/"
  },
  {
    "titulo": "Jaguares en peligro: un estudio revela que su estado de conservación es crítico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/03/02221104/felinos-bosques-amazonia-biodiversidad-animales-4-e1670019063787-768x512.jpg",
    "fecha": "Mar 23, 2017",
    "url": "https://es.mongabay.com/2017/03/jaguares-peligro-estudio-revela-estado-conservacion-critico/"
  },
  {
    "titulo": "Encontrar a Jacobo: un gato andino cautiva a los conservacionistas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/03/30124945/FEATURED-cat-2-457x512.jpg",
    "fecha": "Mar 21, 2017",
    "url": "https://es.mongabay.com/2017/03/gato-andino-jacobo/"
  },
  {
    "titulo": "Bolivia: Gran Mojos, nueva reserva que trae esperanza para el jaguar y el guacamayo Barba  Azul",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/03/30124952/bolivia-gran-mojos-area-protegida-768x431.jpg",
    "fecha": "Mar 14, 2017",
    "url": "https://es.mongabay.com/2017/03/bolivia-gran-mojos-nueva-reserva-trae-esperanza-jaguar-guacamayo-barba-azul/"
  },
  {
    "titulo": "¿Cuál es la situación actual de los primates en Colombia?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/02/27182230/colombia-primates-biodiversidad-fauna-animales-4-683x512.jpg",
    "fecha": "Mar 01, 2017",
    "url": "https://es.mongabay.com/2017/03/la-situacion-actual-los-primates-colombia/"
  },
  {
    "titulo": "Imperdibles: las cinco noticias ambientales más leídas de febrero",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/03/30125109/militarizacion-ecuador-shuar-conflicto-768x510.jpg",
    "fecha": "Mar 01, 2017",
    "url": "https://es.mongabay.com/2017/03/imperdibles-las-cinco-noticias-ambientales-mas-leidas-febrero/"
  },
  {
    "titulo": "El bagre gigante registra la migración de agua dulce más larga del mundo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/02/21183657/1_MichaelGoulding_HiRes_002235_BlackBackground-1196x800-765x512.jpg",
    "fecha": "Feb 22, 2017",
    "url": "https://es.mongabay.com/2017/02/bagre-gigante-registra-la-migracion-agua-dulce-mas-larga-del-mundo/"
  },
  {
    "titulo": "Colombia: el tapir se deja ver después de casi 20 años y sorprende en el Magdalena Medio antioqueño",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/02/20174146/danta-768x363.jpg",
    "fecha": "Feb 21, 2017",
    "url": "https://es.mongabay.com/2017/02/colombia-tapir-se-deja-ver-despues-casi-20-anos-sorprende-magdalena-medio-antioqueno/"
  },
  {
    "titulo": "Día Internacional para la protección de los Osos: tres historias sobre el oso de anteojos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/11/09195039/plan_conservacion_mongabay-1-508x330.jpg",
    "fecha": "Feb 21, 2017",
    "url": "https://es.mongabay.com/2017/02/dia-internacional-la-proteccion-los-osos-tres-historias-oso-anteojos/"
  },
  {
    "titulo": "Oso de anteojos: entre el peligro y la supervivencia en el sur de Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/02/17180443/PICT0004-768x432.jpg",
    "fecha": "Feb 20, 2017",
    "url": "https://es.mongabay.com/2017/02/oso-anteojos-peligro-la-supervivencia-sur-ecuador/"
  },
  {
    "titulo": "Las tortugas gigantes de Galápagos y su lento camino hacia la recuperación",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/02/15185422/galapagos-tortugas-ecuador-9-768x462.jpg",
    "fecha": "Feb 15, 2017",
    "url": "https://es.mongabay.com/2017/02/ecuador-tortugas-gigantes-de-galapagos/"
  },
  {
    "titulo": "Colombia: las comunidades rurales y su papel clave para la conservación del puma",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/02/14141205/puma-colombia-683x512.jpg",
    "fecha": "Feb 14, 2017",
    "url": "https://es.mongabay.com/2017/02/colombia-las-comunidades-rurales-papel-clave-la-conservacion-del-puma/"
  },
  {
    "titulo": "Lanzan expedición para encontrar especie de mono que no se ve desde la década de 1930",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/02/07163112/Pithecia_irrorata_-Brazil-8b-613x512.jpg",
    "fecha": "Feb 08, 2017",
    "url": "https://es.mongabay.com/2017/02/expedicion-especie-mono-primate/"
  },
  {
    "titulo": "Nuevos mapas de biodiversidad revelan grandes vacíos en la conservación",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/02/02155613/IMG_4443-683x512.jpg",
    "fecha": "Feb 03, 2017",
    "url": "https://es.mongabay.com/2017/02/nuevos-mapas-biodiversidad-revelan-grandes-vacios-la-conservacion/"
  },
  {
    "titulo": "Fauna endémica de Galápagos: ¿Víctima de los impactos de El Niño?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/01/24134600/galapagos-lobos-marinos-768x377.jpg",
    "fecha": "Jan 24, 2017",
    "url": "https://es.mongabay.com/2017/01/fauna-endemica-galapagos-victima-los-impactos-nino/"
  },
  {
    "titulo": "Perú: Nueva especie de rana venenosa descubierta en las laderas amazónicas de los Andes",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/01/23151756/Ameerega-sp.-nov-768x512.jpg",
    "fecha": "Jan 23, 2017",
    "url": "https://es.mongabay.com/2017/01/peru-nueva-especie-rana-venenosa-descubierta-las-laderas-amazonicas-los-andes/"
  },
  {
    "titulo": "‘Corriendo contra el tiempo’ para salvar al taguá y su hogar en el Chaco",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/01/17224911/Tagua%CC%81-Bolivia-768x512.jpg",
    "fecha": "Jan 19, 2017",
    "url": "https://es.mongabay.com/2017/01/corriendo-tiempo-salvar-al-tagua-hogar-chaco/"
  },
  {
    "titulo": "Perú: rescatan cuatro armadillos que eran usados en rituales de limpieza",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2017/01/08135024/armadillo_rescate_mongabay1-683x512.jpg",
    "fecha": "Jan 08, 2017",
    "url": "https://es.mongabay.com/2017/01/peru-armadillos-rescate-especies-amenazadas/"
  },
  {
    "titulo": "Latinoamérica: las ocho historias ambientales más importantes del 2016",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2015/12/28022057/miner%C3%ADa-venezuela-768x485.jpg",
    "fecha": "Dec 28, 2016",
    "url": "https://es.mongabay.com/2016/12/conflictos-pueblos_indigenas-areas_naturales_protegidas-amazonia-deforestacion-conflictos-latinoamerica-lo_mas_leido_2016/"
  },
  {
    "titulo": "2016: un año crítico para el Parque Nacional  Madidi en Bolivia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/09/03172100/Guacamayos-aliverde-Ara-chloroptera-en-el-Parque-Madidi-495x330.png",
    "fecha": "Dec 22, 2016",
    "url": "https://es.mongabay.com/2016/12/2016-ano-critico-parque-nacional-madidi-bolivia/"
  },
  {
    "titulo": "¿Qué especies se descubrieron en el 2016 y cuáles podrían desaparecer?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/11/17004509/biodiversidad-extincion-animales-areas_naturales_protegidas-gatos-9-495x330.jpg",
    "fecha": "Dec 19, 2016",
    "url": "https://es.mongabay.com/2016/12/especies-se-descubrieron-2016-cuales-podrian-desaparecer/"
  },
  {
    "titulo": "Perú: rescatan 25 aves silvestres que iban a ser comercializadas ilegalmente en Europa",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/12/15151421/trafico_aves_mongabay4-768x509.jpg",
    "fecha": "Dec 15, 2016",
    "url": "https://es.mongabay.com/2016/12/peru-aves-trafico/"
  },
  {
    "titulo": "Ecuador: las especies invasoras amenazan la biodiversidad en Galápagos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/12/15001407/galapagos-3-768x501.jpg",
    "fecha": "Dec 15, 2016",
    "url": "https://es.mongabay.com/2016/12/ecuador-galapagos-especies-invasoras/"
  },
  {
    "titulo": "Zoocría en Colombia: ¿es sostenible y garantiza la conservación de animales silvestres?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/12/12172629/mariposa-colombia-zoocria-2.jpg",
    "fecha": "Dec 13, 2016",
    "url": "https://es.mongabay.com/2016/12/zoocria-en-colombia/"
  },
  {
    "titulo": "Las especies invasoras no dan tregua en Colombia: ¿Qué daños generan?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/12/06195422/gecko-comun-especies-invasoras-768x382.jpg",
    "fecha": "Dec 06, 2016",
    "url": "https://es.mongabay.com/2016/12/las-especies-invasoras-no-dan-tregua-colombia-danos-generan/"
  },
  {
    "titulo": "Expedición a Cuba busca especies nuevas y endémicas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/12/01144639/FEAT-2-2-768x497.jpg",
    "fecha": "Dec 02, 2016",
    "url": "https://es.mongabay.com/2016/12/notas-de-campo-expedicion-a-cuba-busca-especies-nuevas-y-endemicas/"
  },
  {
    "titulo": "Ecuador: Consumo de carne silvestre pone en jaque a especies amenazadas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/11/28235423/Decomiso-de-carne-de-guanta-y-mono-en-Orellana-520x272.jpg",
    "fecha": "Nov 30, 2016",
    "url": "https://es.mongabay.com/2016/11/ecuador-consumo-carne-silvestre-pone-jaque-especies-amenazadas/"
  },
  {
    "titulo": "La “serpiente cantante” es en realidad una nueva especie de rana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/11/29162303/Tree-frog-Tepuhyla-shushupe-520x293.jpg",
    "fecha": "Nov 30, 2016",
    "url": "https://es.mongabay.com/2016/11/la-serpiente-cantante-realidad-una-nueva-especie-rana/"
  },
  {
    "titulo": "El tití gris: el pequeño mono colombiano que se resiste a desaparecer",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/11/21185109/titi-gris-colombia-496x330.jpg",
    "fecha": "Nov 23, 2016",
    "url": "https://es.mongabay.com/2016/11/colombia-titi-gris-conservacion/"
  },
  {
    "titulo": "Identificación de los murciélagos amazónicos toma vuelo con una nueva guía interactiva",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/11/07150924/FEATURED-Bats-506x330.jpg",
    "fecha": "Nov 16, 2016",
    "url": "https://es.mongabay.com/2016/11/identificacion-los-murcielagos-amazonicos-toma-vuelo-una-nueva-guia-interactiva/"
  },
  {
    "titulo": "Fauna silvestre atropellada en Colombia: una amenaza para la conservación de especies",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/11/08142744/Zorro-Perro-Cerdocyon-thous-Arrollado-en-la-Variante-Las-Palmas-Envigado.-Foto-de-Tayra-520x230.jpg",
    "fecha": "Nov 08, 2016",
    "url": "https://es.mongabay.com/2016/11/fauna-silvestre-atropellada-colombia-animales/"
  },
  {
    "titulo": "ESPECIAL Fauna silvestre a la venta: ¿qué opinan los expertos?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/10/03171107/biodiversidad-extincion-trafico_de_especies-amazonia-colombia-2-496x330.jpg",
    "fecha": "Oct 26, 2016",
    "url": "https://es.mongabay.com/2016/10/biodiversidad-trafico_de_especies-animales-extincion-latinoamerica/"
  },
  {
    "titulo": "ESPECIAL Fauna silvestre a la venta: el tráfico de animales en cifras",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2015/10/03171138/biodiversidad-extincion-trafico_de_especies-amazonia-bolivia-3-440x330.jpg",
    "fecha": "Oct 24, 2016",
    "url": "https://es.mongabay.com/2016/10/fauna-silvestre-trafico-animales/"
  },
  {
    "titulo": "Nueva área privada de Perú conservará biodiversidad en estado vulnerable",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/08/03172329/Cerro-Campana-508x330.jpg",
    "fecha": "Aug 17, 2016",
    "url": "https://es.mongabay.com/2016/08/nueva-area-conservacion-privada-peru-conservara-biodiversidad-estado-vulnerable/"
  },
  {
    "titulo": "Yaguarundi: el gato misterioso necesita más conservación e investigación | FOTOS",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/07/03172619/jaguarundi-edit-header-520x270.jpg",
    "fecha": "Jul 13, 2016",
    "url": "https://es.mongabay.com/2016/07/el-misterioso-yaguarundi/"
  },
  {
    "titulo": "Última actualización automática - Thu Feb 26 01:47:30 2026",
    "imagen": "",
    "fecha": "",
    "url": "#"
  }
];