// set the dimensions and margins of the graph
const margin = {top: 100, right: 25, bottom: 50, left: 40};
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#media-coverage-line")
  .append("svg")
    .attr("id","media-coverage-svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", "0 0 800 500")
    .attr("preserveAspectRatio", "xMinYMin")
  .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

var lineData;
var xScale, yScale;
var xAxis, yAxis;
var dataGrouped;
var color;
var allAnnotations
var parseTime = d3.timeParse("%d/%m/%Y");

d3.csv("media_coverage_long.csv", function(d){
  
  return {
     date: parseTime(d.date),
      category: d.category,
      value: +d.value,
      position: +d.position
  };
}).then(function(data){

  //pivot the data
  dataGrouped = d3.group(data, d => d.category)

  lineData = data;

  // X scale and Axis
  xScale = d3.scaleTime()
  .domain([parseTime("01/10/2023"), parseTime("01/01/2024")])
  .range([0, width]); 
  xAxis = svg
  .append('g')
  .style("font-size",16)
  .attr("class", "Xaxis")
  .style("opacity", 0)
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(xScale).ticks(4).tickSize(0).tickPadding(8).tickFormat(d3.timeFormat("%b %d")))

  // Y scale and Axis
  yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);
  yAxis = svg
  .append('g')
  .style("font-size",16)
  .attr("class", "Yaxis")
  .style("opacity", 0)
  .call(d3.axisLeft(yScale).ticks(6).tickSize(0).tickPadding(4))
  .call(d => d.select(".domain").remove());

  // set horizontal grid line
  const GridLine = () => d3.axisLeft().scale(yScale);
  svg
    .append("g")
      .attr("class", "grid")
      .style("opacity", 0)
    .call(GridLine()
      .tickSize(-width,0,0)
      .tickFormat("")
      .ticks(6)
  );


  function urlize(label) {
    // Replace spaces with underscores
    let formattedLabel = label.replace(/ /g, '_');
  
    // Convert to lowercase
    formattedLabel = formattedLabel.toLowerCase();
    
    return formattedLabel;
  }

  // color palette
  color = d3.scaleOrdinal()
  .range(["#18375F","#666666","#8395B9", "#00B398","#0072BC","#8EBEFF","#E1CC0D","#EF4A60" ])

// Initial drawing using <path> elements with d3.line()
svg.selectAll(".line")
  .data(dataGrouped)
  .join("path")
  .attr("class",  d => urlize(d[0]))
  .attr("stroke", d => color(d[0]))
  .attr("stroke-width", 2)
  .attr("fill", "none")
  .attr("d", d => d3.line()
                  .x(d => xScale(d.date))
                  .y(d => yScale(d.position))
                  (d[1])
  );

