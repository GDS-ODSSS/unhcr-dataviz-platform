// Set SVG parameters
const width2 = 450,
      height2 = 300;
const svg2 = d3.select("#signatory-map")
   .append("svg")
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
const dataURL2 = "laws_policies_strategies.csv";
const polygonsURL2 = "world_polygons_simplified.json";
const polylinesURL2 = "world_lines_simplified.json";

// Define the update function
function update(data) {
  poly2.selectAll("path")
    .attr("fill", function(d) {
      const value = data[d.properties.color_code];
      if (value !== undefined) {
        return color2(value.all || value.imp_ins || value.law || value.pol_str);
      } else {
        return "#E6E6E6";
      }
    })
    .select("title")
    .text(function(d) {
      const value = data[d.properties.color_code];
      if (value) {
        return `${d.properties.gis_name}\nNational: ${value.all_nat || value.imp_ins_nat || value.law_nat || value.pol_str_nat || 'N/A'}\nSubnational: ${value.all_sub || value.imp_ins_sub || value.law_sub || value.pol_str_sub || 'N/A'}`;
      } else {
        return `${d.properties.gis_name}\nData not available`;
      }
    });
}

// Load data
const promises2 = [
  d3.json(polygonsURL2),
  d3.csv(dataURL2),
  d3.json(polylinesURL2),
];

Promise.all(promises2).then(ready);

function ready([topology, convention, polylines]) {
  // Prepare data to join shapefile
  joinData = {};
  convention.forEach(function(d) {
    joinData[d.iso] = {
      imp_ins: +d.imp_ins,
      imp_ins_nat: +d.imp_ins_nat,
      imp_ins_sub: +d.imp_ins_sub,
      law: +d.law,
      law_nat: +d.law_nat,
      law_sub: +d.law_sub,
      pol_str: +d.pol_str,
      pol_str_nat: +d.pol_str_nat,
      pol_str_sub: +d.pol_str_sub
    };
  });

  // Extract and set the datasets
  dataset1 = {};
  dataset2 = {};
  dataset3 = {};
  dataset4 = {};

  convention.forEach(function(d) {
    dataset1[d.iso] = {
      all: +d.all,
      all_nat: +d.all_nat,
      all_sub: +d.all_sub
    };
    dataset2[d.iso] = {
      imp_ins: +d.imp_ins,
      imp_ins_nat: +d.imp_ins_nat,
      imp_ins_sub: +d.imp_ins_sub
    };
    dataset3[d.iso] = {
      law: +d.law,
      law_nat: +d.law_nat,
      law_sub: +d.law_sub
    };
    dataset4[d.iso] = {
      pol_str: +d.pol_str,
      pol_str_nat: +d.pol_str_nat,
      pol_str_sub: +d.pol_str_sub
    };
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
    .attr("class", "countries")
    .on("mouseover", mouseover)
    .on("mouseleave", mouseleave)
    .append("title")
    .text(d => {
      const data = joinData[d.properties.color_code];
      return data
        ? `${d.properties.gis_name}\nNational: ${data.all_nat || 'N/A'}\nSubnational: ${data.all_sub || 'N/A'}`
        : `${d.properties.gis_name}\nData not available`;
    });

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

// Button click handlers
document.getElementById('dataset1-btn').onclick = function() {
  update(dataset1);
  highlightButton('dataset1-btn');
};

document.getElementById('dataset2-btn').onclick = function() {
  update(dataset2);
  highlightButton('dataset2-btn');
};

document.getElementById('dataset3-btn').onclick = function() {
  update(dataset3);
  highlightButton('dataset3-btn');
};

document.getElementById('dataset4-btn').onclick = function() {
  update(dataset4);
  highlightButton('dataset4-btn');
};
