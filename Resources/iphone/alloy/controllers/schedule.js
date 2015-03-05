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
        loadSeminar();
    }
    function loadRetreat() {
        $.retreat.color = "green";
        $.seminar.color = "#fff";
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
    function loadSeminar() {
        $.retreat.color = "#fff";
        $.seminar.color = "green";
        var rowsSeminar = [];
        $.scheduleTable.setData(rowsSeminar);
        _.each(seminarSchedule, function(value) {
            var rowSeminar = Alloy.createController("timeTableRow", {
                day: value.day,
                date: value.date,
                time: value.time,
                desc: value.desc
            }).getView();
            rowsSeminar.push(rowSeminar);
        });
        $.scheduleTable.setData(rowsSeminar);
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
        barColor: "#1cc73f",
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
        color: "#204000",
        text: "The John Main Seminar 2015",
        id: "__alloyId20"
    });
    $.__views.scheduleWindow.titleControl = $.__views.__alloyId20;
    $.__views.__alloyId22 = Ti.UI.createImageView({
        image: "/images/doves_black_transparentbg_web.png",
        height: 30,
        id: "__alloyId22"
    });
    $.__views.scheduleWindow.leftNavButton = $.__views.__alloyId22;
    $.__views.scheduleTable = Ti.UI.createTableView({
        bottom: 51,
        separatorColor: "transparent",
        id: "scheduleTable"
    });
    $.__views.scheduleWindow.add($.__views.scheduleTable);
    $.__views.__alloyId23 = Ti.UI.createView({
        bottom: 0,
        height: 51,
        backgroundColor: "#222",
        id: "__alloyId23"
    });
    $.__views.scheduleWindow.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        top: 0,
        height: 1,
        width: "100%",
        backgroundColor: "#EEE",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.first = Ti.UI.createView({
        width: "49.5%",
        rippleEffect: true,
        height: Ti.UI.FILL,
        left: 0,
        id: "first"
    });
    $.__views.__alloyId23.add($.__views.first);
    loadRetreat ? $.__views.first.addEventListener("click", loadRetreat) : __defers["$.__views.first!click!loadRetreat"] = true;
    $.__views.retreat = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular"
        },
        touchEnabled: false,
        color: "#EEE",
        text: "RETREAT",
        id: "retreat"
    });
    $.__views.first.add($.__views.retreat);
    $.__views.last = Ti.UI.createView({
        width: "49.5%",
        rippleEffect: true,
        height: Ti.UI.FILL,
        right: 0,
        id: "last"
    });
    $.__views.__alloyId23.add($.__views.last);
    loadSeminar ? $.__views.last.addEventListener("click", loadSeminar) : __defers["$.__views.last!click!loadSeminar"] = true;
    $.__views.seminar = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular"
        },
        touchEnabled: false,
        color: "#EEE",
        text: "SEMINAR",
        id: "seminar"
    });
    $.__views.last.add($.__views.seminar);
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
    var retreatSchedule = require("scheduleJSON").preRetreatSchedule;
    var seminarSchedule = require("scheduleJSON").seminarSchedule;
    $.scheduleWindow.addEventListener("click", function(e) {
        e.source.rippleEffect && rippleEffect.create(e);
    });
    __defers["$.__views.scheduleWindow!open!doOpen"] && $.__views.scheduleWindow.addEventListener("open", doOpen);
    __defers["$.__views.first!click!loadRetreat"] && $.__views.first.addEventListener("click", loadRetreat);
    __defers["$.__views.last!click!loadSeminar"] && $.__views.last.addEventListener("click", loadSeminar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;