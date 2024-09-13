import express from "express"
import { createServer } from "http"
import path from "path"
import { fileURLToPath } from "url"
import { Server } from "socket.io"
import { count } from "console"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const httpServer = createServer(app)

const io = new Server(httpServer);

let users = 0;

io.on("connection", (socket) => {

    console.log("New client connected: ", socket.id)


    //sending data to client using default "message" event
    //    setTimeout(() => {
    //         socket.send("Hello from server")
    //     }, 4000);

    //     //custom event from server
    //     socket.emit("myEvent",{name:"Ankit singh",intelligent:true})

    //     //catching event form client
    //     socket.on("clientEvent",(data)=>{
    //         console.log("Data from client: ",data)
    //     })

    //broadcasting
    users++;

    //global broadcast - to all including sender
    // io.sockets.emit("myBroadcast", { message: `Total users: ${users}` })

   

    //to all except sender
    socket.broadcast.emit("newUserConnected",{message:`${users} user connected`})

     //only to sender
     socket.emit("newUserConnected",{message:"Welcome to the chat room"})

    //disconnection 
    socket.on("disconnect", () => {
        console.log("Client disconnected")
        users--;
        io.sockets.emit("myBroadcast", { message: `Total users: ${users}` })
    })
})

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "index.html"))
})

httpServer.listen(4000, () => {
    console.log("Server is running on port 4000")
});

