communicatorApp.controller('basicRegistry4Ctrl', function($scope, $q, $ionicPopup, $location, 
	currentReceiverService, registryService, cardDbService) {

	var basicScoreValues = { 1: 'NA', 2: 'AT', 3: 'AP', 4: '+'};

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		setImage: '',
		setWant: '',
		exchangeStrip: '',
		markPictures: '',
		checkingCorrespondence: ''
	};

	$scope.saveRegistry = function() {
		$scope.registry.setImage = basicScoreValues[$scope.setImage];
		$scope.registry.setWant = basicScoreValues[$scope.setWant];
		$scope.registry.exchangeStrip = basicScoreValues[$scope.exchangeStrip];
		$scope.registry.markPictures = basicScoreValues[$scope.markPictures];
		$scope.registry.checkingCorrespondence = basicScoreValues[$scope.checkingCorrespondence];
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

});