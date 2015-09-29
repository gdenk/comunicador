communicatorApp.controller('levelCardsCtrl', function($scope, $stateParams, tutorialService, cardDbService, registryService) {
    registryService.pickedLevelNumber = parseInt($stateParams.levelNumber, 10);


    if($stateParams.category){
    	cardDbService.selectByCategory($stateParams.category).then(function(results) {
	        $scope.cards = results;
	        $scope.levelNumber = $stateParams.levelNumber;
	    });
    }
    else{
	   	cardDbService.selectEnabled().then(function(results) {
	        $scope.cards = results;
	        $scope.levelNumber = $stateParams.levelNumber;
	    });
    }

    tutorialService.showIfActive();
});