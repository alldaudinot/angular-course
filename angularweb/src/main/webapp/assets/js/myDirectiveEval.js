(function(myApp) {
	directive.$inject=[];
	function directive() {
		console.log("function inyectable desde eval");
		return {
			restrict: "E", 
			link: function(scope,_,attrs) {
				console.log(attrs.oneBinding);
				console.log(scope.$eval(attrs.twoBinding));
				scope.$eval(attrs.function);
			}
		};		
	} myApp.directive("myDirectiveEval", directive);	
} (angular.module("myApp")));