communicatorApp.controller('basicRegistry2TerminalCtrl', function($scope, $q, $ionicPopup, tutorialService, currentReceiverService, registryService) {

	var basicScoreValues = { true: 'withoutHelp', false: 'withHelp', 1: '10cm', 2: '15cm', 3: '30cm', 4: '60cm', 5: '1mt', 6: '2mts', 7: '3mts', 8: 'gt3mt'};
	
	$scope.$on("$destroy", function() {
       var delegate = $ionicScrollDelegate.$getByHandle('resetScroll');
       delegate.forgetScrollPosition();
    });

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		reachTerminal: true,
		distanceToTerminal: 1
	};

	$scope.showInfo = {
		reachTerminal: false,
		distanceToTerminal: false
	};

	$scope.saveRegistry = function() {
		if ($scope.registry.receiver.internal) {
			$scope.goBack();
			return;
		}
			$scope.registry.reachTerminal = basicScoreValues[$scope.registry.reachTerminal];
			$scope.registry.distanceToTerminal = basicScoreValues[$scope.registry.distanceToTerminal];
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
            template: 'En esta sección se registra la intercambio en función del desplazamiento de la persona respecto del dispositivo. Se registra entonces si la persona se desplaza o no hacia el dispositivo y la distancia a la que se encuentra el mismo.'
        });
    };

	tutorialService.showIfActive();
});