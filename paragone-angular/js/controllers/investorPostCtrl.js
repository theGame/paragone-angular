'use strict';

app.controller('investorPostCtrl', function($scope, $localStorage){	

	//$scope.message = $routeParams.postText;  //when we want pass data with routerParams, need $routeParams in function and directive

	$scope.commentDate = $localStorage.commentDate;
	$scope.commentMessage = $localStorage.commentMessage;


});