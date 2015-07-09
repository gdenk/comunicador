communicatorApp.service('categoryDbService', function(QueryBuilderService) {
    return new QueryBuilderService('Category')
        .define("selectEnabled", function() {
            return {
                query: 'SELECT * FROM ' + this.tableName + ' WHERE enabled = ?',
                args: [true]
            };
        });
});