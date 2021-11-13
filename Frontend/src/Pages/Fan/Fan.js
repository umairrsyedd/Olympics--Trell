import React, { useState, useEffect } from 'react'
import "./Fan.css"
import axios from 'axios'
import Select from 'react-select'
export default function Fan() {
    const options = [
        { value: 'AUS', label: 'Australia' },
        { value: 'PAK', label: 'Pakistan' },
        { value: 'IND', label: 'India' },
        { value: 'USA', label: 'United States' },
        { value: 'CHI', label: 'Chine' },
        { value: 'UK', label: 'UK' },

    ]
    const [fan, setFan] = useState([])
    const [cheers, setCheers] = useState(0)
    const [country, setCountry] = useState('')
    let initialCheer = true;
    useEffect(() => {
        if (initialCheer === true) {
            axios.post('http://localhost:3800/api/fan/', { country: country })
            initialCheer = false;
        }
        axios.get('http://localhost:3800/api/fan')
            .then(res => {
                setFan(res.data)
            })
    }, [])
    function incrementCheer() {
        setCheers(cheers + 1)
    }

    return (
        <div>
            <h1 className="Fan__Heading">Fans Page</h1>
            <div className="Fan__Container">
                {fan.map(item => {
                    return (
                        <div className="Fan__Card">
                            <h3>{item.Country}</h3>
                            <span>Cheers : {item.Cheers}</span>
                        </div>
                    )
                })
                }
            </div>
            <div className="Fan__Counter">
                <button className="Cheer__Button" onClick={incrementCheer}>Cheer + 1 </button>
                <div>Cheer Count {cheers}</div>
                <Select options={options} onChange={(option) => {
                    setCountry(option.value)

                }
                }
                />
            </div>
        </div>
    )
}