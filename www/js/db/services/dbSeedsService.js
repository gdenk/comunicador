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
                [10, "'Arenero'",  '"true"', "'img/pictogramas/Escuela/arenero.jpg'", 4],  
                [11, "'Lapiz'",  '"true"', "'img/pictogramas/Escuela/lapiz.png'", 4],  
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
                [28, "'Colectivo'",  '"true"', "'img/pictogramas/Transporte/colectivo.jpg'", 10],    
                [29, "'Taxi'",  '"true"', "'img/pictogramas/Transporte/taxi.gif'", 10], 
                [30, "'Tren'",  '"true"', "'img/pictogramas/Transporte/tren.jpg'", 10],  
                [31, "'Calzoncillo'",  '"true"', "'img/pictogramas/Vestimenta/calzoncillo.jpg'", 11],
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
                [3, '"Discriminar imágenes"', "'Las personas aprenden a seleccionar de entre dos o más imágenes para pedir sus objetos o actividades favoritas.'", '"false"'],
                [4, '"Estructura oración"', "'Las personas aprenden a construir oraciones simples en una “tira-frase”, utilizando una imagen de “quiero” seguida de una imagen del elemento que está pidiendo en ese momento.'", '"false"'],
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
                ['"oralOutput"',2]
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
                ['"risa"']
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