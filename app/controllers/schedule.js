var args = arguments[0] || {};

var rippleEffect = Alloy.createWidget('com.mp5systems.rippleeffect');

var retreatSchedule = require("scheduleJSON").retreatSchedule;
//var seminarSchedule = require("scheduleJSON").seminarSchedule;

//Ti.API.info("RETREAT SCHEDULE: " + JSON.stringify(retreatSchedule));

function doOpen(evt) {

	if (OS_ANDROID) {
		abx.title = "Bere Island Easter Retreat 2015";
		abx.titleFont = "Expo Sans Pro Regular.otf";
		abx.titleColor = "#204000";

		//actionBarHelper.setIcon('/drawericonw@2x.png');

	};
	
	loadRetreat();
}

// Add Eventlistener to the window
$.scheduleWindow.addEventListener("click", function(e) {
	if (e.source.rippleEffect) {
		// Here we'll pass the clicked object to our animation handler.
		rippleEffect.create(e);
	}
});

function loadRetreat() {
	
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