communicatorApp.controller('levelCardsCtrl', function($scope, $stateParams, tutorialService, cardDbService, registryService) {
    registryService.pickedLevelNumber = parseInt($stateParams.levelNumber, 10);


    if($stateParams.category){
    	cardDbService.selectByCategory($stateParams.category).then(function(results) {
	        $scope.cards = results;
	    });
    }
    else{
	   	cardDbService.selectEnabled().then(function(results) {
	        $scope.cards = results;
	    });
    }

    $scope.levelNumber = $stateParams.levelNumber;
	$scope.card = $stateParams.card;
	$scope.levelInfo = '\'' + $stateParams.levelInfo + '\'';
	$scope.select = '\'' + $stateParams.select + '\'';

	$scope.wantCardWasMoved = $stateParams.wantCardWasMoved;

    tutorialService.showIfActive();
});