
(function(myApp) {
	myController.$inject=["$scope","$routeParams"];
	function myController($scope, $routeParams) {
		$scope.params = angular.copy($routeParams);	
	} myApp.controller("MyController", myController);	
} (angular.module("myApp")));
