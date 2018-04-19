
document.addEventListener('DOMContentLoaded', function() {
	
	var link7 = document.getElementById('zero');
    // onClick's logic below:
    link7.onclick = function() {
        zeroExcel();
	}
	var link8 = document.getElementById('orix');
    // onClick's logic below:
    link8.onclick = function() {
        orixExcel();
	}
	var link9 = document.getElementById('lum');
    // onClick's logic below:
    link9.onclick = function() {
        lumExcel();
	}
});



function zeroExcel()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"zero"},
	function (response)
		{
			console.log(response.message + " ZERO");
		}

	);
}
function orixExcel()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"orix"},
	function (response)
		{
			console.log(response.message + " ORIX");
		}

	);
}
function lumExcel()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"lum"},
	function (response)
		{
			console.log(response.message + " LUM");
		}

	);
}
