//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="searchByLot")
	 {
		console.log("searchByLot");
		/////////////////////////////////////////////////////// CODE HERE /////////////////////////////////////////////////////
		


var list;

if (window.location.href.indexOf("exhibit")>0)
	{
		askUser();
	}
	else{
			open("https://www.iauc.co.jp/vehicle/search#exhibit", "_self");
	}
	


function askUser()
{
	
	
	
	
	console.log("asking for lot numbers");
list = prompt("Copy/Paste Lot numbers from spreadsheet");

if (typeof list == "string" && list.length>0)
	{
	list = list.replace(/\s/g,",");
	list = list.split(",");
	
	console.log(list);
		startSearch();
	}
	else if (typeof list == "object")
	{
		console.log("data input cancelled");
	}
	else  askUser();
}


function startSearch()
{
	for (var i=0;i<list.length;i++)
	{
		if (i>19)
		{
			$("#exhibit_numbers").append('<div class="number-text-box col-lg-2 col-md-2 col-sm-4 col-xs-6"> <input type="text" name="exhibitNum[]" maxlength="5" class="col-lg-10 col-md-10 col-sm-11 col-xs-11 number-search-input"></div>');	
		}
	$(".col-lg-10.col-md-10.col-sm-11.col-xs-11.number-search-input")[i].value=list[i];
	}
}




		
		
		/////////////////////////////////////////////////////// CODE HERE /////////////////////////////////////////////////////
	 }
    
  }
);


