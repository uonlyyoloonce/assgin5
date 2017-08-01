(function() {
"use strict";
var injectParams=['$q','MenuService'];

var menuNameDirective=function($q,MenuService)
{
   return{
     restrict:'A',
     require:'ngModel',
     link:function(scope,element,attrs,ngModel)
     {
           ngModel.$asyncValidators.mnumber = function (modelValue, viewValue) {
            var deferred=$q.defer(),
            currentValue=modelValue || viewValue;
            MenuService.CheckNumber(currentValue).then(function(res)
            {
                   
                 if(res) deferred.resolve();
                 else  deferred.reject();
                
            });
            
            return deferred.promise;
        };

     }

   };

}

menuNameDirective.$inject=injectParams;
angular.module('public')
.directive('menuName',menuNameDirective);









})();


