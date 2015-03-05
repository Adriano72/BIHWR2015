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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "speakers";
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
    $.__views.speakersWindow = Ti.UI.createWindow({
        barColor: "#1cc73f",
        top: Alloy.Globals.winTopHeight,
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        orientationModes: [ Ti.UI.PORTRAIT ],
        backgroundColor: "#EEEEEE",
        id: "speakersWindow",
        title: "The John Main Seminar 2015"
    });
    doOpen ? $.__views.speakersWindow.addEventListener("open", doOpen) : __defers["$.__views.speakersWindow!open!doOpen"] = true;
    $.__views.__alloyId26 = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "16dp"
        },
        height: "100%",
        width: Ti.UI.SIZE,
        color: "#204000",
        text: "The John Main Seminar 2015",
        id: "__alloyId26"
    });
    $.__views.speakersWindow.titleControl = $.__views.__alloyId26;
    $.__views.__alloyId28 = Ti.UI.createImageView({
        image: "/images/doves_black_transparentbg_web.png",
        height: 30,
        id: "__alloyId28"
    });
    $.__views.speakersWindow.leftNavButton = $.__views.__alloyId28;
    $.__views.speakersTable = Ti.UI.createTableView({
        top: 10,
        height: Ti.UI.SIZE,
        backgroundColor: "#EEEEEE",
        id: "speakersTable"
    });
    $.__views.speakersWindow.add($.__views.speakersTable);
    $.__views.speakersTab = Ti.UI.createTab({
        icon: "/images/id-badge.png",
        window: $.__views.speakersWindow,
        id: "speakersTab",
        title: " Speakers "
    });
    $.__views.speakersTab && $.addTopLevelView($.__views.speakersTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var rows = [];
    var rigaStacey = Alloy.createController("speakerRow", {
        header: "Spirituality and Religion in a Secular Age",
        speakerImg: "/images/david-stacey.jpg",
        speakerName: "Presented by David Tacey",
        speakerInfo: "Author of numerous works on religion, spirituality and society",
        fullInfo: "We live in a period of history in which public opinion is privileging spirituality above religion, and where the latter is regarded with a good deal of suspicion. The construction of spirituality and religion as opposites is anomalous from an historical point of view.\n\nSpirituality once referred to the living core of religion, and those who wanted to take religion a step further than common experience were said to be spiritual. Now those who are “not very religious” are claiming to be spiritual. In today’s climate, it is not popular to point to the ongoing connection between spirituality and religion, but in ideal conditions they belong together and have a great deal to offer each other.\n\nOther talks that David will give at the Seminar include Michael Leunig: Cartoonist of the Spiritual Journey; Youth Spirituality: What Is It? What Do Youth Believe?; Spinning on a Dream Thread: Indigenous Spirituality and Environmental Crisis and God After God: What Does God Mean in a Godless Time?\n\n"
    }).getView();
    rows.push(rigaStacey);
    var rigaLaurence = Alloy.createController("speakerRow", {
        header: "Meditation as a Modern Spiritual Path",
        speakerImg: "/images/laurence-freeman.jpg",
        speakerAdditionalInfo: "Pre-seminar meditation retreat: January 12-15",
        speakerName: "Led by Laurence Freeman OSB",
        speakerInfo: "Director of the World Community for Christian Meditation",
        fullInfo: "At some point in life we realise that we are not just finding time for a spiritual journey because that is just what life itself is. We seek to make sense of the hardships we suffer and to understand the meaning of happiness.\n\nMeditation then becomes the most important direction-giver and source of personal stability. Inner and outer become harmonised.\n\nRelationships are changed and values are clarified. We see that the psychological and physical benefits of meditation point to deeper spiritual fruits. Laurence Freeman OSB will explore these connections and suggest how they transform our lives."
    }).getView();
    rows.push(rigaLaurence);
    $.speakersTable.setData(rows);
    __defers["$.__views.speakersWindow!open!doOpen"] && $.__views.speakersWindow.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;