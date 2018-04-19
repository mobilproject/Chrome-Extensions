var x;

if (x==false || x == undefined)
{
$(".list-body-image.visited").parent().parent().parent().hide();
$(".active-a").parent().parent().parent().hide();
$(".active-b").parent().parent().parent().hide();
$(".active-c").parent().parent().parent().hide();
$(".active-d").parent().parent().parent().hide();
for (var i=0;i<$("input[type=button]").length;i++)
{
	if ($("input[type=button]").eq(i).attr("data-mode")=="delete")
        {
	console.log($("input[type=button]").eq(i).parent().parent().parent().hide());
        }
}
x = true; 

}
else{
$(".list-body-image.visited").parent().parent().parent().show(); 
$(".active-a").parent().parent().parent().show();
$(".active-b").parent().parent().parent().show();
$(".active-c").parent().parent().parent().show();
$(".active-d").parent().parent().parent().show();

for (var i=0;i<$("input[type=button]").length;i++)
{
	if ($("input[type=button]").eq(i).attr("data-mode")=="delete")
        {
	console.log($("input[type=button]").eq(i).parent().parent().parent().show());
        }
}
x = false;

}

