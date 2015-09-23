app.controller('InicioCtrl',['$scope', function($scope){
        $scope.campus = 'Seleccione el campus';
        $scope.campusCodigoSeleccionado = '';
        
        $scope.seleccionarCampus = function(index){
           $scope.campus = campusDisponibles[index];
           $scope.campusCodigoSeleccionado = campusDisponibles[index].id;
        };
        
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
