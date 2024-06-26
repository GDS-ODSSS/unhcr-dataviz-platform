// set svg parameters
const width = 450,
      height = 350;
const svg = d3.select("#africa-map")
   .append("svg")
     .attr("width", "100%")
     .attr("height", "100%")
     .attr("viewBox", "0 0 450 350")
     .attr("preserveAspectRatio", "xMinYMin");

// set map scale, location on screen, and its projection
const projection = d3.geoMercator()
    .scale(200)
    .center([0, 0])
    .translate([width/2.5, height/1.8]);

// path generator
const path = d3.geoPath()
        .projection(projection);

// set color scale
const colorScale = d3.scaleOrdinal()
        .domain([1, 0])
        .range(["#0072BC", "#8EBEFF"])
        .unknown("#8EBEFF");

// declare polygon and polyline
const poly = svg.append("g");
const line = svg.append("g");

// declare URL
const dataURL = "oau_convention.csv";
const polygonsURL = "afr_poly.topojson";
const polylinesURL = "afr_line.topojson";

// load data
const promises = [
  d3.json(polygonsURL),
  d3.csv(dataURL)
];

Promise.all(promises).then(ready);

function ready([topology, convention]) {

  // prepare data to join shapefile
  const data = {};
  convention.forEach(function(d) {
    data[d.iso] = {
        status: +d.status,  // assuming status is either 1 or 0
        year: d.year,
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

  // load and draw polygons
  poly
    .selectAll("path")
    .data(topojson.feature(topology, topology.objects.afr_poly).features)
    .join("path")
    .attr("fill", function(d) {
        if (data[d.properties.iso3cd]) {
            return colorScale(data[d.properties.iso3cd].status);
        } else {
            return "#8EBEFF";
        }
    })
    .attr("d", path)
    .attr("class", "countries")
    .on("mouseover", mouseover)
    .on("mouseleave", mouseleave)
    .append("title")
      .text(d => `${d.properties.nam_en}`);
}

// load and draw lines
d3.json(polylinesURL).then(function(topology) {
  line
    .selectAll("path")
    .data(topojson.feature(topology, topology.objects.afr_line).features)
    .enter()
    .append("path")
    .attr("d", path)
    .style("fill", "none")
    .attr("class", d => d.properties.type );
});

// legend
const ordinal = d3.scaleOrdinal()
  .domain(["Ratified", "Signed"])
  .range(["#0072BC", "#8EBEFF"]);

svg.append("g")
  .attr("class", "legendOrdinal")
  .attr("transform", "translate(10,20)");

const legendOrdinal = d3.legendColor()
  .shape("path", d3.symbol().type(d3.symbolSquare).size(100)())
  .shapePadding(2)
  .labelOffset(3)
  .scale(ordinal);

svg.select(".legendOrdinal")
  .call(legendOrdinal);
