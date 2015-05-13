(function() {
  angular.module('reddit')
  .factory('Profile', function($firebase, FIREBASE_URI, Posts,$q) {
    var ref = new Firebase(FIREBASE_URI);

    var profile = {
      get: function(userId) {
        return $firebase(ref.child('profile').child(userId)).$asObject();
      },
      getPosts: function(userId) {
        var defer = $q.defer();
        $firebase(ref.child('user_posts').child(userId))
        .$asArray()
        .$loaded()
        .then(function(data) {
          var userPosts = {};
          for(var i = 0; i<data.length; i++) {
            var value = data[i].$value;
            userPosts[value] = Posts.get(value);
          }
          defer.resolve(userPosts);
        });
        return defer.promise;
      },
      getPostComments: function(userId) {

      }
    };
    return profile;
  });
})();
