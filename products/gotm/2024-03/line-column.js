// set the dimensions and margins of the graph
const margin = {top: 80, right: 20, bottom: 40, left: 30};
const width = 450 - margin.left - margin.right;
const height = 350 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#line_column_container")
  .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", "0 0 480 350")
    .attr("preserveAspectRatio", "xMinYMin")
  .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
    

// parse the Data
d3.csv("return_cumul.csv")
.then(function(data){

// X scale and Axis
const xScale = d3.scaleBand()
  .domain(data.map(d => d.year))
  .range([0, width])
  .padding(.2);

// Adjust the tick format to display only every other tick label
const xAxis = d3.axisBottom(xScale).tickFormat(function(d, i) {
    if (i % 2 === 0) {
      return d;
    } else {
      return "";
    }
});

// Render the x-axis
svg
  .append('g')
  .style("color", "#666666")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis.tickSize(0).tickPadding(8));

// Y scale and Axis
const yScale1 = d3.scaleLinear()
    .domain([0, 2000000])
    .range([height, 0]);


svg
  .append('g')
  .call(d3.axisLeft(yScale1).ticks(5,".1s").tickSize(0).tickPadding(6))
  .call(d => d.select(".domain").remove());

const yScale2 = d3.scaleLinear()
  .domain([0, 20])
  .range([height, 0]);
svg
  .append('g')
  .attr("transform", `translate(${width}, 0)`)
  .call(d3.axisRight(yScale2).ticks(5).tickSize(0).tickPadding(6).tickFormat(function(d) { return d + "%"; }))
  .call(d => d.select(".domain").remove());

// set horizontal grid line
const GridLine = () => d3.axisLeft().scale(yScale1);
svg
  .append("g")
    .attr("class", "grid")
  .call(GridLine()
    .tickSize(-width,0,0)
    .tickFormat("")
    .ticks(5)
);


const tooltip = d3.select("body")
  .append("div")
    .attr("id", "chart")
    .attr("class", "tooltip");


// create a tooltip
const tooltip_1 = d3.select("body")
  .append("div")
    .attr("id", "chart")
    .attr("class", "tooltip");

// tooltip events
const mouseover_bar = function(d) {
  tooltip_1 
      .style("opacity", 1)
    d3.select(this)
      .style("opacity", .5)
}

const mousemove_bar = function(event, d) {
  const f =  d3.format(",")
  tooltip_1 
      .html("<div style='color: #0072BC'<b>Year: "  +(d.year)+ "</b></div><div><b>Number of returnees:</b> " +f(d.ret_num)+ "</div>")
      .style("top", event.pageY - 10 + "px")
      .style("left", event.pageX + 10 + "px");
}

const mouseleave_bar = function(d) {
  tooltip_1 
      .style("opacity", 0)
    d3.select(this)
      .style("opacity", 1)
}

// create bar
const bar = svg.selectAll("rect")
    .data(data)
    .join("g")
    .append("rect")
    .attr("class", "bar")
    .style("fill", "#0072BC")
    .attr("x", d => xScale(d.year))
    .attr("y", height)
    .attr("width", xScale.bandwidth())
    .attr("height", 0)
    .on("mouseover", mouseover_bar)
    .on("mousemove", mousemove_bar)
    .on("mouseleave", mouseleave_bar);
  
  bar.transition()
    .duration(1000) // Duration of the animation in milliseconds
    .attr("y", d => yScale1(+d.ret_num))
    .attr("height", d => height - yScale1(+d.ret_num));


    
    
// Create a separate invisible line for calculating the total length
const invisibleLine = svg.append("path")
  .datum(data)
  .attr("class", "invisible-line")
  .attr("fill", "none")
  .attr("opacity", 0)
  .attr("d", d3.line()
    .x(d => xScale(d.year) + xScale.bandwidth() / 2)
    .y(d => yScale2(d.current_year_perc))
  )

// Get the total length of the invisible line
const totalLength = invisibleLine.node().getTotalLength();

// Create the visible line
const line = svg.append("path")
  .datum(data)
  .attr("class", "line")
  .attr("fill", "none")
  .attr("stroke", "#EF4A60")
  .attr("stroke-width", 2)
  .attr("stroke-dasharray", `${totalLength} ${totalLength}`)
  .attr("stroke-dashoffset", totalLength) 
  .attr("d", d3.line()
    .x(d => xScale(d.year) + xScale.bandwidth() / 2)
    .y(d => yScale2(d.current_year_perc))
  )

// Animate the line
line.transition()
  .delay(500)
  .duration(2500)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset", 0);


svg.selectAll("dot")
.data(data)
.enter().append("circle")
.attr("cx", d => xScale(d.year) + xScale.bandwidth() / 2)
.attr("cy", d => yScale2(d.current_year_perc))
.attr("r", 6)
.attr("opacity", 0)
.on("mouseover", () => {
      tooltip
        .style("opacity", 1)
      d3.select(this)
        .style("opacity", .5)
  })
.on("mousemove", (event, d) => {
    tooltip.style("display", "block")

        .html("<div style='color: #0072BC'<b>Year: "  +(d.year)+ "</b></div><div><b>Percentage:</b> " +d3.format(".1f")(d.current_year_perc)+"%"+"</div>")
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
    
    

    // Add transition for the circle radius

    circle.transition()
      .duration(50)
      .attr("r", 5);
        
  
})
.on("mouseout", () => {
    tooltip.style("display", "none");
});

// set title
svg
  .append("text")
    .attr("class", "chart-title")
    .attr("x", -(margin.left)*0.92)
    .attr("y", -(margin.top)/1.5)
    .attr("text-anchor", "start")
  .text("Assisted returns to Afghanistan | 2002-2023")

  // set Y axis 1 label
  svg
    .append("text")
      .attr("class", "label_left")
      .attr("x", -(margin.left)*0.92)
      .attr("y", -(margin.top/4))
      .attr("text-anchor", "start")
      .style("fill", "#0072BC")
    .text("Number of returns (millions)")

  // set Y axis 2 label
  svg
   .append("text")
     .attr("class", "label_right")
     .attr("x", width+25)
     .attr("y", -(margin.top/4))
     .attr("text-anchor", "end")
     .style("fill", "#EF4A60")
   .text("Accumulated returns compared to the overall Afghan population")

})