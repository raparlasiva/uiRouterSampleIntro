(function() {
'use strict';

var directiveLessonFiveModule = angular.module('directiveLessonFiveModule', [
    'lessonFiveController',
    'isolateScopeReviewApp'
    
]);

directiveLessonFiveModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('directiveLesson.main.lessonFive', {
            url:'/lessonFive',
            data:{
              pageTitle:"Isolate Scope Review"  
            },
            views: {
                'content@directiveLesson' : {
                   
                    templateUrl: 'directiveLesson/lessonFive/partials/lessonFive.html',
                    //template: 'hey',
                    controller:'lesson.five.Ctrl'
                }
            }
        })
}]);
}());


