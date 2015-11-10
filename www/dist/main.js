// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var communicatorApp = angular.module('communicatorApp', ['ionic', 'validation', 'validation.rules', 'ngDraggable'])

.run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
        // Force a plugins object and mock insomnia so it won't cause errors if it's not present
        if (!window.plugins) {
            window.plugins = {
                insomnia: {
                    allowSleepAgain: function() {},
                    keepAwake: function() {}
                }
            };
        }

        document.addEventListener('menubutton', function() { $rootScope.$broadcast('menuButtonPressed'); }, false);
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/home/menu.html'
    })
    .state('content', {
        url: '/content',
        abstract: true,
        templateUrl: 'templates/home/content.html'
    })
    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home/home.html',
                controller: 'homeCtrl'
            }
        }
    })
    .state('tutorialHome', {
        url: '/tutorial',
        parent: 'app.home'
    })
    .state('app.statistics', {
        url: '/statistics',
        views: {
            'menuContent': {
                templateUrl: 'templates/statistic/mainStatistics.html',
                controller: 'mainStatisticsCtrl'
            }
        }
    })
    .state('app.levelCards', {
        url: '/levelCards/:levelNumber',
        views: {
            'menuContent': {
                templateUrl: 'templates/level/levelCards.html',
                controller: 'levelCardsCtrl'
            }
        }
    })
    .state('tutorialLevelCards', {
        url: '/tutorial',
        parent: 'app.levelCards'
    })
    .state('app.levelCategoryCards', {
        url: '/levelCards/:levelNumber/category/:category',
        views: {
            'menuContent': {
                templateUrl: 'templates/level/levelCards.html',
                controller: 'levelCardsCtrl'
            }
        }
    })
    .state('app.levelCategoryCards3', {
        url: '/levelCards/:levelNumber/category/:category/:select/levelInfo/:levelInfo',
        views: {
            'menuContent': {
                templateUrl: 'templates/level/levelCards.html',
                controller: 'levelCardsCtrl'
            }
        }
    })
    .state('app.levelCards3', {
        url: '/levelCards/:levelNumber/:select/levelInfo/:levelInfo',
        views: {
            'menuContent': {
                templateUrl: 'templates/level/levelCards.html',
                controller: 'levelCardsCtrl'
            }
        }
    })
    .state('tutorialLevelCategoryCards', {
        url: '/tutorial',
        parent: 'app.levelCategoryCards'
    })
    .state('app.categories', {
        url: '/categories/level/:levelNumber',
        views: {
            'menuContent': {
                templateUrl: 'templates/category/categories.html',
                controller: 'categoriesCtrl'
            }
        }
    })
    .state('app.categories3', {
        url: '/categories/level/:levelNumber/:select/levelInfo/:levelInfo',
        views: {
            'menuContent': {
                templateUrl: 'templates/category/categories.html',
                controller: 'categoriesCtrl'
            }
        }
    })
    .state('tutorialCategories', {
        url: '/tutorial',
        parent: 'app.categories'
    })
    .state('content.levelSingleCard', {
        url: '/levelSingleCard/:id/idN/:idN',
        views: {
            'content': {
                templateUrl: 'templates/level/levelSingleCard.html',
                controller: 'levelSingleCardCtrl'
            }
        }
    })
    .state('content.levelSingleCardLevelInfo', {
        url: '/levelSingleCard/:id/:select/levelInfo/:levelInfo',
        views: {
            'content': {
                templateUrl: 'templates/level/levelSingleCard.html',
                controller: 'levelSingleCardCtrl'
            }
        }
    })
    .state('tutorialLevelSingleCard', {
        url: '/tutorial',
        parent: 'content.levelSingleCard'
    })
    .state('app.selectImage', {
        url: '/selectImage/:levelNumber',
        views: {
            'menuContent': {
                templateUrl: 'templates/level/selectImage.html',
                controller: 'selectImageCtrl'
            }
        }
    })
    .state('app.selectImageLevelInfo', {
        url: '/selectImage/:levelNumber/levelInfo/:levelInfo',
        views: {
            'menuContent': {
                templateUrl: 'templates/level/selectImage.html',
                controller: 'selectImageCtrl'
            }
        }
    })
    .state('app.dragAndDrop', {
        url: '/dragAndDrop/:levelNumber',
        views: {
            'menuContent': {
                templateUrl: 'templates/level/dragAndDrop.html',
                controller: 'dragAndDropCtrl'
            }
        }
    })
    .state('app.dragAndDropSelect', {
        url: '/dragAndDrop/:levelNumber/:cardId',
        views: {
            'menuContent': {
                templateUrl: 'templates/level/dragAndDrop.html',
                controller: 'dragAndDropCtrl'
            }
        }
    })
    .state('app.patternLock', {
        url: '/patternLock',
        views: {
            'menuContent': {
                templateUrl: 'templates/level/patternLock.html',
                controller: 'patternLockCtrl'
            }
        }
    })
    .state('tutorialPatternLock', {
        url: '/tutorial',
        parent: 'app.patternLock'
    })
    .state('app.basicRegistry', {
        url: '/basicRegistry',
        views: {
            'menuContent': {
                templateUrl: 'templates/registry/basicRegistry.html',
                controller: 'basicRegistryCtrl'
            }
        }
    })
    .state('app.basicRegistry2Receiver', {
        url: '/basicRegistry2Receiver',
        views: {
            'menuContent': {
                templateUrl: 'templates/registry/basicRegistry2Receiver.html',
                controller: 'basicRegistry2ReceiverCtrl'
            }
        }
    })
    .state('app.advancedRegistry2Receiver', {
        url: '/advancedRegistry2Receiver',
        views: {
            'menuContent': {
                templateUrl: 'templates/registry/advancedRegistry2Receiver.html',
                controller: 'advancedRegistry2ReceiverCtrl'
            }
        }
    })
    .state('app.basicRegistry2Terminal', {
        url: '/basicRegistry2Terminal',
        views: {
            'menuContent': {
                templateUrl: 'templates/registry/basicRegistry2Terminal.html',
                controller: 'basicRegistry2TerminalCtrl'
            }
        }
    })
    .state('app.advancedRegistry2Terminal', {
        url: '/advancedRegistry2Terminal',
        views: {
            'menuContent': {
                templateUrl: 'templates/registry/advancedRegistry2Terminal.html',
                controller: 'advancedRegistry2TerminalCtrl'
            }
        }
    })
    .state('tutorialBasicRegistry', {
        url: '/tutorial',
        parent: 'app.basicRegistry',
    })
    .state('app.advancedRegistry', {
        url: '/advancedRegistry',
        views: {
            'menuContent': {
                templateUrl: 'templates/registry/advancedRegistry.html',
                controller: 'advancedRegistryCtrl'
            }
        }
    })
    .state('app.basicRegistry3A', {
        url: '/basicRegistry3A',
        views: {
            'menuContent': {
                templateUrl: 'templates/registry/basicRegistry3A.html',
                controller: 'basicRegistry3ACtrl'
            }
        }
    })
    .state('app.basicRegistry3B', {
        url: '/basicRegistry3B',
        views: {
            'menuContent': {
                templateUrl: 'templates/registry/basicRegistry3B.html',
                controller: 'basicRegistry3BCtrl'
            }
        }
    })
    .state('app.basicRegistry4', {
        url: '/basicRegistry4',
        views: {
            'menuContent': {
                templateUrl: 'templates/registry/basicRegistry4.html',
                controller: 'basicRegistry4Ctrl'
            }
        }
    })
    .state('app.cards', {
        url: '/cards',
        views: {
            'menuContent': {
                templateUrl: 'templates/card/cards.html',
                controller: 'cardsCtrl'
            }
        }
    })
    .state('app.singleCard', {
        url: '/singleCard/:id',
        views: {
            'menuContent': {
                templateUrl: 'templates/card/singleCard.html',
                controller: 'singleCardCtrl'
            }
        }
    })
    .state('app.receivers', {
        url: '/receivers',
        views: {
            'menuContent': {
                templateUrl: 'templates/receiver/receivers.html',
                controller: 'receiversCtrl'
            }
        }
    })
    .state('app.singleReceiver', {
        url: '/singleReceiver/:id',
        views: {
            'menuContent': {
                templateUrl: 'templates/receiver/singleReceiver.html',
                controller: 'singleReceiverCtrl'
            }
        }
    })
    .state('app.configuration', {
        url: '/configuration',
        views: {
            'menuContent': {
                templateUrl: 'templates/configuration/configuration.html'
            }
        }
    })
    .state('app.configurationCurrentUser', {
        url: '/configuration/user',
        views: {
            'menuContent': {
                templateUrl: 'templates/configuration/configurationCurrentUser.html',
                controller: 'configurationsCurrentUserCtrl'
            }
        }
    })
    .state('app.configurationSync', {
        url: '/configuration/sync',
        views: {
            'menuContent': {
                templateUrl: 'templates/configuration/configurationSync.html',
                controller: 'configurationSyncCtrl'
            }
        }
    })
    .state('app.configurationCategory', {
        url: '/configuration/category',
        views: {
            'menuContent': {
                templateUrl: 'templates/configuration/configurationCategory.html',
                controller: 'configurationCategory'
            }
        }
    })
    .state('app.configurationDeveloperTools', {
        url: '/configuration/developerTools',
        views: {
            'menuContent': {
                templateUrl: 'templates/configuration/configurationDeveloperTools.html',
                controller: 'configurationDeveloperToolsCtrl'
            }
        }
    })
    .state('app.configurationCredits', {
        url: '/configuration/credits',
        views: {
            'menuContent': {
                templateUrl: 'templates/configuration/configurationCredits.html'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
})


;
communicatorApp.controller('cardsCtrl', function($scope, $ionicPopup, cardDbService, listItemDeleteService) {
    $scope.cards = [];
    $scope.loaded = false;
    $scope.eraser = listItemDeleteService;
    $scope.redirectState = "app.singleCard";
    $scope.eraser.showDelete = false;
    
    cardDbService.selectAll().then(function(results) {
        $scope.cards = results;
        $scope.$parent.items = $scope.cards;
        $scope.loaded = true;
    });

    $scope.$on("delete", function(scope, card) {
        cardDbService.delete(card);
        $scope.cards.splice($scope.cards.indexOf(card), 1);
    });

    $scope.ask = function() {
        $ionicPopup.alert({
            title: 'Ayuda',
            template: 'Para agregar un pictograma se debe presionar el signo "+" de arriba a la derecha. <br> Para eliminar un pictograma se lo debe mantener presionado unos segundos y aparecerá un signo "-"" a su izquierda que permitirá eliminarlo.'
        });
    };

});
communicatorApp.controller('singleCardCtrl', function($scope, $stateParams, $ionicNavBarDelegate, 
    cardDbService, categoryDbService, imageUploaderService, popupService) {

    $scope.creating = !$stateParams.id;
    $scope.cameraIsEnabled = imageUploaderService.cameraIsEnabled;
    
    $scope.card = {
        title: '',
        img: '',
        enabled: true,
        categoryId: null
    };

    $scope.last = {
        title: '',
        img: '',
        enabled: true,
        categoryId: null
    };

    if (!$scope.creating) {
        cardDbService.find($stateParams.id).then(function(results) {
            $scope.card = results[0];
            $scope.last = jQuery.extend(true, {}, $scope.card);
            $scope.card.enabled = $scope.card.enabled === 'true' ? true : false;
        });
    }

    categoryDbService.selectEnabled().then(function(results) {
        $scope.categories = results;
    });

    $scope.goBack = function() {
        $ionicNavBarDelegate.back();
    };

    $scope.save = function() {

        if ($scope.creating) {
            cardDbService.insert($scope.card);
        } else {
            cardDbService.update($scope.card);
        }
        $scope.goBack();
    };

    $scope.uploadImage = function() {
        if (imageUploaderService.cameraIsEnabled) {
            popupService.show();
        } else {
            takePictureFromWebview();
        }
    };

    var takePictureFromWebview = function() {
        imageUploaderService.pictureFromDevice(updateCardImage);
    };

    var updateCardImage = function(newImageSrc) {
        $scope.card.img = newImageSrc;
        $scope.$apply();
    };

    $scope.equalItems = function(value,card) {
        return value.toLowerCase().replace(/\s+/g, '') === card.title.toLowerCase().replace(/\s+/g, '');
    };

    popupService.start($scope, updateCardImage);
});
communicatorApp.controller('categoriesCtrl', function($scope, $stateParams, categoryDbService, tutorialService) {
    
    categoryDbService.selectEnabled().then(function(results) {
        $scope.categories = results;
        $scope.levelNumber = $stateParams.levelNumber;
        $scope.levelInfo = '\'' + $stateParams.levelInfo + '\'';
	    $scope.select = '\'' + $stateParams.select + '\''; 

	    if($scope.select){
	    	 $scope.level3 = true;
	    }
	    else{
	    	$scope.level3 = false;
	    }
    });

	tutorialService.showIfActive();
});
communicatorApp.controller('deleteBarCtrl', function($scope, listItemDeleteService) {
    $scope.eraser = listItemDeleteService;
});
communicatorApp.directive('cmDeletegestures', function($ionicGesture, listItemDeleteService) {
    return {
        link : function(scope, elem, attrs) {
            $ionicGesture.on('hold', listItemDeleteService.showDeleteButton, elem);

            $ionicGesture.on('tap', function() {
                var model = scope[attrs.modeltodelete];
                if (model) {
                    listItemDeleteService.modelTap(model.id, scope.redirectState);
                }
            }, elem);
        }
    };
});
communicatorApp.directive('menuOnhold', function($ionicGesture) {
    return {
        link : function(scope, elem, attrs) {
            $ionicGesture.on('hold', scope.menuButtonPressed, elem);
        }
    };
});
communicatorApp.filter("objectToArray", function(){
    return function(obj) {
        var result = [];
        angular.forEach(obj, function(val, key) {
            result.push(val);
        });
        return result;
    };
});

communicatorApp.service('listItemDeleteService', function($rootScope, $timeout, $state) {
    var touchedDeleteButton = false;
    var selectedModelsToDelete = [];

    var eraser = {
        showConfirmAndHideAddButton: false,
        showDelete: false,
        showDeleteButton: function() {
            $timeout(function() {
                eraser.showDelete = true;
                touchedDeleteButton = false;
                selectedModelsToDelete = [];
            });
        },
        modelTap: function(id, redirectState) {
            $timeout(function() {
                if(eraser.showDelete || touchedDeleteButton){
                    if(touchedDeleteButton) {   
                        touchedDeleteButton = false;
                    } else {
                        eraser.showConfirmAndHideAddButton = false;
                        eraser.showDelete = false;
                        eraser.deleteCanceled();
                    }
                } else {
                    if (redirectState) {
                        $state.go(redirectState, {id: id});
                    }
                }
            });
        },
        selectToDelete: function(model) {
            touchedDeleteButton = true;
            if(selectedModelsToDelete.indexOf(model) === -1){
                model.selectedToDelete = true;
                selectedModelsToDelete.push(model);
                this.currentCSSClass(model);
                eraser.showConfirmAndHideAddButton = true;
            } else {
                eraser.itemDeleteCanceled(model);
                this.currentCSSClass(model);
            }
        },
        currentCSSClass: function(model) {
            return model.selectedToDelete ? "selected-to-delete" : "normal-item";
        },
        delete: function() {
            selectedModelsToDelete.forEach(function(model){
                $rootScope.$broadcast("delete", model);
            });
            eraser.showConfirmAndHideAddButton = false;
            eraser.showDelete = false;
        },
        deleteCanceled: function() {
            selectedModelsToDelete.forEach(function(model) {
                for (var i = selectedModelsToDelete.length - 1; i > -1; i--) {
                    eraser.itemDeleteCanceled(selectedModelsToDelete[i]);
                }
            });
            touchedDeleteButton = false;
        },
        itemDeleteCanceled: function(model){
            delete model.selectedToDelete;
            eraser.currentCSSClass(model);
            selectedModelsToDelete.splice(selectedModelsToDelete.indexOf(model), 1);
            if(selectedModelsToDelete.length === 0){
                eraser.showConfirmAndHideAddButton = false;
                this.showDelete = false;
            }
        }
    };
    return eraser;
});
communicatorApp.service('popupService', function($ionicPopup, imageUploaderService) {
    var popup, pictureCallback, scope;

    var popupEvent = function() {
        if (event.target.classList.contains('closeTutorial')) {
            if(popup) {
                popup.close();
            }
        }
    };

    var showUploadImagePopup = function() {
        return $ionicPopup.show({
            template: '¿Desea tomar una nueva foto o subir una foto de la galería?',
            title: 'Subir foto' + '&nbsp;<span class="closeTutorial">X</span>',
            scope: scope,
            buttons: [
                {
                    text: '<b>Tomar foto</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        imageUploaderService.takePicture(pictureCallback);
                    }
                },
                {
                    text: '<b>Abrir galería</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        imageUploaderService.pictureFromDevice(pictureCallback);
                    }
                }
            ]
        });
    };

    return {
        start: function($scope, callback) {
            scope = $scope;
            pictureCallback = callback;

            document.addEventListener('click', popupEvent, false);

            $scope.$on("$destroy", function() {
                console.log("destroy");
                document.removeEventListener('click', popupEvent);
            });
        },
        show: function() {
            popup = showUploadImagePopup();
        }
    };
});   

