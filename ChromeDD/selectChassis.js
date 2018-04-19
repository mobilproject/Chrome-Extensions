//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	 if (rm=="selectChassis")
	 {
		console.log("selectChassis");
		
		/////////////////////////////////////////////////////// CODE HERE /////////////////////////////////////////////////////
		
		
		var chassisLoaded = [];
		restore_chassis();
		var ls = "";
//console.log(cars);
//$("input[data-name='RAV4']").prop( "checked", true);
function restore_chassis() {

chrome.storage.sync.get("language",function(language){
	
	ls = language["language"];
	var lsc = language["language"] + "selectedchassis";	
	
	chrome.storage.sync.get([lsc],function(items){
    // default values
	
	
     
	
		
		for (i in items[lsc]) {
          var storageItem = items[lsc][i].toUpperCase();
          
          chassisLoaded.push(storageItem);
        }
		
		
		
		if (chassisLoaded.length>0)
		{
			markMyModels(chassisLoaded);			
		}
		else 
		{
			alert("You have not selected any chassis codes");
		}
		
	
	
  });
  
});
}


function markMyModels(cars)
{
	


var iframe = document.getElementsByTagName("iframe")[0];



var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

var li = iframeDocument.getElementById("filter_content").getElementsByTagName("li");


//li[5].getElementsByTagName("label")[0].innerText;

//var vins = $(".zz ");

//console.log(li[5].getElementsByTagName("label")[0].innerText.trim());
//li[5].getElementsByTagName("label")[0].getElementsByTagName("input")[0].checked = true;

for (var i=0;i<li.length; i++)
{

	//$("input[value='"checkVin(li[i].getElementsByTagName("label")[0].innerText.trim())"']")[0].checked = true;

	if (checkVin(li[i].getElementsByTagName("label")[0].innerText.trim()))
	{
		console.log(checkVin(li[i].getElementsByTagName("label")[0].innerText));
		li[i].getElementsByTagName("label")[0].getElementsByTagName("input")[0].checked = true;
		//$(".zz ").eq(i).parent().click();
		
	}
	
}
function checkVin(v)
{ 
	for (var c=0;c<cars.length;c++)
	{ 
		if (cars[c]==v)
		{ 

			return true;
		}
	}
}
}



		
		
		/////////////////////////////////////////////////////// CODE HERE /////////////////////////////////////////////////////
		
	 }

    
  });


