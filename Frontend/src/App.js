import React from 'react'
import Schedule from './Pages/Schedule/Schedule.js'
import Medal from './Pages/Medal/Medal.js'
import Fan from './Pages/Fan/Fan.js'
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Schedule />} />
      <Route exact path='/medal' element={<Medal />} />
      <Route exact path="/fan" element={<Fan />} />
    </Routes>
  )
}
