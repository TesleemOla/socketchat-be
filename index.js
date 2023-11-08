import express from "express";
import http from 'http';
import morgan from "morgan"
import cors from "cors";
import { Server} from "socket.io"


//  mongo db connection

import mongoConnect from "./db/Db.js";

// db(process.env.MONGO_URL)
// routes
import indexRouter from "./routes/index.Route.js"
import userRouter from "./routes/UserRoute.js"
// import websocket
import WebSockets from "./utils/WebSockets.js"


// middlewares




const app = express()


// Get port and save

const PORT = process.env.port || 5000

app.set("port",PORT);

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))


// connect to mongoDB
// console.log(crypto.randomBytes(64).toString('hex'))
mongoConnect()
// routes
app.use("/", indexRouter)
app.use("/user", userRouter)


app.use("*",(req, res)=>{
    return res.status(404).json({
    success: false,
    message: "API endpoint doesnt exist"
})
})


// create http server
const server = http.createServer(app);
// create server connection
server.listen(PORT);
server.on("listening",()=>{
    console.log(`Listening on port http://localhost:${PORT}`)
})
// create websocket connection
const io = new Server({ })
global.io =  io.listen(server);
global.io.on('connection', WebSockets.connection)





