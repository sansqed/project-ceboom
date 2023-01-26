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
      if (response.data.status !== 200) {
          console.log(response)
          toast.error(response.data.messages.error)

      } else {
          toast.success()
          // temp lmaoooo
          var usr = {};
          usr["username"] = loginCredentials.username; 
          localStorage.setItem("username", JSON.stringify(usr));
          localStorage.setItem("role_id", JSON.stringify(response.data.data.role_id));
          console.log("success")
          console.log(response)
        //setIsLoading(false);
        // localStorage.setItem("role_id", JSON.stringify(response.data.data.role_id).slice(1,-1));

      // }
      // setIsClicked(false);
    }
  }

  return(
    <div className="login-background">
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

          <input 
          className="input-1" 
          type="text" 
          id="username" 
          name="username" 
          placeholder=" USERNAME" 
          required 
          onChange={(e) => handleChange(e)}
          />
          
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

          {/* <input type="checkbox" checked="checked"> Keep me signed in </input> */}
          {/* <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button> */}
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
      </div>
      
    </div>
  )
}

export default LogIn;
