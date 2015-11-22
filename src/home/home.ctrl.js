angular.module('app')
.controller('HomeCtrl', ['$scope','$window', function ($scope,$window) {
  var self = this;
  $window.document.title = "Home"
}])
