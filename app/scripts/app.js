'use strict';

/**
 * @ngdoc overview
 * @name switchGridApp
 * @description
 * # switchGridApp
 *
 * Main module of the application.
 */
angular
  .module('switchGridApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
