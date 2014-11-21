(function(){
    'use strict';
    var newFeature = angular.module("newFeatureModuleApp",[]);
    
    newFeature.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('newFeatures', {
                url:"/newFeatures",
                //abstract:true,
                data:{
                    pageTitle:" 1.3 New",
                    newFeature:{

                    }  
                },
                views:{
                    '@' : {
                        templateUrl: 'newFeatures/partials/newFeature.html',
                        //template: '<p>Hi there</p>',
                        controller:function($scope){
                           
                        }
                    }
                }
            })
            .state('newFeatures.statelessDemo', {
                url:"/main",
                views:{
                    '@' : {
                        templateUrl:'newFeatures/stateLessFilters/partials/stateLess.html',
                        controller:function($scope){
                            console.log("we are here inside new feature");
                        }
                      
                    } 
                },
                
            })
    }]);
}());



