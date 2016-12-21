
(function(myApp) {
	function greetController($scope) {
		$scope.greet = function() {
			console.log("greetController");			
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

(function(myApp) {
	function fullNameController($scope) {		
		$scope.fullname = function() {			
			console.log((($scope.model != undefined) ? $scope.model.name : "") 
					+ " " 
					+ (($scope.model != undefined) ? $scope.model.surname : "")); 
		};		
	} myApp.controller("FullName", fullNameController);	
} (angular.module("myApp")));


(function(myApp) {
	myParentController.$inject=["$scope"];
	function myParentController(scope) {		
		scope.findChildren = function() {			
			console.log("Tengo que buscar a mis hijos"); 
		};		
	} myApp.controller("myParent", myParentController);	
} (angular.module("myApp"))); 


(function(myApp) {
	myChild1Controller.$inject=["$scope"];
	function myChild1Controller(scope) {		
		scope.findBrother = function() {			
			console.log("Tengo que buscar a mi hermano"); 
			
			var ctrl = angular.element(document.getElementById("child2")).controller();
			if (ctrl && "buscar" in ctrl) 
				ctrl.buscar();
		};		
	} myApp.controller("myChild1", myChild1Controller);	
} (angular.module("myApp"))); 


(function(myApp) {
	myChild2Controller.$inject=["$scope"];
	function myChild2Controller(scope) {		
		this.buscar = function() {			
			console.log("He sido invocado desde mi hermano"); 
		};		
	} myApp.controller("myChild2", myChild2Controller);	
} (angular.module("myApp")));


(function(myApp) {
	fullNameBindingController.$inject=["$scope"];
	function fullNameBindingController(scope) {		
		scope.fullnameBinding = function() {			
			return (((scope.model != undefined && scope.model.name != undefined) ? scope.model.name : "") 
					+ " " 
					+ ((scope.model != undefined && scope.model.surname != undefined) ? scope.model.surname : "")); 
		};		
	} myApp.controller("FullNameBinding", fullNameBindingController);	
} (angular.module("myApp")));


(function(myApp) {
	formController.$inject=["$scope"];
	function formController(scope) {
		scope.enviar = function() {
			if (scope.form1.$valid) 
				console.log(scope.model);
		}		
	} myApp.controller("myFormController", formController);	
} (angular.module("myApp")));
