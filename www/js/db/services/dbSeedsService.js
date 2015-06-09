communicatorApp.service('dbSeedsService', function(TableMigrationService, uuidService) {
    return [
        new TableMigrationService('Card')
            .insertValues(['title', 'enabled', 'img'], [
                ["'Caramelo'",  '"true"', "'img/candy.png'"],
                ["'Pelota'",    '"true"', "'img/ball.png'"],
                ["'Oso'",       '"true"', "'img/bear.png'"],
                ["'Spaghetti'", '"true"', "'img/spaghetti.png'"]
            ]),

        new TableMigrationService('Receiver')
            .insertValues(['uuid', 'name', 'lastName', 'pattern', 'internal'], [
                ["'" + uuidService.generate() + "'", "'Usuario de'", "'prueba'", "'123'", 1]
            ]),

        new TableMigrationService('Level')
            .insertValues(['levelNumber', 'title', 'description', 'enabled'], [
            	[1, "'Cómo comunicarse'", "'Al ver un objeto muy preferido el alumno recogerá el celular con una imagen del objeto, alcanzará al receptor comunicativo y dejará el dispositivo con la imagen en la mano de este.'" , '"true"'],
                [2, '"Distancia y persistencia"', "'Utilizando todavía una sola imagen a la vez, el alumno aprende a generalizar esta nueva habilidad utilizándola en diferentes lugares, con diferentes personas y a lo largo de varias distancias.'", '"true"'],
                [3, '"Discriminar imágenes"', "'Los alumnos aprenden a seleccionar de entre dos o más imágenes para pedir sus objetos o actividades favoritas.'", '"false"'],
                [4, '"Estructura oración"', "'Los alumnos aprenden a construir oraciones simples en una “tira-frase”, utilizando una imagen de “quiero” seguida de una imagen del elemento que está pidiendo en ese momento.'", '"false"'],
                [5, '"Responder preguntas"', "'Los alumnos aprenden a usar el comunicador para responder a la pregunta: ¿Qué deseas?'", '"false"'],
                [6, '"Comentar"', "''", '"false"']
            ]),
            
        new TableMigrationService('Step')
            .insertValues(['name', 'level'], [
                ['"pick"', 1],
                ['"reach"', 1],
                ['"drop"', 1],
                ['"reachReceiver"',2],
                ['"distanceToReceiver"',2]
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
                ['"eoh"']
            ]),

        new TableMigrationService('Configuration'),

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