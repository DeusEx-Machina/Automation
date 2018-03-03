'use strict';

angular.module('myApp.status', ['ngRoute'])

	.config([
	                                          '$routeProvider', function ($routeProvider) {
		$routeProvider.when('/status', {
			templateUrl: 'js/status/status.html',
			controller: 'statusCtrl'
		});
	}])
.controller('statusCtrl', [function(){

}]);