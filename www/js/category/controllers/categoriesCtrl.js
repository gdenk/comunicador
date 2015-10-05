communicatorApp.controller('categoriesCtrl', function($scope, $stateParams, categoryDbService, tutorialService) {
    
    categoryDbService.selectEnabled().then(function(results) {
        $scope.categories = results;
        $scope.levelNumber = $stateParams.levelNumber;
        $scope.levelInfo = '\'' + $stateParams.levelInfo + '\'';
	    $scope.select = '\'' + $stateParams.select + '\''; 

	    if($scope.select){
	    	 $scope.level3 = true;
	    }
	    else{
	    	$scope.level3 = false;
	    }
    });

	tutorialService.showIfActive();
});