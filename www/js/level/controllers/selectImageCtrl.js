communicatorApp.controller('selectImageCtrl', function($scope, $stateParams, configurationDbService, cardDbService, 
		registryService, tutorialService) {

	if(registryService.firstSelectCardId){
		cardDbService.find(registryService.firstSelectCardId).then(function(results) {
        	$scope.select_1 = results[0].img;
    	});
	}
	else{
		configurationDbService.find('selectImage').then(function(results){
	        $scope.select_1 = results[0].value;
	    });
	}

	if(registryService.secondSelectCardId){
		cardDbService.find(registryService.secondSelectCardId).then(function(results) {
        	$scope.select_2 = results[0].img;
    	});
	}
	else{
		configurationDbService.find('selectImage').then(function(results){
	        $scope.select_2 = results[0].value;
	    });
	}

    $scope.levelNumber = $stateParams.levelNumber; 

    if(registryService.startLevel){
	    $scope.startLevel = registryService.startLevel;
	    $scope.card_1 = registryService.firstSelectCardId;
	    $scope.card_2 = registryService.secondSelectCardId;
    }

    configurationDbService.find('categoryEnabled').then(function(results){
        $scope.categoryEnabled = results[0].value === 'true' ? true : false;
    });

	tutorialService.showIfActive();
});