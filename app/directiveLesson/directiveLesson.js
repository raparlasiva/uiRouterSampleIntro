(function() {
'use strict';

var directiveLessonModule = angular.module('directiveLessonModule', [
    "directiveLessonOneModule",
    "directiveLessonTwoModule",
    "directiveLessonThreeModule",
    "directiveLessonFourModule"
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('directiveLesson.main', {
            url:'/main',
            data:{
                pageTitle:"Main"
            },
            views: {
                'header@directiveLesson' : {
                    templateUrl: '../common/templates/headerTempDir.tpl.html',
                },
                'sidebar@directiveLesson' : {
                    templateUrl: '../common/templates/sidebarTempDir.tpl.html',
                },
                'content@directiveLesson' : {
                    templateUrl: '../common/templates/content.tpl.html',
                },
                'footer@directiveLesson' : {
                    templateUrl: '../common/templates/footer.tpl.html',
                }
            }
        })
}]);
}());


