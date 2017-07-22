'use strict';

angular.module('practica2App')
  .factory("loginServices", function(RUTA_API, $http) {
    var interfaz = {
      uri_api: RUTA_API,
      loginUser: function() {
      	return $http.get(RUTA_API +'usuarios');
      }
    }
    return interfaz;
  });
