import { Router } from 'express';
// controllers
import chatRoom from '../controllers/chatRoom.js';

const router = Router();

router
    .get('/', chatRoom.getRecentConversation)
    .get('/:roomId', chatRoom.getConversationByRoomId)
    .post('/initiate', chatRoom.initiate)
    .post('/:roomId/message', chatRoom.postMessage)
    .put('/:roomId/mark-read', chatRoom.markConversationAsReadByRoomId)

export default router;