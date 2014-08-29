'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:SecondaryCtrl
 * @description
 * # SecondaryCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('SecondaryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
