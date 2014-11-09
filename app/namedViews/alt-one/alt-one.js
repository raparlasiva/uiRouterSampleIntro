(function() {
'use strict';

var altOneModule = angular.module('altOneModule', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('namedView.main.alt-One', {
            url:'/alt-One',
            views: {
                'content@namedView' : {
                    templateUrl: 'namedViews/alt-one/partials/alt-one.content.tpl.html',
                }
            }
        })
}]);
}());






