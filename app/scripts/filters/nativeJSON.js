'use strict;'

var defaultInput = "Enter JSON to the left";
var ErrorInput = "SyntaxError";

var prettify = function(json) {
  return _.reduce(json, function(memo, value, key) {
  }, "{\n") + "\n}";
};
angular.module('angularTestApp').filter("nativeJSON",  function() {
  return function(input) {
    if (!input) return defaultInput;
    var json = {};
    try {
      json = angular.fromJson(input);
    } catch(err) {
      return ErrorInput;
    }
    return prettify(json);

  };
});
