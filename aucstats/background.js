chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {file: "content.js"});
   
   });

var myvar=0;
var pricedcars = [];
var initialized = false;

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {

    // do your things
	
	  
	  
	  
	console.log("execute command sent " + myvar);
	try{
		myvar++;
		//messeageSender("initialized " + initialized);
		chrome.tabs.executeScript(tabId, {file: "content.js"});
		
	}
	catch(e)
	{
		console.log(e.message);
	}
	
  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

	var rm = request.message;
	
	sendResponse( {message:rm + " received"} );	  
	messeageSender(rm);
	/*
	if(request.message === "modelSelect") {
      //console.log("this is background");	  
	  //call content
	  /*
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];    
	chrome.tabs.sendMessage(activeTab.id, {"message": "Model Selector"}, function(response) {console.log(response.message);});	
  });
	*/
	
	
	  
	  
    //}
  }
);

function messeageSender(x)
{
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];    
	chrome.tabs.sendMessage(activeTab.id, {"message": x}, function(response) {console.log(response.message);});	
  });
	
	 // sendResponse( {message:request.message + " rec"} );	  
	
}

