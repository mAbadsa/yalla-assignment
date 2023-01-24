"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("../controller");
var validation_1 = require("../middleware/validation");
var utils_1 = require("../utils");
var checkToken_1 = __importDefault(require("../middleware/checkToken"));
function ratingRouter(databaseQueries) {
    var router = (0, express_1.Router)();
    router.post("/ratings/:id", checkToken_1.default, (0, validation_1.ratingValidation)({ boomify: utils_1.boomify }), (0, controller_1.addRating)({ databaseQueries: databaseQueries, boomify: utils_1.boomify }));
    router.get("/ratings/:id", (0, controller_1.getArticleRatings)({ databaseQueries: databaseQueries, boomify: utils_1.boomify }));
    return router;
}
exports.default = ratingRouter;
