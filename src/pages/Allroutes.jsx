import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import OTPpage from './OTPpage'
import Homepage from './Homepage'
import Itempage from './Itempage'
const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/otp" element={<OTPpage/>}/>
        <Route path="/dashboard" element={<Homepage/>}/>
        <Route path="/item" element={<Itempage/>}/>
    </Routes>
  )
}

export default Allroutes