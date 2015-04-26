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
        desc: desc,
        url: url,
        votes: 0
      });
    };
    postsObj.updatePost = function(post) {
      this.posts.$save(post);
    };
    postsObj.deletePost = function(post) {
      var deletedPost = new Firebase(FIREBASE_URI + '/' + post.$id);
      deletedPost.remove();
    };

    return postsObj;
  });
})();
