"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var queries_1 = __importDefault(require("./models/queries"));
var app = (0, app_1.default)((0, queries_1.default)());
var port = app.get("PORT");
app.listen(port, function () {
    // eslint-disable-next-line no-console
    console.log("Server is running on http://localhost:".concat(port));
});
