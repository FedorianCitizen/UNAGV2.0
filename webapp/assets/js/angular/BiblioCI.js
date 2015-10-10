app.controller('BiblioCICtrl',['$scope', function($scope){
        $scope.campus = sessionStorage.getItem('campus');
	
	
	
		$scope.mostrarTodoCI = false;
		$scope.CIBuscado = "";
		$scope.CIencontrado= null;
	
		$scope.busquedaCI = function(){
			var index;
			var temp;
		 
		 	if($scope.campus === 'Omar Dengo')
				 index = 0;
		 	else 
			 	index = 1;
        
		 for (temp of $scope.campusDisponibles[index].CI) {
    		if(temp.nombre.match($scope.CIBuscado))
               $scope.CIencontrado = temp;
		 }
		};
		
	
	
		$scope.biblios = {};
		$scope.mostrarTodoBiblio = false;
		$scope.BiblioBuscada = "";
		$scope.BiblioEncontrada= null;
	
		$scope.devuelveBiblios = function(){
			var index;
			var temp;
		 
		 	if($scope.campus === 'Omar Dengo')
				 index = 0;
		 	else 
			 	index = 1;
			
			$scope.index = index;
			$scope.lista = $scope.campusDisponibles[index].Bibliotecas;
		};
	
		$scope.busquedaBiblio = function(){
			var index;
			var temp;
		 
		 	if($scope.campus === 'Omar Dengo')
				 index = 0;
		 	else 
			 	index = 1;
			
			$scope.index = index;
        
		 for (temp of $scope.campusDisponibles[index].Bibliotecas) {
			 if(temp.nombre.match($scope.BiblioBuscada))
               $scope.BiblioEncontrada = temp;
		 }
			console.log($scope.BiblioEncontrada);
		};
		
		$scope.listadoBiblios = function(){
			$scope.mostrarTodoBiblio = true;
			$scope.BiblioEncontrada = null;
		};
	
		$scope.mostrarTodoBiblio = false;
		
        $scope.campusDisponibles = [
            {
                nombre: 'Omar Dengo',
                CI: [
					{
					nombre: 'Centro de Informacin Documental (CIDCSO)',
					telefono: '22773266',
					website: 'http://www.una.ac.cr/index.php/m-telefonos-una/centro-de-informacion-documental/',
					img: 'assets/img/escuelas/una.png'
					},
					{
					nombre: 'Instituto de Estudios de la Mujer',
					telefono: '25624085',
					website: 'http://www.iem.una.ac.cr',
					img: 'assets/img/escuelas/mujer.png'
					},
					{
					nombre: 'Instituto de Estudios Latinoamericanos',
					telefono: '25624056',
					website: 'http://www.idela.una.ac.cr/',
					img: 'assets/img/escuelas/latinoamericanos.png'
					},
					{
					nombre: 'Instituto de Investigacion y Servicios Forestales (INISEFOR)',
					telefono: '25624600',
					website: 'http://www.inisefor.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
					},
					{
					nombre: 'Instituto Internacional en Conservacion y Manejo de Vida Silvestre (ICOMVIS)',
					telefono: '22377039',
					website: 'http://www.icomvis.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
					},
					{
					nombre: 'Observatorio Vulcanologico y Sismologico de Costa Rica (OVSICORI)',
					telefono: '25624001',
					website: 'http://www.ovsicori.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
					},
					{
					nombre: 'Centro de Investigaciones Apicolas Tropicales (CINAT)',
					telefono: '22381868',
					website: 'http://www.cinat.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
					},
					{
					nombre: 'Instituto Regional de Estudios en Sustancias Toxicas (IRET)',
					telefono: '22773584',
					website: 'http://www.iret.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
					},
					{
					nombre: 'Instituto de Estudios Interdisciplinarios de la Ninez y la Adolescencia',
					telefono: '22773475',
					website: 'http://www.programaicat.una.ac.cr/ICATsite/index.html',
					img: 'assets/img/escuelas/una.png'
					},
					{
					nombre: 'Programa Identidad Cultural Arte y Tecnologia (ICAT)',
					telefono: '22773475',
					website: 'http://www.programaicat.una.ac.cr',
					img: 'assets/img/escuelas/una.png'
					}
				],
				Bibliotecas: [
					{
					nombre: "Luis y Felipe Molina (RI)",
					horario: "L-V 9am a 6pm"
					},
					{
					nombre: "Biblioteca de Facultad de Filosofia y Letras",
					horario: "L 8am a 5pm, M-V 8am a 6pm, S 8am a 5pm"
					},
					{
					nombre: "Constantino Lascaris (Generales)",
					horario: "L, M, J y V 7am a 8pm, I 7am a 5pm"
					},
					{
					nombre: "Mariana Campos (Exactas)",
					horario: "L-V 8am a 6pm, S 8am a 4pm"
					},
					{
					nombre: "CIDENAF(CIDE)",
					horario: "L-V 8am a 7pm, S 8am a 4pm"
					},
					{
					nombre: "Joaquin Garcia Monge",
					horario: "L-V 8am a 9pm, S 8am a 5pm"
					}
				]
            },
			{
                nombre: 'Benjamin Nunez',
                CI: [
					{
					nombre: 'Centro Internacional de Poltica Econmica (CINPE)',
					telefono: '25624300',
					website: 'http://www.cinpe.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
					},
					{
					nombre: 'Centro de Investigaciones Apícolas Tropicales (CIAT)',
					telefono: '22773221',
					website: 'http://www.cinat.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
					}
				],
				Bibliotecas: [
					{
					nombre: "Biblioteca Clemencia Conejo Chacon",
					horario: "L - V de 8am a 4:30pm, S de 8am a 3pm"
					},
					{
					nombre: "Biblioteca Escuela de Ciencias Veterinarias",
					horario: "L - V de 8am a 4:00pm"
					}
				]
            }    
        ];
}]);
