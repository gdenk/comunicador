communicatorApp.controller('basicRegistry2ReceiverCtrl', function($scope, $q, $ionicPopup, tutorialService, currentReceiverService, registryService) {

	var basicScoreValues = { true: 'withoutHelp', false: 'withHelp', 1: '15cm', 2: '30cm', 3: '60cm', 4: '1mt', 5: '3mts', 6: 'eoh'};
	
	$scope.registry = {
		receiver: currentReceiverService.receiver,
		reachReceiver: true,
		distanceToReceiver: 0
	};

	$scope.showInfo = {
		reachReceiver: false,
		distanceToReceiver: false
	};

	$scope.saveRegistry = function() {
		if ($scope.registry.receiver.internal) {
			$scope.goBack();
			return;
		}
		checkForDefaultScores().then(function(){
			$scope.registry.reachReceiver = basicScoreValues[$scope.registry.reachReceiver];
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
		if ($scope.registry.reachReceiver && ($scope.registry.distanceToReceiver > 0)) {
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
            template: 'En esta sección se registra la intercambio en función del desplazamiento de la persona respecto del receptor. Se registra entonces si la persona se desplaza o no hacia el receptor y la distancia a la que se encuentra el mismo.'
        });
    };

	tutorialService.showIfActive();


});