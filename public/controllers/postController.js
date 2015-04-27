(function() {
  angular.module('reddit')
  .controller('postController', function($scope, Posts, $window) {
    $scope.savePost = function(post) {
      Posts.savePost(post.title, post.desc, post.url);
      post.title = '';
      post.desc = '';
      post.url = '';
      $window.location.href='/';
    };
  });
})();
