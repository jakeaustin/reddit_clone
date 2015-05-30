(function() {
  angular.module('reddit')
  .factory('Posts', function($firebase, FIREBASE_URI, Auth) {
    var ref = new Firebase(FIREBASE_URI);
    var posts = $firebase(ref.child('posts')).$asArray();
    var user = Auth.currentUser();
    var id = user.$id;
    var user_posts = $firebase(ref.child('user_posts').child(id)).$asArray();
    var user_comments = $firebase(ref.child('user_comments').child(id)).$asArray();

    var postsObj = {};

    postsObj.posts = posts;
    postsObj.savePost = function(title, desc, url, username, uid) {
      return this.posts.$add({
        title: title,
        desc: desc,
        url: url,
        createdAt: new Date().toString(),
        author: username,
        authorUID: uid,
        votes: 0,
        comments: []
      });
    };
    postsObj.get = function(post) {
      var postRef = new Firebase(FIREBASE_URI + '/posts/' + post);
      var refSnapshot;
      postRef.once('value', function(data) {
        refSnapshot = data.val();
      });
      return refSnapshot;
    };
    postsObj.userPost = function(postRef) {
      user_posts.$add(postRef.key());
    };
    postsObj.updatePost = function(post) {
      this.posts.$save(post);
    };
    postsObj.deletePost = function(post) {
      this.posts.$remove(post);
    };
    postsObj.addComment = function(post, comment, username, uid) {
      var ref = new Firebase(FIREBASE_URI + '/posts/' + post.$id + '/comments');
      var sync = $firebase(ref);

      this.comments = sync.$asArray();
      return this.comments.$add({text: comment.text, author: username, authorUID: uid, postID: post.$id, createdAt: new Date().toString(), votes: 0});
    };
    postsObj.userComment = function(comment) {
      console.log('userComment comment = ' + comment);
      user_comments.$add({commentID: comment.key(), postID: comment.parent().parent().key()});
    };
    postsObj.getComment = function(post, comment) {
      var postRef = new Firebase(FIREBASE_URI + '/posts/' + post);
      var commentRef = postRef.child('comments').child(comment);
      var refSnapshot;
      commentRef.once('value', function(data) {
        refSnapshot = data.val();
      });
      return refSnapshot;
    };
    return postsObj;
  });
})();
