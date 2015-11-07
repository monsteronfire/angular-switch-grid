'use strict';

/**
 * @ngdoc function
 * @name switchGridApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the switchGridApp
 */
angular.module('switchGridApp', ['ngResource'])
  .filter('fromTo', function() {
        return function(input, from, total, lessThan) {
            from = parseInt(from);
            total = parseInt(total);
            for (var i = from; i < from + total && i < lessThan; i++) {
                input.push(i);
            }
            return input;
        }
    })
  .factory('instagram', ['$http',
      function($http) {
        return {
          fetchPopular: function(callback) {
            var endPoint = 'https://api.instagram.com/v1/media/popular?client_id=8d0c4adf568146c7968559a9a7ee4d2f&callback=JSON_CALLBACK';

            $http.jsonp(endPoint).success(function(response) {
                callback(response.data);
            });
          }
        }
      }
    ])
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
