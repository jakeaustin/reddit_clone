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
        $scope.error = error.toString();
      });
    };
  });
})();
