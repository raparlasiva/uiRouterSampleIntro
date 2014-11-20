(function() {
'use strict';

    var lessonThreeController = angular.module('lessonThreeController', []);

    lessonThreeController.controller('lesson.three.Ctrl', ['$scope','$stateParams','$state','$filter','$modal','$timeout','$interval',
        function($scope,$stateParams,$state,$filter,$modal,$timeout,$interval) {
           console.log("lesson three ctrl");
           
           $scope.logChore = function(chore){
               alert(chore + " is done");
           };
    }]);

}());


