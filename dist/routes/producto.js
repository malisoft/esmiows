"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { signin } from "controllers/auth.controller";
const express_1 = require("express");
const productoRouter = express_1.Router();
const productoController_1 = require("../controllers/productoController");
productoRouter.get('/create', productoController_1.Create);
productoRouter.get('/list', productoController_1.List);
productoRouter.get('/update', productoController_1.Update);
productoRouter.get('/delete', productoController_1.Delete);
//router.use('/profile', userValidator, Profile);
exports.default = productoRouter;