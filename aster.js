$(document).ready(function() {

var data;
var max = 0;
var total = 0;
var width = 300,
    height = 300,
    radius = Math.min(width, height) / 2,
    innerRadius = 0.35 * radius;



d3.json("areas.json", function(json) {
    pieData=1;
    data = json;
    data.forEach(function(d) {
      d.score  = +d["Total Population (SAPE 2010)"];
      d.label  =  d["Local Authority Name"];
    
      if (d.score>max){
        max= +d.score;
    };
  });
});



var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d["Total Population (SAPE 2010)"]; });

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([0, 0])
  .html(function(d) {
    return d.data.label + ": <span style='color:orangered'>" + d.data.score + "</span>";
  });

var arc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(function (d) { 
    var value= d.data.score/max;
    return (radius - innerRadius) * (d.data.score / max) + innerRadius;  
  });

var outlineArc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius);

var color = d3.scale.ordinal()
    .range(["#9E0041", "#C32F4B", "#E1514B", "#F47245", "#FB9F59", "#FEC574", "#FAE38C", "#EAF195","#C7E89E","#9CD6A4","#6CC4A4","#4D9DB4","#4776B4","#5E4EA1"]);

var svg = d3.select("#aesterplot").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.call(tip);

d3.json("areas.json", function(json) {
  data = json;
  data.forEach(function(d) {
    d.score  = +d["Total Population (SAPE 2010)"];
    d.label  =  d["Local Authority Name"];
    
    if (d.score>max){
      max= +d.score;
    }
  });

  
  var path = svg.selectAll(".solidArc")
      .data(pie(data))
    .enter().append("path")
      .attr("fill", function(d) { return color(d.data["Total Population (SAPE 2010)"])})
      .attr("class", "solidArc")
      .attr("stroke", "gray")
      .attr("d", arc)
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

  var outerPath = svg.selectAll(".outlineArc")
      .data(pie(data))
    .enter().append("path")
      .attr("fill", "none")
      .attr("stroke", "gray")
      .attr("class", "outlineArc")
      .attr("d", outlineArc);  


  // calculate the weighted mean score
  //total = d3.sum(data, function(d) { return d.score; });
  //var score = total/32;


  svg.append("text")
  .attr("dy", ".35em")
  .attr("font-size","13px")
  .style("text-anchor", "middle")
  .attr("class", "inside")
  .text(function(d) { return 'Total Population'; })
  .style("font-weight","bold");

});

});