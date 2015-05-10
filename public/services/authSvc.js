(function() {
  angular.module('reddit')
  .factory('Auth', function ($firebase, $firebaseAuth, FIREBASE_URI) {
    var ref = new Firebase(FIREBASE_URI);
    var auth = $firebaseAuth(ref);

    var Auth = {
      register: function (user) {
        return auth.$createUser(user.email, user.password);
      },
      createProfile: function(user) {
        var profile = {
          username: user.username,
          joined: new Date().toString()
        };
        var profileRef = $firebase(ref.child('profile'));
        console.log(user.uid);
        return profileRef.$set(user.uid, profile);
      },
      login: function (user) {
        return auth.$authWithPassword({
          email:user.email,
          password:user.password,
        }, function(error, userData) {
          if(error) {
            console.log("error logging in :" + error);
          }
          else {
            console.log("log in successful");
          }
        });
      },
      logout: function () {
        return auth.$unauth();
      },
      resolveUser: function() {
        return auth.$getAuth();
      },
    };
    return Auth;
  });
})();
