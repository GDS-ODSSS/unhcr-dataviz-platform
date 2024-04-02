// using d3 for convenience
var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var step = article.selectAll(".step");

// initialize the scrollama
var scroller = scrollama();

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
	scroller.resize();
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
            toggleAxesOpacity(true, true, 1)
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
                stepTwo()
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
        case 5:
            stepSix()
            if(currentDirection === 'up'){
            }else{
                toggleAxesOpacity(true, true, 1)
            }
            break;
        case 6:
			stepSeven()
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
    
    scroller
      .setup({
      	step: "#scrolly article .step",
      	offset: 0.5,
      	debug: false
      })
      .onStepEnter(handleStepEnter);

    // setup resize event
    window.addEventListener("resize", handleResize);
}

// kick things off
init();
