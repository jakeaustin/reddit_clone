(function() {
  angular.module('reddit')
  .controller('mainController', function($scope, Posts) {

    $scope.posts = Posts.posts;
    $scope.addPost = function(post) {
      Posts.savePost(post.title, post.desc, post.url);
      post.title = '';
      post.desc = '';
      post.url = '';
    };
  });
})();
