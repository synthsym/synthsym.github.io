'use strict';
var App;

App = angular.module('app', ['ngResource', 'ngRoute', 'ngAnimate', 'app.controllers', 'app.directives', 'app.filters', 'app.services', 'ui.bootstrap']);

App.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, config) {
    $routeProvider.when('/', {
      templateUrl: '/partials/home.html',
      controller: 'HomeCtrl'
    }).when('/works', {
      templateUrl: '/partials/works.html',
      controller: 'WorksCtrl'
    }).when('/contrib', {
      templateUrl: '/partials/works.html',
      controller: 'ContribCtrl'
    }).when('/contact', {
      templateUrl: '/partials/contact.html',
      controller: 'ContactCtrl'
    }).otherwise({
      redirectTo: '/'
    });
    return $locationProvider.html5Mode(false);
  }
]);
;'use strict';
/* Controllers*/

angular.module('app.controllers', []).controller('AppCtrl', [
  '$scope', '$location', '$resource', '$rootScope', function($scope, $location, $resource, $rootScope) {
    return $scope;
  }
]).controller('HomeCtrl', [
  '$scope', function($scope) {
    return $scope.works = [
      {
        active: true,
        title: "Semaphore",
        desc: "Online Traffic-lighting system to gauge learning effectiveness",
        screenshot: "'/imgs/semaphore.png'"
      }
    ];
  }
]).controller('WorksCtrl', [
  '$scope', function($scope) {
    return $scope;
  }
]).controller('ContribCtrl', [
  '$scope', function($scope) {
    return $scope;
  }
]).controller('ContactCtrl', [
  '$scope', function($scope) {
    return $scope;
  }
]);
;'use strict';
/* Directives*/

angular.module('app.directives', ['app.services']).directive('navBar', [
  '$location', function($location) {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        return scope.$watch((function() {
          return $location.path();
        }), function(newVal, oldVal) {
          return $('li', elem).each(function(k, li) {
            var $a, $li, regexp;
            $li = angular.element(li);
            $a = angular.element($li.children()[0]);
            regexp = new RegExp(newVal + "$", ['i']);
            if (regexp.test($a.attr('href'))) {
              return $li.addClass('active');
            } else {
              return $li.removeClass('active');
            }
          });
        });
      }
    };
  }
]);
;'use strict';
/* Filters*/

angular.module('app.filters', []).filter('interpolate', [
  'version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }
]);
;'use strict';
/* Sevices*/

angular.module('app.services', []).factory('version', function() {
  return "0.1";
});
;
//# sourceMappingURL=app.js.map