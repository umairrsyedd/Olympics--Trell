import mongoose from 'mongoose';

const { Schema } = mongoose;
const MedalSchema = new Schema({
    CountryName: { type: String, required: true },
    GoldMedals: { type: Number, default: 0 },
    SilverMedals: { type: Number, default: 0 },
    BronzeMedals: { type: Number, default: 0 },
})
const MedalModel = mongoose.model('Medal', MedalSchema);
export default MedalModel;