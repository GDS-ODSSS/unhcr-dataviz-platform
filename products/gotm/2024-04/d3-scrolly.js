// set the dimensions and margins of the graph
const margin = {top: 100, right: 20, bottom: 40, left: 60};
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#cari-regionl-line")
  .append("svg")
    .attr("id","cari-line-svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", "0 0 800 500")
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
  svg
  .selectAll("lines")
  .data(dataGrouped)
  .join("path")
    .attr("class", d => "line_" + d[0])
    .attr("fill", "none")
    .attr("stroke", d => color(d[0]))
    .attr("stroke-width", 0)
    .attr("d", function(d){
      return d3.line()
        .curve(d3.curveCardinal)
        .x(d => xScale(d.date))
        .y(d => yScale(d.cari))
        (d[1])
    });

  svg
  .append("text")
    .attr("class", "chart-label")
    .attr("x", -(margin.left)*0.8)
    .attr("y", -(margin.top)/4.5)
    .attr("text-anchor", "start")
  .text("Average CARI score")

  svg
  .append("text")
    .attr("class", "chart-label")
    .attr("x", -(margin.left)*5.7)
    .attr("y", -(margin.top)/2.7)
    .attr("text-anchor", "start")
    .attr("transform", "rotate(-90)")
  .text("Less restrictive")

  svg
  .append("text")
    .attr("class", "chart-label")
    .attr("x", -(margin.left)*2)
    .attr("y", -(margin.top)/2.7)
    .attr("text-anchor", "start")
    .attr("transform", "rotate(-90)")
  .text("More restrictive")
  
});


  // Define all annotations
  const allAnnotations = [
    {
      note: {
        title: "North Americas",
        wrap: 150,
        align: "right"
      },
      connector: {
        end: "arrow",
        type: "curve",
        curve: d3.curveBasis
      },
      x: 250,
      y: 232,
      dy: -30,
      dx: -50,
      color: "#0072BC"
    },
    {
      note: {
        title: "South Americas",
        wrap: 150,
        align: "left"
      },
      connector: {
        end: "arrow",
        type: "curve",
        curve: d3.curveBasis
      },
      x: 220,
      y: 147,
      dy: -15,
      dx: 50,
      color: "#18375F"
    },
    {
      note: {
        title: "Central Americas",
        wrap: 150,
        align: "right"
      },
      connector: {
        end: "arrow",
        type: "curve",
        curve: d3.curveBasis
      },
      x: 600,
      y: 310,
      dy: -30,
      dx: -30,
      color: "#00B398"
    },
    {
      type: d3.annotationCalloutCircle,
      note: {
        label: "Central America falls below North America",
        wrap: 150,
        align: "left"
      },
      x: 110,
      y: 260,
      dy: 80,
      dx: 45,
      color: "#EF4A60",
      subject: { radius: 10 },
    },
    {
      note: {
        title: "North Africa",
        wrap: 150,
        align: "left"
      },
      connector: {
        end: "arrow",
        type: "curve",
        curve: d3.curveBasis
      },
      x: 285,
      y: 140,
      dy: 0,
      dx: 50,
      color: "#00B398"
    },
    {
      note: {
        title: "Eastern Africa",
        wrap: 150,
        align: "right"
      },
      connector: {
        end: "arrow",
        type: "curve",
        curve: d3.curveBasis
      },
      x: 280,
      y: 240,
      dy: -30,
      dx: -30,
      color: "#0072BC"
    },
    {
      note: {
        title: "Middle East",
        wrap: 150,
        align: "right"
      },
      connector: {
        end: "arrow",
        type: "curve",
        curve: d3.curveBasis
      },
      x: 610,
      y: 245,
      dy: -30,
      dx: -30,
      color: "#EF4A60"
    },
    {
      note: {
        title: "Western Africa",
        wrap: 150,
        align: "right"
      },
      connector: {
        end: "arrow",
        type: "curve",
        curve: d3.curveBasis
      },
      x: 340,
      y: 310,
      dy: -25,
      dx: -20,
      color: "#18375F"
    },
    {
      note: {
        title: "Western Europe",
        wrap: 150,
        align: "right"
      },
      connector: {
        end: "arrow",
        type: "curve",
        curve: d3.curveBasis
      },
      x: 170,
      y: 307,
      dy: -25,
      dx: -30,
      color: "#BB9D21"
    },
    {
      note: {
        title: "Southern Europe",
        wrap: 150,
        align: "left"
      },
      connector: {
        end: "arrow",
      },
      x: 275,
      y: 345,
      dy: 10,
      dx: 30,
      color: "#506489"
    },

  ];
  
  function updateAnnotations(step) {
    // Remove existing annotation group
    d3.selectAll(".annotation-group").remove();

    const selectedAnnotations = [];
    // Determine which annotations to display based on the step
    if (step === 1) {
        selectedAnnotations.push(allAnnotations[0]);
    } else if (step === 2) {
        selectedAnnotations.push(allAnnotations[1]);
        selectedAnnotations.push(allAnnotations[2]); 
    } else if (step === 3) {
        selectedAnnotations.push(allAnnotations[0]);
        selectedAnnotations.push(allAnnotations[2]);
        selectedAnnotations.push(allAnnotations[3]);
    } else if (step === 4) {
        selectedAnnotations.push(allAnnotations[4]);
        selectedAnnotations.push(allAnnotations[5]);
        selectedAnnotations.push(allAnnotations[6]);
        selectedAnnotations.push(allAnnotations[7]);
    } else if (step === 5) {
        selectedAnnotations.push(allAnnotations[8]);
        selectedAnnotations.push(allAnnotations[9]);

    };

    // Create new annotation groups
    const makeAnnotations = d3.annotation()
        .type(d3.annotationLabel)
        .notePadding(2)
        .annotations(selectedAnnotations);
    // Call annotations with unique class
    d3.select("#cari-line-svg")
        .append("g")
        .attr("class", "annotation-group annotation-step-" + step)
        .call(makeAnnotations);
}

  

