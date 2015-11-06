'use strict';

/**
 * @ngdoc function
 * @name switchGridApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the switchGridApp
 */
angular.module('switchGridApp', ['ngResource'])
  .factory('instagram', function($resource) {
    return {
      fetchPopular: function(callback) {
        var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK',{client_id: '8d0c4adf568146c7968559a9a7ee4d2f'},{fetch:{method:'JSONP'}
        });

        api.fetch(function(response) {
          callback(response.data);
        });
      }
    }
  })
  .controller('MainCtrl', function ($scope, instagram) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.layout = 'grid';
    $scope.pics = [];

    $scope.switchGrid = function() {
      instagram.fetchPopular(function(data) {
        $scope.pics = data;
      });
    };
  });
