(function() {
'use strict';

    var isolateScopeApp = angular.module('isolateScopeApp', []);
    
    isolateScopeApp.directive("kidNotIsolated",['$state',function($state){
        return {
            restrict: "E",
            template:'<input type="text" ng-model="choreNotIsolated">{{choreNotIsolated}}'
        }    
    }]);
    isolateScopeApp.directive("kidScopeIsolated",['$state',function($state){
        return {
            restrict: "E",
            
            // pass in a object to the scope property
            //This will limit the scope to being just one per kid, basically
            scope:{
                // "&" sign for expression.so when we invoke done in the directive (template), 
                // it will call mapped (invoke) function in the controller
                done: '&'
            },
            template:'<input type="text"  ng-model="choreNotIsolated">{{choreNotIsolated}}<br/><br/>'+
                     '<button class="btn" ng-click="done({choreNew:choreNotIsolated})"> I \'am done</button>'
        }    
    }]);
    
}());


