(function() {
'use strict';

    var andScopeApp = angular.module('andScopeApp', []);
    
   andScopeApp.directive("callPhone",['$state',function($state){
        // returning an object
        return{
            scope:{
                dial:"&"
            },
            template:'<input type="text" ng-model="someValue">'+
                    '<button class="btn btn-info" ng-click="dial({message:someValue})"> call home</button>'
           
        }    
   }]);
    
}());


