//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="ju")
	 {
		console.log("JU rakusatusu list");
		///////////////////////////////// CODE HERE ///////////////////////////////////////
	





for (var i=0;i<$(".rowSelected").length;i++)
	
	{
		console.log(
					
					$("tr.rowSelected").eq(i).children(4)[0].innerText.replace(/\s/g, ',') +  "," + //Auction company
					"JAN_TRADING," +
					$("tr.rowSelected").eq(i).children(4)[2].innerText.replace(/\s/g, ' ') +  ",,," + //Lot
					
					$("tr.rowSelected").eq(i).children(4)[4].getElementsByTagName("div")[0].innerText.replace(/\s/g, '')  +  "," +  //Model
					$("tr.rowSelected").eq(i).children(4)[4].getElementsByTagName("div")[1].innerText.substr(0,$("tr.rowSelected").eq(i).children(4)[4].getElementsByTagName("div")[1].innerText.indexOf("	")).replace(/\s/g, ' ') +   "," + //Chassis
					$("tr.rowSelected").eq(i).children(4)[3].innerText.substr(1,3).replace(/\s/g, ' ') +   "," + //Year
					//$(".rowSelected")[i].getElementsByTagName("td")[3].getElementsByTagName("span")[1].innerText.replace(/\s/g, ' ') +  "," + //Month
					$("tr.rowSelected").eq(i).children(4)[7].innerText.substr(0,$("tr.rowSelected").eq(i).children(4)[7].innerText.indexOf("km")).replace(',', '').replace(/\s/g, '') +  "," +  //Mileage
					$("tr.rowSelected").eq(i).children(4)[11].innerText.substr(5).replace(/\s/g, '')+"000" //Price
					/*$(".rowSelected")[i].getElementsByTagName("td")[9].innerText.replace(/\s/g, ' ') +   "," + //Grade
					$("tr.rowSelected").eq(i).children(4)[5].innerText.replace(/\s/g, '') +  "," +  //Displacement
					
					$("tr.rowSelected").eq(i).children(4)[8].innerText.replace(/\s/g, '') +  "," +  //Color
					$("tr.rowSelected").eq(i).children(4)[9].innerText;.replace(/\s/g, '') +  "," +  //Transmission
					$("tr.rowSelected").eq(i).children(4)[10].innerText.replace(/\s/g, '') + "," +  //Rate
					*/
					);			
	}




		
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		
		
	 }
    
  }
);


