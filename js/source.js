function logout(){
	window.location.replace("login.html");
}

function login(){
	window.location.replace("research.html");
}

function chooseDorm(){
	$("#data1").hide("slow", function(){
		$("#data2").show("slow");
		$(".backButton").on("click", function() {
			backToMap();
		});

		$("#2Floor").on("click", function(e){
			secondFloor();
		});
		$("#3Floor").on("click", function(e){
			thirdFloor();
		});
		$("#4Floor").on("click", function(e){
			fourthFloor();
		});
	});
}

function backToMap(){
	$("#data2").hide("slow", function(){
		$("#data1").show("slow");
		$(".dormButton").on("click", function() {
			chooseDorm();
		});
	});
}

function displayApplicationReceipt(){
	$(".appliedDorm").html(localStorage.appliedDorm);
	$(".appliedRoom").html(localStorage.appliedRoom);
	$("#apply-data1").hide("slow", function(){
		$("#applied").show("slow");
	});
}

function displayApplication(){
	$("#applied").hide("slow", function(){
		$("#apply-data1").show("slow");
	});
}

function parseRoom(roomNumber){
	hideRoommateForms();
	if(roomNumber == "310"){
		console.log(roomNumber);
		$(".apply-error").hide("slow", function(){
			$(".room-selection").removeClass("has-error");
			$(".room-selection").addClass("has-success");
		});
		showDouble();
	} else if (roomNumber == "205"){
		console.log(roomNumber);
		$(".apply-error").hide("slow", function(){
			$(".room-selection").removeClass("has-error");
			$(".room-selection").addClass("has-success");
		});
		showSingle();
	} else if (roomNumber == "410"){
		console.log(roomNumber);
		$(".apply-error").hide("slow", function(){
			$(".room-selection").removeClass("has-error");
			$(".room-selection").addClass("has-success");
		});
		showTriple();
	} else {
		//error no room found
		$(".apply-error").show("slow", function(){
			$(".room-selection").addClass("has-error");
		});
	}
}

function hideRoommateForms(){
	$(".roommate1").hide("slow");
	$(".roommate2").hide("slow");
	$(".noRoommate").hide("slow");
	$(".submitApp").hide("slow");
}

function showSingle(){
	$(".noRoommate").show("slow");
	$(".submitApp").show("slow");
}

function showDouble(){
	$(".roommate1").show("slow");
	$(".submitApp").show("slow");
}

function showTriple(){
	$(".roommate1").show("slow");
	$(".roommate2").show("slow");
	$(".submitApp").show("slow");
}

function saveApp(){
	clearAlerts();
	saveApplication();
	localStorage.isAppSaved = 1
	$(".alert-save").show("slow", function() {
		$(".save-close").on("click", function(){
			$(".alert-save").hide("slow");
		});
	});
}

function submitApp(){
	clearAlerts();
	if(!$(".select-room").val()){
		$(".alert-submit-error").show("slow", function() {
			$(".error-close").on("click", function(){
				$(".alert-submit-error").hide("slow");
			});
		});
	} else {
		storeFinishedApplication($(".select-room").val(), $(".select-dorm").val());
		displayApplicationReceipt();
		$(".alert-submit").show("slow", function() {
			$(".submit-close").on("click", function(){
				$(".alert-submit").hide("slow");
			});
		});

	}
}

function searchForRoommate(){
	clearAlerts();
	if(!$("#inputMajor").val()){
		$(".alert-search-error").show("slow", function() {
			$(".error-close").on("click", function(){
				$(".alert-search-error").hide("slow");
			});
		});
		console.log("error");
	} else {
		$("#roommate-results").fadeIn("slow");
	}
}


function secondFloor(){
	$('.floorplan').css("background-image", "url(img/sargent2.gif)");  
	$("#2Floor").addClass("selectedFloor");
	$("#3Floor").removeClass("selectedFloor");
	$("#4Floor").removeClass("selectedFloor");
}

function thirdFloor(){
	$('.floorplan').css("background-image", "url(img/sargent3.gif)");  
	$("#3Floor").addClass("selectedFloor");
	$("#2Floor").removeClass("selectedFloor");
	$("#4Floor").removeClass("selectedFloor");
}

function fourthFloor(){
	$('.floorplan').css("background-image", "url(img/sargent4.gif)");  
	$("#4Floor").addClass("selectedFloor");
	$("#3Floor").removeClass("selectedFloor");
	$("#2Floor").removeClass("selectedFloor");
}

function autoLoadSavedData(){
	clearAlerts();
	if (localStorage.appliedRoom){
		//if application is already finished
		console.log("stored");
		$("#selected-room").html(localStorage.appliedRoom);
		$("#selected-dorm").html(localStorage.appliedDorm);
		displayApplicationReceipt();
	} else {
		// if application is not finished
		if(localStorage.isAppSaved){
			loadSavedApplication();

		} else {
			// if application is not saved
			$("#selected-room").html("");
			$("#selected-dorm").html("");	
			displayApplication();
		}
	}
}

function loadSavedApplication(){
	if(localStorage.savedRoomNumber){
		$(".select-room").val(localStorage.savedRoomNumber);
		parseRoom(localStorage.savedRoomNumber);
	}
	if(localStorage.savedDormBuilding){
		$(".select-dorm").val(localStorage.savedDormBuilding);
	}
	if(localStorage.savedRoommateName1){
		showDouble();
		$("#roommateName1").val(localStorage.savedRoommateName1);
	}
	if(localStorage.savedNetID1){
		showDouble();
		$("#netID1").val(localStorage.savedNetID1);
	}
	if(localStorage.savedRoommateName2){
		showTriple();
		$("#roommateName2").val(localStorage.savedRoommateName2);
	}
	if(localStorage.savedNetID2){
		showTriple();
		$("#netID2").val(localStorage.savedNetID2);
	}
	$(".alert-loadSave").show("slow", function() {
		$(".loadSave-close").on("click", function(){
			$(".alert-loadSave").hide("slow");
		});
	});
}

function saveApplication(){
	if($(".select-room").val()){
		localStorage.savedRoomNumber = $(".select-room").val();
	}
	if($(".select-dorm").val()){
		localStorage.savedDormBuilding = $(".select-dorm").val();
	}
	if($("#roommateName1").val()){
		localStorage.savedRoommateName1 = $("#roommateName1").val();
	} 
	if($("#netID1").val()){
		localStorage.savedNetID1 = $("#netID1").val();
	} 
	if($("#roommateName2").val()){
		localStorage.savedRoommateName2 = $("#roommateName2").val();
	} 
	if($("#netID2").val()){
		localStorage.savedNetID2 = $("#netID2").val();
	} 
}

function clearSavedApplication(){
	localStorage.removeItem("savedRoomNumber");
	localStorage.removeItem("savedDormBuilding");
	localStorage.removeItem("savedRoommateName1");
	localStorage.removeItem("savedNetID1");
	localStorage.removeItem("savedRoommateName2");
	localStorage.removeItem("savedNetID2");
	localStorage.removeItem("isAppSaved");
}

function storeFinishedApplication(roomNumber, dorm){
	localStorage.appliedRoom = roomNumber;
	localStorage.appliedDorm = dorm;
}

function resetFinishedApplication(){
	localStorage.removeItem("appliedRoom");
	localStorage.removeItem("appliedDorm");
}

function clearAlerts(){
	$(".alert").hide("slow");
}