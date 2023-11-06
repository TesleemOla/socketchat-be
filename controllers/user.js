import makeValidation from "@withvoid/make-validation";

import UsersModel, {USER_TYPES} from "../models/Usersmodel.js";
import Usersmodel from "../models/Usersmodel.js";




export default {
     onCreateUser : async (req, res) => {
        try {
            const validation = makeValidation(types => ({
                payload: req.body,
                checks: {
                    firstName: { type: types.string },
                    lastName: { type: types.string },
                    type: { type: types.enum, options: { enum: USER_TYPES } }
                }
            }));
            
            if (!validation.success) return res.status(400).json(validation)
            const { firstName, lastName, type } = req.body;

            const user = await UsersModel.create({firstName, lastName, type});
            return res.status(200).json({ success: true, user });
        } catch(error) {
            console.log(error)
            return res.status(500).json({ success: false, error: error.message })
        }
    },
    onGetAllUsers: async (req, res) => {
        try{
            const users = await Usersmodel.getUsers();
            return res.status(200).json({ success: true, users})
        }
        catch(error){
            return res.status(500).json({ success: false, error: error})                                     
        }
     },
  
     onGetUserById :async (req, res) => {
        try {
            const user = await UsersModel.getUserById(req.params.id);
            return res.status(200).json({ success: true, user })
        } catch (error) {
            return res.status(500).json({ success: false, error: error })
        }
    },
    onDeleteUserById: async (req, res) => {
        try{
            const user = await UsersModel.deleteUserById(req.params.id);
            return res.status(200).json({ 
                success: true,
                message: `Deleted a count of ${user.deletedCount} user.`
            })
        }
        catch(error){
            return res.status(500).json({
                success: false,
                error: error.message
            })
        }
    },
    
}