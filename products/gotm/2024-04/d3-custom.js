// set the dimensions and margins of the graph
const margin = {top: 100, right: 20, bottom: 40, left: 40};
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#cari-regionl-line")
  .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", "0 0 800 600")
    .attr("preserveAspectRatio", "xMinYMin")
  .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

var lineData;
var xScale, yScale;
var xAxis, yAxis;

d3.csv("cari_region_americas_centralmed_long.csv", function(d){
  const parseTime = d3.timeParse("%d-%m-%Y");
  return {
     date: parseTime(d.date_of_update),
      region: d.region,
      cari: +d.cari
  };
}).then(function(data){
  //pivot the data
  const dataGrouped = d3.group(data, d => d.region)

  lineData = data;

  // X scale and Axis
  xScale = d3.scaleTime()
  .domain(d3.extent(data, d => d.date)).nice()
  .range([0, width]); 
  xAxis = svg
  .append('g')
  .style("font-size",16)
  .attr("class", "Xaxis")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(xScale).tickSize(0).tickPadding(8))

  // Y scale and Axis
  yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);
  yAxis = svg
  .append('g')
  .style("font-size",16)
  .attr("class", "Yaxis")
  .call(d3.axisLeft(yScale).ticks(6).tickSize(0).tickPadding(4))
  .call(d => d.select(".domain").remove());

  // set horizontal grid line
  const GridLine = () => d3.axisLeft().scale(yScale);
  svg
    .append("g")
      .attr("class", "grid")
    .call(GridLine()
      .tickSize(-width,0,0)
      .tickFormat("")
      .ticks(6)
  );

  // color palette
  const color = d3.scaleOrdinal()
  .range(["#333333"])


  // create line
  const line = svg
  .selectAll("lines")
  .data(dataGrouped)
  .join("path")
    .attr("class", d => "line_" + d[0])
    .attr("fill", "none")
    .attr("stroke", d => color(d[0]))
    .attr("stroke-width", 2)
    .attr("d", function(d){
      return d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.cari))
        (d[1])
    });

// Get the maximum length of all lines
const maxLength = d3.max(svg.selectAll("path").nodes(), function(d) {
  return d.getTotalLength();
});

// Set up stroke-dasharray and stroke-dashoffset
line.each(function() {
  const currentLine = d3.select(this);
  const totalLength = currentLine.node().getTotalLength();
  const speed = maxLength / totalLength;
  currentLine
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition()
    .delay(1000)
    .duration(1000 * speed)
    .ease(d3.easeLinear)
    .attr("stroke-dashoffset", 0);
});

  // set title
svg
.append("text")
  .attr("class", "chart-title-1")
  .attr("x", -(margin.left)*0.7)
  .attr("y", -(margin.top)/1.7)
  .attr("text-anchor", "start")
.text("Average CARI score by region from May 2020 to April 2022")

// set Y axis label
svg
.append("text")
  .attr("class", "chart-label")
  .attr("x", -(margin.left)*0.7)
  .attr("y", -(margin.top/7))
  .attr("text-anchor", "start")
.text("Average CARI score")


});

function stepOne() {
  xScale.domain(d3.extent(lineData, d => d.date)).nice();
  xAxis.call(d3.axisBottom(xScale).ticks(5).tickSize(0).tickPadding(8));
  yScale.domain([0, 100]).nice();
  yAxis.call(d3.axisLeft(yScale).ticks(6).tickSize(0).tickPadding(4))
  .call(d => d.select(".domain").remove());

  svg.selectAll(".line_south_america, .line_central_america, .line_northern_america, .line_eastern_africa, .line_northern_africa, .line_southern_europe, .line_western_africa, .line_western_asia, .line_western_europe")
  .transition()
  .duration(1000)
  .attr("stroke", "#333333")
  .attr("stroke-width", 2);

  svg.selectAll(".chart-title-2")
  .attr("opacity", 0)

  svg
.append("text")
  .attr("class", "chart-title-1")
  .attr("x", -(margin.left)*0.7)
  .attr("y", -(margin.top)/1.7)
  .attr("text-anchor", "start")
.text("Average CARI score by region from May 2020 to April 2022")

}

