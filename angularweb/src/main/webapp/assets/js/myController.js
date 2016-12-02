
(function(myApp) {
	function greetController($scope) {
		$scope.greet = function() {
			console.log("hi yall");			
		};		
	} myApp.controller("HelloWord", greetController);	
} (angular.module("myApp")));

/*
angular.module("myApp")
	.controller("HelloWord", function($scope) {
		$scope.greet = function() {
			console.log("hi yall");			
		}
		
		
	});
*/