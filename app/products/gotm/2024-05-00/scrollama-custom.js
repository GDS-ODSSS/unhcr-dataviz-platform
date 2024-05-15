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
    if (window.matchMedia("(max-width: 992px)").matches) {
        scrollyContainer.classList.add("overlay");
        scrollyContainer.classList.remove("side-by-side");
      } else {
        scrollyContainer.classList.add("side-by-side");
        scrollyContainer.classList.remove("overlay");
      }

	// update height of step elements
	var stepH = Math.floor(window.innerHeight * 0.75);
	step.style("height", stepH + "px");

	var figureHeight = window.innerHeight/2;
	var figureMarginTop = (window.innerHeight - figureHeight) / 2;
	figure
		.style("height", figureHeight + "px")
		.style("top", figureMarginTop + "px");

	// tell scrollama to update new element dimensions
	chartScroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
	console.log(response);
	

	// response = { element, direction, index }
	let currentIndex = response.index;
    let currentDirection = response.direction;

	// add color to current step only
	step.classed("is-active", function (d, i) {
		return i === currentIndex;
	});

	// update graphic based on step
    switch(currentIndex){
        case 0:
            if(currentDirection === 'up'){
            toggleAxesOpacity(true, true, 0)
            stepOne()
            }
            break;
        case 1:
            stepTwo()
            if(currentDirection === 'up'){
            }else{
                toggleAxesOpacity(true, true, 1)
            }
            break;
        case 2:
            stepThree()
            if(currentDirection === 'up'){
            }else{
                toggleAxesOpacity(true, true, 1)
            }
            break;
        case 3:
            stepFour();
            
            if(currentDirection === 'up'){
                stepFour()
            }
            else{
                toggleAxesOpacity(true, true, 1)
            }
            break;
        case 4:
            stepFive()
            if(currentDirection === 'up'){
                toggleAxesOpacity(true, true, 1)
            }
            else{
                toggleAxesOpacity(true, true, 1)
            }
            break;
        default:
            break;
    }

}

function init() {
    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize()
    
    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    
    chartScroller
      .setup({
      	step: "#scrolly article .chartStep",
      	offset: 0.5,
      	debug: false
      })
      .onStepEnter(handleStepEnter);

    // setup resize event
    window.addEventListener("resize", handleResize);
}

// kick things off
init();



// instantiate the scrollama
var mapScoller = scrollama();

    
    
map.on("load", function() {

     // setup the instance, pass callback functions
     mapScoller
     .setup({
         step: '.chartStep',
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
 window.addEventListener('resize', mapScoller.resize);