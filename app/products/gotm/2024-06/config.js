var config1 = {
    style: ['mapbox://styles/unhcr/clxkdps0p00d901qw4bbl7hap'],
    accessToken: 'pk.eyJ1IjoidW5oY3IiLCJhIjoiOUQzQ2dnbyJ9.6ghfFmvxpu7HvHzXci_ogw',
    showMarkers: false,
    markerColor: '',
    inset: false,
    theme: 'light',
    projection: 'naturalEarth', 
    use3dTerrain: false,
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [[
        {
            id: 'chap-0',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '46 per cent of State Parties maintain reservations and/or declarations to the 1951 Convention and its 1967 Protocol. This means that they do not consider themselves to be bound by some important provisions of the 1951 Convention. This limits the rights of refugees in these countries. ',
            location: {
                center: [0, 0],
                zoom: 1.7,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rimap-reservation',
                    opacity: 1
                },
              ],
              onChapterExit: [
                {
                    layer: 'rimap-reservation',
                    opacity: 0
                },
              ]
        },
        {
            id: 'chap-1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'For example, most reservations are made to the rights of refugees to (self-)employment (Articles 17, 18 and 19) and social protection (Article 24), which together provide for the right of refugees to decent work. ',
            location: {
                center: [0, 0],
                zoom: 1.7,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rimap-employment-sp',
                    opacity: 1
                },
              ],
              onChapterExit: [
                {
                    layer: 'rimap-employment-sp',
                    opacity: 0
                },
              ]
        },
        {
            id: 'chap-2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Many States also made reservations to providing administrative assistance to refugees (Article 25). This is an important right specific to the situation of refugees because they are unable to access administrative services, such as the issuance of documents, by their countries of origin. ',
            location: {
                center: [0, 0],
                zoom: 1.7,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rimap-admin-assistance',
                    opacity: 1
                },
              ],
              onChapterExit: [
                {
                    layer: 'rimap-admin-assistance',
                    opacity: 0
                },
              ]
        },
        {
            id: 'chap-3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'States also often decide to restrict the freedom of movement of refugees (Article 26). This often prevents refugees from accessing education or employment opportunities. ',
            location: {
                center: [0, 0],
                zoom: 1.7,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rimap-restrict-freedom-movemet',
                    opacity: 1
                },
                
              ],
              onChapterExit: [
                {
                    layer: 'rimap-restrict-freedom-movemet',
                    opacity: 0
                },
              ]
        },
        {
            id: 'chap-4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Positively, 17 States have withdrawn some or all their reservations, granting refugees more rights. ',
            location: {
                center: [0, 0],
                zoom: 1.7,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rimap-withdrawn-reservation',
                    opacity: 1
                },
               
              ],
              onChapterExit: [
                {
                    layer: 'rimap-withdrawn-reservation',
                    opacity: 0
                },
              ]
        }
    ],
    []]
};

