communicatorApp.controller('levelSingleCardCtrl', function($scope, $stateParams, $ionicActionSheet, $ionicNavBarDelegate, $state, tutorialService, cardDbService, registryService) {
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

        switch(registryService.pickedLevelNumber) {
             
             case 1:
                $scope.buttons= [
                     {text: 'Puntuar'}
                ];
             break;
             case 2:
                 $scope.buttons= [
                     {text: 'Puntuar: Distancia al entrenador'},
                     {text: 'Puntuar: Distancia al dispositivo'}
                 ];
             break;
             case 21:
                 $scope.buttons= [
                     {text: 'Puntuar: Distancia al entrenador'},
                     {text: 'Puntuar: Distancia al dispositivo'}
                 ];
             break;
             case 22:
                 $scope.buttons= [
                     {text: 'Puntuar: Distancia al entrenador'},
                     {text: 'Puntuar: Distancia al dispositivo'}
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