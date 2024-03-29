import express, { Application } from 'express';
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"

/* import http from "http"
import socketIO from "socket.io"

import socketsFuntions from "./sockets" */
import "./database"

import Routes from "./routes"

const app: Application = express();

//settings
app.set('port', process.env.PORT || "5000");
/* const serverHttp = http.createServer(app);
const io = socketIO.listen(serverHttp);
new socketsFuntions(io); */
//Middlawares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
//middlawares
if (process.env.NODE_ENV !== "production") {
    dotenv.config();
  }
/* serverHttp.listen(app.get('port'), () => {
    console.log("Servidor en linea")
}) */

//routes
app.use("/api", Routes)

export default app;




