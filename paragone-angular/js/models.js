'use strict';


/*	MODULES  */

var app = /**
*  Module
*
* Description
*/
angular.module('paragoneApp', ['slaider', 'topLink', 'middleInfo', 'footerLink', 'investor', 'newsBlock', 'ngRoute']);

//configuration route
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'index.html',
			controller : 'bodyCtrl',
			url : 'index.html'
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
angular.module('slaider', []);


var investorModule = /**
*	Module
*
* Description
*/
angular.module('investor', []);


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

