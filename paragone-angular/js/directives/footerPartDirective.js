'use strict';

footerModule.directive('footerPart', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude, $http) {

			$http.get('jsonfile/footerlinks.json').success(function(data, status, headers, config) {
			  	$scope.flinks = data;
			  	console.log("---------------------footerPart------------------------success");
			 })
			.error(function(data, status, headers, config) {
			  	$scope.flinks = status;
			});

		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'view/footer-part.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
});