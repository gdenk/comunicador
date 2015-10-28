communicatorApp.controller('selectImageCtrl', function($scope, $stateParams, $ionicPopup, configurationDbService, cardDbService, 
		registryService, tutorialService) {

	$scope.select = {
		imgIdA: 0,
		imgSrcA: '',
        imgIdB: 0,
		imgSrcB: '',
		levelStarted: false
    };

    $scope.levelNumber = $stateParams.levelNumber; 

    if($stateParams.levelInfo){
    	$scope.levelInfo = '\'' + $stateParams.levelInfo + '\'';
    	$scope.select = JSON.parse(decodeURI($stateParams.levelInfo));

    	cardDbService.find($scope.select.imgIdA).then(function(results) {
            if (Object.keys(results).length > 0) {
	           $scope.select.imgSrcA = results[0].img;
	        }
        });

	    cardDbService.find($scope.select.imgIdB).then(function(results) {
            if (Object.keys(results).length > 0) {
               $scope.select.imgSrcB = results[0].img;
            }
        });
    }
    else{
    	$scope.levelInfo = '\'' + encodeURI(JSON.stringify($scope.select)) + '\'';
    }

    configurationDbService.find('categoryEnabled').then(function(results){
        $scope.categoryEnabled = results[0].value === 'true' ? true : false;
    });

    $scope.startLevel = function() {

        if ($scope.select.imgIdA === 0 || $scope.select.imgIdB === 0) {
            $ionicPopup.alert({
                title: "Advertencia",
                template: "Debe seleccionar dos pictogramas para continuar."
            });
        } 
        else if($scope.select.imgIdA == $scope.select.imgIdB){
        $ionicPopup.show({
            title: 'Ha seleccionado dos pictogramas idénticos.<br>Para continuar presione &apos;Aceptar&apos; o bien, &apos;Cancelar&apos; para continuar modificándolos',
            scope: $scope,
            buttons: [
                { 
                    text: 'Cancelar',
                    onTap: function() {
                        $scope.select.levelStarted = false;
                    }
                },
                {
                    text: 'Aceptar',
                    type: 'button-positive',
                    onTap: function() {
                        $scope.select.levelStarted = true;
                    }
                }
            ]
        });
         
        }
        else {
            $scope.select.levelStarted = true;
        }
    };

    $scope.ask = function() {
        $ionicPopup.alert({
            title: 'Ayuda',
            template: 'Para agregar los pictogramas correspondientes a este nivel, se deben presionar los signos "+". Para comenzar con el intercambio, debe presionar a continuación, el tilde que se visualiza en la parte superior derecha de la pantalla. Por último deberá seleccionar el pictograma para registrar el intercambio y mantener presionado el mismo para realizar el registro propiamente dicho.'
        });
    };

	tutorialService.showIfActive();
});