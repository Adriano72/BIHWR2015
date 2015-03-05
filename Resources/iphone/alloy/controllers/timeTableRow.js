function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "timeTableRow";
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
    $.__views.riga = Ti.UI.createTableViewRow({
        height: 90,
        selectionStyle: "NONE",
        backgroundColor: "#555",
        id: "riga"
    });
    $.__views.riga && $.addTopLevelView($.__views.riga);
    $.__views.__alloyId29 = Ti.UI.createView({
        top: 5,
        layout: "horizontal",
        width: "90%",
        height: 80,
        id: "__alloyId29"
    });
    $.__views.riga.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        backgroundColor: "#C98644",
        layout: "vertical",
        height: 80,
        width: 80,
        left: 0,
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.day = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "12dp"
        },
        width: Ti.UI.SIZE,
        top: 0,
        height: "33%",
        color: "#FFF",
        id: "day"
    });
    $.__views.__alloyId30.add($.__views.day);
    $.__views.date = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "12dp"
        },
        width: Ti.UI.SIZE,
        top: 0,
        height: "33%",
        color: "#FFF",
        id: "date"
    });
    $.__views.__alloyId30.add($.__views.date);
    $.__views.time = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "12dp"
        },
        width: Ti.UI.SIZE,
        top: 0,
        height: "33%",
        color: "#FFF",
        id: "time"
    });
    $.__views.__alloyId30.add($.__views.time);
    $.__views.__alloyId31 = Ti.UI.createView({
        height: 80,
        width: "70%",
        left: 5,
        id: "__alloyId31"
    });
    $.__views.__alloyId29.add($.__views.__alloyId31);
    $.__views.desc = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "12dp"
        },
        wordWrap: true,
        horizontalWrap: true,
        width: Ti.UI.FILL,
        color: "#FFF",
        id: "desc"
    });
    $.__views.__alloyId31.add($.__views.desc);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.day.text = args.day;
    $.date.text = args.date;
    $.time.text = args.time;
    $.desc.text = args.desc;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;