'use strict';

app.filter('cutTextInDatePage', function(myConfigConstant){
	return function(message){
		var res;
		var firstPoint;
		firstPoint = message.indexOf(myConfigConstant.CommentPageFilter1);
		console.log(firstPoint);
		return res = message.slice(firstPoint+6);
	}
});