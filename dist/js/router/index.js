"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = __importDefault(require("./user"));
var articles_1 = __importDefault(require("./articles"));
var rating_1 = __importDefault(require("./rating"));
function router(databaseQueries) {
    var router = (0, express_1.Router)();
    router.use((0, user_1.default)(databaseQueries));
    router.use((0, articles_1.default)(databaseQueries));
    router.use((0, rating_1.default)(databaseQueries));
    return router;
}
exports.default = router;
