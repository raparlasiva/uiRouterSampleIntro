(function() {
'use strict';

var directiveLessonThreeModule = angular.module('directiveLessonThreeModule', [
    'lessonThreeController',
    'isolateScopeApp'
    
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('directiveLesson.main.lessonThree', {
            url:'/lessonThree',
            views: {
                'content@directiveLesson' : {
                   
                    templateUrl: 'directiveLesson/lessonThree/partials/lessonThree.html',
                    //template: 'keek',
                    controller:'lesson.three.Ctrl'
                }
            }
        })
}]);
}());


