var args = arguments[0] || {};

function doOpen(evt) {

	if (OS_ANDROID) {
		abx.title = "Bere Island Easter Retreat 2015";
		abx.titleFont = "Expo Sans Pro Regular.otf";
		abx.titleColor = "#204000";

		//actionBarHelper.setIcon('/drawericonw@2x.png');

	}
}

$.titolo.text = "Bere Island Easter Retreat 2015";

$.generalInfo.text = "Palm Sunday opens the Retreat with a liturgy in the church at 10am followed by a talk and meditation at the Heritage Centre at 5.30pm.\n\nThere will be yoga each morning at the Heritage Centre followed by regular meditation periods and talks by Fr. Laurence.\n\nThe Mass of the Lord’s Supper will be on Thursday at 7pm.\n\nThe Good Friday service will be at 3pm.\n\nThe Easter Vigil will begin on Saturday at 9pm. At dawn on Easter Morning those who wish will assemble by the Standing Stone in the centre of the island. There will be Mass on Easter morning at 10am.\n\nThe Retreat will conclude at the Heritage Centre at 8am with a final talk and meditation. Participants are of course welcome to come before or stay after the Retreat and enjoy the island.\n\nThe Retreat is open to all and some sessions are particularly addressed to young adults.";

$.wccmlink.text = "www.wccm.org";



function goToSite(){
	Ti.Platform.openURL("http://www.wccm.org");
}

function register(){
	Ti.Platform.openURL("https://io-wccm.org/civicrm/event/info?id=13");
}
