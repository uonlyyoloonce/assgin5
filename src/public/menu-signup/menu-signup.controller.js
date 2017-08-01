(function () {
"use strict";

angular.module('public')
.controller('MenuSignupController', MenuSignupController);

MenuSignupController.$inject = ['MenuService'];
function MenuSignupController(MenuService) {
  var reg = this;
   reg.bnumber=false;
   reg.clicked=false;
   reg.CheckNumber=function(v)
   {
    MenuService.CheckNumber(v).then(function(d){

     reg.bnumber= d;
   
    });
  
   };
   reg.submit=function(){
      reg.clicked=true;
      alert(reg.user.mnumber);
      MenuService.SaveUserInfo(reg.user);
   }
   
    
};

})();
