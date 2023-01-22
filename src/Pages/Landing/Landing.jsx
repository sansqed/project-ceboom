import "./Landing.css"
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import logo from "../../Assets/images/ceboom_logo.png";
import logo_one from "../../Assets/images/landing_page_cebu.png";

const Landing = ({ children }) => {

  /* Navigation between pages */
  const navigate = useNavigate();
  const navigateLogIn = () => navigate('/login');
  const navigateAboutUs = () => navigate('/about-us');

  return(
    <div>
      <div className="landing-background">
        <div className="row">

          {/* CEBOOM logo */}
          <img alt="ceboom-logo"
          src={logo}
          className="ceboom-logo"/>

          {/* Cebu logo  */}
          <img alt="ceboom-logo"
          src={logo_one}
          className="ceboom-logo-one"/>

          <div className="nav-bar" align="right">
            <a1 href="/">Home</a1>
            <a href="/about-us">About</a>
            <a href="/login">Login</a>
          </div>
        </div>

        <div className="container">
          <div className="landing-main-text left">Find your way around.</div>
          <div className="landing-sub-text-one left">Find local businesses, view maps and get driving directions in CEBU.</div>
          <div className="landing-sub-text-two left">
              Providing easy access to locations, landmarks, and roads, ultimately putting an emphasis on the user's <span style = {{
              color: 'darkorange'
            }}>
             "sense of direction."
            </span>
          </div>

          <div className="login">
            <button type="submit" onClick={navigateLogIn}>
              <p>Log in</p>
            </button>
          </div>

          <button className="learnmore" onClick={navigateAboutUs}>
            <p>Learn more</p>
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default Landing;