import express from "express"

import User from "../controllers/user.js"

import { encode } from "../middlewares/Jwt.js"

const router= express.Router();

router.get("/", User.onGetAllUsers);
router.post("/", User.onCreateUser);
router.get("/:id", User.onGetUserById)
router.delete("/:id", User.onDeleteUserById);


export default router;

