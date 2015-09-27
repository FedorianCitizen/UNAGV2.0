app.controller('CtrlAu',['$scope', function($scope){
     $scope.campus = 'Undefined';
	 console.log("Message " + sessionStorage.getItem('campus'));
	 $scope.campus = sessionStorage.getItem('campus');
	 $scope.direccionSeleccionada = '';
     $scope.aulaSeleccionada = '';
     $scope.aulasDisponibles = [
		 //Lista de Aulas
             { id: '321', direccion: 'Filosofia y letras, 3er piso'},
             { id: '221', direccion: ''}
        ]; 
	
        $scope.buscarAula = function(){
			$scope.direccionSeleccionada = '';
		   var temp;
           for (temp of $scope.aulasDisponibles) {
    			if(temp.id === $scope.aulaSeleccionada)
                    $scope.direccionSeleccionada = temp.direccion;
		   	}
			if($scope.direccionSeleccionada === '')
				$scope.direccionSeleccionada = 'Aula no encontrada';
        };
        $scope.$watch("aulaSeleccionada", function() {
     		buscarAula();
  		});
}]);


