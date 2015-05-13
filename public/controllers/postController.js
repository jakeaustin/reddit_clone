(function() {
  angular.module('reddit')
  .controller('postController', function($scope, Posts, Auth, user, $window) {

    $scope.signedIn = user;
    $scope.user = Auth.currentUser();

    $scope.savePost = function(post) {
      return Posts.savePost(post.title, post.desc, post.url, $scope.user.username, $scope.user.$id)
      .then(function(postRef) {
        console.log('savePost postRef = ' + postRef);
        Posts.userPost($scope.user.uid, postRef);
        post.title = '';
        post.desc = '';
        post.url = '';
        $window.location.href='/';
      });
    };
  });
})();
