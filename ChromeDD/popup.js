
document.addEventListener('DOMContentLoaded', function() {
	var link = document.getElementById('ms');
    // onClick's logic below:
    link.onclick = function() {
        modelSelect();
    }
	var link2 = document.getElementById('actl');
    // onClick's logic below:
    link2.onclick = function() {
        addCarsToList();
    }
	
	var link3 = document.getElementById('sc');
    // onClick's logic below:
    link3.onclick = function() {
        selectChassis();
    }
	
	var link4 = document.getElementById('cv');
    // onClick's logic below:
    link4.onclick = function() {
        checkVin();
    }
	
	var link5 = document.getElementById('sbl');
    // onClick's logic below:
    link5.onclick = function() {
        searchByLot();
    }
	
	var link7 = document.getElementById('mpc');
    // onClick's logic below:
    link7.onclick = function() {
        oliac();
	}
	
});

function modelSelect()
{
	/*
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {message: "Hi"}, function(response) {
    console.log(tabs[0].id);
  });
});
*/
	chrome.runtime.sendMessage(
	
	{
		"message":"modelSelect"},
	function (response)
		{
			console.log(response.message);
		}

	);


}
function addCarsToList()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"addCarsToList"},
	function (response)
		{
			console.log(response.message);
		}

	);
}
function selectChassis()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"selectChassis"},
	function (response)
		{
			console.log(response.message);
		}

	);
}
function checkVin()
{
	
	
	chrome.runtime.sendMessage(
	
	{
		"message":"checkVin"},
	function (response)
		{
			console.log(response.message);
		}

	);
}
function searchByLot()
{	
	chrome.runtime.sendMessage(
	
	{
		"message":"searchByLot"},
	function (response)
		{
			console.log(response.message);
		}

	);	
}
function oliac()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"oliac"},
	function (response)
		{
			console.log(response.message);
		}

	);
}
