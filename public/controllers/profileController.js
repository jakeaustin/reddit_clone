(function() {
  angular.module('reddit')
  .controller('profileController', function($scope, $routeParams, Profile) {
    var uid = $routeParams.userId;
    $scope.profile = Profile.get(uid);
    Profile.getPosts(uid).then(function(posts) {
      $scope.posts = posts;
    });
  });
})();
