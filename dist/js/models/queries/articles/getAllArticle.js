"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAllArticle = function (_a) {
    var connection = _a.connection;
    return function (_a) {
        var _b = _a.limit, limit = _b === void 0 ? 15 : _b, _c = _a.offset, offset = _c === void 0 ? 0 : _c;
        var sql = {
            text: "SELECT id, title, slug, content, cover_image FROM articles LIMIT $1 OFFSET $2;",
            values: [limit, offset],
        };
        return connection.query(sql);
    };
};
exports.default = getAllArticle;
