(function() {
  angular.module('reddit')
  .controller('mainController', function($scope, Posts, Auth, user, commentOrderFilter, $window, $cookies) {

    $scope.posts = Posts.posts;

    $scope.user = user;
    $scope.currentUser = Auth.currentUser();

    $scope.commentOrder = commentOrderFilter;

    $scope.logout = function() {
      Auth.logout();
      $cookies.currentUser = null;
      $window.location.href='/';
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
    $scope.upvoteComment = function(post, comment) {
      comment.votes += 1;
      Posts.updatePost(post);
    };
    $scope.downvoteComment = function(post, comment) {
      comment.votes -= 1;
      Posts.updatePost(post);
    };
  });
})();
