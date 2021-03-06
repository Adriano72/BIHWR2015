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
    function goToSite() {
        Ti.Platform.openURL("http://www.wccm.org");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "info";
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
    $.__views.infoWindow = Ti.UI.createWindow({
        barColor: "#B00909",
        top: Alloy.Globals.winTopHeight,
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        orientationModes: [ Ti.UI.PORTRAIT ],
        backgroundColor: "#EEEEEE",
        id: "infoWindow",
        title: "Bere Island Easter Retreat Live Blog"
    });
    doOpen ? $.__views.infoWindow.addEventListener("open", doOpen) : __defers["$.__views.infoWindow!open!doOpen"] = true;
    $.__views.__alloyId8 = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "16dp"
        },
        height: "100%",
        width: Ti.UI.SIZE,
        color: "#FFF",
        text: "Bere Island Easter Retreat 2015",
        id: "__alloyId8"
    });
    $.__views.infoWindow.titleControl = $.__views.__alloyId8;
    $.__views.__alloyId10 = Ti.UI.createImageView({
        image: "/images/doves_title.png",
        height: 30,
        id: "__alloyId10"
    });
    $.__views.infoWindow.leftNavButton = $.__views.__alloyId10;
    $.__views.__alloyId11 = Ti.UI.createScrollView({
        id: "__alloyId11"
    });
    $.__views.infoWindow.add($.__views.__alloyId11);
    $.__views.container = Ti.UI.createView({
        backgroundColor: "#f2f2f2",
        borderRadius: 3,
        borderWidth: .5,
        viewShadowColor: "#666",
        viewShadowOffset: {
            x: 3,
            y: 5
        },
        viewShadowRadius: 3,
        borderColor: "#CACAD9",
        height: Ti.UI.SIZE,
        top: 10,
        left: 8,
        right: 8,
        id: "container"
    });
    $.__views.__alloyId11.add($.__views.container);
    $.__views.borderSpacer = Ti.UI.createView({
        width: "95%",
        layout: "vertical",
        id: "borderSpacer"
    });
    $.__views.container.add($.__views.borderSpacer);
    $.__views.headerImage = Ti.UI.createImageView({
        top: 10,
        image: "/images/lighthouse.jpg",
        id: "headerImage"
    });
    $.__views.borderSpacer.add($.__views.headerImage);
    $.__views.titolo = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Bold",
            fontSize: "16dp"
        },
        top: 10,
        width: Ti.UI.FILL,
        id: "titolo"
    });
    $.__views.borderSpacer.add($.__views.titolo);
    $.__views.generalInfo = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "14dp"
        },
        top: 10,
        width: Ti.UI.FILL,
        id: "generalInfo"
    });
    $.__views.borderSpacer.add($.__views.generalInfo);
    $.__views.wccmlink = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Bold",
            fontSize: "14dp"
        },
        top: 10,
        height: 40,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP,
        width: Ti.UI.FILL,
        color: "#00B285",
        id: "wccmlink"
    });
    $.__views.borderSpacer.add($.__views.wccmlink);
    goToSite ? $.__views.wccmlink.addEventListener("click", goToSite) : __defers["$.__views.wccmlink!click!goToSite"] = true;
    $.__views.infoTab = Ti.UI.createTab({
        icon: "/images/info.png",
        window: $.__views.infoWindow,
        id: "infoTab",
        title: " Info "
    });
    $.__views.infoTab && $.addTopLevelView($.__views.infoTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.titolo.text = "Bere Island Easter Retreat 2015";
    $.generalInfo.text = "Palm Sunday opens the Retreat with a liturgy in the church at 10am followed by a talk and meditation at the Heritage Centre at 5.30pm.\n\nThere will be yoga each morning at the Heritage Centre followed by regular meditation periods and talks by Fr. Laurence.\n\nThe Mass of the Lord’s Supper will be on Thursday at 7pm.\n\nThe Good Friday service will be at 3pm.\n\nThe Easter Vigil will begin on Saturday at 9pm. At dawn on Easter Morning those who wish will assemble by the Standing Stone in the centre of the island. There will be Mass on Easter morning at 10am.\n\nThe Retreat will conclude at the Heritage Centre at 8am with a final talk and meditation. Participants are of course welcome to come before or stay after the Retreat and enjoy the island.\n\nThe Retreat is open to all and some sessions are particularly addressed to young adults.";
    $.wccmlink.text = "www.wccm.org";
    __defers["$.__views.infoWindow!open!doOpen"] && $.__views.infoWindow.addEventListener("open", doOpen);
    __defers["$.__views.wccmlink!click!goToSite"] && $.__views.wccmlink.addEventListener("click", goToSite);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;