//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="checkVin")
	 {
		 /////////////////////////
		console.log("checkVin");
		var chassis = new Object;
var chassisold = new Object;
var bet;
var beto;
var cf;
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
var oldCarList = [];
var retryCount = 0;

//beginning of 2009
chassisold = {
"ZRT260":[["3052242","3063422"]],
"NZT260":[["3044515","3060421"]],
"NHW20":[["3524649","3560617"],["7883767","7894049"]],
"AK12":[["929644","955331"]],
"Z12":[["015300","054869"],["070001","080731"]],

"SC11":[["148482","152254"],["200004","210230"],["250001","251509"]],
"C11":[["231667","237715"],["300007","326157"],["350001","353898"]],
"DE3FS":[["180175","205700"],["250001","271019"]],
"E11":[["363179","393692"],["450001","480592"]],

"GB3":[["1052459","1067827"],["1100001","1156822"],["5000561","5000821"],["5100001","5100419"]],

"GE6":[["1176445","1284777"],["1300001","1323364"],["3000001","3000049"],["8000721","8000942"],["8100001","8100042"]],
"GE7":[[]],
"GE8":[[]],
"GE9":[[]],
"GP1":[[]],

"K13":[["000001","000076"]],
"KGC10":[["0234755","0309395"]],
"QNC10":[["0105121","0113972"]],
"KGC30":[["0001001","0001014"]],//
"KSP90":[["5137557","5172062"],["2078117","2100390"]],//
"NCP51":[["0214998","0234805"]],//
"NCP58":[["0070865","0075743"]],//
"NCP81":[["5087759","5115908"]],//

"NGC30":[["0001001","0001005"]],//
"NNP10":[["5043703","5057593"]],//
"NCP100":[["0131939","0152126"],["2000001","2000005"]],//
"NCZ20":[["0132584","0139359"]],//

"SCP90":[["5110395","5145187"],["2074506","2095095"]],//
"SCP92":[["1054946","1068319"]],//
"SCP100":[["0059824","0083074"],["2000001","2000008"]],//
"VAY12":[["030888","035877"],["510057","510531"],["600041","600114"]],
"VY12":[["051787","066259"],["510192","511799"],["600072","601030"]],//
"Y12":[["102666","114034"]],//
"ACA31":[["5041564","5046166"]],//

"ZGM10":[["0001001","0006129"]],//
"ZVW30":[["0001041","0112289"],["1000083","1144184"],["5000033","5109580"]],//
"ZVW40":[["3000101","3000245"]],//
"ZVW41":[["3000101","3000245"]],//

"ZGE20":[["0001014","0049863"]],//
"ZRE142":[["6013658","6015761"],["9095151","9105840"]],//
"NZE141":[["6118708","6144212"],["9109412","9134121"]],//
"NZE151":[["1061496","1077722"]],//
"GRX130":[["6000101","6008500"]],//

"ZE2":[["1101305","1203051"]],//
"GH3":[["012022","013616"],["013641","015184"]],//
"GH2":[["026354","030448"],["031731","035795"]],//
"CC25":[["272955","313127"],["350001","355086"]],//
"C25":[["421571","442506"],["480001","483381"],["680192","681651"],["690001","690169"]],//

"BL5FP":[["100012","103303"]],//
"BLEFW":[["100019","108899"]],//
"BL5FW":[["100009","108571"]],//

"FD3":[["1302732","1304648"],["1400001","1402113"]],
"RN6":[["3000001","3116024"]],
"SH5":[["028296","028404"],["035019","046654"]],//
"SHJ":[["002001","004529"]]
};


chassis = {
"ZRT260":[["3063423","3076538"]],
"NZT260":[["3060422","3091507"]],
"NHW20":[["3560618","3577619"]],
"AK12":[["955332","973937"]],
"Z12":[["080732","124399"],["150001","154047"]],

"DE3FS":[["271020","319597"],["350004","363377"]],
"E11":[["480593","529849"],["550001","556138"],["600001","600315"],["700001","703722"]],

"GB3":[["1156823","1220695"],["1300001","1336137"],["5100420","5101109"],["5200001","5200107"]],

"GE6":[["1323365","1427417"],["1500001","1530718"],["3000050","3001328"],["8100043","8100399"],["8200001","8200073"]],

"K13":[["000077","005301"],["300001","333986"]],
"KGC10":[["0309396","0313881"]],
"QNC10":[["0113973","0114003"]],
"KGC30":[["0001015","0057505"]],
"KSP90":[["5172063","5228759"],["2100391","2103343"]],
"NCP51":[["0234806","0255342"]],
"NCP58":[["0075744","0079915"]],
"NCP81":[["5115908","5140104"]],
"NCP100":[["2000006","2019328"]],
"NCZ20":[["0139360","0142835"]],

"NGC30":[["0001006","0012841"]],
"NNP10":[["5057594","5068216"]],
"SC11":[["251510","304371"]],
"C11":[["353899","373332"],["400001","409826"]],
"SCP90":[["5145188","5189090"],["2074506","2097814"]],
"SCP92":[["1068320","1078276"]],
"SCP100":[["2000009","2012116"],["1000101","1000310"]],

"VAY12":[["035878","038956"],["050001","051633"],["510532","510740"],["600115","600143"],["520001","520155"],["610001","610023"]],
"VY12":[["066260","076908"],["080001","085483"],["511800","513022"],["601031","601642"],["520001","520850"],["610001","610375"]],
"Y12":[["114035","119463"],["130001","132979"]],
"ACA31":[["5046167","5050514"]],
"ZGM10":[["0006130","0024279"]],

"ZVW30":[["0333636","0436433"],["5381296","5758501"],["1487276","1917269"]],
"ZVW40":[["3009298","3106030"],["0001001","0014935"]],
"ZVW41":[["3073984","3375362"],["0001001","0025357"]],
"ZGE20":[["0049864","0097214"],["5001001","5001653"]],
"ZRE142":[["6015762","6017106"],["9105841","9129934"]],
"NZE141":[["6144213","6177127"],["9134122","9177613"]],
"NZE151":[["1077723","1100422"]],
"GRX130":[["6008501","6039884"]],

"ZE2":[["1203052","1229029"],["1300001","1312527"],["8000001","8000417"]],
"BL5FP":[["103304","107006"]],
"BLEFW":[["108900","115425"]],
"BL5FW":[["108572","120392"]],
"CC25":[["355087","391042"]],
"NC25":[["360487","363759"],["690032","690311"]],
"C25":[["483382","505877"],["690170","691439"]],
"GH3":[["015185","016769"],["017901","019861"]],
"GH2":[["035796","039672"],["040801","046320"]],

"FD3":[["1402114","1406486"]],
"RN6":[["3116025","3233925"]],
"SH5":[["046655","057855"],["060001","060510"]],
"SHJ":[["004530","021033"]]
};




var list;
var listName;
var a = [];

//if there is more than 1 chassis number range, need to check 0 index
function vinCheck(vc, vn)
{
	bet=false;
	cf = chassisFix(vc);
	//console.log(chassis[cf] + " chassis");
try {
	for (var i=0;i<chassis[cf].length;i++)
	{
		if (chassis[cf][i][0]<=vn && chassis[cf][i][1]>=vn)
		{
			bet = true; //the number is between the range
			
		}

			
	}
}
catch(err)
{
	//console.log(err.message + " chassis: " + vc);
	document.getElementById("btn-next").click(); 
	//clearInterval(si);
}
	if (!bet)
	{
		checkOld(cf,vn);
					//console.log(vc+"-"+vn + " is made in 2009. Lot:"+ arrays()[0].textContent + ", Auction site and location:" + arrays()[1].textContent);

					try {
						
						//oldCarList.push(vc+"-"+vn + " is made in 2009. Lot:"+ arrays()[0].textContent + ", Auction site and location:" + arrays()[1].textContent);
						console.log(cf+"-"+vn + " is older. Lot:"+ arrays()[0].textContent + ", Auction site and location:" + arrays()[1].textContent.substr(0, arrays()[1].textContent.indexOf("[")-1));
						showMonth();					
					}
					catch(err) {
						console.log(err.message + " Chassis is " + vc +"-"+ vn + " in " + arrays()[1].textContent + ", Lot:" + arrays()[0].textContent);
						showMonth();
						t = $(".col-md-12.btn-outer.page-text").text();
						t = t.slice(t.lastIndexOf("/")+1);
						t = t.trim();

						at = $(".col-md-12.btn-outer.page-text").text();
						at = at.slice(0, at.lastIndexOf("/"));
						at = at.trim();
						
						console.log(t + " of " + at);
						clearInterval(si);
						//$("#btn-next").click(); 
						startLM();
					}
					
					
					

	}
}

function checkOld(vco,vno)
{
	beto = false;
	
	//cf = chassisFix(vco);
	try {
		for (var i=0;i<chassisold[vco].length;i++)
		{
			if (chassisold[vco][i][0]<=vno && chassisold[vco][i][1]>=vno)
			{
				beto = true; //the number is between the range
				//console.log(vco+"-"+vno + " older range");
			}

				
		}
	}
	catch(err)
	{
		console.log(err.message + " Chassis " + vco +"-"+ vno + " in " + arrays()[1].textContent + ", Lot:" + arrays()[0].textContent);
		document.getElementById("btn-next").click(); 
	}
	if (!beto)
	{
		try {
						
						//oldCarList.push(vc+"-"+vn + " is made in 2009. Lot:"+ arrays()[0].textContent + ", Auction site and location:" + arrays()[1].textContent);
						console.log(cf+"-"+vno + " CANCEL!!!");
					}
					catch(err) {
												
						console.log(err.message + " Chassis " + vco +"-"+ vno + " in " + arrays()[1].textContent + ", Lot:" + arrays()[0].textContent);
						
						t = $(".col-md-12.btn-outer.page-text").text();
						t = t.slice(t.lastIndexOf("/")+1);
						t = t.trim();

						at = $(".col-md-12.btn-outer.page-text").text();
						at = at.slice(0, at.lastIndexOf("/"));
						at = at.trim();
						
						console.log(t + " of " + at);
						clearInterval(si);
						//$("#btn-next").click(); 
												
						startLM();
					}
	}
}

function showMonth()
{
	for (var i=0;i<arraylth4.length;i++){
		if (arraylth4[i].textContent.indexOf("年")>=0)
		{
		console.log(arrayltp[i].textContent);
			
			
		}
	}
}


function chassisFix(vc)
{
	
	
	for (var k in chassis)
	{
		if (vc.indexOf(k)>=0)
		{
			
			switch (vc)
			{
				case "C25":
				return "C25";
				break;
				case "C11":
				return "C11";
				break;
				case "SC11":
				return "SC11";
				break;
				case "Y12":
				return "Y12";
				break;
				case "VY12":
				return "VY12";
				break;				
				default:
				return k;
				break;
			}
		}
		

	}
	
	
}

function arrays()
{
	switch (arraylth4.length)
		{
			case 29:
				for (var i=0;i<arraylth4.length;i++)
				{
					if (arraylth4[i].textContent.indexOf("会場")>=0)
					{

					return [arrayltp[0],arrayltp[i]];
					}
				}


					
			break;
			case 13:
			 return [array[0],arrayltp[8]];
			break;
			case 20:
						return [arrayltp[0],arrayltp[15]];
			break;
			case 14:
						return [array[0],arrayltp[9]];

			break;
			case 21:
						return [array[0],arrayltp[15]];

			break;	
			case 35:

			return findKaijo();

			break;
			case 26:

			return findKaijo();
			//return [arrayltp[0],arrayltp[21]];

			break;
			case 30:

			return findKaijo();
			//return [arrayltp[0],arrayltp[21]];

			break;
			case 31:

			return findKaijo();
			//return [arrayltp[0],arrayltp[21]];

			break;
			case 16:

			return findKaijo();
			//return [arrayltp[0],arrayltp[21]];

			break;
			case 41:

			return findKaijo();
			//return [arrayltp[0],arrayltp[21]];

			break;
			case 24:

			return findKaijo();
			//return [arrayltp[0],arrayltp[21]];

			break;
			case 28:
			return findKaijo();
			break;
			default:
			return findKaijo();
			break;
		}
}
function findKaijo()
{
	for (var i=0;i<arraylth4.length;i++){
		if (arraylth4[i].textContent.indexOf("会場")>=0)
		{
		//console.log(i + "-nth index.of lth4 ");
			if (arraylth4[0].textContent.indexOf("出品")>=0) 
			{
				return [arrayltp[0],arrayltp[i]];
			}
			else return [array[0],arrayltp[i]];
		}
	}
}

startLM();

function startLM() {

    


    //currenthtml = window.location.href;
	latesthtml = window.location.href;

	t = $(".col-md-12.btn-outer.page-text").text();
	m = $("#detail-name p").nextAll().eq(1).text();
	m = m.slice(m.lastIndexOf(" ")+1);
	mn = m.slice(m.lastIndexOf(" ")+1, m.lastIndexOf("-"));
	t = t.slice(t.lastIndexOf("/")+1);
	t = t.trim();   

	at = $(".col-md-12.btn-outer.page-text").text();
	at = at.slice(at.lastIndexOf("/")+1);
	at = at.trim();   

si = setInterval(function() 
			{

					latesthtml = window.location.href;
					//console.log("Checking latest" + latesthtml);
					//console.log("Checking current " + currenthtml);
retryCount++;					
					
					if(currenthtml !== latesthtml) 
					{						
				
							m = $("#detail-name p").nextAll().eq(1).text();
							m = m.slice(m.lastIndexOf(" ")+1);
							mn = m.slice(m.lastIndexOf(" ")+1, m.lastIndexOf("-"));
							cmodel= $("#detail-name p:eq(1)").html();
							cmodel= cmodel.slice(0, cmodel.indexOf(" "));
							cmodel= cmodel.trim();

							

							t = $(".col-md-12.btn-outer.page-text").text();
							t = t.slice(t.lastIndexOf("/")+1);
							t = t.trim();

							at = $(".col-md-12.btn-outer.page-text").text();
							at = at.slice(0, at.lastIndexOf("/"));
							at = at.trim();  
							
							//console.log("Success  -" + cmodel);
							m = $("#detail-name p").nextAll().eq(1).text();
							m = m.slice(m.lastIndexOf(" ")+1);
							mn = m.slice(m.lastIndexOf(" ")+1, m.lastIndexOf("-"));
							md = m.slice(m.lastIndexOf("-")+1);
							arrayltp = $(".like-tbl p");
							arraylth4 = $(".like-tbl h4");
							//array = $(".col-xs-3.col-md-3.col-nomargin.col-xs-3ex p");
							//arrayh4 = $(".col-xs-3.col-md-3.col-nomargin.col-xs-3ex h4");
							array = $(".col-xs-3 p");
							arrayh4 = $(".col-xs-3 h4");
							
							
							if (arrayltp[15])
							{
										if (arrayltp[15].textContent.indexOf("ベイオーク")>=0)
														{
															array = $(".col-xs-4 p");
															arrayh4 = $(".col-xs-4 h4");
														}
							}	


						
						
							//console.log(t + " t, and at is " + at)
							 if (t!==at)
							{
								
									vinCheck(mn,md);
									retryCount = 0;
										currenthtml = window.location.href;
										//latesthtml = window.location.href;
										document.getElementById("btn-next").click(); 
										
										
										
										//console.log(t + " of " + at); 
										
									
								
								
							} else if(t==at)
								{
									vinCheck(mn,md);
									//document.getElementById("btn-next").click(); 
								clearInterval(si); 
								//copy(JSON.stringify(oldCarList));
								console.log("Finished"); 
								}
						
						
						
					} 
					
					else if (retryCount>3)
					{
						document.getElementById("btn-next").click(); 
					}
					
					else {
							m = $("#detail-name p").nextAll().eq(1).text();
							m = m.slice(m.lastIndexOf(" ")+1);
							mn = m.slice(m.lastIndexOf(" ")+1, m.lastIndexOf("-"));
							cmodel= $("#detail-name p:eq(1)").html();
							cmodel= cmodel.slice(0, cmodel.indexOf(" "));
							cmodel= cmodel.trim();

							

							t = $(".col-md-12.btn-outer.page-text").text();
							t = t.slice(t.lastIndexOf("/")+1);
							t = t.trim();

							at = $(".col-md-12.btn-outer.page-text").text();
							at = at.slice(0, at.lastIndexOf("/"));
							at = at.trim();  
							//console.log("Success " + cmodel);
							m = $("#detail-name p").nextAll().eq(1).text();
							m = m.slice(m.lastIndexOf(" ")+1);
							mn = m.slice(m.lastIndexOf(" ")+1, m.lastIndexOf("-"));
							md = m.slice(m.lastIndexOf("-")+1);
							arrayltp = $(".like-tbl p");
							arraylth4 = $(".like-tbl h4");
							//array = $(".col-xs-3.col-md-3.col-nomargin.col-xs-3ex p");
							//arrayh4 = $(".col-xs-3.col-md-3.col-nomargin.col-xs-3ex h4");
							array = $(".col-xs-3 p");
							arrayh4 = $(".col-xs-3 h4");
							
								if (arrayltp[15])
								{
								if (arrayltp[15].textContent.indexOf("ベイオーク")>=0)
															{
																array = $(".col-xs-4 p");
																arrayh4 = $(".col-xs-4 h4");
															}
								}	
							//vinCheck(mn,md);
							//console.log("Will try again ");
						}
			}, 1000);
}


		//////////////////////////
	 }
    
  }
);


