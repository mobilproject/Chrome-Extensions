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

