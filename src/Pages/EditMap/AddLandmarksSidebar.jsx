import "./EditMap.css"
import React, { useState } from 'react';
import "../../Components/Navbar/Sidebar.css"
import { NavLink, useLocation } from "react-router-dom"
import CustomButton from "../../Components/CustomButton/CustomButton"
import AddLandmarksFn from "../Map/AddLandmarksFn";



const AddLandmarksSidebar = (setEditMode, editData) => {

  const submitLandmarks = async() => {

  }

  return(
    <div className="sidebar-submenu">
      {/* <div className="editMap-Container">Add Landmarks</div> */}
      <button onClick={()=>setEditMode("add-landmark")}>test</button>
      <button onClick={()=>submitLandmarks()}>submit</button>
    </div>
  );
};

export default AddLandmarksSidebar;