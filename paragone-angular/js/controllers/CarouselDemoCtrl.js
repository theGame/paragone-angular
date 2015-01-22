'use strict';

app.controller('CarouselDemoCtrl' , function($scope, $http, $animate, bindingComent){

	$http.get('jsonfile/investors.json').success(function(data, config, headers, status){
		$scope.investorData = data; 
		console.log('---------------------mainSlider------------------------success');
		//Deferred()
		//dfr.resolve();
		//return dfr.promise;
	})
	.error(function(data, status, headers, config){
		$scope.investors = status;
	})
	.then(function(){
		console.log("CarouselDemoCtrla --> " + $scope.investorData);
		/*angular.forEach($scope.investorData.investorer, function(value, key){
			console.log("value and key =", value + " " + key);
			angular.forEach(value, function(test, la){
				console.log("test and la =", test + " " + la);
			})
		});*/
	});

});
