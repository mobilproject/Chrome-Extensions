//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="mirive")
	 {
		console.log("Mirive Rakusatsu list");
		///////////////////////////////// CODE HERE ///////////////////////////////////////
	

var rows = $(".clickable");

for (var i=0;i<rows.length;i++)
{
	var aucnum = rows[i].getElementsByTagName("td")[0].innerText; 
	
	console.log(
	
	
	aucnum.substring(aucnum.indexOf("第")+1,aucnum.indexOf("回")) + "," + 
	rows[i].getElementsByClassName("number")[0].innerText + "," + //lot 
	rows[i].getElementsByClassName("table-name-l car_name")[0].innerText.replace(/\s/g," ").trim()+ "," + //model
	rows[i].getElementsByTagName("td")[3].getElementsByTagName("div")[1].innerText.replace(/\s/g," ").trim()+ "," + //interior exterior;
	rows[i].getElementsByTagName("td")[4].getElementsByTagName("div")[1].innerText.replace(/\s/g," ").trim()+ "," + //year;
	rows[i].getElementsByTagName("td")[4].getElementsByTagName("div")[3].innerText.replace(/\s/g," ").trim()+ "," + //chassis;
	rows[i].getElementsByTagName("td")[5].getElementsByTagName("div")[1].innerText.replace(/\s/g," ").trim()+ "," + //KM;
	rows[i].getElementsByTagName("td")[6].getElementsByTagName("div")[0].innerText.replace(/\s/g," ").trim()+ "," + //Shift;
	rows[i].getElementsByTagName("td")[7].getElementsByTagName("div")[0].innerText.replace(/\s/g," ").trim()+ "," + //Color;
	rows[i].getElementsByTagName("td")[9].getElementsByTagName("strong")[0].innerText.replace(/\s/g," ").trim()//Price;
	
	);	
}






		
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		
		
	 }
    
  }
);


