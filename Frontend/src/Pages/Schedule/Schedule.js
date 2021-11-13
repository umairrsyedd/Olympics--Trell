import React, { useState, useEffect } from 'react'
import "./Schedule.css"
import 'axios'
import axios from 'axios'
import DatePicker from "react-datepicker";
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
export default function Schedule() {
    const options = [

        { value: 'IND', label: 'India' },
        { value: 'USA', label: 'United States' },
        { value: 'PAK', label: 'Pakistan' },
        { value: 'AUS', label: 'Australia' },
        { value: 'RUS', label: 'Russia' },
        { value: 'CHI', label: 'China' },

    ]
    const [schedule, setSchedule] = useState([])
    const [startDate, setStartDate] = useState(new Date())
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        // Get the Schedule Here and set the state 
        setIsLoading(true)
        axios.get('http://localhost:3800/api/schedule')
            .then(res => {
                setSchedule(res.data)
                setIsLoading(false)
            })
    }, [])
    function FilteredCountries(country) {
        axios.post('http://localhost:3800/api/schedule/country', { country: country })
            .then(res => {
                setSchedule(res.data)
            })
    }
    return (
        <div className="Schedule__Container">
            <h1 className="Schedule__Heading">Olympic Games</h1>
            <h2 className="Schedule__Heading">Upcoming Schedule</h2>
            <div className="Filter__Country">
                <span className="Country">Filter By Country</span>
                <Select options={options} onChange={(option) => {
                    FilteredCountries(option.value)

                }
                }
                />
            </div>
            <div className="Schedule__Filters">
                <div className="Filter__Day">
                    <span className="Day">Filter By Day</span>
                    <DatePicker selected={startDate} onChange={(date) => {
                        setStartDate(date)
                        console.log(date)
                    }
                    } />
                </div>
            </div>
            <div className="Schedule__CardContainer">
                {
                    isLoading ? <><div className="Schedule__Card">Loading...... </div>
                        <div className="Schedule__Card">Loading...... </div>
                        <div className="Schedule__Card">Loading...... </div>
                        <div className="Schedule__Card">Loading...... </div></> :
                        schedule.map(item => {
                            return (
                                <div className="Schedule__Card">
                                    <h3>{item.EventName}</h3>
                                    <span>Start : {item.StartTime.split("", 10)}</span>
                                    <span>Gender : {item.Gender}</span>
                                    <span>Type : {item.Type}</span>
                                    <div className="Schedule__TeamContainer">
                                        Teams:
                                        <span>{item.Teams.map(team => {
                                            return (
                                                <span className="Schedule__Team">{team}</span>
                                            )
                                        })}</span>
                                    </div>

                                </div>
                            )
                        })
                }

            </div>

        </div>
    )
}
