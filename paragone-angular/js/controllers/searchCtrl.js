'use strict';

headerModule.controller('searchCtrl',['$scope', '$http', function($scope, $http){

	$scope.url = 'search.php';

	$scope.search = function (keyEvent){

		if(keyEvent.which === 13){
			$http.post($scope.url, {'data' : $scope.searchText}).
			success(function(data, status){
				$scope.data = data;
				$scope.status = status;
			}).
			error(function(data, status){
				$scope.data = data || "request failed";
				$scope.status = status;
			});
		};		
	};
}]);