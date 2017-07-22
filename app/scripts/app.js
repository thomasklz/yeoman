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
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'Alertify',
    'ui.bootstrap'
  ])
  .constant("RUTA_API","http://localhost:88/tesis/SistGestion/web/api/v0/")

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
      .when('/usuarios', {
        templateUrl: 'views/usuarios.html',
        controller: 'UsuariosCtrl',
        controllerAs: 'usuarios'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
