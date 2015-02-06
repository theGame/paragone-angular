'use strict';


/*	MODULES  */

var app = /**
*  Module
*
* Description
*/
angular.module('paragoneApp', ['slaider', 'topLink', 'middleInfo', 'footerLink', 'investor', 'newsBlock', 'allComment', 'login', 'pageComment', 'ngRoute', 'ui.bootstrap', 'ngStorage']);

//configuration route
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'view/body-view.html'
		})
		.when('/comment/', {
			templateUrl : 'view/page-comment.html'
		})
		.when('/:postText.html', {
			templateUrl : 'view/all-comment.html',
			controller : 'investorPostCtrl'
		})
		.when('/login/', {
			templateUrl : 'view/log-in.html',
			controller : 'loginCtrl'
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


var allComment = /**
*	Module
*
* Description
*/
angular.module('allComment', []);


var pageComment = /**
*	Module
*
* Description
*/
angular.module('pageComment', ['allComment', 'topLink', 'footerLink']);


var login = /**
*	Module
*
* Description
*/
angular.module('login', []);