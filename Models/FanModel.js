import mongoose from 'mongoose'

const { Schema } = mongoose;
const FanSchema = new Schema({
    Country: { type: String, required: true },
    Cheers: { type: Number, default: true }
});
const FanModel = mongoose.model("Fan", FanSchema);
export default FanModel;