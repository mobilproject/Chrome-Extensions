document.addEventListener('DOMContentLoaded', function () {
	console.log("initiate options x");
	initiate_x();
});
$("#datepicker").on("change", function () {



	try {
		CreateObjectStore(dbName, storeName);
	} catch (e) {
		console.log(e.message);
		var ss = document.createElement("script");
		//ss.setAttribute('onload', 'this.onload=function(){};dataLoader()');
		//ss.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
		ss.async = true;
		ss.type = "text/javascript";
		ss.src = "https://inventivesolutionste.ipage.com/dlmfiles/indexdb_manager.js";
		document.body.appendChild(ss);
	}


});



function initiate_x() {

	
	$("#selectmenu").selectmenu();


	$("#datepicker").datepicker("option", "dateFormat", "dd/mm/yy");
	$("li.menu-item").on("click",

		function (e) {

			$("li.menu-item").removeClass("ui-state-hover");
			$(e.target).parent().addClass("ui-state-hover");

			$(".download-box").eq(0).html("<p>" + $(e.target).text() + "</p>" + "<div id=\"progressbar\"></div>");



			switch ($(e.target).text().trim()) {
				case "My Cars":
					$("#inner-content").html(mycar);

					try {

						retrieveData();


					} catch (e) {
						console.log(e.message);
						var ss = document.createElement("script");
						//ss.setAttribute('onload', 'this.onload=function(){};retrieveData()');
						//ss.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
						ss.async = true;
						ss.type = "text/javascript";
						ss.src = "https://inventivesolutionste.ipage.com/dlmfiles/indexdb_manager.js";
						document.body.appendChild(ss);
					}


					break;
				case "Market Price":
					$("#inner-content").html(marketreport);
					break;
				case "Settings":
					$("#inner-content").html(settingscontent);
					break;
				case "My Lists":
					$("#inner-content").html(listcontent);
					$(function () {
						$("#tabs").tabs();
					});
					break;
				case "Help":
					$("#inner-content").html(helpcontent);
					break;
			}



		}
	);
	var mycar = `<table id="mylots">
<thead>
<tr id="mytable" class="header">
<tr id="mytable" class="header">
<th id="image_th"><div>image</div></th>
<th id="auction_th"><div>auction</div></th>
<th id="lot_th"><div>lot no</div></th>
<th id="year_th"><div>year</div></th>
<th id="model_th"><div>model</div></th>
<th id="grade_th"><div>grade</div></th>
<th id="type_th"><div>type<br>color</div></th>
<th id="rate_th"><div>rate<br>Int/Ext</div></th>
<th id="cc_th"><div>cc<br>km</div></th>
<th id="date_th"><div>date</div></th>
<th id="user_th"><div>user</div></th>
<th id="x_th"><div></div></th>
<th id="xx_th"><div></div></th>
</tr>
</thead>
<tbody id="inner-tbody">
		</tbody>
	</table>`;

	var marketreport = ``;
	var settingscontent = ``;
	var listcontent = `<div id="tabs">
  <ul>
    <li><a href="#fragment-1">One</a></li>
    <li><a href="#fragment-2">Two</a></li>
    <li><a href="#fragment-3">Three</a></li>
  </ul>
  <div id="fragment-1">
    Lorem ipsum dolor sit amet, ccc consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
  </div>
  <div id="fragment-2">
    Lorem ipsum dolor sit amet, 222 consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
  </div>
  <div id="fragment-3">
    Lorem ipsum dolor sit amet, 333 consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
  </div>
</div>
`;
}

$("#sync").on("click", function () {
	try {

		dataLoader();


	} catch (e) {
		console.log(e.message);
		var ss = document.createElement("script");
		//ss.setAttribute('onload', 'this.onload=function(){};dataLoader()');
		//ss.setAttribute('onreadystatechange', 'if (this.readyState === "complete") this.onload()');
		ss.async = true;
		ss.type = "text/javascript";
		ss.src = "https://inventivesolutionste.ipage.com/dlmfiles/indexdb_manager.js";
		document.body.appendChild(ss);
	}
});
