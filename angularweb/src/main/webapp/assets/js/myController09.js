
(function(myApp) {
	myController.$inject=["$scope"];
	function myController($scope) {		
		console.log("hi from myController"); 
		$scope.name = "que pasa alex!"
		$scope.click = function() {
			console.log("click function from myController");
		}
	} myApp.controller("myController", myController);	
} (angular.module("myApp")));
