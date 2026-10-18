const articulos = [
  {
    "titulo": "Delfines, marsopas y albatros mueren por la pesca en Latinoamérica: científicos buscan soluciones para protegerlos | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/29122828/marsopa-espinosa-2-768x512.jpeg",
    "fecha": "Oct 17, 2026",
    "url": "https://es.mongabay.com/2026/10/delfines-marsopas-albatros-mueren-pesca-latinoamerica-cientificos-buscan-soluciones-coyuntura-ambiental/"
  },
  {
    "titulo": "Tapir Valley: la reserva en Costa Rica donde la conservación de la danta permite recuperar el árbol endémico jícaro danto",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/14221352/Foto-5-1-768x512.jpg",
    "fecha": "Oct 17, 2026",
    "url": "https://es.mongabay.com/2026/10/ciencia-estiercol-danta-monitoreo-reserva-costa-rica-protege-tapir-centroamericano/"
  },
  {
    "titulo": "El Niño amenaza la supervivencia de los pingüinos de Galápagos por el calentamiento del mar | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/08/18002822/Pinguinos-Galapagos_%C2%A9AuraBanda.jpg-768x512.png",
    "fecha": "Oct 16, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/10/el-nino-amenaza-supervivencia-pinguinos-galapagos-calentamiento-mar-reportaje-fotografico/"
  },
  {
    "titulo": "Cada vez más animales de la Amazonía se venden como mascotas exóticas en Asia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/15144402/6.-IMG_0081-768x512.jpg",
    "fecha": "Oct 15, 2026",
    "url": "https://es.mongabay.com/short-article/2026/10/animales-amazonia-se-venden-como-mascotas-exoticas-asia/"
  },
  {
    "titulo": "La nutria gigante ya lleva un año en los ríos argentinos tras 30 años de ausencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/13154236/Rewilding-familai-liberada--768x512.jpg",
    "fecha": "Oct 15, 2026",
    "url": "https://es.mongabay.com/2026/10/nutria-gigante-lleva-un-ano-rios-argentinos-tras-30-anos-ausencia/"
  },
  {
    "titulo": "La ruta de Tuta: revelan el viaje completo de una ballena jorobada desde Perú hasta la Antártida",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/12072301/Monitoreo-ballena-jorobada-Tuta-WWF-Peru-1-768x512.jpg",
    "fecha": "Oct 14, 2026",
    "url": "https://es.mongabay.com/2026/10/ruta-tuta-revelan-viaje-completo-ballena-jorobada-desde-peru-hasta-antartida/"
  },
  {
    "titulo": "Las voces de la naturaleza que dieron vida a Macondo: así se construyó el paisaje sonoro de Cien años de soledad",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/12231040/Verdulejo-Johnnier-Arango-%40TheAndeanBirder-768x512.jpg",
    "fecha": "Oct 13, 2026",
    "url": "https://es.mongabay.com/2026/10/voces-naturaleza-macondo-paisaje-sonoro-cien-anos-de-soledad/"
  },
  {
    "titulo": "Las poblaciones de fauna silvestre cayeron un 95 % en América Latina y el Caribe en últimos 50 años | INFORME",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/04135430/Canande-reserve-Spider-Monkey-Scott-Trageser-768x512.jpg",
    "fecha": "Oct 10, 2026",
    "url": "https://es.mongabay.com/2026/10/america-latina-caribe-caida-poblaciones-fauna-silvestre-informe-planeta-vivo/"
  },
  {
    "titulo": "Famosos que inspiran nombres de animales: los científicos hacen homenajes a Taylor Swift, Slash y Neisi Dajomes | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/10001714/aletas-de-tiburon-1-768x512.jpg",
    "fecha": "Oct 10, 2026",
    "url": "https://es.mongabay.com/2026/10/famosos-inspiran-nombres-animales-taylor-swift-slash-neisi-dajomes-coyuntura-ambiental/"
  },
  {
    "titulo": "October Big Day en América Latina: de la emoción de descubrir un ave a la defensa de su hábitat",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/10071407/4-768x512.jpeg",
    "fecha": "Oct 10, 2026",
    "url": "https://es.mongabay.com/2026/10/october-big-day-en-america-latina-de-la-emocion-de-descubrir-un-ave-a-la-defensa-de-su-habitat/"
  },
  {
    "titulo": "Capturan más de 400 peces león y alertan por la invasión de esta especie en Brasil",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/09172226/Peixe-leao-Bahia-Brasil-768x512.jpg",
    "fecha": "Oct 09, 2026",
    "url": "https://es.mongabay.com/short-article/2026/10/capturan-peces-leon-alertan-invasion-especie-brasil/"
  },
  {
    "titulo": "Especies invasoras: una rana africana devora huevos del sapo atacameño y alerta a expertos en Chile | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/09060908/RatacamensisHembra-768x512.jpg",
    "fecha": "Oct 09, 2026",
    "url": "https://es.mongabay.com/2026/10/especie-invasora-rana-africana-devora-huevos-sapo-atacameno-alerta-expertos-chile/"
  },
  {
    "titulo": "Argentina: oso hormiguero gigante vuelve a Corrientes después de 40 años",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/08183719/Image_1_Osa-hormiguero-sobre-Bermejo-Foto-Veronica-Quiroga-1-768x512.jpg",
    "fecha": "Oct 08, 2026",
    "url": "https://es.mongabay.com/short-article/2026/10/argentina-oso-hormiguero-gigante-vuelve-corrientes/"
  },
  {
    "titulo": "Un bosque para el búho de Santa Marta: la desconocida especie colombiana que necesita árboles altos y bromelias | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/07023808/Captura-de-pantalla-2026-10-06-a-las-7.35.31-p.m-768x512.png",
    "fecha": "Oct 08, 2026",
    "url": "https://es.mongabay.com/2026/10/buho-santa-marta-especie-desconocida-colombia-necesita-arboles-altos-bromelias/"
  },
  {
    "titulo": "Panamá: ruido de barcos reduce hasta 45 % la probabilidad de registrar cantos de ballenas jorobadas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/05095554/ballena-cientificos-estudian-sonido-panama-impacto-del-ruido-foto-WWF-768x511.jpg",
    "fecha": "Oct 06, 2026",
    "url": "https://es.mongabay.com/2026/10/panama-ruido-barcos-reduce-probabilidad-registrar-cantos-ballenas-jorobadas/"
  },
  {
    "titulo": "Día Mundial de los Animales: GPS, cámaras trampa y drones revelan la vida secreta de cinco especies de América Latina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/06/26190113/fox5slide-1-768x512.png",
    "fecha": "Oct 04, 2026",
    "url": "https://es.mongabay.com/2026/10/dia-mundial-animales-gps-camaras-trampa-drones-revelan-vida-secreta-especies-america-latina/"
  },
  {
    "titulo": "Un cuento nacido de 356 dibujos infantiles busca proteger al jaguar en áreas rurales de México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/02044044/Captura-de-pantalla-2026-10-01-a-las-9.38.35-p.m-768x512.png",
    "fecha": "Oct 02, 2026",
    "url": "https://es.mongabay.com/2026/10/cuento-dibujos-infantiles-busca-proteger-jaguar-areas-rurales-mexico/"
  },
  {
    "titulo": "La mayoría son murciélagos: estudio identifica 227 especies de mamíferos en Honduras, tras la mayor evaluación en 30 años",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/01033024/Captura-de-pantalla-2026-09-30-a-las-8.29.35-p.m-768x512.png",
    "fecha": "Oct 01, 2026",
    "url": "https://es.mongabay.com/2026/10/murcielagos-estudio-identifica-especies-mamiferos-honduras-tras-mayor-evaluacion/"
  },
  {
    "titulo": "Argentina: hallan muertas a un inusual número de crías de ballena franca austral en Península Valdés",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/25131711/Registro-de-muerte-de-crias-de-ballena-franca-austral-en-Argentina-Foto-cortesia-Instituto-de-Conservacion-de-Ballenas-768x511.jpg",
    "fecha": "Sep 25, 2026",
    "url": "https://es.mongabay.com/short-article/2026/09/argentina-hallan-muertas-crias-ballena-franca-austral-peninsula-valdes/"
  },
  {
    "titulo": "La “autopista arbórea” de la Chiquitania en Bolivia: estudio revela la vida oculta en las copas de los árboles",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/18170533/1-PORTADA-768x512.jpg",
    "fecha": "Sep 25, 2026",
    "url": "https://es.mongabay.com/2026/09/estudio-revela-vida-oculta-copas-arboles-bolivia/"
  },
  {
    "titulo": "Iguana verde: la voraz especie invasora que causa estragos ecológicos y millonarias pérdidas en el Caribe | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/01/29130151/Iguana-iguana-1-768x512.jpg",
    "fecha": "Sep 25, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/09/iguana-verde-voraz-invasora-causa-estragos-ecologicos-millonarias-perdidas-caribe-reportaje-fotografico/"
  },
  {
    "titulo": "Malvinas: expertos argentinos advierten sobre impactos ambientales del proyecto petrolero Sea Lion, autorizado por Reino Unido",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/22140808/hidrocarburos-en-el-mar-argentino-Foto-Gobierno-de-Argentina-768x512.jpeg",
    "fecha": "Sep 24, 2026",
    "url": "https://es.mongabay.com/2026/09/malvinas-argentinos-advierten-impactos-ambientales-proyecto-petrolero-sea-lion-autorizado-reino-unido/"
  },
  {
    "titulo": "Proyecto de parque acuático más grande de Latinoamérica amenaza al jaguar y las tortugas marinas en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/15165025/Jaguar-3-768x512.jpg",
    "fecha": "Sep 23, 2026",
    "url": "https://es.mongabay.com/2026/09/mexico-proyecto-parque-acuatico-amenaza-jaguar-tortugas-marinas/"
  },
  {
    "titulo": "El rugido del mar: bioacústica comunitaria para entender cómo el cambio climático afecta al pez mero del Caribe en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/08152800/Mero_Punta-Allen_Portada-768x512.jpg",
    "fecha": "Sep 23, 2026",
    "url": "https://es.mongabay.com/2026/09/bioacustica-entender-cambio-climatico-afecta-pez-mero-caribe-mexicano/"
  },
  {
    "titulo": "Última actualización automática - Sun Oct 18 19:57:59 2026",
    "imagen": "",
    "fecha": "",
    "url": "#"
  }
];