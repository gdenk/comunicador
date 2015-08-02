communicatorApp.controller('mainStatisticsCtrl', function($scope, statisticService, levelDbService) {

    $scope.loaded = false;
    $scope.hasExchanges = false;
    $scope.exchanges = {};
    $scope.exchangeCountByReceiver = [];

    levelDbService.selectAll().then(function(levels){
        $scope.levels = levels;
        $scope.myLevel = levels[0];
        
        }).then(function(){
        statisticService.exchangeCountByReceiver($scope.myLevel.levelNumber).then(function(result) {
        $scope.exchangeCountByReceiver = result;
        });
        
        }).then(function(){
        statisticService.exchanges($scope.myLevel.levelNumber).then(function(result) {
            if (Object.keys(result).length > 0) {
                $scope.hasExchanges = true;
                $scope.exchanges = result;
            }
            $scope.loaded = true;
        });

    });

    $scope.getLevelData = function(myLevel){

        if(myLevel.levelNumber == 2){
             statisticService.exchangeCountByReceiverForLevelSubleveled().then(function(result) {
                $scope.exchangeCountByReceiver = result;
             }); 
             statisticService.exchangesForLevelSubleveled($scope.myLevel.levelNumber).then(function(result) {
             if (Object.keys(result).length > 0) {
                $scope.hasExchanges = true;
                $scope.exchanges = result;
             }
             $scope.loaded = true;
             });
        }
        else{
            statisticService.exchangeCountByReceiver(myLevel.levelNumber).then(function(result) {
                $scope.exchangeCountByReceiver = result;
            });
            statisticService.exchanges($scope.myLevel.levelNumber).then(function(result) {
            if (Object.keys(result).length > 0) {
                $scope.hasExchanges = true;
                $scope.exchanges = result;
            }
            $scope.loaded = true;
            });
        }
    };   

    $scope.score = {
        withHelp: 'AT',
        withPartialHelp: 'AP',
        withoutHelp: '✓'
    };





});