function stepTwo(){

  svg.selectAll(".line_northern_america") 
  .transition()
  .duration(1000)
  .attr("stroke-width", 3)
  .attr("stroke", "#0072BC");
svg.selectAll(".line_central_america") 
  .transition()
  .duration(1000)
  .attr("stroke-width", 3)
  .attr("stroke", "#00B398");
svg.selectAll(".line_south_america") 
  .transition()
  .duration(1000)
  .attr("stroke-width", 3)
  .attr("stroke", "#18375F");

svg.selectAll(".line_eastern_africa, .line_northern_africa, .line_southern_europe, .line_western_africa, .line_western_asia, .line_western_europe")
  .transition()
  .duration(1000)
  .attr("stroke", "#333333")
  .attr("stroke-width", 0);


  svg.selectAll(".chart-title-1")
  .attr("opacity", 0)


  svg
  .append("text")
    .attr("class", "chart-title-2")
    .attr("x", -(margin.left)*0.7)
    .attr("y", -(margin.top)/1.7)
    .attr("text-anchor", "start")
  .text("Average CARI score in Americas region from May 2020 to April 2022")
  
  
}

function stepThree(){
  svg.selectAll(".line_central_america") 
    .transition()
    .duration(1000)
    .attr("stroke", "#00B398")
    .attr("stroke-width", 4);
  svg.selectAll(".line_south_america") 
    .transition()
    .duration(1000)
    .attr("stroke", "#18375F")
    .attr("stroke-width", 4);
  svg.selectAll(".line_northern_america") 
    .transition()
    .duration(1000)
    .attr("stroke", "#CCCCCC")
    .attr("stroke-width", 2);
  
  
}

function stepFour(){
  svg.selectAll(".line_south_america") 
    .transition()
    .duration(1000)
    .attr("stroke", "#CCCCCC")
    .attr("stroke-width", 2);
  svg.selectAll(".line_northern_america") 
    .transition()
    .duration(1000)
    .attr("stroke", "#0072BC")
    .attr("stroke-width", 4);
  svg.selectAll(".line_central_america") 
    .transition()
    .duration(1000)
    .attr("stroke", "#00B398")
    .attr("stroke-width", 4);
  
    svg.selectAll(".chart-title-3")
    .attr("opacity", 0)
}

function stepFive(){
  svg.selectAll(".line_eastern_africa, .line_northern_africa, .line_southern_europe, .line_western_africa, .line_western_asia, .line_western_europe")
    .transition()
    .duration(1000)
    .attr("stroke", "#333333")
    .attr("stroke-width", 2);

    svg.selectAll(".line_northern_america") 
    .transition()
    .duration(1000)
    .attr("stroke-width", 0);
  svg.selectAll(".line_central_america") 
    .transition()
    .duration(1000)
    .attr("stroke-width", 0);
  svg.selectAll(".line_south_america") 
    .transition()
    .duration(1000)
    .attr("stroke-width", 0);
  
  svg.selectAll(".chart-title-2")
  .attr("opacity", 0)


  svg
  .append("text")
    .attr("class", "chart-title-3")
    .attr("x", -(margin.left)*0.7)
    .attr("y", -(margin.top)/1.7)
    .attr("text-anchor", "start")
  .text("Average CARI score in Mediterranean region from May 2020 to April 2022")


}

function stepSix(){
  svg.selectAll(".line_eastern_africa") 
    .transition()
    .duration(1000)
    .attr("stroke", "#0072BC")
    .attr("stroke-width", 4);
  svg.selectAll(".line_northern_africa") 
    .transition()
    .duration(1000)
    .attr("stroke", "#00B398")
    .attr("stroke-width", 4);
  svg.selectAll(".line_western_africa") 
    .transition()
    .duration(1000)
    .attr("stroke", "#18375F")
    .attr("stroke-width", 4);
  svg.selectAll(".line_western_asia") 
    .transition()
    .duration(1000)
    .attr("stroke", "#EF4A60")
    .attr("stroke-width", 4);
  svg.selectAll(".line_southern_europe, .line_western_europe") 
    .transition()
    .duration(1000)
    .attr("stroke", "#CCCCCC")
    .attr("stroke-width", 2);


}

function stepSeven(){
  svg.selectAll(".line_southern_europe") 
    .transition()
    .duration(1000)
    .attr("stroke", "#BB9D21")
    .attr("stroke-width", 4);
  svg.selectAll(".line_western_europe") 
    .transition()
    .duration(1000)
    .attr("stroke", "#506489")
    .attr("stroke-width", 4);
  svg.selectAll(".line_eastern_africa, .line_northern_africa, .line_western_africa, .line_western_asia, .line_western_asia") 
    .transition()
    .duration(1000)
    .attr("stroke", "#CCCCCC")
    .attr("stroke-width", 2);
}

function toggleAxesOpacity(toggleX, toggleY, opacity){
  if(toggleX){
    xAxis
      .transition()
      .duration(1000)
          .style("opacity", opacity)
  }
  if(toggleY){
    yAxis
      .transition()
      .duration(1000)
          .style("opacity", opacity)
  }
}


 
