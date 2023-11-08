import makeValidation from "@withvoid/make-validation"
import CHAT_ROOM_TYPES

export default {
    initiate: async (req, res) => {
        try{
            const validation = makeValidation(types => ({
                payload: req.body,
                checks: {
                    userIds: {
                        type: types.array,
                        options: { unique: true, empty: false, stringOnly: true}
                    },
                    type: { types.enum, options: { enum: CHAT_ROOM_TYPES}}
                }
            }))
        }

     },
    postMessage: async (req, res) => { },
    getRecentConversation: async (req, res) => { },
    getConversationByRoomId: async (req, res) => { },
    markConversationReadByRoomId: async (req, res) => { },
}