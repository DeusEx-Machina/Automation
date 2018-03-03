'use strict';

angular.module('myApp.inventory', ['ngRoute'])

	.config([
		        '$routeProvider', function ($routeProvider) {
			$routeProvider.when('/inventory', {
				templateUrl: 'js/inventory/inventory.html',
				controller: 'inventoryCtrl'
			});
		}
	        ])
	.controller('inventoryCtrl', [
		'$scope', '$http', 'Inventory',
		function ($scope, $http, Inventory) {
			$scope.inventory = [];

			$scope.formData = {};

			//load data
			Inventory.get()
				.success(function (data) {
					$scope.inventory = data;
					$scope.loading = false;
				});


			$http.get('/api/items')
				.success(function (data) {
					$scope.items = data;
					console.log(data);
				})
				.error(function (data) {
					console.log('Error: ' + data);
				});

			$scope.deleteItem = function (id) {
				$http.delete('/api/items/' + id)
					.success(function (data) {
						$scope.inventory = data;
						console.log(data);
					})
					.error(function (data) {
						console.log('Error: ' + data);
					});
			};

			//this should be done server side
			$scope.createItem = function () {
				$http.post('/api/items', $scope.formData)
					.success(function (data) {
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.inventory = data;
						console.log(data);
					})
					.error(function (data) {
						console.log('Error: ' + data);
					});
			}
		}
	])

	// super simple service
	// each function returns a promise object
	.factory('Inventory', [
		'$http', function ($http) {
			return {
				get: function () {
					return $http.get('/api/items');
				},
				create: function (todoData) {
					return $http.post('/api/items', todoData);
				},
				delete: function (id) {
					return $http.delete('/api/items/' + id);
				}
			}
		}
	]);
