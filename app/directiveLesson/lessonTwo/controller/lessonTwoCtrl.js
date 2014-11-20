(function() {
'use strict';

    var lessonTwoController = angular.module('lessonTwoController', []);

    lessonTwoController.controller('lesson.two.Ctrl', ['$scope','$stateParams','$state','$filter','$modal','$timeout','$interval',
        function($scope,$stateParams,$state,$filter,$modal,$timeout,$interval) {
           console.log("lesson tow ctrl");
    }]);

}());


