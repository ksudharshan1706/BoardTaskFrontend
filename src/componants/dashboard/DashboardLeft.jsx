import React from 'react'
import { dashboardicon, schedule, settings, transaction, usersicon } from '../../assets'
import Subheadings from './Subheadings'
const DashboardLeft = () => {
    const subHeadings = [
        {
            "src":dashboardicon,
            "heading":"Dashboard",
            "width":"18px",
            "height":"18px"
        },
        {
            "src":transaction,
            "heading":"Transactions",
            "width":"18px",
            "height":"20.777px"
        },
        {
            "src":schedule,
            "heading":"Schedules",
            "width":"18px",
            "height":"18px"
        },
        {
            "src":usersicon,
            "heading":"Users",
            "width":"18px",
            "height":"18px"
        },
        {
            "src":settings,
            "heading":"Settings",
            "width":"17.041px",
            "height":"18px"
        }
    ]
    const bottom = [
        {
            "heading":"Help",
        },
        {
            "heading":"Contact Us",
        }
    ]
  return (
    <div className='dashboardLeft'>
        <div className='Heading'>Board.</div>
        <div className='subHeading'>
            <div className='subHeadings'>
                {subHeadings.map((data)=><Subheadings data={data}/>)}
            </div>
            <div className="sidebottom" style={{marginLeft:"-30%",display:"flex",justifyContent:"start",alignItems:"start",flexDirection:"column",gap:"24px",padding:"0px"}}>
                <div>Help</div>
                <div>Contact Us</div>
            </div>
        </div>
    </div>
  )
}

export default DashboardLeft