// Function to animate stroke-dasharray and stroke-dashoffset
function animateStroke(path, duration) {
  const totalLength = path.node().getTotalLength();
  path
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition()
    .duration(duration)
    .ease(d3.easeLinear)
    .attr("stroke-dashoffset", 0);
}

function stepOne() {

  updateAnnotations(1);

  xScale.domain(d3.extent(lineData, d => d.date)).nice();
  xAxis.call(d3.axisBottom(xScale).ticks(5).tickSize(0).tickPadding(8));
  yScale.domain([0, 100]).nice();
  yAxis.call(d3.axisLeft(yScale).ticks(6).tickSize(0).tickPadding(4))
  .call(d => d.select(".domain").remove());

  svg.selectAll(".line_south_america, .line_central_america") 
    .attr("stroke-width", 2)
    .attr("stroke", "#CCCCCC");

    svg.selectAll(".line_northern_america") 
    .attr("stroke-width", 3)
    .attr("stroke", "#0072BC")
    .raise();
  
  svg.selectAll(".line_eastern_africa, .line_northern_africa, .line_southern_europe, .line_western_africa, .line_western_asia, .line_western_europe")
    .attr("stroke", "#333333")
    .attr("stroke-width", 0);

  svg
  .append("text")
    .attr("class", "chart-title-1")
    .attr("x", -(margin.left)*0.8)
    .attr("y", -(margin.top)/1.7)
    .attr("text-anchor", "start")
  .text("Average CARI score in Americas region | May 2020 - April 2022")

  svg.selectAll(".line_northern_america, .line_south_america, .line_central_america").each(function() {
    animateStroke(d3.select(this), 1500);
  });
}

