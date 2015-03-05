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
        $.mapview.selectAnnotation("University of Waikato", true);
    }
    function openNavigation() {
        require("locationServices").getUserLocation(function(userLoc) {
            var mapsServiceURL = "http://maps.apple.com/maps?t=m&saddr=";
            Ti.Platform.openURL(mapsServiceURL + userLoc.latitude + "," + userLoc.longitude + "&daddr=-37.788202,175.311180");
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
        barColor: "#1cc73f",
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
        color: "#204000",
        text: "The John Main Seminar 2015",
        id: "__alloyId13"
    });
    $.__views.locationWindow.titleControl = $.__views.__alloyId13;
    $.__views.__alloyId15 = Ti.UI.createImageView({
        image: "/images/doves_black_transparentbg_web.png",
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
        latitude: -37.788202,
        longitude: 175.31118,
        subtitle: "Gate 1, 106/110 Knighton Rd",
        pincolor: Alloy.Globals.Map.ANNOTATION_GREEN,
        id: "seminarPlace",
        title: "University of Waikato"
    });
    __alloyId18.push($.__views.seminarPlace);
    $.__views.mapview = require("ti.map").createView({
        region: {
            latitude: -37.788202,
            longitude: 175.31118,
            latitudeDelta: .01,
            longitudeDelta: .01
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