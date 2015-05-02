(function() {
  angular.module('reddit')
  .controller('mainController', function($scope, Posts, Auth, user, commentOrderFilter, $window, localStorageService) {

    $scope.user = user;

    $scope.logout = Auth.logout;

    $scope.commentOrder = commentOrderFilter;

    $scope.posts = Posts.posts;
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
