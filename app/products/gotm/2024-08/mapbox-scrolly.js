function mapInit(mapId, storyId, config) {
    const layerTypes = {
        'fill': ['fill-opacity'],
        'line': ['line-opacity'],
        'circle': ['circle-opacity', 'circle-stroke-opacity'],
        'symbol': ['icon-opacity', 'text-opacity'],
        'raster': ['raster-opacity'],
        'fill-extrusion': ['fill-extrusion-opacity'],
        'heatmap': ['heatmap-opacity']
    };

    const alignments = {
        'left': 'lefty',
        'center': 'centered',
        'right': 'righty',
        'full': 'fully'
    };

    function getLayerPaintType(mapInstance, layerId) {
        const mapLayer = mapInstance.getLayer(layerId);
        return mapLayer ? layerTypes[mapLayer.type] || [] : [];
    }

    function setLayerOpacity(mapInstance, layer) {
        const paintProps = getLayerPaintType(mapInstance, layer.layer);
        paintProps.forEach(prop => {
            const transitionProp = `${prop}-transition`;
            const options = layer.duration ? { duration: layer.duration } : {};
            mapInstance.setPaintProperty(layer.layer, transitionProp, options);
            mapInstance.setPaintProperty(layer.layer, prop, layer.opacity, options);
        });
    }

    function createChapterElement(record, idx) {
        const container = document.createElement('div');
        container.setAttribute('id', record.id);
        container.classList.add('mapstep', alignments[record.alignment] || 'centered');
        if (idx === 0) container.classList.add('active');
        if (record.hidden) container.classList.add('hidden');

        const chapter = document.createElement('div');
        chapter.classList.add(config.theme);

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

        container.appendChild(chapter);
        return container;
    }

    function setupScroller(mapInstance, mapScroller, marker) {
        const layers = mapInstance.getStyle().layers;
        const firstSymbolId = layers.find(layer => layer.type === 'symbol')?.id;


        function setupDashAnimation(dashConfig) {
            const cleanupFunctions = [];
    
            dashConfig.geojson.forEach((geojsonUrl, index) => {
                const sourceId = `line-source-${index}`;
                const backgroundId = `line-background-${index}`;
                const layerId = `line-dashed-${index}`;
    
                mapInstance.addSource(sourceId, {
                    type: 'geojson',
                    data: geojsonUrl
                });

                // mapInstance.addLayer({
                //     type: 'line',
                //     source: sourceId,
                //     id: backgroundId,
                //     paint: {
                //         'line-color': dashConfig.lineColor,
                //         'line-width': dashConfig.lineWidth,
                //         'line-opacity': 0.3
                //     }
                // },firstSymbolId);
    
                mapInstance.addLayer({
                    type: 'line',
                    source: sourceId,
                    id: layerId,
                    paint: {
                        'line-color': dashConfig.lineColor,
                        'line-width': dashConfig.lineWidth,
                        'line-dasharray': dashConfig.lineDasharray
                    }
                }, firstSymbolId);
    
                let dashStep = 0;
                let dashAnimating = true;
    
                function animateDashArray() {
                    const newStep = Math.floor((performance.now() / dashConfig.animationSpeed) % dashConfig.dashArraySequence.length);
                    if (newStep !== dashStep) {
                        mapInstance.setPaintProperty(layerId, 'line-dasharray', dashConfig.dashArraySequence[dashStep]);
                        dashStep = newStep;
                    }
                    if (dashAnimating) requestAnimationFrame(animateDashArray);
                }
    
                animateDashArray();
    
                cleanupFunctions.push(() => {
                    dashAnimating = false;
                    mapInstance.removeLayer(layerId);
                    mapInstance.removeSource(sourceId);
                });
            });
    
            return () => {
                cleanupFunctions.forEach(cleanup => cleanup());
            };
        }


        function setupPointAnimation(pointConfig) {
            const cleanupFunctions = [];
            const colors = pointConfig.lineColor || ['#000000'];
            const icons = pointConfig.iconImage || ['circle'];
            const animationSpeed = pointConfig.animationSpeed || 2500; // Speed in milliseconds
        
            const points = [];
        
            const loadAndAnimatePoints = (geojsonUrl, index) => {
                return fetch(geojsonUrl)
                    .then(response => {
                        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                        return response.json();
                    })
                    .then(data => {
                        if (!data.features || data.features.length === 0) {
                            console.error('No features found in GeoJSON:', data);
                            return;
                        }
            
                        data.features.forEach((feature, idx) => {
                            const routeSourceId = `route${index}-${idx}`;
                            const pointSourceId = `point${index}-${idx}`;
                            const color = colors[index % colors.length];
                            const icon = icons[index % icons.length];
            
                            // Check if the route source already exists before adding
                            if (!mapInstance.getSource(routeSourceId)) {
                                // Add route line source and layer
                                mapInstance.addSource(routeSourceId, { type: 'geojson', data: feature });
                                mapInstance.addLayer({
                                    id: routeSourceId,
                                    source: routeSourceId,
                                    type: 'line',
                                    paint: {
                                        'line-width': pointConfig.lineWidth || 2,
                                        'line-color': color
                                    }
                                }, firstSymbolId);
                            } else {
                                // console.warn(`Source with ID "${routeSourceId}" already exists. Skipping addition.`);
                            }
            
                            // Initialize point at the first coordinate of the route
                            const coordinates = feature.geometry.coordinates;
                            if (!coordinates || coordinates.length === 0) {
                                // console.error(`Feature has no coordinates:`, feature);
                                return;
                            }
            
                            const pointFeature = {
                                type: 'FeatureCollection',
                                features: [{
                                    type: 'Feature',
                                    properties: { bearing: 0 },
                                    geometry: { type: 'Point', coordinates: coordinates[0] }
                                }]
                            };
            
                            points.push(pointFeature);
            
                            // Check if the point source already exists before adding
                            if (!mapInstance.getSource(pointSourceId)) {
                                // Add point source and layer
                                // console.log(`Adding point source: ${pointSourceId}`);
                                mapInstance.addSource(pointSourceId, { type: 'geojson', data: pointFeature });
                                mapInstance.addLayer({
                                    id: pointSourceId,
                                    source: pointSourceId,
                                    type: 'symbol',
                                    layout: {
                                        'icon-image': icon,
                                        'icon-size': pointConfig.iconSize || 1,
                                        'icon-rotate': ['get', 'bearing'],
                                        'icon-rotation-alignment': 'map',
                                        'icon-allow-overlap': true,
                                        'icon-ignore-placement': true
                                    }
                                }, firstSymbolId);
                            } else {
                                // console.warn(`Point source with ID "${pointSourceId}" already exists. Skipping addition.`);
                            }
            
                            // Animate the point along the route and extend the line dynamically
                            const route = feature.geometry.coordinates;
                            let counter = 0;
            
                            // Initialize an empty line feature for dynamic extension
                            const animatedLine = {
                                type: 'FeatureCollection',
                                features: [{
                                    type: 'Feature',
                                    geometry: { type: 'LineString', coordinates: [route[0]] }
                                }]
                            };
            
                            const routeSource = mapInstance.getSource(routeSourceId);
                            if (routeSource) {
                                routeSource.setData(animatedLine);
                            } else {
                                console.error('Route source not found:', routeSourceId);
                                return;
                            }
            
                            const segmentDuration = animationSpeed / (route.length - 1); // Duration for each segment
            
                            function animatePoint() {
                                if (counter >= route.length - 1) {
                                    return; // Stop animation if end of route
                                }
            
                                const start = route[counter];
                                const end = route[counter + 1];
                                if (!start || !end) {
                                    console.error(`Invalid coordinates at counter ${counter}:`, { start, end });
                                    return; // Ensure valid coordinates
                                }
            
                                const startTime = performance.now(); // Start time of the animation for this segment
            
                                function animateSegment(time) {
                                    const elapsed = time - startTime;
                                    const progress = Math.min(elapsed / segmentDuration, 1);
            
                                    const lng = start[0] + (end[0] - start[0]) * progress;
                                    const lat = start[1] + (end[1] - start[1]) * progress;
            
                                    pointFeature.features[0].geometry.coordinates = [lng, lat];
                                    pointFeature.features[0].properties.bearing = turf.bearing(turf.point(start), turf.point(end));
            
                                    // Update the point's position
                                    const pointSource = mapInstance.getSource(pointSourceId);
                                    if (pointSource) {
                                        pointSource.setData(pointFeature);
                                    } else {
                                        // console.error('Point source not found:', pointSourceId);
                                        return; // Early exit if source is not found
                                    }
            
                                    // Extend the animated line with the new point
                                    animatedLine.features[0].geometry.coordinates.push([lng, lat]);
                                    if (routeSource) {
                                        routeSource.setData(animatedLine);
                                    }
            
                                    if (progress < 1) {
                                        requestAnimationFrame(animateSegment);
                                    } else {
                                        counter += 1;
                                        if (counter < route.length - 1) {
                                            animatePoint(); // Continue to next segment
                                        }
                                    }
                                }
            
                                requestAnimationFrame(animateSegment);
                            }
            
                            animatePoint();
            
                            // Cleanup function to remove sources and layers
                            cleanupFunctions.push(() => {
                                // console.log(`Removing sources and layers for: ${pointSourceId}`);
                                mapInstance.removeLayer(routeSourceId);
                                mapInstance.removeSource(routeSourceId);
                                mapInstance.removeLayer(pointSourceId);
                                mapInstance.removeSource(pointSourceId);
                            });
                        });
                    })
                    .catch(error => console.error('Error loading GeoJSON:', error));
            };
            
        
            // Load and animate points for each geojson
            return Promise.all(pointConfig.geojson.map(loadAndAnimatePoints)).then(() => {
                return () => {
                    cleanupFunctions.forEach(cleanup => cleanup());
                };
            });
        }
        
        let currentDashAnimation = null;
        let currentPointAnimation = null;
        let hasScrolled = false; // Track if the user has scrolled
    
        // Listen for scroll events to set hasScrolled to true
        window.addEventListener('scroll', () => {
            hasScrolled = true;
        });
    
        mapScroller.setup({
            step: `#${storyId} .mapstep`,
            offset: 0.75,
            progress: true
        })
        .onStepEnter(async ({ element }) => {
            const currentChapter = config.chapters[0].find(chap => chap.id === element.id);

            // Set zoom level based on device width
            currentChapter.location.zoom = window.innerWidth < 960 ? currentChapter.location.mobileZoom : currentChapter.location.zoom;
    
            // Prevent animations from starting on initial load before scrolling
            if (!hasScrolled) {
                return;
            }
    
            // Fly to the current chapter location
            mapInstance.flyTo(currentChapter.location);
    
            // Show marker if required
            if (config.showMarkers) {
                marker.setLngLat(currentChapter.location.center);
            }
    
            // Start dash animation only when this chapter is active
            if (currentChapter.triggerDashAnimation && currentChapter.dashAnimationConfig) {
                if (currentDashAnimation) {
                    currentDashAnimation();  // Cleanup previous animation if any
                }
                currentDashAnimation = setupDashAnimation(currentChapter.dashAnimationConfig);
            }
    
            // Start point animation only when this chapter is active
            if (currentChapter.triggerPointAnimation && currentChapter.pointAnimationConfig) {
                if (currentPointAnimation) {
                    currentPointAnimation();  // Cleanup previous animation if any
                }
                currentPointAnimation = await setupPointAnimation(currentChapter.pointAnimationConfig);
            }
    
            // Handle onChapterEnter events for opacity changes
            if (currentChapter.onChapterEnter) {
                currentChapter.onChapterEnter.forEach(layer => setLayerOpacity(mapInstance, layer));
            }
    
            // Custom callback function
            if (currentChapter.callback && typeof window[currentChapter.callback] === 'function') {
                window[currentChapter.callback]();
            }
    
            element.classList.add('active');
        })
        .onStepExit(({ element }) => {
            const currentChapter = config.chapters[0].find(chap => chap.id === element.id);
    
            // Cleanup dash and point animations when leaving the chapter
            if (currentDashAnimation) {
                currentDashAnimation();
                currentDashAnimation = null;
            }
    
            if (currentPointAnimation) {
                currentPointAnimation();
                currentPointAnimation = null;
            }
    
            // Handle onChapterExit events for opacity changes
            if (currentChapter.onChapterExit) {
                currentChapter.onChapterExit.forEach(layer => setLayerOpacity(mapInstance, layer));
            }
    
            element.classList.remove('active');
        });
    }

    // Initial setup
    const storyContainer = document.getElementById(storyId);
    const features = document.createElement('div');
    features.setAttribute('id', 'features');

    config.chapters[0].forEach((record, idx) => {
        features.appendChild(createChapterElement(record, idx));
    });

    storyContainer.appendChild(features);

    mapboxgl.accessToken = config.accessToken;

    const mapInstance = new mapboxgl.Map({
        container: mapId,
        style: config.style[0],
        center: config.chapters[0][0].location.center,
        zoom: window.innerWidth < 960 ? config.chapters[0][0].location.mobileZoom : config.chapters[0][0].location.zoom,
        bearing: config.chapters[0][0].location.bearing,
        pitch: config.chapters[0][0].location.pitch,
        interactive: true,
        scrollZoom: false,
        transformRequest: (url) => ({
            url: url + (url.includes("?") ? "&" : "?") + "pluginName=scrollytellingV2"
        }),
        projection: config.projection,
    });


    const marker = config.showMarkers ? new mapboxgl.Marker().setLngLat(config.chapters[0][0].location.center).addTo(mapInstance) : null;

    const mapScroller = scrollama();

    mapInstance.on("load", () => {
        setupScroller(mapInstance, mapScroller, marker);
    });

    window.addEventListener('resize', mapScroller.resize);
}


// Initialize the map
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('map-1') && document.getElementById('story-1')) {
        mapInit('map-1', 'story-1', config1);
    }
    if (document.getElementById('map-2') && document.getElementById('story-2')) {
        mapInit('map-2', 'story-2', config2);
    }
});



