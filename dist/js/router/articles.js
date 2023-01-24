"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var utils_1 = require("../utils");
var artilces_1 = require("../controller/artilces");
var checkToken_1 = __importDefault(require("../middleware/checkToken"));
function articlesRouter(databaseQueries) {
    var router = (0, express_1.Router)();
    router.post("/articles", checkToken_1.default, (0, artilces_1.createArticles)({ databaseQueries: databaseQueries, boomify: utils_1.boomify }));
    router.get("/articles", (0, artilces_1.getArticles)({ databaseQueries: databaseQueries, boomify: utils_1.boomify }));
    router.get("/articles/:id", checkToken_1.default, (0, artilces_1.getArticleById)({ databaseQueries: databaseQueries, boomify: utils_1.boomify }));
    router.patch("/articles/:id", checkToken_1.default, (0, artilces_1.updateArticles)({ databaseQueries: databaseQueries, boomify: utils_1.boomify }));
    router.delete("/articles/:id", checkToken_1.default, (0, artilces_1.deleteArticle)({ databaseQueries: databaseQueries, boomify: utils_1.boomify }));
    return router;
}
exports.default = articlesRouter;
