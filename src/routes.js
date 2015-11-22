angular.module('app').config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'src/home/home.template.html',
      controller: 'HomeCtrl'
    }).when('/about', {
      templateUrl: 'src/about/about.template.html',
      controller: 'AboutCtrl'
    }).when('/users', {
      templateUrl: 'src/users/users.template.html',
      controller: 'UsersCtrl'
    })
    .otherwise({redirectTo:'/home'});
});
