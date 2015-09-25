angular.module('directive2.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("../templates/directive2.html",
    "<hr><h2>Hello from Directive 2</h2>{{message2}}<hr>");
}]);