// Add labels to the lines
svg.selectAll("line-labels")
  .data(dataGrouped)
  .join("text")
    .attr("class", "line-label")
    .attr("x", d => xScale(d[1][0].date))
    .attr("y", d => yScale(d[1][0].position)) 
    .attr("dy", -8) 
    .attr("text-anchor", "start") 
    .text(d => d[0]);


  svg
  .append("text")
    .attr("class", "chart-title")
    .attr("x", -(margin.left)*0.8)
    .attr("y", -(margin.top)/1.7)
    .attr("text-anchor", "start")
    .style("opacity", 0)
  .text("Analysis of media coverage | Oct 2023 - Dec 2023")

  svg
  .append("text")
    .attr("class", "chart-label")
    .attr("x", -(margin.left)*0.8)
    .attr("y", -(margin.top)/4.5)
    .attr("text-anchor", "start")
    .style("opacity", 0)
  .text("Count of occurrences");

  svg
  .append('text')
      .attr('class', 'chart-source')
      .attr('x', -(margin.left)*0.6)
      .attr('y', height*1.13)
      .attr('text-anchor', 'start')
      .style("opacity", 0)
  .text('Source: Quid Discover Media ');


  // Define all annotations
  allAnnotations = [
    //moved recession annotation to front of array so it's behind 
    {
      subject: {
        height: height,
        width: xScale(parseTime("14/10/2023")) - xScale(parseTime("8/10/2023"))
      },
      type: d3.annotationCalloutRect,
      y: margin.top,
      disable: ["connector"], // doesn't draw the connector
      //can pass "subject" "note" and "connector" as valid options
      dx: (xScale(parseTime("20/10/2023")) - xScale(parseTime("12/10/2023")))/2,
      data: { x: "8/10/2023"}
    },
    {
      subject: {
        height: height,
        width: xScale(parseTime("10/11/2023")) - xScale(parseTime("26/10/2023"))
      },
      type: d3.annotationCalloutRect,
      y: margin.top,
      disable: ["connector"],
      dx: (xScale(parseTime("20/10/2023")) - xScale(parseTime("12/10/2023")))/2,
      data: { x: "27/10/2023"}
    },
    {
      subject: {
        height: height,
        width: xScale(parseTime("19/11/2023")) - xScale(parseTime("4/11/2023"))
      },
      type: d3.annotationCalloutRect,
      y: margin.top,
      disable: ["connector"],
      dx: (xScale(parseTime("20/10/2023")) - xScale(parseTime("12/10/2023")))/2,
      data: { x: "4/11/2023"}
    },
    {
      subject: {
        height: height,
        width: xScale(parseTime("32/12/2023")) - xScale(parseTime("27/12/2023"))
      },
      type: d3.annotationCalloutRect,
      y: margin.top,
      disable: ["connector"],
      data: { x: "27/12/2023"}
    },
    {
      note: {
        title: "Pakistan narrative",
        wrap: 150,
        align: "left"
      },
      connector: {
        end: "dot",
      },
      disable: ["connector"],
      x: 120,
      y: 448,
      dy: -60,
      dx: 0,
      color: "#0072BC"
    },
    {
      note: {
        title: "Awareness raising",
        wrap: 150,
        align: "middle"
      },
      connector: {
        end: "dot",
      },
      disable: ["connector"],
      x: 145,
      y: 500,
      dy: -60,
      dx: 0,
      color: "#18375F"
    },
    {
      note: {
        title: "Taliban",
        wrap: 150,
        align: "middle"
      },
      connector: {
        end: "dot",
      },
      disable: ["connector"],
      x: 360,
      y: 460,
      dy: -40,
      dx: 0,
      color: "#EF4A60"
    },
    {
      note: {
        title: "Humanitarian situation",
        wrap: 150,
        align: "middle"
      },
      connector: {
        end: "dot",
      },
      disable: ["connector"],
      x: 225,
      y: 447,
      dy: -60,
      dx: 0,
      color: "#8395B9"
    },
    {
      note: {
        title: "Mentions of int org",
        wrap: 80,
        align: "middle"
      },
      connector: {
        end: "dot",
      },
      disable: ["connector"],
      x: 354,
      y: 484,
      dy: -60,
      dx: 0,
      color: "#00B398"
    },
    {
      note: {
        title: "Refugees in Iran",
        wrap: 150,
        align: "middle"
      },
      connector: {
        end: "dot",
      },
      disable: ["connector"],
      x: 640,
      y: 475,
      dy: -60,
      dx: 0,
      color: "#E1CC0D"
    },
  ]
  
});


// Update annoation based on the step
function updateAnnotations(step) {
  // Remove existing annotation group
  d3.selectAll(".annotation-group").remove();

  const selectedAnnotations = [];
  // Determine which annotations to display based on the step
  if (step === 1) {
    
  } else if (step === 2) {
    selectedAnnotations.push(allAnnotations[0]);
    selectedAnnotations.push(allAnnotations[4]);
  } else if (step === 3) {
    selectedAnnotations.push(allAnnotations[1]);
    selectedAnnotations.push(allAnnotations[5]);
    selectedAnnotations.push(allAnnotations[6]);

  } else if (step === 4) {
    selectedAnnotations.push(allAnnotations[2]);
    selectedAnnotations.push(allAnnotations[7]);
    selectedAnnotations.push(allAnnotations[8]);

  } else if (step === 5) {
    selectedAnnotations.push(allAnnotations[3]);
    selectedAnnotations.push(allAnnotations[9]);
  };

  const makeAnnotations = d3.annotation()
    .type(d3.annotationLabel)
    .accessors({ 
      x: function(d){ return xScale(parseTime(d.x))},
      y: function(d){ return yScale(d.y)}
    })
    .annotations(selectedAnnotations)
  
  d3.select("#media-coverage-svg")
    .append("g")
    .attr("class", "annotation-group annotation-step-" + step)
    .call(makeAnnotations)
}



function stepOne() {

 d3.selectAll(".annotation-group").remove();

toggleAxesOpacity(true, true, 0);

svg.select(".grid")
  .transition()
  .duration(1000)
  .style("opacity", 0)

svg.selectAll(".line-label")
  .transition()
  .duration(1000)
  .style("opacity", 1)

  svg.selectAll(".awareness_raising, .complications_experienced, .humanitarian_situation, .mentions_of_int_org, .pakistan_narrative, .reactions_specific_countries, .refugees_in_iran, .taliban")
    .transition()
    .duration(1000)
    .attr("stroke", d => color(d[0]))
    .attr("stroke-width", 2)
    .style("opacity", 1)
    .attr("d", d => {
      return d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.position))
        (d[1]);
    });

    svg.selectAll(".chart-title")
    .transition()
    .duration(1000)
    .style("opacity", 0);

    svg.selectAll(".chart-label")
    .transition()
    .duration(1000)
    .style("opacity", 0);

    svg.selectAll(".chart-source")
    .transition()
    .duration(1000)
    .style("opacity", 0);
  
}

