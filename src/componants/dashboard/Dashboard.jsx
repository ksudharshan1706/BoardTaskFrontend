import React, { useState } from 'react'
import "./Dashboard.css"
import DashboardLeft from './DashboardLeft'
import DashboardRight from './DashboardRight'
import MenuIcon from '@mui/icons-material/Menu';
import { noavatar, notification, search } from '../../assets';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logOut } from '../redux/userSlice';
import { profilefetchcclear } from '../redux/profileSlice';
const Dashboard = () => {
  const [display,setDisplay] = useState(false)
  const Toggle =()=>{
    setDisplay(!display)
  }
  const [signout,setSignout] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutpop =()=>{
    setSignout(!signout)
  }
  const SignOut = ()=>{
    console.log("here")
    setSignout(!signout)
    dispatch(profilefetchcclear())
    dispatch(logOut())
    // setSignout(!signout)
    navigate("/")
  }
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
    <div className='NavbarDashbord' style={{width:"100%",position:"relative",left:"0",top:"0",marginBottom:"100px",gap:"20px"}} >
      <div style={{marginLeft:"5%"}}>Board.</div>
        <div className='searchbar2'  style={{width:"40%",}}>
            <input className='searchcontent' type='text' placeholder='Search...' style={{border:"none"}}/>
            <img src={search}/>
        </div>
      <div className='navmenu'>
        <MenuIcon onClick={Toggle} style={{cursor:"pointer"}}/>
        <div className='avatar'>
        <NotificationsNoneIcon/>
        </div>
        <div className='avatar'>
          <Avatar alt="Remy Sharp" src={currentUser?currentUser.img :noavatar} onClick={logoutpop} style={{cursor:"pointer"}}/>
        </div>
        {signout?<div className='logoutStyle'>
              <button className='hamburgerItem' onClick={SignOut}>SignOut</button>
              </div>:null
        }
        {display?<div className='hamburgerItems'>
              <button className='hamburgerItem'>Dashboard</button>
              <button className='hamburgerItem'>Transactions</button>
              <button className='hamburgerItem'>Schedules</button>
              <button className='hamburgerItem'>Users</button>
              <button className='hamburgerItem'>Settings</button>
              <button className='hamburgerItem'>Help</button>
              <button className='hamburgerItem'>Contact Us</button>
              <button className='hamburgerItem minisignout'  onClick={SignOut}>Sign Out</button>
          </div>:null}
      </div>
    </div>  
    <div className='dashboardContainer'>
        <div className='dashboard'> 
            <DashboardLeft/>
            <DashboardRight/>
            
         </div>
    </div>
    </>
  )
}

export default Dashboard