communicatorApp.service('uuidService', function() {
    return {
        generate: function() {
            var now = Date.now();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(repl) {
                var rnd = (now + Math.random()*16)%16 | 0;
                now = Math.floor(now/16);
                return (repl === 'x' ? rnd : (rnd&0x7|0x8)).toString(16);
            });
            return uuid;
        }
    };
});
communicatorApp.controller('configurationCategory', function($scope, $ionicNavBarDelegate, $ionicPopup, configurationDbService) {
    
    configurationDbService.find('categoryEnabled').then(function(results){
        $scope.categoryEnabled = results[0].value === 'true' ? true : false;
    });

    $scope.toggleEnabledCategory = function(enabled) {
        configurationDbService.changeCategoryEnabled(enabled);
    };

    $scope.save = function() {
        $ionicNavBarDelegate.back();
    };

    $scope.ask = function() {
        $ionicPopup.alert({
            title: 'Ayuda',
            template: 'Las categorías permiten agrupar los pictogramas para una busqueda más fácil.'
        });
    };
});
communicatorApp.controller('configurationDeveloperToolsCtrl', function($scope, $ionicNavBarDelegate, serverService, currentUserService) {
    $scope.url = {
        base: ''
    };
    $scope.userSet = true;
    $scope.hasSyncData = false;

    serverService.getBaseURL().then(function(baseURL) {
        $scope.url.base = baseURL;
    });

    currentUserService.get().then(function(user) {
        $scope.userSet = !!user.name;
    });

    serverService.getCurrentConfiguration().then(function(configuration) {
        $scope.hasSyncData = configuration.dataToSync !== undefined;
    });

    $scope.clear = function() {
        serverService.clearSyncData();
        $scope.hasSyncData = false;
    };

    $scope.save = function() {
        serverService.setBaseURL($scope.url.base);
        $ionicNavBarDelegate.back();
    };
});
communicatorApp.controller('configurationSyncCtrl', function($scope, $ionicNavBarDelegate, serverService, currentUserService) {
    $scope.lastSyncTime = '';
    $scope.autoSyncEnabled = false;
    $scope.shouldSync = true;

    serverService.getCurrentConfiguration().then(function(configuration) {
        $scope.lastSyncTime = configuration.lastSyncTime && new Date(configuration.lastSyncTime);
        $scope.autoSyncEnabled = configuration.autoSyncEnabled === 'true' ? true : false;
        $scope.shouldSync = configuration.dataToSync !== undefined;
    });

    $scope.toggleAutoSync = function(enabled) {
        serverService.setAutoSync(enabled);
    };

    $scope.sync = function() {
        serverService.sync().then(function(syncTime) {
            $scope.lastSyncTime = new Date(syncTime);
            $scope.shouldSync = false;
        });
    };

    $scope.save = function() {
        $ionicNavBarDelegate.back();
    };
});
communicatorApp.controller('configurationsCurrentUserCtrl', function($scope, $ionicNavBarDelegate, currentUserService) {
    $scope.user = {
        name: '',
        lastName: '',
        birthdate: ''
    };

    currentUserService.get().then(function(user) {
        $scope.user = user;
    });
    
    $scope.goBack = function() {
        $ionicNavBarDelegate.back();
    };

    $scope.save = function() {
        currentUserService.set($scope.user);
        $scope.goBack();
    };
});
communicatorApp.service('appService', function($q, configurationService) {
    var initKey = "app_initialized";
    return {
        uninitialized: function() {
            var self = this;
            var deferred = $q.defer();
            if (!localStorage.getItem(initKey)) {
                configurationService.get(initKey).then(function(value) {
                    if (value) {
                        deferred.reject();
                        localStorage.setItem(initKey, true);
                    } else {
                        deferred.resolve();
                        self.initialize();
                    }
                });
            } else {
                deferred.reject();
            }
            return deferred.promise;
        },
        initialize: function() {
            configurationService.set(initKey, true);
            localStorage.setItem(initKey, true);
        }
    };
});

communicatorApp.service('configurationService', function($q, configurationDbService) {
    var db = configurationDbService;
    var addToPartialResult = function(keyName) {
        var returnValue = {};
        return function(result) {
            returnValue[keyName] = result;
            return returnValue;
        };
    };

    return {
        find: db.find.bind(db),
        get: function(key) {
            var deferred = $q.defer();
            db.find(key).then(function(results) {
                var configuration = results.length > 0 ? results[0] : { value: undefined };
                deferred.resolve(configuration.value);
            });
            return deferred.promise;
        },
        getMultiple: function(keys) {
            var deferred = $q.defer();
            var promises = [];

            for(var keyName in keys) {
                promises.push(
                    this.get(keyName).then(addToPartialResult(keys[keyName]))
                );
            }

            $q.all(promises).then(function(results) {
                var mergedResult = results.reduce(function(memo, current) {
                    return angular.extend(memo, current);
                }, {});
                deferred.resolve(mergedResult);
            });

            return deferred.promise;
        },
        insert: db.insert.bind(db),
        set: function(key, value) {
            var configuration = { key: key, value: value };

            return db.find(key).then(function(results) {
                if (results.length) {
                    configuration.id = results[0].id;
                    return db.update(configuration);
                } else {
                    return db.insert(configuration);
                }
            });
        },
        setMultiple: function(configurations) {
            var deferred = $q.defer();
            var promises = [];           

            for(var key in configurations) {
                promises.push(
                    this.set(key, configurations[key])
                );
            }
 
            $q.all(promises).then(function(results) {
                deferred.resolve(results);
            });
            return deferred.promise;
        },
        delete: db.delete.bind(db),
        deleteByKey: function(key) {
            db.find(key).then(function(configurations) {
                configurations.forEach(function(configuration, index) {
                    db.delete(configuration);
                });
            });
        }
    };
});
communicatorApp.service('serverService', function($http, $q, configurationService) {
    return {
        timeout: 20,
        getBaseURL: function() {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (this.baseURL) {
                deferred.resolve(this.baseURL);
            } else {
                promise = configurationService.get("server_base_url"); 
            }
            return promise;
        },
        setBaseURL: function(baseURL) {
            if(baseURL !== undefined) {
                this.baseURL = baseURL;
                configurationService.set("server_base_url", baseURL);
            }
        },
        send: function(json) {
            var self = this;
            configurationService.get("autosync_enabled").then(function(autoSyncEnabled) {
                if (autoSyncEnabled === "true" && navigator.onLine) {
                    self.post({ value: json });
                } else {
                    configurationService.insert({ key: "data_to_sync", value: JSON.stringify(json) }).then(function() {
                        if (autoSyncEnabled === "true" && !navigator.onLine) {
                            self.sync();
                        }
                        if(self.getDataToSyncCount() >= 50) {
                            self.clearSyncData();
                        }
                    });
                }
            });
        },
        sync: function() {
            var self = this;
            var deferred = $q.defer();

            if (navigator.onLine) {
                this.timeout = 20;
                configurationService.find("data_to_sync").then(function(configurations) {
                    configurations.forEach(function(configuration, index) {
                        setTimeout(function() {
                            self.post(configuration);
                        }, index * 20);
                    });
                    if (configurations.length) {
                        deferred.resolve(self.syncTime());
                    }
                });
            } else {
                setTimeout(this.sync.bind(this), this.timeout);
                this._incrementTimeout();
                deferred.reject();
            }
            return deferred.promise;
        },
        post: function(configuration) {
            var self = this;
            var stringifiedData = typeof(configuration.value) === "string" ? configuration.value : JSON.stringify(configuration.value);

            this.getBaseURL().then(function(baseURL) {
                if (!baseURL) { return; }

                $.post(self._addProtocol(baseURL) + "/exchanges", { data: stringifiedData }).complete(function() {
                    if (configuration.id) {
                        configurationService.delete(configuration);
                    }
                });

                configurationService.set("server_last_sync_time", self.syncTime());
            });
        },
        syncTime: function() {
            return new Date().toString();
        },
        setAutoSync: function(value) {
            configurationService.set("autosync_enabled", !!value);
        },
        clearSyncData: function() {
            configurationService.deleteByKey("data_to_sync");
        },
        getDataToSyncCount: function() {
            var count = localStorage.getItem('data_to_sync_count');
            if (count === null) {
                configurationService.find("data_to_sync").then(function(configurations) {
                    count = configurations.length;
                    localStorage.setItem('data_to_sync_count', count);
                });
            }
            return count;
        },
        getCurrentConfiguration: function() {
            return configurationService.getMultiple({
                "server_last_sync_time": "lastSyncTime",
                "autosync_enabled": "autoSyncEnabled",
                "data_to_sync": "dataToSync"
            });
        },
        _incrementTimeout: function() {
            if (this.timeout < 20000) {
                this.timeout = this.timeout * 1.5;
            }
        },
        _addProtocol: function(url) {
            return url.search(/^(https?:\/\/)/) !== -1 ? url : "http://" + url;
        }
    };
});

