'use strict';

app.filter('cutTextInDatePage', function(){
	return function(message){
		var res;
		var firstPoint;
		firstPoint = message.indexOf('date=');
		console.log(firstPoint);
		return res = message.slice(firstPoint+5);
	}
});