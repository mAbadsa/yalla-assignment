"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../../connection"));
var getLikeReactions = function (_a) {
    var articleId = _a.articleId;
    var sql = {
        text: 'SELECT id, user_id, article_id FROM likes WHERE article_id = $1;',
        values: [articleId],
    };
    return connection_1.default.query(sql);
};
exports.default = getLikeReactions;
