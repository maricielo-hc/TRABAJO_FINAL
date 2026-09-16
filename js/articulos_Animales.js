const articulos = [
  {
    "titulo": "Venezuela: pesca con redes de enmalle amenaza al delfín de Guyana en el Lago de Maracaibo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/15141919/ORI6858-e1789500355418-768x512.jpg",
    "fecha": "Sep 16, 2026",
    "url": "https://es.mongabay.com/2026/09/venezuela-pesca-redes-enmalle-amenaza-delfin-guyana-lago-maracaibo/"
  },
  {
    "titulo": "Cangrejo rey del Caribe: el “jardinero del arrecife” que remueve toneladas de algas del Sistema Arrecifal Mesoamericano",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/14174013/Copia-de-Copia-de-DSCN0477-768x512.jpg",
    "fecha": "Sep 15, 2026",
    "url": "https://es.mongabay.com/2026/09/cangrejo-rey-caribe-jardinero-arrecife-recuperacion-sistema-arrecifal-mesoamericano/"
  },
  {
    "titulo": "Microplásticos en animales: ya están dentro de peces, pulpos, murciélagos y cangrejos | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/07114639/IMG_20211019_193254-scaled-e1788883967634-768x512.jpg",
    "fecha": "Sep 14, 2026",
    "url": "https://es.mongabay.com/2026/09/microplasticos-en-animales-ya-estan-dentro-de-peces-pulpos-murcielagos-y-cangrejos-lecturas-ambientales/"
  },
  {
    "titulo": "Las entregas voluntarias: un punto ciego del tráfico de pequeños felinos en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/11184534/Corantioquia-devuelve-a-la-libertad-a-una-ocelote-tras-meses-de-rehabilitacion-1024x683-1-768x512.jpeg",
    "fecha": "Sep 14, 2026",
    "url": "https://es.mongabay.com/2026/09/entregas-voluntarias-punto-ciego-trafico-pequenos-felinos-colombia/"
  },
  {
    "titulo": "Cerro de Arcos, el hogar del fascinante colibrí estrella de garganta azul que está en peligro de extinción | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/11/14053422/reserva-Cerro-de-Arcos-colibri-Estrella-de-Garganta-Azul-Byron-Puglla-768x512.jpg",
    "fecha": "Sep 11, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/09/cerro-de-arcos-hogar-colibri-estrella-garganta-azul-extincion-reportaje-fotografico/"
  },
  {
    "titulo": "Colombia: cangrejos violinistas del Golfo de Urabá fragmentan microplásticos que podrían ser nueva fuente de contaminación | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/07130755/IMG_3225-768x512.jpg",
    "fecha": "Sep 09, 2026",
    "url": "https://es.mongabay.com/2026/09/colombia-cangrejos-violinistas-golfo-de-uraba-fragmentan-microplasticos-contaminacion/"
  },
  {
    "titulo": "El pez boliviano que respira por la piel y desafió a la extinción continúa en peligro",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/07193047/imagen-principal-768x512.jpg",
    "fecha": "Sep 08, 2026",
    "url": "https://es.mongabay.com/2026/09/pez-boliviano-respira-piel-extincion-peligro/"
  },
  {
    "titulo": "Costa Rica: la tecnología revela la vida secreta de los tiburones nodriza del Pacífico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/04234443/2026-julio-Tiburon-La-Cruz-Mongabay-Cesar-Arroyo-29-768x512.jpg",
    "fecha": "Sep 07, 2026",
    "url": "https://es.mongabay.com/2026/09/costa-rica-tecnologia-revela-vida-secreta-tiburones-nodriza-pacifico/"
  },
  {
    "titulo": "Día Internacional de los Primates: tres proyectos para salvarlos del tráfico y la pérdida de hábitat",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/08/31224357/Yellow-tailed-woolly-monkey-in-captivity_%C2%A9GersonFerrer-Yunkawasi-2-768x512.jpg",
    "fecha": "Sep 01, 2026",
    "url": "https://es.mongabay.com/2026/09/dia-internacional-de-los-primates-tres-proyectos-para-salvarlos-del-trafico-y-la-perdida-de-habitat/"
  },
  {
    "titulo": "Una nueva rana descubierta en los bosques nublados de Colombia lleva un nombre inspirado en la crisis climática",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/08/28214418/oo_1742761-768x512.jpg",
    "fecha": "Aug 29, 2026",
    "url": "https://es.mongabay.com/short-article/2026/08/nueva-rana-descubierta-bosques-nublados-colombia-nombre-inspirado-crisis-climatica/"
  },
  {
    "titulo": "Ineficiencia institucional convierte a Galápagos en nodo logístico del tráfico ilegal de especies y del crimen organizado",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/08/28151500/PORTADA-1-768x512.jpg",
    "fecha": "Aug 28, 2026",
    "url": "https://es.mongabay.com/2026/08/ineficiencia-institucional-galapagos-trafico-ilegal-especies-crimen-organizado/"
  },
  {
    "titulo": "El mono volador y los secretos de Amacayacu, en una región de Colombia con la mayor diversidad de primates del mundo | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/07/13194503/00-Pithecia-monachus-PAOLAGUALTEROS-768x512.jpg",
    "fecha": "Aug 28, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/08/mono-volador-secretos-amacayacu-colombia-mayor-diversidad-primates-mundo-reportaje-fotografico/"
  },
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
    "titulo": "Mascotas sin vacunar y abandono rural enferman a los felinos silvestres en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/19011305/ocelotes-sarna-mejor-768x512.jpg",
    "fecha": "Jul 21, 2026",
    "url": "https://es.mongabay.com/2026/07/mascotas-sin-vacunar-abandono-rural-enferman-felinos-silvestres-mexico/"
  },
  {
    "titulo": "No hace falta una bala: enfermedades de animales domésticos amenazan a los felinos silvestres de Latinoamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/15221235/Principal-Credito_-Centro-de-Rescate-Las-Pumas-768x512.jpeg",
    "fecha": "Jul 21, 2026",
    "url": "https://es.mongabay.com/2026/07/no-hace-falta-una-bala-enfermedades-animales-domesticos-amenazan-felinos-silvestres-latinoamerica/"
  },
  {
    "titulo": "Animales en peligro de extinción: así buscan salvar a albatros, peces guitarra, delfines franciscanas y tortugas marinas en América Latina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/01/23234813/Imagen-1-768x512.jpg",
    "fecha": "Jul 18, 2026",
    "url": "https://es.mongabay.com/2026/07/animales-en-peligro-de-extincion-asi-buscan-salvar-a-albatros-peces-guitarra-delfines-franciscanas-y-tortugas-marinas-en-america-latina/"
  },
  {
    "titulo": "Parque Nacional Cayambe Coca: el santuario natural que abastece de agua a Quito en Ecuador | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/07/17204938/Oso-2-768x512.jpeg",
    "fecha": "Jul 17, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/07/parque-nacional-cayambe-coca-abastece-agua-quito-ecuador-reportaje-fotografico/"
  },
  {
    "titulo": "Día Mundial de las Serpientes: tres historias para conocer su rol clave en los ecosistemas y su aporte en la investigación científica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/15191009/Serpientes-de-Costa-Rica-Natalia-Montero-22-768x512.jpeg",
    "fecha": "Jul 16, 2026",
    "url": "https://es.mongabay.com/2026/07/dia-mundial-serpientes-rol-clave-ecosistemas-investigacion-cientifica/"
  },
  {
    "titulo": "Alerta en Perú: investigan la muerte de lobos marinos mientras El Niño agrava la crisis de aves por falta de alimento",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/14140208/signal-2026-07-13-12-44-07-087_003-768x512.jpg",
    "fecha": "Jul 14, 2026",
    "url": "https://es.mongabay.com/short-article/2026/07/alerta-peru-investigan-muerte-lobos-marinos-el-nino-agrava-crisis-aves/"
  },
  {
    "titulo": "Día Internacional de los Tiburones: la carrera científica para salvarlos desde México hasta la Patagonia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/14134742/JoshuaVela_5C_1037-768x512.jpg",
    "fecha": "Jul 14, 2026",
    "url": "https://es.mongabay.com/2026/07/dia-internacional-tiburones-carrera-cientifica-para-salvarlos-mexico-ecuador-argentina/"
  },
  {
    "titulo": "Zopilotes rey en Costa Rica: la fotografía que revela la relación entre estas aves carroñeras",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/09052903/zopilotes-rey-costa-rica-fotografia-aves-1-768x512.jpg",
    "fecha": "Jul 10, 2026",
    "url": "https://es.mongabay.com/short-article/2026/07/zopilotes-rey-costa-rica-fotografia-aves-conservacion/"
  },
  {
    "titulo": "México: la amenazada águila tirana fue registrada por primera vez en la Reserva de la Biosfera Sierra Gorda",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/08171652/aguila-tirana-gobierno-de-mexico-3-768x512.jpg",
    "fecha": "Jul 09, 2026",
    "url": "https://es.mongabay.com/short-article/2026/07/mexico-amenazada-aguila-tirana-registrada-por-primera-vez-reserva-biosfera-sierra-gorda/"
  },
  {
    "titulo": "La foca más grande del mundo está en riesgo en Argentina: expertos buscan censar toda la población de elefantes marinos en Península Valdés",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/08210824/unnamed-1-768x512.jpg",
    "fecha": "Jul 09, 2026",
    "url": "https://es.mongabay.com/short-article/2026/07/foca-mas-grande-del-mundo-riesgo-argentina-censar-elefantes-marinos-peninsula-valdes/"
  },
  {
    "titulo": "Chile: pescadores artesanales frenan con sus refugios marinos el crecimiento descontrolado del erizo negro y reviven los bosques submarinos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/06003937/Sergio-Veas-en-extraccion-de-locos.-Credito-Rodrigo-Sanchez_UW_LoRes_061123_0001-e1783299011495-768x472.jpg",
    "fecha": "Jul 07, 2026",
    "url": "https://es.mongabay.com/2026/07/chile-pescadores-artesanales-refugios-marinos-erizo-negro-reviven-bosques-submarinos/"
  },
  {
    "titulo": "Perú: empresario investigado por tráfico ilegal de especies y crimen organizado continúa exportando aletas de tiburones protegidos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/05230041/Analysis-4-768x512.jpg",
    "fecha": "Jul 06, 2026",
    "url": "https://es.mongabay.com/2026/07/peru-empresario-investigado-trafico-ilegal-especies-crimen-organizado-continua-exportando-aletas-tiburones-protegidos/"
  },
  {
    "titulo": "Chile: perros y redes de pesca están matando a los chungungos, las amenazadas nutrias felinas del mar | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/02130039/sernapesca2-768x512.jpeg",
    "fecha": "Jul 04, 2026",
    "url": "https://es.mongabay.com/2026/07/chile-perros-redes-pesca-matando-chungungos-amenazadas-nutrias-felinas-mar-entrevista/"
  },
  {
    "titulo": "Perros ferales amenazan a felinos, dantas, huemules, nutrias, zorros, osos hormigueros y cóndores en América Latina | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/10/07041520/Andean-Tiger-Cat-Conservation-Project-1-768x512.jpg",
    "fecha": "Jul 04, 2026",
    "url": "https://es.mongabay.com/2026/07/perros-ferales-amenazan-fauna-america-latina/"
  },
  {
    "titulo": "Descubren una diminuta depredadora de agua dulce en la Patagonia Norte, pariente de las medusas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/07/02141156/Diseno-sin-titulo-768x512.png",
    "fecha": "Jul 02, 2026",
    "url": "https://es.mongabay.com/short-article/2026/07/descubren-diminuta-depredadora-agua-dulce-patagonia-norte-pariente-medusas/"
  },
  {
    "titulo": "Close-up desde los árboles: cómo un nuevo ángulo de cámara revela los secretos de la güiña en la Patagonia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/06/30052823/guina-camaras-trampa-felino-america-estudio-1-768x511.jpg",
    "fecha": "Jul 02, 2026",
    "url": "https://es.mongabay.com/2026/07/guina-camaras-trampa-felino-america-estudio/"
  },
  {
    "titulo": "Tres señales de esperanza para la fauna argentina: ballenas, gato andino y elefantes marinos vuelven a sorprender a la ciencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/06/22170148/gato-andino_-credito_-Juan-Repucci-de-Alianza-Gato-Andino-Gentileza-WCS-Argentina-768x512.jpg",
    "fecha": "Jun 27, 2026",
    "url": "https://es.mongabay.com/2026/06/esperanza-fauna-argentina-ballenas-gato-andino-elefantes-marinos-sorprender-ciencia/"
  },
  {
    "titulo": "Zorro enano de Cozumel: científicos emprenden la búsqueda de este misterioso animal, considerado casi extinto en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/06/26180623/Captura-de-pantalla-2026-06-26-a-las-11.05.22-a.m-768x512.png",
    "fecha": "Jun 27, 2026",
    "url": "https://es.mongabay.com/2026/06/zorro-enano-de-cozumel-fotografias-casi-extinto-mexico/"
  },
  {
    "titulo": "Gato andino reaparece en Argentina: alianza entre científicos, comunidades y ganaderos abre una ruta de esperanza",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/06/22170005/Registro-gato-andino-en-enero-de-2026-via-camaras-trampa-de-WCS-Argentina.-Credito-WCS-Argentina-_-768x512.jpg",
    "fecha": "Jun 24, 2026",
    "url": "https://es.mongabay.com/2026/06/gato-andino-reaparece-argentina-alianza-cientificos-comunidades-ganaderos-conservacion/"
  },
  {
    "titulo": "Ranas, roedores y pulpos: descubren tres nuevas especies en América Latina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/02/24045022/Graneledone-sellanesi-2024-2-768x512.jpeg",
    "fecha": "Jun 21, 2026",
    "url": "https://es.mongabay.com/2026/06/ranas-roedores-pulpos-descubren-nuevas-especies-america-latina/"
  },
  {
    "titulo": "Una nueva rata vizcacha del Chaco Serrano revela la biodiversidad aún desconocida de Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/06/18192344/oo_1677625-768x512.jpg",
    "fecha": "Jun 18, 2026",
    "url": "https://es.mongabay.com/short-article/2026/06/nueva-rata-vizcacha-chaco-serrano-revela-biodiversidad-desconocida-argentina/"
  },
  {
    "titulo": "Día Mundial de las Tortugas Marinas: tres historias dan esperanza en América Latina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/06/16002529/Credito_-Proyecto-Tortuga-Laud-Argentina-1-768x512.jpg",
    "fecha": "Jun 16, 2026",
    "url": "https://es.mongabay.com/2026/06/dia-mundial-tortugas-marinas-historias-esperanza-america-latina/"
  },
  {
    "titulo": "¿Puede la inteligencia artificial proteger la biodiversidad en América Latina? | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/06/01173218/FOTO-4-768x512.jpg",
    "fecha": "Jun 15, 2026",
    "url": "https://es.mongabay.com/2026/06/inteligencia-artificial-proteger-biodiversidad-america-latina-lecturas-ambientales/"
  },
  {
    "titulo": "Mujeres indígenas contra la crisis ambiental: así protegen tortugas, jaguares, bosques y fuentes de agua en América Latina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/08030423/Un-grupo-de-mujeres-quechua-que-reforestan-el-parque-Tunari.-FOTO-FAUNAGUA-768x512.jpg",
    "fecha": "Jun 13, 2026",
    "url": "https://es.mongabay.com/2026/06/mujeres-indigenas-contra-crisis-ambiental-protegen-tortugas-jaguares-bosques-agua-america-latina/"
  },
  {
    "titulo": "El regreso de los monos: tres historias de conservación que les dan esperanza en América Latina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/03/31051407/Foto-10-Creditos-Salve-Monos-768x512.jpg",
    "fecha": "Jun 07, 2026",
    "url": "https://es.mongabay.com/2026/06/regreso-monos-historias-conservacion-america-latina/"
  },
  {
    "titulo": "Reportaje fotográfico | El asombroso parque de Ecuador donde habitan lobos de páramo, osos y más de 500 especies de aves",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/08/02180541/00-Lycalopex-culpaeus-Parque-Nacional-Podocarpus-Cajanuma-2-768x512.jpg",
    "fecha": "Jun 06, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/06/reportaje-fotografico-asombroso-parque-ecuador-habitan-lobos-de-paramo-osos-aves/"
  },
  {
    "titulo": "Monitoras chinantecas: las mujeres que protegen al bosque y los animales con cámaras trampa en Oaxaca",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/25215950/Captura-de-pantalla-2026-05-25-a-las-3.59.12-p.m-768x512.png",
    "fecha": "Jun 06, 2026",
    "url": "https://es.mongabay.com/2026/06/monitoras-chinantecas-mujeres-protegen-bosque-animales-camaras-trampa-oaxaca/"
  },
  {
    "titulo": "Del laboratorio al río: ¿podrá la reintroducción de especies salvar a las ranas arlequín en Ecuador?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/06/04004143/Atelopus-limon_SGS_11-scaled-e1780535527240-768x512.jpg",
    "fecha": "Jun 05, 2026",
    "url": "https://es.mongabay.com/2026/06/reintroduccion-especies-ranas-arlequin-ecuador/"
  },
  {
    "titulo": "Día Mundial del Medioambiente: tres investigaciones que muestran cómo la ciencia enfrenta el cambio climático",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/06/03180023/Amazonia-y-cambio-climatico-Jesus-ACCA-1-768x512.jpg",
    "fecha": "Jun 05, 2026",
    "url": "https://es.mongabay.com/2026/06/dia-mundial-del-medioambiente-investigaciones-ciencia-cambio-climatico/"
  },
  {
    "titulo": "Colombia: autoridades anunciaron que alimentarán a cocodrilos y que habría acuerdos tras meses de conflicto",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/12135651/cocodrilos-orinoco-colombia-conflicto-alimento-unal-2-1200x806-1-768x512.jpg",
    "fecha": "Jun 03, 2026",
    "url": "https://es.mongabay.com/short-article/2026/06/colombia-cocodrilos-alimentacion-acuerdos-conflicto/"
  },
  {
    "titulo": "Bolivia: la jaguar Shiva pudo ser atendida en La Paz, superó la infección en el maxilar y regresa a su refugio",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/06/02171521/711679907_18009322121910660_8867788725561610832_n-768x512.jpg",
    "fecha": "Jun 02, 2026",
    "url": "https://es.mongabay.com/short-article/2026/06/bolivia-jaguar-shiva-supera-infeccion-maxilar-regresa-refugio/"
  },
  {
    "titulo": "Ecuador: crean una «isla inteligente» para salvar a Galápagos de las especies invasoras",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/22230804/Jocotoco-and-Park-Ranger-Floreana_Smart_Island_team_setup-enero-2026-Bryan-Perez-768x512.jpg",
    "fecha": "Jun 02, 2026",
    "url": "https://es.mongabay.com/2026/06/ecuador-floreana-isla-inteligente-salvar-galapagos-especies-invasoras/"
  },
  {
    "titulo": "Perú: la inteligencia artificial analiza miles de imágenes para estimar la densidad de jaguares en la Reserva Nacional Tambopata",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/06/01173252/FOTO-1-768x512.jpg",
    "fecha": "Jun 02, 2026",
    "url": "https://es.mongabay.com/2026/06/peru-inteligencia-artificial-conservacion-jaguares-reserva-nacional-tambopata/"
  },
  {
    "titulo": "Cocodrilos sin alimento: autoridades ambientales de Colombia anuncian medidas para resolver conflicto que los pone en riesgo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/06/01194801/cocodrilos-colombia-autoridades-ambientales-medidas-768x512.jpeg",
    "fecha": "Jun 01, 2026",
    "url": "https://es.mongabay.com/short-article/2026/06/cocodrilos-colombia-alimento-autoridades-ambientales-medidas/"
  },
  {
    "titulo": "Peces, pulpos y estrellas de mar: Argentina incauta más de 700 animales marinos traficados desde Kenia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/28203834/AP26146520215343-768x512.jpg",
    "fecha": "May 30, 2026",
    "url": "https://es.mongabay.com/short-article/2026/05/peces-pulpos-estrellas-de-mar-argentina-incauta-700-animales-marinos-traficados-desde-kenia/"
  },
  {
    "titulo": "Los códigos del canto: los algoritmos revolucionan el estudio poblacional de la gallineta chica en Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/19202318/Gallineta-Chica_Hernan-Povedano-1-768x512.jpg",
    "fecha": "May 29, 2026",
    "url": "https://es.mongabay.com/2026/05/algoritmos-revolucionan-estudio-gallineta-chica-argentina/"
  },
  {
    "titulo": "Conguillío: el parque chileno que conserva paisajes de la era de los dinosaurios | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/08/21201422/Mirador-Los-Condores-Jaume-Garces-768x513.jpg",
    "fecha": "May 29, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/05/conguillio-parque-chileno-conserva-paisajes-dinosaurios-reportaje-fotografico/"
  },
  {
    "titulo": "Comunidades kichwa lograron proteger su territorio gracias a la IA entrenada con miles de sonidos de la Amazonía ecuatoriana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/22000423/foto-portada-768x512.jpg",
    "fecha": "May 28, 2026",
    "url": "https://es.mongabay.com/2026/05/comunidades-kichwa-protegen-territorio-ia-entrenada-miles-sonidos-amazonia-ecuatoriana/"
  },
  {
    "titulo": "El último refugio de las polillas: inteligencia artificial para descifrar la «diversidad oscura» en Panamá",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/22005802/PORTADA-Francisco-Serrano-Panama-768x512.png",
    "fecha": "May 28, 2026",
    "url": "https://es.mongabay.com/2026/05/ultimo-refugio-polillas-inteligencia-artificial-descifrar-diversidad-oscura-panama/"
  },
  {
    "titulo": "Hantavirus Andes: ¿por qué preocupa la única variante que se transmite entre humanos tras brote en el crucero MV Hondius?",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/28182439/raton-colilargo-Oligoryzomys-longicaudatus-1-768x512.jpg",
    "fecha": "May 28, 2026",
    "url": "https://es.mongabay.com/2026/05/hantavirus-andes-transmision-humanos-brote-crucero-mv-hondius/"
  },
  {
    "titulo": "La inteligencia artificial se convierte en aliada clave para conservar la biodiversidad de América Latina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/21141027/Clasificacion_2-768x513.jpg",
    "fecha": "May 27, 2026",
    "url": "https://es.mongabay.com/2026/05/inteligencia-artificial-aliada-clave-conservar-biodiversidad-america-latina/"
  },
  {
    "titulo": "Argentina: las ballenas jorobadas regresaron al Canal Beagle en busca de alimento",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/26195915/IMG_8586-foto-Sebastian-Dirube-768x512.jpg",
    "fecha": "May 27, 2026",
    "url": "https://es.mongabay.com/2026/05/argentina-ballenas-jorobadas-regresaron-canal-beagle-alimento/"
  },
  {
    "titulo": "La inteligencia artificial que permite el regreso masivo de conchas a los mares de Costa Rica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/21140836/Still-6_55-768x512.png",
    "fecha": "May 26, 2026",
    "url": "https://es.mongabay.com/2026/05/inteligencia-artificial-permite-regreso-conchas-mares-costa-rica/"
  },
  {
    "titulo": "Claves para evitar las colisiones de aves con estructuras urbanas, según una red de ciencia participativa | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/22202806/Captura-de-pantalla-2026-05-22-a-las-1.27.34-p.m-768x512.png",
    "fecha": "May 24, 2026",
    "url": "https://es.mongabay.com/2026/05/claves-para-evitar-las-colisiones-de-aves-con-estructuras-urbanas-segun-una-red-de-ciencia-participativa-entrevista/"
  },
  {
    "titulo": "Uchuy es el primer polluelo de cóndor andino que lleva un transmisor satelital en Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/22182333/Uchuy-condor-andino-Fundacion-Condor-Andino-Peru-9-768x512.jpg",
    "fecha": "May 23, 2026",
    "url": "https://es.mongabay.com/2026/05/uchuy-primer-polluelo-condor-andino-transmisor-satelital-peru/"
  },
  {
    "titulo": "Caso Sloth World: la tragedia de los perezosos exportados a Florida desde Perú y Guyana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/09233446/Captura-de-pantalla-2026-05-09-a-las-4.34.10-p.m-768x512.png",
    "fecha": "May 20, 2026",
    "url": "https://es.mongabay.com/2026/05/caso-sloth-world-perezosos-exportados-muertos-florida-peru-guyana/"
  },
  {
    "titulo": "Muere el cuarto perezoso en cautiverio víctima del fallido proyecto Sloth World en Florida",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/15210742/Captura-de-pantalla-2026-05-15-a-las-2.06.25-p.m-768x512.png",
    "fecha": "May 15, 2026",
    "url": "https://es.mongabay.com/short-article/2026/05/muere-el-cuarto-perezoso-en-cautiverio-victima-del-fallido-proyecto-sloth-world-en-florida/"
  },
  {
    "titulo": "Colombia: casi 200 cocodrilos en peligro crítico de extinción están sin alimento por un conflicto administrativo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/12135651/cocodrilos-orinoco-colombia-conflicto-alimento-unal-2-1200x806-1-768x512.jpg",
    "fecha": "May 13, 2026",
    "url": "https://es.mongabay.com/2026/05/cocodrilos-orinoco-colombia-conflicto-alimento-atencion/"
  },
  {
    "titulo": "El «jaguar de las nubes»: por primera vez en una década captan a este felino en lo más alto de Honduras",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/08051456/Captura-de-pantalla-2026-05-07-a-las-10.11.22-p.m-768x512.png",
    "fecha": "May 11, 2026",
    "url": "https://es.mongabay.com/2026/05/el-jaguar-de-las-nubes-por-primera-vez-en-una-decada-captan-a-este-felino-en-lo-mas-alto-de-honduras/"
  },
  {
    "titulo": "México: 40 años de rescatar y reintegrar monos nativos en la selva veracruzana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/05/06185755/mono-arana1-768x512.jpeg",
    "fecha": "May 07, 2026",
    "url": "https://es.mongabay.com/2026/05/mexico-40-anos-de-rescatar-y-reintegrar-monos-nativos-en-la-selva-veracruzana/"
  },
  {
    "titulo": "Bolivia: reúnen por primera vez más de 4000 fotos del perro fantasma, el cánido más huidizo de la Amazonía | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/29175529/3.-Atelocynus-microtis-Guido-AyalaMariga-Viscarra-Camera-Traps-WCS-Bolivia-2-768x512.jpg",
    "fecha": "May 06, 2026",
    "url": "https://es.mongabay.com/2026/05/bolivia-reunen-por-primera-vez-mas-de-4-mil-fotos-del-perro-fantasma-el-canido-mas-huidizo-de-la-amazonia-estudio/"
  },
  {
    "titulo": "Marsopa espinosa en Perú: pesca incidental amenaza a esta especie en la costa norte de La Libertad",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/29123525/marsopa-espinosa-3-768x512.jpg",
    "fecha": "May 05, 2026",
    "url": "https://es.mongabay.com/2026/05/marsopa-espinosa-en-peru-pesca-incidental-amenaza-a-esta-especie-en-la-costa-norte-de-la-libertad/"
  },
  {
    "titulo": "El fraude que hace pasar tiburones por peces espada, corvinas y tollos en mercados de Sudamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/11151618/42.-Tarqui-landings-Alex-Hearn-USFQ-768x512.jpg",
    "fecha": "May 03, 2026",
    "url": "https://es.mongabay.com/2026/05/fraude-tiburones-peces-espada-corvinas-tollos-mercados-sudamerica/"
  },
  {
    "titulo": "Orcas cazando tiburones, estrategias de caza de felinos y aves hembras que cantan: los hallazgos científicos que sorprenden a América Latina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/01/28194028/Orcas_hunting_white_sharks_IV_Photo_by_Marco_Villegas-768x512.jpg",
    "fecha": "May 02, 2026",
    "url": "https://es.mongabay.com/2026/05/orcas-cazando-tiburones-estrategias-caza-felinos-aves-hembras-cantan-hallazgos-cientificos-america-latina/"
  },
  {
    "titulo": "Jaguares, osos y más de mil aves: imágenes que revelan por qué el Parque Nacional Madidi, en Bolivia, es una joya natural del planeta | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/26090432/6_Kentropyx-sp.-nov.-Heath-Mileniusz-Spanowicz-WCS-7226-768x512.jpg",
    "fecha": "May 01, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/05/jaguares-osos-aves-imagenes-parque-madidi-joya-natural-planeta/"
  },
  {
    "titulo": "Ecuador: comunidades del Chocó Andino se unen para salvar al mono capuchino y a la pava del Chocó, especies en riesgo de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/28113650/1-Mono-Capuchino-1-768x512.jpg",
    "fecha": "Apr 30, 2026",
    "url": "https://es.mongabay.com/2026/04/ecuador-conservar-mono-capuchino-pava-choco-andino-extincion/"
  },
  {
    "titulo": "Argentina: por lo menos 160 aves murieron electrocutadas en tendidos de cables | Estudio",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/24234018/20231021085507184274-768x512.png",
    "fecha": "Apr 27, 2026",
    "url": "https://es.mongabay.com/2026/04/argentina-aves-murieron-electrocutadas-tendidos-cables-estudio/"
  },
  {
    "titulo": "Día del Tapir: los esfuerzos para proteger a los guardianes elusivos de los bosques en tres países latinoamericanos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/24002605/tapir-orinoquia-768x512.jpg",
    "fecha": "Apr 27, 2026",
    "url": "https://es.mongabay.com/2026/04/dia-del-tapir-esfuerzos-proteger-guardianes-silenciosos-bosques-latinoamerica/"
  },
  {
    "titulo": "El río Magdalena es clave para entender la verdadera distribución de los monos nocturnos en Colombia | Estudio",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/24203248/Screen-Shot-2026-04-24-at-3.30.50-PM-768x512.png",
    "fecha": "Apr 26, 2026",
    "url": "https://es.mongabay.com/2026/04/el-rio-magdalena-es-clave-para-entender-la-verdadera-distribucion-de-los-monos-nocturnos-en-colombia-estudio/"
  },
  {
    "titulo": "Reportaje fotográfico: la famosa serpiente gushnayera y los secretos del bosque nuboso de Baja Verapaz, en Guatemala",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2023/09/21071439/1K7A7723-Editar-768x512.jpg",
    "fecha": "Apr 24, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/04/reportaje-fotografico-famosa-serpiente-gushnayera-secretos-bosque-nuboso-baja-verapaz-guatemala/"
  },
  {
    "titulo": "Descubren un mundo oculto en Argentina: arrecifes gigantes, especies desconocidas y una medusa fantasma en el fondo del mar",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/23142805/WhatsApp-Image-2026-04-23-at-9.27.41-AM-768x512.jpeg",
    "fecha": "Apr 23, 2026",
    "url": "https://es.mongabay.com/short-article/2026/04/descubren-mundo-oculto-mar-argentina-arrecifes-gigantes-especies-desconocidas-medusa-fantasma/"
  },
  {
    "titulo": "Colombia autorizó la eutanasia a hipopótamos: ¿Cuál ha sido el impacto de esta especie invasora en la biodiversidad? | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/10/13175529/DSC_0734-768x472.jpg",
    "fecha": "Apr 19, 2026",
    "url": "https://es.mongabay.com/2026/04/colombia-eutanasia-hipopotamos-impacto-especie-invasora-biodiversidad/"
  },
  {
    "titulo": "Argentina: el regreso de los guanacos al Gran Chaco reaviva el debate sobre las reintroducciones de fauna silvestre",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/11/24192110/Guanacos-en-Argentina-Antonella-Panebianco-2-768x512.jpeg",
    "fecha": "Apr 16, 2026",
    "url": "https://es.mongabay.com/2026/04/argentina-regreso-guanacos-gran-chaco-reaviva-debate-reintroducciones-fauna-silvestre/"
  },
  {
    "titulo": "Colombia autoriza plan de eutanasia para controlar población invasora de 80 hipopótamos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/13201324/Proyecto-nuevo-40-768x512.jpg",
    "fecha": "Apr 14, 2026",
    "url": "https://es.mongabay.com/short-article/2026/04/colombia-autoriza-eutanasia-para-controlar-poblacion-invasora-hipopotamos/"
  },
  {
    "titulo": "Cocodrilos de Tumbes en peligro crítico de extinción encuentran una esperanza en la costa norte de Perú",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/10233028/Cocodrilo-de-Tumbes-centro-de-conservacion-Leandro-Amaya-1-768x512.jpg",
    "fecha": "Apr 13, 2026",
    "url": "https://es.mongabay.com/2026/04/cocodrilos-tumbes-peligro-critico-extincion-encuentran-esperanza-costa-norte-peru/"
  },
  {
    "titulo": "Pingüino emperador y lobo marino antártico están en peligro de extinción por el cambio climático",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/08/07030409/1-768x512.jpg",
    "fecha": "Apr 11, 2026",
    "url": "https://es.mongabay.com/short-article/2026/04/pinguino-emperador-lobo-marino-antartico-peligro-extincion-cambio-climatico/"
  },
  {
    "titulo": "No solo los machos cantan: un hallazgo en Galápagos reescribe el papel de las aves hembras | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/10161004/Captura-de-pantalla-2026-04-10-a-las-9.09.22-a.m-768x512.png",
    "fecha": "Apr 11, 2026",
    "url": "https://es.mongabay.com/2026/04/no-solo-machos-cantan-hallazgo-galapagos-reescribe-papel-aves-hembras-estudio/"
  },
  {
    "titulo": "Chile: encuentran ballena jorobada muerta en Chiloé y piden investigación por intervención humana",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/10183231/Ballena-jorobada-muerta-en-la-costa-de-Chiloe-768x512.jpg",
    "fecha": "Apr 10, 2026",
    "url": "https://es.mongabay.com/short-article/2026/04/chile-encuentran-ballena-jorobada-muerta-chiloe-piden-investigacion-intervencion-humana/"
  },
  {
    "titulo": "Describen nueva rana de cristal que honra a la primera mujer de Ecuador en ganar una medalla de oro olímpica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/09172840/rana-de-cristal-de-Dajomes-768x512.jpg",
    "fecha": "Apr 09, 2026",
    "url": "https://es.mongabay.com/short-article/2026/04/describen-nueva-rana-cristal-honra-primera-mujer-ecuador-ganar-medalla-oro-olimpica/"
  },
  {
    "titulo": "El loro pecho vinoso iba camino a la extinción, pero un pueblo de la selva misionera argentina lo está salvando",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/06185534/Copia-de-Marc-Estornell_LoroVinoso-768x512.jpg",
    "fecha": "Apr 08, 2026",
    "url": "https://es.mongabay.com/2026/04/loro-pecho-vinoso-extincion-salvado-pueblo-argentina/"
  },
  {
    "titulo": "Pasos de fauna aéreos: la alternativa para evitar que los monos mueran electrocutados en Costa Rica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/03/31051508/Foto-1-Creditos-Salve-Monos-768x512.jpg",
    "fecha": "Apr 07, 2026",
    "url": "https://es.mongabay.com/2026/04/pasos-fauna-aereos-evitan-muerte-monos-electrocutados-costa-rica/"
  },
  {
    "titulo": "“Se han restringido investigaciones que podrían permitirnos conocer más de algunos grupos de murciélagos” | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/04/01215435/2032026-JOAQUIN-ARROYO-MTD-2-768x512.jpg",
    "fecha": "Apr 06, 2026",
    "url": "https://es.mongabay.com/2026/04/mexico-investigaciones-murcielagos-conservacion-entrevista-joaquin-arroyo-cabrales/"
  },
  {
    "titulo": "De jaguares a cardenalitos: seis historias que dan esperanza a animales en peligro de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/03/13070445/Foto_19-768x512.jpg",
    "fecha": "Apr 02, 2026",
    "url": "https://es.mongabay.com/2026/04/jaguares-cardenalitos-historias-esperanza-animales-peligro-extincion/"
  },
  {
    "titulo": "Las zanjas de Kast: animales y humedales del Altiplano están en riesgo por el plan fronterizo de Chile",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/03/31154907/zanja3-768x512.jpg",
    "fecha": "Apr 01, 2026",
    "url": "https://es.mongabay.com/2026/04/zanjas-kast-animales-humedales-altiplano-riesgo-plan-fronterizo-chile/"
  },
  {
    "titulo": "Ranas doradas panameñas fueron criadas en cautiverio y liberadas en la naturaleza",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/03/31142752/ranas-panama-rhett-butler-768x512.jpg",
    "fecha": "Mar 31, 2026",
    "url": "https://es.mongabay.com/2026/03/ranas-doradas-panamenas-criadas-cautiverio-liberadas-naturaleza/"
  },
  {
    "titulo": "Alertan no comer gatuzo en Semana Santa: este tiburón está en peligro crítico de extinción en Argentina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/03/26194008/unnamed-768x512.jpg",
    "fecha": "Mar 27, 2026",
    "url": "https://es.mongabay.com/short-article/2026/03/alertan-no-comer-gatuzo-semana-santa-tiburon-peligro-extincion-argentina/"
  },
  {
    "titulo": "Investigadores awá: el equipo que une ciencia y ancestralidad para proteger la selva en Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/03/23050349/Captura-de-pantalla-2026-03-22-a-las-10.02.18-p.m-768x512.png",
    "fecha": "Mar 24, 2026",
    "url": "https://es.mongabay.com/2026/03/investigadores-awa-ciencia-ancestralidad-proteger-selva-colombia/"
  },
  {
    "titulo": "Perú: la pesca con palangre amenaza a los albatros, pero científicos buscan soluciones",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/03/18224656/IMG_3753-salv-bait-768x512.jpg",
    "fecha": "Mar 20, 2026",
    "url": "https://es.mongabay.com/2026/03/peru-pesca-palangre-amenaza-albatros-cientificos-soluciones/"
  },
  {
    "titulo": "Jaguares y ganaderos: un proyecto en México demuestra que pueden compartir el territorio | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/03/13065601/Captura-de-pantalla-2026-03-12-a-las-11.55.35-p.m-768x512.png",
    "fecha": "Mar 14, 2026",
    "url": "https://es.mongabay.com/2026/03/jaguares-ganaderos-proyecto-mexico-demuestra-que-pueden-compartir-territorio/"
  },
  {
    "titulo": "Los puentes en las copas de los árboles se vuelven salvavidas para monos, perezosos y puercoespines en Sudamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/03/07055044/Captura-de-pantalla-2026-03-06-a-las-10.49.19-p.m-768x512.png",
    "fecha": "Mar 12, 2026",
    "url": "https://es.mongabay.com/2026/03/puentes-copas-arboles-salvavidas-monos-perezosos-puercoespines-sudamerica/"
  },
  {
    "titulo": "El misterio de Pará: la desaparición de dos jaguares cachorros en Argentina reabre el debate sobre la reubicación de felinos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/03/09151251/WhatsApp-Image-2026-03-07-at-15.18.36-768x512.jpeg",
    "fecha": "Mar 10, 2026",
    "url": "https://es.mongabay.com/2026/03/desaparicion-cachorros-jaguar-argentina-debate-reubicacion-felinos/"
  },
  {
    "titulo": "Ciencia hecha por mujeres: investigaciones clave para entender y proteger los ecosistemas de América Latina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/10/13161230/acustica-portada2-768x512.jpg",
    "fecha": "Mar 08, 2026",
    "url": "https://es.mongabay.com/2026/03/mujeres-ciencia-conservacion-biodiversidad-america-latina/"
  },
  {
    "titulo": "Pez guitarra: científicos y pescadores deportivos de Argentina se unen para proteger a esta singular especie del Atlántico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/02/26012519/Captura-de-pantalla-2026-02-25-a-las-6.24.17-p.m-768x512.png",
    "fecha": "Feb 27, 2026",
    "url": "https://es.mongabay.com/2026/02/pez-guitarra-cientificos-pescadores-argentina-proteccion/"
  },
  {
    "titulo": "Especies invasoras sin límites: el grave impacto de la flora y fauna exóticas en América Latina | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/01/29130146/iguana-iguana-2-768x512.jpg",
    "fecha": "Feb 27, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/02/especies-invasoras-impacto-flora-fauna-exoticas-america-latina/"
  },
  {
    "titulo": "El último refugio del huemul: un hospital único en Chile busca salvar a este ciervo de los atropellos y de una bacteria mortal",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/02/27141739/WhatsApp-Image-2026-02-26-at-10.56.58-AM-768x512.jpeg",
    "fecha": "Feb 27, 2026",
    "url": "https://es.mongabay.com/2026/02/huemul-hospital-chile-salvar-ciervo-atropellos-bacteria-mortal/"
  },
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
    "titulo": "Última actualización automática - Wed Sep 16 20:47:15 2026",
    "imagen": "",
    "fecha": "",
    "url": "#"
  }
];