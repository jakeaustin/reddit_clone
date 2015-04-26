(function() {
  angular.module('reddit')
    .controller('mainController', function($scope, $firebase, FIREBASE_URI) {
      var ref = new Firebase(FIREBASE_URI);
      var posts = $firebase(ref).$asArray();

      $scope.test = 'foo';
      $scope.posts = posts;
      posts.$add({
        name: "TIFU by making reddit",
        description: "^title....and this whole site",
        url: "https://www.reddit.com"
      });
    });
})();
