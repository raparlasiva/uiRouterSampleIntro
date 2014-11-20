(function() {
'use strict';

    var directiveLessonsController = angular.module('directiveLessonsController', []);

    directiveLessonsController.controller('directive.lessons.Ctrl', ['$scope','$stateParams','$state','$filter','$modal','$timeout','$interval',
        function($scope,$stateParams,$state,$filter,$modal,$timeout,$interval) {
            $scope.someRandomObj         = {};
                        
            $scope.someRandomObj.message = "Hello Siva";
    }]);

}());


