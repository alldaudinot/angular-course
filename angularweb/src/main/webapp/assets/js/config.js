
(function(myApp) {
	function config(myCulture, NegocioProviderProvider) {
		NegocioProviderProvider.setCulture(myCulture);
	} myApp.config(config);
	
	/*
	function config(myCulture, NegocioProviderProvider, NegocioServiceProvider, NegocioFactoryProvider) { //los inyecta también.
		NegocioProviderProvider.setCulture(myCulture);
	} myApp.config(config);
	*/
} (angular.module("myApp")));
