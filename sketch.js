$(document).ready(function() {
	for (var x = 0; x < 16; x++) {
		for(var y = 0; y < 16; y++) {
			var unit =$("<div id='block' class='startunit'></div>");
			unit.appendTo('#container')
			}
		}
$('#container > div').hover(
	function (){
	$(this).removeClass('startunit')
	$(this).addClass('drawunit')   
	});
var refresh = function(){
	$('div.drawunit').addClass('startunit')	
	$('div.startunit').removeClass('drawunit')
	
} 
	});


 

//*function changeColor(){
//	$(".startunit").addclass('.drawunit');
//	}

//$("<div class='startunit'>").mouseenter(
//	changeColor();
	
//);
//$("<div class='startunit'>").click(
//	function changeColor(){
//	$(".startunit").addclass('.clickedunit');
//	}
	
//);

