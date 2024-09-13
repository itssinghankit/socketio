import express from "express"
import { createServer } from "http"
import path from "path"
import { fileURLToPath } from "url"
import { Server } from "socket.io"
import { count } from "console"
import { connect } from "http2"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const httpServer = createServer(app)

const io = new Server(httpServer);

// let users = 0;

// io.on("connection", (socket) => {

//     console.log("New client connected: ", socket.id)


//     //sending data to client using default "message" event
//     //    setTimeout(() => {
//     //         socket.send("Hello from server")
//     //     }, 4000);

//     //     //custom event from server
//     //     socket.emit("myEvent",{name:"Ankit singh",intelligent:true})

//     //     //catching event form client
//     //     socket.on("clientEvent",(data)=>{
//     //         console.log("Data from client: ",data)
//     //     })

//     //broadcasting
//     // users++;

//     //global broadcast - to all including sender
//     // io.sockets.emit("myBroadcast", { message: `Total users: ${users}` })

   

//     // //to all except sender
//     // socket.broadcast.emit("newUserConnected",{message:`${users} user connected`})

//     //  //only to sender
//     //  socket.emit("newUserConnected",{message:"Welcome to the chat room"})

//     //disconnection 
//     socket.on("disconnect", () => {
//         console.log("Client disconnected")
//         users--;
//         io.sockets.emit("myBroadcast", { message: `Total users: ${users}` })
//     })
// })

//custom namespace - for more than one connections
// let custom = io.of("/custom")
// let custom2 = io.of("/custom2")

// custom.on("connection",(socket)=>{
//     console.log("new user connected:", socket.id)

//     custom.emit("namespace",{message:"hello namespace"})

//     //disconnect
//     socket.on("disconnect",()=>{
//         console.log("disconnected")
//     })
// })

// custom2.on("connection",(socket)=>{
//     console.log("new user connected:", socket.id)

//     custom2.emit("namespace",{message:"hello namespace from 2"})

//     //disconnect
//     socket.on("disconnect",()=>{
//         console.log("disconnected")
//     })
// })

//ALL CONNECTED TO SAME ROOM
// let roomno=1
// io.on("connection",(socket)=>{

//     console.log("new user connected..")

//     socket.join(`room-${roomno}`)

//     io.sockets.in(`room-${roomno}`).emit("connectedRoom",{message:"you are connected to room :"+roomno})

//     socket.in(`room-${roomno}`).emit("connectedRoom",{message:"hello from room :"+roomno})

//     socket.on("disconnect",()=>{
//         console.log("disconnected...")
//     })
// })

//multiple rooms with limit
let roomno=1
let full=0
io.on("connection",(socket)=>{

    console.log("new user connected..")
    full++
    if(full>2){
        full=0
        roomno++
    }

    socket.join(`room-${roomno}`)

    io.sockets.in(`room-${roomno}`).emit("connectedRoom",{message:"you are connected to room :"+roomno})

    socket.in(`room-${roomno}`).emit("connectedRoom",{message:"hello from room :"+roomno})

    socket.on("disconnect",()=>{
        
        console.log("disconnected...")
    })
})

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "index.html"))
})

httpServer.listen(4000, () => {
    console.log("Server is running on port 4000")
});

