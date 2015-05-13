(function() {
  angular.module('reddit')
  .factory('Profile', function($firebase, FIREBASE_URI) {
    var ref = new Firebase(FIREBASE_URI);

    var profile = {
      get: function(userId) {
        return $firebase(ref.child('profile').child(userId)).$asObject();
      },
      getPosts: function(userId) {

      },
      getPostComments: function(userId) {

      }
    };
    return profile;
  });
})();
