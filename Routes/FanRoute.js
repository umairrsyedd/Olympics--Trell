import express from "express";
const router = express.Router();
import { getAllFan, addCheer } from '../Controllers/FanController.js'

router.route('/').get(getAllFan);
router.route('/').post(addCheer);
export default router;