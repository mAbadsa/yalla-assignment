"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../../connection"));
var getArticleById = function (_a) {
    var slug = _a.slug, username = _a.username;
    var sql = {
        text: "SELECT a.id, a.title, a.slug, a.temp_slug, a.status, a.content, a.cover_image, a.tags, a.last_reading,\n    a.user_id, a.created_at, a.updated_at, u.username, u.name, u.bio, u.email, u.display_email, u.profile_image,\n    u.location, u.github_account, u.website_url, u.created_at as user_created_at FROM articles as a\n    INNER JOIN users as u ON u.id = a.user_id WHERE a.slug = $1 AND u.username = $2;",
        values: [slug, username],
    };
    return connection_1.default.query(sql);
};
exports.default = getArticleById;
