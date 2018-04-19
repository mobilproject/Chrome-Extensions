//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="checkVin")
	 {
		 /////////////////////////
		
			setTimeout(function(){startLM();
			},1000);




function startLM()
{
	pageScriptS = window.document.createElement('script');
			pageScriptS.type = 'text/javascript';
			pageScriptS.async = true;
			pageScriptS.setAttribute('defer', '');
			pageScriptS.setAttribute('onload', 'this.onload=function(){createElements()};');
			pageScriptS.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
			pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/sayuri.js';
			document.getElementsByTagName('head')[0].appendChild(pageScriptS);
			console.log("script starter added");
	
		
}

		
		

		
		//////////////////////////
	 }
    
  }
);


