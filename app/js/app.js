angular.module('oclock', ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider
    .when('/', {
      controller:'LoginController as login',
      templateUrl:'views/login.html'
    })
    .when('/edit/:projectId', {
      controller:'ListController as list',
      templateUrl:'views/list.html'
    })
    .when('/new', {
      controller:'CurrentController as current',
      templateUrl:'views/current.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})

.controller('LoginController', function() {

})

.controller('ListController', function() {

})

.controller('CurrentController', function() {

})