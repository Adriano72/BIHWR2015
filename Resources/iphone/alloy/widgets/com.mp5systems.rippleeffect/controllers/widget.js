function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.mp5systems.rippleeffect/" + s : s.substring(0, index) + "/com.mp5systems.rippleeffect/" + s.substring(index + 1);
    return path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    new (require("alloy/widget"))("com.mp5systems.rippleeffect");
    this.__widgetId = "com.mp5systems.rippleeffect";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.ripple = Ti.UI.createView({
        backgroundColor: "rgba(255,255,255,0.40)",
        zIndex: 999,
        opacity: 0,
        id: "ripple"
    });
    $.__views.ripple && $.addTopLevelView($.__views.ripple);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.create = function(e) {
        var animation = require("alloy/animation");
        var heightWidth = 2 * Math.max(e.source.toImage().width, e.source.toImage().height);
        $.ripple.applyProperties({
            width: heightWidth,
            height: heightWidth,
            borderRadius: heightWidth / 2,
            transform: Ti.UI.create2DMatrix().scale(20 / heightWidth),
            center: {
                x: e.x,
                y: e.y
            }
        });
        e.source.add($.ripple);
        animation.chainAnimate($.ripple, [ Ti.UI.createAnimation({
            opacity: .3,
            duration: 0
        }), Ti.UI.createAnimation({
            transform: Ti.UI.create2DMatrix().scale(2),
            duration: 350,
            curve: Ti.UI.ANIMATION_CURVE_EASE_IN
        }), Ti.UI.createAnimation({
            opacity: 0,
            duration: 100,
            curve: Ti.UI.ANIMATION_CURVE_LINEAR
        }) ], function() {
            e.source.remove($.ripple);
        });
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;