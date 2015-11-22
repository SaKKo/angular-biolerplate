angular.module('app')
.controller('ApplicationCtrl', ['$scope', '$mdSidenav', function ($scope,$mdSidenav) {
  var self = this;
  self.title = "Created by SaKKo"
  self.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  }
}])
