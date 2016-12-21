
(function(myApp) {
	function negocioFactorySingleton() {
		var text = "Hello world from Factory!!!";
		return {
			write: function() {
				console.log(text);
			}
		};
	} myApp.factory("NegocioFactorySingleton", negocioFactorySingleton);	
} (angular.module("myApp")));


(function(myApp) {
	function negocioFactoryMultiple() {
		
		var foo = function(name) {
			this.name = name;
		}
		
		foo.prototype.write = function() {
			console.log("new instance " + this.name);
		}
		
		return foo;
		
	} myApp.factory("NegocioFactoryMultiple", negocioFactoryMultiple);	
} (angular.module("myApp")));




