(function() {
'use strict';

    var superhero = angular.module('superhero', []);

    superhero.directive('superman',['$state',function($state){
        // return an object here
        return {
            restrict : 'E',
            template:'<div>Here I am to save the day</div>'
        }    
    }]);
    superhero.directive('myFirstDirective',['$state',function($state){
        // returning a linking function
        return function(scope,element,attrs){
            element.text(scope.someRandomObj.message + " "+attrs.message)
        }    
    }]);
}());