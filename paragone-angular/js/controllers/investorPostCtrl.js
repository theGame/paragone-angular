'use strict';

app.controller('investorPostCtrl', function($scope, $routeParams){	
	$scope.message = $routeParams.postText;
});