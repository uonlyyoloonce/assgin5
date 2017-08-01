(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var SavedUser={};
  SavedUser.valid=false;
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  service.CheckNumber=function(v)
  {
  
     
   
      return $http.get(ApiPath + '/menu_items/'+v+'.json').then(function (response) {
        SavedUser.desc=response.data.description;
        SavedUser.title=response.data.name;
        return true;
    },function(response){
       return false;
    });
  }
  service.SaveUserInfo=function(v)
  {

    SavedUser.firstname=v.firstname;
    SavedUser.lastname=v.lastname;
    SavedUser.phone=v.phone;
    SavedUser.email=v.email;
    SavedUser.mnumber=v.mnumber;
    
    SavedUser.valid=true;
  }
  service.getRegUser=function()
  {
    if(SavedUser.valid)
     return SavedUser;
    else return 'undefined';
  }
}



})();
