(function(myApp) {
	myDirective.$inject=["$http"];
	function myDirective($http) {
		console.log("function inyectable");
		return {
			restrict: "E", 
			link: function() { //no inyectable (scope, element, attributes)
				console.log("function link"); //al tener presente la function compile, nunca veremos "function link" en la consola
				console.log(arguments);
			},
			/*compile: function() { //no inyectable (element, attributes) => no tiene scope, en el atributo 0 tiene el element
				console.log("function compile");
				console.log(arguments);
				return function() { //no inyectable (scope, element, attributes) => tiene scope en el atributo 0 
					console.log("function link desde compile");
					console.log(arguments); //arguments es palabra reservada del sistema, analoga al args[] del main de java, 
					                        //contiene un array con los parametros que recibe la función (link).
				}
			},*/ /* reto 3 */
			compile: function() { //no inyectable (element, attributes) => no tiene scope, en el atributo 0 tiene el element
				console.log("function compile");
				console.log(arguments);
				return {
					/* reto 4: el uso de pre y post por link en el reto 3 */
					pre: function() { //no inyectable (scope, element, attributes) => tiene scope en el atributo 0 
						console.log("function link desde pre-link");
					    console.log(arguments); //arguments es palabra reservada del sistema, analoga al args[] del main de java, 
                                                //contiene un array con los parametros que recibe la función (link).
					},
					post: function() {
						console.log("function link desde post-link");
					    console.log(arguments);
					}
				}
			}, 
			controller: function($scope, $http) {
				/* reto 5: controller */
				console.log("function controller de directiva");
				this.addParent = function() {
					console.log("function panel agregado");
				}
			},
			/* reto 6: template 
			template: "<div>Hola alex!!!</div>",
			replace: true
			*/ 
			/* reto 7: template as function() 
			template: function(element, attrs) {
				if (attrs.culture === "es") 
					return "<div>Hola alex!!!</div>"
				else 
					return "<div>Hi alex!!!</div>"
			},
			replace: true
			*/
			/* reto 8: templateUrl */
			templateUrl: function(element, attrs) {
				if (attrs.culture === "es") 
					return "hola-alex.html"
				else 
					return "hi-alex.html"
			},
			replace: true
		};		
	} myApp.directive("myDirective", myDirective);	
} (angular.module("myApp")));


//reading example
var app = angular.module("myApp");
app.directive('dad', function () {
    return {
        restrict: 'EA',
        template: '<div class="dad">{{greeting}}{{name}}'+
        			'<son></son>'+
        		  '</div>',
        controller: function(){
            this.name = 'Paul'
        },
        link: function(scope,elem,attr,ctrl){
            scope.name = ctrl.name;
            scope.greeting = 'Hey, I am ';
        }
    };
});

app.directive('son', function () {
    return {
        restrict: 'EA',
        require: '^dad',
        template: '<div class="son">{{sonSays}}</div>',
        link: function(scope,elem,attr,ctrl){
            scope.sonSays = 'Hey, I am son, and my dad is '+ ctrl.name;
        }
    };
});

