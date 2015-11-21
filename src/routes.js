angular.module('app').config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'src/home/home.html',
      controller: 'HomeCtrl'
    }).when('/about', {
      templateUrl: 'src/about/about.html',
      controller: 'AboutCtrl'
    }).when('/github', {
      templateUrl: 'src/github/github.html',
      controller: 'GithubCtrl'
    })
    .otherwise({redirectTo:'/home'});
});
