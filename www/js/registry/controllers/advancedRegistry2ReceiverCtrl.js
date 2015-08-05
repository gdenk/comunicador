communicatorApp.controller('advancedRegistry2ReceiverCtrl', function($scope, $q, $ionicPopup, tutorialService, currentReceiverService, registryService) {

	var advancedRegistryScores = {true: 'withoutHelp', false: 'withHelp', 1: '15cm', 2: '30cm', 3: '60cm', 4: '1mt', 5: '3mts', 6: 'eoh', 7:'ne', 8:'gl', 9:'vc', 10:'sil', 11:'pnrdie', 12:'prdie', 13: 'risa'};
	
	$scope.registry = {
		receiver: currentReceiverService.receiver,
		reachReceiver: '',
		distanceToReceiver: 0,
		eyeContact: false,
		facialExpression: false,
		oralOutput: 0
	};

	$scope.changeScore = function(step, score) {
		$scope.registry[step] = score;
	};

	$scope.isScore = function(step, score) {
		return $scope.registry[step] === score;
	};

	$scope.saveRegistry = function() {
		if ($scope.registry.receiver.internal) {
			$scope.goBack();
			return;
		}
		checkForDefaultScores().then(function(){
			$scope.registry.distanceToReceiver = advancedRegistryScores[$scope.registry.distanceToReceiver];
			$scope.registry.eyeContact = advancedRegistryScores[$scope.registry.eyeContact];
			$scope.registry.facialExpression = advancedRegistryScores[$scope.registry.facialExpression];
			$scope.registry.oralOutput = advancedRegistryScores[$scope.registry.oralOutput];
			registryService.saveRegistry($scope.registry);
			$scope.goBack();
		});
	};

	var checkForDefaultScores = function() {
		var deferred = $q.defer();
		if ($scope.registry.reachReceiver && $scope.registry.eyeContact && $scope.registry.facialExpression && ($scope.registry.distanceToReceiver > 0) && ($scope.registry.oralOutput > 0)) {
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

	$scope.ask = function() {
        $ionicPopup.alert({
            title: 'Ayuda',
            template: 'En esta sección se registra la intercambio en función del desplazamiento de la persona respecto del entrenador. Se registra entonces si la persona se desplaza o no hacia el entrenador y la distancia a la que se encuentra el mismo.'
        });
    };

});