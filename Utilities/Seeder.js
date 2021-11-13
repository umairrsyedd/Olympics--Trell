import mongoose from 'mongoose'
import dotenv from "dotenv";
import ScheduleModel from '../Models/ScheduleModel.js'
import MedalModel from '../Models/MedalModel.js'
import FanModel from '../Models/FanModel.js'
import { ScheduleData, MedalData, FanData } from '../TestData.js'
//Config
dotenv.config();
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://admin:admin@cluster0.qwbve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log(`Mongo DB Connected: ${conn.connection.host} `);
    } catch (error) {
        console.error(`Error : ${error}`);
        process.exit(1);
    }
};
connectDB();

const addSchedule = async () => {
    try {
        await ScheduleModel.deleteMany({});
        const createdSchedule = await ScheduleModel.insertMany(ScheduleData)
        console.log(createdSchedule);

        await MedalModel.deleteMany({});
        const createdMedal = await MedalModel.insertMany(MedalData)
        console.log(createdMedal);

        await FanModel.deleteMany({});
        const createdFan = await FanModel.insertMany(FanData)
        console.log(createdFan);

    }
    catch (err) {
        console.log(err);
    }

}
const removeSchedule = async () => {
    try {
        await ScheduleModel.deleteMany({});
        await MedalModel.deleteMany({});
        await FanModel.deleteMany({});
        console.log("Deleted Successfully")
    }
    catch (err) {
        console.log(err);
    }
}

if (process.argv[2] === "-d") {
    removeSchedule();
} else {
    addSchedule();
}
