(function() {
'use strict';

    var expensesController = angular.module('expensesController', []);

    expensesController.controller('expenses.Ctrl', ['$scope','$stateParams','$state','$filter','$modal','$timeout','$interval',
        function($scope,$stateParams,$state,$filter,$modal,$timeout,$interval) {
            console.info("inside Expense ctrl");
    }]);

}());
