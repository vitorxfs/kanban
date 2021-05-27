"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configBeforeMiddlewares = void 0;
var body_parser_1 = __importDefault(require("body-parser"));
var configBeforeMiddlewares = function (app) {
    app.use(body_parser_1.default.json());
};
exports.configBeforeMiddlewares = configBeforeMiddlewares;
