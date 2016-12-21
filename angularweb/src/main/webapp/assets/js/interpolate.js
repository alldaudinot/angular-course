var mainMod = angular.module('MainApp', []);

mainMod.service('GenderService', ['$http', 
	function ($http) {
	
		console.log("from GenderService");
	
		this.getGender = function() {
			return $http.get("../../assets/datos/gender.json", {});
		}
	}	
]);

mainMod.service('MaritalStatusService', ['$http', 
	function ($http) {
	
		console.log("from MaritalStatusService");
	
		this.getGender = function() {
			return $http.get("../../assets/datos/maritalstatus.json", {});
		}
	}	
]);

//example 3
mainMod.directive('mySelectGender', ['GenderService', '$interpolate', '$compile',  	
	function (GenderService, $interpolate, $compile) {
	
		console.log("from mySelectGender");
		
		return {
			
			restrict: "E",
			
			link: function(scope, elem, attr, ctrl) {
				
				GenderService.getGender().success(function(data) {
					scope.collection = data;
					scope.model = scope.model || {};
					scope.model.id = "1";			
				});	
				
				var template = "<select ng-model='{{'model.id'}}' ng-options='item.id as item.gender for item in {{'collection'}}'></select>";
				var interpolate = $interpolate(template)(scope);
				var linkFn = $compile(interpolate);
	            var content = linkFn(scope);
	            elem.append(content);
	            
	            console.log("scope: ");
				console.log(scope);
				console.log("elem: ");
				console.log(elem);
				console.log("attr: ");
				console.log(attr);
				console.log("ctrl: ");
				console.log(ctrl);
	        }
	    }
	
	}
]);

//example 2
mainMod.directive('myDirective', ['$compile',  	
	function ($compile) {
	
		console.log("from myDirective");
		
		return {
			
			restrict: "E",
			
			link: function(scope, element){
				
				var template = "<button ng-click='clickme()'>{{button_text}}</button>";
	            var linkFn = $compile(template);
	            var content = linkFn(scope);
	            element.append(content);
	        }
	    }
	
	}
]);

//example 1
mainMod.controller('MainCtrl', ['$scope','$parse','$interpolate','$compile',
	function ($scope,$parse,$interpolate,$compile) {
		
		console.log("from MainCtrl");
	
		$scope.clickme = function() {
			alert("click me more...");
		}
		
		$scope.name = 'Manish';
        
		//$parse
        $scope.parse = $parse('name')($scope);
        $parse('name').assign($scope,'Prakash');
        $scope.parse_assign = $parse('name')($scope);
        
        //$interpolate
        $scope.button_text = 'click me';
        var html = '<button ng-click="clickme();">{{button_text}}</button>';
        var interpolate = $interpolate(html)($scope);
        $scope.interpolate = interpolate;
      	
        //$compile: its best to use compile only in directives (see above, example 2)
        var linkFn = $compile(interpolate);
        var content = linkFn($scope); 
        $scope.compile = content;
        document.getElementById("myButton").append(content[0]);
    }
]);
