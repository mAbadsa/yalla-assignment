"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateArticle = exports.deleteArticleById = exports.getArticleBySlug = exports.getArticleById = exports.getAllArticle = exports.insertNewArticle = void 0;
var insertNewArticle_1 = __importDefault(require("./insertNewArticle"));
exports.insertNewArticle = insertNewArticle_1.default;
var getAllArticle_1 = __importDefault(require("./getAllArticle"));
exports.getAllArticle = getAllArticle_1.default;
var getArticleById_1 = __importDefault(require("./getArticleById"));
exports.getArticleById = getArticleById_1.default;
var getArticleBySlug_1 = __importDefault(require("./getArticleBySlug"));
exports.getArticleBySlug = getArticleBySlug_1.default;
var deleteArticleById_1 = __importDefault(require("./deleteArticleById"));
exports.deleteArticleById = deleteArticleById_1.default;
var updateArticle_1 = __importDefault(require("./updateArticle"));
exports.updateArticle = updateArticle_1.default;
