function htmlParser(divOrig, divDest){
    // get the content of the origin div (first argument)
    let content = document.getElementById(divOrig).innerText;
    // write the content in the destination div (second argument)
    document.getElementById(divDest).innerHTML = content;
}


function cssParser(divOne){
  // get the content of the origin div (first argument)
  let cssValue = document.getElementById(divOne).innerText;
  // add style tag css and append it to the header
  $('<style>').text(cssValue).appendTo(document.head)
}


// See https://www.xul.fr/javascript/eval.php
let glet = this;


function jsParser(divOrig){
  // get the content of the origin div (first argument)
  let command = document.getElementById(divOrig).innerText;
  // remove the xmp tag and the script tags
  command = command.replace(/<script>/,"").replace(/<.script>/,"").replace(/<\/?span[^>]*>/g,"");
  // run the JS code
  glet.eval(command);
}
    
// Load chart
$.getScript("https://d3js.org/d3.v6.min.js", function(){
  // Run the according code to update the graph
  htmlParser('code-html', 'result')
  cssParser('code-css','result')
  jsParser('code-js')
  
})
window.onload=function(){
  document.getElementById('code-html').addEventListener("input", function() {
  htmlParser('code-html', 'result')
  cssParser('code-css','result')
  jsParser('code-js')
  })
  document.getElementById('code-css').addEventListener("input", function() {
  htmlParser('code-html', 'result')
  cssParser('code-css','result')
  jsParser('code-js')
  })
  document.getElementById('code-js').addEventListener("input", function() {
  htmlParser('code-html', 'result')
  cssParser('code-css','result')
  jsParser('code-js')
  })
}
    
    