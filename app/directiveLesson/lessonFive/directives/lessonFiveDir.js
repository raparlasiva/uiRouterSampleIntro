(function() {
'use strict';

    var isolateScopeReviewApp = angular.module('isolateScopeReviewApp', []);
    
   isolateScopeReviewApp.directive("phone",['$state',function($state){
       return{
            restrict:'E',
            //isolate scope - 
            //if we comment the isloate scope, the last defination of directive would rewrite the previous values
            scope:{
               number :"@",
               network:"=", // bi-directional two-way binding
               makeCall   :"&"
            },
            templateUrl:'directiveLesson/lessonFive/directives/templates/IsolateReview.html',
            link:function(scope,element,attrs){
                console.info(attrs);
                //scope.number =attrs.number; // this is simillar to @ sign -- attaching the attrs.nmber to the scope.number
                 scope.networks = ["Verizon", "AT&T", "Sprint"];
                 scope.network  = scope.networks[1];
            }
       }    
   }]);
    
}());


