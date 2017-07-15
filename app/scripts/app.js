'use strict';

/**
 * @ngdoc overview
 * @name practica2App
 * @description
 * # practica2App
 *
 * Main module of the application.
 */
angular
  .module('practica2App', [
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/imagenes', {
        templateUrl: 'views/imagenes.html',
        controller: 'ImagenesCtrl',
        controllerAs: 'imagenes'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
