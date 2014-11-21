(function() {
'use strict';

var directiveLessonSixModule = angular.module('directiveLessonSixModule', [
    'lessonSixController',
    'transculdeReviewApp'
    
]);

directiveLessonSixModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('directiveLesson.main.lessonSix', {
            url:'/lessonSix',
            data:{
              pageTitle:"Transclude"  
            },
            views: {
                'content@directiveLesson' : {
                   
                    templateUrl: 'directiveLesson/lessonSix/partials/lessonSix.html',
                    //template: 'hey',
                    controller:'lesson.six.Ctrl'
                }
            }
        })
}]);
}());


