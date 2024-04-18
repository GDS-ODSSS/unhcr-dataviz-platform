//set svg parameters
const width = 450,
      height = 320;
const svg = d3.select("#cari-map")
   .append("svg")
     .attr("width", "100%")
     .attr("height", "100%")
     .attr("viewBox","0 0  450 320")
     .attr("preserveAspectRatio","xMinYMin");

// set map scale, location on screen and its projection
const projection = d3.geoRobinson()
        .scale(85)
        .center([0, 0])
        .translate([width/2.2, height/1.8]);

// path generator
const path = d3.geoPath()
        .projection(projection);

// set color scale
const color = d3.scaleOrdinal()
        .domain(["No data",0,25,50,75,100])
        .range(["#CCCCCC", "#E0E9FE","#B8C9EE", "#8395B9", "#506489", "#18375F"])
        .unknown("#CCCCCC");

//declare polygon and polyline
const poly = svg.append("g");
const line = svg.append("g");

// declare URL
const dataURL = "cari_map.csv";
const polygonsURL = "world_polygons_simplified.json";
const polylinesURL = "world_lines_simplified.json";

// load data
const promises = [
  d3.json(polygonsURL),
  d3.csv(dataURL)
];

Promise.all(promises).then(ready)
function ready([topology, cariScore]) {

  // prepare pop data to join shapefile
  const data = {};
  cariScore.forEach(function(d){
    data[d.iso3] = +d.cari2scaled
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
    .data(topojson.feature(topology, topology.objects.world_polygons_simplified).features)
    .join("path")
      .attr("fill", function(d) { return color(d.cari2scaled = data[d.properties.color_code])})
      .attr("d", path)
      .attr("class", function(d){ return "countries" })
    .on("mouseover", mouseover)
    .on("mouseleave", mouseleave)
    .append("title")
      .text(function(d) { return `${d.properties.gis_name} \nCARI score: ${d3.format(",")(d.cari2scaled)}`
  }
)};

//load and draw lines
d3.json(polylinesURL).then(function(topology) {
line
  .selectAll("path")
     .data(topojson.feature(topology, topology.objects.world_lines_simplified).features)
     .enter()
     .append("path")
     .attr("d", path)
     .style("fill","none")
     .attr("class", function(d) {return d.properties.type;})
});


// set legend
svg.append("g")
  .attr("class", "legendOrdinal")
  .attr("transform", "translate(0,8)");

var legendOrdinal = d3.legendColor()
  .title("Simplified CARI")
  .shape("rect")
  .shapePadding(0)
  .shapeWidth(40)
  .shapeHeight(5)
  .orient("horizontal")
  .labelAlign("start")
  .labels(["No data", "Least restrictive", "","","","Most restrictive" ])
  .labelOffset(1)
  .scale(color);

svg.select(".legendOrdinal")
    .call(legendOrdinal);
