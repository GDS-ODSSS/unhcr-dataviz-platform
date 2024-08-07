function mapInit(mapId, storyId, config) {
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

    function getLayerPaintType(mapInstance, layer) {
        var mapLayer = mapInstance.getLayer(layer);
        if (!mapLayer) return [];
        var layerType = mapLayer.type;
        return layerTypes[layerType] || [];
    }

    function setLayerOpacity(mapInstance, layer) {
        var paintProps = getLayerPaintType(mapInstance, layer.layer);
        paintProps.forEach(function(prop) {
            var options = {};
            if (layer.duration) {
                var transitionProp = prop + "-transition";
                options = { "duration": layer.duration };
                mapInstance.setPaintProperty(layer.layer, transitionProp, options);
            }
            mapInstance.setPaintProperty(layer.layer, prop, layer.opacity, options);
        });
    }

    var storyContainer = document.getElementById(storyId);
    var features = document.createElement('div');
    features.setAttribute('id', 'features');

    if (config.chapters && config.chapters[0]) {
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
                const story = document.createElement('div');
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
    }

    storyContainer.appendChild(features);

    mapboxgl.accessToken = config.accessToken;

    const transformRequest = (url) => {
        const hasQuery = url.indexOf("?") !== -1;
        const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
        return {
            url: url + suffix
        };
    };

    var mapInstance = new mapboxgl.Map({
        container: mapId,
        style: config.style[0],
        center: config.chapters[0][0].location.center,
        zoom: window.innerWidth < 960 ? config.chapters[0][0].location.mobileZoom : config.chapters[0][0].location.zoom,
        bearing: config.chapters[0][0].location.bearing,
        pitch: config.chapters[0][0].location.pitch,
        interactive: true,  // Enable map interactions
        scrollZoom: false,  // Disable scroll zoom
        transformRequest: transformRequest,
        projection: config.projection,
    });

    // Add zoom and rotation controls to the map.
    // mapInstance.addControl(new mapboxgl.NavigationControl());

    var marker = new mapboxgl.Marker();
    if (config.showMarkers) {
        marker.setLngLat(config.chapters[0][0].location.center).addTo(mapInstance);
    }

    var mapScroller = scrollama();

    mapInstance.on("load", function() {
        mapScroller
            .setup({
                step: `#${storyId} .mapstep`, // Ensure correct selector for steps within the specific storyId
                offset: 0.75,
                progress: true
            })
            .onStepEnter(async response => {
                const current_chapter = config.chapters[0].findIndex(chap => chap.id === response.element.id);
                const chapter = config.chapters[0][current_chapter];

                console.log(chapter)

                // Set zoom level based on device width
                chapter.location.zoom = window.innerWidth < 960 ? chapter.location.mobileZoom : chapter.location.zoom;
                
                console.log(chapter.location.zoom)

                response.element.classList.add('active');
                mapInstance[chapter.mapAnimation || 'flyTo'](chapter.location);

                if (config.showMarkers) {
                    marker.setLngLat(chapter.location.center);
                }
                if (chapter.onChapterEnter && chapter.onChapterEnter.length > 0) {
                    chapter.onChapterEnter.forEach(layer => setLayerOpacity(mapInstance, layer));
                }
                if (chapter.callback && typeof window[chapter.callback] === 'function') {
                    window[chapter.callback]();
                }
                if (chapter.rotateAnimation) {
                    mapInstance.once('moveend', () => {
                        const rotateNumber = mapInstance.getBearing();
                        mapInstance.rotateTo(rotateNumber + 180, {
                            duration: 30000,
                            easing: function(t) {
                                return t;
                            }
                        });
                    });
                }
                if (config.auto) {
                    document.querySelector(`#${storyId} [data-scrollama-index="0"]`).scrollIntoView();
                }
            })
            .onStepExit(response => {
                const chapter = config.chapters[0].find(chap => chap.id === response.element.id);
                response.element.classList.remove('active');
                if (chapter && chapter.onChapterExit && chapter.onChapterExit.length > 0) {
                    chapter.onChapterExit.forEach(layer => setLayerOpacity(mapInstance, layer));
                }
            });
    });

    window.addEventListener('resize', mapScroller.resize);
}


// Initialize the maps
mapInit('map-1', 'story-1', config1);
// mapInit('map-2', 'story-2', config2);  
