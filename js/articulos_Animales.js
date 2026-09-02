const articulos = [
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
    "titulo": "Última actualización automática - Wed Sep  2 20:25:06 2026",
    "imagen": "",
    "fecha": "",
    "url": "#"
  }
];