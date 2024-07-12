// Set SVG parameters
const width2 = 450,
      height2 = 300;
const svg2 = d3.select("#signatory-map")
   .append("svg")
     .attr("id", "signatory-map-svg")
     .attr("width", "100%")
     .attr("height", "100%")
     .attr("viewBox","0 0 450 350")
     .attr("preserveAspectRatio","xMinYMin");

let dataset1, dataset2, dataset3, dataset4, joinData;

// Set map scale, location on screen and its projection
const projection2 = d3.geoRobinson()
        .scale(85)
        .center([0, 0])
        .translate([width2 / 2.2, height2 / 1.8]);

// Path generator
const path2 = d3.geoPath()
        .projection(projection2);

// Set color scale
const color2 = d3.scaleOrdinal()
        .domain([0, 1])
        .range(["#E6E6E6", "#0072BC"])
        .unknown("#E6E6E6");

// Declare polygon and polyline
const poly2 = svg2.append("g");
const line2 = svg2.append("g");

// Declare URL
const dataURL2 = "map_signatories.csv";
const polygonsURL2 = "world_polygons_simplified.json";
const polylinesURL2 = "world_lines_simplified.json";

// Load data
const promises2 = [
  d3.json(polygonsURL2),
  d3.csv(dataURL2),
  d3.json(polylinesURL2),
];

// Function to update data
function update(data) {
  poly2.selectAll("path")
    .attr("fill", function(d) {
      const value = data[d.properties.color_code];
      if (value !== undefined) {
        return color2(value);
      } else {
        return "#E6E6E6";
      }
    });
}

Promise.all(promises2).then(ready).catch(error => {
  console.error("Error loading data:", error);
});

function ready([topology, convention, polylines]) {
  // Prepare data to join shapefile
  joinData = {};
  convention.forEach(function(d) {
    joinData[d.iso] = {
      all: +d.all,
      c_1951: +d.c_1951,
      p_1967: +d.p_1967,
      c_1951_p_1967: +d.c_1951_p_1967,
      no_application: +d.no_application
    };
  });

  // Extract and set the datasets
  dataset1 = {};
  dataset2 = {};
  dataset3 = {};
  dataset4 = {};

  convention.forEach(function(d) {
    dataset1[d.iso] = +d.all;
    dataset2[d.iso] = +d.c_1951;
    dataset3[d.iso] = +d.p_1967;
    dataset4[d.iso] = +d.c_1951_p_1967;
  });

  // Log the datasets to verify they are correctly assigned
  console.log("dataset1", dataset1);
  console.log("dataset2", dataset2);
  console.log("dataset3", dataset3);
  console.log("dataset4", dataset4);

  // Set mouse events
  const mouseover = function(event, d) {
    d3.selectAll(".countries")
      .transition()
      .duration(100)
      .style("opacity", .3);
    d3.select(this)
      .transition()
      .duration(100)
      .style("opacity", 1);
  };

  const mouseleave = function(event, d) {
    d3.selectAll(".countries")
      .transition()
      .duration(100)
      .style("opacity", 1);
    d3.select(this)
      .transition()
      .duration(100)
      .style("opacity", 1);
  };

  // Load and draw polygons
  poly2
    .selectAll("path")
    .data(topojson.feature(topology, topology.objects.world_polygons_simplified).features)
    .join("path")
    .attr("fill", function(d) {
      const countryData = joinData[d.properties.color_code];
      if (countryData) {
          return color2(countryData.all);
      } else {
          return "#E6E6E6";
      }
    })
    .attr("d", path2)
    .attr("class", d => `${d.properties.color_code}`)
    .on("mouseover", mouseover)
    .on("mouseleave", mouseleave)
    .append("title")
    .text(d => `${d.properties.gis_name}`);

  // Load and draw lines
  line2
    .selectAll("path")
    .data(topojson.feature(polylines, polylines.objects.world_lines_simplified).features)
    .enter()
    .append("path")
    .attr("d", path2)
    .style("fill", "none")
    .attr("class", d => d.properties.type);

  // Initial dataset
  update(dataset1);
  highlightButton('dataset1-btn'); // Highlight the default button
}

// Function to highlight the active button
function highlightButton(activeButtonId) {
  // Remove 'active' class from all buttons
  document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));

  // Add 'active' class to the active button
  document.getElementById(activeButtonId).classList.add('active');
}

// Function to add annotation
function addAnnotation() {
  const allAnnotations = [
    {
      note: {
        label: "Saint Kitts and Nevis",
        wrap: 50,
        align: "left",
        padding: 2
      },
      connector: {
        end: "dot",
        endScale: 0.1
      },
      x: 113,
      y: 139,
      dy: -15,
      dx: 10,
      color: "#666666"
    },
  ];

  const makeAnnotations = d3.annotation()
    .type(d3.annotationCallout)
    .annotations(allAnnotations);

  d3.select("#signatory-map-svg")
    .append("g")
    .attr("class", "annotation-group")
    .style("font-size", 8)
    .call(makeAnnotations);
}

// Button click handlers
document.getElementById('dataset1-btn').onclick = function() {
  update(dataset1);
  highlightButton('dataset1-btn');
  d3.selectAll(".annotation-group").remove();
};

document.getElementById('dataset2-btn').onclick = function() {
  update(dataset2);
  highlightButton('dataset2-btn');
  d3.selectAll(".annotation-group").remove();
  addAnnotation();
};

document.getElementById('dataset3-btn').onclick = function() {
  update(dataset3);
  highlightButton('dataset3-btn');
  d3.selectAll(".annotation-group").remove();
};

document.getElementById('dataset4-btn').onclick = function() {
  update(dataset4);
  highlightButton('dataset4-btn');
  d3.selectAll(".annotation-group").remove();
};
