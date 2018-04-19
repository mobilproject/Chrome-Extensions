//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="searchByLotKaijo")
	 {
		console.log("searchByLot&Kaijo");
		///////////////////////////////// CODE HERE ///////////////////////////////////////
	
var chassis = new Object;
var bet;
var cars;
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

var list;
var listName;
var cars1;
var cars2;
askUser();


function askUser()
{
	console.log("asking for lot numbers");
	cars = prompt("コピーしたコンテンツを貼り付けてください");

if (typeof cars == "string" && cars.length>0)
	{
	cars1 = cars.match(/[A-Za-z ]+/g);
	cars2 = cars.match(/[0-9]+/g);
	
	
	
	
	
		
	console.log(cars1, cars2);
		askUser2();
	}
	else if (typeof cars == "object")
	{
		console.log("data input cancelled");
	}
	else  askUser();


}



function askUser2()
{
	
	
	
list = prompt("リストの文字を入力お願いします", "a,b,c or d");



if (typeof list == "string" && cars.length>0)
	{
	list = list.toUpperCase();
	 if (list=="A" || list=="B" || list=="C" || list=="D")
		{
		listName = list;
		 startLM();
		}
		else { askUser2(); }
	}
	else if (typeof list == "object")
	{
		console.log("data input cancelled");
	}
	else  askUser2();
	

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

function priceCheck(cm, lot)
{
var bol = false;
	cm = cm.replace("_"," ");
	cm = cm.toUpperCase();
		
	
	for (var c=0;c<cars1.length;c++)
	{

//console.log(lot, cars2[c], cm, cars1[c].toUpperCase());		
		if (cm.trim() == cars1[c].toUpperCase().trim() && cars2[c]==lot)
		{        
                
                bol = true;

            } 
        		
	}
	return bol;
	//console.log(cm + " " + i);
	
	
}


function isOdd(x){if (x%2==0) return true}

	
function startLM()
{
	
        currenthtml = window.location.href;
        latesthtml = window.location.href;
		clickable = $('input[value="A"]');
    	
	for (var i=0;i<clickable.length;i++)
	{
		kj = $(".list-sitename").eq(i).text();
		kj = kj.toUpperCase();
		//nb = $("a[title='次へ→']").trigger("click");
		//console.log(mod.text() + " " + );
		//cf = chassisFix(mod);
		sp = $(".exhibitnum").eq(i).text();
		
		
		if (priceCheck(kj, sp))
				{
					console.log(kj, sp + " found");
					if($('input[value=' + listName + ']')[i]) 
					{
					
					//console.log(" cars added to list " + listName); 
					$('input[value=' + listName + ']')[i].click();
					
					}
				
				
				
			}
		
	}
	if ($("a[title='Next→']").get(0)!=undefined)
	{
		$("a[title='Next→']").get(0).click(function (e) {
e.stopPropagation();});

setTimeout(function(){checkPage();}, 4000);
	}
}

function checkPage()
{
	console.log("timeout 3 secs");
						latesthtml = window.location.href;
					
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


