"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sockets {
    constructor(io) {
        this.io = io;
        console.log("sockets is listening");
        this.io.on('connection', (Sockets) => {
            console.log("new User conected");
            console.log(Sockets.id);
        });
    }
    sendMessage(id) {
        this.io.to(id).emit("message", "Hola");
        console.log("sending message to " + id);
    }
}
exports.default = Sockets;
