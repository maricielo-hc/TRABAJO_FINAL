const articulos = [
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
    "titulo": "Las ingenieras de Galápagos están en peligro: el cedro, un árbol introducido, amenaza la migración de las tortugas gigantes | ESTUDIO",
    "imagen": "https://imgs.mongabay.com/wp-content/uploads/sites/25/2025/09/09215343/MaraSPEECE_DSC05884-2-768x512.jpg",
    "fecha": "Sep 10, 2025",
    "url": "https://es.mongabay.com/2025/09/galapagos-cedro-amenaza-migracion-tortugas-gigantes/"
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
    "imagen": "https://es.mongabay.com/wp-content/uploads/sites/25/2025/07/PNRAB-Marsupial-Pedreo-Peloso-en-Paven-et-al.-2025-1-768x512.png",
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
    "titulo": "Última actualización automática - Wed Sep 10 18:21:27 2025",
    "imagen": "",
    "fecha": "",
    "url": "#"
  }
];