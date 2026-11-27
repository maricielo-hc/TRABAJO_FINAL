const articulos = [
  {
    "titulo": "De suelo degradado a refugio de aves: una apuesta por construir un hogar en pequeñas fincas de Colombia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/06/22020503/Iguaza-careta-dendrocygna-viudata-3Calidris-768x512.jpg",
    "fecha": "Nov 26, 2026",
    "url": "https://es.mongabay.com/2026/11/suelo-degradado-refugio-aves-apuesta-construir-hogar-pequenas-fincas-colombia/"
  },
  {
    "titulo": "Vaquita marina en México: organizaciones ambientalistas impugnan los cambios en la zona de protección de esta especie en peligro de extinción",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/11/25211159/AP26038090604260-768x512.jpg",
    "fecha": "Nov 25, 2026",
    "url": "https://es.mongabay.com/short-article/2026/11/vaquita-marina-mexico-organizaciones-ambientalistas-impugnan-cambios-zona-proteccion-especie-peligro-extincion/"
  },
  {
    "titulo": "Licencia ambiental a la medida en isla Gorgona: la estación de guardacostas en un parque nacional de Colombia | PODCAST",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/11/18091348/una-lancha-de-la-Armada-Nacional-cerca-a-la-entrada-del-Parque-Nacional-Natural-Gorgona-Foto-Daniela-Castro-768x512.jpg",
    "fecha": "Nov 21, 2026",
    "url": "https://es.mongabay.com/podcast/2026/11/licencia-ambiental-a-la-medida-en-isla-gorgona-la-estacion-de-guardacostas-en-un-parque-nacional-de-colombia-podcast/"
  },
  {
    "titulo": "Reportaje fotográfico | El pez más grande del mundo: drones revelan cómo impacta el turismo al tiburón ballena en México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2020/10/10000907/JYW5478_HR-768x512.jpg",
    "fecha": "Nov 21, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/11/reportaje-fotografico-pez-mas-grande-del-mundo-drones-revelan-impacta-turismo-tiburon-ballena-mexico/"
  },
  {
    "titulo": "Licencia ambiental a la medida en Gorgona: el aval que permite a la Armada de Colombia construir en un parque nacional pese a las alertas de la ciencia",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/11/18090612/Ballena-jorobada-en-el-area-marina-protegida-del-Parque-Nacional-Natural-Gorgona-Foto-Laura-Benitez-768x511.jpg",
    "fecha": "Nov 18, 2026",
    "url": "https://es.mongabay.com/2026/11/licencia-ambiental-gorgona-armada-colombia-construir-parque-nacional-alertas-ciencia/"
  },
  {
    "titulo": "Describen dos nuevas especies de monos aulladores rojos en la Amazonía | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/11/16162623/Un-estudio-genetico-describe-dos-nuevas-especies-de-monos-aulladores-amazonicos-mongabay-latam-768x512.jpg",
    "fecha": "Nov 16, 2026",
    "url": "https://es.mongabay.com/short-article/2026/11/describe-dos-nuevas-especies-monos-aulladores-amazonicos/"
  },
  {
    "titulo": "Especies amenazadas: una cotorra, un ave marina y un pez tienen en riesgo su supervivencia | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/09/07193052/Plano-detalle-del-moema-768x512.jpg",
    "fecha": "Nov 14, 2026",
    "url": "https://es.mongabay.com/2026/11/especies-amenazadas-cotorra-ave-marina-pez-riesgo-supervivencia-coyuntura-ambiental/"
  },
  {
    "titulo": "Reportaje fotográfico | Las imponentes ballenas regresan a la Patagonia argentina tras décadas de caza, pero sufren nuevas amenazas",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/14095847/Captura-de-pantalla-2025-07-29-a-las-5.21.22%E2%80%AFp.m-768x512.png",
    "fecha": "Nov 13, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/11/reportaje-fotografico-imponentes-ballenas-regresan-patagonia-argentina-caza-nuevas-amenazas/"
  },
  {
    "titulo": "Bolivia: el pequeño territorio de la tangara inti, ave recién descrita por la ciencia, amenazado por minería y deforestación",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/11/10050124/PORTADA-DSC_5874-768x512.jpg",
    "fecha": "Nov 13, 2026",
    "url": "https://es.mongabay.com/2026/11/bolivia-territorio-tangara-inti-ave-recien-descrita-amenazado-mineria-deforestacion/"
  },
  {
    "titulo": "Perú: confiscan más de 3000 tarántulas a presuntos traficantes europeos",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/11/10174723/Peru-autoridades-confiscan-mas-de-3000-tarantulas-a-presuntos-traficantes-europeos-768x512.jpeg",
    "fecha": "Nov 10, 2026",
    "url": "https://es.mongabay.com/short-article/2026/11/peru-autoridades-confiscan-tarantulas-presuntos-traficantes-europeos/"
  },
  {
    "titulo": "Científicos y pescadores se unen para salvar ballenas, albatros, tiburones y otras especies amenazadas por la pesca | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/03/18224711/Albatros_peru-2026-03-12-at-22.46.56-2-768x512.jpeg",
    "fecha": "Nov 09, 2026",
    "url": "https://es.mongabay.com/2026/11/cientificos-pescadores-salvar-ballenas-albatros-tiburones-pesca-lecturas-ambientales/"
  },
  {
    "titulo": "Perú: el cambio climático amenaza la pesca de especies clave para la economía a 2055 | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2024/04/21144024/SAO-%C2%A9-OCEANA-Andre-Baertschi-Fishermen-in-Puerto-Pizarro-1536x1024-1-768x512.jpg",
    "fecha": "Nov 09, 2026",
    "url": "https://es.mongabay.com/2026/11/peru-cambio-climatico-amenaza-pesca-especies-clave-economia-2055-estudio/"
  },
  {
    "titulo": "La historia de convivencia entre los indígenas baniwa y las nutrias, consideradas guardianas espirituales de los peces",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/11/05210819/pteronura-brasiliensis-2-768x512.jpg",
    "fecha": "Nov 06, 2026",
    "url": "https://es.mongabay.com/short-article/2026/11/historia-convivencia-indigenas-baniwa-nutrias-guardianas-espirituales-peces/"
  },
  {
    "titulo": "Reportaje fotográfico | Viajes extraordinarios de hasta 3500 kilómetros: así migran pingüinos, tiburones y ballenas para alimentarse y reproducirse",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/17205402/Researcher-about-to-tag-a-SHH_Credit-to-Mark-Wong-768x512.jpg",
    "fecha": "Nov 06, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/11/reportaje-fotografico-viajes-migratorios-pinguinos-tiburones-ballenas-alimentacion-reproduccion/"
  },
  {
    "titulo": "El Niño golpea al bobo de Cocos: científicos encuentran polluelos débiles, esqueletos y menos nidos en Isla Pajarera, México",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/11/05160231/PXL_20260914_160542976-1-768x512.jpg",
    "fecha": "Nov 05, 2026",
    "url": "https://es.mongabay.com/2026/11/el-nino-golpea-bobo-de-cocos-disminucion-nidos-pacifico-mexicano/"
  },
  {
    "titulo": "Redes fantasma en México: más de 77 mil artes de pesca a la deriva siguen atrapando peces y animales en el mar",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/11/04052039/pesca-fantasma-mexico-redes-deriva-mar-2-768x512.jpg",
    "fecha": "Nov 04, 2026",
    "url": "https://es.mongabay.com/2026/11/pesca-fantasma-mexico-redes-deriva-mar/"
  },
  {
    "titulo": "Mantarrayas cruzan fronteras en Centroamérica: científicos proponen protección transnacional de sus rutas en el océano | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/31013017/Benjamin-Valenzuela-1-768x512.jpg",
    "fecha": "Nov 03, 2026",
    "url": "https://es.mongabay.com/2026/11/mantarrayas-cruzan-fronteras-centroamerica-cientificos-proponen-proteccion-transnacional-rutas-oceano/"
  },
  {
    "titulo": "“Busco un científico”: la herramienta que reúne a investigadores e investigadoras del medioambiente en América Latina",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2022/06/27093140/Chamela-Jalisco-2011-Cristina-Marti%CC%81nez-Garza-768x512.jpg",
    "fecha": "Nov 03, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/11/busco-un-cientifico-herramienta-reune-investigadores-investigadoras-medioambiente-america-latina/"
  },
  {
    "titulo": "Tráfico de aletas, pesca y comercio ilegal: las amenazas a los tiburones en cuatro países que rechazaron un acuerdo internacional de protección | Lecturas ambientales",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/07/11151618/42.-Tarqui-landings-Alex-Hearn-USFQ-768x512.jpg",
    "fecha": "Nov 02, 2026",
    "url": "https://es.mongabay.com/2026/11/trafico-aletas-pesca-comercio-ilegal-amenazas-tiburones-lecturas-ambientales/"
  },
  {
    "titulo": "«No hay manera de extraer kril de forma sostenible en la Antártida», advierte la oceanógrafa Sylvia Earle",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/30155142/AP26301683452513-768x513.jpg",
    "fecha": "Nov 02, 2026",
    "url": "https://es.mongabay.com/2026/11/no-hay-manera-de-extraer-kril-forma-sostenible-antartida-entrevista-oceanografa-sylvia-earle/"
  },
  {
    "titulo": "De cuentos infantiles a guías comunitarias: así buscan en México y Colombia convivir en paz con los animales silvestres | Coyuntura ambiental",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/21220249/oso-de-anteojos-by-Federico-Mosquera-768x512.jpg",
    "fecha": "Oct 31, 2026",
    "url": "https://es.mongabay.com/2026/10/cuentos-infantiles-guias-comunitarias-mexico-colombia-convivir-paz-animales-silvestres/"
  },
  {
    "titulo": "El Galápagos que no se ve a primera vista: estudio registró 524 avispas, hormigas y abejas en el archipiélago",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/29032018/insectos-Galapagos-13-768x512.jpg",
    "fecha": "Oct 30, 2026",
    "url": "https://es.mongabay.com/2026/10/galapagos-estudio-registro-524-avispas-hormigas-abejas/"
  },
  {
    "titulo": "Reportaje fotográfico | Nutria gigante: una especie amenazada que lucha por sobrevivir en Sudamérica",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/04/01005548/Nutria-gigante-2-768x512.jpg",
    "fecha": "Oct 30, 2026",
    "url": "https://es.mongabay.com/custom-story/2026/10/reportaje-fotografico-nutria-gigante-especie-amenazada-lucha-por-sobrevivir-sudamerica/"
  },
  {
    "titulo": "Conoce estas tres especies nuevas para la ciencia: un marsupial, una rana venenosa y una diminuta depredadora acuática",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2026/10/21000055/Condor-768x512.jpeg",
    "fecha": "Oct 25, 2026",
    "url": "https://es.mongabay.com/2026/10/tres-especies-nuevas-ciencia-marsupial-rana-venenosa-diminuta-depredadora-acuatica/"
  },
  {
    "titulo": "Última actualización automática - Fri Nov 27 01:24:44 2026",
    "imagen": "",
    "fecha": "",
    "url": "#"
  }
];