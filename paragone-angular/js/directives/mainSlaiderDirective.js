'use strict';

slaiderModule.directive('mainSlider', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude, $http) {
			$http.get('jsonfile/investors.json').success(function(data, config, headers, status){
				$scope.investorData = data; 
				console.log('---------------------mainSlider------------------------success');
			})
			.error(function(data, status, headers, config){
				$scope.investorData = status;
			});
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'view/main-slider.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	}
});