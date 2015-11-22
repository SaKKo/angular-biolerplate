var app=angular.module("app",["ngMaterial","ngRoute"]);angular.module("app").config(["$routeProvider","$locationProvider",function(t){t.when("/home",{templateUrl:"src/home/home.template.html",controller:"HomeCtrl"}).when("/about",{templateUrl:"src/about/about.template.html",controller:"AboutCtrl"}).when("/github",{templateUrl:"src/github/github.template.html",controller:"GithubCtrl"}).otherwise({redirectTo:"/home"})}]),angular.module("app").controller("AboutCtrl",["$scope",function(){}]),angular.module("app").controller("ApplicationCtrl",["$scope","$mdSidenav",function(t,e){var o=this;o.title="Created by SaKKo",o.toggleSidenav=function(t){e(t).toggle()}}]),angular.module("app").controller("GithubCtrl",["$scope","GithubSvc",function(t,e){e.fetchStories().success(function(e){console.log(e),t.users=e})}]),angular.module("app").factory("GithubSvc",["$http",function(t){return{fetchStories:function(){var e=t.get("https://api.github.com/users");return e.then(function(t){console.log(t)}),e}}}]),angular.module("app").controller("HomeCtrl",["$scope",function(){}]),angular.module("app").controller("SidebarCtrl",["$scope",function(){}]).directive("sidebar",function(){return{templateUrl:"src/sidebar/sidebar.template.html"}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInJvdXRlcy5qcyIsImFib3V0L2Fib3V0LmN0cmwuanMiLCJhcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5jdHJsLmpzIiwiZ2l0aHViL2dpdGh1Yi5jdHJsLmpzIiwiZ2l0aHViL2dpdGh1Yi5zdmMuanMiLCJob21lL2hvbWUuY3RybC5qcyIsInNpZGViYXIvc2lkZWJhci5jdHJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUEsS0FBQSxRQUFBLE9BQUEsT0FBQSxhQUFBLFdDQUEsU0FBQSxPQUFBLE9BQUEsUUFBQSxpQkFBQSxvQkFBQSxTQUFBLEdBQ0EsRUFDQSxLQUFBLFNBQ0EsWUFBQSw4QkFDQSxXQUFBLGFBQ0EsS0FBQSxVQUNBLFlBQUEsZ0NBQ0EsV0FBQSxjQUNBLEtBQUEsV0FDQSxZQUFBLGtDQUNBLFdBQUEsZUFFQSxXQUFBLFdBQUEsYUNaQSxRQUFBLE9BQUEsT0FDQSxXQUFBLGFBQUEsU0FBQSxlQ0RBLFFBQUEsT0FBQSxPQUNBLFdBQUEsbUJBQUEsU0FBQSxhQUFBLFNBQUEsRUFBQSxHQUNBLEdBQUEsR0FBQSxJQUNBLEdBQUEsTUFBQSxtQkFDQSxFQUFBLGNBQUEsU0FBQSxHQUNBLEVBQUEsR0FBQSxhQ0xBLFFBQUEsT0FBQSxPQUNBLFdBQUEsY0FBQSxTQUFBLFlBQUEsU0FBQSxFQUFBLEdBRUEsRUFBQSxlQUFBLFFBQUEsU0FBQSxHQUNBLFFBQUEsSUFBQSxHQUNBLEVBQUEsTUFBQSxPQ0xBLFFBQUEsT0FBQSxPQUNBLFFBQUEsYUFBQSxRQUFBLFNBQUEsR0FDQSxPQUNBLGFBQUEsV0FDQSxHQUFBLEdBQUEsRUFBQSxJQUFBLCtCQUlBLE9BSEEsR0FBQSxLQUFBLFNBQUEsR0FDQSxRQUFBLElBQUEsS0FFQSxPQ1JBLFFBQUEsT0FBQSxPQUNBLFdBQUEsWUFBQSxTQUFBLGVDREEsUUFBQSxPQUFBLE9BQUEsV0FBQSxlQUFBLFNBQUEsZUFHQSxVQUFBLFVBQUEsV0FDQSxPQUNBLFlBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nTWF0ZXJpYWwnLCAnbmdSb3V0ZSddKVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbmZpZyhmdW5jdGlvbigkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcbiAgJHJvdXRlUHJvdmlkZXJcbiAgICAud2hlbignL2hvbWUnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9ob21lL2hvbWUudGVtcGxhdGUuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnSG9tZUN0cmwnXG4gICAgfSkud2hlbignL2Fib3V0Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvYWJvdXQvYWJvdXQudGVtcGxhdGUuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQWJvdXRDdHJsJ1xuICAgIH0pLndoZW4oJy9naXRodWInLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9naXRodWIvZ2l0aHViLnRlbXBsYXRlLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0dpdGh1YkN0cmwnXG4gICAgfSlcbiAgICAub3RoZXJ3aXNlKHtyZWRpcmVjdFRvOicvaG9tZSd9KTtcbn0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignQWJvdXRDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbn1dKVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignQXBwbGljYXRpb25DdHJsJywgWyckc2NvcGUnLCAnJG1kU2lkZW5hdicsIGZ1bmN0aW9uICgkc2NvcGUsJG1kU2lkZW5hdikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYudGl0bGUgPSBcIkNyZWF0ZWQgYnkgU2FLS29cIlxuICBzZWxmLnRvZ2dsZVNpZGVuYXYgPSBmdW5jdGlvbihtZW51SWQpIHtcbiAgICAkbWRTaWRlbmF2KG1lbnVJZCkudG9nZ2xlKCk7XG4gIH1cbn1dKVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignR2l0aHViQ3RybCcsIFsnJHNjb3BlJywgJ0dpdGh1YlN2YycsIGZ1bmN0aW9uICgkc2NvcGUsIEdpdGh1YlN2Yykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIEdpdGh1YlN2Yy5mZXRjaFN0b3JpZXMoKS5zdWNjZXNzKGZ1bmN0aW9uICh1c2Vycykge1xuICAgIGNvbnNvbGUubG9nKHVzZXJzKVxuICAgICRzY29wZS51c2VycyA9IHVzZXJzXG4gIH0pXG59XSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmZhY3RvcnkoJ0dpdGh1YlN2YycsIFsnJGh0dHAnLGZ1bmN0aW9uICgkaHR0cCkge1xuICByZXR1cm4ge1xuICAgIGZldGNoU3RvcmllczogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHggPSAkaHR0cC5nZXQoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMnKTtcbiAgICAgIHgudGhlbihmdW5jdGlvbihqc29uKXtcbiAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9XG59XSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0hvbWVDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbn1dKVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ1NpZGViYXJDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxufV0pXG4uZGlyZWN0aXZlKCdzaWRlYmFyJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6ICdzcmMvc2lkZWJhci9zaWRlYmFyLnRlbXBsYXRlLmh0bWwnXG4gIH07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==