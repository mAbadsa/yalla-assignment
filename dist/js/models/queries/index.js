"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var insertNewArticle_1 = __importDefault(require("./articles/insertNewArticle"));
var getAllArticle_1 = __importDefault(require("./articles/getAllArticle"));
var getArticleById_1 = __importDefault(require("./articles/getArticleById"));
var deleteArticleById_1 = __importDefault(require("./articles/deleteArticleById"));
var updateArticle_1 = __importDefault(require("./articles/updateArticle"));
var rating_1 = require("./rating");
// import getLikeReactions from "./reactions/getLikeReactions";
// import getLikeByUserAndArticleId from "./reactions/getLikeByUserAndArticleId";
// import deleteLikeReaction from "./reactions/deleteLikeReaction";
var getUserByEmail_1 = __importDefault(require("./users/getUserByEmail"));
var insertNewUser_1 = __importDefault(require("./users/insertNewUser"));
var getUserByUsername_1 = __importDefault(require("./users/getUserByUsername"));
function databaseQueries() {
    return {
        insertNewArticle: insertNewArticle_1.default,
        getAllArticle: getAllArticle_1.default,
        getArticleById: getArticleById_1.default,
        deleteArticleById: deleteArticleById_1.default,
        updateArticle: updateArticle_1.default,
        addRating: rating_1.addRating,
        getRatings: rating_1.getRatings,
        // getLikeReactions,
        // getLikeByUserAndArticleId,
        // deleteLikeReaction,
        // getUserArticles,
        getUserByEmail: getUserByEmail_1.default,
        insertNewUser: insertNewUser_1.default,
        getUserByUsername: getUserByUsername_1.default,
    };
}
exports.default = databaseQueries;
