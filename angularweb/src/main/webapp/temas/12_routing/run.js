
(function(myApp) {
	myRun.$inject=["$templateCache", "$rootScope"];
	function myRun($templateCache, $rootScope) {
		$rootScope.$on('$routeChangeSuccess', function () {
			if ($templateCache.info().size > 3) {
				$templateCache.removeAll();
			}
		});	        
	} myApp.run(myRun);	
} (angular.module("myApp")));