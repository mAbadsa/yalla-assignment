"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUserByUsername = function (_a) {
    var connection = _a.connection;
    return function (_a) {
        var username = _a.username;
        var sql = {
            text: "SELECT id, username, name, bio, email, display_email, profile_image, location, github_account, website_url FROM users WHERE username = $1;",
            values: [username],
        };
        return connection.query(sql);
    };
};
exports.default = getUserByUsername;
