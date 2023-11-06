import express from "express";

import { initiate, getRecentConversation, getConversationByRoomId,
postMessage, markConversationReadByRoomId} from "../controllers/chatRoom.controllers"

const router = express.Router()

router.get("/", getRecentConversation)

router.get("/:roomId", getConversationByRoomId)

router.post("/initiate", initiate)

router.post("/:roomId/message", postMessage)

router.put("/:roomId/mark-read", markConversationReadByRoomId)



export default router;