var config1 = {
    style: ['mapbox://styles/unhcr/clz6xpgu500sk01ph6qwa0eyk'],
    accessToken: 'pk.eyJ1IjoidW5oY3IiLCJhIjoiOUQzQ2dnbyJ9.6ghfFmvxpu7HvHzXci_ogw',
    showMarkers: false,
    markerColor: '',
    inset: false,
    theme: 'light',
    projection: '', 
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
            description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<p>',
            location: {
                center: [-76.54503, 6.00802],
                zoom: 2.7,
                mobileZoom: 0.1,
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
                    layer: 'hti-ipc-phase',
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
            title: 'IPC',
            image: '',
            description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>',
            location: {
                center: [-72.55437, 19.01535],
                zoom: 6.5,
                mobileZoom: 0.1,
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
                    layer: 'hti-ipc-phase',
                    opacity: 0.4
                },
              ],
              onChapterExit: [
                {
                    layer: 'hti-ipc-phase',
                    opacity: 0
                },
              ]
        },
        {
            id: 'chap-2',
            alignment: 'left',
            hidden: false,
            title: 'ACLED event 2023',
            image: '',
            description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>',
            location: {
                center: [-72.55437, 19.01535],
                zoom: 6.5,
                mobileZoom: 0.1,
                pitch: 0,
                bearing: 0
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
                    layer: 'hti-acled-event-1',
                    opacity: 0.4
                }
                
              ],
              onChapterExit: [
                {
                    layer: 'hti-acled-event-1',
                    opacity: 0
                },
              ]
        },
        {
            id: 'chap-3',
            alignment: 'left',
            hidden: false,
            title: 'ACLED event 2023-2024',
            image: '',
            description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>',
            location: {
                center: [-72.55437, 19.01535],
                zoom: 6.5,
                mobileZoom: 0.1,
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
                    layer: 'hti-acled-event-2',
                    opacity: 0.4
                }
                
              ],
              onChapterExit: [
                {
                    layer: 'hti-acled-event-2',
                    opacity: 0
                },
              ]
        },
        {
            id: 'chap-4',
            alignment: 'left',
            hidden: false,
            title: 'Text without data layer',
            image: '',
            description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>',
            location: {
                center: [-72.55437, 19.01535],
                zoom: 6.5,
                mobileZoom: 0.1,
                pitch: 90,
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
                
              ],
              onChapterExit: [

              ]
        },
        {
            id: 'chap-5',
            alignment: 'left',
            hidden: false,
            title: 'IDP',
            image: '',
            description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>',
            location: {
                center: [-72.55437, 19.01535],
                zoom: 6.5,
                mobileZoom: 0.1,
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
                    layer: 'hti-adm2-point-idp',
                    opacity: 0.4
                }
                
              ],
              onChapterExit: [
                {
                    layer: 'hti-adm2-point-idp',
                    opacity: 0
                },
              ]
        },
        {
            id: 'chap-6',
            alignment: 'left',
            hidden: false,
            title: 'Access',
            image: '',
            description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>',
            location: {
                center: [-72.55437, 19.01535],
                zoom: 6.5,
                mobileZoom: 0.1,
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
                    layer: 'hti-adm2-poly-access',
                    opacity: 0.4
                }
                
              ],
              onChapterExit: [
                {
                    layer: 'hti-adm2-poly-access',
                    opacity: 0
                },
              ]
        },
    ]]
};
