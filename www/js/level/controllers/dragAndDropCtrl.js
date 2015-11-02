communicatorApp.controller('dragAndDropCtrl', function($scope, $stateParams, $ionicPopup, $ionicActionSheet,
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
	    });
	}
	else{
		$scope.image = [{name:'image', src:''}];
	}

    $scope.leftBox = [];
    $scope.rightBox = [];

    $scope.levelNumber = $stateParams.levelNumber;

    $scope.onDropWordSuccess=function(data,evt){
    	if(data.name == 'quiero'){
    		var index = $scope.word.indexOf(data);
			$scope.word.splice(index, 1);
    		$scope.leftBox.push(data);
    	}

        if($scope.leftBox.length == 1 && $scope.rightBox.length == 1){
            actionSheetUp = false;
        }
    };

    $scope.onDropImageSuccess=function(data,evt){
		if(data.name == 'image'){
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
            template: 'Para agregar el pictograma correspondiente a este nivel, se debe presionar el signo "+". Arrastre ambos pictogramas hacia la tira de intercambio que se encuentra en la parte inferior de la pantalla. Finalmente, para registrar el intercambio mantener presionada la tira.'
        });
    };

	tutorialService.showIfActive();
});