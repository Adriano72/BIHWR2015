var args = arguments[0] || {};

// Kosso
// Another attempt to create a simple Twitter client list.
// This time using a vertical layout view within each row containing the avatar image and labels for the
// date, the username and the tweet itself.
// @kosso : kosso@phreadz.com

function doOpen(evt) {

	if (OS_ANDROID) {
		abx.title = "The John Main Seminar 2015";
		abx.titleFont = "Expo Sans Pro Regular.otf";
		abx.titleColor = "#204000";

		//actionBarHelper.setIcon('/drawericonw@2x.png');

	}

	loadData();
}

function strtotime(str, now) {
	// Emlulates the PHP strtotime function in JavaScript
	// obtained from http://phpjs.org/functions/strtotime:554
	var i,
	    match,
	    s,
	    strTmp = '',
	    parse = '';
	strTmp = str;
	strTmp = strTmp.replace(/\s{2,}|^\s|\s$/g, ' ');
	// unecessary spaces
	strTmp = strTmp.replace(/[\t\r\n]/g, '');
	// unecessary chars
	if (strTmp == 'now') {
		return (new Date()).getTime() / 1000;
		// Return seconds, not milli-seconds
	} else if (!isNaN( parse = Date.parse(strTmp))) {
		return (parse / 1000);
	} else if (now) {
		now = new Date(now * 1000);
		// Accept PHP-style seconds
	} else {
		now = new Date();
	}
	strTmp = strTmp.toLowerCase();
	var __is = {
		day : {
			'sun' : 0,
			'mon' : 1,
			'tue' : 2,
			'wed' : 3,
			'thu' : 4,
			'fri' : 5,
			'sat' : 6
		},
		mon : {
			'jan' : 0,
			'feb' : 1,
			'mar' : 2,
			'apr' : 3,
			'may' : 4,
			'jun' : 5,
			'jul' : 6,
			'aug' : 7,
			'sep' : 8,
			'oct' : 9,
			'nov' : 10,
			'dec' : 11
		}
	};
	var process = function(m) {
		var ago = (m[2] && m[2] == 'ago');
		var num = ( num = m[0] == 'last' ? -1 : 1) * ( ago ? -1 : 1);

		switch (m[0]) {
		case 'last':
		case 'next':
			switch (m[1].substring(0, 3)) {
			case 'yea':
				now.setFullYear(now.getFullYear() + num);
				break;
			case 'mon':
				now.setMonth(now.getMonth() + num);
				break;
			case 'wee':
				now.setDate(now.getDate() + (num * 7));
				break;
			case 'day':
				now.setDate(now.getDate() + num);
				break;
			case 'hou':
				now.setHours(now.getHours() + num);
				break;
			case 'min':
				now.setMinutes(now.getMinutes() + num);
				break;
			case 'sec':
				now.setSeconds(now.getSeconds() + num);
				break;
			default:
				var day;
				if ( typeof ( day = __is.day[m[1].substring(0, 3)]) != 'undefined') {
					var diff = day - now.getDay();
					if (diff == 0) {
						diff = 7 * num;
					} else if (diff > 0) {
						if (m[0] == 'last') {
							diff -= 7;
						}
					} else {
						if (m[0] == 'next') {
							diff += 7;
						}
					}
					now.setDate(now.getDate() + diff);
				}
			}
			break;
		default:
			if (/\d+/.test(m[0])) {
				num *= parseInt(m[0], 10);
				switch (m[1].substring(0, 3)) {
				case 'yea':
					now.setFullYear(now.getFullYear() + num);
					break;
				case 'mon':
					now.setMonth(now.getMonth() + num);
					break;
				case 'wee':
					now.setDate(now.getDate() + (num * 7));
					break;
				case 'day':
					now.setDate(now.getDate() + num);
					break;
				case 'hou':
					now.setHours(now.getHours() + num);
					break;
				case 'min':
					now.setMinutes(now.getMinutes() + num);
					break;
				case 'sec':
					now.setSeconds(now.getSeconds() + num);
					break;
				}
			} else {
				return false;
			}
			break;
		}
		return true;
	};
	match = strTmp.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);
	if (match != null) {
		if (!match[2]) {
			match[2] = '00:00:00';
		} else if (!match[3]) {
			match[2] += ':00';
		}
		s = match[1].split(/-/g);
		for (i in __is.mon) {
			if (__is.mon[i] == s[1] - 1) {
				s[1] = i;
			}
		}
		s[0] = parseInt(s[0], 10);
		s[0] = (s[0] >= 0 && s[0] <= 69) ? '20' + (s[0] < 10 ? '0' + s[0] : s[0] + '') : (s[0] >= 70 && s[0] <= 99) ? '19' + s[0] : s[0] + '';
		return parseInt(this.strtotime(s[2] + ' ' + s[1] + ' ' + s[0] + ' ' + match[2]) + (match[4] ? match[4] / 1000 : ''), 10);
	}

	var regex = '([+-]?\\d+\\s' + '(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?' + '|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday' + '|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)' + '|(last|next)\\s' + '(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?' + '|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday' + '|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))' + '(\\sago)?';
	match = strTmp.match(new RegExp(regex, 'gi'));
	// Brett: seems should be case insensitive per docs, so added 'i'
	if (match == null) {
		return false;
	}
	for ( i = 0; i < match.length; i++) {
		if (!process(match[i].split(' '))) {
			return false;
		}
	}
	return (now.getTime() / 1000);
}

