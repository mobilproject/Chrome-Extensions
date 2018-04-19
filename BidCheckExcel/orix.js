//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="orix")
	 {
		console.log("Orix Bid list");
		///////////////////////////////// CODE HERE ///////////////////////////////////////
	
	
/*
exbh;
exbn;
mann;
mody;
carn;
shift;
fuel;
disp;
vin;
mil;
col;
eva;
res;
ask;
bid;
cor;
cor2;
bidc;
*/


var exbn;
var bid;
var carn;

for (row=0; row<$(".ListRowStyle").length; row++)
{
	
	exbn = $(".ListRowStyle")[row].children[0].children[0].text;
	bid = $(".ListRowStyle")[row].children[18].innerText;
	carn = $(".ListRowStyle")[row].children[3].innerText;

exbn = exbn.trim();
bid = bid.trim();

	
	
console.log(exbn + ", " + bid + ", " + carn);

if ($(".ListAltRowStyle")[row]!==undefined)
{
	exbn = $(".ListAltRowStyle")[row].children[0].children[0].text;
	bid = $(".ListAltRowStyle")[row].children[18].innerText;
	carn = $(".ListAltRowStyle")[row].children[3].innerText;

exbn = exbn.trim();
bid = bid.trim();

	
	
console.log(exbn + ", " + bid + ", " + carn);
}



}


		
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		
		
	 }
    
  }
);


