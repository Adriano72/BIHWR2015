function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goToURL() {
        args.first_url && Ti.Platform.openURL(args.first_url);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tweetRow";
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
    $.__views.riga = Ti.UI.createTableViewRow({
        height: "120dp",
        backgroundColor: "#fff",
        className: "item",
        id: "riga"
    });
    $.__views.riga && $.addTopLevelView($.__views.riga);
    goToURL ? $.__views.riga.addEventListener("click", goToURL) : __defers["$.__views.riga!click!goToURL"] = true;
    $.__views.post_view = Ti.UI.createView({
        height: "120dp",
        layout: "vertical",
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
        id: "post_view"
    });
    $.__views.riga.add($.__views.post_view);
    $.__views.av = Ti.UI.createImageView({
        left: 0,
        top: 0,
        height: 48,
        width: 48,
        id: "av"
    });
    $.__views.post_view.add($.__views.av);
    $.__views.user_label = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "14dp"
        },
        left: 54,
        width: 120,
        top: -48,
        bottom: 2,
        height: 18,
        textAlign: "left",
        color: "#444444",
        id: "user_label"
    });
    $.__views.post_view.add($.__views.user_label);
    $.__views.date_label = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "8dp"
        },
        right: 0,
        top: -18,
        bottom: 2,
        height: 14,
        textAlign: "right",
        width: 110,
        color: "#444444",
        id: "date_label"
    });
    $.__views.post_view.add($.__views.date_label);
    $.__views.tweet_text = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "12dp"
        },
        left: 54,
        top: 4,
        bottom: 2,
        height: Ti.UI.SIZE,
        width: 230,
        textAlign: "left",
        color: "#000",
        id: "tweet_text"
    });
    $.__views.post_view.add($.__views.tweet_text);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.av.image = args.avatar;
    $.user_label.text = args.user;
    $.date_label.text = args.created_at;
    $.tweet_text.text = args.tweet;
    __defers["$.__views.riga!click!goToURL"] && $.__views.riga.addEventListener("click", goToURL);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;