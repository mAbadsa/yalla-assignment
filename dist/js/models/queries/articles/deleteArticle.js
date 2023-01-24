"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deleteArticle = function (_a) {
    var connection = _a.connection;
    return function (_a) {
        var slug = _a.slug;
        var sql = {
            text: "DELETE FROM articles WHERE slug = $1;",
            values: [slug],
        };
        return connection.query(sql);
    };
};
exports.default = deleteArticle;
