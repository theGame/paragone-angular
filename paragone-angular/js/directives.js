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
				console.log("---------------------headerlink-------------------------success");
				
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

middleModule.directive('middleContainer', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude, $http) {

			$http.get('jsonfile/middle-container-data.json').success(function(data, status, headers, config){
				$scope.middleVal = data;
				console.log("-------------------middleContainer-------------------------success");
			})
			.error(function(data, status, headers, config){
				$scope.middleVal = status;
			})
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'view/middle-container.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
});

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

investorModule.directive('investorBlock', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude, $http) {
			$http.get('jsonfile/investors.json').success(function(data, config, headers, status){
				$scope.investors = data; 
				console.log('---------------------mainSlider------------------------success');
			})
			.error(function(data, status, headers, config){
				$scope.investors = status;
			});
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'view/investor-block.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {

		}
	};
});


newsModule.directive('newsBlock', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude, $http) {
			$http.get('jsonfile/news.json').success(function(data, config, headers, status){
				$scope.investors = data; 
				console.log('---------------------newsBlock------------------------success');
			})
			.error(function(data, status, headers, config){
				$scope.investors = status;
			});
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'view/investor-block.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
});