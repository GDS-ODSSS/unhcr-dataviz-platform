function mapInit(){
var initLoad = true;
    var layerTypes = {
        'fill': ['fill-opacity'],
        'line': ['line-opacity'],
        'circle': ['circle-opacity', 'circle-stroke-opacity'],
        'symbol': ['icon-opacity', 'text-opacity'],
        'raster': ['raster-opacity'],
        'fill-extrusion': ['fill-extrusion-opacity'],
        'heatmap': ['heatmap-opacity']
    }
    
    var alignments = {
        'left': 'lefty',
        'center': 'centered',
        'right': 'righty',
        'full': 'fully'
    }
    
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
    
    var story = document.getElementById('story');
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

    // Add a CSS class to the <p> element
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
    
    story.appendChild(features);

    
    mapboxgl.accessToken = config.accessToken;
    
    const transformRequest = (url) => {
        const hasQuery = url.indexOf("?") !== -1;
        const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
        return {
          url: url + suffix
        }
    }
    
    var map = new mapboxgl.Map({
        container: 'map',
        style: config.style[0],
        center: config.chapters[0][0].location.center,
        zoom: config.chapters[0][0].location.zoom,
        bearing: config.chapters[0][0].location.bearing,
        pitch: config.chapters[0][0].location.pitch,
        interactive: false,
        scrollZoom: false,
        transformRequest: transformRequest,
        projection: config.projection
    });


    var marker = new mapboxgl.Marker();
    if (config.showMarkers) {
        marker.setLngLat(config.chapters[0][0].location.center).addTo(map);
    }

    

    // instantiate the scrollama
    var mapScoller = scrollama();

    
    
   map.on("load", function() {
        if (config.use3dTerrain) {
            map.addSource('mapbox-dem', {
                'type': 'raster-dem',
                'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
                'tileSize': 512,
                'maxzoom': 14
            });
            // add the DEM source as a terrain layer with exaggerated height
            map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
    
            // add a sky layer that will show when the map is highly pitched
            map.addLayer({
                'id': 'sky',
                'type': 'sky',
                'paint': {
                    'sky-type': 'atmosphere',
                    'sky-atmosphere-sun': [0.0, 0.0],
                    'sky-atmosphere-sun-intensity': 15
                }
            });
        };
 
        // setup the instance, pass callback functions
        mapScoller
        .setup({
            step: '.mapstep',
            offset: 0.9,
            progress: true
        })
        .onStepEnter(async response => {
            const current_chapter = config.chapters[0].findIndex(chap => chap.id === response.element.id);
            const chapter = config.chapters[0][current_chapter];
            
            response.element.classList.add('active');
            map[chapter.mapAnimation || 'flyTo'](chapter.location);
    
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
            if (chapter.callback) {
                window[chapter.callback]();
            }
            if (chapter.rotateAnimation) {
                map.once('moveend', () => {
                    const rotateNumber = map.getBearing();
                    map.rotateTo(rotateNumber + 180, {
                        duration: 30000, easing: function (t) {
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
            const chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
        });

    })

    
    // setup resize event
    window.addEventListener('resize', () => mapScoller.resize());

};

mapInit()
