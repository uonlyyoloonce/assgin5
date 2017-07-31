(function () {
"use strict";

angular.module('public')
.controller('MenuSignupController', MenuSignupController);

MenuSignupController.$inject = ['MenuService'];
function MenuSignupController(MenuService) {
  var reg = this;
   reg.bnumber=false;
   reg.CheckNumber=function(v)
   {
    MenuService.CheckNumber(v).then(function(d){

     reg.bnumber= d;
   
    });
  
   }
 
    
};

})();
