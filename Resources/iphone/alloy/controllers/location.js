function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doOpen() {}
    function selectAnnot() {
        $.mapview.selectAnnotation("Heritage Centre, Bere Island", true);
    }
    function openNavigation() {
        require("locationServices").getUserLocation(function(userLoc) {
            var mapsServiceURL = "http://maps.apple.com/maps?t=m&saddr=";
            Ti.Platform.openURL(mapsServiceURL + userLoc.latitude + "," + userLoc.longitude + "&daddr=51.635157,-9.880155");
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "location";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.locationWindow = Ti.UI.createWindow({
        barColor: "#B00909",
        top: Alloy.Globals.winTopHeight,
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "locationWindow",
        title: "Location"
    });
    doOpen ? $.__views.locationWindow.addEventListener("open", doOpen) : __defers["$.__views.locationWindow!open!doOpen"] = true;
    $.__views.__alloyId13 = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "16dp"
        },
        height: "100%",
        width: Ti.UI.SIZE,
        color: "#FFF",
        text: "Bere Island Easter Retreat 2015",
        id: "__alloyId13"
    });
    $.__views.locationWindow.titleControl = $.__views.__alloyId13;
    $.__views.__alloyId15 = Ti.UI.createImageView({
        image: "/images/doves_title.png",
        height: 30,
        id: "__alloyId15"
    });
    $.__views.locationWindow.leftNavButton = $.__views.__alloyId15;
    $.__views.__alloyId17 = Ti.UI.createImageView({
        image: "/images/location.png",
        height: 30,
        id: "__alloyId17"
    });
    openNavigation ? $.__views.__alloyId17.addEventListener("click", openNavigation) : __defers["$.__views.__alloyId17!click!openNavigation"] = true;
    $.__views.locationWindow.rightNavButton = $.__views.__alloyId17;
    var __alloyId18 = [];
    $.__views.seminarPlace = require("ti.map").createAnnotation({
        latitude: 51.635157,
        longitude: -9.880155,
        subtitle: "Ballinakilla County Cork, CO",
        pincolor: Alloy.Globals.Map.ANNOTATION_GREEN,
        id: "seminarPlace",
        title: "Heritage Centre, Bere Island"
    });
    __alloyId18.push($.__views.seminarPlace);
    $.__views.mapview = require("ti.map").createView({
        region: {
            latitude: 51.635157,
            longitude: -9.880155,
            latitudeDelta: .05,
            longitudeDelta: .05
        },
        annotations: __alloyId18,
        id: "mapview"
    });
    $.__views.locationWindow.add($.__views.mapview);
    selectAnnot ? $.__views.mapview.addEventListener("complete", selectAnnot) : __defers["$.__views.mapview!complete!selectAnnot"] = true;
    $.__views.locationTab = Ti.UI.createTab({
        icon: "/images/map-location.png",
        window: $.__views.locationWindow,
        id: "locationTab",
        title: " Location "
    });
    $.__views.locationTab && $.addTopLevelView($.__views.locationTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.locationWindow!open!doOpen"] && $.__views.locationWindow.addEventListener("open", doOpen);
    __defers["$.__views.__alloyId17!click!openNavigation"] && $.__views.__alloyId17.addEventListener("click", openNavigation);
    __defers["$.__views.mapview!complete!selectAnnot"] && $.__views.mapview.addEventListener("complete", selectAnnot);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;