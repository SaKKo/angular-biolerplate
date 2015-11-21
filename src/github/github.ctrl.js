angular.module('app')
.controller('GithubCtrl', ['$scope', 'GithubSvc', function ($scope, GithubSvc) {
  GithubSvc.fetchStories().success(function (users) {
    $scope.users = users
  }])
})
