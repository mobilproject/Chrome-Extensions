//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="honda")
	 {
		console.log("honda");
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		









	
	
var tr = $("img[src='./image/win-a-bit.gif']").parent().parent().parent();

for (var i=0;i<tr.length;i++)
{

console.log(
			
			tr[i].getElementsByTagName("span")[1].outerText.replace(/ +/g, " ").replace(/\s/g, ' ') + ",,,,,JAN_TRADING," +
			
			
			tr[i].getElementsByTagName("span")[0].outerText.replace(/ +/g, " ").replace(/\s/g, ' ') + ",,," +//lot
			tr[i].getElementsByTagName("td")[5].innerText.trim().replace(/ +/g, " ").replace(/\s/g, ' ') + "," +//model
			tr[i].getElementsByTagName("td")[6].innerText.trim().replace(/ +/g, "").replace(/\s/g, '').substr(0, tr[i].getElementsByTagName("td")[6].innerText.trim().replace(/ +/g, "").replace(/\s/g, ' ').indexOf(" ")) + "," +//chassis
			tr[i].getElementsByTagName("span")[2].outerText.trim().replace(/ +/g, " ").replace(/\s/g, ' ') + "," +//year
			//tr[i].getElementsByTagName("td")[7].innerText.trim().replace(/ +/g, "").replace(/\s/g, ' ') + "," +//color
			
			tr[i].getElementsByTagName("td")[8].innerText.trim().replace(/\s/g, ' ').replace(/ +/g, " ").substr(tr[i].getElementsByTagName("td")[8].innerText.trim().replace(/\s/g, ' ').replace(/ +/g, " ").indexOf(" ")) + "," + //mileage
			tr[i].getElementsByTagName("td")[10].innerText.trim().replace(/ +/g, " ").replace(/\s/g, ' ')
			);	
	
}


		
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		
		
	 }
    
  }
);


