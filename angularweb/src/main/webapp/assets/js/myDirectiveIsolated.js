(function(myApp) {
	directive.$inject=[];
	function directive() {
		console.log("function inyectable desde isolated");
		return {
			restrict: "E", 
			scope: {
				oneBinding: "@oneBinding", 
				twoBinding: "=twoBinding",
				click: "&function"				
			}, 
			link: function(scope) {
				console.log(scope.oneBinding);
				console.log(scope.twoBinding);
				scope.click();
			}
		};		
	} myApp.directive("myDirectiveIsolated", directive);	
} (angular.module("myApp")));