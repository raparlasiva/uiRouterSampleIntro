(function() {
'use strict';
    angular.module("uiRouterExample", [
        'ui.bootstrap',
        "ui.router",
        "ngSanitize",
        "namedViewModule"
    ])

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
                
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'basic/partials/home.html',

            })
            .state('list', {
                url: '/list',
                templateUrl: 'basic/partials/list.html',
                controller: 'ListCtrl'
            })
            .state('namedView',{
                url:'/namedView',
                abstract:true,
                views: {
                    '@' : {
                        templateUrl: 'namedViews/partials/namedView.html',
                        //controller: 'namedView.Ctrl'
                    }
                }
                
            })
            .state('list.item', {
                url: '/:item',
                templateUrl: 'basic/partials/list.item.html',
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
