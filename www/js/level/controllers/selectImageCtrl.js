communicatorApp.controller('selectImageCtrl', function($scope, $stateParams, $ionicPopup, configurationDbService, cardDbService, 
		registryService, tutorialService) {

	$scope.select = {
		imgIdA: 0,
		imgSrcA: '',
        imgIdB: 0,
		imgSrcB: '',
		levelStarted: false
    };

    $scope.levelNumber = $stateParams.levelNumber; 

    if($stateParams.levelInfo){
    	$scope.levelInfo = '\'' + $stateParams.levelInfo + '\'';
    	$scope.select = JSON.parse(decodeURI($stateParams.levelInfo));

    	cardDbService.find($scope.select.imgIdA).then(function(results) {
	        $scope.select.imgSrcA = results[0].img;
	    });

	    cardDbService.find($scope.select.imgIdB).then(function(results) {
	        $scope.select.imgSrcB = results[0].img;
	    });
    }
    else{
    	$scope.levelInfo = '\'' + encodeURI(JSON.stringify($scope.select)) + '\'';
    }

    configurationDbService.find('categoryEnabled').then(function(results){
        $scope.categoryEnabled = results[0].value === 'true' ? true : false;
    });

    $scope.startLevel = function() {

        if ($scope.select.imgIdA === 0 || $scope.select.imgIdB === 0) {
            $ionicPopup.alert({
                title: "Advertencia",
                template: "Debe seleccionar dos imagenes"
            });
        } 
        else if($scope.select.imgIdA == $scope.select.imgIdB){
            $ionicPopup.alert({
                title: "Advertencia",
                template: "Debe seleccionar imagenes distintas"
            });
        }
        else {
            $scope.select.levelStarted = true;
        }
    };

	tutorialService.showIfActive();
});