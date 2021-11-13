import ScheduleModel from '../Models/ScheduleModel.js'

// desc : Get All Schedule
// route : GET  /api/schedule
// access : Public
const getAllSchedule = async (req, res) => {
    try {
        const schedules = await ScheduleModel.find()
        res.json(schedules)
    } catch (err) {
        res.json({ message: err })
    }
}

//desc : GET Country Wise schedule
//route : GET /api/schedule/country/:country
//access : Public
const getCountrySchedule = async (req, res) => {
    try {
        let country = req.body.country
        console.log(country)
        const schedules = await ScheduleModel.find({ Teams: req.body.country })
        console.log(schedules)
        res.json(schedules)
    } catch (err) {
        res.json({ message: err })
    }
}

const getDaySchedule = async (req, res) => {
    try {
        const schedules = await ScheduleModel.find({ date: req.params.date })
        res.json(schedules)
    } catch (err) {
        res.json({ message: err })
    }
}

export { getAllSchedule, getCountrySchedule, getDaySchedule }