import express from "express";
import { addUser, getUser } from "../controllers/userCtrl.js";
import { newConversation } from "../controllers/conversationCtrl.js";

const router = express.Router();

router.route('/add').post(addUser)
router.route('/users').get(getUser)
router.route('/conversation/add').post(newConversation)

export default router;