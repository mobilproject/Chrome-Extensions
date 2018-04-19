//console.log("Content working");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  	  
      sendResponse( {"message":"response from content"} );
	  
	  var rm = request.message;
	  //console.log("Hi from content 1");
	   if (rm=="modelSelect")
	 {
		console.log("modelSelect");
		////////////////////////////////////////////////////////
		
		var ls="";
		
		var modelsLoaded = [];
		
		chrome.storage.sync.get("language",function(language){
	
	ls = language["language"];
	var lsc = language["language"] + "selectedmodels";
	
		chrome.storage.sync.get([lsc],function(items){
    	
			for (i in items[lsc]) {
			  var storageItem = items[lsc][i];
			  
			  modelsLoaded.push(storageItem);
			}
			if (modelsLoaded.length>0)
			{
				markMyModels(modelsLoaded);
			}
			else 
			{
				alert("You have not selected any models");
			}
				
			});
		});
		

function markMyModels(models)
{
	
	for (var i=0; i<models.length; i++)
	{
		$("input[data-name='" + models[i] + "']").prop( "checked", true);
		
		console.log(models[i]);
	}
	
}		
		
		





		////////////////////////////////////////////////////////
	 }
    
  }
);


/*
$("input[data-name='Isis']").prop( "checked", true);
//$("input[data-name='ｱﾘｵﾝ']").prop( "checked", true);
//$("input[data-name='ｲﾝﾌﾟﾚｯｻ']").prop( "checked", true);
$("input[data-name='Wish']").prop( "checked", true);
$("input[data-name='Wingroad']").prop( "checked", true);
$("input[data-name='Vitz']").prop( "checked", true);
$("input[data-name='Corolla Fielder']").prop( "checked", true);
$("input[data-name='Corolla Axio']").prop( "checked", true);
$("input[data-name='Succeed']").prop( "checked", true);
$("input[data-name='Succeed Van']").prop( "checked", true);
$("input[data-name='Sienta']").prop( "checked", true);
$("input[data-name='Tiida']").prop( "checked", true);
$("input[data-name='Tiida Latio']").prop( "checked", true);
$("input[data-name='Demio']").prop( "checked", true);
$("input[data-name='Note']").prop( "checked", true);
$("input[data-name='Passo']").prop( "checked", true);
$("input[data-name='Fit']").prop( "checked", true);
//$("input[data-name='ﾌｫﾚｽﾀｰ']").prop( "checked", true);
//$("input[data-name='ﾌﾟﾚﾐｵ']").prop( "checked", true);
$("input[data-name='Belta']").prop( "checked", true);
$("input[data-name='Porte']").prop( "checked", true);
//$("input[data-name='ﾏｰﾁ']").prop( "checked", true);
$("input[data-name='Raum']").prop( "checked", true);
$("input[data-name='Ractis']").prop( "checked", true);
$("input[data-name='Probox']").prop( "checked", true);
//$("input[data-name='ﾌﾟﾛﾎﾞｯｸｽﾊﾞﾝ']").prop( "checked", true);
$("input[data-name='Corolla Axio']").prop( "checked", true);
$("input[data-name='Auris']").prop( "checked", true);
$("input[data-name='MarkX']").prop( "checked", true);
//$("input[data-name='ｲﾝｻｲﾄ']").prop( "checked", true);
$("input[data-name='Serena']").prop( "checked", true);
$("input[data-name='Axela']").prop( "checked", true);
//$("input[data-name='ｽﾄﾘｰﾑ']").prop( "checked", true);

//$("input[data-name='ｼﾋﾞｯｸﾊｲﾌﾞﾘｯﾄﾞ']").prop( "checked", true);
//$("input[data-name='ﾌﾘｰﾄﾞ']").prop( "checked", true);
//$("input[data-name='ｷｭｰﾌﾞﾞ']").prop( "checked", true);
//$("input[data-name='RAV4']").prop( "checked", true);
$("input[data-name='Airwave']").prop( "checked", true);
$("input[data-name='Ist']").prop( "checked", true);
$("input[data-name='voxy']").prop( "checked", true);
$("input[data-name='Noah']").prop( "checked", true);



$("input[data-name='ADﾊﾞﾝ']").prop( "checked", true);
$("input[data-name='ｱｲｼｽ']").prop( "checked", true);
//$("input[data-name='ｱﾘｵﾝ']").prop( "checked", true);
//$("input[data-name='ｲﾝﾌﾟﾚｯｻ']").prop( "checked", true);
$("input[data-name='ｳｨｯｼｭ']").prop( "checked", true);
$("input[data-name='ｳｨﾝｸﾞﾛｰﾄﾞ']").prop( "checked", true);
$("input[data-name='ｳﾞｨｯﾂ']").prop( "checked", true);
$("input[data-name='ｶﾛｰﾗﾌｨﾙﾀﾞｰ']").prop( "checked", true);
$("input[data-name='ｶﾛｰﾗﾌｨｰﾙﾀﾞｰ']").prop( "checked", true);
$("input[data-name='ｻｸｼｰﾄﾞ']").prop( "checked", true);
$("input[data-name='ｻｸｼｰﾄﾞﾊﾞﾝ']").prop( "checked", true);
$("input[data-name='ｼｴﾝﾀ']").prop( "checked", true);
$("input[data-name='ﾃｨｰﾀﾞ']").prop( "checked", true);
$("input[data-name='ﾃｨｰﾀﾞﾗﾃｨｵ']").prop( "checked", true);
$("input[data-name='ﾃﾞﾐｵ']").prop( "checked", true);
$("input[data-name='ﾉｰﾄ']").prop( "checked", true);
$("input[data-name='ﾊﾟｯｿ']").prop( "checked", true);
$("input[data-name='ﾌｨｯﾄ']").prop( "checked", true);
//$("input[data-name='ﾌｫﾚｽﾀｰ']").prop( "checked", true);
//$("input[data-name='ﾌﾟﾚﾐｵ']").prop( "checked", true);
$("input[data-name='ﾍﾞﾙﾀ']").prop( "checked", true);
$("input[data-name='ﾎﾟﾙﾃ']").prop( "checked", true);
//$("input[data-name='ﾏｰﾁ']").prop( "checked", true);
$("input[data-name='ﾗｳﾑ']").prop( "checked", true);
$("input[data-name='ﾗｸﾃｨｽ']").prop( "checked", true);
$("input[data-name='ﾌﾟﾛﾎﾞｯｸｽ']").prop( "checked", true);
//$("input[data-name='ﾌﾟﾛﾎﾞｯｸｽﾊﾞﾝ']").prop( "checked", true);
$("input[data-name='ｶﾛｰﾗｱｸｼｵ']").prop( "checked", true);
$("input[data-name='ｵｰﾘｽ']").prop( "checked", true);
$("input[data-name='ﾏｰｸX']").prop( "checked", true);
//$("input[data-name='ｲﾝｻｲﾄ']").prop( "checked", true);
$("input[data-name='ｾﾚﾅ']").prop( "checked", true);
$("input[data-name='ｱｸｾﾗ']").prop( "checked", true);
//$("input[data-name='ｽﾄﾘｰﾑ']").prop( "checked", true);

//$("input[data-name='ｼﾋﾞｯｸﾊｲﾌﾞﾘｯﾄﾞ']").prop( "checked", true);
//$("input[data-name='ﾌﾘｰﾄﾞ']").prop( "checked", true);
//$("input[data-name='ｷｭｰﾌﾞﾞ']").prop( "checked", true);
//$("input[data-name='RAV4']").prop( "checked", true);
$("input[data-name='ｴｱｳｪｲﾌﾞ']").prop( "checked", true);
$("input[data-name='ｲｽﾄ']").prop( "checked", true);
$("input[data-name='ｳﾞｫｸｼｰ']").prop( "checked", true);
$("input[data-name='ﾉｱ']").prop( "checked", true);

*/

