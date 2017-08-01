(function() {
"use strict";
angular.module('public')
.directive('cusValidator', ['MenuService','$q',function(MenuService,$q) {
    return {
        // restrict to an attribute type.
        restrict: 'A',
        
        // element must have ng-model attribute.
        require: 'ngModel',
        
        // scope = the parent scope
        // elem = the element the directive is on
        // attr = a dictionary of attributes on the element
        // ctrl = the controller for ngModel.
        link: function(scope, elem, attr, ctrl) {
            var deferred = $q.defer()
            ctrl.$asyncValidators.cusValidator = function(value) {
                MenuService.CheckNumber(value).then(function(res){
                  if(res) deferred.resolve();
                  else  deferred.reject()

                });
               return deferred.promise;
            };
  
            
        
        }
    };
}]);



})();
