(function() {
'use strict';

var directiveLessonFourModule = angular.module('directiveLessonFourModule', [
    'lessonFourController',
    'andAtEqualScopeApp'
    
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('directiveLesson.main.lessonFour', {
            url:'/lessonFour',
            data:{
              pageTitle:"&,@,= Directive"  
            },
            views: {
                'content@directiveLesson' : {
                   
                    templateUrl: 'directiveLesson/lessonFour/partials/lessonFour.html',
                   
                    controller:'lesson.four.Ctrl'
                }
            }
        })
}]);
}());


