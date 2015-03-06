var args = arguments[0] || {};


function doOpen(evt) {

	if (OS_ANDROID) {
		abx.title = "Bere Island Easter Retreat 2015";
		abx.titleFont = "Expo Sans Pro Regular.otf";
		abx.titleColor = "#204000";

		//actionBarHelper.setIcon('/drawericonw@2x.png');

	}
}

function selectAnnot(){
	$.mapview.selectAnnotation("Heritage Centre, Bere Island", true);	
}


function openNavigation(e) {

	require('locationServices').getUserLocation(function(userLoc) {
		var mapsServiceURL = (OS_ANDROID) ? 'http://maps.google.com/maps?t=m&saddr=' : 'http://maps.apple.com/maps?t=m&saddr=';
		//Ti.API.info("NAVIGATION DATA: " + e.source.lat + " " + e.source.lon + " " + userLoc.latitude + " " + userLoc.longitude);
		Ti.Platform.openURL(mapsServiceURL + userLoc.latitude + ',' + userLoc.longitude + '&daddr=51.635157,-9.880155');
		//Ti.Platform.openURL(mapsServiceURL + userLoc.latitude + ',' + userLoc.longitude + '&daddr=41.528344,12.696175');
	});

};