'use strict'; 

app.filter('cutTextInPostPage', function(){
	return function(message){
		var res;
		var firstPoint = message.indexOf('=');
		var secondPoint = message.indexOf('&date');
		res = message.slice(firstPoint+1, secondPoint);
		return res;
	}
});