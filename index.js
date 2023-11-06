import express from "express";
import http from 'http';
import logger from "morgan"
import cors from "cors";
import morgan from "morgan";



//  mongo db connection

import mongoConnect from "./db/Db.js";

// db(process.env.MONGO_URL)
// routes

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
mongoConnect()
// routes
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





