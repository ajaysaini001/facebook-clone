import React, { useState } from 'react'
import "./style.scss";
import { RxCross2 } from "react-icons/rx";

import Create from '../createAccount/Create';
const Login = () => {
    const[show,setShow]=useState(false);
  return (
    <>
    <div className='main'>
        <div className="login">
            <form className="form" action="">
            
                <input type="text" />
                <input type="password" />
                <button className='login'>Log in</button>
                <div className="forgot">Forgotten Password</div>
                <span className='create-ac' onClick={()=>setShow(true)}>Create new account</span>
            </form>
            <p className='about'><span className='page'>Create a Page</span> for a celebrity brand or business.</p>
        </div>
    </div>
    {show && <Create setShow={setShow} />}

    </>
  )
}

export default Login