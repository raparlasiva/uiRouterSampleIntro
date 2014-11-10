(function() {
'use strict';
    angular.module("uiRouterExample", [
        'ui.bootstrap',
        "ui.router",
        "ngSanitize",
        "namedViewModule",
        "gitHubServices"
    ])
    .constant('API_URL','https://api.github.com/users/')
    
    .run(['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state       = $state;
        $rootScope.$stateParams = $stateParams;
    
    }])
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
            .state('siva',{
                url:'/siva',
                templateUrl:'repo/partials/repoTable.html',
                data: {
                  userRepo:{
                        userRepoTblData : [],
                        //order :'name',
                        //reverse : false
                      //sortingOrderShow                : "name",
                      //reverseSort                     : "",
                      //previousSortingOrder            : "",
                  }  
                },
                controller:function($scope,$state,$stateParams,getGitHubSvc){
                    $scope.order   = 'name';
                    $scope.reverse = false;
                    $state.current.data.userRepo.userRepoTblData = getGitHubSvc.getSivaService.query();
                   
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
    
    .directive("sort", function() {
        return {
            restrict: 'A',
            transclude: true,
            template : 
              '<a ng-click="onClick()">'+
                '<span ng-transclude></span>'+ 
                '<i class="glyphicon" ng-class="{\'glyphicon-sort-by-alphabet\' : order === by && !reverse,  \'glyphicon-sort-by-alphabet-alt\' : order===by && reverse}"></i>'+
              '</a>',
            scope: {
              order: '=',
              by: '=',
              reverse : '='
            },
            link: function(scope, element, attrs) {
                scope.onClick = function () {
                    if( scope.order === scope.by ) 
                    {
                       scope.reverse = !scope.reverse 
                    } 
                    else 
                    {
                      scope.by = scope.order ;
                      scope.reverse = false; 
                    }
                }
            }
        }
    });

}());
