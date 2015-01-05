app.value('startPoint', '0');

app.controller('bodyCtrl', [ function(){
	// test string
}]);

app.controller('CarouselDemoCtrl', [ function($scope, $http, $animate){
	$http.get('jsonfile/investors.json').success(function(data, config, headers, status){
		$scope.investorData = data; 
		console.log('---------------------mainSlider------------------------success');
		console.log($scope.investorData.investorer.item3.posts.post1);
	})
	.error(function(data, status, headers, config){
		$scope.investorData = status;
	});
}]);

app.filter('cutText', ['startPoint', function(startPoint){
	return function(post, startPoint){
		var res; 
		var emptyIndex;
		res = post.slice(0, 60);
		emptyIndex = res.lastIndexOf(' ');
		res = res.slice(0, emptyIndex);
		return res = res + ' ...';
	}
}]);