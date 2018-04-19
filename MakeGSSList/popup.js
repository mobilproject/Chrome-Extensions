
document.addEventListener('DOMContentLoaded', function() {
	var link = document.getElementById('honda');
    // onClick's logic below:
    link.onclick = function() {
        honda();
    }
	var link2 = document.getElementById('iauc');
    // onClick's logic below:
    link2.onclick = function() {
        iauccsv();
    }
	var link3 = document.getElementById('ju');
    // onClick's logic below:
    link3.onclick = function() {
        jucsv();
    }
	var link4 = document.getElementById('laa');
    // onClick's logic below:
    link4.onclick = function() {
        laacsv();
    }
	var link5 = document.getElementById('mirive');
    // onClick's logic below:
    link5.onclick = function() {
        mirivecsv();
    }
	var link6 = document.getElementById('taa');
    // onClick's logic below:
    link6.onclick = function() {
        taacsv();
    }
	var link7 = document.getElementById('zero');
    // onClick's logic below:
    link7.onclick = function() {
        zerocsv();
	}
	var link8 = document.getElementById('orix');
    // onClick's logic below:
    link8.onclick = function() {
        orixcsv();
	}
	var link9 = document.getElementById('lum');
    // onClick's logic below:
    link9.onclick = function() {
        lumcsv();
	}
	var link10 = document.getElementById('uss');
    // onClick's logic below:
    link10.onclick = function() {
        usscsv();
	}
});

function hondacsv()
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
		"message":"honda"},
	function (response)
		{
			console.log(response.message);
		}

	);


}
function iauccsv()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"iauc"},
	function (response)
		{
			console.log(response.message);
		}

	);
}
function jucsv()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"ju"},
	function (response)
		{
			console.log(response.message);
		}

	);
}
function laacsv()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"laa"},
	function (response)
		{
			console.log(response.message);
		}

	);
}
function mirivecsv()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"mirive"},
	function (response)
		{
			console.log(response.message);
		}

	);
}
function taacsv()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"taa"},
	function (response)
		{
			console.log(response.message);
		}

	);
}
function zerocsv()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"zero"},
	function (response)
		{
			console.log(response.message);
		}

	);
}
function orixcsv()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"orix"},
	function (response)
		{
			console.log(response.message);
		}

	);
}
function lumcsv()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"lum"},
	function (response)
		{
			console.log(response.message);
		}

	);
}
function usscsv()
{
	
	chrome.runtime.sendMessage(
	
	{
		"message":"uss"},
	function (response)
		{
			console.log(response.message);
		}

	);
}