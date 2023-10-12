import React, { useState } from 'react'
import "./AddProfile.css"
import { close } from '../../assets'
import Basic from './Basic'
import Social from './Social'
const AddProfile = () => {
    const [basic,setBasic] = useState(true)
    const Next = () =>{
        setBasic(!basic)
    }
  return (
    <div className="overlay">
        <div className='profilemaincontainer'>
            <div className='header'>
                <div className='profilestyle'>Add New Profile</div>
                <img src={close}/>
            </div>
            <hr/>
            <div className='bodyHeader'>
                <div className='section'>Basic</div>
                <div className='section'>Contact</div>
            </div>
            {basic   ?<Basic/>:<Social/>}       
            {   basic   ?
                    <button className='nextbutton' onClick={Next}>Next</button>:
                <>
                    <button className='backbutton' onClick={Next}>Back</button>
                    <button className='nextbutton'>Done</button>
                </>
            }         
            </div>
       
    </div>
  )
}

export default AddProfile