(function() {
  var app = angular.module('reddit', ['ngRoute',
                          'firebase',
                          'ngCookies',
                          'LocalStorageModule'
                          ]);

  app.constant('FIREBASE_URI', 'https://jaustin-reddit.firebaseio.com/');

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
