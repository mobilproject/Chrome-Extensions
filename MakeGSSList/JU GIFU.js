
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="ipalum")
	 {
		console.log("Starting to bid in IPA or LUM");
		///////////////////////////////// CODE HERE ///////////////////////////////////////



for (var i=1;i<document.querySelectorAll("[bgcolor='#ffd7eb']").length;i++)
{
	var row = document.querySelectorAll("[bgcolor='#ffd7eb']")[i].getElementsByClassName("L_CELL");
	console.log(row[0].innerText.replace(/\s/g, ' ') + "," +row[1].innerText.replace(/\s/g, ' ') + 
"," +row[2].innerText.trim().replace(/\s/g, ' ') + "," +row[3].innerText.replace(/\s/g, ' ') + 
"," +row[4].innerText.replace(/\s/g, ' ') + "," +row[5].innerText.replace(',','').replace(/\s/g, ' ') + 
"," +row[6].innerText.replace(/\s/g, ' ') + "," +row[7].innerText.replace(/\s/g, ' ') + 
"," + "," + row[8].innerText.replace(/\s/g, ' ') + 
	"," +row[9].innerText.replace(/\s/g, ' ') + "," +row[10].innerText.trim().replace(',','').replace(/\s/g, ' ') + 
	"," +row[11].innerText.trim().replace(',','').replace(/\s/g, ' ') + "," +row[12].innerText.trim().replace(',','').replace(/\s/g, ' '));
	

}


		
		
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		
		
	 }
    
  }
);


