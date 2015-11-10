communicatorApp.controller('basicRegistry3BCtrl', function($scope, $q, $ionicPopup, $location, tutorialService, currentReceiverService, registryService, cardDbService) {

	var basicScoreValues = { true: '+', false: '-', 1: 'favorite', 2: 'distractor'};

	var distances = { 1: '10cm', 2: '15cm', 3: '30cm', 4: '60cm', 5: '1mts', 6: '3mts', 7: '+3mts'};

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		discriminationLevel: 0,
		correspondence: false,
		distanceToReceiver: 0,
		distanceToTerminal: 0
	};

	$scope.$on("$destroy", function() {
       var delegate = $ionicScrollDelegate.$getByHandle('resetScroll');
       delegate.forgetScrollPosition();
    });

	$scope.saveRegistry = function() {
		if ($scope.registry.receiver.internal) {
			$scope.goBack();
			return;
		}

		$scope.registry.discriminationLevel = basicScoreValues[$scope.registry.discriminationLevel];
		$scope.registry.correspondence = basicScoreValues[$scope.registry.correspondence];
		$scope.registry.distanceToReceiver = distances[$scope.registry.distanceToReceiver];
		$scope.registry.distanceToTerminal = distances[$scope.registry.distanceToTerminal];
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

	var checkForDefaultScores = function() {
		var deferred = $q.defer();
		if ($scope.registry.discriminationLevel > 0 && $scope.registry.distanceToReceiver > 0 && 
				$scope.registry.distanceToTerminal > 0) {
			$ionicPopup.confirm({
				title: "Advertencia",
				template: "Usted va a ingresar un registro con todos los pasos correctos. ¿Está seguro que desea hacer esto?"
			}).then(function(response){
				if (response) {
					deferred.resolve();
				} else {
					deferred.reject();
				}
			});
		} else {
			deferred.resolve();
		}
		return deferred.promise;
	};

	$scope.toggleInfo = function(step) {
		$scope.showInfo[step] = !$scope.showInfo[step];
	};

	$scope.ask = function() {
        $ionicPopup.alert({
            title: 'Ayuda',
            template: 'En esta sección se registra el intercambio en función del nivel de discriminación, comprobación de correspondencia, distancia al instructor y al dispositivo.'
        });
    };

	tutorialService.showIfActive();

});