"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deleteArticleById = function (_a) {
    var connection = _a.connection;
    return function (_a) {
        var id = _a.id;
        var sql = {
            text: "DELETE FROM articles WHERE id = $1;",
            values: [id],
        };
        return connection.query(sql);
    };
};
exports.default = deleteArticleById;
