var args = arguments[0] || {};

function doOpen(evt) {

	if (OS_ANDROID) {
		abx.title = "The John Main Seminar 2015";
		abx.titleFont = "Expo Sans Pro Regular.otf";
		abx.titleColor = "#204000";

		//actionBarHelper.setIcon('/drawericonw@2x.png');

	}
}

var rows = [];

//Ti.API.info("DATA: " + value.img);
var rigaStacey = Alloy.createController('speakerRow', {

	header : "Spirituality and Religion in a Secular Age",
	speakerImg : "/images/david-stacey.jpg",
	speakerName : "Presented by David Tacey",
	speakerInfo : "Author of numerous works on religion, spirituality and society",
	fullInfo: "We live in a period of history in which public opinion is privileging spirituality above religion, and where the latter is regarded with a good deal of suspicion. The construction of spirituality and religion as opposites is anomalous from an historical point of view.\n\nSpirituality once referred to the living core of religion, and those who wanted to take religion a step further than common experience were said to be spiritual. Now those who are “not very religious” are claiming to be spiritual. In today’s climate, it is not popular to point to the ongoing connection between spirituality and religion, but in ideal conditions they belong together and have a great deal to offer each other.\n\nOther talks that David will give at the Seminar include Michael Leunig: Cartoonist of the Spiritual Journey; Youth Spirituality: What Is It? What Do Youth Believe?; Spinning on a Dream Thread: Indigenous Spirituality and Environmental Crisis and God After God: What Does God Mean in a Godless Time?\n\n"

}).getView();
rows.push(rigaStacey);

var rigaLaurence = Alloy.createController('speakerRow', {

	header : "Meditation as a Modern Spiritual Path",
	speakerImg : "/images/laurence-freeman.jpg",
	speakerAdditionalInfo: "Pre-seminar meditation retreat: January 12-15",
	speakerName : "Led by Laurence Freeman OSB",
	speakerInfo : "Director of the World Community for Christian Meditation",
	fullInfo: "At some point in life we realise that we are not just finding time for a spiritual journey because that is just what life itself is. We seek to make sense of the hardships we suffer and to understand the meaning of happiness.\n\nMeditation then becomes the most important direction-giver and source of personal stability. Inner and outer become harmonised.\n\nRelationships are changed and values are clarified. We see that the psychological and physical benefits of meditation point to deeper spiritual fruits. Laurence Freeman OSB will explore these connections and suggest how they transform our lives."

}).getView();
rows.push(rigaLaurence);

$.speakersTable.setData(rows); 