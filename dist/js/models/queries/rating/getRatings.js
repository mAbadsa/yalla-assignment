"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRatings = function (_a) {
    var connection = _a.connection;
    return function (_a) {
        var articleId = _a.articleId;
        var sql = {
            text: "SELECT id, user_id, article_id, ratings_value FROM ratings WHERE article_id = $1;",
            values: [articleId],
        };
        return connection.query(sql);
    };
};
exports.default = getRatings;
