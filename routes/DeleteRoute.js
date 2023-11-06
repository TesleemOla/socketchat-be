import express from "express";

import { deleteRoomById, deleteMessageById } from "../controllers/delete.controllers"


const router = express.Router();


router.delete("/room/:roomId", deleteRoomById)

router.delete("/message/:messageId", deleteMessageById)


export default router;