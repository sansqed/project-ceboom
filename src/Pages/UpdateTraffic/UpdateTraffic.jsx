import React, { useState } from "react";
import "./UpdateTraffic.css";
import SearchBar from "./SearchBar.jsx"
import TrafficStatus from "./UpdateStatus";
import { Button, Grid } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CloseIcon from '@mui/icons-material/Close';
// Need to import json file including location data

const UpdateTraffic = ({roadInfo}) => {
  const [trafficstatusOpen, setstatOpen] = useState(false);
  const updatestatusToggle = () => {console.log("shet")}
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  console.log(roadInfo)

  return(
      <div className="sidebar-submenu-traffic" style={{width: isOpen? "55vh" : "0vh"}}>
        <div className="updating-traffic">
        {/* <TrafficStatus trafficstatusOpen = {trafficstatusOpen} trafficstatusClose = {updatestatusToggle}/> */}
          <div className = "traffic-header">
            <div className = "updatetraffic">UPDATE TRAFFIC</div>
            <CloseIcon className="traffic-close-icon" onClick={toggle}></CloseIcon>
          </div>
              <div className = "traffic-updateroute"> Select Route to Update </div>
              <div className = "traffic-updateroutedesc">Select a road in the map to update traffic information</div>
              <div className= "traffic-status-container">
              <div className = "traffic-status">
                <p className = "status-label">Current Status:</p>
                <div className = "traffic-statbuttonwrapper">
                  <div className = {"traffic-curstatbutton-" + roadInfo?.oldTraffic}></div>
                  <div className = {"traffic-statusdesc-"+ roadInfo?.oldTraffic}>{roadInfo?.oldTraffic}</div>
                  </div>
                  <p className = "status-label">Updated Status:</p>
                <div className = "traffic-statbuttonwrapper">
                  <div className = {"traffic-curstatbutton-" + roadInfo?.newTraffic}></div>
                  <div className ={"traffic-statusdesc-"+ roadInfo?.newTraffic}>{roadInfo?.newTraffic}</div>
                </div>
                </div>
              </div>
        {/* <div className = "traffic-updateroute"> Select Route to Update </div>
        <div className = "traffic-searchloc">
          <div className = "traffic-sourceloc">
            <div className = "traffic-from">FROM:</div>
            <SearchBar placeholder = "Choose source location..."/>
            <div className = "traffic-sourcelocdesc">
              Select a road in the map to update traffic Information
            </div>
          </div>
        </div>
        <div className = "placeupdate-container">
          <Grid className = "grid"> 
            <LocationOnIcon className = "locationIcon"/>
            <text className = "locbutton">PLACE TO BE UPDATED</text>
          </Grid>
        </div>
        <div className = "traffic-status">
          <p className = "status-label">Current Status:</p>
          <div className = "traffic-statbuttonwrapper">
            <div className = "traffic-lightbutton"></div>
            <div className = "traffic-statusdesc">Light Traffic</div>
          </div>
          <div className = "traffic-statbuttonwrapper">
            <div className = "traffic-mediumbutton"></div>
            <div className = "traffic-statusdesc">Medium Traffic</div>
          </div>
          <div className = "traffic-statbuttonwrapper">
            <div className = "traffic-heavybutton"></div>
            <div className = "traffic-statusdesc">Heavy Traffic</div>
          </div>
          <button onClick = {updatestatusToggle} className = "traffic-updatestatbutton">UPDATE TRAFFIC INFORMATION</button>
        </div> */}
        </div>
      </div>
    );
  }

export default UpdateTraffic;