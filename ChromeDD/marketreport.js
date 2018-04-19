//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="marketprice")
	 {
		console.log("market report");
		/////////////////////////////////////////////////////// CODE HERE /////////////////////////////////////////////////////
				
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

var injcode = `
// JavaScript Document

	var foo = 0;
	var foomain = 0;
	var myarray = [];
	var sd;
	var mytimer;
	var mytimer2;	
	var mychoice = false;
	
	var mysheet = "MARKET";

	
	

	
	
	function makeApiCall(ssdata) {
	foomain++;
	
	var params = {
		// The ID of the spreadsheet to update.
		spreadsheetId: '1xZYg9wPEbxfxYaX-fFAPImoUshqwBi0lebx9Q_nd3jI', // TODO: Update placeholder value.

		includeValuesInResponse: true,
		// The A1 notation of a range to search for a logical table of data.
		// Values will be appended after the last row of the table.
		range: 'MARKET!A1', // TODO: Update placeholder value.

		// How the input data should be interpreted.
		valueInputOption: 'USER_ENTERED', // TODO: Update placeholder value.

		// How the input data should be inserted.
		insertDataOption: 'INSERT_ROWS', // TODO: Update placeholder value.
	};

	
		var valueRangeBody = {
		// TODO: Add desired properties to the request body.		  
		
			
		
		"range": "MARKET!A1",
		"values": 
			ssdata
			,	
	"majorDimension": "ROWS"
	};

	var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
	request.then(function (response) {
		// TODO: Change code below to process the response object:
		//console.log(response.result);
		
		
		
		
	$("#currentCountAll")[0].innerText = foomain;
	
	
	
		myarray = [];
		
		if ($("a[title='Next→']").get(0)!=undefined)
	{
		$("a[title='Next→']").get(0).click();
		mytimer2 = setTimeout(function(){
		console.log("can go to the next page");
startLM();
		},3000);
	}
		else if ($("a[title='次へ→']").get(0)!=undefined)
	{
		$("a[title='次へ→']").get(0).click();
		mytimer2 = setTimeout(function(){
		console.log("can go to the next page");
startLM();
		},3000);
	}
		
	}, function (reason) {
		console.error('error: ' + reason.result.error.message);
	});
		
		
		
}



function initClient() {
	var API_KEY = 'AIzaSyA7l-htiQKiKk-kjrYgrVxONZkQ_FMm-QE'; // TODO: Update placeholder with desired API key.

	var CLIENT_ID = '926254455801-4k55c08h3qqooar21k5ece85ii1mmgpv.apps.googleusercontent.com'; // TODO: Update placeholder with desired client ID.

	// TODO: Authorize using one of the following scopes:
	//   'https://www.googleapis.com/auth/drive'
	//   'https://www.googleapis.com/auth/drive.file'
	//   'https://www.googleapis.com/auth/spreadsheets'
	var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

	gapi.client.init({
		'apiKey': API_KEY,
		'clientId': CLIENT_ID,
		'scope': SCOPE,

		'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
	}).then(function () {
		gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);


		updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
	});
}
function handleClientLoad() {
	gapi.load('client:auth2', initClient);
}

function updateSignInStatus(isSignedIn) {
	if (isSignedIn) {
		//makeApiCall();
		closeNav();
	} else {
		openNav();
	}
}

function handleSignInClick(event) {
	gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
	gapi.auth2.getAuthInstance().signOut();
}
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}


function printRow(i)
{
	
	var dl = $(".row_detail_link")[i].href.substr(0, $(".row_detail_link")[i].href.lastIndexOf("="));
	
	var newrl = allRows.eq(i).find("a")[0].href;
	sn = $("p.sitename").eq(i).text().trim();
	en = $("span.exhibitnum").eq(i).text();
	my = $("p.modelyear").eq(i).text();
	icm = $("p.importedCarModel").eq(i).text();
	cn = $("p.carname").eq(i).text().trim().replace(/\s/g, '-');
	gr = $("p.grade").eq(i).text().trim().replace(/\s/g, '-');
	//chassis code
	tp = $("p.type").eq(i).text();
	dp = $("p.displacement").eq(i).text();
	ip = $("p.inspection").eq(i).text();
	ml = $("p.mileage").eq(i).text().indexOf("千")>=0 ? $("p.mileage").eq(i).text().substr(0,$("p.mileage").eq(i).text().indexOf("千"))*1000 : $("p.mileage").eq(i).text();
	col = $("p.colorname").eq(i).text();
	shf = $(".list-shift-air").eq(i).find("p")[0].innerText;
	air = $(".list-shift-air").eq(i).find("p")[1].innerText;
	rt = $("p.rate").eq(i).text();
	eval = $("p.evaluation").eq(i).text();
	sp = $("p.startprice").eq(i).text().indexOf(".")>=0 ? $("p.startprice").eq(i).text().substr(0,$("p.startprice").eq(i).text().indexOf("."))*10000 : $("p.startprice").eq(i).text().replace(/,/g, "");
	ed = $("p.enddate").eq(i*2).text();
	et = $("p.endtime").eq(i*2).text();
	tv = $("p.transactionvalue").eq(i).text().indexOf(".")>=0 ? $("p.transactionvalue").eq(i).text().substr(0,$("p.transactionvalue").eq(i).text().indexOf("."))*10000 : $("p.transactionvalue").eq(i).text().replace(/,/g, "");
	var bidprice = localStorage.getItem(dl);
	
	if (mychoice)
		{
			

			

			
			
	
$.get(newrl,function (data){
									photo = $(data);	
									})
									.done(function() {
										
										code = getChassis(photo);
										


											
	
	//console.log(sn + "," + en + "," + bidprice + ",,, " + my + " " + icm + "," + cn + " " + gr + "," +  tp + " " + dp + "," + 	ip + "," + ml + "," + col + ","  + shf + "," + air  + "," + rt + " " + eval + "," + sp + "," + ed + " " + et + ", " + tv + ", " + code[1]);
	var myvalues = sn + "," + 
		en + "," + 
		bidprice + "," + 
		my + " " + 
		icm + "," + 
		cn + " " + 
		gr + "," +  
		code[0]  + "," + 
		tp + " " + 
		dp + "," + 
		ip + "," + 
		ml + "," + 
		col + "," + 
		shf + "," + 
		air  + "," + 
		rt + " " + 
		eval + "," + 
		sp + "," + 
		ed + " " + 
		et + ", " + 
		tv + ", " + 
		code[1];
	console.log(code[0]);
	foo++;
	$("#currentCount")[0].innerText = foo;
	myarray.push(myvalues.split(","));
	
	//console.log(foo++);
	});
	
	
		}
	else {
		//////////DATA without photos
		var myvalues = sn + "," + 
		en + "," + 
		my + " " + 
		icm + "," + 
		cn + " " + 
		gr + "," +  
		tp + " " + 
		dp + "," + 
		ip + "," + 
		ml + "," + 
		col + "," + 
		shf + "," + 
		air  + "," + 
		rt + " " + 
		eval + "," + 
		sp + "," + 
		ed + " " + 
		et + ", " + 
		tv;
	
	foo++;
	$("#currentCount")[0].innerText = foo;
	myarray.push(myvalues.split(","));
		
	}
	
	
	
	
	
}


function getChassis(p)
	{
		var chassis; 		
		chassis = p.find("#detail-name")[0].innerText.trim(); 
		chassis = chassis.substr(chassis.lastIndexOf(" ")).trim().replace(/\s/g,"_");
		chassis = chassis.substr(chassis.lastIndexOf("_")+1);
		
		var pics = "";
		imgArray = [];
		for (var i=0;i<p.find("img").length;i++)
							{
							if (p.find("img")[i].src.length>60)
								{
									//console.log(p.find("img")[i].src + " image source");
									pics = pics + ',=image("' + p.find("img")[i].src + '")';
								 }
							}
							
							imgArray.push(chassis);
							imgArray.push(pics);											
								
							return imgArray;	
							
					
		
		
		
		
	}

	



	
function startLM()
{
i=0;
foo = 0;
$("#currentCount")[0].innerText = foo;
$("#currentCountAll")[0].innerText = foomain;
	clickable = $(".startprice");
	allRows = $(".list-row");
        currenthtml = window.location.href;
        
	recGetInfo();

function recGetInfo()
{
	if (i<clickable.length)
	{
		mod = $(".type").eq(i).text();		
		printRow(i);
		i++;
		if (mychoice)
			{
				sd = setTimeout(function(){recGetInfo();},1000);	
			}
		else {
			recGetInfo();
		}
		
	}
	
	
else {
	
	//console.log(foo.length, foo[0], foo[1], foo[2]);
	makeApiCall(myarray);
	clearTimeout(mytimer);
	clearTimeout(mytimer2);
	clearTimeout(sd);
	//appendSpreadsheet();
}
	
	
	
}   
}
	

function checkPage()
{
	//console.log("timeout 3 secs");
						latesthtml = window.location.href;
					
					if(currenthtml !== latesthtml) 
					{
							//console.log("startLM");
						startLM();
					}

}

setTimeout(function(){
		
		if (confirm("Include images? Very slow")==true)
		{
			mychoice = true;
			startLM();
		}
else {
	mychoice = false;
	startLM();
}
	
	},1500);
`;



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
	pageScript.innerHTML = injcode;
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




	

		
		
		/////////////////////////////////////////////////////// CODE HERE /////////////////////////////////////////////////////
	 }
    
  }
);


