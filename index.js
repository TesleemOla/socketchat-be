import express from "express";
import http from 'http';
import logger from "morgan"
import cors from "cors";
import morgan from "morgan";
import crypto from "crypto"



//  mongo db connection

import mongoConnect from "./db/Db.js";

// db(process.env.MONGO_URL)
// routes
import indexRouter from "./routes/index.Route.js"
import userRouter from "./routes/UserRoute.js"
// import 



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
server.listen(PORT);
server.on("listening",()=>{
    console.log(`Listening on port http://localhost:${PORT}`)
})





