(function() {
'use strict';

var namedViewModule = angular.module('namedViewModule', [
    "altOneModule",
    "altTwoModule",
    "altThreeModule",
    "blink"
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('namedView.main', {
            url:'/main',
            views: {
                'header@namedView' : {
                    templateUrl: '../common/templates/header.tpl.html',
                },
                'sidebar@namedView' : {
                    templateUrl: '../common/templates/sidebar.tpl.html',
                },
                'content@namedView' : {
                    templateUrl: '../common/templates/content.tpl.html',
                },
                'footer@namedView' : {
                    templateUrl: '../common/templates/footer.tpl.html',
                }
            }
        })
}]);
}());



