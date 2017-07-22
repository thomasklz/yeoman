'use strict';

/**
 * @ngdoc function
 * @name practica2App.controller:UsuariosCtrl
 * @description
 * # UsuariosCtrl
 * Controller of the practica2App
 */
angular.module('practica2App')
  .controller('UsuariosCtrl', function ($scope, loginServices) {
    $scope.ruta=loginServices.uri_api;
    $scope.getUsuarios= function(){
   		loginServices.loginUser().then(function(response){
   			$scope.usurios = response.data.Usuarios;
   			console.log(response.data.Usuarios);
   		}).catch(function (message) {
            console.log('la promesa se ha rechazado');
            console.log(message);
        });

   };
    $scope.getUsuarios();
  });
