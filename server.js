import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './Config/db.js'
import ScheduleRouter from './Routes/ScheduleRoute.js'
import MedalRouter from './Routes/MedalRoute.js'
import FanRouter from './Routes/FanRoute.js'

// Config
const app = express()
dotenv.config()
connectDB()
app.use(cors())
app.use(express.json())

//Routing
app.use('/api/schedule', ScheduleRouter)
app.use('/api/medal', MedalRouter)
app.use('/api/fan', FanRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})