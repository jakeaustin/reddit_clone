(function() {
  angular.module('reddit')
    .controller('mainController', function($scope, $firebase, FIREBASE_URI) {
      var ref = new Firebase(FIREBASE_URI);
      var posts = $firebase(ref).$asArray();

      $scope.test = 'foo';
      $scope.posts = posts;
      // posts.$add({
      //   name: "Extra post",
      //   description: "another post and this",
      //   url: "https://www.reddit.com"
      // });
    });
})();
