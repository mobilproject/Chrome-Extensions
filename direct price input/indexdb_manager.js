var receivedObjects = {
	id: "",
	aucname: "",
	detail_link: "",
	lotno: "",
	year: "",
	car_name: "",
	grade: "",
	type: "",
	cc: "",
	inspect: "",
	mileage: "",
	color: "",
	shift: "",
	ac: "",
	condition: "",
	ext_grade: "",
	int_grade: "",
	start_price: "",
	bid_price: "",
	chassis_code: "",
	remarks: "",
	extension: "",
	purchase_country: "",
	auction_sheet: "",
	front_image: "",
	rear_image: "",
	added_by: "",
	deleted_by: ""
};
var user_ids = {
	3: 'bots',
	4: 'chile',
	5: 'dur',
	7: 'japan_online_user',
	6: 'jpn',
	8: 'kenya_user',
	9: 'lesotho_user',
	13: 'messina_user',
	10: 'mozamb_user',
	11: 'namibia_user',
	12: 'pakistan_user',
	14: 'swazi_user',
	15: 'tanzania_user',
	16: 'thai',
	17: 'uae_user',
	19: 'uganda',
	18: 'uk_user',
	20: 'zambia',
	21: 'zimbab_user',
	28: 'mohib',
	29: 'kareem',
	30: 'ehtesham',
	31: 'jawed',
	33: 'hameed',
	34: 'deen',
	35: 'auran',
	36: 'qasam',
	37: 'muheb',
	38: 'shams',
	39: 'nasir',
	40: 'noor',
	41: 'dawood',
	42: 'fazal',
	43: 'malik',
	23: 'yahya',
	44: 'khan',
	45: 'tan',
	46: 'dom',
	47: 'mong',
	48: 'qadeer',
	49: 'dev',
	50: 'snawaz',
	51: 'nasrullah',
	52: 'haq',
	53: 'aziz',
	54: 'tariq',
	55: 'noman',
	56: 'sham',
	57: 'aman_mohib',
	58: 'ameen',
	59: 'hunayama',
	60: 'data_entry',
	61: 'ugonline',
	62: 'naiko',
	63: 'aa',
	64: 'masoom',
	65: 'julius',
	66: 'imtiaz'
};
var sampledata = [];
var rowdata = [];
var update_needed;

$("#datepicker").off().on("change", function () {
	storeName = $("#datepicker").val();
	//decide to CREATE an OBJECT STORE or NOT
	var request = indexedDB.open(dbName);
	request.onsuccess = function (e) {
		var db = e.target.result;
		try {

			var transaction = db.transaction([storeName]);
			var objectStore = transaction.objectStore(storeName);
			db.close();
		} catch (e) {
			db.close();
			console.log(e.message);
			CreateObjectStore(dbName, storeName);
		}
	}
	updateSyncMessage();
});

$(".searchform").click(
	function (event) {
		try {
			event.target.select();
		} catch (e) {}
	}
);
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//READ DATA
//by LOT number
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

$("input#lotsearch").off().keypress(function (event) {
	if (event.keyCode == "13") {
		searchbylot();
	}
});

$("input#modelsearch").off().keypress(function (event) {
	if (event.keyCode == "13") {
		searchbymodel();
	}
});

$("input#chassissearch").off().keypress(function (event) {
	if (event.keyCode == "13") {
		modelsearch();
	}
});

