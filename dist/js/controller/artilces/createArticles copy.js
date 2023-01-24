"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var slugify_1 = __importDefault(require("slugify"));
var connection_1 = __importDefault(require("../../models/connection"));
var s3upload_1 = require("../../utils/s3upload");
var createArticle = function (_a) {
    var databaseQueries = _a.databaseQueries, boomify = _a.boomify;
    return function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, title, content, userData, coverImage, uploadedImage, slug, rows, error_1;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = req.body, title = _a.title, content = _a.content;
                    console.log({ body: req.body });
                    userData = req === null || req === void 0 ? void 0 : req.user;
                    coverImage = (_b = req === null || req === void 0 ? void 0 : req.files) === null || _b === void 0 ? void 0 : _b.coverImage;
                    console.log({ coverImage: coverImage === null || coverImage === void 0 ? void 0 : coverImage.data });
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    if (!coverImage) {
                        // return res.status(400).json({ errors: [{ msg: "User already exists" }] });
                        throw boomify(400, "Upload Cover Image.");
                    }
                    return [4 /*yield*/, s3upload_1.s3
                            .upload({
                            Bucket: process.env.AWS_S3_BUCKET_NAME,
                            Key: coverImage === null || coverImage === void 0 ? void 0 : coverImage.name,
                            Body: coverImage === null || coverImage === void 0 ? void 0 : coverImage.data,
                        })
                            .promise()];
                case 2:
                    uploadedImage = _c.sent();
                    console.log({ uploadedImage: uploadedImage });
                    slug = (0, slugify_1.default)(title.toLowerCase());
                    return [4 /*yield*/, databaseQueries.insertNewArticle({ connection: connection_1.default })({
                            title: title,
                            slug: slug,
                            content: content,
                            coverImage: uploadedImage.Location,
                            userId: userData.id,
                        })];
                case 3:
                    rows = (_c.sent()).rows;
                    return [2 /*return*/, res.json({
                            message: "Add New Article Successfully.",
                            success: true,
                            statusCode: 201,
                            data: rows[0],
                        })];
                case 4:
                    error_1 = _c.sent();
                    next(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
};
exports.default = createArticle;
