communicatorApp.controller('dragAndDropCtrl', function($scope, $timeout, $stateParams, $ionicPopup, $ionicActionSheet,
	$ionicSideMenuDelegate, $ionicNavBarDelegate, $state, tutorialService, cardDbService, 
    configurationDbService, registryService) {

	configurationDbService.find('categoryEnabled').then(function(results){
        $scope.categoryEnabled = results[0].value === 'true' ? true : false;
    });

    var actionSheetUp = true;

	$ionicSideMenuDelegate.canDragContent(false);

	$scope.word = [{name:'quiero',src:'img/Quiero.jpg'}];

	if($stateParams.cardId){
		cardDbService.find($stateParams.cardId).then(function(results) {
	        $scope.image = [{name:'image', src: results[0].img}];
            registryService.pickedCardId = $stateParams.cardId;
	    });
	}
	else{
		$scope.image = [{name:'image', src:''}];
	}

    $scope.leftBox = [];
    $scope.rightBox = [];

    $scope.levelNumber = $stateParams.levelNumber;

    $scope.intervalFunction = function(){
        $timeout(function() {
        $scope.leftBox = [];
        $scope.word = [{name:'quiero',src:'img/Quiero.jpg'}];
        $scope.intervalFunction();
        }, 30000);
      };

    $scope.onDropWordSuccess=function(data,evt){
    	if(data.name == 'quiero'){
    		var index = $scope.word.indexOf(data);
			$scope.word.splice(index, 1);
    		$scope.leftBox.push(data);

            //executes interval function for WANT card
            $scope.intervalFunction();
    	}

        if($scope.leftBox.length == 1 && $scope.rightBox.length == 1){
            actionSheetUp = false;
        }
    };

    $scope.onDropImageSuccess=function(data,evt){
		if(data.name == 'image' && data.src !== ''){
			var index = $scope.image.indexOf(data);
			$scope.image.splice(index, 1);
    		$scope.rightBox.push(data);
    	}

        if($scope.leftBox.length == 1 && $scope.rightBox.length == 1){
            actionSheetUp = false;
        }
    };

    $scope.menuButtonPressed = function() {
        if (!actionSheetUp) {
            showActionSheet();
        }
    };

    var showActionSheet = function() {

		$scope.buttons= [
		     {text: 'Puntuar'}
		];
           
        $ionicActionSheet.show({
            buttons: $scope.buttons,
            cancelText: 'Cancelar',
            cancel: function() {
                actionSheetUp = false;
                $ionicNavBarDelegate.back();
            },
            buttonClicked: function(index) {
                registryService.pickedLevelNumber = 4;
                $state.go('app.patternLock');    
                return true;
            }
        });
        actionSheetUp = true;
    };

    $scope.$on('menuButtonPressed', $scope.menuButtonPressed);

    $scope.ask = function() {
        $ionicPopup.alert({
            title: 'Ayuda',
            template: 'Presione el signo "+" para seleccionar un pictograma y de este modo comenzar la interacción en este nivel. Luego de ello, debe arrastrar ambos pictogramas hacia la tira de intercambio que se encuentra en la parte inferior de la pantalla. Finalmente, para registrar el intercambio mantener presionada la tira.'
        });
    };

	tutorialService.showIfActive();
});