// Note:
//  If you want a specific method for your service, you can add it here or you could use 'define()' like this:
//
//  return new QueryBuilderService('SomeTableName').define('myCustomSelect', function() {
//      return {
//          query: 'SELECT FROM ' + this.tableName + ' WHERE something = ?',
//          args: [some argument]
//      };
//  }).define(...);

communicatorApp.service('QueryBuilderService', function(dbService) {
    var QueryModel = function(model) {
        if (!model) {
            throw 'A model should be provided to the QueryBuilder instance';
        }
        this.model = model;
        this._columnNames = this._constructColumnNames();
    };

    QueryModel.prototype = {
        valueSlots: function(separator) {
            var slots = this._columnNames.map(function() {
                return "?";
            });
            return slots.join(separator || ', '); 
        }, 
        args: function(options) {
            var args = this._columnNames.map(function(property) {
                return this[property];
            }, this.model); 

            if (options && options.id) {
                args.push(this.model.id);
            }
            return args;
        },
        coulmnNames: function(separator) {
            return this._columnNames.join(separator || ', ');
        },
        _constructColumnNames: function() {
            // Avoid the id, if it exists
            var columnNames = Object.keys(this.model);
            var index = columnNames.indexOf('id');
            if (index !== -1) {
                columnNames.splice(index, 1);
            }
            return columnNames;
        }
    };

    var QueryBuilder = function(tableName) {
        if (!tableName) {
            throw 'A tableName should be provided to the QueryBuilder instance';
        }
        this.tableName = tableName;
    };
    QueryBuilder.prototype = {
        prop: function(record) {
            return this.tableName + '.' + record;
        },
        selectAll: function() {
            return this.execute({
                query: 'SELECT * FROM ' + this.tableName
            });
        },
        selectEnabled: function() {
            return this.execute({
               query: 'SELECT * FROM ' + this.tableName + ' WHERE enabled = ?',
                args: [true]
           });
        },
        find: function(id) {
            return this.execute({
                query: 'SELECT * FROM ' + this.tableName + ' WHERE id = ?',
                args: [id]
            });
        },
        delete: function(model) {
            return this.execute({
                query: 'DELETE FROM ' + this.tableName + ' WHERE id = ?',
                args: [model.id]
            });
        },
        insert: function(model) {
            var queryModel = new QueryModel(model);
            return this.execute({
                query: 'INSERT INTO ' + this.tableName + '(' + queryModel.coulmnNames() + ') VALUES (' + queryModel.valueSlots() + ')',
                args: queryModel.args()
            });
        },
        update: function(model) {
            var queryModel = new QueryModel(model);
            return this.execute({
                query: 'UPDATE ' + this.tableName + ' SET ' + queryModel.coulmnNames(' = ?, ') + ' = ? WHERE id = ?',
                args: queryModel.args({ id: true })
            });
        },
        define: function(name, transactionFunction) {
            this[name] = function() {
                return this.execute(transactionFunction.apply(this, arguments));
            };
            return this;
        },
        execute: function(transaction) {
            return dbService.executeTransaction(transaction);
        }
    };

    return QueryBuilder;
});
communicatorApp.service('TableMigrationService', function() {
    var TableMigration = function(tableName) {
        this.tableName = tableName;
        this.transactions = [];
        this.createTable();
    };

    TableMigration.prototype = {
        createTable: function () {
            this.transactions.push('CREATE TABLE IF NOT EXISTS ' + this.tableName + '(id INTEGER PRIMARY KEY ASC)');
            return this;
        },
        addColumn: function (column) {
            this.transactions.push('ALTER TABLE ' + this.tableName + ' ADD COLUMN ' + column);
            return this;
        },
        createIndex: function (indexType, column) {
            var indexName = this.tableName + column + indexType;
            this.transactions.push('CREATE ' + indexType + ' INDEX IF NOT EXISTS ' + indexName + ' ON ' + this.tableName + ' (' + column + ')');
            return this;
        },
        insertValues: function(columns, valuesArray) {
            var commaSeparatedColumns = columns.join(', ');

            valuesArray.forEach(function(values) {
                var commaSeparatedValues = values.join(', ');

                var query = 'INSERT INTO ' + this.tableName + '(' + commaSeparatedColumns + ') SELECT '+ commaSeparatedValues +
                            ' WHERE NOT EXISTS (SELECT 1 FROM ' + this.tableName + ' WHERE ';

                query += columns.map(function(column, index) {
                    return column + ' = ' + values[index];
                }).join(' and ');

                query += ')';
                
                this.transactions.push(query);
            }, this);
            
            return this;
        }
    };

    return TableMigration;
});

