import UserModel, {USER_TYPES} from '../models/User.js'

export default {
    onGetAllUsers: async (req, res) => {
        try{
            const users = await UserModel.getAllUsers()
            return res.status(200).json({ success: true, data: users})
        }
        catch(error){
            return res.status(500).json({ success: false, error: error.message})
        }
    },
    onGetUserById: async (req, res) => {
        try{
            const user = await UserModel.getUserById(req.params.id)
            return res.status(200).json({ success: true, data:user})
        }catch(error){
            return res.status(500).json({ success: false, error})
        }
    },
    onCreateUser: async (req, res) => {
        try{
            
            const { firstName, lastName, type, email} = req.body;
            if(!firstName || !lastName || !type || !email){
                return res.status(400).json({success: false, error: "Please input all required values"})
            }
            const user = await UserModel.createUser(firstName, lastName, type, email);
            return res.status(200).json({
                success: true, user
            })
        }
        catch(error){
            return res.status(500).json({ success: false, error: error.message})
        }
    },
    onUpdateUser: async (req, res) => {},
    onDeleteUserById: async (req, res) => {
        try{
            const user = await UserModel.deleteUser(req.params.id)
            return res.status(200).json({ success: true, message: `deleted ${user.count} user`})
        }
        catch(error){
            return res.status(500).json({success: false, error: error})
        }
    },
}