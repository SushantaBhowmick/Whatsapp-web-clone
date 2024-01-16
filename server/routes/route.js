import express from "express";
import { addUser, getUser } from "../controllers/userCtrl.js";

const router = express.Router();

router.route('/add').post(addUser)
router.route('/users').get(getUser)

export default router;