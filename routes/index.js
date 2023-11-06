import express from "express";

import { encode } from "../middlewares/Jwt.middleware"; 

const router = express.Router();


router
.post("/login/:userId", encode, (req, res, next)=>{

})


export default router;