$("button.icon-search").off().on("click", function (event) {
	switch (event.target.parentElement.title) {
		case "lot search":
			searchbylot();
			break;
		case "model search":
			searchbymodel();
			break;
		case "chassis search":
			searchbychassis();
			break;
	}
});
var mycar = `<table id="mylots">
<thead>
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

function searchbylot() {


	var val1 = "//" + $("#lotsearch").val();




	console.log("searching for lot", val1);
	var request = indexedDB.open(dbName);
	request.onsuccess = function (e) {
		var db = e.target.result;
		var transaction = db.transaction([storeName]);
		var objectStore = transaction.objectStore(storeName);

		objectStore.getAll().onsuccess = function (event) {
			//console.log("Got all lots: " + event.target.result.length);
			$("p#content_title").text("Total Entries: " + event.target.result.length);
			displayData(event.target.result, val1);
		};
	}
}

function searchbymodel() {


	var val1 = $("#modelsearch").val();
	console.log("searching for model", val1);
	var request = indexedDB.open(dbName);
	request.onsuccess = function (e) {
		var db = e.target.result;
		var transaction = db.transaction([storeName]);
		var objectStore = transaction.objectStore(storeName);

		objectStore.getAll().onsuccess = function (event) {
			//console.log("Got all lots: " + event.target.result.length);
			$("p#content_title").text("Total Entries: " + event.target.result.length);
			displayData_model(event.target.result, val1);
		};
	}
}

function consolidateLots(range, rover) {

}

function displayData_model(data, val1) {

	var total_found = 0;
	var totalrows = data.length;
	var page_count;
	var progpos = 0;
	var rowcount = 0;
	var pagerlimit = $("#selectmenu").val();
	page_count = totalrows / pagerlimit;
	$("#inner-content").html(mycar);
	var mycarstbody = $("#inner-tbody");
	mycarstbody.innerHTML = "";

	console.log(data.length, val1);
	for (i = 0; i < data.length; i++) {

		if (data[i].car_name.toLowerCase().search(val1.toLowerCase()) >= 0) {
			mycarstbody.append("<tr><th><img class='list img' src='" +
					data[i].front_image.replace(/iauc_pic\/[0-9]+/g, "pv/IMG_SVR_PASS") +
					"'></th><td>" +
				data[i].aucname +
				"</td><td class='lot'>" +
				data[i].lotno +
				"</td><td class='lot'>" +
				data[i].year +
				"</td><td>" +
				data[i].car_name +
				"</td><td>" +
				data[i].grade +
				"</td><td>" +
				data[i].type +
							 "<br>" +
							   data[i].color +

				"</td><td>" +
				data[i].condition +
							   "<br>" +
							   data[i].int_grade + "/" +
							   data[i].ext_grade +					   
							   
				"</td><td>" +
				data[i].cc +
							   "<br>" +
							   data[i].mileage +
				"</td><td>" +				
				storeName +
				"</td><td>" +
				user_ids[data[i].added_by] +
							   "</td><td>" +				
				"</td><td>" +
				"</td></tr>");
			//increment found count
			total_found++;

		}
	}

	$("p#content_title").text("Total Entries: " + event.target.result.length + ", Total Found: " + total_found);
}

function displayData(data, val1) {
	var totalrows = data.length;
	var page_count;
	var progpos = 0;
	var rowcount = 0;
	var pagerlimit = $("#selectmenu").val();
	page_count = totalrows / pagerlimit;
	$("#inner-content").html(mycar);
	var mycarstbody = $("#inner-tbody");
	mycarstbody.innerHTML = "";
	for (i = 0; i < data.length; i++) {
		if (data[i].lotno.search(val1) >= 0) {
			if (data[i].lotno.substr(data[i].lotno.search(val1)).length == val1.length && rowcount < pagerlimit) {

				//console.log(data[i].lotno, val1);
				//TASKs to do
				//console.log("Name for id " + cursor.key + " is " + data[i]);
				//generate array to display and manage
				//do not run retrieve() unless there is change
				//detect change
				//icon
				//https://www.iauc.co.jp/iauc_pic/80/autobank/26/www/2018/67/05120067_01a.jpg?key=637e77cbac1e65ce7b602c1a4f984a71
				//https://www.iauc.co.jp/iauc_pic/01/autobank/26/www/2018/67/05120067_01a.jpg?key=637e77cbac1e65ce7b602c1a4f984a71
				//https://www.iauc.co.jp/iauc_pic/00/autobank/26/www/2018/67/05120067_map.jpg?sp=2&key=637e77cbac1e65ce7b602c1a4f984a71
				
				//https://www.iauc.co.jp/iauc_pic/80/TC/3/WWW/1443/01/B09001.JPG?key=637e77cbac1e65ce7b602c1a4f984a71
				//https://www.iauc.co.jp/iauc_pic/01/TC/3/WWW/1443/01/B09001.JPG?key=637e77cbac1e65ce7b602c1a4f984a71
				//https://www.iauc.co.jp/iauc_pic/00/TC/3/WWW/1443/01/A09001.JPG?sp=1&key=637e77cbac1e65ce7b602c1a4f984a71
				
				
				//https://www.iauc.co.jp/pv/IMG_SVR_PASS/TC/3/WWW/1443/01/B09001.JPG?timestamp=1520991235752
				mycarstbody.append("<tr><th><img class='list img' src='" +
					data[i].front_image.replace(/iauc_pic\/[0-9]+/g, "pv/IMG_SVR_PASS") +
					"'></th><td>" +
				data[i].aucname +
				"</td><td class='lot'>" +
				data[i].lotno +
				"</td><td class='lot'>" +
				data[i].year +
				"</td><td>" +
				data[i].car_name +
				"</td><td>" +
				data[i].grade +
				"</td><td>" +
				data[i].type +
							 "<br>" +
							   data[i].color +

				"</td><td>" +
				data[i].condition +
							   "<br>" +
							   data[i].int_grade + "/" +
							   data[i].ext_grade +					   
							   
				"</td><td>" +
				data[i].cc +
							   "<br>" +
							   data[i].mileage +
				"</td><td>" +				
				storeName +
				"</td><td>" +
				user_ids[data[i].added_by] +
							   "</td><td>" +				
				"</td><td>" +
				"</td></tr>");
			}
		}
	}
}
var storeName;

setTimeout(function () {
	$("#datepicker").datepicker("option", "dateFormat", "dd/mm/yy");
	storeName = $("#datepicker").datepicker().val();
	updateSyncMessage();
}, 1000);


function reset_ro() {
	receivedObjects = {
		id: "",
		aucname: "",
		detail_link: "",
		lotno: "",
		year: "",
		car_name: "",
		grade: "",
		type: "",
		cc: "",
		inspect: "",
		mileage: "",
		color: "",
		shift: "",
		ac: "",
		condition: "",
		ext_grade: "",
		int_grade: "",
		start_price: "",
		bid_price: "",
		chassis_code: "",
		remarks: "",
		extension: "",
		purchase_country: "",
		auction_sheet: "",
		front_image: "",
		rear_image: "",
		added_by: "",
		deleted_by: ""
	};

}

function generateRows(sampledata) {
	rowdata = [];

	for (var i = 0; i < sampledata.length - 1; i++) {
		var k = 0;
		for (var j in receivedObjects) {
			receivedObjects[j] = sampledata[i][k];
			k++;
		}
		rowdata.push(receivedObjects);
		reset_ro();
	}
	return rowdata;
}




//console.log(rowdata);



var dbName = "the_name";
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {
	READ_WRITE: "readwrite"
};
IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
	window.alert("Your browser doesn't support a stable version of IndexedDB. Some features will not be available.");
} else {
	//start
	console.log("database can be opened");
}

function opendatabase() {
	var request = indexedDB.open(dbName, 1);
	request.onerror = function (event) {
		// Generic error handler for all errors targeted at this database's
		// requests!
		console.log(event.target.error.message + " - is an error on database event target: ", event.target);
	};
	request.onsuccess = function (event) {
		console.log(event.type + " - database open successfully");
		var db = event.target.result;
		//dataLoader();
	};
	request.onupgradeneeded = function (event) {
		var db = event.target.result;
		console.log("onupgradeneeded running");
		try {
			var objectStore = db.createObjectStore(storeName, {
				keyPath: "id"
			});
			// Create an index to search lots by lot number. We want to ensure that
			// no two lots have the same lot number, so use a unique index.
			objectStore.createIndex("lotno", "lotno", {
				unique: false
			});
			// Use transaction oncomplete to make sure the objectStore creation is 
			// finished before adding data into it.
			objectStore.transaction.oncomplete = function (event) {
				// Store values in the newly created objectStore.
			};
		} catch (e) {
			console.log(e.message);
		}
	};
}
/* VERSION CHECK 
Use this if needed
*/




function CreateObjectStore(dbName, storeName) {
	var request = indexedDB.open(dbName);
	request.onsuccess = function (e) {
		var db = e.target.result;
		var version = parseInt(db.version);
		db.close();

		//////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////
		///////////////DB/VERSION/CONTROL/////////////////////////////////////////

		console.log(dbName + " version", version + ", store: " + storeName);
		var secondRequest = indexedDB.open(dbName, version + 1);
		//console.log(secondRequest);
		secondRequest.onupgradeneeded = function (e) {
			var db = e.target.result;
			try {
				console.log("upgrading", version + 1);
				var objectStore = db.createObjectStore(storeName, {
					keyPath: 'id'
				});
				objectStore.createIndex("lotno", "lotno", {
					unique: false
				});
			} catch (e) {}
		};
		secondRequest.onsuccess = function (e) {
			e.target.result.close();
			console.log("new data store created");

		}
		secondRequest.onerror = function (e) {
			console.log(e.target.error.message, "secondRequest");
		}

	};
	request.onerror = function (e) {
		console.log(e.type);
	}
}

function dataLoader() {
	$.ajax({
		url: "https://www.jjinventorysystem.com/test/ajpage_ver_jpnid.php",
		type: "POST",
		data: {
			action: "bidders",
			username: "deen",
			password: '123',
			jans_auction_date: storeName,
		},
		success: function (data) {
			inputest = data.split(";");
			sampledata = [];
			for (var i = 0; i < inputest.length; i++) {
				sampledata.push(inputest[i].split(",,"));

				for (var k = 0; k < sampledata[sampledata.length - 1].length; k++) {
					sampledata[sampledata.length - 1][k];
				}
			}
			//insert the data into the database
			startTransaction(generateRows(sampledata));
		}
	});

}

function startTransaction(rd) {

	console.log(rd.length, "startTransaction");

	var request = indexedDB.open(dbName);
	request.onsuccess = function (e) {

		var db = e.target.result;
		console.log(db);
		var transaction = db.transaction([storeName], "readwrite");
		var lotStore = transaction.objectStore(storeName);
		console.log(lotStore);
		rd.forEach(function (lot) {
			//console.log("adding rows " + lot); //JSON.stringify(lot)
			var request = lotStore.put(lot);
			//
			request.onsuccess = function (e) {
				//console.log(e.target.result + " " + " is the result id (key)");

			}
			request.oncomplete = function (e) {
				console.log(e.target.result + " data ADDED");
				e.target.result.close();
			}

		});
		console.log(rd.length);

		// Do something when all the data is added to the database.
		transaction.oncomplete = function (event) {
			console.log("All done!");
			deleteRow();
			var currentDate = new Date(new Date().getTime());
			var hours = currentDate.getHours();
			var mins = currentDate.getMinutes();
			var dd = currentDate.getDate();
			var mm = currentDate.getMonth() + 1;
			var yyyy = currentDate.getFullYear();
			//localStorage.setItem(storeName, dd + `/` + mm + `/` + yyyy + ` ` + hours + `:` + mins);
			var milliseconds = new Date().getTime();
			localStorage.setItem(storeName, milliseconds);
			updateSyncMessage();
		};

		transaction.onerror = function (event) {
			// Don't forget to handle errors!
			console.log("error! " + event.target.error.message);
		};
	}
}

//test delete 
function deleteRow() {

	var request = indexedDB.open(dbName);
	request.onsuccess = function (e) {
		var db = e.target.result;
		var request2 = db.transaction([storeName], "readwrite")
			.objectStore(storeName)
			.delete("");
		request2.onsuccess = function (event) {
			// It's gone!

			e.target.result.close();
			console.log(event.target, " row deleted");
		};
		request2.onerror = function (event) {
			// It's gone!
			e.target.result.close();
			console.log(event.target.error.message);

		};
	}
}

function updateSyncMessage() {

	if (localStorage.getItem(storeName) != null) {
		var currentDate = new Date(Number(localStorage.getItem(storeName)));
		var hours = currentDate.getHours();
		var mins = currentDate.getMinutes();
		var dd = currentDate.getDate();
		var mm = currentDate.getMonth() + 1;
		var yyyy = currentDate.getFullYear();
		//console.log(mins.toString());
		//localStorage.setItem(storeName, dd + `/` + mm + `/` + yyyy + ` ` + hours + `:` + mins);			
		$("#lastsync").text("Last sync: " + dd + '/' + mm + '/' + yyyy + ' ' + (hours.toString().length == 1 ? '0' + hours.toString() : hours) + ':' + (mins.toString().length == 1 ? '0' + mins.toString() : mins));
		var t = new Date().getTime();
		if (Math.abs(Number(localStorage.getItem(storeName)) - t) > 300000) {
			update_needed = true;
		} else {
			update_needed = "";

			$("#lastsync").text("Last sync: less than 5 mins ago");
		}

	} else {
		$("#lastsync").text("Last sync: data may not exist");
		update_needed = true;
	}




}

function retrieveData() {
	if (rowdata.length == 0) {
		var request = indexedDB.open(dbName);
		request.onsuccess = function (e) {
			var db = e.target.result;



			var objectStore = db.transaction(storeName).objectStore(storeName);

			var totalrows;
			var progressbar_steps;
			var page_count;
			var progpos = 0;
			var rowcount = 0;
			var pagerlimit = $("#selectmenu").val();

			objectStore.getAll().onsuccess = function (event) {
				//Count of all rows
				//endi pagerni necha sahifaligini bilsa buladi
				totalrows = event.target.result.length;
				page_count = totalrows / pagerlimit;
				progressbar_steps = 100 / pagerlimit;
				var data = event.target.result;
				var mycarstbody = $("#inner-tbody");

				for (i = 0; i < pagerlimit; i++) {

					if (rowcount < pagerlimit) {
						/* TASKs to do*/
						//console.log("Name for id " + cursor.key + " is " + cursor.value);
						//generate array to display and manage
						//do not run retrieve() unless there is change
						//detect change

						mycarstbody.append("<tr><th><img class='list img' src='" +
					data[i].front_image.replace(/iauc_pic\/[0-9]+/g, "pv/IMG_SVR_PASS") +
					"'></th><td>" +
				data[i].aucname +
				"</td><td class='lot'>" +
				data[i].lotno +
				"</td><td class='lot'>" +
				data[i].year +
				"</td><td>" +
				data[i].car_name +
				"</td><td>" +
				data[i].grade +
				"</td><td>" +
				data[i].type +
							 "<br>" +
							   data[i].color +

				"</td><td>" +
				data[i].condition +
							   "<br>" +
							   data[i].int_grade + "/" +
							   data[i].ext_grade +					   
							   
				"</td><td>" +
				data[i].cc +
							   "<br>" +
							   data[i].mileage +
				"</td><td>" +				
				storeName +
				"</td><td>" +
				user_ids[data[i].added_by] +
							   "</td><td>" +				
				"</td><td>" +
				"</td></tr>");
						progpos += progressbar_steps;
						rowcount++;

						$("#progressbar").progressbar({
							value: progpos
						});

					} else {
						console.log(request, "No more entries!");
						request.result.close();
					}
				}
			};
		};
		request.onerror = function (event) {
			console.log(event.target.error.message);
		};
		request.oncomplete = function (event) {
			console.log(event, "retrieve complete");
		};
	}
}
