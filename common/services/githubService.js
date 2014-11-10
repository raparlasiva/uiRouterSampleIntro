(function() {
'use strict';

var gitHubServices = angular.module('gitHubServices', ['ngResource']);

gitHubServices.factory('getGitHubSvc', ['$resource','API_URL','$state',

function($resource,API_URL,$state) {
    
    
    return {
        //getSivaService: $resource(API_URL+'raparlasiva/repos',{format:'json'}),
        getSivaRepoUrl: $resource(API_URL+'raparlasiva',{format:'json'}),
        
    };

}]);
}());

