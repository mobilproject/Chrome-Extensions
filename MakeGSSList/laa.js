//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="laa")
	 {
		console.log("LAA Rakusatsu list");
		///////////////////////////////// CODE HERE ///////////////////////////////////////
	



console.log($(".list_bid.list_MyBid").eq(0)[0].getElementsByTagName("td")[0]);
for (var i=0;i<100;i=2+i ) 
{

//console.log($(".list_bid.list_MyBid").eq(i)[0].innerText + " " + $(".list_bid.list_MyBid").eq(i+1)[0].innerText);
}



		
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		
		
	 }
    
  }
);


