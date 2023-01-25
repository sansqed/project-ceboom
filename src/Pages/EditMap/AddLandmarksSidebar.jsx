import "./EditMap.css"
import React, { useState } from 'react';
import "../../Components/Navbar/Sidebar.css"
import { NavLink, useLocation } from "react-router-dom"
import CustomButton from "../../Components/CustomButton/CustomButton"
import AddLandmarksFn from "../Map/AddLandmarksFn";
import PropTypes from "prop-types";


const AddLandmarksSidebar = ({setMode, editData}) => {

  const location = useLocation()
  console.log(location)

  const submitLandmarks = async() => {

  }

  return(
    <div className="sidebar-submenu">
      {/* <div className="editMap-Container">Add Landmarks</div> */}
      <NavLink to={"#addlandmark=true"}>test</NavLink>
      <button onClick={()=>submitLandmarks()}>submit</button>
    </div>
  );
};

AddLandmarksSidebar.propTypes = {
  setMode: PropTypes.func, 
  editData: PropTypes.func
}

export default AddLandmarksSidebar