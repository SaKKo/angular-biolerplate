angular.module('app')
.factory('GithubSvc', ['$http',function ($http) {
  return {
    fetchStories: function () {
      return $http.get('https://api.github.com/users')
    }
  }
}])
