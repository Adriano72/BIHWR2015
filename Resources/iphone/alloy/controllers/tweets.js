function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doOpen() {
        loadData();
    }
    function strtotime(str, now) {
        var i, match, s, strTmp = "", parse = "";
        strTmp = str;
        strTmp = strTmp.replace(/\s{2,}|^\s|\s$/g, " ");
        strTmp = strTmp.replace(/[\t\r\n]/g, "");
        if ("now" == strTmp) return new Date().getTime() / 1e3;
        if (!isNaN(parse = Date.parse(strTmp))) return parse / 1e3;
        now = now ? new Date(1e3 * now) : new Date();
        strTmp = strTmp.toLowerCase();
        var __is = {
            day: {
                sun: 0,
                mon: 1,
                tue: 2,
                wed: 3,
                thu: 4,
                fri: 5,
                sat: 6
            },
            mon: {
                jan: 0,
                feb: 1,
                mar: 2,
                apr: 3,
                may: 4,
                jun: 5,
                jul: 6,
                aug: 7,
                sep: 8,
                oct: 9,
                nov: 10,
                dec: 11
            }
        };
        var process = function(m) {
            var ago = m[2] && "ago" == m[2];
            var num = (num = "last" == m[0] ? -1 : 1) * (ago ? -1 : 1);
            switch (m[0]) {
              case "last":
              case "next":
                switch (m[1].substring(0, 3)) {
                  case "yea":
                    now.setFullYear(now.getFullYear() + num);
                    break;

                  case "mon":
                    now.setMonth(now.getMonth() + num);
                    break;

                  case "wee":
                    now.setDate(now.getDate() + 7 * num);
                    break;

                  case "day":
                    now.setDate(now.getDate() + num);
                    break;

                  case "hou":
                    now.setHours(now.getHours() + num);
                    break;

                  case "min":
                    now.setMinutes(now.getMinutes() + num);
                    break;

                  case "sec":
                    now.setSeconds(now.getSeconds() + num);
                    break;

                  default:
                    var day;
                    if ("undefined" != typeof (day = __is.day[m[1].substring(0, 3)])) {
                        var diff = day - now.getDay();
                        0 == diff ? diff = 7 * num : diff > 0 ? "last" == m[0] && (diff -= 7) : "next" == m[0] && (diff += 7);
                        now.setDate(now.getDate() + diff);
                    }
                }
                break;

              default:
                if (!/\d+/.test(m[0])) return false;
                num *= parseInt(m[0], 10);
                switch (m[1].substring(0, 3)) {
                  case "yea":
                    now.setFullYear(now.getFullYear() + num);
                    break;

                  case "mon":
                    now.setMonth(now.getMonth() + num);
                    break;

                  case "wee":
                    now.setDate(now.getDate() + 7 * num);
                    break;

                  case "day":
                    now.setDate(now.getDate() + num);
                    break;

                  case "hou":
                    now.setHours(now.getHours() + num);
                    break;

                  case "min":
                    now.setMinutes(now.getMinutes() + num);
                    break;

                  case "sec":
                    now.setSeconds(now.getSeconds() + num);
                }
            }
            return true;
        };
        match = strTmp.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);
        if (null != match) {
            match[2] ? match[3] || (match[2] += ":00") : match[2] = "00:00:00";
            s = match[1].split(/-/g);
            for (i in __is.mon) __is.mon[i] == s[1] - 1 && (s[1] = i);
            s[0] = parseInt(s[0], 10);
            s[0] = s[0] >= 0 && s[0] <= 69 ? "20" + (s[0] < 10 ? "0" + s[0] : s[0] + "") : s[0] >= 70 && s[0] <= 99 ? "19" + s[0] : s[0] + "";
            return parseInt(this.strtotime(s[2] + " " + s[1] + " " + s[0] + " " + match[2]) + (match[4] ? match[4] / 1e3 : ""), 10);
        }
        var regex = "([+-]?\\d+\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)|(last|next)\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))(\\sago)?";
        match = strTmp.match(new RegExp(regex, "gi"));
        if (null == match) return false;
        for (i = 0; i < match.length; i++) if (!process(match[i].split(" "))) return false;
        return now.getTime() / 1e3;
    }
    function prettyDate(time) {
        var monthname = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
        var date = new Date(1e3 * time), diff = (new Date().getTime() - date.getTime()) / 1e3, day_diff = Math.floor(diff / 86400);
        if (isNaN(day_diff) || 0 > day_diff) return "";
        if (day_diff >= 31) {
            var date_year = date.getFullYear();
            var month_name = monthname[date.getMonth()];
            var date_month = date.getMonth() + 1;
            10 > date_month && (date_month = "0" + date_month);
            var date_monthday = date.getDate();
            10 > date_monthday && (date_monthday = "0" + date_monthday);
            return date_monthday + " " + month_name + " " + date_year;
        }
        return 0 == day_diff && (60 > diff && "just now" || 120 > diff && "1 minute ago" || 3600 > diff && Math.floor(diff / 60) + " minutes ago" || 7200 > diff && "1 hour ago" || 86400 > diff && "about " + Math.floor(diff / 3600) + " hours ago") || 1 == day_diff && "Yesterday" || 7 > day_diff && day_diff + " days ago" || 31 > day_diff && Math.ceil(day_diff / 7) + " week" + (1 == Math.ceil(day_diff / 7) ? "" : "s") + " ago";
    }
    function loadData() {
        var rows = [];
        var xhr = Ti.Network.createHTTPClient();
        xhr.timeout = 1e6;
        var bearerToken = "AAAAAAAAAAAAAAAAAAAAAEHKSgAAAAAAKzh8n7rBx8SsTJECCkRlVHW%2FlG8%3DvVgRTmoK6wDp1DEw9GZMShZcdCgDcd4CgwvBbzrgbk";
        xhr.open("GET", "https://api.twitter.com/1.1/search/tweets.json?q=" + screen_name + "&result_type=recent");
        xhr.setRequestHeader("Authorization", "Bearer " + bearerToken);
        xhr.onload = function() {
            try {
                var tweets = JSON.parse(this.responseText);
                _.each(tweets.statuses, function(value) {
                    Ti.API.info("DATA: " + value.user.entities.url.urls[0].expanded_url);
                    var riga = Alloy.createController("tweetRow", {
                        tweet: value.text,
                        user: value.user.name,
                        avatar: value.user.profile_image_url,
                        created_at: prettyDate(strtotime(value.created_at)),
                        first_url: value.user.entities.url.urls[0].expanded_url
                    }).getView();
                    rows.push(riga);
                });
                $.tweetsTable.setData(rows);
            } catch (E) {
                Ti.API.info(E);
            }
        };
        xhr.send();
    }
    function reloadData() {
        setTimeout(function() {
            loadData();
            $.refresh.endRefreshing();
        }, 2e3);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tweets";
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
    $.__views.tweetsWindow = Ti.UI.createWindow({
        barColor: "#B00909",
        top: Alloy.Globals.winTopHeight,
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "tweetsWindow",
        title: "Tweets"
    });
    doOpen ? $.__views.tweetsWindow.addEventListener("open", doOpen) : __defers["$.__views.tweetsWindow!open!doOpen"] = true;
    $.__views.__alloyId31 = Ti.UI.createLabel({
        font: {
            fontFamily: "ExpoSansPro-Regular",
            fontSize: "16dp"
        },
        height: "100%",
        width: Ti.UI.SIZE,
        color: "#FFF",
        text: "Bere Island Easter Retreat 2015",
        id: "__alloyId31"
    });
    $.__views.tweetsWindow.titleControl = $.__views.__alloyId31;
    $.__views.__alloyId33 = Ti.UI.createImageView({
        image: "/images/doves_title.png",
        height: 30,
        id: "__alloyId33"
    });
    $.__views.tweetsWindow.leftNavButton = $.__views.__alloyId33;
    $.__views.refresh = Ti.UI.createRefreshControl({
        tintColor: "#6DD900",
        id: "refresh"
    });
    reloadData ? $.__views.refresh.addEventListener("refreshstart", reloadData) : __defers["$.__views.refresh!refreshstart!reloadData"] = true;
    $.__views.tweetsTable = Ti.UI.createTableView({
        minRowHeight: 58,
        refreshControl: $.__views.refresh,
        id: "tweetsTable"
    });
    $.__views.tweetsWindow.add($.__views.tweetsTable);
    $.__views.tweetsTab = Ti.UI.createTab({
        icon: "/images/twitter.png",
        window: $.__views.tweetsWindow,
        id: "tweetsTab",
        title: " Twitter "
    });
    $.__views.tweetsTab && $.addTopLevelView($.__views.tweetsTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var screen_name = "%23bereislandretreat2015";
    __defers["$.__views.tweetsWindow!open!doOpen"] && $.__views.tweetsWindow.addEventListener("open", doOpen);
    __defers["$.__views.refresh!refreshstart!reloadData"] && $.__views.refresh.addEventListener("refreshstart", reloadData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;