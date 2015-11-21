angular.module('app')
.factory('GithubSvc', ['$http',function ($http) {
  return {
    fetchStories: function () {
      var x = $http.get('https://api.github.com/users');
      x.then(function(json){
        console.log(json);
      })
      return x;
    }
  }
}])
