"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../../connection"));
var deleteLikeReaction = function (_a) {
    var userId = _a.userId, articleId = _a.articleId;
    var sql = {
        text: 'DELETE FROM likes WHERE  user_id = $1 AND article_id = $2;',
        values: [userId, articleId],
    };
    return connection_1.default.query(sql);
};
exports.default = deleteLikeReaction;
