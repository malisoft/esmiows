import SocketIO from "socket.io"
export default class Sockets{

    constructor(private io:SocketIO.Server){
        console.log("sockets is listening")
        this.io.on('connection',(Sockets)=>{
            console.log("new User conected")
            console.log(Sockets.id)
        })
    }

    sendMessage(id:string){
        this.io.to(id).emit("message","Hola")
        console.log("sending message to "+id);
    }
}