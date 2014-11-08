(function() {
'use strict';
    angular.module("uiRouterExample", [
        'ui.bootstrap',
        "ui.router",
        "ngSanitize"
    ])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',

        })
        .state('list', {
            url: '/list',
            templateUrl: 'partials/list.html',
            controller: 'ListCtrl'
        })
        .state('list.item', {
            url: '/:item',
            templateUrl: 'partials/list.item.html',
            controller: function($scope, $stateParams) {
                console.info($stateParams);
                $scope.item = $stateParams.item;
            }
        })
    })

    .controller("ListCtrl", function($scope) {
        $scope.shoppingList = [];
        $scope.shoppingList = [
          {name: 'milk'},
          {name: 'eggs'},
          {name: 'bread'},
          {name: 'cheese'},
          {name: 'ham'}
        ];

        $scope.selectItem = function(selectedItem) {
            
            angular.forEach($scope.shoppingList,function(item,index) {
                item.selected= false;
                if(selectedItem === item) 
                {
                    selectedItem.selected = true;
                    console.info(selectedItem);
                }
            });
        };
    })

}());
