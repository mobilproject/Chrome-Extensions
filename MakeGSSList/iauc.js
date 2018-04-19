//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="iauc")
	 {
		//console.log("iauc");
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		
var chassis = new Object;
var bet;
var cars = new Object;
var array = [];
var arrayh4 = [];
var arrayltp = [];
var arraylth4 = [];
var currenthtml;
var latesthtml;
var p;
var cmodel;
var mn;
var m;
var t;
var at;
var si;
var code;
var i=0;

var mod;
var sp;
var nb;
var cf;
var clickable;
var allRows;

var imageList;
var imgArray = [];




injectScript();



		
function injectScript()
{
	document.styleSheets[0].insertRule(".overlay { height: 100%; width: 0;    position: fixed;    z-index: 100000000;    top: 0;    left: 0;    background-color: rgb(0,0,0);    background-color: rgba(0,0,0, 0.9);    overflow-x: hidden;    transition: 0.5s;}", 1);
		document.styleSheets[0].insertRule(".overlay-content {    position: relative;    top: 25%;    width: 100%;    text-align: center;    margin-top: 30px;}", 1);
		
		document.styleSheets[0].insertRule(".overlay a {    padding: 8px;    text-decoration: none;    font-size: 36px;   color: red;  display: block;    transition: 0.3s;}", 1);
		
		document.styleSheets[0].insertRule(".overlay a:hover, .overlay a:focus {    color: grey }", 1);
		
		document.styleSheets[0].insertRule(".overlay .closebtn {    position: absolute;    top: 20px;    right: 45px;    font-size: 60px;}", 1);
		
		document.styleSheets[0].insertRule(".overlay a {font-size: 20px}", 1);
		document.styleSheets[0].insertRule(".overlay .closebtn {    font-size: 40px;    top: 15px;    right: 35px;  }", 1);
		
		document.styleSheets[0].insertRule(".mycheckbox{margin-right:3px; ", 1);
		document.styleSheets[0].insertRule(".newcar{ border: 4px solid yellowgreen !important;     border-radius: 10px;}", 1);
		document.styleSheets[0].insertRule(".visited{ border: 4px solid orange !important;    border-radius: 10px;}", 1);
		
		
		document.styleSheets[0].insertRule(".mytype { font-size: large; margin-top: 5px; font-weight: bold;}", 1);
		
		
 

		
		
		

		var divel = document.createElement('div');

		divel.id = "myNav";
		divel.setAttribute("class", "overlay");
		divel.innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';


		document.body.insertBefore(divel, document.body.firstChild);
		var divel2 = document.createElement('div');


		divel2.setAttribute("class", "overlay-content");
		divel2.innerHTML = '<a href="#" onclick="handleSignInClick()">Sign in</a></br></br> <p id="notice1" style="color:deepskyblue;">You must sign in to your google account to use all features</p> </br> <p  style="color:lawngreen">The application is on development stage, you also have to join the google group. </p> <br> <p style="color:lawngreen"> Required only once</p> </br> <a id="mygroup" href="https://groups.google.com/forum/#!forum/risky-access-by-unreviewed-apps">Join the group</a>';

		
	
	pageScript = window.document.createElement('script');
	pageScript.type = 'text/javascript';
	pageScript.async = true;
	pageScript.src = "https://inventivesolutionste.ipage.com/javascripts/cdd/iaucgss.js";
	document.getElementsByTagName('head')[0].appendChild(pageScript);
	//document.body.appendChild(pageScript);
	
	document.getElementById('myNav').appendChild(divel2);
	
	pageScriptS = window.document.createElement('script');
	pageScriptS.type = 'text/javascript';
	pageScriptS.async = true;
	pageScriptS.setAttribute('defer', '');
	pageScriptS.setAttribute('onload', 'this.onload=function(){};handleClientLoad()');
	pageScriptS.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
	pageScriptS.src = 'https://apis.google.com/js/api.js';
	document.getElementsByTagName('head')[0].appendChild(pageScriptS);
	

	
	
setTimeout(function(){
	
	
	
	
},1000);
	
	
	
	
	
	
	
	
	var txt1 = `<div id="credo" style="float: left; position:fixed; border-radius:8px; display: grid;   margin-top:-50px; margin-left: -250px;    z-index: 1000000;    background-color: cadetblue; padding: 5px; width:230px;">
<span  style="font-family: sans-serif;    font-size: large;    color: cornsilk; border-radius:5px;">Current progress:</span>

<span id="currentCount" style="font-family: sans-serif; text-align: center; font-size: 3em;">0</span>
<span  style="font-family: sans-serif;    font-size: large;    color: cornsilk; border-radius:5px;">Total pages sent:</span>

<span id="currentCountAll" style="font-family: sans-serif; text-align: center; font-size: 3em;">0</span>

</div>



</div>`;
	
	$("#error_view_area").html(txt1);
	
}




	





		
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		
		
	 }
    
  }
);


