(function() {
'use strict';

    var andAtEqualScopeApp = angular.module('andAtEqualScopeApp', []);
    
   andAtEqualScopeApp.directive("callPhone",['$state',function($state){
        // returning an object
        return{
            scope:{
                //dialHere:"&selectVal",
                dialHere:"&selectVal"
            },
            template:'<input type="text" ng-model="someValue">'+
                    '<button class="btn btn-info" ng-click="dialHere({message:someValue})"> call home</button>',
            link:function(scope,element,attrs){
                console.info(attrs);
            }
        }    
    }]);
    andAtEqualScopeApp.directive("drink",['$state',function($state){
        // returning an object
        return{
            
            scope:{
                // this is doing the same thing as the attrs.flavorview and assiging back to the isolate scope 
                flavor:"@flavorview",
                size:"@"
            },
            template:' {{size}} {{flavor}}',
//            link:function(scope,element,attrs){
//                //scope.flavor = "cherry";
//                console.info(attrs);
//                scope.flavor = attrs.flavorview;
//                scope.size = attrs.size;
//            }
           
        }    
    }]);

    andAtEqualScopeApp.directive("feelGood",['$state',function($state){
        // returning an object
        return{
            
            scope:{
               // two way data binding
                howYouFeelFrmDir:"=howYouFeel",//attributes should be referenced in lower case
                addMoreFromDir:"=addMore",//attributes should be referenced in lower case
                inGeneral:"=inGeneral"
            },
            template: '<input type="text" ng-model="howYouFeelFrmDir">'+
                       '<input type="text" ng-model="addMoreFromDir">'+
                       '<input type="text" ng-model="inGeneral">',
            link:function(scope,element,attrs){
                console.info(attrs);
                scope.inGeneral = scope.howYouFeelFrmDir +"  " +scope.addMoreFromDir;
                
            }
           
        }    
    }]);
    
}());


