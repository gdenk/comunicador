communicatorApp.controller('levelSingleCardCtrl', function($scope, $stateParams, $location, $ionicActionSheet, $ionicNavBarDelegate, $state, tutorialService, cardDbService, registryService) {

    var levelNumber = registryService.pickedLevelNumber;

    if(levelNumber == 3){

        if(!(registryService.firstSelectCardId && registryService.secondSelectCardId)){

            if(registryService.firstSelectCardId === 0){
                registryService.firstSelectCardId = $stateParams.id;
            }
            else if(registryService.secondSelectCardId === 0){
                registryService.secondSelectCardId = $stateParams.id;
            }

            if(registryService.firstSelectCardId && registryService.secondSelectCardId){
                registryService.startLevel = true;
            }

            $location.path("app/selectImage/" + levelNumber);
            return;
        }

        registryService.firstSelectCardId = 0;
        registryService.secondSelectCardId = 0;
        registryService.startLevel = false;
    }

    $scope.card = {
        id: $stateParams.id,
        title: '',
        img: ''
    };

    var actionSheetUp = false;

    cardDbService.find($stateParams.id).then(function(results) {
        $scope.card = results[0];
    });

    $scope.menuButtonPressed = function() {
        if (!actionSheetUp) {
            showActionSheet();
        }
    };

    var showActionSheet = function() {

        switch(levelNumber) {
             
             case 1:
                $scope.buttons= [
                     {text: 'Puntuar'}
                ];
             break;
             case 2:
                 $scope.buttons= [
                     {text: 'Puntuar: Distancia al receptor'},
                     {text: 'Puntuar: Distancia al dispositivo'}
                 ];
             break;
             case 21:
                 $scope.buttons= [
                     {text: 'Puntuar: Distancia al receptor'},
                     {text: 'Puntuar: Distancia al dispositivo'}
                 ];
             break;
             case 22:
                 $scope.buttons= [
                     {text: 'Puntuar: Distancia al receptor'},
                     {text: 'Puntuar: Distancia al dispositivo'}
                 ];
             break;
             case 3:
                 $scope.buttons= [
                     {text: 'Puntuar: Preferencia'},
                     {text: 'Puntuar: Preferencia y Distancias'}
                 ];
             break;
        }


        $ionicActionSheet.show({
            buttons: $scope.buttons,
            titleText: 'Tarjeta \''+ $scope.card.title +'\'',
            cancelText: 'Cancelar',
            cancel: function() {
                actionSheetUp = false;
                $ionicNavBarDelegate.back();
            },
            buttonClicked: function(index) {
                if (index === 0 || index ===1) {
                    registryService.pickedCardId = $scope.card.id;
                    if (registryService.pickedLevelNumber == 2){
                        if (index === 0){
                            registryService.pickedLevelNumber = 21;
                        }
                        if (index === 1){
                            registryService.pickedLevelNumber = 22;
                        }
                    }
                    if (registryService.pickedLevelNumber == 3){
                        if (index === 0){
                            registryService.pickedLevelNumber = 31;
                        }
                        if (index === 1){
                            registryService.pickedLevelNumber = 32;
                        }
                    }
                    $state.go('app.patternLock');
                    
                }
                return true;
            }
        });
        actionSheetUp = true;
    };

    $scope.$on('menuButtonPressed', $scope.menuButtonPressed);

    tutorialService.showIfActive();
});