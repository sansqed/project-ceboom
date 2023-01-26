import "./EditMap.css"
import React, { useState } from 'react';
import "../../Components/Navbar/Sidebar.css"
import { NavLink, useLocation } from "react-router-dom"
import CustomButton from "../../Components/CustomButton/CustomButton"
import AddLandmarksFn from "../Map/AddLandmarksFn";
import PropTypes from "prop-types";


const AddLandmarksSidebar = ({editData}) => {
  console.log("add landmark sidebar")
  const submitLandmarks = async() => {
    
  }


  console.log(editData)
  return(
    <div className="sidebar-submenu">
      {/* <div className="editMap-Container">Add Landmarks</div> */}
      <NavLink to={"#addlandmark?adding"}>test</NavLink>
      <button onClick={()=>submitLandmarks()}>submit</button>
      <p id="testname">asdf</p>
    </div>
  );
};

AddLandmarksSidebar.propTypes = {
  setMode: PropTypes.func, 
  editData: PropTypes.func
}

export default AddLandmarksSidebar