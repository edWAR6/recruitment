angular.module('oclock', ['ngRoute', 'LocalStorageModule', 'angularSpinner', 'oclock.controllers', 'oclock.factories'])

.config(function($httpProvider, $routeProvider) {
  $httpProvider.interceptors.push('authInterceptorService');

	$routeProvider
    .when('/', {
      controller:'LoginController as login',
      templateUrl:'views/login.html'
    })
    .when('/list', {
      controller:'ListController as list',
      templateUrl:'views/list.html'
    })
    .when('/current/:songId', {
      controller:'CurrentController as current',
      templateUrl:'views/current.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})

