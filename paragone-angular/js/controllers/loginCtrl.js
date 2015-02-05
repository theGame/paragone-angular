'use strict';

login.controller('loginCtrl', function($scope, $sessionStorage){
	
	var existingUser ={
		"name" : "yuriy.voytas",
		"password" : "test"  
	}

	$scope.checkUser = function(username, pass){
		if(existingUser.name == this.username && existingUser.password == this.pass){
			alert("yes");
		}
	};

});