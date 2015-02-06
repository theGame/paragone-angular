'use strict';

login.controller('loginCtrl', function($scope, $sessionStorage, $location){
	
	var existingUser ={
		"name" : "yuriy.voytas",
		"password" : "test"  
	}

	$scope.checkUser = function(username, pass){
		if(existingUser.name == this.username && existingUser.password == this.pass){
			$scope.$storage = $sessionStorage.$default({
			    name: this.username
			});
			$location.path('/#/');
		}
	};

});