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

$('#button').click(
	function(){
	if ($('#container > div').hasClass('drawunit'))
		$('#container > div').removeClass('drawunit')
		$('#container > div').addClass('startunit')
	
	});
	

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

