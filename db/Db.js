import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


const mongoConnect=()=>{
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTOpology: true
})

mongoose.connection.on("connected",()=>{
    console.log("Mongo has connected successfully")
})

mongoose.connection.on("reconnected", ()=>{
    console.log("Mongo has reconnected successfully") 
})

mongoose.connection.on('error', error=>{
    console.log("Mongo connection has an error", error)
    mongoose.disconnect()
})

mongoose.connection.on("disconnected", ()=>{
    console.log("Mongo has disconnected")
})
}

export default mongoConnect

