communicatorApp.controller('basicRegistry3ACtrl', function($scope, $q, $ionicPopup, $location, tutorialService, currentReceiverService, registryService, cardDbService) {

	var basicScoreValues = { true: 'reactionNegative', false: 'reactionPositive', 1: 'favorite', 
	                         2: 'distractor'};

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		discriminationLevel: 0,
		reactionNegative: false
	};

	$scope.saveRegistry = function() {
		$scope.registry.discriminationLevel = basicScoreValues[$scope.registry.discriminationLevel];
		$scope.registry.reactionNegative = basicScoreValues[$scope.registry.reactionNegative];
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
		if ($scope.registry.discriminationLevel > 0) {
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