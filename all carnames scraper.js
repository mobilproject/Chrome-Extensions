var colar = [];



recLoop();

function recLoop(){
var cl = $("p.carname");
for (var i=0; i<cl.length; i++)
{
	if (checkColar(cl[i].innerText))
    {
		
	}
else {
	colar.push(cl[i].innerText);
	console.log(cl[i].innerText);
}
	
}
	if ($("#select_pager")[0].value<$("#select_pager")[0].childElementCount)
				{
$("#select_pager")[0].value++; $("#select_pager")[0].onchange();					setTimeout(function(){recLoop();}, 4000);
				}
		
		
	
                }


function checkColar(cc)
{
var bul = false;
	for (var i=0; i<colar.length; i++)
    {
    	if (colar[i]==cc)
            {
				bul = true;
            }
    }
return bul;
}