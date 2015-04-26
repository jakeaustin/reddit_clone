(function() {
  angular.module('reddit')
    .controller('mainController', function($scope, $firebase, FIREBASE_URI) {
      var ref = new Firebase(FIREBASE_URI);
      var posts = $firebase(ref).$asArray();

      $scope.test = 'foo';
      $scope.posts = posts;
      $scope.addPost = function(post) {
        posts.$add({
          name: post.name,
          description: post.desc,
          url: post.url
        });
      };
    });
})();
