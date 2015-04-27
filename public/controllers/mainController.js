(function() {
  angular.module('reddit')
  .controller('mainController', function($scope, Posts, $window, localStorageService) {

    $scope.authData = localStorageService.get('authData');

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
    $scope.logout = function() {
      localStorageService.remove('authData');
      console.log("Logout successful!");
      $window.location.href = '/#/register';
    };
  });
})();
