const animalesExtintos = [
  {
    "nombre_comun": "Tritón de vientre de fuego de Yunnan",
    "nombre_cientifico": "Cynops wolterstorffi",
    "año_extincion": 1979,
    "lugar": "Lago DianenYunnan,China",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Cynops_wolterstorffi.JPG/120px-Cynops_wolterstorffi.JPG"
  },
  {
    "nombre_comun": "Rana gástrica del Sur",
    "nombre_cientifico": "Rheobatrachus silus",
    "año_extincion": 1983,
    "lugar": "Región subtropical lluviosa del sureste deQueensland,Australia",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Rheobatrachus_silus.jpg/120px-Rheobatrachus_silus.jpg"
  },
  {
    "nombre_comun": "Sapo dorado o sapo de Monteverde",
    "nombre_cientifico": "Incilius periglenes",
    "año_extincion": 1989,
    "lugar": "Bosque deMonteverde,Costa Rica",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Bufo_periglenes1-corrected.jpg/120px-Bufo_periglenes1-corrected.jpg"
  },
  {
    "nombre_comun": "Rana dardo venenosa espléndida",
    "nombre_cientifico": "Oophaga speciosa",
    "año_extincion": 1992,
    "lugar": "Cordillera de Talamanca, al oeste dePanamá",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Oophaga_speciosa.jpg/120px-Oophaga_speciosa.jpg"
  },
  {
    "nombre_comun": "Rana arlequín de Chiriquí",
    "nombre_cientifico": "Atelopus chiriquiensis",
    "año_extincion": 1990,
    "lugar": "Cordillera de Talamanca-Chiriquí, enCosta Ricay el oeste dePanamá",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Chiriqui_harlequin_frog_-_Atelopus_chiriquiensis.jpg/120px-Chiriqui_harlequin_frog_-_Atelopus_chiriquiensis.jpg"
  },
  {
    "nombre_comun": "Paloma Gigante De Viti Lebu",
    "nombre_cientifico": "Natunaornis gigoura",
    "año_extincion": 2000,
    "lugar": "Isla deViti Levu, enFiyi",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Lapitiguana_impensa.JPG/120px-Lapitiguana_impensa.JPG"
  },
  {
    "nombre_comun": "Guacamayo glauco",
    "nombre_cientifico": "Anodorhynchus glaucus",
    "año_extincion": 1950,
    "lugar": "Norte deUruguay, sur deParaguay, sur deBrasil, la zona delChacodeBoliviay noroeste deArgentina",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Anodorhynchus_glaucus.jpg/120px-Anodorhynchus_glaucus.jpg"
  },
  {
    "nombre_comun": "Picamaderos imperial, carpintero imperial o cuauhtotomomi",
    "nombre_cientifico": "Campephilus imperialis",
    "año_extincion": 1956,
    "lugar": "Bosques templados y fríos, deMéxicoy del sur de losEstados Unidos",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Kaiserspecht_fg02.jpg/120px-Kaiserspecht_fg02.jpg"
  },
  {
    "nombre_comun": "Kakawajie",
    "nombre_cientifico": "Paroreomyza flammea",
    "año_extincion": 1963,
    "lugar": "Islas deHawáiyMolokai",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Paroreomyza.flammea.jpg/120px-Paroreomyza.flammea.jpg"
  },
  {
    "nombre_comun": "Avestruz arábiga o avestruz siria",
    "nombre_cientifico": "Struthio camelus syriacus",
    "año_extincion": 1966,
    "lugar": "Península arábigayOriente Próximo",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Syrischer_Maler_um_1335_001.jpg/120px-Syrischer_Maler_um_1335_001.jpg"
  },
  {
    "nombre_comun": "Acantisita de matorral",
    "nombre_cientifico": "Xenicus longipes",
    "año_extincion": 1972,
    "lugar": "Nueva Zelanda",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bushwren_extracted.jpg/120px-Bushwren_extracted.jpg"
  },
  {
    "nombre_comun": "Ostrero unicolor canario",
    "nombre_cientifico": "Haematopus meadewaldoi",
    "año_extincion": 1980,
    "lugar": "Islas deFuerteventurayLanzarote,islote de Lobosy elarchipiélago Chinijo, en elarchipiélago Canario,España",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Canarian_Oystercatcher.jpg/120px-Canarian_Oystercatcher.jpg"
  },
  {
    "nombre_comun": "Monarca de Guam",
    "nombre_cientifico": "Myiagra freycineti",
    "año_extincion": 1983,
    "lugar": "Isla de Guam",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Myiagra_freycineti.jpg/120px-Myiagra_freycineti.jpg"
  },
  {
    "nombre_comun": "Zarzalero de Aldabra",
    "nombre_cientifico": "Nesillas aldabrana",
    "año_extincion": 1983,
    "lugar": "Atolón deAldabra, en lasSeychelles",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Stamp_of_Seychelles_-_Zil_Eloigne_Sesel_-_1983_-_Colnect_497410_-_Aldabra_Brush_Warbler_Nesillas_aldabrana.jpeg/120px-Stamp_of_Seychelles_-_Zil_Eloigne_Sesel_-_1983_-_Colnect_497410_-_Aldabra_Brush_Warbler_Nesillas_aldabrana.jpeg"
  },
  {
    "nombre_comun": "Zampullín del Alaotra",
    "nombre_cientifico": "Tachybaptus rufolavatus",
    "año_extincion": 1985,
    "lugar": "Lagos de la isla deMadagascar",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Tachybaptus_rufolavatus_-_Z%C3%BCrich_Zoo.JPG/120px-Tachybaptus_rufolavatus_-_Z%C3%BCrich_Zoo.JPG"
  },
  {
    "nombre_comun": "Reinita de Bachman",
    "nombre_cientifico": "Vermivora bachmanii",
    "año_extincion": 1980,
    "lugar": "Isla de CubaySur de CaliforniaenEstados Unidos",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Vermivora_bachmanii.jpg/120px-Vermivora_bachmanii.jpg"
  },
  {
    "nombre_comun": "Pato poc, zampullín del lago Atitlán o macá de Atitlán",
    "nombre_cientifico": "Podilymbus gigas",
    "año_extincion": 1990,
    "lugar": "Lago de Atitlán,Guatemala",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Pato_poc.jpg/120px-Pato_poc.jpg"
  },
  {
    "nombre_comun": "Carpintero Picomarfil Cubano",
    "nombre_cientifico": "Campephilus principalis bairdii",
    "año_extincion": 1990,
    "lugar": "Isla de Cuba",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Naturalis_Biodiversity_Center_-_RMNH.AVES.110097_-_Campephilus_principalis_bairdii_Cassin%2C_1863_-_Ivory-billed_Woodpecker_-_specimen_-_lateral_view.jpeg/120px-Naturalis_Biodiversity_Center_-_RMNH.AVES.110097_-_Campephilus_principalis_bairdii_Cassin%2C_1863_-_Ivory-billed_Woodpecker_-_specimen_-_lateral_view.jpeg"
  },
  {
    "nombre_comun": "Ticotico de Alagoas",
    "nombre_cientifico": "Philydor novaesi",
    "año_extincion": 2011,
    "lugar": "Noroeste deBrasil",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ticotico_de_Alagoas_%28Philydor_novaesi%29.jpg/120px-Ticotico_de_Alagoas_%28Philydor_novaesi%29.jpg"
  },
  {
    "nombre_comun": "Caracol arborícola de Oahu",
    "nombre_cientifico": "Achatinella abbreviata",
    "año_extincion": 2008,
    "lugar": "Isla de Oahu,Hawái",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Achatinella_abbreviata_both.jpg/120px-Achatinella_abbreviata_both.jpg"
  },
  {
    "nombre_comun": "Caracol arborícola de Coote",
    "nombre_cientifico": "Achatinella apexfulva",
    "año_extincion": 2019,
    "lugar": "Isla de Hawai",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Naturalis_Biodiversity_Center_-_RMNH.MOL.239219_-_Achatinella_apexfulva_%28Dixon%2C_1789%29_-_Achatinellidae_-_Mollusc_shell.jpeg/120px-Naturalis_Biodiversity_Center_-_RMNH.MOL.239219_-_Achatinella_apexfulva_%28Dixon%2C_1789%29_-_Achatinellidae_-_Mollusc_shell.jpeg"
  },
  {
    "nombre_comun": "Tijereta de Santa Elena",
    "nombre_cientifico": "Labidura herculeana",
    "año_extincion": 1967,
    "lugar": "Isla Santa Elena, en elOcéano Atlánticosur",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Labidura_herculeana.jpg/40px-Labidura_herculeana.jpg"
  },
  {
    "nombre_comun": "Gran mariposa blanca de Madeira",
    "nombre_cientifico": "Pieris brassicae wollastoni",
    "año_extincion": 1977,
    "lugar": "Isla de Madeira, en elarchipiélago de Madeira,Portugal",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pieris_wollastoni-PD.png/120px-Pieris_wollastoni-PD.png"
  },
  {
    "nombre_comun": "Rinoceronte lanudo",
    "nombre_cientifico": "Coelodonta antiquitatis",
    "año_extincion": 8000,
    "lugar": "EnEuropay el norte deAsia",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wooly_Rhino15.jpg/120px-Wooly_Rhino15.jpg"
  },
  {
    "nombre_comun": "Perezoso gigante americano",
    "nombre_cientifico": "Megatherium",
    "año_extincion": 8000,
    "lugar": "EnAmérica del Sur",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Megatherum_DB.jpg/120px-Megatherum_DB.jpg"
  },
  {
    "nombre_comun": "Alce irlandés, ciervo gigante o megalocero",
    "nombre_cientifico": "Megaloceros giganteus",
    "año_extincion": 5000,
    "lugar": "EnEuropay gran parte deAsia",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Megaloceros.jpg/120px-Megaloceros.jpg"
  },
  {
    "nombre_comun": "Cabra-rata de las Baleares",
    "nombre_cientifico": "Myotragus balearicus",
    "año_extincion": 3000,
    "lugar": "Islas deMallorca,Menorca,CabreraySa Dragonera,España",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Myotragus_balearicus.JPG/120px-Myotragus_balearicus.JPG"
  },
  {
    "nombre_comun": "Hombre de Neandertal o Neandertal",
    "nombre_cientifico": "Homo neanderthalensis",
    "año_extincion": 28000,
    "lugar": "EnEuropa,Próximo Oriente,Oriente MedioyAsia Central",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Le_Moustier.jpg/120px-Le_Moustier.jpg"
  },
  {
    "nombre_comun": "Ualabí de central hare",
    "nombre_cientifico": "Lagorchestes asomatus",
    "año_extincion": 1960,
    "lugar": "En losdesiertoscentrales y occidentales deAustralia",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Lag_cons.jpg/120px-Lag_cons.jpg"
  },
  {
    "nombre_comun": "Bandicut del desierto",
    "nombre_cientifico": "Perameles eremiana",
    "año_extincion": 1960,
    "lugar": "Norte deAustralia Meridional, sur delTerritorio del Norte, y la región delGran Desierto de Victoriaperteneciente aAustralia Occidental, enAustralia",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Perameles_eremiana.jpg/120px-Perameles_eremiana.jpg"
  },
  {
    "nombre_comun": "Bilbi menor",
    "nombre_cientifico": "Macrotis leucura",
    "año_extincion": 1950,
    "lugar": "DesiertosdeAustralia Central",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lesserbilby.jpg/120px-Lesserbilby.jpg"
  },
  {
    "nombre_comun": "Foca monje del Caribe o foca fraile caribeña",
    "nombre_cientifico": "Neomonachus tropicalis",
    "año_extincion": 1952,
    "lugar": "Costas delmar Caribe",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Cms-newyorkzoologicalsociety1910.jpg/120px-Cms-newyorkzoologicalsociety1910.jpg"
  },
  {
    "nombre_comun": "Jutía de las islas Santanilla",
    "nombre_cientifico": "Geocapromys thoracatus",
    "año_extincion": 1955,
    "lugar": "Islas Santillana, al noroeste delmar Caribe",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Geocapromys_thoracatus_%28Harvard_University%29.JPG/120px-Geocapromys_thoracatus_%28Harvard_University%29.JPG"
  },
  {
    "nombre_comun": "Canguro rabipelado occidental",
    "nombre_cientifico": "Onychogalea lunata",
    "año_extincion": 1956,
    "lugar": "En el occidente y centro deAustralia",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Onychogalea_lunata.jpg/120px-Onychogalea_lunata.jpg"
  },
  {
    "nombre_comun": "Ratón Candango",
    "nombre_cientifico": "Juscelinomys candango",
    "año_extincion": 1960,
    "lugar": "Región deBrasilia,Brasil",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Jusceliomys_candango.jpg/120px-Jusceliomys_candango.jpg"
  },
  {
    "nombre_comun": "Oso grizzly mexicano u oso pardo mexicano",
    "nombre_cientifico": "Ursus arctos nelsoni",
    "año_extincion": 1964,
    "lugar": "Regiones del norte y centro deMéxico",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Mexico_grizzlies.png/120px-Mexico_grizzlies.png"
  },
  {
    "nombre_comun": "Rata nidificante menor",
    "nombre_cientifico": "Leporillus apicalis",
    "año_extincion": 1970,
    "lugar": "En el interior deAustralia",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Leporillus_apicalis_-_Gould.jpg/120px-Leporillus_apicalis_-_Gould.jpg"
  },
  {
    "nombre_comun": "Tigre persa o tigre del Caspio",
    "nombre_cientifico": "Panthera tigris virgata",
    "año_extincion": 1970,
    "lugar": "Península deAnatolia, elCáucaso, al norte delGran Cáucaso, en laRusia europeayUcrania,​ elKurdistán, norte deIrak,Irán,Afganistány gran parte deAsia CentralhastaMongoliay de ahí hasta el extremo oriente deSiberia",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Panthera_tigris_virgata.jpg/120px-Panthera_tigris_virgata.jpg"
  },
  {
    "nombre_comun": "León marino del Japón o león marino japonés",
    "nombre_cientifico": "Zalophus japonicus",
    "año_extincion": 1974,
    "lugar": "Costas delarchipiélago japonésy los mares aledaños en elocéano Pacíficonoroccidental",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Zalophus_japonicus.JPG/120px-Zalophus_japonicus.JPG"
  },
  {
    "nombre_comun": "Ratón saltador de cola larga",
    "nombre_cientifico": "Notomys longicaudatus",
    "año_extincion": 1977,
    "lugar": "Territorio del Norte,Australia del Sur,Nueva Gales del Sur​ yAustralia Occidental, enAustralia",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Notomys_longicaudatus.jpg/120px-Notomys_longicaudatus.jpg"
  },
  {
    "nombre_comun": "Tigre de Java",
    "nombre_cientifico": "Panthera tigris sondaica",
    "año_extincion": 1979,
    "lugar": "IslaindonesiadeJava",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Panthera_tigris_sondaica_01.jpg/120px-Panthera_tigris_sondaica_01.jpg"
  },
  {
    "nombre_comun": "Gacela saudí",
    "nombre_cientifico": "Gazella saudiya",
    "año_extincion": 1980,
    "lugar": "Península arábiga",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Compl%C3%A9ments_de_Buffon_%286289273740%29.jpg/120px-Compl%C3%A9ments_de_Buffon_%286289273740%29.jpg"
  },
  {
    "nombre_comun": "Leopardo de Zanzíbar",
    "nombre_cientifico": "Panthera pardus adersi",
    "año_extincion": 1990,
    "lugar": "Isla de Unguja, en elarchipiélago de Zanzíbar,Tanzania",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Zanzibar_Leopard_2.JPG/120px-Zanzibar_Leopard_2.JPG"
  },
  {
    "nombre_comun": "Bucardo",
    "nombre_cientifico": "Capra pyrenaica pyrenaica",
    "año_extincion": 2000,
    "lugar": "Zonas montañosas del norte deEspaña",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Pyrenean_Ibex.png/120px-Pyrenean_Ibex.png"
  },
  {
    "nombre_comun": "Baiji o delfín chino de río",
    "nombre_cientifico": "Lipotes vexillifer",
    "año_extincion": 2008,
    "lugar": "Desde el curso medio e inferior delrío Yangtsé, hasta su desembocadura, cerca deShanghái",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lipotes_vexillifer.png/120px-Lipotes_vexillifer.png"
  },
  {
    "nombre_comun": "Rinoceronte de Java vietnamita o rinoceronte de Java del Vietnam",
    "nombre_cientifico": "Rhinoceros sondaicus annamiticus",
    "año_extincion": 2010,
    "lugar": "EnVietnam,Camboya,LaosyTailandia",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Javan_Rhino_Zimmerman.jpg/120px-Javan_Rhino_Zimmerman.jpg"
  },
  {
    "nombre_comun": "Pantera nebulosa de Formosa o leopardo nublado de Formosa",
    "nombre_cientifico": "Neofelis nebulosa brachyura",
    "año_extincion": 2013,
    "lugar": "Isla deTaiwán",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/LeopardusBrachyurusWolf.jpg/120px-LeopardusBrachyurusWolf.jpg"
  },
  {
    "nombre_comun": "Puma oriental o puma del este",
    "nombre_cientifico": "Puma concolor couguar",
    "año_extincion": 2016,
    "lugar": "Noreste deAmérica del Norte",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/EasternCougar.jpg/120px-EasternCougar.jpg"
  },
  {
    "nombre_comun": "Melonys del cayo Bramble",
    "nombre_cientifico": "Melomys rubicola",
    "año_extincion": 2023,
    "lugar": "Estrecho de Torres,Australia",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Bramble-cay-melomys.jpg/120px-Bramble-cay-melomys.jpg"
  },
  {
    "nombre_comun": "Carpa verde",
    "nombre_cientifico": "Evarra eigenmanni",
    "año_extincion": 1954,
    "lugar": "Canales deChalcoy área deXochimilco-Tláhuac,México[11]​",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/FMIB_34174_Evarra_eigenmanni%2C_genet_sp_nov.jpeg/120px-FMIB_34174_Evarra_eigenmanni%2C_genet_sp_nov.jpeg"
  },
  {
    "nombre_comun": "Cisco de aguas profundas",
    "nombre_cientifico": "Coregonus johannae",
    "año_extincion": 1955,
    "lugar": "LagosHurónyMíchigan, enAmérica del Norte",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/FMIB_42892_Bloater_of_Lake_Michigan_-_Leucichthys_johannae_%28Wagner%29.jpeg/120px-FMIB_42892_Bloater_of_Lake_Michigan_-_Leucichthys_johannae_%28Wagner%29.jpeg"
  },
  {
    "nombre_comun": "Carpita de Sacramento",
    "nombre_cientifico": "Gila crassicauda",
    "año_extincion": 1950,
    "lugar": "Cuencas de los ríosSacramentoySan Joaquín, en elValle CentraldeCalifornia",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Thicktail_Chub.jpg/120px-Thicktail_Chub.jpg"
  },
  {
    "nombre_comun": "Sardinita de Durango",
    "nombre_cientifico": "Notropis aulidion",
    "año_extincion": 1961,
    "lugar": "En las aguas del río Tunal, cuenca alta delrío Mezquital, enDurango,México[13]​",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Durango_Shiner.jpg/120px-Durango_Shiner.jpg"
  },
  {
    "nombre_comun": "Cisco de aleta negra",
    "nombre_cientifico": "Coregonus nigripinnis",
    "año_extincion": 1969,
    "lugar": "LagosHurón,MíchiganyNipigon, enAmérica del Norte",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/FMIB_42893_Blackfin_of_Lake_Michigan_-_Leucichthys_nigripinnis_%28Gill%29.jpeg/120px-FMIB_42893_Blackfin_of_Lake_Michigan_-_Leucichthys_nigripinnis_%28Gill%29.jpeg"
  },
  {
    "nombre_comun": "Corégono del Lago de Constanza",
    "nombre_cientifico": "Coregonus gutturosus",
    "año_extincion": 1970,
    "lugar": "Lago de Constanza, enAlemania,AustriaySuiza",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Kilch.jpg/120px-Kilch.jpg"
  },
  {
    "nombre_comun": "Cachorrito de Tecopa",
    "nombre_cientifico": "Cyprinodon nevadensis calidae",
    "año_extincion": 1981,
    "lugar": "Manantiales de agua caliente, en eldesierto de Mojave,California",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tecopa-pupfish.jpg/120px-Tecopa-pupfish.jpg"
  },
  {
    "nombre_comun": "Carpa del Lago Yilong",
    "nombre_cientifico": "Cyprinus yilongensis",
    "año_extincion": 1981,
    "lugar": "Lago Yilong,China",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Specimen_of_Cyprinus_yilongensis%2C_Museum_of_Hydrobiological_Sciences%2C_Wuhan_Institute_of_Hydrobiology_2.jpg/120px-Specimen_of_Cyprinus_yilongensis%2C_Museum_of_Hydrobiological_Sciences%2C_Wuhan_Institute_of_Hydrobiology_2.jpg"
  },
  {
    "nombre_comun": "Lucioperca azul o pica azul",
    "nombre_cientifico": "Sander vitreus vitreus",
    "año_extincion": 1983,
    "lugar": "En losGrandes LagosdeAmérica del Norte",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Blue_walleye.jpg/120px-Blue_walleye.jpg"
  },
  {
    "nombre_comun": "Dardo de Maryland",
    "nombre_cientifico": "Etheostoma sellare",
    "año_extincion": 1980,
    "lugar": "Rápido deDeer Creek, enMaryland,Estados Unidos",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Maryland_Darter_-_Dave_Neely_%28illustration%29.jpg/120px-Maryland_Darter_-_Dave_Neely_%28illustration%29.jpg"
  },
  {
    "nombre_comun": "Pez espátula del Yangtsé",
    "nombre_cientifico": "Psephurus gladius",
    "año_extincion": 2009,
    "lugar": "En las aguas delrío Yangtzey delrío Amarillo, enChina",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Psephurus_gladius_%28flipped%29.jpg/120px-Psephurus_gladius_%28flipped%29.jpg"
  },
  {
    "nombre_comun": "Cachorrito enano de Potosí",
    "nombre_cientifico": "Megupsilon aporus",
    "año_extincion": 2014,
    "lugar": "Manantial El Potosí enNuevo León,México",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Megupsilon_aporus_-_last_male.tif/lossy-page1-90px-Megupsilon_aporus_-_last_male.tif.jpg"
  },
  {
    "nombre_comun": "Pez de mano liso o pez de mano moteado",
    "nombre_cientifico": "Brachionichthys hirsutus",
    "año_extincion": 2020,
    "lugar": "Sudeste deAustralia",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/CSIRO_ScienceImage_13_A_Female_Spotted_Handfish_With_Eggs.jpg/120px-CSIRO_ScienceImage_13_A_Female_Spotted_Handfish_With_Eggs.jpg"
  },
  {
    "nombre_comun": "Pez espátula del río Yangtse",
    "nombre_cientifico": "Psephurus gladius",
    "año_extincion": 2022,
    "lugar": "Río YangtseenChina",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Psephurus_gladius.jpg/120px-Psephurus_gladius.jpg"
  },
  {
    "nombre_comun": "Lagarto de la isla de Ratas",
    "nombre_cientifico": "Podarcis lilfordi rodriquezi",
    "año_extincion": 1950,
    "lugar": "Isla de Ratas, en laisla de Menorca,España",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Podarcis_lilfordi_rodriquezi.jpg/120px-Podarcis_lilfordi_rodriquezi.jpg"
  },
  {
    "nombre_comun": "Boa madriguera de isla Redonda",
    "nombre_cientifico": "Bolyeria multocarinata",
    "año_extincion": 1975,
    "lugar": "Isla Redonda, enMauricio",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Bolyeria_multocarinata.jpg/120px-Bolyeria_multocarinata.jpg"
  },
  {
    "nombre_comun": "Tortuga gigante de Pinta",
    "nombre_cientifico": "Chelonoidis abingdonii",
    "año_extincion": 2012,
    "lugar": "Isla Pinta, en lasislas Galápagos,Ecuador",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lonesome_George_in_profile.png/120px-Lonesome_George_in_profile.png"
  }
];