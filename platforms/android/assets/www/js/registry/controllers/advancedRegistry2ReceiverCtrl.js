communicatorApp.controller('advancedRegistry2ReceiverCtrl', function($scope, $ionicScrollDelegate, $q, $ionicPopup, tutorialService, currentReceiverService, registryService) {

	var advancedRegistryScores = {true: 'withoutHelp', false: 'withHelp', 1: '15cm', 2: '30cm', 3: '60cm', 4: '1mt', 5: '3mts', 6: 'eoh', 7:'ne', 8:'gl', 9:'vc', 10:'sil', 11:'pnrdie', 12:'prdie', 13: 'risa'};
	
	$scope.$on("$destroy", function() {
       var delegate = $ionicScrollDelegate.$getByHandle('resetScroll');
       delegate.forgetScrollPosition();
    });

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		reachReceiver: '',
		distanceToReceiver: 1,
		eyeContact: false,
		facialExpression: false,
		oralOutput: 7
	};

	$scope.distancesList = [
        { text: "15cm", value: "1" },
        { text: "30cm", value: "2" },
        { text: "60cm", value: "3" },
        { text: "1mt", value: "4" },
        { text: "3mts", value: "5" },
        { text: "Fuera del campo visual", value: "6" }
    ];

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

			$scope.registry.distanceToReceiver = advancedRegistryScores[$scope.registry.distanceToReceiver];
			$scope.registry.eyeContact = advancedRegistryScores[$scope.registry.eyeContact];
			$scope.registry.facialExpression = advancedRegistryScores[$scope.registry.facialExpression];
			$scope.registry.oralOutput = advancedRegistryScores[$scope.registry.oralOutput];
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

	$scope.ask = function() {
        $ionicPopup.alert({
            title: 'Ayuda',
            template: 'En esta sección se registra la intercambio en función del desplazamiento de la persona respecto del receptor. Se registra entonces si la persona se desplaza o no hacia el receptor y la distancia a la que se encuentra el mismo. Recuerde completar todos los campos para registrar el intercambio.'
        });
    };

});