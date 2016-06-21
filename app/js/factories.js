angular.module('oclock.factories', [])

.value('API', 'http://api20160614053451.azurewebsites.net')

.factory('$authentication', function($http, API, localStorageService){
	var authentication = {};
	
	authentication.login = function(user){
		var data = "grant_type=password&username=" + user.email + "&password=" + user.password;

		return $http.post(API + '/token', data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).then(function(results){
			localStorageService.set('authorizationData', { token: results.data.access_token, userName: user.email });
		});
	};

	return authentication;
})

.factory('authInterceptorService', function ($q, $location, localStorageService) {
 
    var authInterceptorServiceFactory = {};
 
    authInterceptorServiceFactory.request = function (config) {
 
        config.headers = config.headers || {};
 
        var authorizationData = localStorageService.get('authorizationData');
        if (authorizationData && config.url.indexOf('token')<0) {
            config.headers.Authorization = 'Bearer ' + authorizationData.token;
        }
 
        return config;
    }
 
    authInterceptorServiceFactory.responseError = function (rejection) {
        if (rejection.status === 401) {
            $location.path('/');
        }
        return $q.reject(rejection);
    }
 
    return authInterceptorServiceFactory;
})

.factory('$songs', function($http, API, localStorageService){
	var songs = {};

	songs.getList = function(){
		var authorizationData = localStorageService.get('authorizationData');
		return $http.get(API + '/api/Songs')
	};

	return songs;
});
