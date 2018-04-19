//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="makeExcelIAUC")
	 {
		console.log("makeExcelIAUC");
		////////////////////////////////////////////////////////
		
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



var mod;
var sp;
var nb;
var cf;
var clickable;


function printRow(i)
{
	
	
	
	
	
	sn = $("p.sitename").eq(i).text();
	en = $("span.exhibitnum").eq(i).text();
	my = $("p.modelyear").eq(i).text();
	icm = $("p.importedCarModel").eq(i).text();
	cn = $("p.carname").eq(i).text();
	gr = $("p.grade").eq(i).text();
	tp = $("p.type").eq(i).text();
	dp = $("p.displacement").eq(i).text();
	ip = $("p.inspection").eq(i).text();
	ml = $("p.mileage").eq(i).text();
	col = $("p.colorname").eq(i).text();
	rt = $("p.rate").eq(i).text();
	eval = $("p.evaluation").eq(i).text();
	sp = $("p.startprice").eq(i).text();
	ed = $("p.enddate").eq(i*2).text();
	et = $("p.endtime").eq(i*2).text();
	
	

	
	
	console.log(sn + ", " + en + ",,,,, " + my + " " + icm + ", " + cn + " " + gr + ", " + tp + " " + dp + ", " + 
	ip + ", " + ml + ", " + col + ", " + rt + " " + eval + ", " + sp + ", " + ed + " " + et);
	
	
}

startLM();


	
function startLM()
{
	
        currenthtml = window.location.href;
        latesthtml = window.location.href;
	
	clickable = $(".startprice");
    	
	for (var i=0;i<clickable.length;i++)
	{
		mod = $(".type").eq(i).text();
		
		
		printRow(i);
		
		
	}
	if ($("a[title='Next→']").get(0)!=undefined)
	{
		$("a[title='Next→']").get(0).click(function (e) {
e.stopPropagation();});

setTimeout(function(){checkPage();}, 3000);
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


		////////////////////////////////////////////////////////
	 }
    
  }
);


