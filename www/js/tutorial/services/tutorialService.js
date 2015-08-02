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