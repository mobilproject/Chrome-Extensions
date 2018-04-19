var pageUrl = window.location;
var options = {
    "autostart_iauc": "",
    "autostart_tcweb": ""
};



chrome.storage.sync.get("options", function (oneChassis) {

    try {
        options.autostart_iauc = oneChassis["options"]["autostart_iauc"];
        options.autostart_tcweb = oneChassis["options"]["autostart_tcweb"];
        window.options = options;

        console.log("IAUC autostart: " + Boolean(options.autostart_iauc) + ", TC-WEB: " + Boolean(options.autostart_tcweb));
        if (Boolean(options.autostart_iauc) && pageUrl.href.indexOf("taacaa")<0)
        {
            iaucstart();
        } else if (Boolean(options.autostart_tcweb))
        {
            tcwebstart();
        }
    } catch (e)
    {

        options.autostart_iauc = "yes";
        options.autostart_tcweb = "yes";
        chrome.storage.sync.set({"options": options}, function () {
            iaucstart();
        });
    }
});




// listen for changes

function iaucstart()
{

    if (pageUrl.href.match(/asnet/g) != null)
    {
        console.log("old version or asnet");

        //http://inventivesolutionste.ipage.com/javascripts/cdd/asnetdirectsystem.js
        pageScriptS = window.document.createElement('script');
        pageScriptS.type = 'text/javascript';
        pageScriptS.async = true;
        pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/asnetdirectsystem.js';
        document.getElementsByTagName('head')[0].appendChild(pageScriptS);


    } else if (pageUrl.href.match(/abtrading/g) != null)
    {
        pageScriptS = window.document.createElement('script');
        pageScriptS.type = 'text/javascript';
        pageScriptS.async = true;
        pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/abtrading.js';
        document.getElementsByTagName('head')[0].appendChild(pageScriptS);
    } else if (pageUrl.href.match(/preint/g) != null)
    {
        pageScriptS = window.document.createElement('script');
        pageScriptS.type = 'text/javascript';
        pageScriptS.async = true;
        pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/asnetdirect.js';
        document.getElementsByTagName('head')[0].appendChild(pageScriptS);
    } else if (window.location.href.indexOf("vehicle/search") >= 0 && window.location.href.indexOf("exhibit") >= 0)
    {
        console.log("pager loader initiated");
        pageScriptS = window.document.createElement('script');
        pageScriptS.type = 'text/javascript';
        pageScriptS.async = true;
        pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/advanced_scraper.js';
        document.getElementsByTagName('head')[0].appendChild(pageScriptS);
    } else {


        start();

    }
}
function tcwebstart()
{
    if (window.location.href.indexOf("taacaa") > 0) {
        try {
            aaa_init();
        } catch (e) {

            if (document.getElementById("aaa") == undefined)
            {
                console.log(e.message);

                var ss = document.createElement("script");
                ss.setAttribute('onload', 'this.onload=function(){};aaa_init()');
                ss.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
                ss.async = true;
                ss.id = "aaa";
                ss.type = "text/javascript";
                ss.src = "https://inventivesolutionste.ipage.com/javascripts/cdd/taacaa/aaa_v1.js";
                document.body.appendChild(ss);
            }
        }
    }
}


function start()
{
    if (window.origin == "https://www.iauc.co.jp")
    {
        console.log("https://www.iauc.co.jp", "window origin");
    }

    if (window.ActiveSheet == undefined && pageUrl.href.match(/vehicle\/mylist|vehicle\/carlist/g) != null || window.ActiveSheet == undefined && pageUrl.href.indexOf("iauc.co.jp/detail") > 0)
    {
//Create elements
        pageScript = window.document.createElement('script');
        pageScript.type = 'text/javascript';
        pageScript.async = true;
        pageScript.charset = "UTF-8";
        pageScript.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/iauc_starter.js';
        document.getElementsByTagName('body')[0].appendChild(pageScript);





//END of if myWindow.location.href==undefined
    } else {
        pageScriptS = window.document.createElement('script');
        pageScriptS.type = 'text/javascript';
        pageScriptS.async = true;
        pageScriptS.setAttribute('defer', '');
        pageScriptS.setAttribute('onload', 'this.onload=function(){refreshCode()};');
        pageScriptS.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
        pageScriptS.src = 'https://inventivesolutionste.ipage.com/javascripts/cdd/codestarter.js';
        document.getElementsByTagName('body')[0].appendChild(pageScriptS);
        //console.log("script starter added");
    }
}

//console.log(window.location.href + "<br>" + currentPage);






////////////////////////////////
////////////////////////////////

/*var actualCode = ` function localJsonpCallback(json)
 {
 alert(json.message);
 }
 /////////////
 $(document).ready(function(){
 $('body').on('change','.page-select', function() {
 setTimeout(function() {   
 $(".list-row .list-body-buttons").each(function() {
 // $(this).html('<input type="text" value="" class="jans_bid_price" style="width:120px; height:25px;margin-top:3px;" />');
 });
 }, 7000);
 
 })
 });
 
 /////////////
 //var someFixedRandomValue = ${ Math.random() };
 `;
 
 //var script = document.createElement('script');
 //script.textContent = actualCode;
 //(document.head||document.documentElement).appendChild(script);
 //script.remove();
 */
chrome.runtime.onMessage.removeListener(dostuff);
chrome.runtime.onMessage.addListener(dostuff);

var reqcounter = 0;

function dostuff(request, sender, sendResponse) {

    if (reqcounter == 0)
    {

        sendResponse({"message": "response from content"});

        var rm = request.message;
        var fp = request.chassis_code;
        var sp = request.chassis_no;
        //console.log("Hi from content 1");
        if (rm == "oliac")
        {
            reqcounter = 1;
            /////////////////////////

            setTimeout(function () {
                startLM(fp, sp);
            }, 500);






            function startLM(fp, sp)
            {
                //var fp = $(".large-input")[0]!=undefined? $(".large-input")[0].value:"";
                //var sp = $(".large-input")[1]!=undefined? $(".large-input")[1].value:"";


                //var chassiscodex = "DA64V-496774";

                console.log("oliac XHR working ", fp, sp);

                var url = "https://sayuri.co.jp/en/api/check_chassis_no";
                $.post(url, {chassis_code: fp, chassis_no: sp})
                        .done(function (data) {
                            console.log($(data).find("h1").prevObject[2].innerText.trim());
                            $("#oliacresponse").text($(data).find("h1").prevObject[2].innerText.trim());
                        }

                        );


            }





            //////////////////////////
        }
        setTimeout(function () {
            reqcounter = 0;
        }, 2000);
    } else {

    }


}