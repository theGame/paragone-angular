'use strict';

app.controller('investorPostCtrl', function($scope, $routeParams, BindingComent){	

	//$scope.message = $routeParams.postText;  //when we want pass data with routerParams

	$scope.messageToCommentCtrl = BindingComent;


});