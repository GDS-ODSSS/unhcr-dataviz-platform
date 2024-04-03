const width = 700,
      height = 500;

// Map scale, location on screen and its projection
const projection = d3.geoMercator()
    .scale(2000)
    .center([67, 34])
    .translate([width/2, height/2])

// Path generator
const path = d3.geoPath()
    .projection(projection);

// SVG element
const svg = d3.select("#map-container")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox","0 0  700 500")
    .attr("preserveAspectRatio","xMinYMin");

// Array to store attribute data
const attributeArray = [];
let currentAttribute = 0;
let playing = false;
let totalReturnNumber = 0; 

// Initialize the map
function init() {
    setMap();
    animateMap();
}

// Set up the map
function setMap() {
    loadData();
}

// Load data using promises
function loadData() {
    const polygonsURL = "afg_poly_simplied.json";
    const adminDataURL = "volrep_cumul_2002_2022_wide.csv";

    Promise.all([
        d3.json(polygonsURL),
        d3.csv(adminDataURL)
    ]).then(processData).catch(error => console.log("Error loading data:", error));
}


// Function to calculate total refugee number for the current year
function getTotalNumber(year) {
    let totalNumber = 0;
    d3.selectAll('.admin').each(function(d) {
        const currentValue = d.properties[year];
        if (!isNaN(currentValue)) {
            totalNumber += currentValue;
        }
    });
    return totalNumber
}

function processData(data) {
    const afghanistan = data[0];
    const adminData = data[1];

    const country = afghanistan.objects.afg_poly_simplied.geometries;

    console.log(country)

    for (let i in country) {
        for (let j in adminData) {
            if (country[i].properties.ADM1_PCODE == adminData[j].adm1_pcode) {
                for (let k in adminData[j]) {
                    if (k != 'name' && k != 'adm1_pcode') {
                        if (attributeArray.indexOf(k) == -1) {
                            attributeArray.push(k);
                        }
                        country[i].properties[k] = Number(adminData[j][k]);
                    }
                }
                break;
            }
        }
    }
    drawMap(afghanistan);
    
    totalReturnNumber = getTotalNumber(attributeArray[currentAttribute]);
    d3.select('#clock-1').html(d3.format(",")(totalReturnNumber));
    d3.select('#clock-2').html(attributeArray[currentAttribute]);
}

// Draw polygon
function drawMap(afghanistan) {
    svg.selectAll(".admin")
        .data(topojson.feature(afghanistan, afghanistan.objects.afg_poly_simplied).features)
        .enter().append("path")
        .attr("class", "admin")
        .attr("d", path)
        .attr("stroke","#ffffff")
        .attr("fill", function(d) { 
            return getColor(d.properties[attributeArray[currentAttribute]]);
        })
        .append("title")
          .text(function(d) { return `${d.properties.ADM1_EN} \nNumber of returns: ${d3.format(",")(d.properties[attributeArray[currentAttribute]])}`}
      );
}


// Update map sequence
function sequenceMap() {
    svg.selectAll('.admin')
        .transition()
        .duration(100)
        .attr('fill', function(d) { // Update fill color during transition
            return getColor(d.properties[attributeArray[currentAttribute]]);
        })
        .select("title") // Select the title element
        .text(function(d) { // Update its text content
            return `${d.properties.ADM1_EN}\nNumber of returns: ${d3.format(",")(d.properties[attributeArray[currentAttribute]])}`;
        });;
}


// Get color based on value
const colorScale = d3.scaleThreshold()
.domain([100000, 500000, 1000000])
.range(["#8EBEFF", "#589BE5", "#0072BC", "#044F85"])
.unknown("#CCCCCC");

function getColor(valueIn) {
    if (valueIn === 0) {
      return colorScale.unknown();
    }
    return colorScale(valueIn);
  }

// Get data range
function getDataRange() {
    let min = Infinity,
        max = Infinity;

    d3.selectAll('.admin').each(function(d) {
        const currentValue = d.properties[attributeArray[currentAttribute]];
        if (currentValue < min) {
            min = currentValue;
        }
        if (currentValue > max) {
            max = currentValue;
        }
    });

    return [min, max];
}

function animateMap() {
    let timer;

    d3.select('#play').on('click', function() {
        if (playing == false) {
            timer = setInterval(function() {
                if (currentAttribute < attributeArray.length - 1) {
                    currentAttribute += 1;
                } else {
                    currentAttribute = 0;
                }
                sequenceMap();

                // Calculate the total refugee number for the current year
                totalReturnNumber = getTotalNumber(attributeArray[currentAttribute]);
                
                // Update the message
                d3.select('#clock-1').html(d3.format(",")(totalReturnNumber));
                d3.select('#clock-2').html(attributeArray[currentAttribute]);
            }, 1000);

            d3.select(this).html('stop');
            playing = true;
        } else {
            clearInterval(timer);
            d3.select(this).html('play');
            playing = false;
        }
    });
}


// set legend
svg.append("g")
  .attr("class", "legendThreshold")
  .attr("transform", "translate(5,50)");

const legend = d3.legendColor()
.labelFormat(d3.format(".1s"))
.shapeWidth(15)
.shapeHeight(18)
.labels(d3.legendHelpers.thresholdLabels)
.labelOffset(3)
.shapePadding(0)
.scale(colorScale);

svg.select(".legendThreshold")
    .call(legend);


window.onload = function() {
    init();
    // Start animation
    d3.select('#play').dispatch('click');
};