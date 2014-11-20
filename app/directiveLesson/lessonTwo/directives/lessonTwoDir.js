(function() {
'use strict';

    var basicBehaviorApp = angular.module('basicBehaviorApp', []);

    basicBehaviorApp.directive('enter',['$state',function($state){
        // returning a linking function
        return function(scope,element,attrs){
            element.bind("mouseenter", function() {
                console.log("I'm inside of you!");
            })
        }    
    }]);
    basicBehaviorApp.directive('leave',['$state',function($state){
        // returning a linking function
        return function(scope,element,attrs){
            element.bind("mouseleave", function() {
                console.log("I'm leaving on a jet plane");
            })
        }    
    }]);
    basicBehaviorApp.directive('usefulEnter',['$state',function($state){
        // returning a linking function
        return function(scope,element,attrs){
            // jquery lite
            console.info(attrs);
            element.bind("mouseenter", function() {
                element.addClass(attrs.usefulEnter);
            })
        }    
    }]);
    basicBehaviorApp.directive('usefulLeave',['$state',function($state){
        // returning a linking function
        return function(scope,element,attrs){
            // jquery lite
            element.bind("mouseleave", function() {
                element.removeClass(attrs.usefulEnter);
            })
        }    
    }]);
}());


