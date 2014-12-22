(function() {
'use strict';

var expenseModule = angular.module('expenseModule', [
    "expensesController"
]);

expenseModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('expense', {
            url:'/expense',
            abstract:true,
            data:{
                pageTitle:"Expense"
            },
            templateUrl:'expense/partials/expense.html',
            //controller:'expenses.Ctrl'
        })
        .state('expense.main', {
            url:'/main',
            data:{
                pageTitle:"Expense"
            },
            //templateUrl:'expense/partials/expense.html',
            controller:'expenses.Ctrl'
        })
}]);
}());





