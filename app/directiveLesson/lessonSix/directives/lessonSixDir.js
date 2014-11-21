(function() {
'use strict';

    var transculdeReviewApp = angular.module('transculdeReviewApp', []);
    
    transculdeReviewApp.directive("panel",['$state',function($state){
        console.info($state);
        return{
            restrict: "E",
            transclude: true,
            template: 'Basic Transclude Example:-'+
                    '<div class="well" >This is a well component'+
                    '<p ng-transclude></p>'+
                    '</div>'
            
        }
    }]);
    transculdeReviewApp.directive("wrapWith",['$state','$templateCache',function($state,$templateCache){
        
        return{
            transclude:'element',
            link:function(scope,element,attrs,ctrl,transclude){
                // original element is a comment-text element wrapWith: well 
                console.info(element);
                
                // attributes wrapWith: "well"
                console.info(attrs);
                
                // getting the template from the attributes (example :well, red)
                var template = $templateCache.get(attrs.wrapWith);
                
                console.info(template);
                
                
                //I'll actually have to create an Angular element out of this template 
                //so that we have an actual, let's call it a template element to work with.
                //Converts the template to an angular element
                var templateElement = angular.element(template);
                
                console.info(templateElement);
                
                console.info(element); // it is still a comment
                
                //I'm going to need the transclusion function 
                //to get the cloned elemen
                transclude(scope,function(clone){
                    console.info(clone);
                    element.after(templateElement.append(clone));
                })
                
                
            }
        }
    }]);
    
}());