var config2 = {
    style: ['mapbox://styles/unhcr/clxkdps0p00d901qw4bbl7hap'],
    accessToken: 'pk.eyJ1IjoidW5oY3IiLCJhIjoiOUQzQ2dnbyJ9.6ghfFmvxpu7HvHzXci_ogw',
    showMarkers: false,
    markerColor: '',
    inset: false,
    theme: 'light',
    projection: 'naturalEarth', 
    use3dTerrain: false, 
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [[
        {
            id: 'chap-0',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'To ensure that refugees are protected and that they can exercise their rights, it is important that countries and territories incorporate international and regional refugee law instruments into their domestic legal framework. In exercising UNHCR’s mandate and supervisory responsibility, the RTLD provides basic information on the domestic laws relating to the protection of refugees. ',
            location: {
                center: [0, 0],
                zoom: 1.7,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rimap-withdrawn-reservation',
                    opacity: 0
                },
                {
                    layer: 'rimap-restrict-freedom-movemet',
                    opacity: 0
                },
                {
                    layer: 'rimap-admin-assistance',
                    opacity: 0
                },
                {
                    layer: 'rimap-employment-sp',
                    opacity: 0
                },
                {
                    layer: 'rimap-reservation',
                    opacity: 0
                },
                {
                    layer: 'rimap-secondary-instruments',
                    opacity: 0
                },
                
              ],
              onChapterExit: [
              ]
        },
        {
            id: 'chap-1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: ' At least 114 countries and territories have secondary instruments in place that relate to the protection of refugees and asylum-seekers. This includes legislative, executive or judicial instruments that are legally binding, are based on primary laws and regulate refugee protection issues.',
            location: {
                center: [0, 0],
                zoom: 1.7,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rimap-secondary-instruments',
                    opacity: 1
                },                
                
              ],
              onChapterExit: [
                
                {
                    layer: 'rimap-secondary-instruments',
                    opacity: 0
                }, 
                
              ]
        },
        {
            id: 'chap-2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'In 2023, UNHCR has recorded at least 92 legislative developments in 77 countries, 49 of which represented advances in refugee rights.',
            location: {
                center: [0, 0],
                zoom: 1.7,
                pitch: 0,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rimap-country-dev',
                    opacity: 1
                },
                
              ],
              onChapterExit: [
                {
                    layer: 'rimap-country-dev',
                    opacity: 0
                },
              ]
        },
        {
            id: 'chap-3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'In early 2024, Kenya has brought its legal framework further in line with international and regional legal standards by adopting regulations implementing its 2021 Refugees Act, which will have a positive impact on the lives of refugees and asylum-seekers in the country.<figure class="figure mt-4 mb-0"><img src="RF1355903_206A9859.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Deline with her friend Said Mohamed a 30-year-old business man from Somalia in Kakuma refugee camp at his shop.<br>©UNHCR/Charity Nzomo</figcaption></figure>',
            location: {
                center: [37.50825, 0.47116],
                zoom: 5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ken_highlight',
                    opacity: 1
                },
                
            ],
            onChapterExit: [
                {
                    layer: 'ken_highlight',
                    opacity: 0
                },
            ]
        },
        {
            id: 'chap-4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'In 2023, Côte d’Ivoire adopted its first national law on asylum. Positively, the law promotes the non-penalization of illegal entry, facilitates family reunification for refugees, foresees the issuance of biometric identity cards for refugees serving as residence permits and reiterates several essential rights for refugees, including the right to education and work.<figure class="figure mt-4 mb-0"><img src="RF1290985_DSC05508.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Gbetibwa Gode in her shop in Koumassi market, where she sells shoes, clothes and accessories.<br>©UNHCR/Lath Divia Kibangou</figcaption></figure>',
            location: {
                center: [-5.43782, 7.01636],
                zoom: 5.8,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'civ_highlight',
                    opacity: 1
                },
                
            ],
            onChapterExit: [
                {
                    layer: 'civ_highlight',
                    opacity: 0
                },
            ]
        },
        {
            id: 'chap-5',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Also in 2023, Chad signed the implementing decree of its 2020 Asylum Law, which was a result of the country’s commitments made during the first Global Refugee Forum (GRF) in 2019. The law is expected to strengthen the framework for the protection of refugees and asylum-seekers and to ensure the respect for their civil and socio-economic rights.<figure class="figure mt-4 mb-0"><img src="RF1219449_Colin_delfosse_09_04_2022-11.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Refugee teacher Hassanie Ahmad Hussein, 28, teaches a class outdoors at the school in Kouchaguine-Moura refugee camp in eastern Chad.<br>©UNHCR/Colin Delfosse</figcaption></figure>',
            location: {
                center: [18.40685, 15.17010],
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'tcd_highlight',
                    opacity: 1
                },                
            ],
            onChapterExit: [
                {
                    layer: 'tcd_highlight',
                    opacity: 0
                }, 
            ]
        },
        {
            id: 'chap-6',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'In 2022, Benin and Senegal have also adopted national laws that are largely in line with international and regional legal standards, providing refugees with extensive rights that can lead to solutions.<figure class="figure mt-4 mb-0"><img src="RF1224695_IMG_6788.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Two Ivorian refugees and two Senegalese and their artwork in progress. Refugees and other participants are in the midst of creating the piece by painting and drawing.<br>©UNHCR/Gosia Courtay</figcaption></figure>',
            location: {
                center: [-8.07265, 11.06195],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sen_ben_highlight',
                    opacity: 1
                },
               
            ],
            onChapterExit: [
                {
                    layer: 'sen_ben_highlight',
                    opacity: 0
                },
            ]
        },
        {
            id: 'chap-7',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'In 2021, Colombia enacted a decree providing Temporary Protection Status (TPS) for an estimated 1.8 million Venezuelans. The creation of the TPS was a milestone in the region because it allows eligible Venezuelans to regularize their stay and reside in Colombia for ten years, which includes accessing a full range of rights.<figure class="figure mt-4 mb-0"><img src="RF1217449_Foto_08_Entregas_Masivas_PPTBogota_26012022_Daniela_Camargo.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">On February 2022, Andrés from Venezuela received his Temporary Protection Permit in Bogotá.<br>©UNHCR/Daniela Camargo</figcaption></figure>',
            location: {
                center: [-73.89097, 4.34697],
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'col_highlight',
                    opacity: 1
                },                
            ],
            onChapterExit: [
                {
                    layer: 'col_highlight',
                    opacity: 0
                },  
            ]
        },
    ],
    []]
};