'use strict';

// Declare app level module which depends on views, and components
var nw = angular.module('newsWebsite', ['ui.bootstrap', "weatherModule", "ngSanitize", "ngAnimate", "newsDirective", 
  "ngRoute", "newsControllers", "newsService"]);
nw.config(['$routeProvider', '$locationProvider',
  function($routeProvider) {
    $routeProvider
      .when('/content/:id', {
        templateUrl: 'partials/newsContent.html',
        controller: 'NewsDetailCtrl',
        controllerAs: 'newsDetail'
      }).
      when('/', {
        templateUrl: 'partials/newsList.html',
        controller: 'wholeInformationCtrl',
        controllerAs: 'whole'
      })
      .when('/politics', {
        templateUrl: 'partials/newsList.html',
        controller: 'politicsNewsCtrl',
        controllerAs: 'politics'
      })
      .when('/sports', {
        templateUrl: 'partials/newsList.html',
        controller: 'sportsNewsCtrl',
        controllerAs: 'sports'
      })
      .when('/entertainment', {
        templateUrl: 'partials/newsList.html',
        controller: 'entertainmentNewsCtrl',
        controllerAs: 'entertainment'
      })
      .when('/technology', {
        templateUrl: 'partials/newsList.html',
        controller: 'technologyNewsCtrl',
        controllerAs: 'technology'
      });
}]);

















