'use strict';

login.controller('loginCtrl', ['$scope', '$sessionStorage', '$location', function($scope, $sessionStorage, $location){
	
	var existingUser =[
	{
		"name" : "yuriy.voytas",
		"password" : "test"  
	},
	{
		"name" : "admin",
		"password" : "admin"  
	}];

	$scope.checkUser = function(username, pass){

		$scope.user = this.username;
		var password = this.pass;

		$sessionStorage.$reset();

		var setUser;
		setUser = angular.forEach(existingUser, function(value, key){
			if(value.name == $scope.user && value.password == password){
				$scope.$storage = $sessionStorage.$default({
					user: $scope.user
				});
				$location.path('/#/');
				return true;
			}
		});
	};

}]);