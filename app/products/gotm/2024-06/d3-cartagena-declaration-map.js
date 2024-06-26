// set svg parameters
const width1 = 450,
      height1 = 350;
const svg1 = d3.select("#americas-map")
   .append("svg")
     .attr("width", "100%")
     .attr("height", "100%")
     .attr("viewBox", "0 0 450 350")
     .attr("preserveAspectRatio", "xMinYMin");

// set map scale, location on screen, and its projection
const projection1 = d3.geoRobinson()
    .scale(130)
    .center([-80, 4])
    .translate([width/2.5, height/1.8]);

// path generator
const path1 = d3.geoPath()
        .projection(projection1);

// set color scale
const colorScale1 = d3.scaleOrdinal()
        .domain([1])
        .range(["#0072BC"]);

// declare polygon and polyline
const poly1 = svg1.append("g");

// declare URL
const dataURL1 = "cartagena.csv";
const polygonsURL1 = "ame_poly.json";

// load data
const promises1 = [
  d3.json(polygonsURL1),
  d3.csv(dataURL1)
];

Promise.all(promises1).then(ready);

function ready([topology, convention]) {

  // prepare data to join shapefile
  const data = {};
  convention.forEach(function(d) {
    data[d.iso] = {
        status: +d.status,  // assuming status is either 1 or 0
    };
  });

  // set mouse events
  const mouseover = function(d) {
    d3.selectAll(".countries")
      .transition()
      .duration(100)
      .style("opacity", .3);
    d3.select(this)
      .transition()
      .duration(100)
      .style("opacity", 1);
  };

  const mouseleave = function(d) {
    d3.selectAll(".countries")
      .transition()
      .duration(100)
      .style("opacity", 1);
    d3.select(this)
      .transition()
      .duration(100)
      .style("opacity", 1);
  };
console.log(topology)
  // load and draw polygons
  poly1
    .selectAll("path")
    .data(topojson.feature(topology, topology.objects.ame_poly).features)
    .join("path")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", .3)
    .attr("fill", function(d) {
        if (data[d.properties.iso3cd]) {
            return colorScale(data[d.properties.iso3cd].status);
        } else {
            return "#CCCCCC";
        }
    })
    .attr("d", path1)
    .attr("class", "countries")
    .on("mouseover", mouseover)
    .on("mouseleave", mouseleave)
    .append("title")
      .text(d => `${d.properties.nam_en}`);
}