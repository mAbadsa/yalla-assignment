"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArticle = exports.getArticleById = exports.updateArticles = exports.createArticles = exports.getArticles = void 0;
var getArticles_1 = __importDefault(require("./getArticles"));
exports.getArticles = getArticles_1.default;
var createArticles_1 = __importDefault(require("./createArticles"));
exports.createArticles = createArticles_1.default;
var updateArticles_1 = __importDefault(require("./updateArticles"));
exports.updateArticles = updateArticles_1.default;
var getArticleById_1 = __importDefault(require("./getArticleById"));
exports.getArticleById = getArticleById_1.default;
var deleteArticles_1 = __importDefault(require("./deleteArticles"));
exports.deleteArticle = deleteArticles_1.default;
