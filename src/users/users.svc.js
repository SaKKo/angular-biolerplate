angular.module('app')
.factory('UsersSvc', ['$http',function ($http) {
  return {
    fetchStories: function () {
      var x = $http.get('http://127.0.0.1:8080/faker/users.json');
      x.then(function(json){
        console.log(json);
      })
      return x;
    }
  }
}])
