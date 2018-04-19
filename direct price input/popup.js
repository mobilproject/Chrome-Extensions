
document.addEventListener('DOMContentLoaded', function() {
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
	
	
});

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