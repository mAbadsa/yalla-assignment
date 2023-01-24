"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUserByEmail = function (_a) {
    var connection = _a.connection;
    return function (_a) {
        var email = _a.email;
        console.log({ email: email });
        var sql = {
            text: "SELECT id, username, email, password FROM users WHERE email = $1;",
            values: [email],
        };
        return connection.query(sql);
    };
};
exports.default = getUserByEmail;
