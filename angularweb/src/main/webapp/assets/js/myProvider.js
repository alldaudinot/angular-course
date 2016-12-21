(function(myApp) {
	function negocioProvider() {
		var defaultText = "Hello world from Provider!!!";
		var text = defaultText;
		
		this.setCulture = function(culture) { 
			(culture === "es") ? text = "Hola mundo desde Provider!!!" : defaultText;
		};
		
		this.$get = ["$http", function($http) {
			return {
				write: function() {
					console.log(text);
				}
			};		
		}];
	} myApp.provider("NegocioProvider", negocioProvider);	
} (angular.module("myApp")));