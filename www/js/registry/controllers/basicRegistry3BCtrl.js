communicatorApp.controller('basicRegistry3BCtrl', function($scope, $q, $ionicPopup, $location, tutorialService, currentReceiverService, registryService, cardDbService) {

	var basicScoreValues = { true: '+', false: '-', 1: 'favorite', 2: 'distractor'};

	var distances = { 1: '10cm', 2: '15cm', 3: '30cm', 4: '60cm', 5: '1mts', 6: '3mts', 7: '+3mts'};

	var date = new Date();
    var today =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear().toString().substr(2,2);

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		date: today,
		discriminationLevel: 0,
		correspondence: false,
		distanceToReceiver: 0,
		distanceToTerminal: 0,
		image: registryService.pickedCardId
	};

	cardDbService.find(registryService.pickedCardId).then(function(results) {
        $scope.card = results[0];
    });

	$scope.$on("$destroy", function() {
       var delegate = $ionicScrollDelegate.$getByHandle('resetScroll');
       delegate.forgetScrollPosition();
    });

	$scope.saveRegistry = function() {
	
		checkForDefaultScores().then(function(){
			$scope.registry.discriminationLevel = basicScoreValues[$scope.registry.discriminationLevel];
			$scope.registry.correspondence = basicScoreValues[$scope.registry.correspondence];
			$scope.registry.distanceToReceiver = distances[$scope.registry.distanceToReceiver];
			$scope.registry.distanceToTerminal = distances[$scope.registry.distanceToTerminal];
			registryService.saveRegistry($scope.registry);
			$scope.goBack();
		});
	};

	$scope.goBack = function() {
		$location.path("app");
        return;
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