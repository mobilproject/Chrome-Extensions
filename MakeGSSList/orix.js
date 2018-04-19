//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="orix")
	 {
		console.log("Orix Rakusatsu list");
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

var row = 0;
var exbh;
var exbn;
var mann;
var mody;
var carn;
var shift;
var fuel;
var disp;
var vin;
var mil;
var col;
var eva;
var res;
var ask;
var bid;
var cor;
var cor2;
var bidc;


for (row=0; row<34; row++)
{
	
	exbh = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".exhibition_hall.find_list_item_height.find_list_padding_lr").children("span").text();
	exbn = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".exhibition_no.find_list_item_height.find_list_padding_lr").children("span").text();
	mann = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".management_no.find_list_item_height.find_list_padding_lr").children("span").text();
	mody = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".model_year.find_list_item_height.find_list_padding_lr").children("span").text();
	carn = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".car_name.find_list_padding_lr").children("span").children("a").children("span").text();
	
	shift = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".shift.find_list_item_height.find_list_padding_lr").children("span").text();
	fuel = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".fuel.find_list_item_height.find_list_padding_lr").children("span").text();
	disp = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".displacement.find_list_item_height.find_list_padding_lr").children("span").text();
	vin = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".vehicle_inspection.find_list_item_height.find_list_padding_lr").children("span").text();
	mil = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".mileage.find_list_item_height.find_list_text_right.find_list_padding_lr").children("span").text();
	col = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".color.find_list_item_height.find_list_padding_lr").children("span").text();
	eva = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".evaluation_points.find_list_item_height.find_list_padding_lr").children("span").text();
	res = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".result.find_list_item_height.find_list_text_right.find_list_padding_lr").children("span").text();
	ask = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".asking_price.find_list_item_height.find_list_text_right.find_list_padding_lr").children("span").text();
	bid = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".bid_price.find_list_item_height.find_list_text_right.find_list_padding_lr").children("span").text();
	cor = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".correction.find_list_item_height.find_list_text_center.find_list_padding_lr").children("span").text();
	cor2 = $(".findlist_line_white.findlist_line_height.parentrow"+row).children(".correction.find_list_item_height.find_list_text_center.find_list_padding_lr").children("span").text();
	
exbh = exbh.trim();
exbn = exbn.trim();
mann = mann.trim();
mody = mody.trim();
carn = carn.trim();
shift = shift.trim();
fuel = fuel.trim();
disp = disp.trim();
vin = vin.trim();
mil = mil.trim();
col = col.trim();
eva = eva.trim();
res = res.trim();
ask = ask.trim();
bid = bid.trim();
cor = cor.trim();
cor2 = cor2.trim();
bidc = bidc.trim();

	
	
console.log( exbh +
"," + exbn + 
"," + mann + 
"," + mody + 
"," + carn + 
"," + shift + 
"," + fuel +
"," + disp +
"," + vin +
"," + mil +
"," + col +
"," + eva +
"," + res +
"," + ask +
"," + bid +
"," + cor +
"," + cor2 +
"," + bidc +
",");
}


		
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		
		
	 }
    
  }
);


