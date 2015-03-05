var args = arguments[0] || {};

$.av.image = args.avatar;
$.user_label.text = args.user;
$.date_label.text = args.created_at;
$.tweet_text.text = args.tweet;

function goToURL(){
	
	args.first_url && Ti.Platform.openURL(args.first_url);

	
}
