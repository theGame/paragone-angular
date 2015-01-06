app.filter('cutText', function(STARTPOINT){
	return function(post){
		var res; 
		var lastEmptyIndex;
		res = post.slice(STARTPOINT, 60);
		lastEmptyIndex = res.lastIndexOf(' ');
		res = res.slice(STARTPOINT, lastEmptyIndex);
		return res = res + '...';
	}
});