communicatorApp.service('cardDbService', function(QueryBuilderService) {
    return new QueryBuilderService('Card')
        .define("selectEnabled", function() {
            return {
                query: 'SELECT * FROM ' + this.tableName + ' WHERE enabled = ?',
                args: [true]
            };
        })
        .define("selectByCategory", function(categoryId) {
            return {
                query: 'SELECT * FROM ' + this.tableName + ' WHERE enabled = ? and categoryId = ?',
                args: [true, categoryId]
            };
        });

});
communicatorApp.service('categoryDbService', function(QueryBuilderService) {
    return new QueryBuilderService('Category')
        .define("selectEnabled", function() {
            return {
                query: 'SELECT * FROM ' + this.tableName + ' WHERE enabled = ?',
                args: [true]
            };
        });
});
communicatorApp.service('configurationDbService', function(QueryBuilderService) {
    return new QueryBuilderService("Configuration")
        .define("find", function(key) {
            return {
                query: 'SELECT * FROM ' + this.tableName + ' WHERE key = ?',
                args: [key]
            };
        })
        .define("changeCategoryEnabled", function(value) {
            return {
                query: 'UPDATE ' + this.tableName + ' SET value = ? WHERE key = \'categoryEnabled\'',
                args: [value]
            };
        });
});
communicatorApp.service('dbMigrationsService', function(TableMigrationService) {
    return [
        new TableMigrationService('Card')
            .addColumn('title TEXT')
            .addColumn('img TEXT')
            .addColumn('categoryId INTEGER')
            .addColumn('enabled BOOLEAN'),

        new TableMigrationService('Category')
            .addColumn('title TEXT')
            .addColumn('img TEXT')
            .addColumn('enabled BOOLEAN'),

        new TableMigrationService('Receiver')
            .addColumn('uuid TEXT')
            .addColumn('name TEXT')
            .addColumn('lastName TEXT')
            .addColumn('avatar TEXT')
            .addColumn('pattern TEXT')
            .addColumn('advanced BOOLEAN')
            .addColumn('internal BOOLEAN DEFAULT 0')
            .addColumn('relationshipId INTEGER')
            .addColumn('relationshipName TEXT'),
        
        new TableMigrationService('Level')
            .addColumn('levelNumber INTEGER')
            .addColumn('title TEXT')
            .addColumn('description TEXT')
            .addColumn('initDate TEXT')
            .addColumn('enabled BOOLEAN'),
            
        new TableMigrationService('Exchange')
            .addColumn('receiverId INTEGER')
            .addColumn('userId INTEGER')
            .addColumn('date TEXT'),

        new TableMigrationService('ExchangeByCard')
            .addColumn('cardId INTEGER')
            .addColumn('cardExtraId INTEGER')
            .addColumn('exchangeId INTEGER'),

        new TableMigrationService('ExchangeByLevel')
            .addColumn('levelId INTEGER')
            .addColumn('exchangeId INTEGER'),

        new TableMigrationService('ScoreByExchange')
            .addColumn('exchangeId INTEGER')
            .addColumn('scoreId INTEGER')
            .addColumn('stepId INTEGER'),

        new TableMigrationService('Step')
            .addColumn('name TEXT')
            .addColumn('level INTEGER'),

        new TableMigrationService('Score')
            .addColumn('name TEXT'),

        new TableMigrationService('Configuration')
            .addColumn('key TEXT')
            .addColumn('value TEXT'),

        new TableMigrationService('Relationship')
            .addColumn('name TEXT')
            .addColumn('advancedByDefault BOOLEAN')
            .addColumn('hasCustomName BOOLEAN')
    ];
});
communicatorApp.service('dbSeedsService', function(TableMigrationService, uuidService) {
    return [
        new TableMigrationService('Card') 
            .insertValues(['id', 'title', 'enabled', 'img', 'categoryId'], [
                [1, "'Carne'",  '"true"', "'img/pictogramas/Alimentos/Carne.jpg'", 1],
                [2, "'Gaseosa'",  '"true"', "'img/pictogramas/Alimentos/Gaseosa.png'", 1],
                [3, "'Leche'",  '"true"', "'img/pictogramas/Alimentos/Leche.jpg'", 1],
                [4, "'Cocodrilo'",  '"true"', "'img/pictogramas/Animales/cocodrilo.jpg'", 2],
                [5, "'Gato'",  '"true"', "'img/pictogramas/Animales/gato.jpg'", 2],  
                [6, "'Perro'",  '"true"', "'img/pictogramas/Animales/perro.jpg'", 2],
                [7, "'Heladera'",  '"true"', "'img/pictogramas/Casa/Heladera.jpg'", 3],
                [8, "'Sillon'",  '"true"', "'img/pictogramas/Casa/sillon.jpg'", 3],         
                [9, "'Televisor'",  '"true"', "'img/pictogramas/Casa/tv.jpg'", 3],
                [10, "'Pizarrón'",  '"true"', "'img/pictogramas/Escuela/Pizarron.jpg'", 4],  
                [11, "'Lápiz'",  '"true"', "'img/pictogramas/Escuela/lapiz.png'", 4],  
                [12, "'Mochila'",  '"true"', "'img/pictogramas/Escuela/mochila.jpg'", 4],  
                [13, "'Maestro'",  '"true"', "'img/pictogramas/Familia/maestro.jpg'", 5],  
                [14, "'Mamá'",  '"true"', "'img/pictogramas/Familia/mama.png'", 5], 
                [15, "'Papá'",  '"true"', "'img/pictogramas/Familia/papa.jpg'", 5], 
                [16, "'Ducha'",  '"true"', "'img/pictogramas/Higuiene/Ducha.jpg'", 6],
                [17, "'Lavar manos'",  '"true"', "'img/pictogramas/Higuiene/lavar manos.jpg'", 6],
                [18, "'Sonarse la nariz'",  '"true"', "'img/pictogramas/Higuiene/sonarse la nariz.png'", 6],
                [19, "'Auto'",  '"true"', "'img/pictogramas/Juguetes/Auto.png'", 7],
                [20, "'Cartas'",  '"true"', "'img/pictogramas/Juguetes/Cartas.png'", 7],
                [21, "'Pelota'",  '"true"', "'img/pictogramas/Juguetes/Pelota.png'", 7],
                [22, "'Casa'",  '"true"', "'img/pictogramas/Lugares/Casa.png'", 8],  
                [23, "'Parada'",  '"true"', "'img/pictogramas/Lugares/Parada.jpg'", 8],
                [24, "'Hospital'",  '"true"', "'img/pictogramas/Lugares/hospital.png'", 8],
                [25, "'Computadora'",  '"true"', "'img/pictogramas/Oficina/computadora.jpg'", 9], 
                [26, "'Escritorio'",  '"true"', "'img/pictogramas/Oficina/escritorio.jpg'", 9], 
                [27, "'Silla'",  '"true"', "'img/pictogramas/Oficina/silla.jpg'", 9], 
                [28, "'Colectivo'",  '"true"', "'img/pictogramas/Transporte/Colectivo.jpg'", 10],    
                [29, "'Taxi'",  '"true"', "'img/pictogramas/Transporte/Taxi.gif'", 10], 
                [30, "'Tren'",  '"true"', "'img/pictogramas/Transporte/tren.jpg'", 10],  
                [31, "'Bufanda'",  '"true"', "'img/pictogramas/Vestimenta/Bufanda.jpg'", 11],
                [32, "'Medias'",  '"true"', "'img/pictogramas/Vestimenta/medias.jpg'", 11],
                [33, "'Pantalones'",  '"true"', "'img/pictogramas/Vestimenta/pantalones.jpg'", 11],   
                [34, "'Besar'",  '"true"', "'img/pictogramas/Verbos/Besar.jpg'", 12],
                [35, "'Correr'",  '"true"', "'img/pictogramas/Verbos/Correr.jpg'", 12],  
                [36, "'Saltar'",  '"true"', "'img/pictogramas/Verbos/Saltar.jpg'", 12]    
            ]),

        new TableMigrationService('Category')
            .insertValues(['id', 'title', 'enabled', 'img'], [
                [1, "'Alimentos'",  '"true"', "'img/Alimentos.jpg'"],
                [2, "'Animales'",  '"true"', "'img/Animales.jpg'"],
                [3, "'Casa'",  '"true"', "'img/Casa.jpg'"],
                [4, "'Escuela'",  '"true"', "'img/Escuela.jpg'"],
                [5, "'Familia'",  '"true"', "'img/Familia.jpg'"],
                [6, "'Higiene'",  '"true"', "'img/Higiene.jpg'"],
                [7, "'Juguetes'",  '"true"', "'img/Juguetes.jpg'"],
                [8, "'Lugares'",  '"true"', "'img/Lugares.jpg'"],
                [9, "'Oficina'",  '"true"', "'img/Oficina.jpg'"],
                [10, "'Transporte'",  '"true"', "'img/Transporte.jpg'"],
                [11, "'Vestimenta'",  '"true"', "'img/Vestimenta.jpg'"],
                [12, "'Verbos'",  '"true"', "'img/Verbos.jpg'"]
            ]),

        new TableMigrationService('Receiver')
            .insertValues(['uuid', 'name', 'lastName', 'pattern', 'internal'], [
                ["'" + uuidService.generate() + "'", "'Usuario de'", "'prueba'", "'123'", 1]
            ]),

        new TableMigrationService('Level')
            .insertValues(['levelNumber', 'title', 'description', 'enabled'], [
            	[1, "'Cómo comunicarse'", "'Al ver un objeto muy preferido la persona recogerá el celular con una imagen del objeto, alcanzará al receptor comunicativo y dejará el dispositivo con la imagen en la mano de este.'" , '"true"'],
                [2, '"Distancia y persistencia"', "'Utilizando todavía una sola imagen a la vez, la persona aprende a generalizar esta nueva habilidad utilizándola en diferentes lugares, con diferentes personas y a lo largo de diversas distancias.'", '"true"'],
                [3, '"Discriminar imágenes"', "'Las personas aprenden a seleccionar de entre dos imágenes para pedir sus objetos o actividades favoritas.'", '"true"'],
                [4, '"Estructura oración"', "'Las personas aprenden a construir oraciones simples en una “tira-frase”, utilizando una imagen de “quiero” seguida de una imagen del elemento que está pidiendo en ese momento.'", '"true"'],
                [5, '"Responder preguntas"', "'Las personas aprenden a usar el comunicador para responder a la pregunta: ¿Qué deseas?'", '"false"'],
                [6, '"Comentar"', "''", '"false"']
            ]),
            
        new TableMigrationService('Step')
            .insertValues(['name', 'level'], [
                ['"pick"', 1],
                ['"reach"', 1],
                ['"drop"', 1],
                ['"reachReceiver"',2],
                ['"distanceToReceiver"',2],
                ['"reachTerminal"',2],
                ['"distanceToTerminal"',2],
                ['"eyeContact"',2],
                ['"facialExpression"',2],
                ['"oralOutput"',2],
                ['"discriminationLevel"',3],
                ['"reactionNegative"',3],
                ['"correspondence"',3],
                ['"setImage"',4],
                ['"setWant"',4],
                ['"exchangeStrip"',4],
                ['"markPictures"',4],
                ['"checkingCorrespondence"',4]
            ]),

        new TableMigrationService('Score')
            .insertValues(['name'], [
                ['"withHelp"'],
                ['"withPartialHelp"'],
                ['"withoutHelp"'],
                ['"15cm"'],
                ['"30cm"'],
                ['"60cm"'],
                ['"1mt"'],
                ['"3mts"'],
                ['"eoh"'],
                ['"10cm"'],
                ['"2mts"'],
                ['"gt3mts"'],
                ['"ne"'],
                ['"gl"'],
                ['"vc"'],
                ['"sil"'],
                ['"pnrdie"'],
                ['"prdie"'],
                ['"risa"'],
                ['"reactionNegative"'],
                ['"reactionPositive"'],
                ['"favorite"'],
                ['"distractor"'],
                ['"+"'],
                ['"-"'],
                ['"1mts"'],
                ['"+3mts"'],
                ['"NA"'],
                ['"AT"'],
                ['"AP"']
            ]),

        new TableMigrationService('Configuration')
            .insertValues(['key', 'value'], [
                ['"categoryEnabled"', '"false"']
            ]),

        new TableMigrationService('Relationship')
            .insertValues(['name', 'advancedByDefault', 'hasCustomName'], [
                ['"Padre"', '"false"', '"false"'],
                ['"Madre"', '"false"', '"false"'],
                ['"Hermano"', '"false"', '"false"'],
                ['"Terapeuta"', '"true"', '"false"'],
                ['"Otro"', '"false"', '"true"']
            ])
    ];

});
communicatorApp.service('dbService', function($q, dbMigrationsService, dbSeedsService) {
    var dbService = {};

    var db = window.openDatabase('comunicatorDB', '1.0', 'comunicator database', 2*1024*1024);

    var dbOnSuccess = function(tx, results) { };

    var dbOnError = function(tx, error) {
        console.log('DB ERROR! \nThe following transaction failed: ', error);
        throw(error);
    };

    var dbSetup = {
        migrations: dbMigrationsService,
        seeds: dbSeedsService,
        eachTransaction: function(fn) {
            var runFn = function(dbService) {
                dbService.transactions.forEach(fn);
            };
            this.migrations.forEach(runFn);
            this.seeds.forEach(runFn);
        }
    };

    var schema = {
        key: "app_schema_exists",
        exists: function() {
            return !!localStorage.getItem(this.key);
        },
        created: function() {
            localStorage.setItem(this.key, true);
        }
    };

    // Transactions
    dbService.executeTransaction = function(transaction) {
        // start a promise
        var deferred = $q.defer();

        // get all transaction args
        var query = transaction.query || '';
        var isInsertQuery = query.indexOf('INSERT') >= 0;
        var args = transaction.args || [];
        var success = function(tx, results) {
            var dbSet = parseResults(results, isInsertQuery);
            deferred.resolve(dbSet);
            dbOnSuccess(tx, dbSet);
        };
        var error = function(tx, error) {
            deferred.reject(error);
            dbOnError(tx, error);
        };

        // execute transaction
        db.transaction(function(tx) {
            tx.executeSql(query, args, success, error);
        });

        return deferred.promise;
    };

    var parseResults = function(results, isInsertQuery) {
        if (isInsertQuery) {
            return results.insertId;
        }

        var set = [];
        for (var i = 0; i < results.rows.length; i++) {
            var item = {};
            // copy is necessary to avoid readonly objects getting passed around
            angular.copy(results.rows.item(i), item);
            set.push(item);
        }
        return set;
    };

    // Run setup
    if (!schema.exists()) {
        dbSetup.eachTransaction(function(transaction) {
            db.transaction(function(tx) {
                tx.executeSql(transaction);
            }); 
        });
        schema.created();
    }

    return dbService;
});
communicatorApp.service('exchangeByCardDbService', function(QueryBuilderService) {
    return new QueryBuilderService('ExchangeByCard');
});
communicatorApp.service('exchangeByLevelDbService', function(QueryBuilderService) {
    return new QueryBuilderService('ExchangeByLevel');
});
communicatorApp.service('exchangeDbService', function(QueryBuilderService) {
    return new QueryBuilderService('Exchange').define('getLastExchange', function() {
    	return {
    		query: 'SELECT * FROM '+ this.tableName +' ORDER BY datetime(date) DESC Limit 1'
    	};
    });
});
communicatorApp.service('levelDbService', function(QueryBuilderService) {
    return new QueryBuilderService('Level');
});
communicatorApp.service('receiverDbService', function(QueryBuilderService) {
    return new QueryBuilderService('Receiver')
        .define("notInternal", function() {
            return {
                query: "SELECT *, (name || ' ' || lastName) as fullName  FROM " + this.tableName + " WHERE internal = ?",
                args: [0]
            };
        });
});


communicatorApp.service('relationshipDbService', function(QueryBuilderService) {
    return new QueryBuilderService('Relationship');
});


communicatorApp.service('scoreByExchangeDbService', function(QueryBuilderService) {
    return new QueryBuilderService('ScoreByExchange').define('getLastScoresByExchange', function(exchangeId) {
    	return {
    		query: 'SELECT * FROM ' + this.tableName + ' WHERE exchangeId = ?',
    		args: [exchangeId]
    	};
    });
});
communicatorApp.service('scoreDbService', function(QueryBuilderService) {
    return new QueryBuilderService('Score');
});
communicatorApp.service('stepDbService', function(QueryBuilderService) {
    return new QueryBuilderService('Step');
});
communicatorApp.controller('homeCtrl', function($scope, $ionicPopup, $state, $stateParams, tutorialService, 
        levelDbService, appService, configurationDbService) {
    
    configurationDbService.find('categoryEnabled').then(function(results){
        $scope.categoryEnabled = results[0].value === 'true' ? true : false;
    });

    levelDbService.selectAll().then(function(results) {
        $scope.levels = results;
        var lastLevel = 0;
        var lastDate = $scope.levels[0].initDate;
        for (var i = 0; i < $scope.levels.length; i++) {
            if ($scope.levels[i].initDate > lastDate){
                lastLevel = i;
            }
        }
        $scope.levels[lastLevel].selected = true;
        $scope.selectedLevel = $scope.levels[lastLevel];
    });

    $scope.selectLevel = function(level) {

        if ($scope.selectedLevel.id === level.id) {
            level.selected = !level.selected;
        } else {
            if (level.enabled === "true") {
                $scope.selectedLevel.selected = false;
                level.selected = true;
                $scope.selectedLevel = level;
            } else {
                $ionicPopup.alert({
                    title: 'Próximamente',
                    template: 'El nivel seleccionado no se encuentra disponible actualmente'
                });
            }
        }
    };

    appService.uninitialized().then(function() {
        $state.transitionTo('tutorialHome').then(function() {
            tutorialService.showIfActive();
        });
    }, function() {
        tutorialService.showIfActive();
    });
});

