"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
/* import http from "http"
import socketIO from "socket.io"

import socketsFuntions from "./sockets" */
require("./database");
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
//settings
app.set('port', process.env.PORT || "5000");
/* const serverHttp = http.createServer(app);
const io = socketIO.listen(serverHttp);
new socketsFuntions(io); */
//Middlawares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
/* serverHttp.listen(app.get('port'), () => {
    console.log("Servidor en linea")
}) */
//routes
app.use("/api", routes_1.default);
exports.default = app;
