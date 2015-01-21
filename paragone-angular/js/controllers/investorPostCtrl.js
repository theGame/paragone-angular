'use strict';

app.controller('investorPostCtrl', function($scope, $routeParams, bindingComent){	

	$scope.message = $routeParams.postText;

});