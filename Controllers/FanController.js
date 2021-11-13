import FanModel from '../Models/FanModel.js'

//desc : Get All Fan Cheers
// route : GET /api/fan
// access : Public
const getAllFan = async (req, res) => {
    try {
        const fan = await FanModel.find()
        res.status(200).json(fan)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//desc : Get Fan Cheers
// route : GET /api/fan/:country
// access : Public
const addCheer = async (req, res) => {
    try {
        let filter = { country: req.body.country }
        console.log(req.body.country)
        let update = { $inc: { Cheers: 1 } }
        const fan = await FanModel.findOneAndUpdate(filter, update)
        res.status(200).json(fan)
    }
    catch {
        res.status(500).json({ message: error.message })
    }
}
export { getAllFan, addCheer }