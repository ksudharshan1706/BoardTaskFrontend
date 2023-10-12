import React from 'react'
import "./Dashboard.css"
import { revenue } from '../../assets'
const CardItem = ({data}) => {
  return (
    <div className="cardItem">
        <div className='cardItemIcon' style={{backgroundColor:data.color}}>
            <img src={data.imgsrc} className='cardimg' />
        </div>
        <div className='cardItemDesc'>{data.cardDesc}</div>
        <div className='price'>
            <div className='Money'>{data.value}</div>
            <div className='percentage'>
                <p className='perValue'>{data.valueperc}</p>
            </div>
        </div>
    </div>
  )
}

export default CardItem