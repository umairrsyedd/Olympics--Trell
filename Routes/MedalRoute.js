import express from "express";
const router = express.Router();
import { getAllMedal, updateMedal } from '../Controllers/MedalController.js'

router.route('/').get(getAllMedal);
router.route('/').post(updateMedal);
export default router;