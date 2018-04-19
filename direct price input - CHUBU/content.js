///////////////////////////////////////////////////////////////////////////////////////
/*
FROM GOOGLE:

Programmatic injection
Inserting code into a page programmatically is useful when your JavaScript or CSS code shouldn't be injected into every single page that matches the pattern — for example, 
if you want a script to run only when the user clicks a browser action's icon.
To insert code into a page, your extension must have cross-origin permissions for the page. 
It also must be able to use the chrome.tabs module. You can get both kinds of permission using the manifest file's permissions field.

Once you have permissions set up, you can inject JavaScript into a page by calling tabs.executeScript. To inject CSS, use tabs.insertCSS.

The following code (from the make_page_red example) reacts to a user click by inserting JavaScript into the current tab's page and executing the script.

///////////////////////////////////
If you want to inject the code only sometimes, use the permissions field instead, as described in Programmatic injection.

"permissions": [ "tabs", "activeTab", "https://*.iauc.co.jp/*", "http://*.asnet2.com/*",  "*://*.ipage.com/*", "cookies", "storage" ]

We comply with google guidelines and do not intend to harm anyone. This extension is to enhance the missing features in an existing website. Only used by our customers consisting of around 50-60 people.
Only a selected, closed group of users can use this extension.
*/

var imgArray = [];
var currentCar;
var myWindow;
var lr=document.getElementsByClassName("list-row");
var info;
var pageUrl = window.location;
var currentPage;

//production version
var mainurl = 'https://inventivesolutionste.ipage.com/javascripts/chubu/iauc_starter.js';
//developmnent
//var mainurl = 'https://inventivesolutionste.ipage.com/javascripts/chubu/iauc_test.js';
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
					precheck();
				}
	}
	catch (e)
	{
		var options = new Object;
		options.autostart = "yes";
			chrome.storage.sync.set({"options":options}, function() {
    
	precheck();
						
		});
	}
			});




// listen for changes

function precheck()
{
	
	if (pageUrl.href.match(/asnet/g)!=null)
		{
			console.log("old version or asnet");
			
			//http://inventivesolutionste.ipage.com/javascripts/chubu/asnetdirectsystem.js
			pageScriptS = window.document.createElement('script');
			pageScriptS.type = 'text/javascript';
			pageScriptS.async = true;
			pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/chubu/asnetdirectsystem.js';
			document.getElementsByTagName('head')[0].appendChild(pageScriptS);
		}
	
		else if (pageUrl.href.match(/preint/g)!=null)
		{
			// ASNET working too slow, project is about to be abandoned
			pageScriptS = window.document.createElement('script');
			pageScriptS.type = 'text/javascript';
			pageScriptS.async = true;
			pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/chubu/asnetdirect.js';
			document.getElementsByTagName('head')[0].appendChild(pageScriptS);
		}
		else if(window.location.href.indexOf("vehicle/search")>=0 && window.location.href.indexOf("exhibit")>=0)
		{
				//empty script, frozen project
			console.log("pager loader initiated");
			pageScriptS = window.document.createElement('script');
			pageScriptS.type = 'text/javascript';
			pageScriptS.async = true;
			pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/chubu/advanced_scraper.js';
			document.getElementsByTagName('head')[0].appendChild(pageScriptS);
		}
	else{
		
	
		start();
	
	}
}


function start()
{	
	
	//"http://www14.asnet2.com"
	//"https://www.iauc.co.jp"
	if (window.origin == "https://www.iauc.co.jp")
	{
		console.log("https://www.iauc.co.jp", "window origin");
	}
	else if (window.origin.indexOf("asnet2")>0)
	{
		console.log("http://www14.asnet2.com", "window origin");
		
		// my list
		//document.getElementsByClassName("chk mya")[0].firstChild;
		//document.getElementsByClassName("chk mya")[0].firstChild.click();
		
		//detail page 
		//
		//document.getElementsByTagName("a")[50].outerHTML.split('"')[1];
		
		//Style
		/*
		var st = document.createElement("style");
st.innerHTML = 'div#panel_fr div.panel {     height:283px;}';
document.head.appendChild(st);
		*/
		
		
		
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
		
				
	
	
//console.log("executed " + $("script[src='https://inventivesolutionste.ipage.com/javascripts/chubu/carpageopen.js']").length);	

			
		
		
		//$("body").append('<button id="signin-button" onclick="handleSignInClick()" style="{"margin-bottom":"100px"}">Sign in</button>');
		//$("body").append('<button id="signout-button" onclick="handleSignOutClick()">Sign out</button>');
	
	
	
	
//END of if myWindow.location.href==undefined
		}
		else {
			pageScriptS = window.document.createElement('script');
			pageScriptS.type = 'text/javascript';
			pageScriptS.async = true;
			pageScriptS.setAttribute('defer', '');
			pageScriptS.setAttribute('onload', 'this.onload=function(){refreshCode()};');
			pageScriptS.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
			pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/chubu/codestarter.js';
			document.getElementsByTagName('body')[0].appendChild(pageScriptS);
			console.log("script starter added");
		}
	}
	
	//console.log(window.location.href + "<br>" + currentPage);

    
	
	


////////////////////////////////
////////////////////////////////

/*var actualCode = ` function localJsonpCallback(json)
		{
			alert(json.message);
		}
		/////////////
$(document).ready(function(){
				$('body').on('change','.page-select', function() {
		  setTimeout(function() {   
		$(".list-row .list-body-buttons").each(function() {
			// $(this).html('<input type="text" value="" class="jans_bid_price" style="width:120px; height:25px;margin-top:3px;" />');
		});
		}, 7000);
		
		})
});

		/////////////
//var someFixedRandomValue = ${ Math.random() };
`;

//var script = document.createElement('script');
//script.textContent = actualCode;
//(document.head||document.documentElement).appendChild(script);
//script.remove();
*/
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