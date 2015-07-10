communicatorApp.controller('configurationCategory', function($scope, $ionicNavBarDelegate, configurationDbService) {
    
    configurationDbService.find('categoryEnabled').then(function(results){
        $scope.categoryEnabled = results[0].value === 'true' ? true : false;
    });

    $scope.toggleEnabledCategory = function(enabled) {
        configurationDbService.changeCategoryEnabled(enabled);
    };

    $scope.save = function() {
        $ionicNavBarDelegate.back();
    };
});