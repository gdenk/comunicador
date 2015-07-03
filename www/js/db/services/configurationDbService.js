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