import "./Registration.css"
import React, { useState } from "react"
import Cebu from "../../Assets/images/registration_CebShadow.png"
import Google from "../../Assets/images/googleLogo.png"
import Facebook from "../../Assets/images/facebookLogo.png"

const Registration = ({ children }) => {

    return(
        <div className="reg-background">
            <img src={Cebu} alt="cebu" className="shadowCeb" />
            <h1 className="Text1">Find your way around.</h1>
            <h1 className="Text2">Find local businesses, view maps and get driving directions in CEBU</h1>
            <h1 className="Text3">Providing easy access to locations, landmarks, and roads, ultimately putting an emphasis on the user's...</h1>
            <h1 className="Text4">“Sense of Direction”</h1>
            <div className="form-background">
                <button className="Google">
                    <img src={Google} alt="Google" className="googleIcon"/>
                    <text className="googleText">Sign up with Google</text>
                </button>
                <button className="Facebook">
                    <img src={Facebook} alt="Facebook" className="facebookIcon"/>
                    <text className="facebookText">Sign up with Facebook</text>
                </button>
                <div className="inputs">
                    <input type="text" placeholder="FULL NAME" className="inputBox1"/>
                    <input type="text" placeholder="EMAIL" className="inputBox2"/>
                    <input type="password" placeholder="PASSWORD" className="inputBox3"/>                    
                </div>
                <button className="create">
                    Create Account
                </button>
                <p className="link">
                    Already have an account? <a href="#">Log in</a>
                </p>
            </div>
            <h1 className="createAccount">Create Account</h1>
            <h1 className="or">- OR -</h1>
        </div>
    )
  }

export default Registration;