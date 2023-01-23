import React, { useState } from "react";
import "./UpdateTraffic.css";
import "../../Components/Navbar/Sidebar.css";
import SearchBar from "./SearchBar.jsx"
import TrafficStatus from "./UpdateStatus";
import { Button, Grid } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
// Need to import json file including location data

const UpdateTraffic = ({children}) => {
  const [trafficstatusOpen, setstatOpen] = useState(false);
  const updatestatusToggle = () => {setstatOpen((prevState) => !prevState);}

  return(
      <div className="sidebar-submenu">
        <TrafficStatus trafficstatusOpen = {trafficstatusOpen} trafficstatusClose = {updatestatusToggle}/>
        <div className = "page-title">
          <div className = "page-title-text">Update Traffic</div>
          <br></br>
        </div>
        <div className = "traffic-updateroute"> Select Route to Update </div>
        <div className = "traffic-searchloc">
          <div className = "traffic-sourceloc">
            <div className = "traffic-from">FROM:</div>
            <SearchBar placeholder = "Choose source location..."/>
            <div className = "traffic-sourcelocdesc">
              You can type out the location, or you can click on a landmark in the map
            </div>
          </div>
          <div className = "traffic-destination">
            <div className = "traffic-to">TO:</div>
            <SearchBar placeholder = "Destination..."/>
            <div className = "traffic-destinationdesc"> 
            You can type out the location, or you can click on a landmark in the map 
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
            <div className = "traffic-curstatbutton"></div>
            <div className = "traffic-statusdesc">Light Traffic</div>
          </div>
          <button onClick = {updatestatusToggle} className = "traffic-updatestatbutton">UPDATE TRAFFIC INFORMATION</button>
        </div>

      </div>
    );
  }

export default UpdateTraffic;