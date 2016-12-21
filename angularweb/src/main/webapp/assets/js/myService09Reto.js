
(function(myApp) {
	genderService.$inject=["$http"];
	function genderService($http) {
		this.getGender = function() {
			return $http.get("../../assets/datos/gender.json", {});
		};
	} myApp.service("GenderService", genderService);	
} (angular.module("myApp")));

(function(myApp) {
	maritalstatusService.$inject=["$http"];
	function maritalstatusService($http) {
		this.getMaritalStatus = function() {
			return $http.get("../../assets/datos/maritalstatus.json", {});
		};
	} myApp.service("MaritalStatusService", maritalstatusService);	
} (angular.module("myApp")));