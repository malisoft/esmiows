"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.userValidator = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token)
        return res.status(401).json({ message: "access denied" });
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET || 'token_test');
        req.userID = payload._id;
        next();
    }
    catch (error) {
        return res.status(404).json({ message: "Error de token ya expirado o invalido" });
    }
};
