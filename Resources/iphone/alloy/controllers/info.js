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
        Ti.Platform.openURL("http://www.johnmainseminar2015.com");
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
        barColor: "#1cc73f",
        top: Alloy.Globals.winTopHeight,
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        orientationModes: [ Ti.UI.PORTRAIT ],
        backgroundColor: "#EEEEEE",
        id: "infoWindow",
        title: "JMS 2015 Live Blog"
    });
    doOpen ? $.__views.infoWindow.addEventListener("open", doOpen) : __defers["$.__views.infoWindow!open!doOpen"] = true;
    $.__views.__alloyId8 = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "16dp"
        },
        height: "100%",
        width: Ti.UI.SIZE,
        color: "#204000",
        text: "The John Main Seminar 2015",
        id: "__alloyId8"
    });
    $.__views.infoWindow.titleControl = $.__views.__alloyId8;
    $.__views.__alloyId10 = Ti.UI.createImageView({
        image: "/images/doves_black_transparentbg_web.png",
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
        image: "/images/lake.jpg",
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
    $.__views.body = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "14dp"
        },
        top: 10,
        width: Ti.UI.FILL,
        id: "body"
    });
    $.__views.borderSpacer.add($.__views.body);
    $.__views.linkToSite = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Bold",
            fontSize: "14dp"
        },
        top: 10,
        height: 40,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP,
        width: Ti.UI.FILL,
        color: "#00B285",
        id: "linkToSite"
    });
    $.__views.borderSpacer.add($.__views.linkToSite);
    goToSite ? $.__views.linkToSite.addEventListener("click", goToSite) : __defers["$.__views.linkToSite!click!goToSite"] = true;
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
    $.titolo.text = "Spirituality and Religion in a Secular Age";
    $.body.text = "We live in a period of history in which public opinion is privileging spirituality above religion, and where the latter is regarded with a good deal of suspicion. The construction of spirituality and religion as opposites is anomalous from an historical point of view.\n\nSpirituality once referred to the living core of religion, and those who wanted to take religion a step further than common experience were said to be spiritual. Now those who are “not very religious” are claiming to be spiritual. In today’s climate, it is not popular to point to the ongoing connection between spirituality and religion, but in ideal conditions they belong together and have a great deal to offer each other.\n\nDavid Tacey is Professor of Literature at La Trobe University, Melbourne, Australia where he teaches courses on spirituality, cultural studies, analytical psychology, and literature. He is the author of 13 books including The Darkening Spirit: Jung, Spirituality, Religion (2013); Edge of the Sacred: Jung, Psyche, Earth (2009) and The Spirituality Revolution: The Emergence of Contemporary Spirituality (2003).\n\nFor more information on David Tacey and other talks he will be giving at the seminar visit:";
    $.linkToSite.text = "www.johnmainseminar2015.com";
    __defers["$.__views.infoWindow!open!doOpen"] && $.__views.infoWindow.addEventListener("open", doOpen);
    __defers["$.__views.linkToSite!click!goToSite"] && $.__views.linkToSite.addEventListener("click", goToSite);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;