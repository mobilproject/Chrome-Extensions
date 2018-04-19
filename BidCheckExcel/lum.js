chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from lum"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="lum")
	 {
		console.log("Making Excel from LUM Bid list");
		///////////////////////////////// CODE HERE ///////////////////////////////////////


for (var i = 0; i<$(".list_height_d_B0602010").length;i++)
{
	
		console.log(
		
		$(".list_height_d_B0602010")[i].children[0].innerText.trim() + "," + //bid price
		$(".list_height_d_B0602010")[i].children[3].innerText.trim() + "," + //lot number
		$(".list_height_d_B0602010")[i].children[8].innerText.trim() + "," + //year
		$(".list_height_d_B0602010")[i].children[4].innerText.trim() + "," + //location
		$(".list_height_d_B0602010")[i].children[6].innerText.trim() + "," + //car name
		$(".list_height_d_B0602010")[i].children[7].innerText.trim()//chassis		
		
		);
		
		
	
	
	
	}

		
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		
		
	 }
    
  }
);


