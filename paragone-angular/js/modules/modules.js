'use strict';


/*	MODULES  */

var app = /**
*  Module
*
* Description
*/
angular.module('paragoneApp', ['slaider', 'topLink', 'middleInfo', 'footerLink', 'investor', 'newsBlock', 'allComment', 'ngRoute', 'ui.bootstrap', 'ngStorage']);

//configuration route
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'view/body-view.html'
		})
		.when('/comment.html', {
			templateUrl : 'view/all-comment.html',
			controller : 'investorPostCtrl'
		})
		.when('/:postText.html', {
			templateUrl : 'view/all-comment.html',
			controller : 'investorPostCtrl'
		})
		.otherwise({
        	redirectTo: '/'
      	});
}]);

var slaiderModule = /**
*	Module
*
* Description
*/
angular.module('slaider', ['ngStorage']);


var investorModule = /**
*	Module
*
* Description
*/
angular.module('investor', ['ngStorage']);


var headerModule = /**
*	Module
*
* Description
*/
angular.module('topLink', []);


var middleModule = /**
*	Module
*
* Description
*/
angular.module('middleInfo', []);


var footerModule = /**
*	Module
*
* Description
*/
angular.module('footerLink', []);


var newsModule = /**
*	Module
*
* Description
*/
angular.module('newsBlock', []);


var commentPage = /**
*	Module
*
* Description
*/
angular.module('allComment', []);