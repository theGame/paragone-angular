'use strict';

slaiderModule.controller('CarouselDemoCtrl' , function($scope, $http, $animate, $localStorage ){

	$http.get('jsonfile/investors.json').success(function(data, config, headers, status){
		$scope.investorData = data; 
		console.log('---------------------mainSlider------------------------success');
		//Deferred()
		//dfr.resolve();
		//return dfr.promise;item1
	})
	.error(function(data, status, headers, config){
		$scope.investors = status;
	})
	.then(function(){
		/*angular.forEach($scope.investorData.investorer, function(value, key){
			console.log("value and key =", value + " " + key);
			angular.forEach(value, function(test, la){
				console.log("test and la =", test + " " + la);
			})
		});*/
	});

	$scope.passDataToComment = function(allText, date){

		if( $localStorage.commentMessage || $localStorage.commentDate ){
			delete $localStorage.commentDate;
			delete $localStorage.commentMessage;
		}

		allText = 'data='+allText;

		$scope.$storage = $localStorage.$default({
			commentMessage : allText,
			commentDate : date
		});
	}

});
