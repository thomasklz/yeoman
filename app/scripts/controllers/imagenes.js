'use strict';

/**
 * @ngdoc function
 * @name practica2App.controller:ImagenesCtrl
 * @description
 * # ImagenesCtrl
 * Controller of the practica2App
 */
angular.module('practica2App')
  .controller('ImagenesCtrl', function ($scope) {
    
    var contentImagen = $scope.contentImagen=[];
    var baseUrl= "http://lorempixel.com/300/200/";

    var title=['Comida Sana', 'Salud y trabajo', 'Vida en la ciudad', 'Mantente activo', 'Cuida tu aspecto'];
    var keyworks=['food', 'business', 'city', 'sports', 'fashion'];
    var text=['Lorem jdhfjashfjshdflkaj asdfsdf asf', 'Lorem jdhfjashfjshdflkaj asdfsdf asf', 
    		   'Lorem jdhfjashfjshdflkaj asdfsdf asf', 'Lorem jdhfjashfjshdflkaj asdfsdf asf',
    		   'Lorem jdhfjashfjshdflkaj asdfsdf asf'];

    $scope.addFoto=function(i){
    			contentImagen.push({
    				url:baseUrl+keyworks[i],
    				title: title[i],
    				text: text[1]
    			})
    }

	for (var i = 0; i <4 ; i++) {
		$scope.addFoto(i);
	}

  });
