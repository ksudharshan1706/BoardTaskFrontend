import React from 'react'
import "./signin.css"
import { apple, discord, github, google, linkedin, loginleft, twitter } from '../../assets'
import Loginform from './Loginform';
import { useDispatch } from 'react-redux';
import { auth,provider } from '../../firebase';
import { signInWithPopup } from "firebase/auth";
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
function ColorfulText({children}) {
  return <a style={{color: '#346BD4',cursor:"pointer"}}>{children}</a>;
}
const Signin = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const signInWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        axios
          .post("auth/google", {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            console.log("line 31",res.data)
            dispatch(loginSuccess(res.data));
            navigate("/")
          });
      })
      .catch((error) => {
        console.log(error)
        dispatch(loginFailure());
      });
  };

  return (
    <div className='signin'>
        <div className='signinleft'>
            <div className='signinleftdata'>
                <div className='leftdata1 divitem'>LOGO</div>
                <div className='leftdata2 divitem'>Board.</div>
                <div className='leftdata3'>
                  <img width="44px" height="44px" src={github}/>
                  <img width="44px" height="44px" src={twitter}/>
                  <img width="44px" height="44px" src={linkedin}/>
                  <img width="44px" height="44px" src={discord}/>
                </div>
            </div>
        </div>
        <div className='logincard'>
          <div className='Navbar' >Board.</div>
          <div style={{width:"100%",height:"80%",display:"flex",justifyContent:"space-evenly", alignItems:"center",flexDirection:"column"}}>
            <div className='signinheading'>Sign In</div>
            <div className='signintoccount'>Sign in to your account</div>
            <div className='autologinContainer'>
              <div className='autologin' onClick={signInWithGoogle} style={{cursor:"pointer"}}>
                  <img src={google} width="15px" height="15px"/>
                  <p className='autologindesc'>Sign in with Google</p>
              </div>
              <div className='autologin'>
                  <img src={apple} width="15px" height="15px"/>
                  <p className='autologindesc'>Sign in with Apple</p>
              </div>
            </div>
            <Loginform/>
            <div className=''>Don’t have an account? <ColorfulText>Register here</ColorfulText></div>
          </div>
        </div>
    </div>
  )
}

export default Signin