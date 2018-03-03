angular.module('myApp.data', ['ngRoute'])
	.config([
		        '$routeProvider', function ($routeProvider) {
			$routeProvider.when('/data', {
				templateUrl: 'js/data/data.html',
				controller: 'dataCtrl'
			});
		}
	        ])
.controller('dataCtrl', [ function(){

}]);