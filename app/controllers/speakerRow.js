var args = arguments[0] || {};


$.header.text = args.header;
$.speakerImg.image = args.speakerImg;
if(args.speakerAdditionalInfo != ""){
	$.speakerAdditionalInfo.text = args.speakerAdditionalInfo;
}
$.speakerName.text = args.speakerName;
$.speakerInfo.text = args.speakerInfo;
$.fullInfo.text = args.fullInfo;