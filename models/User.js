import mongoose, { model, Schema } from "mongoose";
import pkg from 'uuidv4';


const { v4: uuidv4 } = pkg;

export const USER_TYPES = {
    CONSUMER: 'consumer',
    SUPPORT: "support"
}

const userSchema = new Schema(
    {
    _id: {
        type: String,
        default: ()=> uuidv4().replace(/\-/g,"")
    },
    firstName: String,
    lastName: String,
    type: String,
},{
    timestamps: true,
    collection: "users"
}
)

userSchema.statics.createUser = async function(firstName, lastName, type){
    {
        try{
            const user = await this.create({firstName, lastName, type})
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
        if (!user) throw ({ error: 'No user with this id found' });
        return user
    }
    catch(err){
        throw err
    }
}

export default model("User", userSchema);