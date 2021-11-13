import React, { useState, useEffect } from 'react'
import "./Medal.css"

import axios from 'axios'
export default function Schedule() {
    const [medal, setMedal] = useState([])
    useEffect(() => {
        // Get the Schedule Here and set the state 
        axios.get('http://localhost:3800/api/medal')
            .then(res => {
                let data = res.data
                let Tallies = []
                data.forEach(element => {
                    Tallies.push({ Country: element.CountryName, Gold: element.GoldMedals, Silver: element.SilverMedals, Bronze: element.BronzeMedals, Score: element.GoldMedals * 3 + element.SilverMedals * 2 + element.BronzeMedals })
                })
                Tallies.sort((a, b) => (a.Score > b.Score) ? -1 : 1)
                console.log(Tallies)
                setMedal(Tallies)

            })
    }, [])
    function handleSubmit(e) {

        console.log(e.target.medal.value)
        console.log(e.target.Country.value)
        axios.post('http://localhost:3800/api/medal/', { medalType: e.target.medal.value, country: e.target.Country.value })
    }
    return (
        <div className="Medal__Container">
            <h1 className="Medal__Heading">Medals Page </h1>
            <table className="Medal__Table">
                <tr>
                    <th>Country</th>
                    <th>Gold</th>
                    <th>Silver</th>
                    <th>Bronze</th>
                    <th>Score</th>
                </tr>
                {medal.map(item => {
                    return (
                        <tr>
                            <td>{item.Country}</td>
                            <td>{item.Gold}</td>
                            <td>{item.Silver}</td>
                            <td>{item.Bronze}</td>
                            <td>{item.Score}</td>
                        </tr>
                    )
                })
                }
            </table>
            <div className="Update__Medal">
                <h3>Update Medal Tally</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="Country" placeholder="Name (AUS,IND...)" />
                    <select name="medal" id="medal">
                        <option value="GoldMedals">Gold</option>
                        <option value="SilverMedals">Silver</option>
                        <option value="BronzeMedals">Bronze</option>
                    </select>
                    <button>Update</button>
                </form>

            </div>
        </div>
    )
}