// creates a 'pretty date' from a unix time stamp
function prettyDate(time) {
	var monthname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var date = new Date(time * 1000),
	    diff = (((new Date()).getTime() - date.getTime()) / 1000),
	    day_diff = Math.floor(diff / 86400);
	if (isNaN(day_diff) || day_diff < 0) {
		return '';
	}
	if (day_diff >= 31) {
		var date_year = date.getFullYear();
		var month_name = monthname[date.getMonth()];
		var date_month = date.getMonth() + 1;
		if (date_month < 10) {
			date_month = "0" + date_month;
		}
		var date_monthday = date.getDate();
		if (date_monthday < 10) {
			date_monthday = "0" + date_monthday;
		}
		return date_monthday + " " + month_name + " " + date_year;
	}
	return day_diff == 0 && (diff < 60 && "just now" || diff < 120 && "1 minute ago" || diff < 3600 && Math.floor(diff / 60) + " minutes ago" || diff < 7200 && "1 hour ago" || diff < 86400 && "about " + Math.floor(diff / 3600) + " hours ago") || day_diff == 1 && "Yesterday" || day_diff < 7 && day_diff + " days ago" || day_diff < 31 && Math.ceil(day_diff / 7) + " week" + ((Math.ceil(day_diff / 7)) == 1 ? "" : "s") + " ago";
}

// set up a twitter screen name.
var screen_name = '%23JMS2015';

function loadData() {
	// create table view data object
	var rows = [];

	var xhr = Ti.Network.createHTTPClient();
	xhr.timeout = 1000000;

	var bearerToken = "AAAAAAAAAAAAAAAAAAAAAEHKSgAAAAAAKzh8n7rBx8SsTJECCkRlVHW%2FlG8%3DvVgRTmoK6wDp1DEw9GZMShZcdCgDcd4CgwvBbzrgbk";

	//https://api.twitter.com/1.1/search/tweets.json?q=%23superbowl&result_type=recent
	xhr.open("GET", "https://api.twitter.com/1.1/search/tweets.json?q=" + screen_name + "&result_type=recent");
	//xhr.open("GET", "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + screen_name);

	xhr.setRequestHeader("Authorization", "Bearer " + bearerToken);

	xhr.onload = function() {
		try {
			//Ti.API.info("TWITTER RESPONSE: "+this.responseText);
			var tweets = JSON.parse(this.responseText);
			//Ti.API.info("TWEET: " + JSON.stringify(tweets[0]));

			_.each(tweets.statuses, function(value) {
				//Ti.API.info("DATA: " + value.img);
				var riga = Alloy.createController('tweetRow', {

					tweet : value.text,
					user : value.user.screen_name,
					avatar : value.user.profile_image_url,
					created_at : prettyDate(strtotime(value.created_at)),
					first_url : value.entities.urls[0].expanded_url

				}).getView();
				rows.push(riga);
			});

			$.tweetsTable.setData(rows);
			//Ti.UI.currentWindow.add(tableview);
			//win.add(tableview);
		} catch(E) {
			alert(E);
		}
	};

	xhr.send();
}

function reloadData() {

	if (OS_IOS) {
		setTimeout(function() {
			//Ti.API.debug('Timeout');
			loadData();
			$.refresh.endRefreshing();
		}, 2000);
	}

}
