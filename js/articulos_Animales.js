const articulos = [
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
    "titulo": "Última actualización automática - Tue Jan 27 18:32:49 2026",
    "imagen": "",
    "fecha": "",
    "url": "#"
  }
];