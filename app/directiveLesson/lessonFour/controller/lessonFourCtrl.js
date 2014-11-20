(function() {
'use strict';

    var lessonFourController = angular.module('lessonFourController', []);

    lessonFourController.controller('lesson.four.Ctrl', ['$scope','$stateParams','$state','$filter','$modal','$timeout','$interval',
        function($scope,$stateParams,$state,$filter,$modal,$timeout,$interval) {
            console.log("lesson four ctrl");
            
            console.info($state);
            
            $scope.howAreYouFeeling         = "Very cold";
            $scope.anythingMoreYouWantToSay = " and chille";
            
            $scope.inGeneral                = $scope.howAreYouFeeling +" " +$scope.anythingMoreYouWantToSay;
            
            $scope.callHome = function(message){
                alert(message +" called home");  
            };
            
            $scope.whatCoffe = "Skinny Vanilla Latte"; 
           
    }]);

}());


