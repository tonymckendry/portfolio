var app = angular.module("myApp", ['ngRoute', 'ngResource', 'ngAnimate']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/portfolio.html',
        controller: 'portfolioController'
      })


    $locationProvider.html5Mode(true);
});
