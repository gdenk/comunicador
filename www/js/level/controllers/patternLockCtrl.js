communicatorApp.controller('patternLockCtrl', function($scope, $state, $ionicNavBarDelegate, $ionicPopup, tutorialService, receiverDbService, currentReceiverService, registryService) {
	var lock = new PatternLock("#lock", { 
		margin: 15,
		onDraw: validatePattern
	});

	function validatePattern (pattern) {
		receiverDbService.selectAll().then(function(receivers) {
			var matchingReceivers = receivers.filter(function(receiver) {
				return receiver.pattern === pattern;
			});

			switch(matchingReceivers.length){
				case 0: {
					lock.error();
					showWrongPassPopup();
					break;
				}
				case 1: {
					selectReceiver(matchingReceivers[0]);
					break;
				}
				default: {
					showConflictPopup(matchingReceivers);
				}
			}			
		});	
	}

	function showWrongPassPopup () {
     	var confirmPopup = $ionicPopup.confirm({
       		title: 'Contraseña incorrecta',
	       	template: '¿Desea intentarlo de nuevo?'
     	});

	    confirmPopup.then(function(response) {
	       	if(response) {
	        	lock.reset();
	       	} else {
				$ionicNavBarDelegate.back();
	       	}
     	});
	}

	function selectReceiver (receiver) {

		currentReceiverService.receiver = receiver;

		//TODO: Refactor: avoid this switch, changing step 1 view & controller's names.
		switch(registryService.pickedLevelNumber) {
   			 case 1:
        		$state.go(receiver.advanced == 'true'? 'app.advancedRegistry' : 'app.basicRegistry');
        	 break;
   		 	 case 2:
       	 		$state.go('app.basicRegistry2Receiver');
        	 break; 			 
		}
	}

	function showConflictPopup (conflictingReceivers) {
		$scope.conflictingReceivers = conflictingReceivers;
		$scope.radioInputs = {
			selectedReceiver: conflictingReceivers[0]
		};
     	var confirmPopup = $ionicPopup.show({
       		title: 'Multiples receptores encontrados',
	       	templateUrl: 'templates/level/selectReceiverPopup.html',
	       	scope: $scope,
	       	buttons: [
      			{ 
      				text: 'Cancelar',
      				onTap: function() {
     					$ionicNavBarDelegate.back();
      				}
      			},
  				{
        			text: 'Aceptar',
        			type: 'button-positive',
        			onTap: function() {
     					selectReceiver($scope.radioInputs.selectedReceiver);
        			}
  				}
    		]
     	});
	}

    $scope.ask = function() {
        $ionicPopup.alert({
            title: 'Ayuda',
            template: 'Debe ingresar el patrón de 3 puntos escogido al momento de registrarse. Si desea utilizar un receptor de la comunicación de prueba se deben unir los puntos 1-2-3 (primer linea horizontal). La puntuación del intercambio no quedará registrada en éste último caso.'
        });
    };

    tutorialService.showIfActive();
});