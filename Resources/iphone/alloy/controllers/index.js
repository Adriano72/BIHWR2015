function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doOpen() {
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    var __alloyId6 = [];
    $.__views.feedController = Alloy.createController("feed", {
        id: "feedController"
    });
    __alloyId6.push($.__views.feedController.getViewEx({
        recurse: true
    }));
    $.__views.tweetsController = Alloy.createController("tweets", {
        id: "tweetsController"
    });
    __alloyId6.push($.__views.tweetsController.getViewEx({
        recurse: true
    }));
    $.__views.locationController = Alloy.createController("location", {
        id: "locationController"
    });
    __alloyId6.push($.__views.locationController.getViewEx({
        recurse: true
    }));
    $.__views.scheduleController = Alloy.createController("schedule", {
        id: "scheduleController"
    });
    __alloyId6.push($.__views.scheduleController.getViewEx({
        recurse: true
    }));
    $.__views.speakersController = Alloy.createController("speakers", {
        id: "speakersController"
    });
    __alloyId6.push($.__views.speakersController.getViewEx({
        recurse: true
    }));
    $.__views.infoController = Alloy.createController("info", {
        id: "infoController"
    });
    __alloyId6.push($.__views.infoController.getViewEx({
        recurse: true
    }));
    $.__views.tabGroup = Ti.UI.createTabGroup({
        orientationModes: [ Ti.UI.PORTRAIT ],
        tabs: __alloyId6,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    doOpen ? $.__views.tabGroup.addEventListener("open", doOpen) : __defers["$.__views.tabGroup!open!doOpen"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tabGroup.open();
    __defers["$.__views.tabGroup!open!doOpen"] && $.__views.tabGroup.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;