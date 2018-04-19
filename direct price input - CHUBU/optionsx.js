var db;
var update_needed;

var DBOpenRequest = window.indexedDB.open("mydatabase", 3);

document.addEventListener('DOMContentLoaded', function () {  
	console.log("initiate x");
  	initiate_x();	
});

DBOpenRequest.onsuccess = function(event) {
console.log("Database initialised");
    
  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;
}

function displayData() {
  var transaction = db.transaction(['auctiondata'], "readonly");
  var objectStore = transaction.objectStore('auctiondata');

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      console.log(cursor.value.cc + ', ' + cursor.value.year);
      cursor.continue();
    } else {
      console.log('Entries all displayed.');
    }
  };
}
try{
	displayData();
}
catch(e)
	{
		console.log(e.message);
	}

	

function initiate_x(){
	$("li.menu-item").on("click", 
	
	function (e)
	{
		
		$("li.menu-item").removeClass("ui-state-hover");
		$(e.target).parent().addClass("ui-state-hover");
		
		$(".download-box").eq(0).html("<p>" + $(e.target).text() + "</p>");
		
	 
	 
		switch($(e.target).text().trim())
			{
				case "My Cars":
			$("#inner-content").html(mycar);		
					break;
					case "Market Price":
			$("#inner-content").html(marketreport);		
					break;
					case "Settings":
			$("#inner-content").html(settingscontent);		
					break;
					case "My Lists":
			$("#inner-content").html(listcontent);
					$( function() {
    			$( "#tabs" ).tabs();
					} );
					break;
					case "Help":
			$("#inner-content").html(helpcontent);		
					break;
			}
		
		
		
	}	
	);
	var mycar = `<table>
		<tbody>
		<tr>
		<th>
			auction
		</th>
			<th>
				lot
			</th>
			<th>
				year
			</th>
			<th>model</th>
			<th>grade</th>
			<th>type</th>
			<th>color</th>
			<th>rate</th>
			<th>cc</th>
			<th>km</th>
			<th>date</th>
			<th>user</th>
			
		</tr>
			<tr>
				<td>TAA Kinki</td>				
				<td>1215/65485 </td>				
				<td>2010 </td>				
				<td>Corolla </td>				
				<td>X </td>				
				<td>NZE141 </td>				
				<td>white </td>				
				<td>R B/B </td>				
				<td>1500cc </td>				
				<td>100000km </td>				
				<td>2018/2/20 </td>				
				<td>jpn </td>				
			</tr>
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


