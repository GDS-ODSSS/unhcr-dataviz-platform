function mapInit(mapId, storyId, config) {
    var initLoad = true;
    var layerTypes = {
        'fill': ['fill-opacity'],
        'line': ['line-opacity'],
        'circle': ['circle-opacity', 'circle-stroke-opacity'],
        'symbol': ['icon-opacity', 'text-opacity'],
        'raster': ['raster-opacity'],
        'fill-extrusion': ['fill-extrusion-opacity'],
        'heatmap': ['heatmap-opacity']
    };

    var alignments = {
        'left': 'lefty',
        'center': 'centered',
        'right': 'righty',
        'full': 'fully'
    };

    function getLayerPaintType(layer) {
        var layerType = map.getLayer(layer).type;
        return layerTypes[layerType];
    }

    function setLayerOpacity(layer) {
        var paintProps = getLayerPaintType(layer.layer);
        paintProps.forEach(function(prop) {
            var options = {};
            if (layer.duration) {
                var transitionProp = prop + "-transition";
                options = { "duration": layer.duration };
                map.setPaintProperty(layer.layer, transitionProp, options);
            }
            map.setPaintProperty(layer.layer, prop, layer.opacity, options);
        });
    }

    var storyContainer = document.getElementById(storyId);
    var features = document.createElement('div');
    features.setAttribute('id', 'features');

    config.chapters[0].forEach((record, idx) => {
        const container = document.createElement('div');
        const chapter = document.createElement('div');

        if (record.title) {
            const title = document.createElement('h3');
            title.innerText = record.title;
            chapter.appendChild(title);
        }

        if (record.image) {
            const image = new Image();
            image.src = record.image;
            chapter.appendChild(image);
        }

        if (record.description) {
            const story = document.createElement('p');
            story.innerHTML = record.description;
            story.classList.add('story-paragraph');
            chapter.appendChild(story);
        }

        container.setAttribute('id', record.id);
        container.classList.add('mapstep');
        if (idx === 0) {
            container.classList.add('active');
        }

        chapter.classList.add(config.theme);
        container.appendChild(chapter);
        container.classList.add(alignments[record.alignment] || 'centered');
        if (record.hidden) {
            container.classList.add('hidden');
        }
        features.appendChild(container);
    });

    storyContainer.appendChild(features);

    mapboxgl.accessToken = config.accessToken;

    const transformRequest = (url) => {
        const hasQuery = url.indexOf("?") !== -1;
        const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
        return {
            url: url + suffix
        };
    };

    console.log('Initializing map with projection:', config.projection);

    var map = new mapboxgl.Map({
        container: mapId,
        style: config.style[0],
        center: config.chapters[0][0].location.center,
        zoom: config.chapters[0][0].location.zoom,
        bearing: config.chapters[0][0].location.bearing,
        pitch: config.chapters[0][0].location.pitch,
        interactive: true,
        scrollZoom: true,
        transformRequest: transformRequest,
        projection: config.projection // Set the projection here
    });

    console.log('Map initialized:', map);

    var marker = new mapboxgl.Marker();
    if (config.showMarkers) {
        marker.setLngLat(config.chapters[0][0].location.center).addTo(map);
    }

    var mapScoller = scrollama();

    map.on("load", function() {
        if (config.use3dTerrain) {
            map.addSource('mapbox-dem', {
                'type': 'raster-dem',
                'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
                'tileSize': 512,
                'maxzoom': 14
            });

            map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

            map.addLayer({
                'id': 'sky',
                'type': 'sky',
                'paint': {
                    'sky-type': 'atmosphere',
                    'sky-atmosphere-sun': [0.0, 0.0],
                    'sky-atmosphere-sun-intensity': 15
                }
            });
        }

        mapScoller
            .setup({
                step: '.mapstep',
                offset: 0.9,
                progress: true
            })
            .onStepEnter(async response => {
                const current_chapter = config.chapters[0].findIndex(chap => chap.id === response.element.id);
                const chapter = config.chapters[0][current_chapter];

                // if mobile, adjust map zoom
                // chapter.location.zoom = window.innerWidth < 960 ? chapter.location.zoom - 1.5 : chapter.location.zoom;

                response.element.classList.add('active');
                map[chapter.mapAnimation || 'flyTo'](chapter.location);

                if (config.showMarkers) {
                    marker.setLngLat(chapter.location.center);
                }
                if (chapter.onChapterEnter && chapter.onChapterEnter.length > 0) {
                    chapter.onChapterEnter.forEach(setLayerOpacity);
                }
                if (chapter.callback) {
                    window[chapter.callback]();
                }
                if (chapter.rotateAnimation) {
                    map.once('moveend', () => {
                        const rotateNumber = map.getBearing();
                        map.rotateTo(rotateNumber + 180, {
                            duration: 30000,
                            easing: function(t) {
                                return t;
                            }
                        });
                    });
                }
                if (config.auto) {
                    document.querySelectorAll('[data-scrollama-index="0"]')[0].scrollIntoView();
                }
            })
            .onStepExit(response => {
                const chapter = config.chapters[0].find(chap => chap.id === response.element.id);
                response.element.classList.remove('active');
                if (chapter && chapter.onChapterExit && chapter.onChapterExit.length > 0) {
                    chapter.onChapterExit.forEach(setLayerOpacity);
                }
            });
    });

    // function updateMapZoom() {
    //     const mq = window.matchMedia("(min-width: 576px)");
    //     if (mq.matches) {
    //         map.setZoom(5.4);
    //     } else {
    //         map.setZoom(0);
    //     }
    // }

    // // Set initial zoom level
    // updateMapZoom();

    // // Update zoom level on window resize
    // window.addEventListener('resize', updateMapZoom);

    window.addEventListener('resize', () => mapScoller.resize());
}

// Initialize the maps
mapInit('map-1', 'story-1', config1);
mapInit('map-2', 'story-2', config2);
