import express from "express"
import { createServer } from "http"
import path from "path"
import { fileURLToPath } from "url"
import { Server } from "socket.io"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const httpServer = createServer(app)

const io = new Server(httpServer);

io.on("connection",(socket)=>{
    console.log(socket)
    console.log("New client connected")


    socket.on("disconnect",()=>{
        console.log("Client disconnected")
    })
})

app.get("/", (req, res) => {
    
    res.sendFile(path.join(__dirname, "index.html"))
})

httpServer.listen(4000, () => {
    console.log("Server is running on port 4000")
});

