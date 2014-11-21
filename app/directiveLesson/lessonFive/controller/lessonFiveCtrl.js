(function() {
'use strict';

    var lessonFiveController = angular.module('lessonFiveController', []);

    lessonFiveController.controller('lesson.five.Ctrl', ['$scope','$stateParams','$state','$filter','$modal','$timeout','$interval',
        function($scope,$stateParams,$state,$filter,$modal,$timeout,$interval) {
           console.info("inside five ctrl");
           
            $scope.leaveVoicemail = function(number, message) {
                alert("Number: " + number + " said: " + message)
            }
            
           
    }]);

}());


