// JavaScript Document
document.addEventListener('DOMContentLoaded', function () {
	console.log("start_pulse");
	start_pulse();
});

var update_needed;

function start_pulse() {

	//pulsate copy paste setInterval
	setInterval(function () {
		if($("#sync").css("transform")=="matrix(0, 0, 0, 0, 0, 0)")
			{				
			$("#sync").css("transform", "scale(1,1)");
			$("#sync").css("padding-top", "38px");
			$("#sync").css("font-size", "x-large");
			}
		
		if (update_needed) {			
			if ($("#sync").css("box-shadow") == "rgb(39, 255, 0) 0px 0px 5px 5px") {
				$("#sync").css("box-shadow", "rgb(39, 255, 0) 0px 0px 0px 0px");
				

			} else {
				$("#sync").css("box-shadow", "rgb(39, 255, 0) 0px 0px 5px 5px");
				
				
			}
		} else {
			//remove the synch button
			stop_pulse();

		}
	}, 500);
}
function stop_pulse() {
	//set css values to hide the synch button
	
	$("#sync").css("transform", "scale(0,0)");	
	$("#sync").css("padding", "0px");
	$("#sync").css("font-size", "0px");
	$("#sync").css("box-shadow", "rgb(39, 255, 0) 0px 0px 0px 0px");
}