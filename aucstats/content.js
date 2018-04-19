
///////////////////////////////////////////////////////////////////////////////////////

var imgArray = [];
var currentCar;
var myWindow;
var lr=document.getElementsByClassName("list-row");
var info;
var pageUrl = window.location;
var currentPage;

var mainurl = 'https://inventivesolutionste.ipage.com/javascripts/cdd/iaucdatatest.js';
//'https://inventivesolutionste.ipage.com/javascripts/cdd/carpageopen2.js';
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

precheck();


// listen for changes

function precheck()
{
	
	if (pageUrl.href.match(/asnet/g)!=null)
		{
			console.log("old version or asnet");
			/*
			//http://inventivesolutionste.ipage.com/javascripts/cdd/asnetdirectsystem.js
			pageScriptS = window.document.createElement('script');
			pageScriptS.type = 'text/javascript';
			pageScriptS.async = true;
			pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/asnetdirectsystem.js';
			document.getElementsByTagName('head')[0].appendChild(pageScriptS);
			

		}
		else if (pageUrl.href.match(/abtrading/g)!=null)
		{
			pageScriptS = window.document.createElement('script');
			pageScriptS.type = 'text/javascript';
			pageScriptS.async = true;
			pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/abtrading.js';
			document.getElementsByTagName('head')[0].appendChild(pageScriptS);
		}
		else if (pageUrl.href.match(/preint/g)!=null)
		{
			pageScriptS = window.document.createElement('script');
			pageScriptS.type = 'text/javascript';
			pageScriptS.async = true;
			pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/asnetdirect.js';
			document.getElementsByTagName('head')[0].appendChild(pageScriptS);
			*/
		}
		else if(window.location.href.indexOf("vehicle/search")>=0 && window.location.href.indexOf("exhibit")>=0)
		{
			console.log("pager loader initiated");
			pageScriptS = window.document.createElement('script');
			pageScriptS.type = 'text/javascript';
			pageScriptS.async = true;
			pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/advanced_scraperx.js';
			document.getElementsByTagName('head')[0].appendChild(pageScriptS);
		}
	else{
		
	
		//start();
	
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
	
	if ($("script[src=mainurl]").length==0 && pageUrl.href.match(/vehicle\/mylist|vehicle\/carlist/g)!=null || $("script[src=mainurl]").length==0 && pageUrl.href.indexOf("iauc.co.jp/detail")>0) 
		{
//Create elements
	
	
		var styleNode = document.createElement("style");
		styleNode.innerHTML = "#signin-button{margin-bottom:100px;     margin-left: 20px;} #signout-button{margin-bottom:100px;     margin-left: 20px; } ";
		document.head.appendChild(styleNode);
		pageScript = window.document.createElement('script');
		pageScript.type = 'text/javascript';
		pageScript.async = true;
		pageScript.charset="UTF-8";
		pageScript.src = mainurl;
		document.getElementsByTagName('head')[0].appendChild(pageScript);
	
	
//console.log("executed " + $("script[src='https://inventivesolutionste.ipage.com/javascripts/cdd/carpageopen.js']").length);	

			
		
		
		$("body").append('<button id="signin-button" onclick="handleSignInClick()" style="{"margin-bottom":"100px"}">Sign in</button>');
		$("body").append('<button id="signout-button" onclick="handleSignOutClick()">Sign out</button>');
	
	
	
	
//END of if myWindow.location.href==undefined
		}
		else {
			pageScriptS = window.document.createElement('script');
			pageScriptS.type = 'text/javascript';
			pageScriptS.async = true;
			pageScriptS.setAttribute('defer', '');
			pageScriptS.setAttribute('onload', 'this.onload=function(){refreshCode()};');
			pageScriptS.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
			pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/codestarter.js';
			document.getElementsByTagName('head')[0].appendChild(pageScriptS);
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




