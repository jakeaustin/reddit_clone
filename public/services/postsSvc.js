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
        votes: 0,
        comments: []
      });
    };
    postsObj.updatePost = function(post) {
      this.posts.$save(post);
    };
    postsObj.deletePost = function(post) {
      this.posts.$remove(post);
    };
    postsObj.addComment = function(post, comment) {
      var ref = new Firebase(FIREBASE_URI + '/' + post.$id + '/comments');
      var sync = $firebase(ref);

      this.comments = sync.$asArray();
      this.comments.$add({text: comment.text, votes: 0});
    };

    return postsObj;
  });
})();
