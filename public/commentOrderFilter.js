(function() {
  angular.module('reddit').filter('commentOrder', function() {
    return function(comments) {
      var ordered = [];
      angular.forEach(comments, function(comment) {
        ordered.push(comment);
      });
      ordered.sort(function(a, b) {
        return (a.votes > b.votes ? -1 : 1);
      });
      return ordered;
    };
  });
})();