function stepTwo(){

  updateAnnotations(2);

  svg.selectAll(".line_northern_america") 
  .transition()
  .duration(1000)
  .attr("stroke", "#CCCCCC")
  .attr("stroke-width", 2);
  svg.selectAll(".line_central_america") 
  .transition()
  .duration(1000)
  .attr("stroke", "#00B398")
  .attr("stroke-width", 3);
svg.selectAll(".line_south_america") 
  .transition()
  .duration(1000)
  .attr("stroke", "#18375F")
  .attr("stroke-width", 3);

}

function stepThree(){
  updateAnnotations(3);
  svg.selectAll(".line_south_america") 
  .transition()
  .duration(1000)
  .attr("stroke", "#CCCCCC")
  .attr("stroke-width", 2);
svg.selectAll(".line_northern_america") 
  .transition()
  .duration(1000)
  .attr("stroke", "#0072BC")
  .attr("stroke-width", 3);
svg.selectAll(".line_central_america") 
  .transition()
  .duration(1000)
  .attr("stroke", "#00B398")
  .attr("stroke-width", 3);
  
  svg.selectAll(".line_eastern_africa, .line_northern_africa, .line_southern_europe, .line_western_africa, .line_western_asia, .line_western_europe")
  .transition()
  .duration(1000)
  .attr("stroke", "#333333")
  .attr("stroke-width", 0);

  svg.selectAll(".chart-title-2")
  .attr("opacity", 0)

  svg
  .append("text")
    .attr("class", "chart-title-1")
    .attr("x", -(margin.left)*0.8)
    .attr("y", -(margin.top)/1.7)
    .attr("text-anchor", "start")
  .text("Average CARI score in Americas region | May 2020 - April 2022")
}

function stepFour(){

  d3.selectAll(".annotation-group").remove();

  updateAnnotations(4);

  svg.selectAll(".line_south_america, .line_northern_america, .line_central_america")
  .transition()
  .duration(1000)
  .attr("stroke", "#333333")
  .attr("stroke-width", 0);

  svg.selectAll(".line_eastern_africa") 
    .attr("stroke", "#0072BC")
    .attr("stroke-width", 3);
  svg.selectAll(".line_northern_africa") 
    .attr("stroke", "#00B398")
    .attr("stroke-width", 3);
  svg.selectAll(".line_western_africa") 
    .attr("stroke", "#18375F")
    .attr("stroke-width", 3);
  svg.selectAll(".line_western_asia") 
    .attr("stroke", "#EF4A60")
    .attr("stroke-width", 3);
  svg.selectAll(".line_southern_europe, .line_western_europe") 
    .attr("stroke", "#CCCCCC")
    .attr("stroke-width", 2);

  svg.selectAll(".chart-title-1")
    .attr("opacity", 0);

  svg
  .append("text")
    .attr("class", "chart-title-2")
    .attr("x", -(margin.left)*0.8)
    .attr("y", -(margin.top)/1.7)
    .attr("text-anchor", "start")
  .text("Average CARI score in Mediterranean region | May 2020 - April 2022")

  svg.selectAll(".line_eastern_africa, .line_northern_africa, .line_southern_europe, .line_western_africa, .line_western_asia, .line_western_europe").each(function() {
    animateStroke(d3.select(this), 1500);
  });
}

function stepFive(){

  d3.selectAll(".annotation-group").remove();

  updateAnnotations(5);
  
  svg.selectAll(".line_southern_europe") 
    .transition()
    .duration(1000)
    .attr("stroke", "#BB9D21")
    .attr("stroke-width", 3);
  svg.selectAll(".line_western_europe") 
    .transition()
    .duration(1000)
    .attr("stroke", "#506489")
    .attr("stroke-width", 3);
  svg.selectAll(".line_eastern_africa, .line_northern_africa, .line_western_africa, .line_western_asia, .line_western_asia") 
    .transition()
    .duration(1000)
    .attr("stroke", "#CCCCCC")
    .attr("stroke-width", 2);
}


 
