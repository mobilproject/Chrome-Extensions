//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="searchByLot")
	 {
		console.log("searchByLot");
		/////////////////////////////////////////////////////// CODE HERE /////////////////////////////////////////////////////
		
/*		
		var list = [
["AUCNET",	"1"],
["AUCNET",	"5"],
["AUCNET",	"8"],
["AUCNET",	"10508"],
["AUCNET",	"10516"],
["AUCNET",	"10517"],
["AUCNET",	"10520"],
["AUCNET",	"14014"],
["AUCNET",	"19004"],
["AUCNET",	"19070"],
["AUCNET",	"19121"],
["AUCNET",	"19162"],
["AUCNET",	"19166"],
["AUCNET",	"19168"],
["AUCNET",	"19169"],
["AUCNET",	"19181"],
["AUCNET",	"19187"],
["AUCNET",	"19189"],
["AUCNET",	"19197"],
["AUCNET",	"19213"],
["AUCNET",	"19223"],
["AUCNET",	"19227"],
["AUCNET",	"19230"],
["AUCNET",	"19232"],
["AUCNET",	"29206"],
["AUCNET",	"29212"],
["AUCNET",	"42004"],
["HONDA_HOKKAIDOU",	"30054"],
["HONDA_HOKKAIDOU",	"39018"],
["HONDA_KANSAI",	"70025"],
["HONDA_KANSAI",	"70138"],
["HONDA_KANSAI",	"70273"],
["HONDA_KANSAI",	"70317"],
["HONDA_KANSAI",	"79032"],
["HONDA_KANSAI",	"79170"],
["HONDA_KANSAI",	"79208"],
["HONDA_KANSAI",	"80030"],
["HONDA_KYUSHU",	"60004"],
["HONDA_KYUSHU",	"60065"],
["HONDA_KYUSHU",	"60153"],
["HONDA_KYUSHU",	"60154"],
["HONDA_KYUSHU",	"60257"],
["HONDA_KYUSHU",	"69009"],
["HONDA_KYUSHU",	"69103"],
["HONDA_KYUSHU",	"69127"],
["HONDA_KYUSHU",	"69179"],
["HONDA_KYUSHU",	"69199"],
["HONDA_KYUSHU",	"69205"],
["HONDA_NAGOYA",	"59006"],
["HONDA_NAGOYA",	"59537"],
["HONDA_NAGOYA",	"59628"],
["HONDA_TOKYO",	"10137"],
["HONDA_TOKYO",	"10345"],
["HONDA_TOKYO",	"10351"],
["HONDA_TOKYO",	"10366"],
["HONDA_TOKYO",	"10477"],
["HONDA_TOKYO",	"10479"],
["HONDA_TOKYO",	"10485"],
["HONDA_TOKYO",	"19040"],
["HONDA_TOKYO",	"20362"],
["HONDA_TOKYO",	"20392"],
["HONDA_TOKYO",	"20399"],
["HONDA_TOKYO",	"26020"],
["HONDA_TOKYO",	"29026"],
["HONDA_TOKYO",	"29029"],
["JU_TOKYO",	"00022"],
["JU_TOKYO",	"00108"],
["JU_TOKYO",	"00112"],
["JU_TOKYO",	"00115"],
["JU_TOKYO",	"00175"],
["JU_TOKYO",	"00183"],
["JU_TOKYO",	"00197"],
["JU_TOKYO",	"00199"],
["JU_TOKYO",	"00223"],
["JU_TOKYO",	"02118"],
["JU_TOKYO",	"02134"],
["JU_TOKYO",	"03104"],
["JU_TOKYO",	"04015"],
["JU_TOKYO",	"04064"],
["JU_TOKYO",	"04090"],
["JU_TOKYO",	"04091"],
["JU_TOKYO",	"08005"],
["JU_TOKYO",	"08009"],
["JU_TOKYO",	"08026"],
["JU_TOKYO",	"08178"],
["JU_TOKYO",	"08185"],
["JU_TOKYO",	"08204"],
["JU_TOKYO",	"08226"],
["JU_TOKYO",	"08240"],
["JU_TOKYO",	"08244"],
["JU_TOKYO",	"08245"],
["JU_TOKYO",	"08285"],
["JU_TOKYO",	"08321"],
["NOAA",	"1010"],
["NOAA",	"1029"],
["NOAA",	"1054"],
["NOAA",	"1057"],
["NOAA",	"1097"],
["NOAA",	"1152"],
["NOAA",	"1173"],
["NOAA",	"2016"],
["NOAA",	"2041"],
["NOAA",	"2047"],
["NOAA",	"2079"],
["NOAA",	"2089"],
["NOAA",	"2101"],
["NOAA",	"5023"]
////
];
*/

var list;

askUser();

function askUser()
{
	console.log("asking for lot numbers");
list = prompt("コピーしたコンテンツを貼り付けてください");

if (typeof list == "string" && list.length>0)
	{
	list = list.replace(/\s/g,",");
	list = list.split(",");
	
	console.log(list);
		startSearch();
	}
	else if (typeof list == "object")
	{
		console.log("data input cancelled");
	}
	else  askUser();
}


function startSearch()
{
	for (var i=0;i<list.length;i++)
	{
		if (i>19)
		{
			$("#exhibit_numbers").append('<div class="number-text-box col-lg-2 col-md-2 col-sm-4 col-xs-6"> <input type="text" name="exhibitNum[]" maxlength="5" class="col-lg-10 col-md-10 col-sm-11 col-xs-11 number-search-input"></div>');	
		}
	$(".col-lg-10.col-md-10.col-sm-11.col-xs-11.number-search-input")[i].value=list[i];
	}
}




		
		
		/////////////////////////////////////////////////////// CODE HERE /////////////////////////////////////////////////////
	 }
    
  }
);


