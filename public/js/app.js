var app = angular.module('dirtyapp', ['dirtyctrls', 'ui.router']);

app.config(['$stateProvider', 
  '$urlRouterProvider', 
  '$locationProvider',
  '$httpProvider',
 function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');

//define routes
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  $stateProvider
  .state('history', {
    url: '/history',
    templateUrl: 'views/history.html'
  })
  $stateProvider
  .state('masthead', {
    url: '/masthead',
    templateUrl: 'views/masthead.html'
  })
  $stateProvider
  .state('submissions', {
    url: '/submissions',
    templateUrl: 'views/submissions.html'
  })
  $stateProvider
  .state('buy', {
    url: '/buy',
    templateUrl: 'views/buy.html'
  })

  $locationProvider.html5Mode(true);
}]);