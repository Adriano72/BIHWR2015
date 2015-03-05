function doOpen() {

	if (OS_ANDROID) {
		var activity = $.getView().activity;
		var menuItem = null;

		activity.onCreateOptionsMenu = function(e) {
			Ti.API.info('Active Tab: ' + $.tabGroup.activeTab.title);
			if ($.tabGroup.activeTab.title === " Location ") {
				menuItem = e.menu.add({
					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS,
					icon : "/images/location.png",
					title : "Route"
				});

				menuItem.addEventListener("click", function(e) {
					require('locationServices').getUserLocation(function(userLoc) {
						var mapsServiceURL = (OS_ANDROID) ? 'http://maps.google.com/maps?t=m&saddr=' : 'http://maps.apple.com/maps?t=m&saddr=';
						//Ti.API.info("NAVIGATION DATA: " + e.source.lat + " " + e.source.lon + " " + userLoc.latitude + " " + userLoc.longitude);
						Ti.Platform.openURL(mapsServiceURL + userLoc.latitude + ',' + userLoc.longitude + '&daddr=-37.788202,175.311180');
					});
				});

			};
		};

		activity.invalidateOptionsMenu();

		$.tabGroup.addEventListener('blur', function(_event) {
			$.getView().activity.invalidateOptionsMenu();
		});
	}

}

$.tabGroup.open();
