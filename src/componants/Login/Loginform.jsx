import React from 'react'
import "./signin.css"
function ColorfulText({children}) {
    return <a style={{color: '#346BD4',cursor:"pointer"}}>{children}</a>;
  }
const Loginform = () => {
  return (
    <div className='loginform'>
        <label className='formlabel'>Email address</label>
        <input className='inputfield'/>
        <label className='formlabel'>Password</label>
        <input type='password' className='inputfield'/>
        <div style={{marginLeft:"40px"}}>
        <ColorfulText >Forgot password?</ColorfulText>
        </div>
        <button className='loginbtn'>Sign In</button>
    </div>
  )
}

export default Loginform