const articulos = [
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
    "titulo": "Última actualización automática - Fri Jul 25 12:35:02 2025",
    "imagen": "",
    "fecha": "",
    "url": "#"
  }
];