//set svg parameters
const width = 450,
      height = 280;
const svg = d3.select("#pdm-map")
   .append("svg")
     .attr("class", "pdm-map")
     .attr("width", "100%")
     .attr("height", "100%")
     .attr("viewBox","0 0  450 280")
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
const colorScale = d3.scaleOrdinal()
        .domain([1])
        .range([ "#0072BC", "#E6E6E6"])

//declare polygon and polyline
const poly = svg.append("g");
const line = svg.append("g");

// declare URL
const dataURL = "pdm_map_data.csv";
const polygonsURL = "world_polygons_simplified.json";
const polylinesURL = "world_lines_simplified.json";

// load data
const promises = [
  d3.json(polygonsURL),
  d3.csv(dataURL)
];

Promise.all(promises).then(ready)
function ready([topology, pdmMap]) {

  // prepare pop data to join shapefile
  const data = {};
  pdmMap.forEach(function(d){
    data[d.iso3] = d.pdm
  });

  console.log(data)
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
      .attr("fill", function(d) { return colorScale(d.pdm = data[d.properties.color_code])})
      .attr("d", path)
      .attr("class", function(d){ return "countries" })
    .on("mouseover", mouseover)
    .on("mouseleave", mouseleave)
    .append("title")
      .text(function(d) { return `${d.properties.gis_name}`
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

//footnote
svg
  .append('text')
      .attr('class', 'chart-note')
      .attr('x', 0)
      .attr('y', height*0.95)
      .attr('text-anchor', 'start')
      .style('font-size', 8)
      .style('fill', '#666666')
  .text('Note: UNHCR has more than doubled its cash assistance since 2015. Fluctuations in assistance levels are explained');

  svg
  .append('text')
      .attr('class', 'chart-note')
      .attr('x', 0)
      .attr('y', height*0.99)
      .attr('text-anchor', 'start')
      .style('font-size', 8)
      .style('fill', '#666666')
  .text('by to changes in global funding and needs, and e.g. 2022 increase is largely ex-plained by the Ukraine situation.');


