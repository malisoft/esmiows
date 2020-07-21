//import { signin } from "controllers/auth.controller";
import { Router } from "express"
const productoRouter: Router = Router();
import { userValidator } from "../auth"

import { Create, List, Update, Delete } from "../controllers/productoController"

productoRouter.get('/create', Create);
productoRouter.get('/list', List);
productoRouter.get('/update', Update);
productoRouter.get('/delete', Delete);
//router.use('/profile', userValidator, Profile);

export default productoRouter;