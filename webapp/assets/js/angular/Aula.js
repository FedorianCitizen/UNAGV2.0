app.controller('AulaCtrl',['$scope', function($scope){
        $scope.direccionSeleccionada = '';
        $scope.aulaSeleccionada = '';
        
        $scope.buscarAula = function(aulaId){
           for (var i = 0; i = aulasDisponibles.length; i++) 
                if(aulasDisponibles[i].id === aulaId)
                    $scope.direccionSeleccionada = aulasDisponibles[i].direccion;
        };
        
        $scope.aulasDisponibles = [
             { id: '', direccion: ''},
             { id: '', direccion: ''},
        ];
}]);