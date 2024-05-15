// using d3 for convenience
var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var step = article.selectAll(".chartStep");

// initialize the scrollama
var chartScroller = scrollama();

// generic window resize listener event
function handleResize() {
    var scrollyContainer = document.getElementById("scrolly");
    var isMobile = window.matchMedia("(max-width: 992px)").matches;
    
    scrollyContainer.classList.toggle("overlay", isMobile);
    scrollyContainer.classList.toggle("side-by-side", !isMobile);

    // update height of step elements
    var stepH = Math.floor(window.innerHeight * 0.75);
    step.style("height", stepH + "px");

    var figureHeight = window.innerHeight / 2;
    var figureMarginTop = (window.innerHeight - figureHeight) / 2;
    figure
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px");

    // tell scrollama to update new element dimensions
    chartScroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
    console.log(response.index); // Verify the index
    console.log(response.direction); // Verify the direction

    let currentIndex = response.index;
    let currentDirection = response.direction;

    // add color to current step only
    step.classed("is-active", function (d, i) {
        return i === currentIndex;
    });

    // update graphic based on step
    switch (currentIndex) {
        case 0:
            if (currentDirection === 'up') {
                toggleAxesOpacity(true, true, 0);
                stepOne();
            }
            break;
        case 1:
            stepTwo();
            if (currentDirection === 'up') {
            } else {
                toggleAxesOpacity(true, true, 1);
            }
            break;
        case 2:
            stepThree();
            if (currentDirection === 'up') {
            } else {
                toggleAxesOpacity(true, true, 1);
            }
            break;
        case 3:
            stepFour();

            if (currentDirection === 'up') {
                stepFour();
            } else {
                toggleAxesOpacity(true, true, 1);
            }
            break;
        case 4:
            stepFive();
            if (currentDirection === 'up') {
                toggleAxesOpacity(true, true, 1);
            } else {
                toggleAxesOpacity(true, true, 1);
            }
            break;
        default:
            break;
    }
}

function init() {
    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();

    // 2. setup the scroller passing options
    //    this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    chartScroller
    .setup({
        step: "#scrolly article .chartStep",
        offset: 0.5,
        debug: false
    })
    .onStepEnter(handleStepEnter);


    // console.log(response)

    


    

    // Create story elements dynamically
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
            chapter.appendChild(story);
        }

        container.setAttribute('id', record.id);
        container.classList.add('mapstep');
        if (idx === 0) {
            container.classList.add('active');
        }

        chapter.classList.add(config.theme);
        container.appendChild(chapter);
        container.classList.add(record.alignment || 'centered');
        if (record.hidden) {
            container.classList.add('hidden');
        }
        features.appendChild(container);
    });

    story.appendChild(features);

    // Initialize Mapbox map
    mapboxgl.accessToken = config.accessToken;

    const transformRequest = (url) => {
        const hasQuery = url.indexOf("?") !== -1;
        const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
        return {
            url: url + suffix
        };
    };

    var map = new mapboxgl.Map({
        container: 'map',
        style: config.style[0],
        center: config.chapters[0][0].location.center,
        zoom: config.chapters[0][0].location.zoom,
        bearing: config.chapters[0][0].location.bearing,
        pitch: config.chapters[0][0].location.pitch,
        interactive: false,
        scrollZoom: false,
        transformRequest: transformRequest
    });

    var marker = new mapboxgl.Marker();
    if (config.showMarkers) {
        marker.setLngLat(config.chapters[0][0].location.center).addTo(map);
    }

    // Initialize scrollama for map scrolling interactions
    var mapScroller = scrollama();
    map.on('load', function() {
        mapScroller.setup({
            step: '.mapstep',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(async response => {
            console.log('Step entered:', response.index);

            const currentChapter = config.chapters[0].findIndex(chap => chap.id === response.element.id);
            const chapter = config.chapters[0][currentChapter];

            // Trigger map actions based on chapter
            map[chapter.mapAnimation || 'flyTo'](chapter.location);

            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }

            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }

            if (chapter.rotateAnimation) {
                map.once('moveend', () => {
                    const rotateNumber = map.getBearing();
                    map.rotateTo(rotateNumber + 180, {
                        duration: 30000,
                        easing: function (t) {
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
            if (chapter) {
                response.element.classList.remove('active');
                if (chapter.onChapterExit.length > 0) {
                    chapter.onChapterExit.forEach(setLayerOpacity);
                }
            }
        });

        // Event listener for window resize
        window.addEventListener('resize', mapScroller.resize);
    });
    

}

// kick things off
init();
