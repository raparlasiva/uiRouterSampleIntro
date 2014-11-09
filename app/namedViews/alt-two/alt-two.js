(function() {
'use strict';

var altTwoModule = angular.module('altTwoModule', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('namedView.main.alt-Two', {
            url:'/alt-Two',
            views: {
                'content@namedView': {
                  templateUrl: 'namedViews/alt-two/partials/alt-two.content.tpl.html'
                },
                
                'header@namedView': {
                  templateUrl: 'namedViews/alt-two/partials/alt-two.header.tpl.html'
                }
            }
        })
}]);
}());






