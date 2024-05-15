//set svg parameters
const map_width = 700,
      map_height = 500;
const map_svg = d3.select("#idp-ret-map")
   .append("svg")
   .attr("class", "idp-ret-map")
     .attr("width", "100%")
     .attr("height", "100%")
     .attr("viewBox","0 0  700 500")
     .attr("preserveAspectRatio","xMinYMin");

// set map scale, location on screen and its projection
const projection = d3.geoMercator()
    .scale(2200)
    .center([69, 31.5])
    .translate([map_width/2, map_width/2])

// path generator
const path = d3.geoPath()
        .projection(projection);

// set color scale
const map_color = d3.scaleThreshold()
        .domain([1000,10000,100000,1000000])
        .range(["#B8C9EE", "#8395B9", "#506489", "#18375F"]);

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
    d3.selectAll(".admin")
      .transition()
      .duration(100)
      .style("opacity", .3)
    d3.select(this)
      .transition()
      .duration(100)
      .style("opacity", 1)
  };
  const mouseleave = function(d) {
    d3.selectAll(".admin")
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
  .join("circle")
  .attr("cx", d => projection([d.lon, d.lat])[0])
  .attr("cy", d => projection([d.lon, d.lat])[1])
  .attr("r", d => size(d.idp_tot)) // Ensure `size` scale is defined
  .attr("fill", "rgba(239, 74, 96, 0.6)")
  .attr("stroke", "#EF4A60")
  .attr("stroke-width", 1)
  .attr("opacity", 0.7)
  .append("title")
  .text(d => `${d.adm1_en} \nNumber of IDPs: ${d3.format(",")(d.idp_tot)}`);
  

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
const xCircle = 550;
const xLabel = 580;
map_svg
  .selectAll("bubblelegend")
  .data(legendLabel)
  .join("circle")
    .attr("cx", xCircle)
    .attr("cy", d => map_height*0.80 - size(d))
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
    .attr('y1', d => map_height*0.8 - size(d)*2)
    .attr('y2', d => map_height*0.8 - size(d)*2)
    .attr('stroke', '#666666')
    .attr("stroke-width", 0.75);
map_svg
  .selectAll("bubblelegend")
  .data(legendLabel)
  .join("text")
    .attr("class", "bubble-legend-text")
    .attr('x', xLabel)
    .attr('y', d => map_height*0.8 - size(d)*2)
    .text(d => d3.format(",")(d))
    .attr('alignment-baseline', 'middle');
// set note
map_svg
  .append('text')
      .attr('class', 'bubble-legend-title')
      .attr('x', map_width*0.76)
      .attr('y', map_height*0.67)
      .attr('text-anchor', 'start')
      .style('font-size', 13)
  .text('Number of IDPs');

// // set legend
map_svg.append("g")
  .attr("class", "legendThreshold")
  .attr("transform", "translate(530,200)");

const legend = d3.legendColor()
.labelFormat(d3.format(",.0f"))
.labels(d3.legendHelpers.thresholdLabels)
.labelOffset(3)
.shapeHeight(20)
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
      .attr('y', map_height*0.96)
      .attr('text-anchor', 'start')
      .style('font-size', 12)
  .text('Source: UNHCR, IOM');


};
