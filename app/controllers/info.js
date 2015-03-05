var args = arguments[0] || {};

function doOpen(evt) {

	if (OS_ANDROID) {
		abx.title = "The John Main Seminar 2015";
		abx.titleFont = "Expo Sans Pro Regular.otf";
		abx.titleColor = "#204000";

		//actionBarHelper.setIcon('/drawericonw@2x.png');

	}
}

$.titolo.text = "Spirituality and Religion in a Secular Age";

$.body.text = "We live in a period of history in which public opinion is privileging spirituality above religion, and where the latter is regarded with a good deal of suspicion. The construction of spirituality and religion as opposites is anomalous from an historical point of view.\n\nSpirituality once referred to the living core of religion, and those who wanted to take religion a step further than common experience were said to be spiritual. Now those who are “not very religious” are claiming to be spiritual. In today’s climate, it is not popular to point to the ongoing connection between spirituality and religion, but in ideal conditions they belong together and have a great deal to offer each other.\n\nDavid Tacey is Professor of Literature at La Trobe University, Melbourne, Australia where he teaches courses on spirituality, cultural studies, analytical psychology, and literature. He is the author of 13 books including The Darkening Spirit: Jung, Spirituality, Religion (2013); Edge of the Sacred: Jung, Psyche, Earth (2009) and The Spirituality Revolution: The Emergence of Contemporary Spirituality (2003).\n\nFor more information on David Tacey and other talks he will be giving at the seminar visit:";

$.linkToSite.text = "www.johnmainseminar2015.com";

function goToSite(){
	Ti.Platform.openURL("http://www.johnmainseminar2015.com");
}
