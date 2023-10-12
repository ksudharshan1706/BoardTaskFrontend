import React from 'react'
import { close } from '../../assets'
const Social = () => {
  return (
    <div>
        <div className='inputs'>
            <div className='labelInput'>
                <div className='addformlabel'>Instagram Link (Optional)</div>
                <input className='addinputfield' placeholder='Eg. ..instagram.com/username'/>
            </div>
            <div className='labelInput'>
                <div className='addformlabel'>Youtube Link (Optional)</div>
                <input className='addinputfield' placeholder='Eg. ..youtebe/username'/>
            </div>
        </div>
    </div>
  )
}

export default Social