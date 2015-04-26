(function() {
  angular.module('reddit')
  .factory('Posts', function($firebase, FIREBASE_URI) {
    var ref = new Firebase(FIREBASE_URI);
    var posts = $firebase(ref).$asArray();

    var postsObj = {};

    postsObj.posts = posts;
    postsObj.savePost = function(title, desc, url) {
      this.posts.$add({
        title: title,
        description: desc,
        url: url
      });
    };

    return postsObj;
  });
})();
