import express from "express";
import { addUser, getUser } from "../controllers/userCtrl.js";
import { getConversation, newConversation } from "../controllers/conversationCtrl.js";
import { getMessage, newMessage } from "../controllers/messageCtrl.js";
import { uploadFile } from "../controllers/imageCtrl.js";

const router = express.Router();

router.route('/add').post(addUser)
router.route('/users').get(getUser)

router.route('/conversation/add').post(newConversation)
router.route('/conversation').post(getConversation)

router.route('/add/message').post(newMessage)
router.route('/messages/:id').get(getMessage)

router.route('/file/upload').post(uploadFile)


export default router;