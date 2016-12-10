var app = angular.module('app', ['ui-router'])
  .config(function($stateProvider, $urlRouteProvider){
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'categoryCtrl'
    })
    .state('search', {
  		url: '/search:search',
  		templateUrl: './views/search.html',
  		controller: 'searchCtrl'
    })
    .state('add', {
      url: '/add:add',
      templateUrl: './views/add.html',
      controller: 'addCtrl'
    });
    $urlRouterProvider
    .otherwise('/');
  });
