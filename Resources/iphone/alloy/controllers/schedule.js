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
        loadRetreat();
    }
    function loadRetreat() {
        var rowsRetreat = [];
        $.scheduleTable.setData(rowsRetreat);
        _.each(retreatSchedule, function(value) {
            var rowRetreat = Alloy.createController("timeTableRow", {
                day: value.day,
                date: value.date,
                time: value.time,
                desc: value.desc
            }).getView();
            rowsRetreat.push(rowRetreat);
        });
        $.scheduleTable.setData(rowsRetreat);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "schedule";
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
    $.__views.scheduleWindow = Ti.UI.createWindow({
        barColor: "#B00909",
        top: Alloy.Globals.winTopHeight,
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        orientationModes: [ Ti.UI.PORTRAIT ],
        backgroundColor: "#555",
        id: "scheduleWindow",
        title: "Schedule"
    });
    doOpen ? $.__views.scheduleWindow.addEventListener("open", doOpen) : __defers["$.__views.scheduleWindow!open!doOpen"] = true;
    $.__views.__alloyId20 = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "16dp"
        },
        height: "100%",
        width: Ti.UI.SIZE,
        color: "#FFF",
        text: "Bere Island Easter Retreat 2015",
        id: "__alloyId20"
    });
    $.__views.scheduleWindow.titleControl = $.__views.__alloyId20;
    $.__views.__alloyId22 = Ti.UI.createImageView({
        image: "/images/doves_title.png",
        height: 30,
        id: "__alloyId22"
    });
    $.__views.scheduleWindow.leftNavButton = $.__views.__alloyId22;
    $.__views.scheduleTable = Ti.UI.createTableView({
        separatorColor: "transparent",
        id: "scheduleTable"
    });
    $.__views.scheduleWindow.add($.__views.scheduleTable);
    $.__views.scheduleTab = Ti.UI.createTab({
        icon: "/images/clipboard.png",
        window: $.__views.scheduleWindow,
        id: "scheduleTab",
        title: " Schedule "
    });
    $.__views.scheduleTab && $.addTopLevelView($.__views.scheduleTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var rippleEffect = Alloy.createWidget("com.mp5systems.rippleeffect");
    var retreatSchedule = require("scheduleJSON").retreatSchedule;
    $.scheduleWindow.addEventListener("click", function(e) {
        e.source.rippleEffect && rippleEffect.create(e);
    });
    __defers["$.__views.scheduleWindow!open!doOpen"] && $.__views.scheduleWindow.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;