function stepTwo() {
  updateAnnotations(2);

  // Update scales based on new data or conditions
  xScale.domain([parseTime("01/10/2023"), parseTime("01/01/2024")]);
  xAxis.call(d3.axisBottom(xScale).ticks(2).tickSize(0).tickPadding(8).tickFormat(d3.timeFormat("%b %d"))).transition().duration(1000);
  yScale.domain([0, 100]);
  yAxis.call(d3.axisLeft(yScale).ticks(6).tickSize(0).tickPadding(4))
  .call(d => d.select(".domain").remove()).transition().duration(1000);

  // Update gridlines
  svg.select(".grid")
  .transition()
  .duration(1000)
  .style("opacity", 1)


  svg.selectAll(".awareness_raising, .complications_experienced, .humanitarian_situation, .mentions_of_int_org, .pakistan_narrative, .reactions_specific_countries, .refugees_in_iran, .taliban")
    .data(dataGrouped)
    .transition()
    .duration(1000)
    .style("opacity", 0.2)
    .attr("stroke", "#CCCCCC")
    .attr("d", d => d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    (d[1]));
    

   // Update 'pakistan_narrative' line separately
  svg.selectAll(".pakistan_narrative")
  .transition()
  .duration(1000)
  .attr("stroke", "#0072BC")
  .style("opacity", 1)
  .attr("stroke-width", 3)
  .attr("d", d => d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    (d[1])
  );

  svg.selectAll(".line-label")
  .transition()
  .duration(1000)
  .style("opacity", 0);

  svg.selectAll(".chart-title")
  .transition()
  .duration(1000)
  .style("opacity", 1);


  svg.selectAll(".chart-label")
  .transition()
  .duration(1000)
  .style("opacity", 1);

  svg.selectAll(".chart-source")
  .transition()
  .duration(1000)
  .style("opacity", 1);

  };
  


function stepThree() {
  updateAnnotations(3);

  svg.selectAll(".pakistan_narrative, .humanitarian_situation, .mentions_of_int_org") 
  .transition()
  .duration(1000)
  .attr("stroke-width", 2)
  .style("opacity", 0.2)
  .attr("stroke", "#CCCCCC")
  .attr("d", d => d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    (d[1])
  );;

  svg.selectAll(".awareness_raising") 
  .transition()
  .duration(1000)
  .attr("stroke-width", 3)
  .style("opacity", 1)
  .attr("stroke", "#18375F")
  .attr("d", d => d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    (d[1])
  );


  svg.selectAll(".taliban") 
  .transition()
  .duration(1000)
  .attr("stroke-width", 3)
  .style("opacity", 1)
  .attr("stroke", "#EF4A60")
  .attr("d", d => d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    (d[1])
  );

};

function stepFour() {
  updateAnnotations(4);

  svg.selectAll(".awareness_raising, .taliban, .refugees_in_iran") 
  .transition()
  .duration(1000)
  .attr("stroke-width", 2)
  .style("opacity", 0.2)
  .attr("stroke", "#CCCCCC")
  .attr("d", d => d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    (d[1])
  );;

  svg.selectAll(".humanitarian_situation") 
  .transition()
  .duration(1000)
  .attr("stroke-width", 3)
  .style("opacity", 1)
  .attr("stroke", "#8395B9")
  .attr("d", d => d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    (d[1])
  );


  svg.selectAll(".mentions_of_int_org") 
  .transition()
  .duration(1000)
  .attr("stroke-width", 3)
  .style("opacity", 1)
  .attr("stroke", "#00B398")
  .attr("d", d => d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    (d[1])
  );


};


function stepFive() {
  updateAnnotations(5);

  svg.selectAll(".humanitarian_situation, .mentions_of_int_org") 
  .transition()
  .duration(1000)
  .attr("stroke-width", 2)
  .style("opacity", 0.2)
  .attr("stroke", "#CCCCCC")
  .attr("d", d => d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    (d[1])
  );

  svg.selectAll(".refugees_in_iran") 
  .transition()
  .duration(1000)
  .attr("stroke-width", 3)
  .style("opacity", 1)
  .attr("stroke", "#E1CC0D")
  .attr("d", d => d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    (d[1])
  );


};





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

 
