chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  
});

// This block is new!
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
	
	  sendResponse( {message:request.message + " rec"} );	  
	
}