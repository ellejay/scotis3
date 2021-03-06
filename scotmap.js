$(document).ready(function() {   
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
          fill1: '#a83b42',  fill2: '#a63c47',   fill3: '#a43d4d',
		  fill4: '#a23f52',  fill5: '#a04058',   fill6: '#9e425d',
		  fill7: '#9C4363',   fill8: '#9A4569',	  fill9: '#98466E',
		  fill10: '#964874',     fill11: '#944979',    fill12: '#924A7F',
		  fill13: '#904C84',     fill14: '#8E4D8A', 	  fill15: '#8C4F90',
		  fill16: '#8A5095',	  fill17: '#88529B',	  fill18: '#8653A0',
		  fill19: '#8455A6',	  fill20: '#8256AC',	  fill21: '#8058B1',
		  fill22: '#7E59B7',	  fill23: '#7C5ABC',	  fill24: '#7A5CC2',
		  fill25: '#785DC7',	  fill26: '#765FCD',	  fill27: '#7460D3',
		  fill28: '#7262D8',	  fill29: '#7063DE',	  fill30: '#6E65E3', 
		  fill31: '#6C66E9',	  fill32: '#6A68EF',
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
	
});