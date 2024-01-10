import { TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [num,setNum] = useState("");
    const navig = useNavigate();

    const getotp = ()=>{
        axios.post("https://staging.fastor.in/v1/pwa/user/register",{
            phone : num,
            dial_code : "+91"
        }).then((res)=>console.log(res))
        .catch((err)=>console.log(err));
    }

    const handleNavig = ()=>{
        getotp();
        alert("OTP sent.")
        navig("/otp")
    }
  return (
    <div className='regdiv'>
        <h1 className='alleft'>Enter Your Mobile Number</h1>
        <p className='regp'>We will send you 6 digit verification code</p>
        <TextField id="outlined-basic" label="Enter your Number" fullWidth variant="outlined" onChange={(e)=>setNum(e.target.value)}/><br /><br />
        <button className='regbtn' onClick={handleNavig}>Send Code</button>
    </div>
  )
}

export default Register