import mongoose from 'mongoose'

const { Schema } = mongoose;


const ScheduleSchema = new Schema({
    EventName: { type: String, required: true },
    StartTime: { type: Date, required: true },
    EndTime: { type: Date, required: true },
    Gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Mixed'],
        default: 'Male'
    }, // Needs Review
    Type: { type: String, required: true, enum: ['Single', 'Group'] },
    Teams: [{ type: String }]
})
const ScheduleModel = mongoose.model("Schedule", ScheduleSchema);
export default ScheduleModel;