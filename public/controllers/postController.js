(function() {
  angular.module('reddit')
  .controller('postController', function($scope, Posts, Auth, user, $window, localStorageService) {
    $scope.user = user;
    $scope.savePost = function(post) {
      Posts.savePost(post.title, post.desc, post.url);
      post.title = '';
      post.desc = '';
      post.url = '';
      $window.location.href='/';
    };
  });
})();
