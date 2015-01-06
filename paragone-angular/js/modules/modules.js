'use strict';


/*	MODULES  */

var app = /**
*  Module
*
* Description
*/
angular.module('paragoneApp', ['slaider', 'topLink', 'middleInfo', 'footerLink', 'investor', 'newsBlock', 'ngRoute', 'ui.bootstrap']);

//configuration route
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'view/body-view.html'
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

