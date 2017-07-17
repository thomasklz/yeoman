'use strict';

/**
 * @ngdoc function
 * @name practica2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the practica2App
 */
angular.module('practica2App')
  .controller('AboutCtrl', function ($scope,Alertify, $uibModal) {
  	
    $scope.datos = [
        {"name" : "Bottom-Dollar Marketse" ,"city" : "Tsawassen"},
        {"name" : "Alfreds Futterkiste", "city" : "Berlin"},
        {"name" : "Bon app", "city" : "Marseille"}
    ];

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

    //ventana modal
    $scope.showModal=function(){
     $scope.newClients={};
  
      var modalInstance = $uibModal.open({
        templateUrl: 'views/modal/newClient.html',
        controller:'myModalController',
        resolve: {
          newClients: function() //scope del modal
            {
                //retorna campos del formulario
                return $scope.newClients;
            }
        }
      });

      //proceso una vez cerrada la ventana modal
      modalInstance.result.then(function () {
           $scope.datos.push({name:$scope.newClients.newName, city:$scope.newClients.newCity});
      });

    };
    // fin ventana modal
})

.controller('myModalController', function($scope, $uibModalInstance, newClients)
{
  // una vez inyectado el objeto de datos lo inicializamos 
  $scope.newClients = newClients;
  $scope.save = function () {
     //recibimos el objeto de datos 
     $uibModalInstance.close(newClients);
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

});


