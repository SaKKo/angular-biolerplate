angular.module('app')
  .controller('AboutCtrl', ['$scope', '$window', function($scope, $window) {
    var self = this;
    $window.document.title = "About"
  }])
