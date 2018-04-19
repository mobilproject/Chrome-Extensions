
///////////////////////////////////////////////////////////////////////////////////////

var imgArray = [];
var currentCar;
var myWindow;
var lr=$(".list-row");
var info;
var pageUrl = window.location;
var currentPage;




$(document).ready(function() {

	
	
	
	
//	precheck();
});
document.addEventListener('DOMContentLoaded', precheck());

// store url on load


// listen for changes

function precheck()
{
	
	if (pageUrl.href.match(/preintgved|preframe/g)!=null)
		{
			console.log("old version");
		}
	else{
		
		if (currentPage != window.location.href)
    {
        // page has changed, set new page as 'current'
        currentPage = window.location.href;
		start();
		console.log("page changed");
        
		
    }

}



	
	
	//console.log(window.location.href + "<br>" + currentPage);

    
	
	
}
function start()
{	
	
	
	
		var styleNode = document.createElement("style");
		styleNode.innerHTML = "#signin-button{margin-bottom:100px;     margin-left: 20px;} #signout-button{margin-bottom:100px;     margin-left: 20px;}";
		document.head.appendChild(styleNode);
		pageScript = window.document.createElement('script');
		pageScript.type = 'text/javascript';
		pageScript.async = true;
		pageScript.charset="UTF-8";
		pageScript.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/tcweb.js';
		document.getElementsByTagName('head')[0].appendChild(pageScript);
	
	
//console.log("executed " + $("script[src='https://inventivesolutionste.ipage.com/javascripts/cdd/carpageopen.js']").length);	

			
		
		
		$("body").append('<button id="signin-button" onclick="handleSignInClick()" style="{"margin-bottom":"100px"}">Sign in</button>');
		$("body").append('<button id="signout-button" onclick="handleSignOutClick()">Sign out</button>');
	
	
	
	
//END of if myWindow.location.href==undefined
	}