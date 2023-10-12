import React from 'react'
import "./signin.css"
const Autologin = ({data}) => {
  return (
    <div className='autologin'>
        <img src={data.src} width="15px" height="15px"/>
        <p className='autologindesc'>{data.desc}</p>
    </div>
  )
}

export default Autologin