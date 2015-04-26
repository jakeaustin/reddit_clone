(function() {
  angular.module('reddit')
  .controller('registerController', function($scope, $firebase, Posts, FIREBASE_URI, $window, localStorageService) {

    $scope.login = function(email, pwd) {
      var ref = new Firebase(FIREBASE_URI);

      ref.authWithPassword({
        email: email,
        password: pwd
      }, function(error, userData) {
        if(error) {
          console.log("Error logging in: " + error);
        }
        else {
          console.log("Login Successful: " + userData);
          localStorageService.set('authData', userData);
          $window.location.href= '/';
        }
      });
    };

    $scope.signup = function(email, pwd) {
      var ref = new Firebase(FIREBASE_URI);

      ref.createUser({
        email: email,
        password: pwd
      }, function(error, userData) {
        if(error) {
          console.log("Error creating user: " + error);
        }
        else {
          console.log("Successfully created user with uid: " + userData.uid);
          localStorageService.set('authData', userData);
          $window.location.href = '/';
        }
      });
    };
  });
})();
