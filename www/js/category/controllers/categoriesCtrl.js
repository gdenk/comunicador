communicatorApp.controller('categoriesCtrl', function($scope, $stateParams, categoryDbService, tutorialService) {
    
    categoryDbService.selectEnabled().then(function(results) {
        $scope.categories = results;
        $scope.levelNumber = $stateParams.levelNumber; 
    });

	tutorialService.showIfActive();
});