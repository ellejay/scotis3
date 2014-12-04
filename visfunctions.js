var data; 
var names;
var pieData;



d3.json("areas.json", function(json) {
    data = json;
    names = d3.keys(data[0]);
    pieData = names[1];
    for (var i = 0; i < data.length; i++) {           
        console.log(data[i]["Local Authority Name"]) ; 
        console.log(data[i][names[0]]);
};

$(document).ready(function() {
//
$('a.poplight[href^=#]').click(function() {
var popID = $(this).attr('rel'); //Get Popup Name
var popURL = $(this).attr('href'); //Get Popup href to define size
var query= popURL.split('?');
var dim= query[1].split('&');
var popWidth = dim[0].split('=')[1]; //Gets the first query string value
$('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close"></a>');
var popMargTop = ($('#' + popID).height() + 80) / 2;
var popMargLeft = ($('#' + popID).width() + 80) / 2;
//Apply Margin to Popup
$('#' + popID).css({
'margin-top' : -popMargTop,
'margin-left' : -popMargLeft
});
$('body').append('<div id="fade"></div>');
$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer - .css({'filter' : 'alpha(opacity=80)'})
return false;
});
$('a.close, #fade').live('click', function() {
$('#fade , .popup_block').fadeOut(function() {
$('#fade, a.close').remove(); //fade them both out
});
return false;
});
});

function pieChanger(thing) {
    pieData = thing;
}



var data;
var max = 0;
var total = 0;
var width = 300,
    height = 300,
    radius = Math.min(width, height) / 2,
    innerRadius = 0.3 * radius;

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d[pieData]; });

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
    d.score  = +d[pieData];
    d.label  =  d["Local Authority Name"];
    
    if (d.score>max){
      max= +d.score;
    }
  });

  
  var path = svg.selectAll(".solidArc")
      .data(pie(data))
    .enter().append("path")
      .attr("fill", function(d) { return color(d.data[pieData])})
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
  total = d3.sum(data, function(d) { return d.score; });
  var score = total/32;


  svg.append("svg:text")
    .attr("class", "aster-score")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle") // text-align: right
    .text(Math.round(score));

});


    var map = new Datamap({
      element: document.getElementById('container'),
      geographyConfig: {
        dataUrl: 'scotland.json',
		borderColor: '#4d4d4d',
		highlightFillColor: '#EAED98',
		highlightBorderColor: '#4d4d4d',
		highlightBorderWidth: 1
      },
      scope: 'councils',
	  
	  fills: {
          defaultFill: '#000',
          fill1: '#a83b42',
		  fill2: '#a63c47',
		  fill3: '#a43d4d',
		  fill4: '#a23f52',
		  fill5: '#a04058',
		  fill6: '#9e425d',
		  fill7: '#9C4363',
		  fill8: '#9A4569',
		  fill9: '#98466E',
		  fill10: '#964874',
		  fill11: '#944979',
		  fill12: '#924A7F',
		  fill13: '#904C84',
		  fill14: '#8E4D8A',
		  fill15: '#8C4F90',
		  fill16: '#8A5095',
		  fill17: '#88529B',
		  fill18: '#8653A0',
		  fill19: '#8455A6',
		  fill20: '#8256AC',
		  fill21: '#8058B1',
		  fill22: '#7E59B7',
		  fill23: '#7C5ABC',
		  fill24: '#7A5CC2',
		  fill25: '#785DC7',
		  fill26: '#765FCD',
		  fill27: '#7460D3',
		  fill28: '#7262D8',
		  fill29: '#7063DE',
		  fill30: '#6E65E3', 
		  fill31: '#6C66E9',
		  fill32: '#6A68EF',
      },
	  
	  data: {
		'abd': { fillKey: 'fill1' }, 'abs': { fillKey: 'fill2' }, 'ang': { fillKey: 'fill3' },
		'arg': { fillKey: 'fill4' }, 'cla': { fillKey: 'fill5' }, 'com': { fillKey: 'fill6' },
		'dum': { fillKey: 'fill7' }, 'dun': { fillKey: 'fill8' }, 'eay': { fillKey: 'fill9' },
		'edu': { fillKey: 'fill10' }, 'elt': { fillKey: 'fill11' }, 'erf': { fillKey: 'fill12' },
		'edn': { fillKey: 'fill13' }, 'flk': { fillKey: 'fill14' }, 'fif': { fillKey: 'fill15' },
		'gla': { fillKey: 'fill16' }, 'hgh': { fillKey: 'fill17' }, 'inv': { fillKey: 'fill18' },
		'mid': { fillKey: 'fill19' }, 'mry': { fillKey: 'fill20' }, 'nay': { fillKey: 'fill21' },
		'nln': { fillKey: 'fill22' }, 'ork': { fillKey: 'fill23' }, 'per': { fillKey: 'fill24' },
		'ren': { fillKey: 'fill25' }, 'brd': { fillKey: 'fill26' }, 'sht': { fillKey: 'fill27' },
		'say': { fillKey: 'fill28' }, 'sln': { fillKey: 'fill29' }, 'str': { fillKey: 'fill30' },
		'wdu': { fillKey: 'fill31' }, 'wlt': { fillKey: 'fill32' },
	  },
	  
	  done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
				var box = document.getElementById('box1')
				box.innerHTML = "<div class='popup_title'>" + geography.properties.name + "</div> <img src='http://placehold.it/600x500'>"
				document.getElementById('fadebox').click();
            });
      },
	  
      setProjection: function(element, options) {
         var projection = d3.geo.equirectangular()
           .center([5, 5])
           .rotate([4.4, 0])
           .scale(900)
           .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

        var path = d3.geo.path()
               .projection(projection);
                                               
        return {path: path, projection: projection};
        }
   });
	