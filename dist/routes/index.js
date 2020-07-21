"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const producto_1 = __importDefault(require("./producto"));
const express_1 = require("express");
const routes = express_1.Router();
routes.use("/producto", producto_1.default);
exports.default = routes;
