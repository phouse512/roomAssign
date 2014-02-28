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
	$(".alert-save").show("slow", function() {
		$(".save-close").on("click", function(){
			$(".alert-save").hide("slow");
		});
	});
}

function submitApp(){
	if(!$(".select-room").val()){
		$(".alert-submit-error").show("slow", function() {
			$(".error-close").on("click", function(){
				$(".alert-submit-error").hide("slow");
			});
		});

	} else {
		$(".alert-submit").show("slow", function() {
			$(".submit-close").on("click", function(){
				$(".alert-submit").hide("slow");
			});
		});
	}
}

function searchForRoommate(){
	if(!$("#inputMajor").val()){
		$(".alert-search-error").show("slow", function() {
			$(".error-close").on("click", function(){
				$(".alert-search-error").hide("slow");
			});
		});
		console.log("error");
	} else {
		$("#roommate-form").hide("slow", function() {
			$("#roommate-results").show("slow");
		});
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