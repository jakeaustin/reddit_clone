(function() {
  angular.module('reddit')
  .factory('Auth', function ($firebaseAuth, FIREBASE_URI) {
    var ref = new Firebase(FIREBASE_URI);
    var auth = $firebaseAuth(ref);

    var Auth = {
      register: function (user) {
        console.log("create user");
        return auth.$createUser(user.email, user.password);
      },
      //getting an error in the .then, but it appears to be working...
      login: function (user) {
        console.log('login');
        return auth.$authWithPassword({
                                      email:user.email,
                                      password:user.password
                                    }).then(function(error, userData) {
                                      if(error) {
                                        console.log("error logging in :" + userData);
                                      }
                                      else {
                                        console.log("log in successful");
                                      }
                                  });
      },
      logout: function () {
        auth.$unauth();
      },
      resolveUser: function() {
        return auth.$getAuth();
      },
    };
    return Auth;
  });
})();
