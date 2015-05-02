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
      templateUrl:'/views/main.html',
      resolve: {
        user: function(Auth) {
          return Auth.resolveUser();
        }
      }
    })
    .when('/register', {
      controller: 'registerController',
      templateUrl: '/views/register.html',
      resolve: {
        user: function(Auth) {
          return Auth.resolveUser();
        }
      }
    })
    .when('/post', {
      controller: 'postController',
      templateUrl: '/views/newPost.html',
      resolve: {
        user: function(Auth) {
          return Auth.resolveUser();
        }
      }
    })
    .otherwise({
      redirectTo: '/'
    });
  });

})();
