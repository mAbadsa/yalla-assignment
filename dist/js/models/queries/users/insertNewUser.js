"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var insertNewUser = function (_a) {
    var connection = _a.connection;
    return function (_a) {
        var username = _a.username, email = _a.email, password = _a.password;
        var sql = {
            text: "INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *;",
            values: [username, email, password],
        };
        return connection.query(sql);
    };
};
exports.default = insertNewUser;
