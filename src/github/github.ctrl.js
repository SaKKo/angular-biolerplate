angular.module('app')
.controller('GithubCtrl', ['$scope', 'GithubSvc', function ($scope, GithubSvc) {
  GithubSvc.fetchStories().success(function (users) {
    console.log(users)
    $scope.users = users
  })
}])
