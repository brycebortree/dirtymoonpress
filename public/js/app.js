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
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  })
  $stateProvider
  .state('submissions', {
    url: '/submissions',
    templateUrl: 'views/submissions.html'
  })
  $stateProvider
  .state('cart', {
    url: '/cart',
    templateUrl: 'views/cart.html'
  })
  $stateProvider
  .state('show', {
    url: '/show',
    templateUrl: 'views/show.html'
  })
  .state('seven', {
    url: '/seven',
    templateUrl: 'views/seven.html'
  })
  .state('we', {
    url: '/we',
    templateUrl: 'views/we.html'
  })
  .state('pounce', {
    url: '/pounce',
    templateUrl: 'views/pounce.html'
  })
  .state('dead', {
    url: '/dead',
    templateUrl: 'views/dead.html'
  })


  $locationProvider.html5Mode(true);
}]);