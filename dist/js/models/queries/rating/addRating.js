"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addRating = function (_a) {
    var connection = _a.connection;
    return function (_a) {
        var userId = _a.userId, articleId = _a.articleId, ratingValue = _a.ratingValue;
        var sql = {
            text: "INSERT INTO ratings(user_id, article_id, ratings_value) VALUES($1, $2, $3);",
            values: [userId, articleId, ratingValue],
        };
        return connection.query(sql);
    };
};
exports.default = addRating;
