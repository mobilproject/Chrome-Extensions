var bidlist;
var listName = "C";


setTimeout(function()
{
	askUser();
},1000);



function askUser()
{
	console.log("asking for lot numbers");
	bidlist = prompt("Enter a list of lot numbers!");
	
	//console.log(typeof bidlist == "string");
	
if (typeof bidlist == "string" && bidlist.length>0)
	{
		bidlist = bidlist.trim();
	bidlist = bidlist.replace(/\s/g,",");
	bidlist = bidlist.split(",");
	
	console.log(bidlist);
		init();
	}
	else if (typeof bidlist == "object")
	{
		console.log("data input cancelled");
	}
	else  askUser();
}

function init()
{
	setTimeout(function()
	{
		startChecking();
	},5000);
}

function startChecking()
{
	
	
	lots = $(".exhibit");
	for (var i=0;i<lots.length;i++)
	{
		
		
		//nb = $("a[title='次へ→']").trigger("click");
		console.log(lotCheck($(".exhibit")[i].innerText));
		
		
		
		if (lotCheck($(".exhibitnum")[i].innerText))
				{		
				
			}
			else 
			{
					if($('input[value=' + listName + ']')[i]) 
					{
					
					//console.log(" cars added to list " + listName); 
					$('input[value=' + listName + ']')[i].click();
					
					}
			}
			
	//10 20 30 40 50 60 70 80 90 100 105		
			
	}
	
	$(document).ready(function() {
		if ($("a[title='Next→']").length>0)
		{
			console.log(bidlist);
			init();
			$("a[title='Next→']")[0].click();
			
		}
	});
}

function lotCheck(l)
{
	var b = false;
	for (var i=0;i<bidlist.length; i++)
	{
		//console.log(Number(bidlist[i]), Number(l));
		if (Number(bidlist[i])==Number(l))
		{
			b = true;
		}
	}
	return b;
}