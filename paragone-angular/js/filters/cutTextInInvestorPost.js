app.filter('cutTextInInvestorPost', function(myConfigConstant){
	return function(post){
		if (post.length >= 50)
		{
			var res; 
			var lastEmptyIndex;
			res = post.slice(myConfigConstant.STARTPOINT, 60);
			lastEmptyIndex = res.lastIndexOf(' ');
			res = res.slice(myConfigConstant.STARTPOINT, lastEmptyIndex);
			return res = res + '...';
		}
		else
		{
			return post;
		}
		
	}
});