//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="zero")
	 {
		console.log("Zero Rakusatsu list");
		///////////////////////////////// CODE HERE ///////////////////////////////////////
	



for (var i=0;i<$(".findlist_line_height").length;i++)
{	
	console.log( 
	
	/*
		$(".findlist_line_height")[i].getElementsByTagName("div")[0].innerText+ ",JAN_TRADING,"+ //Auction site
		
		$(".findlist_line_height")[i].getElementsByTagName("div")[1].innerText+ ",,,"+  //Lot
		//$(".findlist_line_height")[i].getElementsByTagName("div")[2].innerText+ ","+  //Kanri bango
		$(".findlist_line_height")[i].getElementsByTagName("div")[4].innerTextreplace(/\s/g, ',')+ ","+  //Carname, Shatai bango
		$(".findlist_line_height")[i].getElementsByTagName("div")[3].innerText+ ","+  //Year model		
		$(".findlist_line_height")[i].getElementsByTagName("div")[9].innerText+ ","+  //KM
		$(".findlist_line_height")[i].getElementsByTagName("div")[12].innerText  + //Price	
		/*
		$(".findlist_line_height")[i].getElementsByTagName("div")[5].innerText+ ","+  //Trans
		$(".findlist_line_height")[i].getElementsByTagName("div")[6].innerText+ ","+  //Fuel type
		$(".findlist_line_height")[i].getElementsByTagName("div")[7].innerText+ ","+  //CC
		$(".findlist_line_height")[i].getElementsByTagName("div")[8].innerText+ ","+  //Shaken		
		$(".findlist_line_height")[i].getElementsByTagName("div")[10].innerText+ ","+  //Color
		$(".findlist_line_height")[i].getElementsByTagName("div")[11].innerText+ ","+  //Rate
		*/
		
	
		// Auction site
		$("div.exhibition_hall")[i+1].innerText.replace(/\s/g, '')+",JAN_TRADING,"+    
		//Lot no
		$("div.exhibition_no")[i+1].innerText.replace(/\s/g, '') + ","+ 
		$(".input-element.price-k")[i].innerText.replace(/\s/g, '') +",,"+
		//car name
		$("div.car_name")[i+1].innerText.replace(/\s/g, ' ')+","+ 
		//year
		$("div.model_year")[i+1].innerText.replace(/\s/g, '')+","+ 
		//mileage
		$("div.mileage")[i+1].innerText.replace(/\s/g, '')+","+ 
		//price
		$("div.result")[i+1].innerText.replace(/\s/g, '')
		
		
		/*
		$("div.shift")[1].innerText; //shift
		$("div.fuel")[1].innerText; //fuel
		$("div.displacement")[1].innerText; //cc
		
		$("div.color")[1].innerText; //color
		$("div.evaluation_points")[1].innerText; //rate
		*/
		
		
		
	);
}


		
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		
		
	 }
    
  }
);