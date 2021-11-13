import express from "express";
import { getAllSchedule, getCountrySchedule, getDaySchedule } from '../Controllers/ScheduleController.js'

const router = express.Router();
router.route('/').get(getAllSchedule);
router.route('/country').post(getCountrySchedule);
router.route('/day').get(getDaySchedule);
export default router;