app.controller('CarouselDemoCtrl', function($scope, $http, $animate){
	$http.get('jsonfile/investors.json').success(function(data, config, headers, status){
		$scope.investorData = data; 
		console.log('---------------------mainSlider------------------------success');
		console.log($scope.investorData.investorer.item3.posts.post1);
	})
	.error(function(data, status, headers, config){
		$scope.investorData = status;
	});
});