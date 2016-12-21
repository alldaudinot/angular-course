
(function(myApp) {
	function negocioController(NegocioFactorySingleton, NegocioService, NegocioProvider, NegocioFactoryMultiple) {
		NegocioFactorySingleton.write();
		NegocioService.write();
		NegocioProvider.write();
		
		var negocioFactoryMultiple1 = new NegocioFactoryMultiple("alex");
		var negocioFactoryMultiple2 = new NegocioFactoryMultiple("pedro");
		
		negocioFactoryMultiple1.write();
		negocioFactoryMultiple2.write();
		
	} myApp.controller("NegocioController", negocioController);	
} (angular.module("myApp")));


(function(myApp) {
	myApp.value("jQuery", $);
	function jqueryController(jQuery) {
		jQuery("#jquery").addClass("invisible");
		console.log(jQuery("#jquery").text());
	} myApp.controller("JQueryController", jqueryController);	
} (angular.module("myApp")));


(function(myApp) {
	selectController.$inject=["$scope", "SelectService"];
	function selectController($scope, SelectService) {
		SelectService.getData().success(function(data) {
			$scope.collection = data;
			$scope.model = $scope.model || {};
			$scope.model.id = "3";			
		});	
	} myApp.controller("SelectController", selectController);	
} (angular.module("myApp")));

