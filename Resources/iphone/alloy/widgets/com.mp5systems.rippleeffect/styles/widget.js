function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.mp5systems.rippleeffect/" + s : s.substring(0, index) + "/com.mp5systems.rippleeffect/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1101.0005999999998,
    key: "Label",
    style: {
        font: {
            fontFamily: "ExpoSansPro-Regular"
        }
    }
}, {
    isClass: true,
    priority: 10000.0002,
    key: "leftNavImg",
    style: {
        image: "/images/doves_title.png",
        height: 30
    }
}, {
    isClass: true,
    priority: 10000.0009,
    key: "titolo",
    style: {
        height: "100%",
        width: Ti.UI.SIZE,
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "16dp"
        },
        color: "#FFF"
    }
}, {
    isClass: true,
    priority: 10101.0001,
    key: "topBar",
    style: {
        barColor: "#B00909",
        top: Alloy.Globals.winTopHeight,
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        orientationModes: [ Ti.UI.PORTRAIT ]
    }
}, {
    isClass: true,
    priority: 10101.0003,
    key: "expoSansPro",
    style: {
        font: {
            fontFamily: "ExpoSansPro-Regular"
        }
    }
}, {
    isClass: true,
    priority: 10101.0004,
    key: "expoSansProBold",
    style: {
        font: {
            fontFamily: "ExpoSansPro-Bold"
        }
    }
}, {
    isId: true,
    priority: 100000.0011,
    key: "ripple",
    style: {
        backgroundColor: "rgba(255,255,255,0.40)",
        zIndex: 999,
        opacity: 0
    }
} ];