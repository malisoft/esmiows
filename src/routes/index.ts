import productoRouter from "./producto";
import { Router } from "express"
const routes: Router = Router();

routes.use("/producto", productoRouter);

export default routes;