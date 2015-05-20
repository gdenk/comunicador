communicatorApp.controller('registryLevel2Ctrl', function($scope, $q, $ionicPopup, tutorialService, currentReceiverService, registryService) {

	var basicScoreValues = { true: 'withoutHelp', false: 'withHelp' };
	
	$scope.registry = {
		receiver: currentReceiverService.receiver,
		reachTerminal: true,
		reachReceiver: true,
		distanceToTerminal: 0,
		distanceToReceiver: 0
	};

	$scope.showInfo = {
		reachTerminal: false,
		reachReceiver: false,
		distanceToTerminal: false,
		distanceToReceiver: false
	};

	$scope.saveRegistry = function() {
		if ($scope.registry.receiver.internal) {
			$scope.goBack();
			return;
		}
		checkForDefaultScores().then(function(){
			$scope.registry.reachTerminal = basicScoreValues[$scope.registry.reachTerminal];
			$scope.registry.reachReceiver = basicScoreValues[$scope.registry.reachReceiver];
			$scope.registry.distanceToTerminal = basicScoreValues[$scope.registry.distanceToTerminal];
			$scope.registry.distanceToReceiver = basicScoreValues[$scope.registry.distanceToReceiver];
			registryService.saveRegistry($scope.registry);
			$scope.goBack();
		});
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
		if ($scope.registry.reachTerminal && $scope.registry.reachReceiver && $scope.registry.distanceToTerminal && $scope.registry.distanceToReceiver) {
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

	tutorialService.showIfActive();
});