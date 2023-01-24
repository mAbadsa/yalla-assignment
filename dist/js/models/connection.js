"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var _a = process.env, DEV_DATABASE_URL = _a.DEV_DATABASE_URL, DATABASE_URL = _a.DATABASE_URL, NODE_ENV = _a.NODE_ENV;
var dbUrl = "";
var sslValue;
switch (NODE_ENV) {
    case "production":
        dbUrl = DATABASE_URL;
        sslValue = {
            rejectUnauthorized: false,
        };
        break;
    case "development":
        dbUrl = DEV_DATABASE_URL;
        sslValue = false;
        break;
    default:
        throw new Error("No Database url!!!");
}
var options = {
    connectionString: dbUrl,
    ssl: sslValue,
};
exports.default = new pg_1.Pool(options);
