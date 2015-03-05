exports.getUserLocation = function(_callback) {
    if (Ti.Geolocation.locationServicesEnabled) {
        Ti.Geolocation.purpose = "Get user position to calculate the route to the relevant place";
        Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
        Ti.Geolocation.distanceFilter = 10;
        Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
        Titanium.Geolocation.getCurrentPosition(function(e) {
            if (e.error) alert("Error: " + e.error); else {
                var position = {
                    latitude: e.coords.latitude,
                    longitude: e.coords.longitude
                };
                Alloy.Globals.userPosition = position;
                _callback(position);
            }
        });
    } else alert("Location services are not enabled on this device");
};