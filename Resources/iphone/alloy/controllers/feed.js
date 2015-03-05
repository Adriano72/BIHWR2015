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
    function refreshLiveBlog() {
        $.feedWebView.reload();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feed";
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
    $.__views.feedWindow = Ti.UI.createWindow({
        barColor: "#1cc73f",
        top: Alloy.Globals.winTopHeight,
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "feedWindow",
        title: "JMS 2015 Live Blog"
    });
    doOpen ? $.__views.feedWindow.addEventListener("open", doOpen) : __defers["$.__views.feedWindow!open!doOpen"] = true;
    $.__views.__alloyId1 = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "16dp"
        },
        height: "100%",
        width: Ti.UI.SIZE,
        color: "#204000",
        text: "The John Main Seminar 2015",
        id: "__alloyId1"
    });
    $.__views.feedWindow.titleControl = $.__views.__alloyId1;
    $.__views.__alloyId3 = Ti.UI.createImageView({
        image: "/images/doves_black_transparentbg_web.png",
        height: 30,
        id: "__alloyId3"
    });
    $.__views.feedWindow.leftNavButton = $.__views.__alloyId3;
    $.__views.__alloyId5 = Ti.UI.createImageView({
        image: "/images/refresh-2.png",
        height: 25,
        id: "__alloyId5"
    });
    refreshLiveBlog ? $.__views.__alloyId5.addEventListener("click", refreshLiveBlog) : __defers["$.__views.__alloyId5!click!refreshLiveBlog"] = true;
    $.__views.feedWindow.rightNavButton = $.__views.__alloyId5;
    $.__views.feedWebView = Ti.UI.createWebView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        scalesPageToFit: false,
        id: "feedWebView"
    });
    $.__views.feedWindow.add($.__views.feedWebView);
    $.__views.feedTab = Ti.UI.createTab({
        icon: "/images/microphone.png",
        window: $.__views.feedWindow,
        id: "feedTab",
        title: " Live Blog "
    });
    $.__views.feedTab && $.addTopLevelView($.__views.feedTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.feedWebView.url = "http://wccm.org/bi2015/feed.html";
    __defers["$.__views.feedWindow!open!doOpen"] && $.__views.feedWindow.addEventListener("open", doOpen);
    __defers["$.__views.__alloyId5!click!refreshLiveBlog"] && $.__views.__alloyId5.addEventListener("click", refreshLiveBlog);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;