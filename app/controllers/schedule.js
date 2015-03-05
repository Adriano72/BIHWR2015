var args = arguments[0] || {};

var rippleEffect = Alloy.createWidget('com.mp5systems.rippleeffect');

var retreatSchedule = require("scheduleJSON").preRetreatSchedule;
var seminarSchedule = require("scheduleJSON").seminarSchedule;

//Ti.API.info("RETREAT SCHEDULE: " + JSON.stringify(retreatSchedule));

function doOpen(evt) {

	if (OS_ANDROID) {
		abx.title = "The John Main Seminar 2015";
		abx.titleFont = "Expo Sans Pro Regular.otf";
		abx.titleColor = "#204000";

		//actionBarHelper.setIcon('/drawericonw@2x.png');

	};
	
	loadSeminar();
}

// Add Eventlistener to the window
$.scheduleWindow.addEventListener("click", function(e) {
	if (e.source.rippleEffect) {
		// Here we'll pass the clicked object to our animation handler.
		rippleEffect.create(e);
	}
});

function loadRetreat() {
	
	$.retreat.color = "green";
	$.seminar.color = "#fff";

	var rowsRetreat = [];
	
	$.scheduleTable.setData(rowsRetreat);

	_.each(retreatSchedule, function(value) {

		var rowRetreat = Alloy.createController('timeTableRow', {

			day : value.day,
			date : value.date,
			time : value.time,
			desc : value.desc

		}).getView();
		rowsRetreat.push(rowRetreat);

	});

	//Ti.API.info("DATA: " + value.img);

	$.scheduleTable.setData(rowsRetreat);
}

function loadSeminar() {
	
	$.retreat.color = "#fff";
	$.seminar.color = "green";

	var rowsSeminar = [];
	
	$.scheduleTable.setData(rowsSeminar);

	_.each(seminarSchedule, function(value) {

		var rowSeminar = Alloy.createController('timeTableRow', {

			day : value.day,
			date : value.date,
			time : value.time,
			desc : value.desc

		}).getView();
		rowsSeminar.push(rowSeminar);

	});

	//Ti.API.info("DATA: " + value.img);

	$.scheduleTable.setData(rowsSeminar);
}

