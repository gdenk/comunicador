communicatorApp.controller('basicRegistry4Ctrl', function($scope, $q, $ionicPopup, $location, 
	currentReceiverService, registryService, cardDbService) {

	var basicScoreValues = { 1: 'NA', 2: 'AT', 3: 'AP', 4: '+'};

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		setImage: 1,
		setWant: 1,
		exchangeStrip: 1,
		markPictures: 1,
		checkingCorrespondence: 1
	};

	$scope.saveRegistry = function() {
		if ($scope.registry.receiver.internal) {
			$scope.goBack();
			return;
		}

		$scope.registry.setImage = basicScoreValues[$scope.registry.setImage];
		$scope.registry.setWant = basicScoreValues[$scope.registry.setWant];
		$scope.registry.exchangeStrip = basicScoreValues[$scope.registry.exchangeStrip];
		$scope.registry.markPictures = basicScoreValues[$scope.registry.markPictures];
		$scope.registry.checkingCorrespondence = basicScoreValues[$scope.registry.checkingCorrespondence];
		registryService.saveRegistry($scope.registry);
		$scope.goBack();
	};

	$scope.goBack = function() {
		// this is to force a double "back"
	  	var backView = $scope.$viewHistory.views[$scope.$viewHistory.backView.backViewId];
	    $scope.$viewHistory.forcedNav = {
	        viewId:     backView.viewId,
	        navAction: 'moveBack',
	        navDirection: 'back'
	    };
	    backView.go();
	};

	$scope.toggleInfo = function(step) {
		$scope.showInfo[step] = !$scope.showInfo[step];
	};

	$scope.ask = function() {
        $ionicPopup.alert({
            title: 'Ayuda',
            template: 'Los valores para la puntuación en este nivel son: NA (no aplica), AT (ayuda total), AP (ayuda parcial) y "+" (chequeo de correspondencia).'
        });
    };

});