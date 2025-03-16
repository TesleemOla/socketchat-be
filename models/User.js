import mongoose, { model, Schema } from "mongoose";
import pkg from 'uuidv4';


const { v4: uuidv4 } = pkg;

export const USER_TYPES = {
    CONSUMER: 'consumer',
    SUPPORT: "support"
}

const userSchema = new Schema(
    {
    firstName: String,
    lastName: String,
    type: String,
    email: {
        type: String,
        unique: true,
        required: true
    }
},{
    timestamps: true,
    collection: "users",
    
}
)

userSchema.statics.createUser = async function(firstName, lastName, type, email){
    {
        try{
            const user = await this.create({firstName, lastName, type, email})
            return user.save()
        }
        catch(err){
            throw err
        }
    }
}

userSchema.statics.getUserById = async function(id){
    try{
        const user = await this.findOne({_id:id})
        console.log(user)
        if (!user) throw ({ error: 'No user with this id found' });
        return user
    }
    catch(err){
        throw err
    }
}

userSchema.statics.getAllUsers = async function(){
    try{
        const users = await this.find()
        return users
    }catch(error){
        throw error
    }
}

export default model("User", userSchema);

userSchema.statics.deleteUser = async function(id){
    try{
        const user = await this.remove({ _id: id})
        return user
    }
    catch(err){
        throw err
    }
}