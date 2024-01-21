import express from "express";
import { addUser, getUser } from "../controllers/userCtrl.js";
import { getConversation, newConversation } from "../controllers/conversationCtrl.js";
import { getMessage, newMessage } from "../controllers/messageCtrl.js";
import { getImage, getImages, uploadFile } from "../controllers/imageCtrl.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.route('/add').post(addUser)
router.route('/users').get(getUser)

router.route('/conversation/add').post(newConversation)
router.route('/conversation').post(getConversation)

router.route('/add/message').post(newMessage)
router.route('/messages/:id').get(getMessage)

router.route('/file/upload').post(upload.single('file'), uploadFile)
router.route('/file/:filename').get(getImage)
router.route('/all').get(getImages)


export default router;