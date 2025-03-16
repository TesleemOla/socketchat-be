import makeValidation from '@withvoid/make-validation'
import UserModel, {USER_TYPES} from '../models/User.js'

export default {
    onGetAllUsers: async (req, res) => {},
    onGetUserById: async (req, res) => {
        try{
            const user = await UserModel.getUserById(req.params.id)
            return res.status(200).json({ success: true, data:user})
        }catch(error){
            return res.status(500).json({ success: false, error})
        }
    },
    onCreateUser: async (req, res) => {
        console.log(req.body)
        try{
            // const validation = makeValidation(types=>({
            //     payload: req.body,
            //     checks: {
            //         firstName: {types: types.string},
            //         lastName: {types: types.string},
            //         type: { type: types.enum, option: { enum: USER_TYPES}}
            //     }
            // }))
            // if(!validation.success) return res.status(400).json(validation);
            
            const { firstName, lastName, type} = req.body;
            if(!firstName || !lastName || !type){
                return res.status(400).json({success: false, error: "Please input all required values"})
            }
            const user = await UserModel.createUser(firstName, lastName, type);
            return res.status(200).json({
                success: true, user
            })
        }
        catch(error){
            return res.status(500).json({ success: false, error})
        }
    },
    onUpdateUser: async (req, res) => {},
    onDeleteUserById: async (req, res) => {},
}