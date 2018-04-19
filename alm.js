




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

var list;
var listName;
askUser();

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


	
function startLM()
{
	
        currenthtml = window.location.href;
        latesthtml = window.location.href;
		clickable = $('input[value=' + listName + ']');
    	
	for (var i=0;i<clickable.length;i++)
	{
		mod = $(".type").eq(i).text();
		
		//nb = $("a[title='次へ→']").trigger("click");
		//console.log(mod.text() + " " + );
		
		//console.log(cf);
		
				
					if($('input[value=' + listName + ']')[i]) 
					{
					
					console.log(" cars added to list " + listName); 
					$('input[value=' + listName + ']')[i].click();
					
					}
				
				
				
		
	}
	if ($("a[title='次へ→']").get(0)!=undefined)
	{
		$("a[title='次へ→']").get(0).click(function (e) {
e.stopPropagation();});

setTimeout(function(){checkPage();}, 3000);
	}
}

function checkPage()
{
	console.log("timeout 3 secs");
						latesthtml = window.location.href;
					
					if(currenthtml !== latesthtml) 
					{
							//console.log("startLM");
						startLM();
					}

}
