'use strict';

app.controller('CarouselDemoCtrl' , function($scope, $http, $animate, bindingComent){


	$scope.investorData = {};
	$http.get('jsonfile/investors.json').success(function(data, config, headers, status){
		$scope.investorData = data; 
		console.log('---------------------mainSlider------------------------success');
		console.log($scope.investorData.investorer.item3.posts.post1);
		//Deferred()
		//dfr.resolve();
		//return dfr.promise;
	}).then(function(){
		console.log("CarouselDemoCtrla --> " + $scope.investorData);
		angular.forEach($scope.investorData.investorer, function(value, key){
			console.log("value and key =", value + " " + key);
		});
	});
	/*.error(function(data, status, headers, config){
		$scope.investorData = status;
	});*/




});