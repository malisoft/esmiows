"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const __URLDB = process.env.URLDB || "mongodb://localhost/test";
mongoose_1.default.connect(__URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(db => { console.log("Base de datos conectado."); })
    .catch(err => { console.log(err); });
