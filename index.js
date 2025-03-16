import express from "express"
import morgan from "morgan";

// database
import "./config/mongo.js"
// routes
import indexRouter from "./routes/index.js";
import userRouter from "./routes/users.js";
import chatRoomRouter from "./routes/chatRoom.js";
import deleteRouter from "./routes/delete.js";
// middlewares
import { decode } from './middlewares/jwt.js'




const app = express()

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8000

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", decode, chatRoomRouter);
app.use("/delete", deleteRouter);










app.get("/",(req,res)=>{
    return res.status(200).json({message:"Hello World"})
})

/** catch 404 and forward to error handler */
app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'API endpoint doesnt exist'
    })
});

app.listen(port,()=>{
    console.log(`App now running on port ${port}`)
})