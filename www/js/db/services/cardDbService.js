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