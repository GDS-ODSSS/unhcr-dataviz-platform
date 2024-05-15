// Set the dimensions and margins of the graph
const tree_margin = { top: 30, right: 10, bottom: 20, left: 0 };
const tree_width = 480 - tree_margin.left - tree_margin.right;
const tree_height = 350 - tree_margin.top - tree_margin.bottom;

// Append the SVG object to the container
const tree_svg = d3.select("#treemap-container")
  .append("svg")
  .attr("id","treemap-svg")
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("viewBox", `0 0 ${tree_width + tree_margin.left + tree_margin.right} ${tree_height + tree_margin.top + tree_margin.bottom}`)
  .attr("preserveAspectRatio", "xMinYMin")
  .append("g")
  .attr("transform", `translate(0,${tree_margin.top})`)
  .style("shape-rendering", "crispEdges");

const formatNumber = d3.format(",");
let transitioning = false;

// Set scales for x and y
const x = d3.scaleLinear()
  .domain([0, tree_width])
  .range([0, tree_width]);

const y = d3.scaleLinear()
  .domain([0, tree_height])
  .range([0, tree_height]);

const treemap = d3.treemap()
  .size([tree_width, tree_height])
  .paddingInner(0)
  .round(false);

const grandparent = tree_svg.append("g")
  .attr("class", "grandparent");

grandparent.append("rect")
  .attr("y", -tree_margin.top)
  .attr("width", tree_width)
  .attr("height", tree_margin.top)
  .attr("fill", '#0072BC');

grandparent.append("text")
  .attr("x", 6)
  .attr("y", 10- tree_margin.top)
  .attr("dy", ".75em");

  d3.json("data.json").then(data => {
    const root = d3.hierarchy(data);
    
    root.each(node => {
        node.color = node.data.color || (node.parent ? node.parent.color : null); // Inherit color from parent if not specified
      });

    treemap(root
      .sum(d => d.value)
      .sort((a, b) => b.depth - a.depth || b.value - a.value)
    );
    display(root);
  
    function display(d) {
      grandparent
        .datum(d.parent)
        .on("click", () => {
          if (d.parent) {
            transition(d.parent);
          } else {
            transition(null); // Zoom out to root
          }
        })
        .select("text")
        .text(name(d));
  
      grandparent
        .datum(d.parent)
        .select("rect")
        .attr("fill", '#E6E6E6');
  
      const g1 = tree_svg.insert("g", ".grandparent")
        .datum(d)
        .attr("class", "depth");
  
      const g = g1.selectAll("g")
        .data(d.children)
        .join("g");
  
      g.filter(d => d.children)
        .classed("children", true)
        .on("click", (event, d) => transition(d));
  
      g.selectAll(".child")
        .data(d => d.children || [d])
        .join("rect")
        .attr("class", "child")
        .call(rect);
  
      g.append("rect")
        .attr("class", "parent")
        .call(rect)
        .append("title")
        .text(d => d.data.name);
  
      g.append("foreignObject")
        .call(rect)
        .attr("class", "foreignobj")
        .append("xhtml:div")
        .attr("dy", "0.35em")
        .html(d => {
            const percentage = ((d.value / d.parent.value) * 100).toFixed(0); // Calculate percentage
            return `
              <p class="type">${d.data.name}</p>
              <p>${percentage}%</p>
            `;
          })
        .attr("class", "textdiv");
  
      function transition(d) {
        if (transitioning || !d) return;
        transitioning = true;
  
        const g2 = display(d);
        const t1 = g1.transition().duration(650);
        const t2 = g2.transition().duration(650);
  
        x.domain([d.x0, d.x1]);
        y.domain([d.y0, d.y1]);
  
        tree_svg.style("shape-rendering", null);
  
        tree_svg.selectAll(".depth").sort((a, b) => a.depth - b.depth);
  
        g2.selectAll("text").style("fill-opacity", 0);
        g2.selectAll(".foreignobj div").style("display", "none");
  
        t1.selectAll("text").call(text).style("fill-opacity", 0);
        t2.selectAll("text").call(text).style("fill-opacity", 1);
  
        t1.selectAll("rect").call(rect);
        t2.selectAll("rect").call(rect);
  
        t1.selectAll(".textdiv").style("display", "none");
        t1.selectAll(".foreignobj").call(foreign);
        t2.selectAll(".textdiv").style("display", "block");
        t2.selectAll(".foreignobj").call(foreign);
  
        t1.on("end", () => {
          g1.remove();
          transitioning = false;
        });
  
        return g2;
      }
  
      return g;
    }
  
    function text(text) {
      text.attr("x", d => x(d.x0) + 6)
        .attr("y", d => y(d.y0) + 6);
    }
  
    function rect(rect) {
      rect.attr("x", d => x(d.x0))
        .attr("y", d => y(d.y0))
        .attr("width", d => x(d.x1) - x(d.x0))
        .attr("height", d => y(d.y1) - y(d.y0))
        .attr("fill", d => d.color);
    }
  
    function foreign(foreign) {
      foreign.attr("x", d => x(d.x0))
        .attr("y", d => y(d.y0))
        .attr("width", d => x(d.x1) - x(d.x0))
        .attr("height", d => y(d.y1) - y(d.y0));
    }
  
    function name(d) {
      return breadcrumbs(d) +
        (d.parent
          ? " - Click here to zoom out"
          : " Click inside square to zoom in");
    }
    
    function breadcrumbs(d) {
      const ancestors = d.ancestors().reverse();
      const res = ancestors
        .slice(1) // Exclude the root node (first element)
        .map(i => i.data.name)
        .join(" > ");
      return res;
    }
    
  });
  tree_svg
  .append('text')
      .attr('class', 'chart-source')
      .attr('x', 0)
      .attr('y', tree_height*1.04)
      .attr('text-anchor', 'start')
      .style('font-size', 8)
      .style('color', '#cccccc')
  .text('Source: UNHCR Afghanistan');

  
  
  
