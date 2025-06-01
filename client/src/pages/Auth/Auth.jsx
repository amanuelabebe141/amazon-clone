import React, { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import logo from "../../assets/image/logo-b.png";
import classes from "./Auth.module.css";
import {auth} from '../../../utils/firebase'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import { Data } from "../../DataProvider";
import { Type } from "../../../utils/action.type";
import { useNavigate } from "react-router-dom";
function Auth() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const[{user,basket},dispatch]= useContext(Data);
  function handleAuth(e) {
    e.preventDefault()
    if(e.target.name === 'signin'){
      signInWithEmailAndPassword(auth,email,password)
      .then((res)=>{
        dispatch({
        type : Type.SET_USER,
        user : res.user
      })
      navigate('/')
    })
    .catch(err=> console.log(err))
    console.log('Succesffully signed in')
  }else{
    createUserWithEmailAndPassword(auth,email,password)
          .then((res)=>{
            dispatch({
            type : Type.SET_USER,
            user : res.user
          })
          navigate('/')
        })     
      .catch(err=> console.log(err))
      console.log('Succesffully logged in')
    }
    
  }
  return (
    <>
      <Header />
      <div className={classes.auth}>
        <img src={logo} alt="" />
        <form action="#">
          <p className={classes.title}>Sign in</p>
          <div className={classes.email_container}>
            <p>Email</p>
            <input
            value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
            />
          </div>
          <div className={classes.password_container}>
            <p>Password</p>
            <input
            value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
            />
          </div>
          <button name="signin" type='submit' onClick={handleAuth} className={classes.signin}>
            Sign in
          </button>
          <small>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </small>
          <button type='submit' name="login" onClick={handleAuth}className={classes.create}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </>
  );
}

export default Auth;
