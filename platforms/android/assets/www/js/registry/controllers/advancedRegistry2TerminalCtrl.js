communicatorApp.controller('advancedRegistry2TerminalCtrl', function($scope, $q, $ionicPopup, tutorialService, currentReceiverService, registryService) {

	var advancedRegistryScores = {true: 'withoutHelp', false: 'withHelp', 1: '10cm', 2: '15cm', 3: '30cm', 4: '60cm', 5: '1mt', 6: '2mts', 7: '3mts', 8: 'gt3mt', 9:'ne', 10:'gl', 11:'vc', 12:'sil', 13:'pnrdie', 14:'prdie', 15:'risa'};
	
	$scope.$on("$destroy", function() {
       var delegate = $ionicScrollDelegate.$getByHandle('resetScroll');
       delegate.forgetScrollPosition();
    });

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		reachTerminal: '',
		distanceToTerminal: 0,
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
			$scope.registry.distanceToTerminal = advancedRegistryScores[$scope.registry.distanceToTerminal];
			$scope.registry.eyeContact = advancedRegistryScores[$scope.registry.eyeContact];
			$scope.registry.facialExpression = advancedRegistryScores[$scope.registry.facialExpression];
			$scope.registry.oralOutput = advancedRegistryScores[$scope.registry.oralOutput];
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
		if ($scope.registry.reachTerminal && $scope.registry.eyeContact && $scope.registry.facialExpression && ($scope.registry.distanceToTerminal > 0) && ($scope.registry.oralOutput > 0)) {
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

	$scope.ask = function() {
        $ionicPopup.alert({
            title: 'Ayuda',
            template: 'En esta sección se registra la intercambio en función del desplazamiento de la persona respecto del dispositivo. Se registra entonces si la persona se desplaza o no hacia el dispositivo y la distancia a la que se encuentra el mismo.'
        });
    };


});