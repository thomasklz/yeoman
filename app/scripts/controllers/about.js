'use strict';

/**
 * @ngdoc function
 * @name practica2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the practica2App
 */
angular.module('practica2App')
  .controller('AboutCtrl', function ($scope,Alertify) {
  	$scope.AlertySuccess=function(){
		 Alertify.success("Success!");
  	}
  	$scope.AlertyDanger=function(){
		 Alertify.error("Error!");
  	}
  	$scope.AlertyInfo=function(){
		 Alertify.log("Log!");
  	}
  	
	$scope.AlertaMensaje=function(){
		 Alertify.alert("Mensaje de alerta!");
  	}

  	$scope.ConfirmDialog=function(){
  	// confirm dialog
	Alertify.confirm('Are you sure?').then(
        function onOk() {
        	Alertify.success("Success!");},
        function onCancel() { 
        	 Alertify.error("Error!"); }
    )
    };

  });
