import React, { useEffect, useState } from 'react'
import "./Dashboard.css"
import "./AddProfile.css"
import { addprofile, cardtransaction, close, insta, likes, mail, noavatar, notification, revenue, search, totalUsers, whatsapp, whatsapp2, youtubesvg } from '../../assets'
import CardItem from './CardItem'
import Bargraph from './Bargraph'
import DouhnutChart from './DouhnutChart'
import AddProfile from './AddProfile'
import Basic from './Basic'
import Social from './Social'
import Carousel from 'react-material-ui-carousel'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { profilefetchFailure, profilefetchStart, profilefetchSuccess, profilefetchcclear } from '../redux/profileSlice'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import BargraphHor from './BargraphHor'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../redux/userSlice'
const Barlabels = ({data}) =>{
    return (
        <div className='round' style={{minWidth:"0px"}}>
            <div className='roundbar' style={{backgroundColor:data.color}}></div>
            <div className='roundDesc'>{data.label}</div>
        </div>
    )
}
const DashboardRight = () => {
    const cardItems = [
        {
            "imgsrc":revenue,
            "cardDesc":"Total Revenues",
            "value":"$2,129,430",
            "valueperc":"+2.5%",
            "color": "#7FCD93"
        },
        {
            "imgsrc":cardtransaction,
            "cardDesc":"Total Transactions",
            "value":"1,520",
            "valueperc":"+1.7%",
            "color": "#DEBF85"
        },
        {
            "imgsrc":likes,
            "cardDesc":"Total Likes",
            "value":"9,721",
            "valueperc":"+1.4%",
            "color": "#ECA4A4"
        },
        {
            "imgsrc":totalUsers,
            "cardDesc":"Total Users",
            "value":"9,721",
            "valueperc":"+4.2%",
            "color": "#A9B0E5"
        },
    ]
    const labels = [
        {
            "color":"rgb(102, 194, 165)",
            "label":"Guest"
        },
        {
            "color":"rgb(252, 141, 98)",
            "label":"User"
        }
    ]
    const douhnutlabels = [
        {
            "color":"rgb(167, 210, 191)",
            "label":"Basic Tees"
        },
        {
            "color":"rgb(236, 191, 160)",
            "label":"Custom Short Pants"
        },
        {
            "color":"rgb(189, 198, 216)",
            "label":"Super Hoodies"
        }
    ]
    const { currentUser } = useSelector((state) => state.user);
    const {currentProfile } = useSelector((state) => state.profile);
    const [basic,setBasic] = useState(true)
    const [addProfile,setAddProfile] = useState(false)
    const AddProfilefn = () =>{
        setAddProfile(!addProfile)
        setBasic(true)
        setName(currentUser.name)
        setEmail("")
        setPhone("")
        setInstagram("")
        setYoutube("")
    }
    const Next = () =>{
        setBasic(!basic)
    }
    const [name,setName] = useState(currentUser.name)
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [instagram,setInstagram] = useState("")
    const [youtube,setYoutube] = useState("")
    const dispatch = useDispatch();

    const AddProfile =() =>{
        
        dispatch(profilefetchStart());
        console.log(currentUser._id,name,email,phone,instagram,youtube)
        axios
          .post("auth/addprofile", {
            userId:currentUser._id,name,email,phone,instagram,youtube
          })
          .then((res) => {
            dispatch(profilefetchSuccess(res.data));
          }).catch((err)=>{
            dispatch(profilefetchFailure(err));
          })
          ;
          AddProfilefn()
      };
    // console.log("currentProfile",currentProfile)
    useEffect(()=>{
        console.log()
        axios
        .get(`auth/addprofile/${currentUser._id}`)
        .then((res) => {
            console.log(res)
            dispatch(profilefetchSuccess(res.data));
          })
    },[])


    //bargraph resolution
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
        })
      }
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
      }, [screenSize])  

      const [signout,setSignout] = useState(false)
      const navigate = useNavigate()
      const logoutpop =()=>{
        setSignout(!signout)
      }
      const SignOut = ()=>{
        setSignout(!signout)
        localStorage.removeItem("persist:root")
        const value = localStorage.getItem("persist:root")
        dispatch(profilefetchcclear())
        dispatch(logOut())
        // setSignout(!signout)
        navigate("/")
      }
  return (
    <div className="dashboardRight">
       
        {addProfile?
            <div className="overlay">
                <div className='profilemaincontainer'>
                    <div className='header'>
                        <div className='profilestyle'>Add New Profile</div>
                        <img src={close} onClick={AddProfilefn} style={{cursor:"pointer",paddingRight:"10px"}}/>
                    </div>
                    <hr/>
                    <div className='bodyHeader'>
                        <div className='section'>
                            <div>Basic</div>
                            {basic? <div style={{width:"80%",height:"5px",backgroundColor:"#4285F4",borderRadius:"10px"}}></div>
                            :
                            <div style={{width:"80%",height:"5px",backgroundColor:"#D9D9D9",borderRadius:"10px"}}></div>}
                        </div>
                        <div className='section'>
                            <div>Contact</div>
                            {basic? <div style={{width:"80%",height:"5px",backgroundColor:"#D9D9D9",borderRadius:"10px"}}></div>
                            :
                            <div style={{width:"80%",height:"5px",backgroundColor:"#4285F4",borderRadius:"10px"}}></div>}
                        </div>
                    </div>
                    {basic   ?
                         <div>
                            <div className='inputs'>
                                <div className='labelInput'>
                                    <div className='addformlabel'>Enter Name*</div>
                                    <input className='addinputfield' placeholder='Eg: John Doe'
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)} 
                                    />
                                </div>
                                <div className='labelInput'>
                                    <div className='addformlabel'>Enter Email*</div>
                                    <input className='addinputfield' placeholder='Eg: johndoe@gmail.com'
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                                <div className='labelInput'>
                                    <div className='addformlabel'>Enter Phone*</div>
                                    <input className='addinputfield'placeholder='Eg: 9876543210'
                                    value={phone}
                                    onChange={(e)=>setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div className='inputs'>
                                <div className='labelInput'>
                                    <div className='addformlabel'>Instagram Link (Optional)</div>
                                    <input className='addinputfield' placeholder='Eg. ..instagram.com/username'
                                    value={instagram}
                                    onChange={(e)=>setInstagram(e.target.value)}
                                    />
                                </div>
                                <div className='labelInput'>
                                    <div className='addformlabel'>Youtube Link (Optional)</div>
                                    <input className='addinputfield' placeholder='Eg. ..youtebe/username'
                                    value={youtube}
                                    onChange={(e)=>setYoutube(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    }       
                    {   basic   ?
                            <button className='nextbutton' onClick={Next}>Next</button>:
                        <>
                            <button className='backbutton' onClick={Next}>Back</button>
                            <button className='nextbutton' onClick={AddProfile}>Done</button>
                        </>
                    }         
                    </div>
            </div>
            :null
        }
        <div className='RightTop'>
            <div className='searchleft'>Dashboard</div>
            <div className='searchContainer'>
                <div className='searchbar'>
                    <input className='searchcontent' type='text' placeholder='Search...' style={{border:"none"}}/>
                    <img src={search}/>
                </div>
                    <NotificationsNoneIcon/>
                    {/* <Avatar alt="Remy Sharp" src={noavatar} /> */}
                    <Avatar alt="Remy Sharp" src={currentUser?currentUser.img :noavatar} onClick={logoutpop} style={{cursor:"pointer"}}/>
                    {signout?<div className='logoutStyle'>
                        <button className='hamburgerItem' onClick={SignOut}>SignOut</button>
                        </div>:null
        }
            </div>
        </div>
        <div className='corosel' style={{width:"100%",marginLeft:"10px"}}>
            <Carousel >
                {cardItems.map((data,i)=><CardItem key={i} data={data}/>)}
            </Carousel>
        </div>
        <div className='CardContainer'>
            {cardItems.map((data,i)=><CardItem key={i} data={data}/>)}
        </div>

        {/* bargraphs */}
        {screenSize.dynamicWidth<600?
        <div className='bargraphHor'>
            <div className='bartop'>
                <div className='barleft'>
                    <div className='activities'>Activities</div>
                    <div className='calender'>May - June 2021</div>
                </div>
                <div className='barRight'>
                    {labels.map((data,i)=><Barlabels key={i} data={data}/>)}
                </div>
            </div>
            <BargraphHor/>
        </div>
        :
        <div className='bargraph'>
            <div className='bartop'>
                <div className='barleft'>
                    <div className='activities'>Activities</div>
                    <div className='calender'>May - June 2021</div>
                </div>
                <div className='barRight'>
                    {labels.map((data,i)=><Barlabels key={i} data={data}/>)}
                </div>
            </div>
            <Bargraph/>
        </div>
        }
        <div className='dashboardBottom'>
            <div className='douhnutbar'>
                <div className='douhnuttop'>
                    <div style={{marginLeft:"30px"}}>Top products</div>
                    <div className='duration' style={{marginRight:"40px"}}>May - June 2021</div>
                </div>
                <div className='douhnutbarContainer'>
                    <div className='dohnut'>
                        <DouhnutChart />
                    </div>
                    <div className='douhnutlabels'>
                        {douhnutlabels.map((data,i)=><Barlabels key={i} data={data}/>)}
                    </div>
                </div>
            </div>
            {currentProfile?
             <div className='douhnutbar2'>                
                <div className='profilenme'>
                    <div>{currentProfile.name}</div>
                </div>
                <div className='userInfo'>
                    <div className='detail'>
                        <div className='imageoutcut' >
                            <img src={whatsapp2} />
                        </div>
                        <div>{`+91 ${currentProfile.phone}`}</div>
                    </div>
                    <div className='detail'>
                        <div className='imageoutcut' style={{background:"#FFE9EC"}}>
                            <img src={insta} />
                        </div>
                        <div>{currentProfile.instagram}</div>
                    </div>
                    <div className='detail'>
                        <div className='imageoutcut' style={{background:"#EBE6F9"}}>
                            <img src={mail} />
                        </div>
                        <div>{currentProfile.email}</div>
                    </div>
                    <div className='detail'>
                        <div className='imageoutcut' style={{background:"#FFE9E9"}}>
                            <img src={youtubesvg} />
                        </div>
                        <div>{currentProfile.youtube}</div>
                    </div>
                </div>
            </div>
                    
                :
                <div className='douhnutbar2' onClick={AddProfilefn}>                
                    <div className='addIcon'>
                        <img style={{marginTop:"10px"}} src={addprofile}/>
                    </div>
                    <div>Add Profile</div>
                </div>
                
                }
        </div>
    </div>
  )
}

export default DashboardRight