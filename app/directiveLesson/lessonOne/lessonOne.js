(function() {
'use strict';

var directiveLessonOneModule = angular.module('directiveLessonOneModule', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('directiveLesson.main.lessonOne', {
            url:'/lessonOne',
            views: {
                'content@directiveLesson' : {
                    template: '<p>Directive Lesson One goes here..</p>',
                }
            }
        })
}]);
}());


