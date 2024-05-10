//set svg parameters
const map_width = 700,
      map_height = 500;
const map_svg = d3.select("#idp-ret-map")
   .append("svg")
     .attr("width", "100%")
     .attr("height", "100%")
     .attr("viewBox","0 0  700 500")
     .attr("preserveAspectRatio","xMinYMin");

// set map scale, location on screen and its projection
const projection = d3.geoMercator()
    .scale(2000)
    .center([67, 34])
    .translate([width/2, height/2])

// path generator
const path = d3.geoPath()
        .projection(projection);

// set color scale
const map_color = d3.scaleThreshold()
        .domain([1000,10000,100000,1000000])
        .range(["#DCE9FF", "#8EBEFF", "#589BE5", "#0072BC"])
        .unknown("#E6E6E6");



//declare polygon and polyline
const poly = map_svg.append("g");
const bubble = map_svg.append("g");

// declare URL
const dataURL = "idp_vs_ret_adm1.csv";
const polygonsURL = "afg_poly_simplied.json";

// load data
const promises = [
  d3.json(polygonsURL),
  d3.csv(dataURL)
];

Promise.all(promises).then(ready)
function ready([topology, population]) {

  // prepare pop data to join shapefile
  // prepare data to join shapefile
  const data = {};
  population.forEach(function(d){
    data[d.adm1_pcode] = {
        lat: +d.lat,
        lon: +d.lon,
        idp: +d.idp_tot,
        ret: +d.ret_tot
    };
});

console.log(data)

console.log(topology)
console.log(population)

//set bubble scale
const valueScale = d3.extent(population, d => +d.idp_tot)
const size = d3.scaleSqrt()
  .domain(valueScale)
  .range([1, 20]);

  console.log(valueScale)
  console.log(size)

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

  bubble
 .selectAll("circle")
  .data(population)
  .enter()
  .append("circle")
  .attr("cx", d => projection([d.lon, d.lat])[0])
  .attr("cy", d => projection([d.lon, d.lat])[1])
  .attr("r", d => size(d.idp_tot)) // Ensure `size` scale is defined
  .attr("fill", "rgba(255, 0, 0, 0.5)")
  .attr("stroke", "red")
  .attr("stroke-width", 1)
  .attr("opacity", 0.7)
  .append("title")
  .text(d => `${d.adm1_en} \nNumber of IDPs: ${d.idp_tot}`);
  

  // load and draw polygons
  poly
    .selectAll("path")
    .data(topojson.feature(topology, topology.objects.afg_poly_simplied).features)
    .join("path")
      .attr("fill", function(d) { return map_color(d.ret = data[d.properties.ADM1_PCODE].ret)})
      .attr("d", path)
      .attr("class", "admin")
      .attr("stroke","#ffffff")
    .on("mouseover", mouseover)
    .on("mouseleave", mouseleave)
    .append("title")
      .text(d => `${d.properties.ADM1_EN} \nNumber of returnees: ${d3.format(",")(d.ret)}`);

 



// set bubble legend
const legendLabel = [10000,100000,400000];
const xCircle = 25;
const xLabel = 55;
map_svg
  .selectAll("bubblelegend")
  .data(legendLabel)
  .join("circle")
    .attr("cx", xCircle)
    .attr("cy", d => map_height*0.50 - size(d))
    .attr("r", d => size(d))
    .style("fill", "none")
    .attr("stroke", "#666666")
    .attr("stroke-width", 0.75);
map_svg
  .selectAll("bubblelegend")
  .data(legendLabel)
  .join("line")
    .attr('x1', xCircle)
    .attr('x2', xLabel)
    .attr('y1', d => map_height*0.5 - size(d)*2)
    .attr('y2', d => map_height*0.5 - size(d)*2)
    .attr('stroke', '#666666')
    .attr("stroke-width", 0.75);
map_svg
  .selectAll("bubblelegend")
  .data(legendLabel)
  .join("text")
    .attr('x', xLabel)
    .attr('y', d => map_height*0.5 - size(d)*2)
    .text(d => d3.format(",")(d))
    .style("font-size", 9)
    .style("fill", "#666666")
    .attr('alignment-baseline', 'middle');
// set note
map_svg
  .append('text')
      .attr('class', 'bubble-legend-title')
      .attr('x', map_width*0.01)
      .attr('y', map_height*0.38)
      .attr('text-anchor', 'start')
      .style('font-size', 10)
  .text('Number of IDPs');






// // set legend
map_svg.append("g")
  .attr("class", "legendThreshold")
  .attr("transform", "translate(5,60)");

const legend = d3.legendColor()
.labelFormat(d3.format(",.0f"))
.labels(d3.legendHelpers.thresholdLabels)
.labelOffset(3)
.title("Number of returnees")
  .titleWidth(200)
.shapePadding(0)
.scale(map_color);

map_svg.select(".legendThreshold")
    .call(legend);

// set note
map_svg
  .append('text')
      .attr('class', 'map-source')
      .attr('x', map_width*0.01)
      .attr('y', map_height*0.80)
      .attr('text-anchor', 'start')
      .style('font-size', 10)
  .text('Source: UNHCR');



};
