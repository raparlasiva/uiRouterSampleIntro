(function() {
'use strict';

var altThreeModule = angular.module('altThreeModule', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('namedView.main.alt-Three', {
            url:'/alt-Three',
            views: {
                'content@namedView': {
                  templateUrl: 'namedViews/alt-three/partials/alt-three.content.tpl.html'
                },
                
                'header@namedView': {
                  templateUrl: 'namedViews/alt-three/partials/alt-three.header.tpl.html'
                },
                'one@namedView.main.alt-Three': {
                    template: '<div class="alert-info">Sub One</div>'
                },
                'two@namedView.main.alt-Three': {
                    template: '<div class="alert-success">Sub Two</div>'
                }
            }
        })
}]);
}());






