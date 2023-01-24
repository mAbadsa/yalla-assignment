"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../../connection"));
var addLike = function (_a) {
    var userId = _a.userId, articleId = _a.articleId;
    var sql = {
        text: 'INSERT INTO likes(user_id, article_id) VALUES($1, $2);',
        values: [userId, articleId],
    };
    return connection_1.default.query(sql);
};
exports.default = addLike;
