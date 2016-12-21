
(function(myApp) {
	myConfig.$inject=["$routeProvider"];
	function myConfig($routeProvider) {
		$routeProvider.when("/", {
			templateUrl: "view/list.html"
		}).when("/create", {
			templateUrl: "view/create.html"
		}).when("/edit/:id", {
			templateUrl: "view/edit.html"
		}).when("/delete/:id", {
			templateUrl: "view/delete.html"
		}).otherwise({redirecTo: "/"});
	} myApp.config(myConfig);	
} (angular.module("myApp")));
