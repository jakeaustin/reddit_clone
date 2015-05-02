(function() {
  angular.module('reddit')
  .controller('registerController', function($scope, Auth, user, $window) {
    if (user) {
      $window.location.href = '/';
    }

    $scope.register = function() {
      Auth.register($scope.user).then(function() {
        return Auth.login($scope.user).then(function() {
          $window.location.href='/';
        });
      }, function(error) {
        $scope.signupError = error.toString();
      });
    };

    $scope.login = function() {
      Auth.login($scope.returnUser).then(function() {
        $window.location.href='/';
      }, function(error) {
        $scope.loginError = error.toString();
      });
    };
  });
})();
