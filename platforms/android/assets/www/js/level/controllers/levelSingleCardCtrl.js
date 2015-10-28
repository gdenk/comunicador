communicatorApp.controller('levelSingleCardCtrl', function($scope, $stateParams, $location, $ionicActionSheet, $ionicNavBarDelegate, $state, tutorialService, cardDbService, registryService) {

    var levelNumber = registryService.pickedLevelNumber;

    $scope.card = {
        id: $stateParams.id,
        title: '',
        img: ''
    };

    cardDbService.find($stateParams.id).then(function(results) {
        $scope.card = results[0];
    });

    if(levelNumber == 3 && $stateParams.levelInfo){

        var levelInfo = JSON.parse(decodeURI($stateParams.levelInfo));

        if(levelInfo.levelStarted === false){

            if($stateParams.select === 'A'){
                levelInfo.imgIdA = $scope.card.id;
            }
            else{
                levelInfo.imgIdB = $scope.card.id;
            }

            $location.path("app/selectImage/" + levelNumber + "/levelInfo/" + 
                encodeURI(JSON.stringify(levelInfo)));

            return;
        }
    }

    if(levelNumber == 4){
        $location.path("app/dragAndDrop/" + levelNumber + "/" + $stateParams.id);
        return;
    }

    var actionSheetUp = false;

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
                     {text: 'Puntuar: Nivel IIIA'},
                     {text: 'Puntuar: Nivel IIIB'}
                 ];
             break;
             case 31:
                 $scope.buttons= [
                     {text: 'Puntuar: Nivel IIIA'},
                     {text: 'Puntuar: Nivel IIIB'}
                 ];
             break;
             case 32:
                 $scope.buttons= [
                     {text: 'Puntuar: Nivel IIIA'},
                     {text: 'Puntuar: Nivel IIIB'}
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