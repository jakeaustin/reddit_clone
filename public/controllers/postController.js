(function() {
  angular.module('reddit')
  .controller('postController', function($scope, Posts, Auth, user, $window) {
    $scope.user = user;
    $scope.user = Auth.currentUser();

    $scope.savePost = function(post) {
      Posts.savePost(post.title, post.desc, post.url, $scope.user.username);
      post.title = '';
      post.desc = '';
      post.url = '';
      $window.location.href='/';
    };
  });
})();
