var options = {
    "autostart_iauc":"",
    "autostart_tcweb":""
    };
chrome.storage.sync.get("options",function(oneChassis){
			
			console.log(oneChassis);
			try{
				options.autostart_iauc = oneChassis["options"]["autostart_iauc"];
				$("#iauc").prop("checked",Boolean(options.autostart_iauc));
                                
                                options.autostart_tcweb = oneChassis["options"]["autostart_tcweb"];
				$("#tc-web").prop("checked",Boolean(options.autostart_tcweb));
                                
                                
			}
			catch(e)
			{
				console.log("options never set");
			}
			

			});                        


$("input.rslider").click(
function(){
	var status = document.getElementById('status');
	switch(this.id)
	{	
            case "iauc":
                if(this.checked)
                {
                 options.autostart_iauc = "yes";	
		status.textContent = 'IAUC Autostart ON';   
                }else{
                    options.autostart_iauc = "";
		status.textContent = 'IAUC Autostart OFF';
                }  
                break;
            case "tc-web":
                if(this.checked)
                {
                 options.autostart_tcweb = "yes";	
		status.textContent = 'TC-WEB Autostart ON';   
                }else{
                    options.autostart_tcweb = "";
		status.textContent = 'TC-WEB Autostart OFF';
                }  
                break;
		
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

});    
