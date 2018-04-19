//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="taa")
	 {
		console.log("TAA CAA Rakusatsu list");
		///////////////////////////////// CODE HERE ///////////////////////////////////////
	
	
	
var tableRow = document.getElementsByClassName("favmove")[0].getElementsByTagName("tr");
//Child count 13 is the correct one
var tdb = $("td.blue"); 
for (var i=0; i<tableRow.length;i++)
{
	if (tableRow[i].childElementCount==13)
	{
		var cell = tableRow[i].getElementsByTagName("td");
		console.log(cell[1].innerText.trim().replace(/\s/g, ',') + "," + 
		cell[2].innerText.trim().replace(/\s/g, ' ') + "," + 
		cell[3].innerText.trim().replace(/\s/g, ' ') + "," + 
		cell[4].innerText.trim().replace(/\s/g, ' ') + "," + 
		cell[5].innerText.trim().replace(/\s/g, '-') + "," + 
		cell[6].innerText.trim().replace(/\s/g, ' ') + "," + 
		cell[7].innerText.trim().replace(/\s/g, ' ') + "," + 
		cell[8].innerText.trim().replace(/\s/g, ' ') + "," + 
		cell[9].innerText.trim().replace(/\s/g, ' ') + "," + 
		cell[10].innerText.trim().replace(/\s/g, ' ') + "," + 
		cell[11].innerText.trim().replace(/\s/g, ' '));
	
	}
	

}

for (var i=0;i<tdb.length;i++)
{
	console.log(tdb[i].getElementsByTagName("a")[0].innerText);
}


		
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		
		
	 }
    
  }
);



