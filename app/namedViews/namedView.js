(function() {
'use strict';

var namedViewModule = angular.module('namedViewModule', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('namedView.main', {
            url:'/main',
            views: {
                'header@sampleNamedViews' : {
                    templateUrl: '../common/header.tpl.html',
                },
                'sidebar@sampleNamedViews' : {
                    templateUrl: '../common/sidebar.tpl.html',
                },
                'content@sampleNamedViews' : {
                    templateUrl: '../common/content.tpl.html',
                },
                'footer@sampleNamedViews' : {
                    templateUrl: '../common/footer.tpl.html',
                }
            }
        })
        .state('namedView.main.home', {
            url:'/main',
           
        })
          
}]);
}());



