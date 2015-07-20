communicatorApp.controller('mainStatisticsCtrl', function($scope, statisticService, levelDbService) {
    
    $scope.test = "";

    $scope.loaded = false;
    $scope.hasExchanges = false;
    $scope.exchanges = {};
    $scope.exchangeCountByReceiver = [];

    levelDbService.selectAll().then(function(levels){
        $scope.levels = levels;
        $scope.myLevel = levels[0];
    });



    $scope.showLevelStatistics = function() {
        //aca deberia mostrar el html de las estadisticas en cuestión
    };

    $scope.score = {
        withHelp: 'AT',
        withPartialHelp: 'AP',
        withoutHelp: '✓'
    };

    statisticService.exchanges().then(function(result) {
        if (Object.keys(result).length > 0) {
            $scope.hasExchanges = true;
            $scope.exchanges = result;
        }
        $scope.loaded = true;
    });

    statisticService.exchangeCountByReceiver().then(function(result) {
        $scope.exchangeCountByReceiver = result;
    });

});