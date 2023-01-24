"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getArticleById = function (_a) {
    var connection = _a.connection;
    return function (_a) {
        var id = _a.id;
        var sql = {
            text: "SELECT id, title, slug, content, cover_image, user_id FROM articles WHERE id = $1;",
            values: [id],
        };
        return connection.query(sql);
    };
};
exports.default = getArticleById;
