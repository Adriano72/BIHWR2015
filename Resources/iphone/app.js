var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.Map = require("ti.map");

var abx;

Alloy.Globals.winTopHeight = Ti.Platform.version < 7 ? 20 : 0;

Alloy.createController("index");