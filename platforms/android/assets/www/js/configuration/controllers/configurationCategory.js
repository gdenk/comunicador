communicatorApp.controller('configurationCategory', function($scope, $ionicNavBarDelegate, $ionicPopup, configurationDbService) {
    
    configurationDbService.find('categoryEnabled').then(function(results){
        $scope.categoryEnabled = results[0].value === 'true' ? true : false;
    });

    $scope.toggleEnabledCategory = function(enabled) {
        configurationDbService.changeCategoryEnabled(enabled);
    };

    $scope.save = function() {
        $ionicNavBarDelegate.back();
    };

    $scope.ask = function() {
        $ionicPopup.alert({
            title: 'Ayuda',
            template: 'Las categorías permiten agrupar los pictogramas para una busqueda más fácil.'
        });
    };
});