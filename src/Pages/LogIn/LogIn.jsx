import "./LogIn.css"
//import {Col, Row} from "react-bootstrap"
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast"

import icon from "../../Assets/images/icon-login.png";
import logo from "../../Assets/images/ceboom_logo.png";

// import API call
import {LoginUser} from "../../ApiCalls/UserAPI"
import CustomButton from "../../Components/CustomButton/CustomButton"

const LogIn = ({ children }) => {
  const[loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setLoginCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function submit(){
    // if (!isClicked){
      // setIsClicked(true);
      //setIsLoading(true);
      const response = await LoginUser(
        loginCredentials
      );
      console.log(loginCredentials)

      // API response
      console.log(response)
      toast('Hello World');
      if (response.data.data.status !== 200) {
          console.log(response)
          // toast.error(response.data.messages.error)

      } else {
          toast.success()
          // temp lmaoooo
          // var usr = {};
          // usr["username"] = loginCredentials.username; 
          localStorage.setItem("user", loginCredentials.username)
          localStorage.setItem("user_id", JSON.stringify(response.data.data.id));
          localStorage.setItem("role_id", JSON.stringify(response.data.data.role_id));
          window.location.href= "/map";
          // console.log("success")
          console.log(response)
        //setIsLoading(false);
        // localStorage.setItem("role_id", JSON.stringify(response.data.data.role_id).slice(1,-1));

      // }
      // setIsClicked(false);
    }
  }

  return(
    <div className="login-background">
      <img alt="icon" src={icon} className="icon-login" />
      <div className="row">
          <div className="log-in-text-1"> Know Your Destination, </div> 
          <div className="log-in-text-2"> Look at Your Whereabouts, </div>
          <div className="log-in-text-3"> Discover New Places, </div>
          <div className="log-in-text-4"> Find your way around. </div>
          <div className="log-in-text-5"> CEBU </div>  
      </div>

      <div className="form-background">
        <div className="form-container">
          <img alt="logo" src={logo} className="logo-login" />
          <div className="form-description">
            <span>Project Ceboom is a web-based batch project brought to you by BS Computer Science
batch 2024, in partial fulfillment of the Requirements for the Course CMSC 142 - Design and
Analysis of Algorithms in the University of the Philippines Cebu. Taking inspiration from Google
Maps and Waze, Project Ceboom is a simpler version of the two.</span>
          </div>

          <div className="inputBox-container">
            <div className="inputBox">
                <input 
                type="text" 
                required="required" 
                id="username"
                name="username"
                onChange={(e) => handleChange(e)}
                />
                <span>User Name</span>
            </div>

            <div className="inputBox">
                <input 
                type="password" 
                required="required"
                id="password"
                name="password"
                onChange={(e) => handleChange(e)}
                />
                <span>Password</span>
            </div>
          </div>

          <div className="psw">Forgot Password?</div> 
          
          <CustomButton 
            divClassName="login-btn-container"
            className="login-btn"
            type="submit"
            onClick={() => submit()}
            title="LOGIN"
          />

          <div className="log-in-text-7"> Dont have an account? </div> 
          <a href="/registration">  
            <CustomButton
              divClassName="signup-btn-container"
              className="signup-btn"
              type="submit"
              title="Sign Up Now"
              // please change the link later, i dunno how to do this properly
              onClick={(e) => {
                e.preventDefault();
                window.location.href='/registration';
              }}
            />
          </a>
          

        </div>
      </div>
      {/* <div className="row">
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

        <div className="inputContainer">
          <input 
            className="input-1" 
            type="text" 
            id="username" 
            name="username" 
            placeholder=" USERNAME" 
            required="required"
            onChange={(e) => handleChange(e)}
            />
        </div>
          
          
          <input 
          className="input-2"
           type="password" 
           id="password" 
           name="password" 
           placeholder=" PASSWORD"  
           required onChange={(e) => handleChange(e)}
           />

          <CustomButton 
            divClassName="login-btn-container"
            className="login-btn"
            type="submit"
            onClick={() => submit()}
            title="LOGIN"
          />

          <div className="psw">Forgot Password?</div> 

        <div className="log-in-text-7"> Dont have an account? </div> 
        <a href="/registration">  
          <CustomButton
            divClassName="signup-btn-container"
            className="signup-btn"
            type="submit"
            title="Sign Up Now"
            // please change the link later, i dunno how to do this properly
            onClick={(e) => {
              e.preventDefault();
              window.location.href='/registration';
            }}
          />
        </a>
      </div> */}
      
    </div>
  )
}

export default LogIn;
