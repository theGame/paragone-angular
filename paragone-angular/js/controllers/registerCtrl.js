'use strict';

register.controller('registerCtrl', ['$scope', '$location', function($scope, $location){

	$scope.redirect = function(){
		return $location.path('/#/');
	}

	
}]);