angular.module('app')
.controller('UsersCtrl', ['$scope', 'UsersSvc', function ($scope, UsersSvc) {
  var self = this;
  UsersSvc.fetchStories().success(function (users) {
    console.log(users)
    $scope.users = users
  })
}])
