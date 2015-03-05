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
    this.__controllerPath = "speakerRow";
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
        height: Ti.UI.SIZE,
        className: "item",
        selectionStyle: "NONE",
        backgroundColor: "#EEEEEE",
        id: "riga"
    });
    $.__views.riga && $.addTopLevelView($.__views.riga);
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
        top: 10,
        left: 8,
        right: 8,
        id: "container"
    });
    $.__views.riga.add($.__views.container);
    $.__views.borderSpacer = Ti.UI.createView({
        width: "95%",
        layout: "vertical",
        id: "borderSpacer"
    });
    $.__views.container.add($.__views.borderSpacer);
    $.__views.header = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Bold"
        },
        top: 5,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "header"
    });
    $.__views.borderSpacer.add($.__views.header);
    $.__views.subWrapper = Ti.UI.createView({
        top: 10,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "subWrapper"
    });
    $.__views.borderSpacer.add($.__views.subWrapper);
    $.__views.speakerImg = Ti.UI.createImageView({
        width: 80,
        borderRadius: 5,
        id: "speakerImg"
    });
    $.__views.subWrapper.add($.__views.speakerImg);
    $.__views.innerWrapper = Ti.UI.createView({
        layout: "vertical",
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "innerWrapper"
    });
    $.__views.subWrapper.add($.__views.innerWrapper);
    $.__views.speakerAdditionalInfo = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Bold",
            fontSize: "12dp"
        },
        width: Ti.UI.FILL,
        id: "speakerAdditionalInfo"
    });
    $.__views.innerWrapper.add($.__views.speakerAdditionalInfo);
    $.__views.speakerName = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Bold",
            fontSize: "12dp"
        },
        top: 2,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        color: "#00661A",
        id: "speakerName"
    });
    $.__views.innerWrapper.add($.__views.speakerName);
    $.__views.speakerInfo = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "12dp"
        },
        top: 2,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "speakerInfo"
    });
    $.__views.innerWrapper.add($.__views.speakerInfo);
    $.__views.fullInfo = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "14dp"
        },
        top: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "fullInfo"
    });
    $.__views.borderSpacer.add($.__views.fullInfo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.header.text = args.header;
    $.speakerImg.image = args.speakerImg;
    "" != args.speakerAdditionalInfo && ($.speakerAdditionalInfo.text = args.speakerAdditionalInfo);
    $.speakerName.text = args.speakerName;
    $.speakerInfo.text = args.speakerInfo;
    $.fullInfo.text = args.fullInfo;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;