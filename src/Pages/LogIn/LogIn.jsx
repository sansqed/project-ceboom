import "./LogIn.css"
//import {Col, Row} from "react-bootstrap"
import React, { useState } from "react";

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

      // if (response.data.status !== 200) {
      //   console.log(response)
      // } else {

        //setIsLoading(false);
        //localStorage.setItem("role_id", JSON.stringify(response.data.data.role_id).slice(1,-1));

      // }
      // setIsClicked(false);
    // }
  }

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
         {/* <form> */}
          <input className="input-1" type="text" id="username" name="username" placeholder=" USERNAME" required onChange={(e) => handleChange(e)}></input>
          
          <input className="input-2" type="password" id="password" name="password" placeholder=" PASSWORD"  required onChange={(e) => handleChange(e)} ></input>

          {/* <div className="login"> */}
          {/* <button onClick={()=>submit()} >
            <p>LOGIN</p>
          </button> */}

          {/* buttons are now done this way
              change css using classname
              check this file's css
              you will see that .login-btn is styling this button
              thanks

              divClassName is div container for button
              check src/Components/CustomButton
             */}
          <CustomButton 
            divClassName="login-btn-container"
            className="login-btn"
            type="submit"
            onClick={() => submit()}
            title="LOGIN"
          />
          {/* </div> */}
          {/* <input type="checkbox" checked="checked"> Keep me signed in </input> */}
          {/* <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button> */}
          <div className="psw">Forgot Password?</div> 
        {/* </form>  */}
        <div className="log-in-text-7"> Don't have an account? </div> 
        <CustomButton
          className="signup-btn"
          type="submit"
          title="Sign Up Now"
        />
      </div>
      
    </div>
  )
}

export default LogIn;
