var bet;
var cars = new Object;
var si;



cars = {
"AK12" : 8,//March
"BNK12":0,
"C11":20,//Tiida
"DE3AS":0,
"DE3FS":20,//demio
"DBA-DE3FS":20,//demio
"DE5FS":0,
"E11":15,
"GE6":13,
"GE7":0,
"GE8":0,
"GE9":0,
"GP1":0,
"JC11":0,
"K13":13,
"KGC10":10,//Passo
"KGC15":0,
"KGC30":13,
"KGC35":0,
"KSP90":15,//1000cc Vitz
"KSP92":0,
"NC11":0,
"NCP50V":0,
"NCP51V":35,//Succeed
"CBE-NCP51":35,
"NCP51":35,
"NCP52V":0,
"NCP55V":30,//Probox
"NCP58G":28,//Succeed
"NCP58":28,
"NCP59G":0,
"NCP81G":28,//Succeed
"NCP81":28,
"NCP85G":0,
"NCP85":0,
"NCP91":0,
"NCP95":0,
"NCP96":0,
"NCP100":30,
"NCP105":0,
"NCP120":0,
"NCP125":0,
"NCZ20":40,
"NE11":0,
"NGC30":20,
"NK13":0,
"NNP10":27,//Porte
"NNP11":0,
"NNP15":0,
"NSP120":0,
"NY12":0,
"SC11":25,//Tiida Latio
"SCP90":22,//Vitz
"SCP92":37,//Belta
"SCP100":36,//Ractis
"SNC11":0,
"SZC11":0,
"VAY12":12,//AD
"VJY12":0,
"VY12":12,//AD
"VZNY12":0,
"Y12":27,//Wingroad
"DBF-VY12":12,//AD
"ZE11":0,
"ZVW30":40,
"ZVW40":50,
"ZVW40W":50,
"ZVW41":75,
"ZVW41W":75,
"ZGM10":40,
"ZGM10G":40,
"ZGM10W":40,
"ZRE142":52,//fielder
"ZRE142G":52,
"NZE141":54,
"NZE141G":54,
"NZE151H":38,
"GRX130":40,
"ZE2":23
};


var mod;
var sp;
var nb;



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


function priceCheck(cm, i)
{
	sp = $(".transactionvalue").eq(i).text();
	sp = sp.slice(0,sp.indexOf("."));
	
	//console.log(cm + " " + i);
	
	if (cars[cm]>sp)
	{
		//console.log("It is cheaper than set price");
		return true;
	} else return false;
}




	
function startLM()
{
	for (var i=0;i<100;i++)
	{
		mod = $(".type").eq(i).text();
		
		//nb = $("a[title='次へ→']").trigger("click");
		//console.log(mod.text() + " " + );
		
		if($('input[value=' + listName + ']')[i]) 
			{
				if (priceCheck(mod, i))
				{
					console.log(" cars removed from list " + listName); 
					$('input[value=' + listName + ']')[i].click();

				}
				
				
				
			}
	}
	
}

