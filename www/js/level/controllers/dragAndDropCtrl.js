communicatorApp.controller('dragAndDropCtrl', function($scope, $stateParams, $ionicPopup, 
	$ionicSideMenuDelegate, tutorialService, cardDbService, configurationDbService) {

	configurationDbService.find('categoryEnabled').then(function(results){
        $scope.categoryEnabled = results[0].value === 'true' ? true : false;
    });


	$ionicSideMenuDelegate.canDragContent(false);

	$scope.word = [{name:'quiero',src:'img/Quiero.jpg'}];

	if($stateParams.cardId){
		cardDbService.find($stateParams.cardId).then(function(results) {
	        $scope.image = [{name:'image', src: results[0].img}];
	    });
	}
	else{
		$scope.image = [{name:'image', src:''}];
	}

    $scope.leftBox = [];
    $scope.rightBox = [];

    $scope.levelNumber = $stateParams.levelNumber;

    $scope.onDropWordSuccess=function(data,evt){
    	if(data.name == 'quiero'){
    		var index = $scope.word.indexOf(data);
			$scope.word.splice(index, 1);
    		$scope.leftBox.push(data);
    	}
    };

    $scope.onDropImageSuccess=function(data,evt){
		if(data.name == 'image'){
			var index = $scope.image.indexOf(data);
			$scope.image.splice(index, 1);
    		$scope.rightBox.push(data);
    	}
    };
	    
	tutorialService.showIfActive();
});