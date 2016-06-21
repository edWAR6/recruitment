angular.module('oclock.controllers', [])

.controller('LoginController', function($authentication, $location, $scope) {
	var login = this;
	login.showSpinner = false;

	login.authenticate = function(){
		login.showSpinner = true;
		$authentication.login(login.user).then(function(){
			login.showSpinner = false;
			$location.path('/list');
		}, function(error){
			alert(error.data.error_description);
			console.log(error);
			login.showSpinner = false;
		});
	};

	login.authenticateExternalProvider = function(provider){
		var redirectURL = location.protocol + '//' + location.host + '/#/list';
		var externalProvider = 'http://api20160614053451.azurewebsites.net/api/Account/ExternalLogin?provider='+ provider +'&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Fapi20160614053451.azurewebsites.net%2F&state=Q8vSkaeh-CetGzCspZueLQtKjxT-vcTBBlf1SseQfUQ1';
		window.$windowScope = $scope;
		window.open(externalProvider, 'Authenticate Account', 'location=0,status=0,width=600,height=750');
	};
	
})

.controller('ListController', function($songs) {
	var list = this;

	list.showSpinner = true;
	$songs.getList().then(function(results){
		list.songs = results.data;
		list.showSpinner = false;
	}, function(error){
		alert(error.data.error_description);
		console.log(error);
		list.showSpinner = false;
	});
})

.controller('CurrentController', function() {

});