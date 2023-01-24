import "./LogIn.css"
//import {Col, Row} from "react-bootstrap"
import React, { useState } from "react";

import icon from "../../Assets/images/icon-login.png";
import logo from "../../Assets/images/ceboom_logo.png";


const LogIn = ({ children }) => {
  return(
    <div className="landing-background">
      <div className="row">
          <img alt="icon" src={icon} className="icon-login" />
          <div className="log-in-text-1"> Know your Destination, </div> 
          <div className="log-in-text-2"> Look at Your Whereabouts, </div>
          <div className="log-in-text-3"> Discover New Places, </div>
          <div className="log-in-text-4"> Find Your Way Around. </div>
          <div className="log-in-text-5"> CEBU </div>  
      </div>
      <div >
        <div className = "log-in-container"></div>
        <img alt="logo" src={logo} className="logo-login" /> 
        <div className="log-in-text-6"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
         <form>
          <input className="input-1" type="email" id="email" name="email" placeholder=" EMAIL" required></input>

          <input className="input-2" type="password" id="password" name="password" placeholder=" PASSWORD" r required></input>

          <div className="login">
          <button type="submit">
            <p>LOGIN</p>
          </button>
          </div>
          {/* <input type="checkbox" checked="checked"> Keep me signed in </input> */}
          {/* <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button> */}
          <div className="psw">Forgot Password?</div> 
        </form> 
        <div className="log-in-text-7"> Dont have an account? </div> 
        <div className="signup">
          <a href="/registration">
            <button type="submit">
            <p>Sign Up Now</p>
            </button>
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default LogIn;
