chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="uss")
	 {
		console.log("USS Rakusatsu list");
		///////////////////////////////// CODE HERE ///////////////////////////////////////
	


$("tbody[id]").each(function(){console.log($(this).text().replace(/\s+/g,","));});

//$("tbody[id]").each(function(){console.log($(this).text().replace(/\s+/g,","));});
//$(".kingaku")[0].innerText.replace(/\s/g,","); //kingaku
//$(".hyoka")[0].innerText.substr($(".hyoka")[0].innerText.indexOf(" ")); //rate
		
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		
		
	 }
    
  }
);