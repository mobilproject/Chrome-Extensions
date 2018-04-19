//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="addCarsToList")
	 {
		console.log("addCarsToList");
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

/*
cars = {
"AK12":	"8",	//March
"Z12":	"6",	
"DE3FS":	"13",	//demio
"E11":	"15",	
"GB3":	"12",	
"GE6":	"10",	
"K13":	"13",	
"KGC10":	"8",	//Passo
"KGC30":	"9",	
"KSP90":	"12",	//1000cc Vitz
"NCP51":	"30",	//Succeed
"NCP58":	"24",	//Succeed
"NCP81":	"30",	//Succeed
"SCP100":	"-1",	//Ractis 1300
"NCP100":	"30",	//Ractis 1500
"NCP120":	"-1",	
"NSP120":	"-1",	
"NCZ20":	"37",	
"NGC30":	"13",	
"NNP10":	"23",	//Porte
"SC11":	"25",	//Tiida Latio
"C11":	"20",	//Tiida
"SCP90":	"16",	//Vitz
"SCP92":	"35",	//Belta
"VY12":	"10",	//AD
"Y12":	"24",	//Wingroad
"ZVW30":	"36",	
"ZVW40":	"46",	
"ZVW41":	"50",	
"ZGM10":	"30",	
"ZRE142":	"52",	//fielder
"NZE141":	"48",	
"NZE151":	"35",	
"GRX130":	"42",	
"ZE2":	"14",	
"ZGE20":	"37",	
"CC25":	"24",	
"C25":	"24",	
"BL5FW":	"25",	
"BL5FP":	"30",	
"FD3":	"12",	
"RN6":	"37"	//stream 1800cc

};
*/

var mod;
var sp;
var nb;
var cf;
var clickable;

var chassisnames;
var cars;

var list = "";
var listName="C";
var ls = "";

chrome.storage.sync.get("language",function(language){
	
	ls = language["language"];
	var lsc = language["language"] + "selectedchassis";
		chrome.storage.sync.get([lsc],function(items){
			chassisnames = items;
		});
	
	
		chrome.storage.sync.get([ls + "prices"],function(oneChassis){
				cars = oneChassis[ls + "prices"];
			console.log(cars, "cars" );
			});

			
		});




			setTimeout(function(){askUser();
			},1000);


function askUser()
{
list = prompt("リストの文字を入力お願いします", "a,b,c or d");

if (list.length==1)
	{
	list = list.toUpperCase();
	 if (list=="A" || list=="B" || list=="C" || list=="D")
		{
		listName = list;
		 startLM();
		}
		else { askUser(); }
	}
	

}

function chassisFix(vcc)
{
	for (var k in cars)
	{
		if (vcc.indexOf(k)>=0)
		{
			return k;
		}

	}
}

function priceCheck(cm, i)
{
	
	sp = $(".startprice").eq(i).text();
	sp = sp.slice(0,sp.indexOf("."));
	
	//console.log(cm, cars[cm], sp, i);
	
	if (Number(cars[cm])>=Number(sp))
	{
		//console.log("It is cheaper than set price");
		return true;
	} else return false;
}




	
function startLM()
{
	if (list.length> 0) {		
		
	clickable = $('input[value=' + listName + ']');
	console.log("started ", clickable);
        
     latesthtml = window.location.href;   
		
    	
	for (var i=0;i<clickable.length;i++)
	{
		mod = $(".type").eq(i).text();
		
		//nb = $("a[title='次へ→']").trigger("click");
		//console.log(mod.text() + " " + );
		cf = chassisFix(mod);
		//console.log(cf);
		if (priceCheck(cf, i))
				{
					if($('input[value=' + listName + ']')[i]) 
					{
					
					//console.log(" cars added to list " + listName); 
					$('input[value=' + listName + ']')[i].click();
					
					}
				
				
				
			}
			
			
	}
	
	
	
				//                                            
				
				


				//$("#select_pager")[0].onchange();
				
					
					//latesthtml = window.location.href;
					
					if ($("a[title='Next→']").length!=0)
					{
						$("a[title='Next→']")[0].click();
				
				var to = setTimeout(function(){checkPage(); 
				currenthtml = window.location.href;
				//console.log($("select[id='select_pager']")[0]);
				checkPage();
				}, 5000);
					}
					else if ($("a[title='次へ→']").length!=0){
						$("a[title='次へ→']")[0].click();
						//$("#select_pager")[0].value++;
						var to = setTimeout(function(){checkPage(); 
				currenthtml = window.location.href;
				//console.log($("select[id='select_pager']")[0]);
				checkPage();
				}, 5000);
					}
					else {
						
					}
					
				
				
				
				
				
				
				
			
		
		/*
				
		
		*/
	
	
	}
}



function checkPage()
{
					console.log("timeout 3 secs", currenthtml==latesthtml);					
					//					
					console.log("timeout 3 secs", currenthtml==latesthtml);					
					
					if(currenthtml !== latesthtml) 
					{
							console.log("startLM");
							startLM();
						
					}

}




		
		
		
		///////////////////////////////// CODE HERE ///////////////////////////////////////
		
		
	 }
    
  }
);

/*
var colar = [];



recLoop();

function recLoop(){
var cl = $("p.carname");
for (var i=0; i<cl.length; i++)
{
	if (checkColar(cl[i].innerText))
    {
		
	}
else {
	colar.push(cl[i].innerText);
	console.log(cl[i].innerText);
}
	
}
	if ($("#select_pager")[0].value<$("#select_pager")[0].childElementCount)
				{
$("#select_pager")[0].value++; $("#select_pager")[0].onchange();					setTimeout(function(){recLoop();}, 4000);
				}
		
		
	
                }


function checkColar(cc)
{
var bul = false;
	for (var i=0; i<colar.length; i++)
    {
    	if (colar[i]==cc)
            {
				bul = true;
            }
    }
return bul;
}
*/


