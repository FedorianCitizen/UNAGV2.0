app.controller('InicioCtrl',['$scope', function($scope){
        $scope.campus = 'Seleccione el campus';
        $scope.campusCodigoSeleccionado = '';
        
    	$scope.$watch("campus", function() {
     		sessionStorage.setItem('campus',$scope.campus);
		 	console.log("Message " + sessionStorage.getItem('campus'));
  		});
    
        $scope.campusDisponibles = [
            {
                nombre: 'Benjamin Nunez',
                id: 'BJNNZ'
            },
            {
                nombre: 'Omar Dengo',
                id: 'OMRDG'
            }
        ];
}]);
