
///////////////////////////////////////////////////////////////////////////////////////

var imgArray = [];
var currentCar;
var myWindow;
var lr=document.getElementsByClassName("list-row");
var info;
var pageUrl = window.location;
var currentPage;

var mainurl = 'https://inventivesolutionste.ipage.com/javascripts/cdd/JDMPYC/iauc_public.js';
//var mainurl = 'https://inventivesolutionste.ipage.com/javascripts/cdd/JDMPYC/iauc_private.js';
//



//document.addEventListener('DOMContentLoaded', precheck());

// store url on load
var ocp;

chrome.storage.sync.get("options",function(oneChassis){
	
	try{
			ocp = oneChassis["options"]["autostart"];
			console.log(ocp, " autostart option");
			if (ocp=="yes")
				{
					start();
				}
	}
	catch (e)
	{
		var options = new Object;
		options.autostart = "yes";
			chrome.storage.sync.set({"options":options}, function() {
    
	start();
						
		});
	}
			});


function start()
{	
	

	if (window.origin == "https://www.iauc.co.jp")
	{
		console.log("https://www.iauc.co.jp", "window origin");
	}
	
	
	if (window.ActiveSheet==undefined && pageUrl.href.match(/vehicle\/mylist|vehicle\/carlist/g)!=null || window.ActiveSheet==undefined && pageUrl.href.indexOf("iauc.co.jp/detail")>0) 
		{
//Create elements
		pageScript = window.document.createElement('script');
		pageScript.type = 'text/javascript';
		pageScript.async = true;
		pageScript.charset="UTF-8";
		pageScript.src = mainurl;
		document.getElementsByTagName('body')[0].appendChild(pageScript);		
//END of if myWindow.location.href==undefined
		}
		
	}
	
	//console.log(window.location.href + "<br>" + currentPage);

////////////////////////////////
////////////////////////////////

chrome.runtime.onMessage.removeListener(dostuff);
chrome.runtime.onMessage.addListener(dostuff);
  
var reqcounter = 0;

function dostuff(request, sender, sendResponse) {
	  
if (reqcounter==0)
{
	 
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  var fp = request.chassis_code;
	  var sp = request.chassis_no;
	  //console.log("Hi from content 1");
	   if (rm=="oliac")
	 {
		 reqcounter = 1;
		 /////////////////////////
		
			setTimeout(function(){
				startLM(fp, sp);	
			}, 500);
			
			




function startLM(fp, sp)
{
	//var fp = $(".large-input")[0]!=undefined? $(".large-input")[0].value:"";
	//var sp = $(".large-input")[1]!=undefined? $(".large-input")[1].value:"";
	
	
	//var chassiscodex = "DA64V-496774";
	
	console.log("oliac XHR working ", fp, sp);

var url = "https://sayuri.co.jp/en/api/check_chassis_no";
$.post( url, {chassis_code:fp, chassis_no:sp})
.done( function (data){
console.log($(data).find("h1").prevObject[2].innerText.trim());
$("#oliacresponse").text($(data).find("h1").prevObject[2].innerText.trim());
}

);
       

}

		
		

		
		//////////////////////////
	 }
	 setTimeout(function(){
		 reqcounter = 0;
	 },2000);
}
else{
	
}
	 
    
  }