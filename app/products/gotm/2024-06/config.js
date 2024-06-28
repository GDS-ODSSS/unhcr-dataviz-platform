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
            description: '<p>46 per cent of State Parties maintain reservations and/or declarations to the 1951 Convention and its 1967 Protocol. <p>',
            location: {
                center: [20, 20],
                zoom: 1.7,
                mobileZoom: 0.2,
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
            description: '<p>Most reservations are made to the rights of refugees to (self-)employment (Articles 17, 18 and 19) and social protection (Article 24), which together provide for the right of refugees to decent work.</p><figure class="figure mt-4 mb-0"><img src="RF1336924_202311211209_DSCF2506_jg.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Mexico. Makendy and Lourdes fled Haiti due to a dire humanitarian situation caused by gang violence, insecurity, and lack of access to basic services.<br>©UNHCR/Jeoffrey Guillemard</figcaption></figure>',
            location: {
                center: [20, 20],
                zoom: 1.7,
                mobileZoom: 0.2,
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
            description: '<p>Some States do not recognize the freedom of movement of refugees and maintain reservations to Article 26. The inability of refugees to freely move around their country of asylum may prevent them from accessing education or employment opportunities.</p><figure class="figure mt-4 mb-0"><img src="RF2263530__MG_8015.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Maya Ghazal, 20, pictured after her first solo flight, at The Pilot Centre, in Denham, United Kingdom.<br>©UNHCR/Andrew McConnell</figcaption></figure>',
            location: {
                center: [20, 20],
                zoom: 1.7,
                mobileZoom: 0.2,
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
            id: 'chap-3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<p>Some States made reservations to providing administrative assistance to refugees (Article 25). This is an important right specific to the situation of refugees because they are unable to access administrative services, such as the issuance of documents, by their countries of origin. </p><figure class="figure mt-4 mb-0"><img src="RF1288385_ABR03191.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Sediqa Danish Nawrozi, a 29-year-old Afghan refugee works as an intercultural mediator in the small city of Fundão in eastern Portugal with an organization called MEDEIA. Sediqa helps her fellow Afghans to secure crucial documentation, access services and connect them with job opportunities.<br>©UNHCR/Ana Brigida</figcaption></figure>',
            location: {
                center: [20, 20],
                zoom: 1.7,
                mobileZoom: 0.2,
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
        // {
        //     id: 'chap-4',
        //     alignment: 'left',
        //     hidden: false,
        //     title: '',
        //     image: '',
        //     description: '<p>Some States are also hesitant to provide refugees with their full rights related to public education and maintain reservations to Article 22. This may include limitations to access secondary education, the recognition of certificates, and opportunities for refugees to finance their studies. This may affect refugees’ ability to build their future and lead independent lives.</p><figure class="figure mt-4 mb-0"><img src="RF1265680_20220913_DAFI-MEX_TARDY_0086.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Roxana, 23 years old, from Maracaibo in northwestern Venezuela, is a final-year BA student of Accounting at the University of Guanajuato, in Mexico, on a DAFI scholarship.<br>©UNHCR/Antoine Tardy</figcaption></figure>',
        //     location: {
        //         center: [20, 20],
        //         zoom: 1.7,
        //         pitch: 0.00,
        //         bearing: 0.00
        //         // flyTo additional controls-
        //         // These options control the flight curve, making it move
        //         // slowly and zoom out almost completely before starting
        //         // to pan.
        //         //speed: 2, // make the flying slow
        //         //curve: 1, // change the speed at which it zooms out
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {

        //         },
        //       ],
        //       onChapterExit: [
        //         {

        //         },
        //       ]
        // },
        {
            id: 'chap-5',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Positively, 17 States have withdrawn some or all their reservations, granting refugees more rights.',
            location: {
                center: [20, 20],
                zoom: 1.7,
                mobileZoom: 0.2,
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
            description: '<p>At least 154 countries and other territories have primary laws in place that relate to the protection of refugees and asylum-seekers. This includes asylum, refugee, (im)migration, foreigners or aliens’ laws issued by a national authority that aim to regulate asylum or international protection.</p>',
            location: {
                center: [20, 20],
                zoom: 1.7,
                mobileZoom: 0.2,
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
                    layer: 'rimap-primary-law',
                    opacity: 1
                },
                
              ],
              onChapterExit: [
                {
                    layer: 'rimap-primary-law',
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
            description: ' At least 114 countries and territories have secondary instruments in place that relate to the protection of refugees and asylum-seekers. This includes legislative, executive or judicial instruments that are legally binding, are based on primary laws and regulate refugee protection issues.',
            location: {
                center: [20, 20],
                zoom: 1.7,
                mobileZoom: 0.2,
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
                center: [20, 20],
                zoom: 1.7,
                mobileZoom: 0.2,
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
                mobileZoom: 4,
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
                mobileZoom: 5.2,
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
            description: 'Also in 2023, Chad signed the implementing decree of its 2020 Asylum Law, which was a result of the country’s commitments made during the first Global Refugee Forum (GRF) in 2019. The law is expected to strengthen the framework for the protection of refugees and asylum-seekers and to ensure the respect for their civil and socio-economic rights.<figure class="figure mt-4 mb-0"><img src="RF1219449_Colin_delfosse_09_04_2022-11.jpg" class="figure-img img-fluid" alt=""><figcaption class="figure-caption">Refugee teacher Hassanie Ahmad Hussein, 28, teaches a class outdoors at the school in Kouchaguine-Moura refugee camp in eastern Chad and dreams of a chance to continue her studies with a masters and doctorate.<br>©UNHCR/Colin Delfosse</figcaption></figure>',
            location: {
                center: [18.40685, 15.17010],
                zoom: 4.5,
                mobileZoom: 4,
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
                mobileZoom: 3.5,
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
                mobileZoom: 4,
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