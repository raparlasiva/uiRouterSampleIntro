(function() {
'use strict';
    angular.module("uiRouterExample", [
        'ui.bootstrap',
        "ui.router",
        "ngSanitize",
        "namedViewModule",
        "gitHubServices",
        "directiveLessonModule"
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
            .state('directiveLesson',{
                url:'/directiveLesson',
                abstract:true,
                views:{
                    '@' : {
                        templateUrl: 'directiveLesson/partials/directiveLesson.html',
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
                        userRepoUrl     : [],
                        pagination      : "1",
                        numPerPage      : "5",
                        filteredUserRepoTblData : []
                        //order :'name',
                        //reverse : false
                      //sortingOrderShow                : "name",
                      //reverseSort                     : "",
                      //previousSortingOrder            : "",
                  }  
                },
                controller:function($scope,$state,$stateParams,getGitHubSvc,$http){
                    $scope.order   = 'name';
                    $scope.reverse = false;
                    $scope.begin   = 0;
                    $scope.end     = 0;
                    
                    $scope.beginEndFunction  = function(){
                        $scope.begin = (($state.current.data.userRepo.pagination - 1) * $state.current.data.userRepo.numPerPage);
                        console.info($scope.begin);
                        $scope.end   = $scope.begin*1 + $state.current.data.userRepo.numPerPage*1;
                        console.info($scope.end);
                    };
                    
                    $scope.$watch('$state.current.data.userRepo.pagination', function() {
                        $scope.begin = Math.ceil((($state.current.data.userRepo.pagination - 1) * $state.current.data.userRepo.numPerPage));
                        console.info($scope.begin);
                        $scope.end   = $scope.begin*1 + $state.current.data.userRepo.numPerPage*1;
                        
                        console.info($scope.end);
                        
                        $state.current.data.userRepo.filteredUserRepoTblData = $state.current.data.userRepo.userRepoTblData.slice($scope.begin, $scope.end);
                        
                        //$scope.end = $state.current.data.userRepo.userRepoTblData.length;
                        
                        if($scope.end > $state.current.data.userRepo.userRepoTblData.length) 
                        {
                            $scope.end = $state.current.data.userRepo.userRepoTblData.length;
                        }
                    });

                    $scope.$watch('$state.current.data.userRepo.numPerPage', function() {
                        $scope.beginEndFunction();
                        $state.current.data.userRepo.filteredUserRepoTblData = $state.current.data.userRepo.userRepoTblData.slice($scope.begin, $scope.end);
                    });
                    $scope.commonFilterConditions = function() {
    
                        //numPerPage
                        $scope.beginEndFunction();
                        if($state.current.data.userRepo.userRepoTblData) 
                        {
                            if($state.current.data.userRepo.userRepoTblData.length < $state.current.data.userRepo.numPerPage) {
                              $scope.end = $state.current.data.userRepo.userRepoTblData.length*1;
                            }
                            if($scope.end > $state.current.data.userRepo.userRepoTblData.length) {
                              $scope.end = $state.current.data.userRepo.userRepoTblData.length*1;
                            }
                            if($scope.end < $state.current.data.userRepo.userRepoTblData.length && $state.current.data.userRepo.userRepoTblData.length > $state.current.data.userRepo.numPerPage) {
                              $scope.end = $scope.begin + $state.current.data.userRepo.numPerPage*1;
                            }
                            $state.current.data.userRepo.filteredUserRepoTblData = $state.current.data.userRepo.userRepoTblData.slice($scope.begin, $scope.end);
                        }
                    };
                    
                    $state.current.data.userRepo.userRepoUrl = getGitHubSvc.getSivaRepoUrl.get(function(response){
                        console.info($state.current.data.userRepo.userRepoUrl.repos_url);
                        
                        $http.get($state.current.data.userRepo.userRepoUrl.repos_url).success(function(data, status, headers, config) {
                            // this callback will be called asynchronously
                            // when the response is available
                            console.info(data);
                            $state.current.data.userRepo.userRepoTblData = data;
                            $scope.commonFilterConditions();
                        }).
                        error(function(data, status, headers, config) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                        });
                    });
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
