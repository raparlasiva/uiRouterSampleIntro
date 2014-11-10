(function() {
'use strict';

var gitHubServices = angular.module('gitHubServices', ['ngResource']);

gitHubServices.factory('getGitHubSvc', ['$resource','API_URL',
function($resource,API_URL) {
    return {
        getSivaService: $resource(API_URL+'raparlasiva/repos',{format:'json'}),
    };

}]);
}());

