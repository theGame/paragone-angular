
var app = /**
*  Module
*
* Description
*/
angular.module('paragoneApp', ['investor']);

app.directive('headerLink', function(){
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
					console.log(item.sublinks);
					if ( item.sublinks.hasOwnProperty("sublink1") ){
						item["disp"] = true;
						console.log(item.disp); //display block
					}
				});
				$scope.headerLinks = data;
				console.log($scope.headerLinks);
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

app.directive('middleContainer', function(){
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
			}).
			error(function(data, status, headers, config){
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

app.directive('footerPart', function(){
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
			 }).
			error(function(data, status, headers, config) {
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


/* MODULE secondMod */
var secondMod = angular.module('investor', []);

secondMod.directive('mainSlider', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'view/main-slider.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
});