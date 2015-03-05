var args = arguments[0] || {};

$.feedWebView.url = "http://wccm.org/bi2015/feed.html";

function doOpen(evt) {

	if (OS_ANDROID) {
		abx.title = "Bere Island  2015";
		abx.titleFont = "Expo Sans Pro Regular.otf";
		abx.titleColor = "#204000";

		//actionBarHelper.setIcon('/drawericonw@2x.png');

	}
	
	
}

function refreshLiveBlog(){
	$.feedWebView.reload();
}


