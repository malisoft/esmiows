"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { signin } from "controllers/auth.controller";
const express_1 = require("express");
const router = express_1.Router();
const productoController_1 = require("../controllers/productoController");
router.use('/signin', productoController_1.List);
//router.use('/profile', userValidator, Profile);
exports.default = router;
