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

$.body.text = "Palm Sunday opens the Retreat with a liturgy in the church at 10am followed by a talk and meditation at the Heritage Centre at 5.30pm. There will be yoga each morning at the Heritage Centre followed by regular meditation periods and talks by Fr. Laurence. The Mass of the Lord’s Supper will be on Thursday at 7pm. The Good Friday service will be at 3pm. The Easter Vigil will begin on Saturday at 9pm. At dawn on Easter Morning those who wish will assemble by the Standing Stone in the centre of the island. There will be Mass on Easter morning at 10am. The Retreat will conclude at the Heritage Centre at 8am with a final talk and meditation. Participants are of course welcome to come before or stay after the Retreat and enjoy the island. The Retreat is open to all and some sessions are particularly addressed to young adults.";

$.linkToSite.text = "www.wccm.org";

function goToSite(){
	Ti.Platform.openURL("http://www.wccm.org");
}
