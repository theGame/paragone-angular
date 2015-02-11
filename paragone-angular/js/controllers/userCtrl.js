'use strict';

headerModule.controller('userCtrl', ['$scope', '$sessionStorage', function($scope, $sessionStorage){
	
	if($sessionStorage.user){
		$scope.currentUser = $sessionStorage.user;
	}

	$scope.logOut = function(){
		delete $sessionStorage.user;
		if(document.getElementsByClassName('current-user') == 'undefine'){
			$(".current-user").remove();
		}
		else
			var element = document.getElementsByClassName('current-user')[0];
			element.parentNode.removeChild(element);		
	};

}]);