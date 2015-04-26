(function() {
	var app = angular.module('reddit', ['ngRoute',
                            'firebase',
                            'ngCookies',
                            'LocalStorageModule'
                            ]);

  app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      controller: 'mainController',
      templateUrl:'/views/main.html'
    })
    .otherwise({
      redirectTo: '/'
    });
  });

})();
