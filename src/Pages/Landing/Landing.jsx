import "./Landing.css"
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import logo from "../../Assets/images/ceboom_logo.png";
import logo_one from "../../Assets/images/landing_page_cebu.png";

const Landing = ({ children }) => {

  return(
    <div>
      <div className="landing-background">
        <div className="row">
          <img alt="ceboom-logo" src={logo} className="ceboom-logo " />
          <img alt="ceboom-logo" src={logo_one} className="ceboom-logo-one " />
          <div className="col-1 mt-5">Home</div>
        </div>
        <div className="container">
          <div className="landing-main-text left">Find your way around.</div>
          <div className="landing-sub-text-one left">Find local businesses, view maps and get driving directions in CEBU.</div>
          <div className="landing-sub-text-two left">Providing easy access to locations, landmarks, and roads, ultimately putting an emphasis on the user's "sense of direction."</div>
          
        </div>
      </div>
    </div>
  )
}

export default Landing;