communicatorApp.service('imageUploaderService', function() {
    var cameraIsEnabled = !!navigator.camera;
    var dataToBase64 = function(file, callback) {
        var reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    };

    var webView = {
        hiddenFileInpuId: "-hidden-file-input",
        takePicture: function(success, error) {
            var fileInput = document.getElementById(webView.hiddenFileInpuId) || webView.createHiddenFileInput();
            fileInput.onchange = webView.onFileInputChangeEvent(success);
            fileInput.click();
        },
        onFileInputChangeEvent: function(callback) {
            return function() {
                var file = this.files[0];
                if (file) {
                    dataToBase64(file, callback);
                }
            };
        },
        createHiddenFileInput: function() {
            var fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.id = webView.hiddenFileInpuId;
            fileInput.style.visibility = "hidden";
            document.body.appendChild(fileInput);
            return fileInput;
        }
    };

    var device = {
        takePicture: function(success, error) {
            device._getPicture("FILE_URI", "CAMERA", success, error);
        },
        pictureFromDevice: function(success, error) {
            device._getPicture("DATA_URL", "PHOTOLIBRARY", function(file) {
                success("data:image/jpeg;base64," + file);
            }, error);
        },
        _getPicture: function(destinationType, sourceType, success, error) {
            navigator.camera.getPicture(success, error, {
                destinationType: Camera.DestinationType[destinationType],
                sourceType: Camera.PictureSourceType[sourceType],
                encodingType: Camera.EncodingType.JPEG,
                correctOrientation: true,
                saveToPhotoAlbum: true
            });
        }
    };

    return {
    	defaultSrc       : 'img/ionic.png',
        cameraIsEnabled  : cameraIsEnabled,
    	takePicture      : cameraIsEnabled ? device.takePicture : webView.takePicture,
        pictureFromDevice: cameraIsEnabled ? device.pictureFromDevice : webView.takePicture
    };
});
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
            registryService.pickedCardId = $stateParams.cardId;
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
            template: 'Para agregar el pictograma correspondiente a este nivel, se debe presionar el signo "+". Arrastre ambos pictogramas hacia la tira de intercambio que se encuentra en la parte inferior de la pantalla. Finalmente, para registrar el intercambio mantener presionada la tira.'
        });
    };

	tutorialService.showIfActive();
});
communicatorApp.controller('levelCardsCtrl', function($scope, $stateParams, tutorialService, cardDbService, registryService) {
    registryService.pickedLevelNumber = parseInt($stateParams.levelNumber, 10);


    if($stateParams.category){
    	cardDbService.selectByCategory($stateParams.category).then(function(results) {
	        $scope.cards = results;
	    });
    }
    else{
	   	cardDbService.selectEnabled().then(function(results) {
	        $scope.cards = results;
	    });
    }

    $scope.levelNumber = $stateParams.levelNumber;
	$scope.card = $stateParams.card;
	$scope.levelInfo = '\'' + $stateParams.levelInfo + '\'';
	$scope.select = '\'' + $stateParams.select + '\'';

    tutorialService.showIfActive();
});
communicatorApp.controller('levelSingleCardCtrl', function($scope, $stateParams, $location, $ionicActionSheet, $ionicNavBarDelegate, $state, tutorialService, cardDbService, registryService) {

    var levelNumber = registryService.pickedLevelNumber;

    $scope.card = {
        id: $stateParams.id,
        title: '',
        img: ''
    };

    $scope.card2 = {
        id: $stateParams.idN,
        title: '',
        img: ''
    };


    cardDbService.find($stateParams.id).then(function(results) {
        $scope.card = results[0];
    });

    cardDbService.find($stateParams.idN).then(function(results) {
        $scope.card2 = results[0];
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
                        registryService.notPickedCardId = $scope.card2.id;
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

		switch(registryService.pickedLevelNumber) {
   			 case 1:
        		$state.go(receiver.advanced == 'true'? 'app.advancedRegistry' : 'app.basicRegistry');
        	 break;
   		 	 case 21:
       	 		$state.go(receiver.advanced == 'true'? 'app.advancedRegistry2Receiver' : 'app.basicRegistry2Receiver');
        	 break; 
        	 case 22:
       	 		$state.go(receiver.advanced == 'true'? 'app.advancedRegistry2Terminal' : 'app.basicRegistry2Terminal');
        	 break;
        	 case 31:
       	 		$state.go('app.basicRegistry3A');
        	 break; 
        	 case 32:
       	 		$state.go('app.basicRegistry3B');
        	 break;
        	 case 4:
       	 		$state.go('app.basicRegistry4');
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
communicatorApp.controller('receiverPatternEditCtrl', function($scope, $state, $ionicNavBarDelegate, $ionicPopup, receiverDbService, currentReceiverService) {
	
	$scope.lock = {};
	$scope.tempPattern = '';
	$scope.patternError = false;

	$scope.$on('modal.shown', function() {
		$scope.lock = new PatternLock("#lock", { 
			margin: 15,
			onDraw: validatePattern
		});
	});

	$scope.closeModal = function() {
		$scope.patternModal.hide();
	};

	$scope.save = function () {
		if (!$scope.patternError) {
			if ($scope.tempPattern) {
				$scope.receiver.pattern = $scope.tempPattern;
			}
			$scope.closeModal();
		}
	};

	function validatePattern (pattern) {
		$scope.tempPattern = pattern;
		if (pattern.length >= 3) {
			hideShortPatternError();
		} else {
			showShortPatternError();
		}
	}

	function hideShortPatternError () {
		$scope.patternError = false;	
		$scope.$apply();	
	}

	function showShortPatternError () {
		$scope.lock.error();
		$scope.patternError = true;	
		$scope.$apply();
	}
});
communicatorApp.controller('receiversCtrl', function($scope, $state, $timeout, $ionicPopup, receiverDbService, listItemDeleteService) {
    $scope.loaded = false;
    $scope.receivers = [];
    $scope.eraser = listItemDeleteService;
    $scope.redirectState = "app.singleReceiver";
    $scope.eraser.showDelete = false;

    receiverDbService.notInternal().then(function(results) {
        $scope.receivers = results;
        $scope.loaded = true;
    });

    $scope.$on("delete", function(scope, card) {
        receiverDbService.delete(card);
        $scope.receivers.splice($scope.receivers.indexOf(card), 1);
    });

    $scope.ask = function() {
        $ionicPopup.alert({
            title: 'Ayuda',
            template: 'Para agregar un receptor se debe presionar el signo + de arriba a la derecha. <br> Para eliminar un receptor se lo debe mantener presionado unos segundos y aparecerá un signo - a su izquierda que permitirá eliminarlo.'
        });
    };

});

communicatorApp.controller('singleReceiverCtrl', function($scope, $stateParams, $state, $ionicNavBarDelegate, $ionicModal, receiverDbService, relationshipDbService, imageUploaderService, uuidService, popupService) {
    $scope.creating = !$stateParams.id;
    $scope.cameraIsEnabled = imageUploaderService.cameraIsEnabled;

    $scope.receiver = {
        name: '',
        lastName: '',
        relationshipId: 0,
        avatar: '',
        advanced: false,
        pattern: ''
    };

    relationshipDbService.selectAll().then(function(relationships){
        $scope.relationships = relationships;
    });

    if (!$scope.creating) {
        receiverDbService.find($stateParams.id).then(function(results) {
            $scope.receiver = results[0];
            $scope.receiver.advanced = $scope.receiver.advanced === 'true' ? true : false;
            $scope.receiver.avatar = $scope.receiver.avatar;
            $scope.checkIfHasCustomName();
        });
    }

    $scope.uploadImage = function() {
    if (imageUploaderService.cameraIsEnabled) {
            popupService.show();
        } else {
           takePictureFromWebview();
        }
    };

    var takePictureFromWebview = function() {
        imageUploaderService.pictureFromDevice(updateReceiverAvatar);
    };

    var updateReceiverAvatar = function(newImageSrc) {
        $scope.receiver.avatar = newImageSrc;
        $scope.$apply();
    };

    $ionicModal.fromTemplateUrl('templates/receiver/receiverPatternEdit.html', {
        scope: $scope,
        animation: 'slide-in-right',
        backdropClickToClose: true
    }).then(function(modal) {
        $scope.patternModal = modal;
    });

    popupService.start($scope, updateReceiverAvatar);

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        if ($scope.patternModal) {
            $scope.patternModal.remove();
        }
    });

    $scope.editPattern = function() {
        $scope.patternModal.show();
    };

    $scope.save = function() {
        if ($scope.creating) {
            $scope.receiver.uuid = uuidService.generate();
            receiverDbService.insert($scope.receiver);
        } else {
            receiverDbService.update($scope.receiver);
        }
        $ionicNavBarDelegate.back();
    };

    $scope.checkIfAdvancedByDefault = function() {
        var relationship = getRelationshipById($scope.receiver.relationshipId);
        $scope.receiver.advanced = relationship.advancedByDefault === 'true';
    };

    $scope.checkIfHasCustomName = function() {
        var relationship = getRelationshipById($scope.receiver.relationshipId);
        $scope.showRelationshipName = relationship && relationship.hasCustomName === 'true';
    };

    var getRelationshipById = function(relationshipId) {
        var matchedRelationships = $scope.relationships.filter(function(relationship){
            return relationship.id === relationshipId;
        });
        return matchedRelationships.length ? matchedRelationships[0] : undefined;
    };
});

communicatorApp.service('currentReceiverService', function() {
	var currentReceiverService = {
		receiver: {}
	};
	return currentReceiverService;
});
communicatorApp.controller('advancedRegistry2ReceiverCtrl', function($scope, $ionicScrollDelegate, $q, $ionicPopup, tutorialService, currentReceiverService, registryService) {

	var advancedRegistryScores = {true: 'withoutHelp', false: 'withHelp', 1: '15cm', 2: '30cm', 3: '60cm', 4: '1mt', 5: '3mts', 6: 'eoh', 7:'ne', 8:'gl', 9:'vc', 10:'sil', 11:'pnrdie', 12:'prdie', 13: 'risa'};
	
	$scope.$on("$destroy", function() {
       var delegate = $ionicScrollDelegate.$getByHandle('resetScroll');
       delegate.forgetScrollPosition();
    });

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		reachReceiver: '',
		distanceToReceiver: 0,
		eyeContact: false,
		facialExpression: false,
		oralOutput: 0
	};


	$scope.changeScore = function(step, score) {
		$scope.registry[step] = score;
	};

	$scope.isScore = function(step, score) {
		return $scope.registry[step] === score;
	};

	$scope.saveRegistry = function() {
		if ($scope.registry.receiver.internal) {
			$scope.goBack();
			return;
		}
		checkForDefaultScores().then(function(){
			$scope.registry.distanceToReceiver = advancedRegistryScores[$scope.registry.distanceToReceiver];
			$scope.registry.eyeContact = advancedRegistryScores[$scope.registry.eyeContact];
			$scope.registry.facialExpression = advancedRegistryScores[$scope.registry.facialExpression];
			$scope.registry.oralOutput = advancedRegistryScores[$scope.registry.oralOutput];
			registryService.saveRegistry($scope.registry);
			$scope.goBack();
		});
	};

	var checkForDefaultScores = function() {
		var deferred = $q.defer();
		if ($scope.registry.reachReceiver && $scope.registry.eyeContact && $scope.registry.facialExpression && ($scope.registry.distanceToReceiver > 0) && ($scope.registry.oralOutput > 0)) {
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

	$scope.goBack = function() {
		// this is to force a double "back"
	  	var backView = $scope.$viewHistory.views[$scope.$viewHistory.backView.backViewId];
	    $scope.$viewHistory.forcedNav = {
	        viewId:     backView.viewId,
	        navAction: 'moveBack',
	        navDirection: 'back'
	    };
	    backView.go();
	};

	$scope.ask = function() {
        $ionicPopup.alert({
            title: 'Ayuda',
            template: 'En esta sección se registra la intercambio en función del desplazamiento de la persona respecto del receptor. Se registra entonces si la persona se desplaza o no hacia el receptor y la distancia a la que se encuentra el mismo.'
        });
    };

});
communicatorApp.controller('advancedRegistry2TerminalCtrl', function($scope, $q, $ionicPopup, tutorialService, currentReceiverService, registryService) {

	var advancedRegistryScores = {true: 'withoutHelp', false: 'withHelp', 1: '10cm', 2: '15cm', 3: '30cm', 4: '60cm', 5: '1mt', 6: '2mts', 7: '3mts', 8: 'gt3mt', 9:'ne', 10:'gl', 11:'vc', 12:'sil', 13:'pnrdie', 14:'prdie', 15:'risa'};
	
	$scope.$on("$destroy", function() {
       var delegate = $ionicScrollDelegate.$getByHandle('resetScroll');
       delegate.forgetScrollPosition();
    });

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		reachTerminal: '',
		distanceToTerminal: 0,
		eyeContact: false,
		facialExpression: false,
		oralOutput: 0
	};

	$scope.changeScore = function(step, score) {
		$scope.registry[step] = score;
	};

	$scope.isScore = function(step, score) {
		return $scope.registry[step] === score;
	};

	$scope.saveRegistry = function() {
		if ($scope.registry.receiver.internal) {
			$scope.goBack();
			return;
		}
		checkForDefaultScores().then(function(){
			$scope.registry.distanceToTerminal = advancedRegistryScores[$scope.registry.distanceToTerminal];
			$scope.registry.eyeContact = advancedRegistryScores[$scope.registry.eyeContact];
			$scope.registry.facialExpression = advancedRegistryScores[$scope.registry.facialExpression];
			$scope.registry.oralOutput = advancedRegistryScores[$scope.registry.oralOutput];
			registryService.saveRegistry($scope.registry);
			$scope.goBack();
		});
	};

	$scope.goBack = function() {
		// this is to force a double "back"
	  	var backView = $scope.$viewHistory.views[$scope.$viewHistory.backView.backViewId];
	    $scope.$viewHistory.forcedNav = {
	        viewId:     backView.viewId,
	        navAction: 'moveBack',
	        navDirection: 'back'
	    };
	    backView.go();
	};

	var checkForDefaultScores = function() {
		var deferred = $q.defer();
		if ($scope.registry.reachTerminal && $scope.registry.eyeContact && $scope.registry.facialExpression && ($scope.registry.distanceToTerminal > 0) && ($scope.registry.oralOutput > 0)) {
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

	$scope.ask = function() {
        $ionicPopup.alert({
            title: 'Ayuda',
            template: 'En esta sección se registra la intercambio en función del desplazamiento de la persona respecto del dispositivo. Se registra entonces si la persona se desplaza o no hacia el dispositivo y la distancia a la que se encuentra el mismo.'
        });
    };


});
communicatorApp.controller('advancedRegistryCtrl', function($scope, currentReceiverService, registryService) {

	var advancedRegistryScores = ['withoutHelp', 'withPartialHelp', 'withHelp'];

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		pick: '',
		reach: '',
		drop: ''
	};

	$scope.changeScore = function(step, score) {
		$scope.registry[step] = score;
	};

	$scope.isScore = function(step, score) {
		return $scope.registry[step] === score;
	};

	$scope.saveRegistry = function() {
		registryService.saveRegistry($scope.registry);
		$scope.goBack();
	};

	$scope.goBack = function() {
		// this is to force a double "back"
	  	var backView = $scope.$viewHistory.views[$scope.$viewHistory.backView.backViewId];
	    $scope.$viewHistory.forcedNav = {
	        viewId:     backView.viewId,
	        navAction: 'moveBack',
	        navDirection: 'back'
	    };
	    backView.go();
	};
});
communicatorApp.controller('basicRegistry2ReceiverCtrl', function($scope, $q, $ionicPopup, tutorialService, currentReceiverService, registryService) {

	var basicScoreValues = { true: 'withoutHelp', false: 'withHelp', 1: '15cm', 2: '30cm', 3: '60cm', 4: '1mt', 5: '3mts', 6: 'eoh'};
	
	$scope.$on("$destroy", function() {
       var delegate = $ionicScrollDelegate.$getByHandle('resetScroll');
       delegate.forgetScrollPosition();
    });

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		reachReceiver: true,
		distanceToReceiver: 0
	};

	$scope.showInfo = {
		reachReceiver: false,
		distanceToReceiver: false
	};

	$scope.saveRegistry = function() {
		if ($scope.registry.receiver.internal) {
			$scope.goBack();
			return;
		}
		checkForDefaultScores().then(function(){
			$scope.registry.reachReceiver = basicScoreValues[$scope.registry.reachReceiver];
			$scope.registry.distanceToReceiver = basicScoreValues[$scope.registry.distanceToReceiver];
			registryService.saveRegistry($scope.registry);
			$scope.goBack();
		});
	};

	$scope.goBack = function() {
		// this is to force a double "back"
	  	var backView = $scope.$viewHistory.views[$scope.$viewHistory.backView.backViewId];
	    $scope.$viewHistory.forcedNav = {
	        viewId:     backView.viewId,
	        navAction: 'moveBack',
	        navDirection: 'back'
	    };
	    backView.go();
	};

	var checkForDefaultScores = function() {
		var deferred = $q.defer();
		if ($scope.registry.reachReceiver && ($scope.registry.distanceToReceiver > 0)) {
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
communicatorApp.controller('basicRegistry2TerminalCtrl', function($scope, $q, $ionicPopup, tutorialService, currentReceiverService, registryService) {

	var basicScoreValues = { true: 'withoutHelp', false: 'withHelp', 1: '10cm', 2: '15cm', 3: '30cm', 4: '60cm', 5: '1mt', 6: '2mts', 7: '3mts', 8: 'gt3mt'};
	
	$scope.$on("$destroy", function() {
       var delegate = $ionicScrollDelegate.$getByHandle('resetScroll');
       delegate.forgetScrollPosition();
    });

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		reachTerminal: true,
		distanceToTerminal: 0
	};

	$scope.showInfo = {
		reachTerminal: false,
		distanceToTerminal: false
	};

	$scope.saveRegistry = function() {
		if ($scope.registry.receiver.internal) {
			$scope.goBack();
			return;
		}
		checkForDefaultScores().then(function(){
			$scope.registry.reachTerminal = basicScoreValues[$scope.registry.reachTerminal];
			$scope.registry.distanceToTerminal = basicScoreValues[$scope.registry.distanceToTerminal];
			registryService.saveRegistry($scope.registry);
			$scope.goBack();
		});
	};

	$scope.goBack = function() {
		// this is to force a double "back"
	  	var backView = $scope.$viewHistory.views[$scope.$viewHistory.backView.backViewId];
	    $scope.$viewHistory.forcedNav = {
	        viewId:     backView.viewId,
	        navAction: 'moveBack',
	        navDirection: 'back'
	    };
	    backView.go();
	};

	var checkForDefaultScores = function() {
		var deferred = $q.defer();
		if ($scope.registry.reachTerminal && ($scope.registry.distanceToTerminal > 0)) {
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
            template: 'En esta sección se registra la intercambio en función del desplazamiento de la persona respecto del dispositivo. Se registra entonces si la persona se desplaza o no hacia el dispositivo y la distancia a la que se encuentra el mismo.'
        });
    };

	tutorialService.showIfActive();
});
communicatorApp.controller('basicRegistry3ACtrl', function($scope, $q, $ionicPopup, $location, tutorialService, currentReceiverService, registryService, cardDbService) {

	var basicScoreValues = { true: 'reactionNegative', false: 'reactionPositive', 1: 'favorite', 
	                         2: 'distractor'};

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		discriminationLevel: 0,
		reactionNegative: false
	};

	$scope.saveRegistry = function() {
		$scope.registry.discriminationLevel = basicScoreValues[$scope.registry.discriminationLevel];
		$scope.registry.reactionNegative = basicScoreValues[$scope.registry.reactionNegative];
		registryService.saveRegistry($scope.registry);
		$scope.goBack();
	};

	$scope.goBack = function() {
		// this is to force a double "back"
	  	var backView = $scope.$viewHistory.views[$scope.$viewHistory.backView.backViewId];
	    $scope.$viewHistory.forcedNav = {
	        viewId:     backView.viewId,
	        navAction: 'moveBack',
	        navDirection: 'back'
	    };
	    backView.go();
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
            template: 'En esta sección se registra el intercambio en función del nivel de discriminación y de la reacción de la persona.'
        });
    };

	tutorialService.showIfActive();

});
communicatorApp.controller('basicRegistry3BCtrl', function($scope, $q, $ionicPopup, $location, tutorialService, currentReceiverService, registryService, cardDbService) {

	var basicScoreValues = { true: '+', false: '-', 1: 'favorite', 2: 'distractor'};

	var distances = { 1: '10cm', 2: '15cm', 3: '30cm', 4: '60cm', 5: '1mts', 6: '3mts', 7: '+3mts'};

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		discriminationLevel: 0,
		correspondence: false,
		distanceToReceiver: 0,
		distanceToTerminal: 0
	};

	$scope.$on("$destroy", function() {
       var delegate = $ionicScrollDelegate.$getByHandle('resetScroll');
       delegate.forgetScrollPosition();
    });

	$scope.saveRegistry = function() {
		$scope.registry.discriminationLevel = basicScoreValues[$scope.registry.discriminationLevel];
		$scope.registry.correspondence = basicScoreValues[$scope.registry.correspondence];
		$scope.registry.distanceToReceiver = distances[$scope.registry.distanceToReceiver];
		$scope.registry.distanceToTerminal = distances[$scope.registry.distanceToTerminal];
		registryService.saveRegistry($scope.registry);
		$scope.goBack();
	};

	$scope.goBack = function() {
		// this is to force a double "back"
	  	var backView = $scope.$viewHistory.views[$scope.$viewHistory.backView.backViewId];
	    $scope.$viewHistory.forcedNav = {
	        viewId:     backView.viewId,
	        navAction: 'moveBack',
	        navDirection: 'back'
	    };
	    backView.go();
	};

	var checkForDefaultScores = function() {
		var deferred = $q.defer();
		if ($scope.registry.discriminationLevel > 0 && $scope.registry.distanceToReceiver > 0 && 
				$scope.registry.distanceToTerminal > 0) {
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
            template: 'En esta sección se registra el intercambio en función del nivel de discriminación, comprobación de correspondencia, distancia al instructor y al dispositivo.'
        });
    };

	tutorialService.showIfActive();

});
communicatorApp.controller('basicRegistry4Ctrl', function($scope, $q, $ionicPopup, $location, 
	currentReceiverService, registryService, cardDbService) {

	var basicScoreValues = { 1: 'NA', 2: 'AT', 3: 'AP', 4: '+'};

	$scope.registry = {
		receiver: currentReceiverService.receiver,
		setImage: '',
		setWant: '',
		exchangeStrip: '',
		markPictures: '',
		checkingCorrespondence: ''
	};

	$scope.saveRegistry = function() {
		$scope.registry.setImage = basicScoreValues[$scope.registry.setImage];
		$scope.registry.setWant = basicScoreValues[$scope.registry.setWant];
		$scope.registry.exchangeStrip = basicScoreValues[$scope.registry.exchangeStrip];
		$scope.registry.markPictures = basicScoreValues[$scope.registry.markPictures];
		$scope.registry.checkingCorrespondence = basicScoreValues[$scope.registry.checkingCorrespondence];
		registryService.saveRegistry($scope.registry);
		$scope.goBack();
	};


	$scope.goBack = function() {
		// this is to force a double "back"
	  	var backView = $scope.$viewHistory.views[$scope.$viewHistory.backView.backViewId];
	    $scope.$viewHistory.forcedNav = {
	        viewId:     backView.viewId,
	        navAction: 'moveBack',
	        navDirection: 'back'
	    };
	    backView.go();
	};

	$scope.toggleInfo = function(step) {
		$scope.showInfo[step] = !$scope.showInfo[step];
	};

});
communicatorApp.controller('basicRegistryCtrl', function($scope, $q, $ionicPopup, tutorialService, currentReceiverService, registryService) {

	var basicScoreValues = { true: 'withoutHelp', false: 'withHelp' };
	
	$scope.registry = {
		receiver: currentReceiverService.receiver,
		pick: true,
		reach: true,
		drop: true
	};

	$scope.showInfo = {
		pick: false,
		reach: false,
		drop: false
	};

	$scope.saveRegistry = function() {
		if ($scope.registry.receiver.internal) {
			$scope.goBack();
			return;
		}
		checkForDefaultScores().then(function(){
			$scope.registry.pick = basicScoreValues[$scope.registry.pick];
			$scope.registry.reach = basicScoreValues[$scope.registry.reach];
			$scope.registry.drop = basicScoreValues[$scope.registry.drop];
			registryService.saveRegistry($scope.registry);
			$scope.goBack();
		});
	};

	$scope.goBack = function() {
		// this is to force a double "back"
	  	var backView = $scope.$viewHistory.views[$scope.$viewHistory.backView.backViewId];
	    $scope.$viewHistory.forcedNav = {
	        viewId:     backView.viewId,
	        navAction: 'moveBack',
	        navDirection: 'back'
	    };
	    backView.go();
	};

	var checkForDefaultScores = function() {
		var deferred = $q.defer();
		if ($scope.registry.pick && $scope.registry.reach && $scope.registry.drop) {
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

	tutorialService.showIfActive();
});
communicatorApp.service('registryServerService', function($q, currentUserService, cardDbService, relationshipDbService, serverService){
	var registryServerService = {};

	var user = {},
		card = {},
		receiver = {},
		relationshipName = '',
		level = 0,
		registry = {};

	registryServerService.sendExchangeToServer = function(registryInfo, levelNumber, cardId) {
		level = levelNumber;
		card.id = cardId;
		registry = registryInfo;
		receiver = registryInfo.receiver;

		getData().then(function(results) {
			user = results[0];
			card = results[1][0];
			relationshipName = results[2];
			delete registry.receiver;
			serverService.send(makeExchangePackage());
		});
	};

	function getData () {
		var promises = [];
		promises.push(currentUserService.get());
		promises.push(cardDbService.find(card.id));
		promises.push(getRelationshipName());
		return $q.all(promises);
	}

	function getRelationshipName () {
		var deferred = $q.defer();
		if (receiver.relationshipName) {
			deferred.resolve(receiver.relationshipName);
		} else {
			relationshipDbService.find(receiver.relationshipId).then(function(relationship){
				deferred.resolve(relationship.name);
			});
		}
		return deferred.promise;
	}

	function makeExchangePackage () {
		return {
			date: (new Date()).toISOString(),
			user: {
				id: user.uuid,
				name: user.name,
				last_name: user.lastName,
				birthdate: user.birthdate
			},
			card: {
				name: card.title
			},
			receiver: {
				id: receiver.uuid,
				name: receiver.name,
				last_name: receiver.lastName,
				relationship: relationshipName
			},
			level: level,
			registry: registry
		};
	}

	return registryServerService;
});
communicatorApp.service('registryService', function($q, exchangeDbService, stepDbService, scoreDbService, scoreByExchangeDbService, exchangeByCardDbService, exchangeByLevelDbService, registryServerService, levelDbService) {
	var registryService = {};

	registryService.pickedCardId = 0;

	registryService.notPickedCardId = 0;

	registryService.pickedLevelNumber = 1;
	
	var steps = [];
	stepDbService.selectAll().then(function(results) {
		steps = results;
	});

	var scores = [];
	scoreDbService.selectAll().then(function(results) {
		scores = results;
	});

	var levels = [];
	levelDbService.selectAll().then(function(results){
		levels = results;
	});

	registryService.saveRegistry = function(registryInfo) {
		insertNewExchange(registryInfo).then(function(exchangeId) {
			steps.forEach(function(step) {
				insertNewScore(exchangeId, step.id, registryInfo[step.name]);
			});
			insertNewExchangeByCard(exchangeId);
			insertNewExchangeByLevel(exchangeId);
			setLevelInitDate(registryService.pickedLevelNumber);
			registryServerService.sendExchangeToServer(registryInfo, registryService.pickedLevelNumber, registryService.pickedCardId);
		});
	};

	function insertNewExchange (registryInfo) {
		return exchangeDbService.insert({
			receiverId: registryInfo.receiver.id,
			userId: 1, // usuario con TEA
			date: (new Date()).toISOString()
		});
	}

	function insertNewScore (exchangeId, stepId, scoreName) {
		if(scoreName){
			scoreByExchangeDbService.insert({
				exchangeId: exchangeId,
				stepId: stepId,
				scoreId: getScoreId(scoreName)
			});		
		}
	}

	function insertNewExchangeByCard (exchangeId) {

		if(registryService.pickedLevelNumber == 31 || registryService.pickedLevelNumber == 32){
			exchangeByCardDbService.insert({
				exchangeId: exchangeId,
				cardId: registryService.pickedCardId,
				cardExtraId: registryService.notPickedCardId
			});
		}else{
			exchangeByCardDbService.insert({
				exchangeId: exchangeId,
				cardId: registryService.pickedCardId
			});	
		}
	}

	function insertNewExchangeByLevel (exchangeId) {
		exchangeByLevelDbService.insert({
			exchangeId: exchangeId,
			levelId: registryService.pickedLevelNumber
		});
	}

	function setLevelInitDate (levelNumber) {

		if (levelNumber == 21 | levelNumber == 22){
			levelNumber = 2;
		}
		if (levelNumber == 31 | levelNumber == 32){
			levelNumber = 3;
		}

		var initDate = getLevelDate(levelNumber);
		if (initDate === null) {
			var date = new Date();
			var today =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear().toString().substr(2,2);
			levelDbService.update({
				id: getLevelId(levelNumber),
				levelNumber: levelNumber,
				description: getLevelDescription(levelNumber),
				initDate: today,
				enabled: getLevelEnabled(levelNumber)
			});
		}
	}

	function getStepId (stepName) {
		return steps.filter(function(step) { 
			return step.name === stepName; 
		})[0].id;
	}

	function getStepName (stepId) {
		return steps.filter(function(step) { 
			return step.id === stepId; 
		})[0].name;
	}

	function getScoreId (scoreName) {
		return scores.filter(function(score) { 
			return score.name === scoreName; 
		})[0].id;
	}
	
	function getScoreName (scoreId) {
		return scores.filter(function(score) { 
			return score.id === scoreId; 
		})[0].name;
	}

	function getLevelDate(levelNumber){
		return levels.filter(function(level) {
			return level.levelNumber === levelNumber;
		})[0].initDate;
	}

	function getLevelId (levelNumber){
		return levels.filter(function(level) {
			return level.levelNumber === levelNumber;
		})[0].id;
	}

	function getLevelDescription (levelNumber){
		return levels.filter(function(level) {
			return level.levelNumber === levelNumber;
		})[0].description;
	}

	function getLevelEnabled(levelNumber) {
		return levels.filter(function(level) {
			return level.levelNumber === levelNumber;
		})[0].enabled;
	}

	return registryService;
});
communicatorApp.controller('mainStatisticsCtrl', function($scope, statisticService, levelDbService) {

    $scope.loaded = false;
    $scope.hasExchanges = false;
    $scope.exchanges = {};
    $scope.exchanges3A = {};
    $scope.exchanges3B = {};
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

        if(myLevel.levelNumber == 1){
            statisticService.exchangeCountByReceiver(myLevel.levelNumber).then(function(result) {
                $scope.exchangeCountByReceiver = result;
            });
            statisticService.exchanges(myLevel.levelNumber).then(function(result) {
                if (Object.keys(result).length > 0) {
                    $scope.hasExchanges = true;
                }
                else{
                    $scope.hasExchanges = false;
                }
                $scope.exchanges = result;
                $scope.loaded = true;
            });
       }

        if(myLevel.levelNumber == 2){
            statisticService.exchangeCountByReceiverForLevelSubleveled(myLevel.levelNumber + '1',myLevel.levelNumber + '2').then(function(result) {
            $scope.exchangeCountByReceiver = result;
        }); 
           statisticService.exchangesForLevelSubleveled(myLevel.levelNumber + '1',myLevel.levelNumber + '2').then(function(result) {
               if (Object.keys(result).length > 0) {
                    $scope.hasExchanges = true;
                }
                else{
                    $scope.hasExchanges = false;
                }
            $scope.exchanges = result;
            $scope.loaded = true;
           
        });
       }

       if(myLevel.levelNumber == 3){
            statisticService.exchangeCountByReceiverForLevelSubleveled(myLevel.levelNumber + '1',myLevel.levelNumber + '2').then(function(result) {
            $scope.exchangeCountByReceiver = result;
        }); 
           statisticService.exchangesForLevelSubleveled3(myLevel.levelNumber + '1').then(function(result) {
               if (Object.keys(result).length > 0) {
                    $scope.hasExchanges = true;
                    $scope.exchanges3A = result;
                }
                else{
                    if(!$scope.hasExchanges){
                     $scope.hasExchanges = false;
                    }
                }
            $scope.loaded = true;
           
        });
            statisticService.exchangesForLevelSubleveled3(myLevel.levelNumber + '2').then(function(result) {
               if (Object.keys(result).length > 0) {
                    $scope.hasExchanges = true;
                    $scope.exchanges3B = result;
                }
                else{
                    if(!$scope.hasExchanges){
                     $scope.hasExchanges = false;
                    }
                }
        });
        $scope.loaded = true;
       }

       if(myLevel.levelNumber == 4){
            statisticService.exchangeCountByReceiver(myLevel.levelNumber).then(function(result) {
                $scope.exchangeCountByReceiver = result;
            });
            statisticService.exchanges(myLevel.levelNumber).then(function(result) {
                if (Object.keys(result).length > 0) {
                    $scope.hasExchanges = true;
                }
                else{
                    $scope.hasExchanges = false;
                }
                $scope.exchanges = result;
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

communicatorApp.filter('yes_no_spanish', function() {
    return function(text, length, end) {
        if (text == 'withoutHelp') {
            return 'Si';
        }
        return 'No';
    };
});

communicatorApp.filter('oral_output', function() {
    return function(text, length, end) {
        if (text == 'ne') {
            return 'Ninguna';
        }
        if (text == 'gl') {
            return 'Llanto';
        }
        if (text == 'risa') {
            return 'Risa';
        }
        if (text == 'vc') {
            return 'Vocal/Consonante';
        }
        if (text == 'sil') {
            return 'Sílaba';
        }
        if (text == 'pnrdie') {
            return 'Palabra NRI';
        }
        if (text == 'prdie') {
            return 'Palabra RI';
        }
    };
});

communicatorApp.filter('level_sublevel', function() {
    return function(text, length, end) {
        if (text == '21') {
            return 'Receptor';
        }
        if (text == '22') {
            return 'Dispositivo';
        }
        if (text == '31') {
            return 'IIIA';
        }
        if (text == '32') {
            return 'IIIB';
        }
    };
});

communicatorApp.filter('reaction', function() {
    return function(text, length, end) {
        if (text == 'reactionNegative') {
            return 'Sí';
        }
        if (text == 'reactionPositive') {
            return 'No';
        }
    };
});

communicatorApp.filter('discrimination', function() {
    return function(text, length, end) {
        if (text == 'favorite') {
            return 'Favorito';
        }
        if (text == 'distractor') {
            return 'Distractor';
        }
    };

});

communicatorApp.controller('statisticsCtrl', function($scope, statisticService) {
    $scope.loaded = false;
    $scope.hasExchanges = false;
    $scope.exchanges = {};
    $scope.exchangeCountByReceiver = [];
    
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
communicatorApp.service('statisticService', function($q,
                                                    receiverDbService, exchangeDbService,
                                                    exchangeByCardDbService, exchangeByLevelDbService,
                                                    cardDbService,
                                                    scoreByExchangeDbService, scoreDbService,
                                                    stepDbService, relationshipDbService) {
    var r   = receiverDbService;
    var rl  = relationshipDbService;
    var e   = exchangeDbService;
    var ebc = exchangeByCardDbService;
    var ebl = exchangeByLevelDbService;
    var c   = cardDbService;
    var c1   = cardDbService;
    var c2   = cardDbService;
    var sbe = scoreByExchangeDbService;
    var s   = scoreDbService;
    var sp  = stepDbService;

    var receiverRelationshipField = 'CASE WHEN '+ r.prop('relationshipName') + ' IS NULL THEN ' + rl.prop('name') + ' ELSE '+ r.prop('relationshipName') +' END as receiverRelationship';

    receiverDbService
        .define("exchangeCountByReceiver", function(myLevel) {
            return {
                query: 'SELECT avatar as receiverAvatar, '+ receiverRelationshipField +', COUNT(receiverId) as count FROM ' + this.tableName +
                       ' LEFT JOIN ' + e.tableName + ' ON ' + this.prop('id') + ' = receiverId' +
                       ' LEFT JOIN ' + rl.tableName + ' ON ' + this.prop('relationshipId') + ' = ' + rl.prop('id') +
                       ' LEFT JOIN ' + ebl.tableName + ' ON ' + ebl.prop('exchangeId') + ' = ' + e.prop('id') +
                       ' WHERE ' + ebl.prop('levelId') + ' = ? ' + 
                       ' GROUP BY receiverId, ' + r.prop('name'),
                args: [myLevel]
            };
        });

    receiverDbService
        .define("exchangeCountByReceiverForLevelSubleveled", function(subLevel1,subLevel2) {
            return {
                query: 'SELECT avatar as receiverAvatar, '+ receiverRelationshipField +', COUNT(receiverId) as count FROM ' + this.tableName +
                       ' LEFT JOIN ' + e.tableName + ' ON ' + this.prop('id') + ' = receiverId' +
                       ' LEFT JOIN ' + rl.tableName + ' ON ' + this.prop('relationshipId') + ' = ' + rl.prop('id') +
                       ' LEFT JOIN ' + ebl.tableName + ' ON ' + ebl.prop('exchangeId') + ' = ' + e.prop('id') +
                       ' WHERE ' + ebl.prop('levelId') + ' = ? OR ' + ebl.prop('levelId') + ' = ? ' +
                       ' GROUP BY receiverId, ' + r.prop('name'),
                args: [subLevel1,subLevel2]
            };
        });

    exchangeDbService
        .define("exchanges", function(myLevel) {
            return {
                query: 'SELECT ' +
                            e.prop('id')    + ' as id,' +
                            e.prop('date')  + ' as date,' +
                            receiverRelationshipField + ',' +
                            c.prop('title') + ' as cardTitle,' +
                            s.prop('name')  + ' as scoreName,' +
                            sp.prop('name') + ' as stepName,' +
                            ebl.prop('levelId') + ' as level' + 
                       ' FROM ' + this.tableName +
                       ' JOIN ' + r.tableName   + ' ON ' + r.prop('id') +           ' = ' + this.prop('receiverId') +
                       ' LEFT JOIN ' + rl.tableName + ' ON ' + r.prop('relationshipId') + ' = ' + rl.prop('id') +
                       ' JOIN ' + ebc.tableName + ' ON ' + ebc.prop('exchangeId') + ' = ' + this.prop('id') +
                       ' JOIN ' + c.tableName   + ' ON ' + c.prop('id') +           ' = ' + ebc.prop('cardId') +
                       ' JOIN ' + sbe.tableName + ' ON ' + sbe.prop('exchangeId') + ' = ' + this.prop('id') +
                       ' JOIN ' + s.tableName   + ' ON ' + s.prop('id') +           ' = ' + sbe.prop('scoreId') +
                       ' JOIN ' + sp.tableName  + ' ON ' + sp.prop('id') +          ' = ' + sbe.prop('stepId') +
                       ' JOIN ' + ebl.tableName  + ' ON ' + ebl.prop('exchangeId') + ' = ' + e.prop('id') +
                       ' WHERE ' + ebl.prop('levelId') + ' = ? ' + 
                       ' GROUP BY stepId, ' + e.prop('id') + ' , date, ' + r.prop('name') +', cardTitle, scoreName, stepName, level',
                args: [myLevel]
            };
        });

    exchangeDbService
        .define("exchangesForLevelSubleveled", function(subLevel1,subLevel2) {
            return {
                query: 'SELECT ' +
                            e.prop('id')    + ' as id,' +
                            e.prop('date')  + ' as date,' +
                            receiverRelationshipField + ',' +
                            c.prop('title') + ' as cardTitle,' +
                            s.prop('name')  + ' as scoreName,' +
                            sp.prop('name') + ' as stepName,' +
                            ebl.prop('levelId') + ' as level' +  
                       ' FROM ' + this.tableName +
                       ' JOIN ' + r.tableName   + ' ON ' + r.prop('id') +           ' = ' + this.prop('receiverId') +
                       ' LEFT JOIN ' + rl.tableName + ' ON ' + r.prop('relationshipId') + ' = ' + rl.prop('id') +
                       ' JOIN ' + ebc.tableName + ' ON ' + ebc.prop('exchangeId') + ' = ' + this.prop('id') +
                       ' JOIN ' + c.tableName   + ' ON ' + c.prop('id') +           ' = ' + ebc.prop('cardId') +
                       ' JOIN ' + sbe.tableName + ' ON ' + sbe.prop('exchangeId') + ' = ' + this.prop('id') +
                       ' JOIN ' + s.tableName   + ' ON ' + s.prop('id') +           ' = ' + sbe.prop('scoreId') +
                       ' JOIN ' + sp.tableName  + ' ON ' + sp.prop('id') +          ' = ' + sbe.prop('stepId') +
                       ' JOIN ' + ebl.tableName  + ' ON ' + ebl.prop('exchangeId') + ' = ' + e.prop('id') +
                       ' WHERE ' + ebl.prop('levelId') + ' = ? OR ' + ebl.prop('levelId') + ' = ? ' +
                       ' GROUP BY stepId, ' + e.prop('id') + ' , date, ' + r.prop('name') +', cardTitle, scoreName, stepName, level',
                args: [subLevel1,subLevel2]
            };
        });

    exchangeDbService
        .define("exchangesForLevelSubleveled3", function(subLevel) {
            return {
                query: 'SELECT ' +
                            e.prop('id')    + ' as id,' +
                            e.prop('date')  + ' as date,' +
                            receiverRelationshipField + ',' +
                            'c1.title as cardTitle,' +
                            'c2.title as cardExtraTitle,' +
                            s.prop('name')  + ' as scoreName,' +
                            sp.prop('name') + ' as stepName,' +
                            ebl.prop('levelId') + ' as level' +  
                       ' FROM ' + this.tableName +
                       ' JOIN ' + r.tableName   + ' ON ' + r.prop('id') +           ' = ' + this.prop('receiverId') +
                       ' LEFT JOIN ' + rl.tableName + ' ON ' + r.prop('relationshipId') + ' = ' + rl.prop('id') +
                       ' JOIN ' + ebc.tableName + ' ON ' + ebc.prop('exchangeId') + ' = ' + this.prop('id') +
                       ' LEFT JOIN ' + c.tableName + ' c1 ON c1.id  = ' + ebc.prop('cardId') +
                       ' LEFT JOIN ' + c.tableName + ' c2 ON c2.id  = ' + ebc.prop('cardExtraId') +
                       ' JOIN ' + sbe.tableName + ' ON ' + sbe.prop('exchangeId') + ' = ' + this.prop('id') +
                       ' JOIN ' + s.tableName   + ' ON ' + s.prop('id') +           ' = ' + sbe.prop('scoreId') +
                       ' JOIN ' + sp.tableName  + ' ON ' + sp.prop('id') +          ' = ' + sbe.prop('stepId') +
                       ' JOIN ' + ebl.tableName  + ' ON ' + ebl.prop('exchangeId') + ' = ' + e.prop('id') +
                       ' WHERE ' + ebl.prop('levelId') + ' = ? ' +
                       ' GROUP BY stepId, ' + e.prop('id') + ' , date, ' + r.prop('name') +', cardTitle, scoreName, stepName, level',
                args: [subLevel]
            };
        });

    return {
        exchangeCountByReceiver: function(myLevel) {
            return receiverDbService.exchangeCountByReceiver(myLevel);
        },
        exchangeCountByReceiverForLevelSubleveled: function(subLevel1,subLevel2) {
            return receiverDbService.exchangeCountByReceiverForLevelSubleveled(subLevel1,subLevel2);
        },
        exchanges: function(myLevel) {
            var deferred = $q.defer();

            exchangeDbService.exchanges(myLevel).then(function(result) {
                var exchanges = result.reduce(function(memo, current) {
                    if (!memo[current.id]) {
                        memo[current.id] = current;
                    }
                    memo[current.id][current.stepName] = current.scoreName;
                    return memo;
                }, {});
                deferred.resolve(exchanges);
            });
            
            return deferred.promise;
        },
        exchangesForLevelSubleveled: function(subLevel1,subLevel2) {
            var deferred = $q.defer();

            exchangeDbService.exchangesForLevelSubleveled(subLevel1,subLevel2).then(function(result) {
                var exchanges = result.reduce(function(memo, current) {
                    if (!memo[current.id]) {
                        memo[current.id] = current;
                    }
                    memo[current.id][current.stepName] = current.scoreName;
                    return memo;
                }, {});
                deferred.resolve(exchanges);
            });
            
            return deferred.promise;
        },
        exchangesForLevelSubleveled3: function(subLevel) {
            var deferred = $q.defer();

            exchangeDbService.exchangesForLevelSubleveled3(subLevel).then(function(result) {
                var exchanges = result.reduce(function(memo, current) {
                    if (!memo[current.id]) {
                        memo[current.id] = current;
                    }
                    memo[current.id][current.stepName] = current.scoreName;
                    return memo;
                }, {});
                deferred.resolve(exchanges);
            });
            
            return deferred.promise;
        }
    };
});
communicatorApp.service('tutorialService', function($state, $ionicPopup, $timeout) {
    var popup;
    var closeEvent = {
        attach: function() {
            closeEvent.remove();
            document.addEventListener('click', closeEvent.event, false);
        },
        event: function(event) {
            if (event.target.classList.contains('closeTutorial')) {
                closeEvent.remove();
                popup.close();
                $state.transitionTo("app.home");
            }
        },
        remove: function() {
            document.removeEventListener('click', closeEvent.event);
        }
    };

    return {
        closeHTML: '&nbsp;<span class="closeTutorial">X</span>',
        showIfActive: function() {
            switch($state.current.name) {
                case 'tutorialHome':
                    this.step('Iniciar nivel', 'Este tutorial te llevará a través de las funciones básicas de la aplicación.<br/><br/>Para comenzar una actividad se debe presionar IR.', {
                        back: { state: "app.home" },
                        next: { state: "tutorialCategories", params: { levelNumber: 1 } }
                    });
                    closeEvent.attach();
                    break;
                case 'tutorialCategories':
                    this.step('Seleccionar categoría', 'Si la categorización se encuentra habilitada se debe seleccionar una categoría de la lista.', {
                        back: { state: "tutorialHome" },
                        next: { state: "tutorialLevelCategoryCards", params: { levelNumber: 1, category: 1 } }
                    });
                    closeEvent.attach();
                    break;
                case 'tutorialLevelCategoryCards':
                    this.step('Seleccionar pictograma', 'Al comenzar un intercambio se debe seleccionar un pictograma de la lista.<br/>En esta sección sólo se mostrarán los pictogramas habilitados.', {
                        back: { state: "tutorialCategories", params: { levelNumber: 1 } },
                        next: { state: "tutorialLevelSingleCard", params: { id: 1 } }
                    });
                    break;
                case 'tutorialLevelSingleCard':
                    this.step('Intercambio', 'Se muestra el pictograma en pantalla completa para realizar el intercambio.<br /><br />Para puntuar el intercambio, puede presionarse el botón de menú o bien mantener presionado el pictograma.', {
                        back: { state: "tutorialLevelCards", params: { levelNumber: 1 } },
                        next: { state: "tutorialPatternLock" }
                    });
                    break;
                case 'tutorialPatternLock':
                    this.step('Desbloqueo', 'Al querer registrar un intercambio, se debe ingresar un patrón de seguridad.<br /><br />Este patrón previene que la interacción del usuario con el dispositivo registre accidentalmente interacciones. El mismo es configurable al momento de agregar un nuevo receptor.', {
                        back: { state: "tutorialLevelSingleCard", params: { id: 1 } },
                        next: { state: "tutorialBasicRegistry" }
                    });
                    break;
                case 'tutorialBasicRegistry':
                    this.step('Registrar intercambio', 'Al registrar un intercambio se deben seleccionar los comportamientos que ocurrieron durante el mismo.', {
                        back: { state: "tutorialPatternLock" },
                        next: function() {
                            $state.transitionTo("app.home").then(function() {
                                var lastPopup = $ionicPopup.alert({
                                    title: 'Fin',
                                    template: 'Eso es todo, ya es posible realizar intercambios. <br />Para ver el tutorial nuevamente, se puede acceder al mismo desde Menú -> Configuración.'
                                });
                                closeEvent.remove();
                            });
                        }
                    });
                    break;
            }
        },
        step: function(title, description, transition) {
            var callback = function(option) {
                return function() {
                    if (typeof(option) === 'function') {
                        option();
                    } else {
                        $state.transitionTo(option.state, option.params);
                    }
                };
            };
            popup = $ionicPopup.confirm({
                title: title + this.closeHTML,
                template: description,
                buttons: [{
                    text: 'Volver',
                    onTap: callback(transition.back)
                }, {
                    text: 'Seguir',
                    type: 'button-positive',
                    onTap: callback(transition.next)
                }]
            });
        }
    };
});
communicatorApp.service('currentUserService', function(configurationService, uuidService) {
    var userKeys = {
       "user_uuid": "uuid",
       "user_name_key": "name",
       "user_last_name_key": "lastName",
       "user_birthdate_key": "birthdate"
    };

    return {
        get: function() {
            return configurationService.getMultiple(userKeys);
        },
        set: function(user) {
            return configurationService.setMultiple({
                "user_uuid": user.uuid || uuidService.generate(),
                "user_name_key": user.name,
                "user_last_name_key": user.lastName,
                "user_birthdate_key": user.birthdate
            });
        }
    };
});