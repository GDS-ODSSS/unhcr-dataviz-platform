//set svg parameters
const width = 450,
      height = 350;
const svg = d3.select("#africa-map")
   .append("svg")
     .attr("width", "100%")
     .attr("height", "100%")
     .attr("viewBox","0 0  450 350")
     .attr("preserveAspectRatio","xMinYMin");

// set map scale, location on screen and its projection
const projection = d3.geoMercator()
        .scale(200)
        .center([0, 0])
        .translate([width/2.5, height/1.8]);

// path generator
const path = d3.geoPath()
        .projection(projection);

// set color scale
const colorScale = d3.scaleOrdinal()
        .domain([0,1])
        .range(["#00B398", "#0072BC"])
        .unknown("#E6E6E6");

//declare polygon and polyline
const poly = svg.append("g");
const line = svg.append("g");

// declare URL
const dataURL = "signed_ratified_afr.csv";
const polygonsURL = "afr_poly.json";
const polylinesURL = "afr_line.json";

// load data
const promises = [
  d3.json(polygonsURL),
  d3.csv(dataURL)
];

Promise.all(promises).then(ready)
function ready([topology, convention]) {

  // prepare data to join shapefile
  const data = {};
  convention.forEach(function(d){
    data[d.iso] = {
        color: +d.color,
        year_signature: d.year_signature,
        year_ratification: d.year_ratification
    };
});

  // set mouse events
  const mouseover = function(d) {
    d3.selectAll(".countries")
      .transition()
      .duration(100)
      .style("opacity", .3)
    d3.select(this)
      .transition()
      .duration(100)
      .style("opacity", 1)
  };
  const mouseleave = function(d) {
    d3.selectAll(".countries")
      .transition()
      .duration(100)
      .style("opacity", 1)
    d3.select(this)
      .transition()
      .duration(100)
      .style("opacity", 1)
  };

  // load and draw polygons
  poly
    .selectAll("path")
    .data(topojson.feature(topology, topology.objects.afr_poly).features)
    .join("path")
    .attr("fill", function(d) {
        if (data[d.properties.iso3cd]) {
            return colorScale(d.newcolor = data[d.properties.iso3cd].color);
        } else {
            return "#CCCCCC";
        }
    })
      .attr("d", path)
      .attr("class", function(d){ return "countries" })
    .on("mouseover", mouseover)
    .on("mouseleave", mouseleave)
    .append("title")
      .text(function(d) {
          if (data[d.properties.iso3cd]) {
              return `${d.properties.nam_en} \nYear of Signature: ${data[d.properties.iso3cd].year_signature} \nYear of Ratification: ${data[d.properties.iso3cd].year_ratification}`;
          } else {
              return `${d.properties.nam_en} \nYear of Signature: N/A \nYear of Ratification: N/A`;
          }
      });
    };

//load and draw lines
d3.json(polylinesURL).then(function(topology) {

line
  .selectAll("path")
     .data(topojson.feature(topology, topology.objects.afr_line).features)
     .enter()
     .append("path")
     .attr("d", path)
     .style("fill","none")
     .attr("class", function(d) {return d.properties.type;})

});

//legend
var ordinal = d3.scaleOrdinal()
  .domain(["AU Member States with ratification", "AU Member States with signature"])
  .range([ "#0072BC", "#00B398"]);

d3.select("svg");

svg.append("g")
  .attr("class", "legendOrdinal")
  .attr("transform", "translate(10,20)");

var legendOrdinal = d3.legendColor()
  .shape("path", d3.symbol().type(d3.symbolSquare).size(100)())
  .shapePadding(2)
  .labelOffset(3)
  .cellFilter(function(d){ return d.label !== "e" })
  .scale(ordinal);

svg.select(".legendOrdinal")
  .call(legendOrdinal);
