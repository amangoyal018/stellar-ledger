import React, { useState } from 'react'

import './LoginSignup.css'

import user_image from '../Media/user-profile.png'
import email_image from '../Media/mail.png'
import pass_image from '../Media/padlock.png'

export const LoginSignup = () => {

  const [action,setAction] = useState("Sign Up");

  return (
    <div className="container">
        <div className="topic">
            <div className="text">
                {action}
            </div>
            <div className="decoration">

            </div>
        </div>
        <div className="entries">
            {action==="Login"?<div></div>:<div className="entry">
                <img src={user_image} alt="" />
                <input type="text" placeholder='Name'/>
            </div>}
            
            <div className="entry">
                <img src={email_image} alt="" />
                <input type="email" placeholder='Email Id' />
            </div>
            <div className="entry">
                <img src={pass_image} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password <span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit" } onClick={()=>{setAction("Sign Up")}}>Signup</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
    
  )
}
