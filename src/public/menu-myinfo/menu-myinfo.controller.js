(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService','ApiPath'];
function MyInfoController(MenuService,ApiPath) {
  var info = this;
   info.user=MenuService.getRegUser();
   
   info.basePath = ApiPath;
 
 
};

})();
