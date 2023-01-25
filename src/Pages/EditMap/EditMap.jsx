import "./EditMap.css"
import React, { useState } from 'react';
import "../../Components/Navbar/Sidebar.css"
import { NavLink, useLocation } from "react-router-dom"
import CustomButton from "../../Components/CustomButton/CustomButton"
import AddLandmarksSidebar from "./AddLandmarksSidebar";
import PropTypes from "prop-types";

const EditMap = (editMode, setEditMode, editData) => {

  if(editMode === "add-location")
    return(<AddLandmarksSidebar 
      addedLandmarks={editData}
    />)

  const handleClick = (e) => {
    setEditMode(e.target)
  }

  return(
    <div className="sidebar-submenu">
      <div className="editMap-Container">Edit Map</div>
           <div className="container">
            {/*<a href = "#AddLandmark">Add Landmark</a>
            <a href= "#AddRoad">Add Road</a>
            <a href= "#EditLandmark">Edit Landmark</a>
          </div> */}
        <p class="ridge"> 
          <div class = "header">Landmarks</div>
          <div className = "wrapper">
            {/* <button class="button" onClick={e=>handleClick(e)}>Add</button> */}
            <CustomButton
              title="add"
              name="add-location"
              onClick={(e)=>handleClick(e)}
            />
            <button class="button">Edit</button>
            <button class="button">Delete</button>
          </div>
        </p>
        <p class="ridge"> 
          <div class = "header">Intersections</div>
          <div className = "wrapper">
            <button class="button">Add</button>
            <button class="button">Edit</button>
            <button class="button">Delete</button>
          </div>
        </p>
        <p class="ridge"> 
          <div class = "header">Roads</div>
          <div className = "wrapper">
            <button class="button">Add</button>
            <button class="button">Edit</button>
            <button class="button">Delete</button>
          </div>
        </p>
      </div>
    </div>
  );
};

EditMap.propTypes = {
  editMode: PropTypes.string, 
  setEditMode: PropTypes.func, 
  editData: PropTypes.func
}


export default EditMap