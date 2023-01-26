import React, { useState } from "react";
import "./UpdateTraffic.css";
import SearchBar from "./SearchBar.jsx"
import TrafficStatus from "./UpdateStatus";
import { Button, Grid } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn'
// Need to import json file including location data

const UpdateTraffic = ({children}) => {
  const [trafficstatusOpen, setstatOpen] = useState(false);
  const updatestatusToggle = () => {console.log("shet")}

  return(
      <div className="sidebar-submenu">
        <TrafficStatus trafficstatusOpen = {trafficstatusOpen} trafficstatusClose = {updatestatusToggle}/>
        <div className = "traffic-header">
          <h1 className = "updatetraffic">UPDATE TRAFFIC</h1>
          <br></br>
        </div>
        <div className = "traffic-updateroute"> Select Route to Update </div>
        <div className = "traffic-searchloc">
          <div className = "traffic-sourceloc">
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
        </div>

      </div>
    );
  }

export default UpdateTraffic;