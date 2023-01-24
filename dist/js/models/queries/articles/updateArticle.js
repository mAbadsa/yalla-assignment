"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var updateArticle = function (_a) {
    var connection = _a.connection;
    return function (_a) {
        var title = _a.title, content = _a.content, coverImage = _a.coverImage, id = _a.id;
        var sql = {
            text: "UPDATE articles \n      SET title = $1,\n      content = $2,\n      cover_image = $3,\n      WHERE id = $4;",
            values: [title, content, coverImage, id],
        };
        return connection.query(sql);
    };
};
exports.default = updateArticle;
