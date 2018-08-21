
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="oliac")
	 {
		 /////////////////////////
		
			setTimeout(function(){
				startLM();
			},500);




function startLM()
{
	var fp = $("#tdata1 input").val();
	var sp = $("#tdata2 input").val();
	
	
	//var chassiscodex = "DA64V-496774";
	
	console.log("oliac XHR working ");

var url = "https://sayuri.co.jp/en/api/check_chassis_no";
$.post( url, {chassis_code:fp, chassis_no:sp})
.done( function (data){
console.log($(data).find("h1").prevObject[2].innerText.trim());
$("#oliacresponse").text($(data).find("h1").prevObject[2].innerText.trim());
}

);
       

}

		
		

		
		//////////////////////////
	 }
	 
    
  }
);