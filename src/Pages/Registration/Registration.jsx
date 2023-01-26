import "./Registration.css"
import React, { useState } from "react"
import CustomButton from "../../Components/CustomButton/CustomButton"
import Cebu from "../../Assets/images/registration_CebShadow.png"
import Google from "../../Assets/images/googleLogo.png"
import Facebook from "../../Assets/images/facebookLogo.png"
import { AddNewUser, AddUserAPI } from "../../ApiCalls/AddUserAPI"

const Registration = ({ children }) => {

    const [newUser, setNewUser] = useState({
       username: "",
       password: "", 
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setNewUser((prevState) => ({
            ...prevState,
            [name]: value,
        })); 
    };

    // const [isClicked, setIsClicked] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);


    async function submitNewUser(){
        const response = await AddNewUser (
          newUser  
        );

        console.log(newUser);

        // API response
        console.log(response)
    };

    


    return(
        <div className="reg-background">
            <img src={Cebu} alt="cebu" className="shadowCeb" />
            <div className="leftText">
                <h1 className="Text1">Find your way around.</h1>
                <h1 className="Text2">Find local businesses, view maps and get driving directions in CEBU</h1>
                <h1 className="Text3">Providing easy access to locations,
                landmarks, and roads, ultimately putting an emphasis on the user's...</h1>
                <h1 className="Text4">“Sense of Direction”</h1>
            </div>
            
            <div className="form-background" >
                <div className="form-container">
                    <span className="createAccount">Create Account</span>
                </div>
                <a>
                    <button className="Google">
                        <img src={Google} alt="Google Icon" className="googleIcon"/>
                        <text className="googleText">Sign up with Google</text>
                    </button>
                </a>

                <a>
                    <button className="Facebook">
                        <img src={Facebook} alt="Facebook Icon" className="googleIcon"/>
                        <text className="facebookText">Sign up with Facebook</text>
                    </button>
                    
                </a>
                <span className="or">- OR -</span>
                <div className="inputBox">
                    <input 
                    type="text" 
                    required="required" 
                    id="username"
                    name="username"
                    onChange={(e) => handleChange(e)}
                    />
                    <span>Full Name</span>
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

                <CustomButton 
                    divClassName = "createAccountBox"
                    className="create" 
                    type="submit"
                    title="Create Account" 
                    onClick={() => submitNewUser()}
                />

                <p className="link">
                    Already have an account? <a href="/login">Log in</a>
                </p>
                {/* <div className="form-container">
                    <h1 className="createAccount">Create Account</h1>
                    <h1 className="or">- OR -</h1>
                    <a>
                        <button className="Google">
                            <img src={Google} alt="Google Icon" className="googleIcon"/>
                            <text className="googleText">Sign up with Google</text>
                        </button>
                    </a>

                    <a>
                        <button className="Facebook">
                            <img src={Facebook} alt="Facebook Icon" className="googleIcon"/>
                            <text className="facebookText">Sign up with Facebook</text>
                        </button>
                    </a>

                    <div className="inputBox">
                        <input 
                        type="text" 
                        required="required" 
                        id="username"
                        name="username"
                        onChange={(e) => handleChange(e)}
                        />
                        <span>Full Name</span>
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

                    <CustomButton 
                    divClassName = "createAccountBox"
                    className="create" 
                    type="submit"
                    title="Create Account" 
                    onClick={() => submitNewUser()}
                    />
                    
                    <p className="link">
                        Already have an account? <a href="/login">Log in</a>
                    </p>
                </div> */}
            </div>
            
        </div>
    )
  }

export default Registration;