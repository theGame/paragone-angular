'use strict';

headerModule.controller('userCtrl', ['$scope', '$sessionStorage', '$element', function($scope, $sessionStorage, $element){
	
	if($sessionStorage.user){
		$scope.currentUser = $sessionStorage.user;
	}

	$scope.logOut = function(){
		delete $sessionStorage.user;
		var element = document.getElementByClass('current-user');
		element.remove();
	};

}]);