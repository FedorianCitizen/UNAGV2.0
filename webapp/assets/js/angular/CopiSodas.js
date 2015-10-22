app.controller('CopiSodasCtrl',['$scope', function($scope){
        $scope.campus = sessionStorage.getItem('campus');
		$scope.mostrarSodas = false;
		$scope.direccionSeleccionada = '';
		$scope.sodaSeleccionada= '';
		$scope.CopySeleccionada= '';
		
		$scope.buscarSoda = function(){
			var index;
			var temp;
		 	if($scope.campus === 'Benjamín Nuñez')
				 index = 0;
		 	else 
			 	index = 1;
			
			for (temp of $scope.campusDisponibles[index].sodas){
				if(temp.nombre.match($scope.sodaSeleccionada))
					$scope.direccionSeleccionada = temp;
			}
			if($scope.direccionSeleccionada === '')
				$scope.direccionSeleccionada = 'Soda no encontrada';
		};
	
		$scope.buscarCopy = function(){
			var index;
			var temp;
		 	if($scope.campus === 'Benjamín Nuñez')
				 index = 0;
		 	else 
			 	index = 1;
			
			for (temp of $scope.campusDisponibles[index].copiadoras){
				if(temp.nombre.match($scope.CopySeleccionada))
					$scope.direccionSeleccionada = temp;
			}
			if($scope.direccionSeleccionada === '')
				$scope.direccionSeleccionada = 'Copiadora no encontrada';
		};
	
        $scope.campusDisponibles = [
            {
                nombre: 'Benjamin Nunez',
                sodas: [
					{
					nombre: "Soda de Informática",
					horario: " M - V de 8am a 4pm",
					ubicacion: "2do piso, Escuela de Informática; Contiguo a la asociación de estudiantes"
					},
					{
					nombre: "Soda de Deportes",
					horario: "L - V de 7am a 7pm, S de 8am a 4pm",
					ubicacion: "Frente al parqueo de la Escuela de Ciencias del Movimiento Humano"
					},
					{
					nombre: "Soda de Veterinaria",
					horario: "L - V de 7am a 7pm, S de 8am a 4pm",
					ubicacion: "Contiguo a la Escuela de Veterinaria"
					},
				],
				copiadoras: [
				]
            },
            {
                nombre: 'Omar Dengo',
                sodas: [
					{
					nombre: "Soda Padre Royo",
					horario: "L-V de 7am a 7pm, S de 8am a 2pm",
					ubicacion: "Frente al parqueo de Generales"},
					{
					nombre: "Soda Biología",
					horario: "L-V de 7am a 7pm, S de 8am a 1pm",
					ubicacion: "200m Norte de la entrada del parqueo de Biología"
					},
					{
					nombre: "Soda Agrarias",
					horario: "L-V de 7am a 7pm, S de 8am a 2pm",
					ubicacion: "200m Este y 50m Norte de la biblioteca Joaquín García"
					},
					{
					nombre: "Soda CIDE",
					horario: "L-V de 7am a 7pm, S de 8am a 4pm",
					ubicacion: "Edificio CIDE, frente al Gimnasio de Promoción"
					}
				],
				copiadoras: [
					{
					nombre: "Copy Chalo",
					ubicacion: "200m Este del edificio de Ciencias Sociales"
					},
					{
					nombre: "Copy Santi",
					ubicacion: "Entrada principal del campus"
					},
					{
					nombre: "Copy Economico",
					ubicacion: "150m Este del edificio de Ciencias Sociales"
					},
					{
					nombre: "Copy Claret",
					ubicacion: "100m Oeste y 45m Sur de la explanada 11 de Abril"
					}
				]
            }
        ];
}]);
