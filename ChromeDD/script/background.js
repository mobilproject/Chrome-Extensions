chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  
});

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    
	console.log(request.message, sender.message);
      
    if (request.message == "oliac")
	{
		var rm = request.message;
	}      
	
	sendResponse( {message:rm + " received from External Messaging"} );	  
	messeageSender(rm);
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
	
	  //sendResponse( {message:request.message + " rec"} );	  
	
}

/*
REQUEST FROM BROWSER

// The ID of the extension we want to talk to.
var editorExtensionId = "imnafijjefhciebgkkkmniiikggddmdk";

// Make a simple request:
chrome.runtime.sendMessage(editorExtensionId, {message: "oliac"},
  function(response) {
    console.log(response.messsage);
      
  });
*/