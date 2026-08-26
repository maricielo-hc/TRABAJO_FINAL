const articulos = [
  {
    "titulo": "Cero atropellos: los puentes que salvan animales de las carreteras en la Amazonía de Brasil",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/08/21160605/PORTADA-4-Macaco-aranha_Credito_Sergio-Leal-1-scaled-1-scaled-1-768x512.jpeg",
    "fecha": "Aug 25, 2026",
    "url": "https://es.mongabay.com/2026/08/cero-atropellos-puentes-salvan-animales-carreteras-amazonia-brasil/"
  },
  {
    "titulo": "Gobierno de Chile evalúa permitir la caza de lobos marinos ante conflicto con pescadores pero científicos plantean alternativas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/08/24160224/WhatsApp-Image-2026-08-24-at-08.48.42-768x512.jpeg",
    "fecha": "Aug 24, 2026",
    "url": "https://es.mongabay.com/2026/08/chile-evalua-caza-lobos-marinos-conflicto-pescadores-cientificos-plantean-alternativas/"
  },
  {
    "titulo": "Tapires, murciélagos y nidos: cómo el plástico se infiltra en la fauna amazónica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/06/01231152/Captura-de-Pantalla-2023-06-01-a-las-17.11.33-768x512.png",
    "fecha": "Aug 21, 2026",
    "url": "https://es.mongabay.com/2026/08/tapires-murcielagos-nidos-plastico-fauna-amazonica/"
  },
  {
    "titulo": "Entre bosques, lagunas y picaflores: el santuario peruano que protege al árbol del sol | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/06/08230402/Blue-mantled-Thornbill-Chalcostigma-stanleyi-768x512.jpg",
    "fecha": "Aug 21, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/08/bosques-lagunas-picaflores-santuario-peruano-protege-arbol-sol-reportaje-fotografico/"
  },
  {
    "titulo": "“La solución no es crear más centros de custodia; es frenar el tráfico, hacer cumplir las leyes, controlar y educar” | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/08/18232139/IMG-20240904-WA00711-1-768x512.jpg",
    "fecha": "Aug 20, 2026",
    "url": "https://es.mongabay.com/2026/08/rescate-fauna-frenar-trafico-cumplir-leyes-controlar-educar-entrevista/"
  },
  {
    "titulo": "El vuelo que inquieta a las rapaces: así reaccionan estas aves ante los drones, según una década de estudios en Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/08/13212256/Captura-de-pantalla-2026-08-13-a-las-2.21.59-p.m-768x512.png",
    "fecha": "Aug 15, 2026",
    "url": "https://es.mongabay.com/2026/08/rapaces-aves-drones-estudios-latinoamerica/"
  },
  {
    "titulo": "Argentina: la población de guanacos en Santa Cruz logró recuperarse y alcanzaría los 2 millones, según nuevo estudio",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/11/24192110/Guanacos-en-Argentina-Antonella-Panebianco-2-768x512.jpeg",
    "fecha": "Aug 10, 2026",
    "url": "https://es.mongabay.com/short-article/2026/08/argentina-poblacion-guanacos-santa-cruz-logro-recuperarse-alcanzaria-millones/"
  },
  {
    "titulo": "Ranas, aves, tortugas, peces y felinos: la fauna de Brasil enfrenta una creciente ola de amenazas | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/06/22130834/Un-cuervo-frutero-de-garganta-purpura-Querula-purpurata-una-de-las-aves-mas-grandes-afectadas-por-la-intensificacion-del-cultivo-de-acai.-Foto-lwolfartist-via-Wikimedia-Commons-CC-BY-2.0-768x512.jpg",
    "fecha": "Aug 09, 2026",
    "url": "https://es.mongabay.com/2026/08/ranas-aves-tortugas-peces-felinos-fauna-brasil-enfrenta-amenazas-lecturas-ambientales/"
  },
  {
    "titulo": "El limbo legal de los delfines mantenidos en cautiverio en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/08/06113912/Captura-de-pantalla-2026-08-06-a-las-4.38.28-a.m-768x512.png",
    "fecha": "Aug 08, 2026",
    "url": "https://es.mongabay.com/2026/08/limbo-legal-delfines-mantenidos-cautiverio-mexico/"
  },
  {
    "titulo": "Perú: el atractivo gallito de las rocas y la extraordinaria biodiversidad del parque Yanachaga-Chemillén | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/09/19015121/CQS1427-768x512.jpg",
    "fecha": "Aug 07, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/08/peru-atractivo-gallito-rocas-extraordinaria-biodiversidad-parque-yanachaga-chemillen-reportaje-fotografico/"
  },
  {
    "titulo": "El regreso histórico de las ballenas al Mar Argentino enfrenta una nueva carrera contra el tiempo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/05/31175634/CCC_SouthernRightWhale1006_112-768x512.jpg",
    "fecha": "Aug 05, 2026",
    "url": "https://es.mongabay.com/2026/08/regreso-historico-ballenas-mar-argentino-enfrenta-nueva-carrera-contra-el-tiempo/"
  },
  {
    "titulo": "Leucemia, sida, moquillo y sarna: enfermedades transmitidas por perros y gatos domésticos amenazan a los felinos salvajes | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/15201045/2-Proyecto-Sacha-1-768x512.jpeg",
    "fecha": "Aug 02, 2026",
    "url": "https://es.mongabay.com/2026/08/leucemia-sida-moquillo-sarna-enfermedades-transmitidas-perros-gatos-domesticos-amenazan-felinos-salvajes/"
  },
  {
    "titulo": "Capibaras, caimanes y asombrosos bosques: un viaje por Tapiche Blanco, joya de la Amazonía peruana | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/10/12215300/IMG_3267-2-768x512.jpg",
    "fecha": "Aug 01, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/08/capibaras-caimanes-asombrosos-bosques-tapiche-blanco-joya-amazonia-peruana-reportaje-fotografico/"
  },
  {
    "titulo": "Un ejército de abejas nativas sostiene la producción de camu-camu, el fruto amazónico más rico en vitamina C",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/09/25014706/Camu-Camu-6-Foto-Sinchi-768x512.jpg",
    "fecha": "Jul 30, 2026",
    "url": "https://es.mongabay.com/short-article/2026/07/ejercito-abejas-nativas-sostiene-produccion-camu-camu-fruto-amazonico-rico-vitaminas/"
  },
  {
    "titulo": "Brasil: la tortuga del río Amazonas ya está en peligro de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/29025426/tortuga-del-rio-amazonas-brasil-peligro-extincion-portada-768x512.jpg",
    "fecha": "Jul 30, 2026",
    "url": "https://es.mongabay.com/2026/07/tortuga-del-rio-amazonas-brasil-peligro-extincion/"
  },
  {
    "titulo": "Ballenas sei en Argentina: el tercer animal más grande regresó a la Patagonia y las rastrean satelitalmente para protegerlas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/27192704/ballena-sei1-768x512.jpg",
    "fecha": "Jul 28, 2026",
    "url": "https://es.mongabay.com/2026/07/ballenas-sei-argentina-tercer-animal-mas-grande-regreso-patagonia-rastrean-satelitalmente-protegerlas/"
  },
  {
    "titulo": "Cinco casos de tráfico ilegal de especies que alarman a América Latina | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2016/11/09195758/plan_conservacion_mongabay-8-493x330.jpg",
    "fecha": "Jul 26, 2026",
    "url": "https://es.mongabay.com/2026/07/cinco-casos-trafico-ilegal-especies-alarman-america-latina-lecturas-ambientales/"
  },
  {
    "titulo": "La cercanía con las mascotas está enfermando a los felinos silvestres de Costa Rica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/18021017/Foto-principal-Credito_-Pepe-Manzanilla-Centro-de-Rescate-Las-Pumas-768x512.jpg",
    "fecha": "Jul 25, 2026",
    "url": "https://es.mongabay.com/2026/07/cercania-con-mascotas-esta-enfermando-felinos-silvestres-costa-rica/"
  },
  {
    "titulo": "Los gatos silvestres de Brasil enfrentan múltiples enfermedades por la fragmentación de su hábitat",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/16181116/082_Ocelot_in_Encontro_das_Aguas_State_Park_Photo_by_Giles_Laurent-768x512.jpg",
    "fecha": "Jul 24, 2026",
    "url": "https://es.mongabay.com/2026/07/gatos-silvestres-brasil-enfrentan-multiples-enfermedades-fragmentacion-habitat/"
  },
  {
    "titulo": "Perú: detienen a precandidata de Fuerza Popular por supuesto tráfico de fauna silvestre",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/21193317/Caso-Los-Peludos-hermanas-ferreyra-trafico-de-fauna-Ministerio-Publico-768x512.jpeg",
    "fecha": "Jul 23, 2026",
    "url": "https://es.mongabay.com/short-article/2026/07/peru-detienen-precandidata-fuerza-popular-supuesto-trafico-fauna-silvestre/"
  },
  {
    "titulo": "El gato montés en Bolivia enfrenta la amenaza del virus de la panleucopenia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/16190151/Foto-6-768x512.jpg",
    "fecha": "Jul 23, 2026",
    "url": "https://es.mongabay.com/2026/07/virus-panleucopenia-amenaza-supervivencia-gato-montes-bolivia/"
  },
  {
    "titulo": "Leucemia y moquillo: las enfermedades de animales domésticos que acechan al ocelote en Ecuador",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/14225907/1-OCELOTE-REINSERTADO-768x512.jpeg",
    "fecha": "Jul 22, 2026",
    "url": "https://es.mongabay.com/2026/07/leucemia-moquillo-enfermedades-animales-domesticos-acechan-ocelote-ecuador/"
  },
  {
    "titulo": "Enfermedades de animales domésticos acorralan al gato colocolo en Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/14184651/PORTADA-Gato-colocolo-Francisco-Andreas-Colocolo_-768x512.jpg",
    "fecha": "Jul 22, 2026",
    "url": "https://es.mongabay.com/2026/07/enfermedades-animales-domesticos-acorralan-gato-colocolo-chile/"
  },
  {
    "titulo": "Cuando la carretera divide el bosque: los pasos de fauna reducen atropellamientos, pero requieren un sistema integral | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/20052147/Captura-de-pantalla-2026-07-19-a-las-10.21.16-p.m-768x512.png",
    "fecha": "Jul 21, 2026",
    "url": "https://es.mongabay.com/2026/07/carretera-divide-bosque-pasos-fauna-reducen-atropellamientos-requieren-sistema-integral/"
  },
  {
    "titulo": "Última actualización automática - Wed Aug 26 06:38:04 2026",
    "imagen": "",
    "fecha": "",
    "url": "#"
  }
];