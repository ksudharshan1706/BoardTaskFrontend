import React from 'react'
import "./Dashboard.css"
const Subheadings = ({data}) => {
  return (
    <div className='clusters'>
        <img src={data.src} width={data.width} height={data.height}/>
        {data.heading == "Dashboard"?
            <div className='clusterHeading'>{data.heading}</div>:
            <div className='clusterHeading2'>{data.heading}</div>
            }
    </div>
  )
}

export default Subheadings