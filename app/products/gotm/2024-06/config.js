var config = {
    style: ['mapbox://styles/unhcr/clxeq1sqt003m01pfaox55em2'],
    accessToken: 'pk.eyJ1IjoidW5oY3IiLCJhIjoiOUQzQ2dnbyJ9.6ghfFmvxpu7HvHzXci_ogw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
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
                center: [0, 25],
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
                    layer: 'afg-cp-point',
                    opacity: 0
                },
                {
                    layer: 'afg-cp-label',
                    opacity: 0
                },
                {
                    layer: 'afg-adm2',
                    opacity: 0
                },
                {
                    layer: 'afg-adm2-service',
                    opacity: 0
                },
                {
                    layer: 'afg-ec-point',
                    opacity: 0
                },
                {
                    layer: 'afg-ec-label',
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
                center: [0, 25],
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
                    layer: 'afg-cp-point',
                    opacity: 1
                },
                {
                    layer: 'afg-cp-label',
                    opacity: 1
                },
                {
                    layer: 'afg-ec-point',
                    opacity: 0
                },
                {
                    layer: 'afg-ec-label',
                    opacity: 0
                },
              ],
              onChapterExit: [
                
                
              ]
        },
        {
            id: 'chap-2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'In 2023, UNHCR has recorded at least 92 legislative developments in XXX countries, 49 of which represented advances in refugee rights.',
            location: {
                center: [0, 25],
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
                    layer: 'afg-cp-point',
                    opacity: 1
                },
                {
                    layer: 'afg-cp-label',
                    opacity: 1
                },
                {
                    layer: 'afg-ec-point',
                    opacity: 1
                },
                {
                    layer: 'afg-ec-label',
                    opacity: 1
                },
              ],
              onChapterExit: [
              ]
        },
        {
            id: 'chap-3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'DSC09585_Returns-EC.jpg',
            description: 'In early 2024, Kenya has brought its legal framework further in line with international and regional legal standards by adopting regulations implementing its 2021 Refugees Act, which will have a positive impact on the lives of refugees and asylum-seekers in the country. ',
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
                    layer: 'afg-cp-point',
                    opacity: 1
                },
                {
                    layer: 'afg-cp-label',
                    opacity: 1
                },
                {
                    layer: 'afg-ec-point',
                    opacity: 1
                },
                {
                    layer: 'afg-ec-label',
                    opacity: 1
                },
            ],
            onChapterExit: []
        },
        {
            id: 'chap-4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'DSC09396_Returns-EC.jpg',
            description: 'In 2023, Côte d’Ivoire adopted its first national law on asylum. Positively, the law promotes the non-penalization of illegal entry, facilitates family reunification for refugees, foresees the issuance of biometric identity cards for refugees serving as residence permits and reiterates several essential rights for refugees, including the right to education and work. ',
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
                    layer: 'afg-cp-point',
                    opacity: 1
                },
                {
                    layer: 'afg-cp-label',
                    opacity: 1
                },
                {
                    layer: 'afg-ec-point',
                    opacity: 1
                },
                {
                    layer: 'afg-ec-label',
                    opacity: 1
                },
                {
                    layer: 'afg-adm2',
                    opacity: 0
                },
                {
                    layer: 'afg-adm2-service',
                    opacity: 0
                },
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'chap-5',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Also in 2023, Chad signed the implementing decree of its 2020 Asylum Law, which was a result of the country’s commitments made during the first Global Refugee Forum (GRF) in 2019. The law is expected to strengthen the framework for the protection of refugees and asylum-seekers and to ensure the respect for their civil and socio-economic rights.',
            location: {
                center: [18.40685, 15.17010],
                zoom: 5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'afg-adm2',
                    opacity: 1
                },
                {
                    layer: 'afg-adm2-service',
                    opacity: 1
                },
                {
                    layer: 'afg-cp-point',
                    opacity: 0
                },
                {
                    layer: 'afg-cp-label',
                    opacity: 0
                },
                {
                    layer: 'afg-ec-point',
                    opacity: 0
                },
                {
                    layer: 'afg-ec-label',
                    opacity: 0
                },
            ],
            onChapterExit: []
        },
        {
            id: 'chap-6',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'DSC08598_Returns-EC.jpg',
            description: 'In 2022, Benin and Senegal have also adopted national laws that are largely in line with international and regional legal standards, providing refugees with extensive rights that can lead to solutions.',
            location: {
                center: [2.33150, 9.56792],
                zoom: 6,
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
                    layer: 'afg-adm2',
                    opacity: 1
                },
                {
                    layer: 'afg-adm2-service',
                    opacity: 1
                },
                {
                    layer: 'afg-cp-point',
                    opacity: 0
                },
                {
                    layer: 'afg-cp-label',
                    opacity: 0
                },
                {
                    layer: 'afg-ec-point',
                    opacity: 0
                },
                {
                    layer: 'afg-ec-label',
                    opacity: 0
                },
            ],
            onChapterExit: []
        },
        {
            id: 'chap-7',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'DSC08598_Returns-EC.jpg',
            description: 'In 2021, Colombia enacted a decree providing Temporary Protection Status (TPS) for an estimated 1.8 million Venezuelans. The creation of the TPS was a milestone in the region because it allows eligible Venezuelans to regularize their stay and reside in Colombia for ten years, which includes accessing a full range of rights.',
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
                    layer: 'afg-adm2',
                    opacity: 1
                },
                {
                    layer: 'afg-adm2-service',
                    opacity: 1
                },
                {
                    layer: 'afg-cp-point',
                    opacity: 0
                },
                {
                    layer: 'afg-cp-label',
                    opacity: 0
                },
                {
                    layer: 'afg-ec-point',
                    opacity: 0
                },
                {
                    layer: 'afg-ec-label',
                    opacity: 0
                },
            ],
            onChapterExit: []
        },
    ],
    []]
};