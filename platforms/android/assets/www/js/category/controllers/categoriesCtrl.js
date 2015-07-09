communicatorApp.controller('categoriesCtrl', function($scope, $stateParams, categoryDbService) {
    
    categoryDbService.selectEnabled().then(function(results) {
        $scope.categories = results;
        $scope.levelNumber = $stateParams.levelNumber;
    });

});