angular.module('app')
.controller('SidebarCtrl', ['$scope', '$mdSidenav', function ($scope,$mdSidenav) {
  var self = this;
  self.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
}])
