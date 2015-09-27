app.controller('EscuelaCtrl',['$scope', function($scope){
	
     $scope.campus = 'Undefined';
	 console.log("Message " + sessionStorage.getItem('campus'));
	 $scope.campus = sessionStorage.getItem('campus');
	 $scope.escuelaBuscada = '';
	 $scope.escuelaEncontrada = '';
	
	 $scope.buscarEscuela = function(){
	 	var index;
		var temp;
		 
		 if($scope.campus === 'Omar Dengo')
			 index = 0;
		 else 
			 index = 1;
		 console.log(index);
        
		 for (temp of $scope.escuelasCampus[index].escuelas) {
    		if(temp.nombre.indexOf($scope.escuelaBuscada) > 0)
               $scope.escuelaEncontrada = temp;
		 }
	 };
	
	 $scope.escuelasCampus = [
		 {
		 	campus : 'Omar Dengo',
			escuelas: [
				{
					nombre: 'Departamento de Fisica',
					telefono: 'No proveido',
					website: 'http://www.fisica.una.ac.cr/',
					img: 'assets/img/escuelas/fisica.jpg'
				},
				{
					nombre: 'Escuela de Quimica',
					telefono: '22773351',
					website: 'http://www.quimica.una.ac.cr/',
					img: 'assets/img/escuelas/quimica.jpg'
				},
				{
					nombre: 'Escuela de Informatica',
					telefono: '25626363',
					website: 'http://www.escinf.una.ac.cr/',
					img: 'assets/img/escuelas/info.jpg'
				},
				{
					nombre: 'Escuela de Ciencias Biologicas',
					telefono: '22773322',
					website: 'http://www.biologia.una.ac.cr/',
					img: 'assets/img/escuelas/biolo.jpg'
				},
				{
					nombre: 'Escuela de Geografia, Catastro y Geodesia',
					telefono: '22773336',
					website: 'http://www.etcg.una.ac.cr/',
					img: 'assets/img/escuelas/topo.jpg'
				},
				{
					nombre: 'Escuela de Matematica',
					telefono: '25626029',
					website: 'http://www.matematica.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Escuela de Ecumenica de Ciencias de la Religion',
					telefono: '25624242',
					website: 'http://www.ecumenica.una.ac.cr/',
					img: 'assets/img/escuelas/religion.png'
				},
				{
					nombre: 'Escuela de Bibliotecologia, Documentacion e Informacion',
					telefono: '25624082',
					website: 'http://www.bibliotecologia.una.ac.cr/',
					img: 'assets/img/escuelas/biblioteco.png'
				},
				{
					nombre: 'Escuela de Filosofia',
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
					nombre: 'Escuela de Geograficas',
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
					nombre: 'Escuela de Sociologia',
					telefono: '22773256',
					website: 'http://www.fcs.una.ac.cr/sociologia/index.html',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Escuela de Psicologia',
					telefono: '22773262',
					website: 'http://www.fcs.una.ac.cr/psicologia/index.html',
					img: 'assets/img/escuelas/psico.jpg'
				},
				{
					nombre: 'Escuela de Economia',
					telefono: '25624142',
					website: 'http://www.economia.una.ac.cr/',
					img: 'assets/img/escuelas/economia.jpg'
				},
				{
					nombre: 'Escuela de Administracion',
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
					nombre: 'Escuela de Planificacion y Promocion Social',
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
					nombre: 'Division de Educacion Basica',
					telefono: 'No encontrado',
					website: 'http://www.cide-basica.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Division de Educologia',
					telefono: 'No encontrado',
					website: 'http://www.cide-educologia.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Division de Educacion Rural',
					telefono: 'No encontrado',
					website: 'http://www.cide-rural.una.ac.cr/',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Division de Educacion para el Trabajo',
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
					nombre: 'Escuela de Musica',
					telefono: '22773390',
					website: 'http://www.cidea.una.ac.cr/index.php?option=com_content&view=article&id=4&Itemid=732',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Escuela de Artes Escenicas',
					telefono: '22773386',
					website: 'http://www.cidea.una.ac.cr/index.php?option=com_content&view=article&id=4&Itemid=736',
					img: 'assets/img/escuelas/una.png'
				},
				{
					nombre: 'Escuela de Arte y Comunicacion Visual',
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
					nombre: 'Escuela de Informatica',
					telefono: '25626363',
					website: 'http://www.escinf.una.ac.cr/',
					img: 'assets/img/escuelas/info.jpg'
				},
				
			 ]
		 }
	 ];
        
}]);
