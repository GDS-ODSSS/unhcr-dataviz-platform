var config = {
    style: ['mapbox://styles/unhcr/clw65xohi02lc01qr73h2dkka'],
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
            description: 'To meet the protection and material needs of those forcibly returned in this challenging environment, UNHCR supports Afghans at the border and in their communities. Taking advantage of UNHCR’s 35 year history supporting Afghans to rebuild their lives and their country, the organization can leverage both its deep roots in the community and cutting edge technology.',
            location: {
                center: [67.4, 33.8],
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
            title: 'At the point of entry',
            image: '',
            description: ' UNHCR teams conduct protection centric border monitoring, surveying returning individuals to understand the triggers, intentions and motives behind Afghan cross-border movements, and assessing individuals’ access to “the right to seek asylum”, while also identifying barriers to movement for those in need of international protection. Afghans returning are met by UNHCR and partners at <strong><span style="color: #0072BC">official border crossing points</span></strong>, receiving immediate relief and protection services.',
            location: {
                center: [67.4, 33.8],
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
            description: 'Returnees are then referred to <strong><span style="color:#EF4A60"> Encashment Centers </span></strong> run by UNHCR to receive full aid and protection packages including cash. Protection screenings take place at the encashment centres to identify vulnerable individuals, and referrals to specialized services are made accordingly. An anonymised information collection mechanism for women and girls’ protection concerns is also in place. ',
            location: {
                center: [67.4, 33.8],
                zoom: 4.5,
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
            description: 'Services include basic healthcare and vaccination, mental health and psychosocial services, mine awareness information, child friendly spaces and legal aid. Returnees also receive cash grants, ensuring that families can buy food and clothes, pay for transportation costs, and cover expenses of other immediate needs and services.',
            location: {
                center: [67.4, 33.8],
                zoom: 4.5,
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
            description: 'UNHCR staff also work to identify, assist, and refer persons with specific needs or vulnerabilities, including unaccompanied and separated children, older persons, and women-headed households, among others, to ensure appropriate and tailored support is received as needed. ',
            location: {
                center: [67.4, 33.8],
                zoom: 4.5,
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
            title: 'In areas of return',
            image: '',
            description: 'UNHCR’s assistance in areas of return is delivered through a ‘whole-of-community’ approach, improving access to basic services for the entire population, including services for women and children, the recovery of civil documentation, and other legal assistance, access to education, healthcare, housing, water, and employment, among others. Working in over <strong><span style="color:#18375F">80 Priority Areas of Return and Reintegration (PARRs)</span></strong>, UNHCR initiatives include investments in education and healthcare services in communities. UNHCR is also building durable accommodation to support local infrastructure and community development, with housing structures designed to be earthquake resilient.',
            location: {
                center: [67.4, 33.8],
                zoom: 4.5,
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
            description: 'Moreover, UNHCR is working with returning and displaced individuals to improve their financial and economic inclusion, including by supporting the development of micro, small, and medium sized businesses. Particular attention is given by UNHCR teams to empower women and youth through economic opportunity and inclusion programs. UNHCR’s support to entire populations in areas of return helps mitigate future displacement, aids returning Afghans as they integrate into communities, and improves living conditions of the entire community. ',
            location: {
                center: [67.4, 33.8],
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