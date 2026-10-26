const articulos = [
  {
    "titulo": "Conoce estas tres especies nuevas para la ciencia: un marsupial, una rana venenosa y una diminuta depredadora acuática",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/21000055/Condor-768x512.jpeg",
    "fecha": "Oct 25, 2026",
    "url": "https://es.mongabay.com/2026/10/tres-especies-nuevas-ciencia-marsupial-rana-venenosa-diminuta-depredadora-acuatica/"
  },
  {
    "titulo": "El tráfico mundial de reptiles y anfibios como mascotas es impulsado por vacíos legales y escasa regulación",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/20150655/marine-iguana-768x512.jpg",
    "fecha": "Oct 25, 2026",
    "url": "https://es.mongabay.com/2026/10/trafico-mundial-reptiles-anfibios-mascotas-impulsado-vacios-legales-escasa-regulacion/"
  },
  {
    "titulo": "Yaguarundí: el misterioso felino que parece una nutria y que científicos buscan conservar en América Latina | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/22214922/PORTADA-Herpailurus_yagouaroundi_323451602-768x512.jpg",
    "fecha": "Oct 23, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/10/yaguarundi-misterioso-felino-parece-nutria-conservacion-america-latina-reportaje-fotografico/"
  },
  {
    "titulo": "Perú: la primera colección científica de peces de Madre de Dios refleja los cambios que genera la minería ilegal en la vida acuática",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/20194331/WhatsApp-Image-2026-09-25-at-20.25.34-768x512.jpeg",
    "fecha": "Oct 22, 2026",
    "url": "https://es.mongabay.com/2026/10/peru-primera-coleccion-cientifica-peces-madre-de-dios-mineria-ilegal/"
  },
  {
    "titulo": "Sí es posible coexistir con caimanes, jaguares y otros animales silvestres: en Colombia diseñaron una guía de seis pasos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/21220215/Jaguar-by-federico-mosquera-768x512.jpg",
    "fecha": "Oct 22, 2026",
    "url": "https://es.mongabay.com/2026/10/coexistir-fauna-silvestre-colombia-guia-seis-pasos/"
  },
  {
    "titulo": "Animales marinos disminuyeron un 60 % en zona profunda del Golfo de México tras derrame de petróleo de 2010 | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/21192917/La-vida-marina-disminuyo-drasticamente-en-el-golfo-de-Mexico-en-los-anos-posteriores-al-derrame-de-petroleo-de-BP-768x511.jpg",
    "fecha": "Oct 21, 2026",
    "url": "https://es.mongabay.com/short-article/2026/10/animales-marinos-disminuyeron-golfo-mexico-derrame-petroleo-2010/"
  },
  {
    "titulo": "Científicos descubren una rana venenosa en Ecuador, pero reservan su ubicación para protegerla de los traficantes | ENTREVISTA",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/21000119/Sopladora-47-768x512.jpg",
    "fecha": "Oct 21, 2026",
    "url": "https://es.mongabay.com/2026/10/cientificos-descubren-rana-venenosa-ecuador-reservan-ubicacion-protegerla-traficantes-entrevista/"
  },
  {
    "titulo": "Ballenas en Perú: alarmas acústicas podrían salvarlas de morir en redes de pesca",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/18201727/FOTO-1-2-768x512.jpg",
    "fecha": "Oct 20, 2026",
    "url": "https://es.mongabay.com/2026/10/ballenas-peru-alarmas-acusticas-podrian-salvarlas-morir-redes-pesca/"
  },
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
    "titulo": "Chile: expertos advierten que los perros que afectan a la fauna y ganadería van más allá de los asilvestrados",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/18232235/P16_080225_M31-81-768x512.jpg",
    "fecha": "Sep 22, 2026",
    "url": "https://es.mongabay.com/2026/09/chile-congreso-controlar-perros-asilvestrados-cientificos-cuestionan-clasificacion/"
  },
  {
    "titulo": "Colombia: la sobreexplotación pesquera afecta a por lo menos tres especies clave para comunidades del Pacífico | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/22034655/sobreexplotacion-pesquera-colombia-comunidades-pacifico-estudio-6-768x512.jpeg",
    "fecha": "Sep 22, 2026",
    "url": "https://es.mongabay.com/2026/09/sobreexplotacion-pesquera-colombia-comunidades-pacifico-estudio/"
  },
  {
    "titulo": "Perú: Ministerio del Ambiente autorizó cuotas para exportar aletas de tiburón que beneficiaron a empresario investigado por crimen organizado",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/18211434/Caso-Aletas-1-incautacion-de-noviembre-de-2025-Foto-Embajada-Estados-Unidos-768x511.jpg",
    "fecha": "Sep 21, 2026",
    "url": "https://es.mongabay.com/2026/09/peru-ministerio-ambiente-autorizo-cuotas-exportar-aletas-tiburon-beneficiaron-empresario-investigado-crimen-organizado/"
  },
  {
    "titulo": "Pasos de fauna en América Latina: los puentes en los árboles que ayudan a monos, perezosos y otros animales a cruzar con seguridad | Reportaje fotográfico",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/03/31051407/Foto-10-Creditos-Salve-Monos-768x512.jpg",
    "fecha": "Sep 18, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/09/pasos-fauna-america-latina-puentes-arboles-ayudan-animales-reportaje-fotografico/"
  },
  {
    "titulo": "Venezuela: pesca con redes de enmalle amenaza al delfín de Guyana en el Lago de Maracaibo",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/15141919/ORI6858-e1789500355418-768x512.jpg",
    "fecha": "Sep 17, 2026",
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
    "titulo": "Cuando el zoológico se convierte en laboratorio: la ciencia que revela especies invisibles",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/07114341/Olingo-en-recinto6-768x512.jpg",
    "fecha": "Sep 10, 2026",
    "url": "https://es.mongabay.com/2026/09/zoologico-laboratorio-ciencia-revela-especies-invisibles/"
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
    "titulo": "Última actualización automática - Mon Oct 26 22:12:31 2026",
    "imagen": "",
    "fecha": "",
    "url": "#"
  }
];