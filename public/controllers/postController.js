(function() {
  angular.module('reddit')
  .controller('postController', function($scope, Posts, $window, localStorageService) {
    $scope.authData = localStorageService.get('authData');
    $scope.savePost = function(post) {
      Posts.savePost(post.title, post.desc, post.url);
      post.title = '';
      post.desc = '';
      post.url = '';
      $window.location.href='/';
      console.log($scope.authData);
    };
  });
})();
