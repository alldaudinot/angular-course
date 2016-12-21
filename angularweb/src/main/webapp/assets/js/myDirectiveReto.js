
(function(myApp) {
	mySelect.$inject=["GenderService", "MaritalStatusService"];
	function mySelect(GenderService, MaritalStatusService) {
		console.log("function inyectable desde reto"); 
		return {
			
			restrict: "E",
			
			compile: function() {				
				
				return function(scope, elem, attr, ctrl) {
					
					if (attr.ngModel === "model1.id") { 
						GenderService.getGender().success(function(data) {
							scope.collection1 = data;
							scope.model1 = scope.model1 || {};
							scope.model1.id = "1";			
						});	
					} else {
						MaritalStatusService.getMaritalStatus().success(function(data) {
							scope.collection2 = data;
							scope.model2 = scope.model2 || {};
							scope.model2.id = "1";			
						});	
					}					
				}
			}, 
			templateUrl: function(element, attrs) {
				if (attrs.model === "model1.id") {
					return "myGenderSelect.html"
				} else {
					return "myMaritalStatusSelect.html"
				}
			},
			replace: true		
		}; 
	} myApp.directive("mySelect", mySelect);	
} (angular.module("myApp")));
