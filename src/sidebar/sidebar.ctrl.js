angular.module('app').controller('SidebarCtrl', ['$scope', function($scope) {

}])
.directive('sidebar', function() {
  return {
    templateUrl: 'src/sidebar/sidebar.template.html'
  };
});
