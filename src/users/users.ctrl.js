angular.module('app')
.controller('UsersCtrl', ['$scope', '$window', 'UsersSvc', function ($scope, $window, UsersSvc) {
  var self = this;
  UsersSvc.fetchStories().success(function (users) {
    console.log(users)
    $scope.users = users
    $window.document.title = "Users Faker"
  })
}])
