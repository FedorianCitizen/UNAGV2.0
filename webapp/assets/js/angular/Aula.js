app.controller('CtrlAu',['$scope', function($scope){
     $scope.campus = 'Undefined';
	 console.log("Message " + sessionStorage.getItem('campus'));
	 $scope.campus = sessionStorage.getItem('campus');
	 $scope.direccionSeleccionada = '';
     $scope.aulaSeleccionada = '';
	
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
	
	$scope.aulasDisponibles = [

			 { id: '305', direccion: "Facultad de Filosofia y Letras, Primer piso"},
		 	 { id: '306', direccion: "Facultad de Filosofia y Letras, Primer piso"},
		 	 { id: '307', direccion: "Facultad de Filosofia y Letras, Primer piso"},
		 	 { id: '308', direccion: "Facultad de Filosofia y Letras, Primer piso"},
		 	 { id: '309', direccion: "Facultad de Filosofia y Letras, Primer piso"},
		
			 { id: '309', direccion: "Facultad de Filosofia y Letras, Segundo piso"},
			 { id: '310', direccion: "Facultad de Filosofia y Letras, Segundo piso"},
			 { id: '311', direccion: "Facultad de Filosofia y Letras, Segundo piso"},
		 	 { id: '312', direccion: "Facultad de Filosofia y Letras, Segundo piso"},
			 { id: '313', direccion: "Facultad de Filosofia y Letras, Segundo piso"},
			 { id: '314', direccion: "Facultad de Filosofia y Letras, Segundo piso"},
			 { id: '315', direccion: "Facultad de Filosofia y Letras, Segundo piso"},
			 { id: '316', direccion: "Facultad de Filosofia y Letras, Segundo piso"},
			 { id: '317', direccion: "Facultad de Filosofia y Letras, Segundo piso"},
			 { id: '318', direccion: "Facultad de Filosofia y Letras, Segundo piso"},
			 { id: '319', direccion: "Facultad de Filosofia y Letras, Segundo piso"},
			 { id: '320', direccion: "Facultad de Filosofia y Letras, Segundo piso"},
			 { id: '321', direccion: "Facultad de Filosofia y Letras, Segundo piso"},
		
			 { id: '321', direccion: "Facultad de Filosofia y Letras, Tercer piso"},
			 { id: '322', direccion: "Facultad de Filosofia y Letras, Tercer piso"},
			 { id: '323', direccion: "Facultad de Filosofia y Letras, Tercer piso"},
			 { id: '324', direccion: "Facultad de Filosofia y Letras, Tercer piso"},
			 { id: '325', direccion: "Facultad de Filosofia y Letras, Tercer piso"},
			 { id: '326', direccion: "Facultad de Filosofia y Letras, Tercer piso"},
			 { id: '327', direccion: "Facultad de Filosofia y Letras, Tercer piso"},
			 { id: '328', direccion: "Facultad de Filosofia y Letras, Tercer piso"},
			 { id: '329', direccion: "Facultad de Filosofia y Letras, Tercer piso"},
		
			 { id: '330', direccion: "Facultad de Filosofia y Letras, Cuarto piso"},
			 { id: '331', direccion: "Facultad de Filosofia y Letras, Cuarto piso"},
			 { id: '332', direccion: "Facultad de Filosofia y Letras, Cuarto piso"},
			 { id: '333', direccion: "Facultad de Filosofia y Letras, Cuarto piso"},
			 { id: '334', direccion: "Facultad de Filosofia y Letras, Cuarto piso"},
			 { id: '335', direccion: "Facultad de Filosofia y Letras, Cuarto piso"},
			 { id: '336', direccion: "Facultad de Filosofia y Letras, Cuarto piso"},
			 { id: '337', direccion: "Facultad de Filosofia y Letras, Cuarto piso"},
			 { id: '338', direccion: "Facultad de Filosofia y Letras, Cuarto piso"},
		
			 { id: '101', direccion: "Centro de Estudios Generales, Edificio diagonal al Quiznos"},
			 { id: '102', direccion: "Centro de Estudios Generales, Edificio diagonal al Quiznos"},	
			 { id: '103', direccion: "Centro de Estudios Generales, Edificio diagonal al Quiznos"},
			 { id: '104', direccion: "Centro de Estudios Generales, Edificio diagonal al Quiznos"},
			 { id: '105', direccion: "Centro de Estudios Generales, Edificio diagonal al Quiznos"},	
			 { id: '106', direccion: "Centro de Estudios Generales, Edificio diagonal al Quiznos"},
		
			 { id: '705', direccion: "Facultad de Tierra y Mar, Tercer piso"},
			 { id: '706', direccion: "Facultad de Tierra y Mar, Segundo piso"},	
			 { id: '707', direccion: "Facultad de Tierra y Mar, Segundo piso"},
			 { id: '708', direccion: "Facultad de Tierra y Mar, Segundo piso"},
			 { id: '709', direccion: "Facultad de Tierra y Mar, Segundo piso"},	
			 { id: '710', direccion: "Facultad de Tierra y Mar, Segundo piso"},
		
			 { id: '830', direccion: "Escuela de Topografia, 75m noreste del Gimnasio de Promocion Social; Primer Piso"},
			 { id: '831', direccion: "Escuela de Topografia, 75m noreste del Gimnasio de Promocion Social; Primer Piso"},	
			 { id: '832', direccion: "Escuela de Topografia, 75m noreste del Gimnasio de Promocion Social; Primer Piso"},
			 { id: '833', direccion: "Escuela de Topografia, 75m noreste del Gimnasio de Promocion Social; Primer Piso"},
			 { id: '834', direccion: "Escuela de Topografia, 75m noreste del Gimnasio de Promocion Social; Segundo Piso"},	
			 { id: '835', direccion: "Escuela de Topografia, 75m noreste del Gimnasio de Promocion Social; Segundo Piso"},
		
			 { id: '01', direccion: "CIDEA,Edificio de Arte y Comunicacion, contiguo a Topografia"},
			 { id: '02', direccion: "CIDEA,Edificio de Arte y Comunicacion, contiguo a Topografia"},	
			 { id: '03', direccion: "CIDEA,Edificio de Arte y Comunicacion, contiguo a Topografia"},
			 { id: '04', direccion: "CIDEA,Edificio de Arte y Comunicacion, contiguo a Topografia"},
			 { id: '05', direccion: "CIDEA,Edificio de Arte y Comunicacion, contiguo a Topografia"},	
			 { id: '06', direccion: "CIDEA,Edificio de Arte y Comunicacion, contiguo a Topografia"},
			 { id: '07', direccion: "CIDEA,Edificio de Arte y Comunicacion, contiguo a Topografia"},	
			 { id: '08', direccion: "CIDEA,Edificio de Arte y Comunicacion, contiguo a Topografia"},

			 { id: '1', direccion: "CIDEA,Escuela de Musica"},
			 { id: '2', direccion: "CIDEA,Escuela de Musica"},	
			 { id: '3', direccion: "CIDEA,Escuela de Musica"},
			 { id: '4', direccion: "CIDEA,Escuela de Musica"},
			 { id: '5', direccion: "CIDEA,Escuela de Musica"},
			 { id: '6', direccion: "CIDEA,Escuela de Musica"},
			 { id: '7', direccion: "CIDEA,Escuela de Musica"},
			 { id: '8', direccion: "CIDEA,Escuela de Musica"},
		
			 { id: 'Estudio 01', direccion: "25m Norte del Teatro Atahualpa Cioppo"},
			 { id: 'Estudio 02', direccion: "25m Norte del Teatro Atahualpa Cioppo"},
			 { id: 'Estudio 03', direccion: "25m Norte del Teatro Atahualpa Cioppo"},
		
			 { id: '814', direccion: "CIDE, Edificio de un piso, 50m Sur de la copiadora"},
			 { id: '815', direccion: "CIDE, Edificio de un piso, 50m Sur de la copiadora"},
			 { id: '816', direccion: "CIDE, Edificio de un piso, 50m Sur de la copiadora"},
			
			 { id: '818', direccion: "CIDE, Primer piso, frente a la plaza de deportes"},
			 { id: '819', direccion: "CIDE, Primer piso, frente a la plaza de deportes"},
			 { id: '820', direccion: "CIDE, Primer piso, frente a la plaza de deportes"},
			 { id: '821', direccion: "CIDE, Primer piso, frente a la plaza de deportes"},
			 { id: '822', direccion: "CIDE, Primer piso, frente a la plaza de deportes"},
		
			 { id: '823', direccion: "CIDE, Segundo piso, frente a la plaza de deportes"},
			 { id: '824', direccion: "CIDE, Segundo piso, frente a la plaza de deportes"},
			 { id: '825', direccion: "CIDE, Segundo piso, frente a la plaza de deportes"},
			 { id: '826', direccion: "CIDE, Segundo piso, frente a la plaza de deportes"},
		
			 { id: '2001', direccion: "Edificio de Informatica, Segundo piso"},
			 { id: '2002', direccion: "Edificio de Informatica, Segundo piso"},
			 { id: '2003', direccion: "Edificio de Informatica, Segundo piso"},
			 { id: '2004', direccion: "Edificio de Informatica, Segundo piso"},
		
			 { id: '1001', direccion: "Edificio de Informatica, Primer piso"},
			 { id: '1002', direccion: "Edificio de Informatica, Primer piso"},
			 { id: '1003', direccion: "Edificio de Informatica, Primer piso"},
			 { id: '1004', direccion: "Edificio de Informatica, Primer piso"},
			 { id: '1005', direccion: "Edificio de Informatica, Primer piso"},
			 { id: '1006', direccion: "Edificio de Informatica, Primer piso"},
		
			 { id: '611', direccion: "Facultad de Ciencias Exactas y Naturales, Primer piso, final del pasillo"},
			 { id: '612', direccion: "Facultad de Ciencias Exactas y Naturales, Primer piso, final del pasillo"},	
			 { id: '613', direccion: "Facultad de Ciencias Exactas y Naturales, Primer piso, final del pasillo"},
			 { id: '614', direccion: "Facultad de Ciencias Exactas y Naturales, Primer piso, final del pasillo"},
			 { id: '615', direccion: "Facultad de Ciencias Exactas y Naturales, Primer piso, final del pasillo"},
			 { id: '607', direccion: "Facultad de Ciencias Exactas y Naturales, Segundo piso, a la par de la Escuela de Matematica"},
			 { id: '605', direccion: "Facultad de Ciencias Exactas y Naturales, Segundo piso, frente al Departamento de Fisica"},
			 { id: '603', direccion: "Facultad de Ciencias Exactas y Naturales, Segundo piso, 35m Norte de la soda, sobre la calle"},
			 { id: '604', direccion: "Facultad de Ciencias Exactas y Naturales, Ultimo piso al final del pasillo a la izquierda"},
			 { id: '601', direccion: "Facultad de Ciencias Exactas y Naturales, Ultimo piso, frente a la salida al parqueo de Biologia"},
		
			 { id: '204', direccion: "Facultad de Ciencias Sociales, Primer piso"},
			 { id: '205', direccion: "Facultad de Ciencias Sociales, Primer piso"},
			 { id: '206', direccion: "Facultad de Ciencias Sociales, Primer piso"},	
			 { id: '207', direccion: "Facultad de Ciencias Sociales, Primer piso"},
			 { id: '208', direccion: "Facultad de Ciencias Sociales, Primer piso"},	
			 { id: '209', direccion: "Facultad de Ciencias Sociales, Primer piso"},
			 { id: '210', direccion: "Facultad de Ciencias Sociales, Primer piso"},
			 { id: '211', direccion: "Facultad de Ciencias Sociales, Primer piso"},
		
			 { id: '215', direccion: "Facultad de Ciencias Sociales, Segundo piso"},
			 { id: '216', direccion: "Facultad de Ciencias Sociales, Segundo piso"},
			 { id: '217', direccion: "Facultad de Ciencias Sociales, Segundo piso"},
			 { id: '218', direccion: "Facultad de Ciencias Sociales, Segundo piso"},
			 { id: '219', direccion: "Facultad de Ciencias Sociales, Segundo piso"},
			 { id: '220', direccion: "Facultad de Ciencias Sociales, Segundo piso"},
			 { id: '221', direccion: "Facultad de Ciencias Sociales, Segundo piso"},
			 { id: '222', direccion: "Facultad de Ciencias Sociales, Segundo piso"},
		
			 { id: '224', direccion: "Facultad de Ciencias Sociales, Tercer piso"},
			 { id: '223', direccion: "Facultad de Ciencias Sociales, Tercer piso"},
			 { id: '225', direccion: "Facultad de Ciencias Sociales, Tercer piso"},
			 { id: '226', direccion: "Facultad de Ciencias Sociales, Tercer piso"},
			 { id: '227', direccion: "Facultad de Ciencias Sociales, Tercer piso"},
			 { id: '228', direccion: "Facultad de Ciencias Sociales, Tercer piso"},
			 { id: '229', direccion: "Facultad de Ciencias Sociales, Tercer piso"},
			 { id: '230', direccion: "Facultad de Ciencias Sociales, Tercer piso"},
		
			 { id: '231', direccion: "Facultad de Ciencias Sociales, Cuarto piso"},
			 { id: '232', direccion: "Facultad de Ciencias Sociales, Cuarto piso"},
			 { id: '233', direccion: "Facultad de Ciencias Sociales, Cuarto piso"},
			 { id: '234', direccion: "Facultad de Ciencias Sociales, Cuarto piso"},
			 { id: '235', direccion: "Facultad de Ciencias Sociales, Cuarto piso"},
			 { id: '236', direccion: "Facultad de Ciencias Sociales, Cuarto piso"},
			 { id: '237', direccion: "Facultad de Ciencias Sociales, Cuarto piso"},
        ]; 
}]);


