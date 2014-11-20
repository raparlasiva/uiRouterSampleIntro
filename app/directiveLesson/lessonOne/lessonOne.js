(function() {
'use strict';

var directiveLessonOneModule = angular.module('directiveLessonOneModule', [
    'superhero',
    'directiveLessonsController'
    
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('directiveLesson.main.lessonOne', {
            url:'/lessonOne',
            views: {
                'content@directiveLesson' : {
                    templateUrl: 'directiveLesson/lessonOne/partials/lessonOne.html',
                    controller:'directive.lessons.Ctrl'
                }
            }
        })
}]);
}());


