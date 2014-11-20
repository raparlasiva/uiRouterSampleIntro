(function() {
'use strict';

var directiveLessonTwoModule = angular.module('directiveLessonTwoModule', [
    'lessonTwoController',
    "basicBehaviorApp"
    
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('directiveLesson.main.lessonTwo', {
            url:'/lessonTwo',
            views: {
                'content@directiveLesson' : {
                    //template: 'hello',
                    templateUrl: 'directiveLesson/lessonTwo/partials/lessonTwo.html',
                    controller:'lesson.two.Ctrl'
                }
            }
        })
}]);
}());


