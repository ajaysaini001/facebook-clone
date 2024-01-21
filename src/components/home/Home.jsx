import React from 'react'
import Login from './login/Login'
import "./style.scss";
import Create from './createAccount/Create';
const Home = () => {
  return (
    <div className='home'>
        <div className="content">
        <div className="left">
            <h1 className='title'>facebook</h1>
            <h2 className='des'>Facebook helps you connect and share with the people in your life.</h2>
       
        </div>
        <div className="right">
           <Login/>
  
        </div>
        </div>
        {/* <Create/> */}
    </div>
  )
}

export default Home