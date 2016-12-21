
(function(myApp) {
	function negocioService() {
		var text = "Hello world from Service!!!";
		this.write = function() { 
			console.log(text);
		};
	} myApp.service("NegocioService", negocioService);	
} (angular.module("myApp")));


(function(myApp) {
	selectService.$inject=["$http"];
	function selectService($http) {
		this.getData = function() {
			return $http.get("../../assets/datos/clients.json", {});
		};
	} myApp.service("SelectService", selectService);	
} (angular.module("myApp")));