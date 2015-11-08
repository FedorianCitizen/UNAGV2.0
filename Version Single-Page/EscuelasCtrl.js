app.controller('EscuelaCtrl',['$scope', function($scope){
	
     $scope.campus = 'Undefined';
	 console.log("Message " + sessionStorage.getItem('campus'));
	 $scope.campus = sessionStorage.getItem('campus');
	 $scope.escuelaBuscada = '';
	 $scope.escuelaEncontrada = '';
	
	 $scope.buscarEscuela = function(){
        if($scope.escuelaBuscada === "")
			$scope.escuelaEncontrada = "";
		for(var index = 0; index < $scope.escuelasCampus.length; index++){
		 for (temp of $scope.escuelasCampus[index].escuelas) {
    		if(temp.nombre.indexOf($scope.escuelaBuscada) > 0)
               $scope.escuelaEncontrada = temp;
		 }
		}
	 };
	
	 $scope.escuelasCampus = [
		 {
		 	campus : 'Omar Dengo',
			escuelas: [
				{
					nombre: 'Departamento de Física',
					telefono: 'No proveido',
					website: 'http://www.fisica.una.ac.cr/',
					img: 'assets/img/escuelas/fisica.jpg'
				},
				{
					nombre: 'Escuela de Química',
					telefono: '22773351',
					website: 'http://www.quimica.una.ac.cr/',
					img: 'assets/img/escuelas/quimica.jpg'
				},
				{
					nombre: 'Escuela de Informática',
					telefono: '25626363',
					website: 'http://www.escinf.una.ac.cr/',
					img: 'assets/img/escuelas/info.jpg'
				},
				{
					nombre: 'Escuela de Ciencias Biológicas',
					telefono: '22773322',
					website: 'http://www.biologia.una.ac.cr/',
					img: 'assets/img/escuelas/biolo.jpg'
				},
				{
					nombre: 'Escuela de Geografía, Catastro y Geodesia',
					telefono: '22773336',
					website: 'http://www.etcg.una.ac.cr/',
					img: 'assets/img/escuelas/topo.jpg'
				},
				{
					nombre: 'Escuela de Matemática',
					telefono: '25626029',
					website: 'http://www.matematica.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Escuela de Ecuménica de Ciencias de la Religión',
					telefono: '25624242',
					website: 'http://www.ecumenica.una.ac.cr/',
					img: 'assets/img/escuelas/religion.png'
				},
				{
					nombre: 'Escuela de Bibliotecología, Documentación e Información',
					telefono: '25624082',
					website: 'http://www.bibliotecologia.una.ac.cr/',
					img: 'assets/img/escuelas/biblioteco.png'
				},
				{
					nombre: 'Escuela de Filosofía',
					telefono: '25624095',
					website: 'http://www.filosofia.una.ac.cr/',
					img: 'assets/img/escuelas/filosofia.png'
				},
				{
					nombre: 'Escuela de Literatura y Ciencias del Lenguaje',
					telefono: '25624051',
					website: 'http://www.literatura.una.ac.cr/',
					img: 'assets/img/escuelas/idiomas.png'
				},
				{
					nombre: 'Escuela de Ciencias Agrarias',
					telefono: '22773092',
					website: 'http://www.agrarias.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Escuela de Ciencias Ambientales',
					telefono: '22773290',
					website: 'http://www.edeca.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Escuela de Geográficas',
					telefono: '22773283',
					website: 'http://www.geo.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Escuela de Historia',
					telefono: '25624120',
					website: 'http://www.historia.una.ac.cr/',
					img: 'assets/img/escuelas/historia.jpg'
				},
				{
					nombre: 'Escuela de Sociología',
					telefono: '22773256',
					website: 'http://www.fcs.una.ac.cr/sociologia/index.html',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Escuela de Psicología',
					telefono: '22773262',
					website: 'http://www.fcs.una.ac.cr/psicologia/index.html',
					img: 'assets/img/escuelas/psico.jpg'
				},
				{
					nombre: 'Escuela de Economía',
					telefono: '256n24142',
					website: 'http://www.economia.una.ac.cr/',
					img: 'assets/img/escuelas/economia.jpg'
				},
				{
					nombre: 'Escuela de Administración',
					telefono: '25624196',
					website: 'http://www.fcs.una.ac.cr/iestra/index.html',
					img: 'assets/img/escuelas/admin.jpg'
				},
				{
					nombre: 'Escuela de Relaciones Internacionales',
					telefono: '25624141',
					website: 'http://www.ri.una.ac.cr/',
					img: 'assets/img/escuelas/psico.jpg'
				},
				{
					nombre: 'Escuela de Planificación y Promoción Social',
					telefono: '25624152',
					website: 'http://www.epps.una.ac.cr/',
					img: 'assets/img/escuelas/pps.jpg'
				},
				{
					nombre: 'Escuela de Secretariado Profesional',
					telefono: '25624190',
					website: 'http://www.secretariado.una.ac.cr/',
					img: 'assets/img/escuelas/secre.jpg'
				},
				{
					nombre: 'Division de Educacion Básica',
					telefono: 'No encontrado',
					website: 'http://www.cide-basica.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Division de Educología',
					telefono: 'No encontrado',
					website: 'http://www.cide-educologia.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Division de Educación Rural',
					telefono: 'No encontrado',
					website: 'http://www.cide-rural.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Division de Educación para el Trabajo',
					telefono: 'No encontrado',
					website: 'http://www.cide-trabajo.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Escuela de Danza',
					telefono: '22773393',
					website: 'http://www.cidea.una.ac.cr/index.php?option=com_content&view=article&id=4&Itemid=735/',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Escuela de Música',
					telefono: '22773390',
					website: 'http://www.cidea.una.ac.cr/index.php?option=com_content&view=article&id=4&Itemid=732',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Escuela de Artes Escénicas',
					telefono: '22773386',
					website: 'http://www.cidea.una.ac.cr/index.php?option=com_content&view=article&id=4&Itemid=736',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Escuela de Arte y Comunicación Visual',
					telefono: '22773397',
					website: 'http://www.cidea.una.ac.cr/index.php?option=com_content&view=article&id=4&Itemid=730',
					img: 'assets/img/escuelas/una.png'
				}
			 ]
		 },
		 {
		 	campus : 'Benjamin Nunez',
			escuelas: [
				{
					nombre: 'Escuela de Informática',
					telefono: '25626363',
					website: 'http://www.escinf.una.ac.cr/',
					img: 'assets/img/escuelas/info.jpg'
				},
				{
					nombre: 'Escuela de Medicina Veterinaria',
					telefono: '25624506',
					website: 'http://http://www.medvet.una.ac.cr/',
					img: 'assets/img/escuelas/una.jpg'
				},
				{
					nombre: 'Escuela de Ciencias del Movimiento Humano y Calidad de Vida',
					telefono: '22610032',
					website: 'http://www.ciemhcavi.una.ac.cr/',
					img: 'assets/img/escuelas/una.jpg'
				}			
			 ]
		 }
	 ];
        
}]);
