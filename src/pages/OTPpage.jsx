import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios';
import { MuiOtpInput } from 'mui-one-time-password-input'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const OTPpage = () => {
    const navig = useNavigate();
   const [otp, setOtp] = useState('')

  const handleChange = (newValue) => {
    setOtp(newValue)
  }

  const handleClick = ()=>{
    axios.post("https://staging.fastor.in/v1/pwa/user/login",{
        phone : "9818979450",
        otp : otp,
        dial_code : "+91"
    }).then((res)=>{
        if(res.data.status_code==500)
        {
            alert(res.data.error_message)
        }
        else if(res.data.status_code==200)
        {
            alert(res.data.status)
            let tokens = res.data.data.token;
            localStorage.setItem("token",tokens)
        }
        return (res.data.status_code)
    })
    .then((res)=>{
        if(res==200)
        {
            navig("/dashboard")
        }
    })
    .catch((err)=>console.log(err))
  }
  return (
    <div className='otpdiv'>
        <button className='backbtn' onClick={()=>navig("/")}><ArrowBackIosNewIcon /></button>
        <h1 className='alleft'>OTP Verification</h1>
        <p className='regp'>Enter the verification code we just sent on your Mobile Number.</p>
        <MuiOtpInput length={6} value={otp} onChange={handleChange} />
        <br /><br />
        <button className='regbtn' onClick={handleClick}>Send Code</button>
        <p style={{textAlign:"center"}}>Didn’t received code? <span style={{color:"#5574C6"}}>Resend</span></p>
    </div>
  )
}

export default OTPpage