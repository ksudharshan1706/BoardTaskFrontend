import React from 'react'
import "./AddProfile.css"
const Basic = () => {
  return (
    <div>
        <div className='inputs'>
            <div className='labelInput'>
                <div className='addformlabel'>Enter Name*</div>
                <input className='addinputfield' placeholder='Eg: Sudharshan'/>
            </div>
            <div className='labelInput'>
                <div className='addformlabel'>Enter Email*</div>
                <input className='addinputfield' placeholder='Eg: Sudharshan@gmail.com'/>
            </div>
            <div className='labelInput'>
                <div className='addformlabel'>Enter Phone*</div>
                <input className='addinputfield'placeholder='Eg: 9876543210'/>
            </div>
        </div>
        
    </div>
  )
}

export default Basic