'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuizCtrl', function ($scope, $timeout) {

    $scope.count = 60;

    $scope.timer = function() {
      $scope.count--;
      $timeout($scope.timer, 1000);
    };

    $scope.timer();

  });
