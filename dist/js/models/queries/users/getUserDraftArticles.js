"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUserDraftArticles = function (_a) {
    var connection = _a.connection;
    return function (_a) {
        var username = _a.username;
        var sql = {
            text: "SELECT a.id, a.title, a.slug, a.status FROM draft_articles AS a INNER JOIN users AS u ON u.id = a.user_id WHERE u.username = $1;",
            values: [username],
        };
        return connection.query(sql);
    };
};
exports.default = getUserDraftArticles;
