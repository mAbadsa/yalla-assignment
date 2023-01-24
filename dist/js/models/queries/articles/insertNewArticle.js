"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var insertNewArticle = function (_a) {
    var connection = _a.connection;
    return function (_a) {
        var title = _a.title, slug = _a.slug, content = _a.content, coverImage = _a.coverImage, userId = _a.userId;
        var sql = {
            text: "INSERT INTO articles(title, slug, content, cover_image, user_id) VALUES($1, $2, $3, $4, $5) RETURNING *;",
            values: [title, slug, content, coverImage, userId],
        };
        return connection.query(sql);
    };
};
exports.default = insertNewArticle;
