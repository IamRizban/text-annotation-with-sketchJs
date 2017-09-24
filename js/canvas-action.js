$(function() {
	// get heigh of the content so that we can set height of canvas greater than this
	var content_div_height = $('#content').outerHeight();	
	var canvas = document.getElementById('canvas');
    var context= canvas.getContext("2d");
	canvas.setAttribute('width', $(window).width());
	canvas.setAttribute('height', content_div_height);
	var canvas_height = canvas.height;
	var canvas_width = canvas.width;
	// initialize canvas with sketch.js
	$('#canvas').sketch({defaultColor: "#000"});			
	// script to activate/inactivate canvas
	$("#start_annotation").on("click", function () {
		// remove indexing so that we can deactivate canvas
		if($('#content').hasClass('add_indexing')) {
			$('#content').removeClass('add_indexing');
			$("#start_annotation").text('Start Annotation');
		} else {
			// add indexing so that we can activate canvas
			$('#content').addClass('add_indexing');
			$("#start_annotation").text('Stop Annotation');
		}				
	});
	// script to erase all annotations and reinitialize canvas
	$('#erase_all_annotations').on("click", function () {		
		if(confirm("Are you sure you want to remove all annotations?")){
			$('#canvas_container').html(''); //remove canvas from container
			$('#canvas_container').html('<canvas id="canvas" width=" '+ canvas_width + ' " height=" '+ canvas_height + ' " style="border: 1px solid #000;margin-top: 10px;"></canvas>'); //add it back to the container
			$('#canvas').sketch({defaultColor: "#000"});
			$('#content').removeClass('add_indexing');
			$("#start_annotation").text('Start Annotation');
		}
		else {
			return false;
		}		
	});
	// script to generate_string to store into database
	$("#generate_string").bind("click", function () {
		//Save this Base64 string to server.
		alert(canvas.toDataURL());
	});
});