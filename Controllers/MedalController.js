import MedalModel from '../Models/MedalModel.js'

// desc : Get All Medal Tally
// route : GET  /api/medal
// access : Public
const getAllMedal = async (req, res) => {
    try {
        const medals = await MedalModel.find()
        res.json(medals)
    } catch (err) {
        res.json({ message: err })
    }
}

//desc : Update Country Medal
//route : PUT /api/medal/:country
//access : Private
const updateMedal = async (req, res) => {
    try {
        let medalType = req.body.medalType
        let country = req.body.country
        let filter = { CountryName: country }
        let update = {}
        if (medalType == "GoldMedals") {
            update = {
                $inc: { GoldMedals: 1 }
            }
        }
        else if (medalType == "SilverMedals") {
            update = {
                $inc: { SilverMedals: 1 }
            }
        }
        else if (medalType == "BronzeMedals") {
            update = {
                $inc: { BronzeMedals: 1 }
            }
        }
        let options = { new: true }

        let medal = await MedalModel.findOneAndUpdate(filter, update, options)
        res.json(medal)
    } catch (err) {
        res.json({ message: err })
    }
}


export { getAllMedal, updateMedal }