'use strict';

headerModule.directive('headerLink', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude, $http) {
			$http.get('jsonfile/headerlinks.json').success(function(data, status, headers, config){
				
				angular.forEach(data.toplinks, function(item) {
					//console.log(item.sublinks);
					if ( item.sublinks.hasOwnProperty("sublink1") ){
						item["disp"] = true;
					}
				});
				$scope.headerLinks = data;
			})
			.error(function(data, status, config){
				$scope.headerLinks = status;
			});
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		//template: '<h1>test lalalal</h1>'
		templateUrl: 'view/header-link.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
});

