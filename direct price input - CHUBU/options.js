var options = new Object;
$("#chbox")[0].checked = true;

options.autostart = "yes";

chrome.storage.sync.set({"options":options}, function() {
    
		var status = document.getElementById('status');
		status.textContent = 'AUTOSTART ON';
		setTimeout(function() {
		status.textContent = '';
	  
		}, 2000);
		});

chrome.storage.sync.get("options",function(oneChassis){
			
			console.log(oneChassis);
			try{
				ocp = oneChassis["options"]["autostart"];
				
				
				if (ocp=="yes")
				{$("#chbox").prop("checked",true);
		
				}
				
			}
			catch(e)
			{
				console.log("options never set");
			}
			

			});


$("input#chbox").click(
function(){
	var status = document.getElementById('status');
	if($("#chbox")[0].checked)
	{	
		options.autostart = "yes";	
		status.textContent = 'DLM Autostart ON';
    }
	else
	{
		options.autostart = "no";
		status.textContent = 'DLM Autostart OFF';
	}
	
	chrome.storage.sync.set({"options":options}, function() {
    
		
		
		setTimeout(function() {
		status.textContent = '';
	  
		}, 2000);
		});
}
);





$( function() {
    $( "#datepicker" ).datepicker();
  } );    


	var helpcontent = ``;
	
