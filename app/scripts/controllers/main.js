'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.whatImOrderingBy = 'difficulty';
    $scope.quiz = [
    {
      "q": "Who is the best ping pong player at FSA?",
      'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}],
      'answer': "Nimit",
      'difficulty' : 3
    },
    { "q": "Which robot name was chanted during Lego Mindstorms?",
      'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}],
      'answer':'noHope.js',
      'difficulty' : 4
    },
    {
      'q': "Out of the following frontend frameworks, which framework is most rails-like",
      'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}],
      'answer':'Ember.js',
      'difficulty' : 5
    },
    {
      'q': "Which project used a local data store?",
      'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}],
      'answer':'Twitter.js',
      'difficulty' : 2
    }
  ];
  });
