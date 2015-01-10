'use strict'; 

app.filter('cutTextInPostPage', function(myConfigConstant){
	return function(message){
		var res;
		var firstPoint = message.indexOf('=');
		var secondPoint = message.indexOf(myConfigConstant.CommentPageFilter2);
		res = message.slice(firstPoint+1, secondPoint);
		return res;
	}
});