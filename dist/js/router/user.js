"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("../controller");
var validation_1 = require("../middleware/validation");
var utils_1 = require("../utils");
function userRouter(databaseQueries) {
    var router = (0, express_1.Router)();
    router.post("/users/signup", (0, validation_1.signupValidation)({ boomify: utils_1.boomify }), (0, controller_1.signup)({ databaseQueries: databaseQueries, boomify: utils_1.boomify }));
    router.post("/users/signin", (0, controller_1.signin)({ databaseQueries: databaseQueries, boomify: utils_1.boomify }));
    return router;
}
exports.default = userRouter;
