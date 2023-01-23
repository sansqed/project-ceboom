import React from 'react'
import "./UpdateStatus.css";
import updatestatusToggle from "./UpdateTraffic";

function click(){
        alert("It works!");
}
const TrafficStatus = ({trafficstatusOpen, trafficstatusClose}) => {
    return(
        <div className = {trafficstatusOpen? "trafficstatus-menu traficstatus-menu--open":"trafficstatus-menu"}>
                <div className = "trafficstatus-current"> 
                        Current Status
                        <div className = "display-status">Insert selected status here</div>
                        <div className = "trafficstatus-curbutton"></div>
                </div>
                <div className = "changestatus">
                        <b>Change Status to:</b>
                        <div className = "tbutton-container">
                                <button onClick = {click} className = "lightwrapper">
                                        <div className = "trafficstatus-light"></div>
                                        <small className = "light">Light</small>    
                                </button>
                                <button className = "modwrapper">
                                        <div className = "trafficstatus-moderate"></div>
                                        <small className = "moderate">Moderate</small>  
                                </button>
                                <button className = "heavywrapper">
                                        <div className = "trafficstatus-heavy"></div>
                                        <small className = "heavy">Heavy</small>   
                                </button>
                        </div>
                </div>
                <div className = "upbackbuttons">
                        <button className = "updatebut">UPDATE</button>
                        <button onClick = {trafficstatusClose} className = "backbut">BACK</button>
                </div>
                                          
        </div>
    )
}

export default TrafficStatus;