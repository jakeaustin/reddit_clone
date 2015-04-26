(function() {
  angular.module('reddit')
  .controller('mainController', function($scope, Posts) {

    $scope.posts = Posts.posts;
    $scope.savePost = function(post) {
      Posts.savePost(post.title, post.desc, post.url);
      post.title = '';
      post.desc = '';
      post.url = '';
    };
    $scope.deletePost = function(post) {
      Posts.deletePost(post);
    };
    $scope.upvotePost = function(post) {
      post.votes += 1;
      Posts.updatePost(post);
    };
    $scope.downvotePost = function(post) {
      post.votes -= 1;
      Posts.updatePost(post);
    };
    $scope.addComment = function(post, comment) {
      Posts.addComment(post, comment);
      comment.text = '';
    };
  });
})();
