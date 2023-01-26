import "./EditMap.css"
import React, { useState } from 'react';
import "../../Components/Navbar/Sidebar.css"
import { NavLink, useLocation } from "react-router-dom"
import CustomButton from "../../Components/CustomButton/CustomButton"
import AddLandmarksSidebar from "./AddLandmarksSidebar";
import PropTypes from "prop-types";


const EditMap = ({children}) => {

  return(
    <div className="sidebar-submenu">
      <div className="editMap-Container">Edit Map</div>
           <div className="container">
            {/*<a href = "#AddLandmark">Add Landmark</a>
            <a href= "#AddRoad">Add Road</a>
            <a href= "#EditLandmark">Edit Landmark</a>
          </div> */}
        <p class="ridge"> 
          <ul class = "flex-container"><li class = "flex-header">Landmarks</li>
            <li class="flex-item"><button class="button">
              <NavLink to={"#addlandmark"} className="fas fa-plus-circle">Add</NavLink></button>
              <button class="button">
                <NavLink to={"#addlandmark"} className="fas fa-pencil-square">Edit</NavLink>
              </button></li>
            {/* <li class="flex-item"></li> */}
              
            </ul>
          {/* <div className = "wrapper"> */}
            
          {/* </div> */}
        </p>
        <p class="ridge"> 
          <ul class = "flex-container">Intersections
            <li class="flex-item"><button class="button">
              <NavLink to={"#addlandmark"} className="fas fa-pencil-square">Add</NavLink></button></li>
          </ul>
        </p>
        <p class="ridge"> 
          <ul class = "flex-container">Roads
            <li class="flex-item">
            <button class="button">
              <NavLink to={"#addlandmark"} className="fas fa-plus-circle">Add</NavLink></button>
            <button class="button">
              <NavLink to={"#addlandmark"} className="fas fa-pencil-square">Edit</NavLink></button>
            <button class="button">
              <NavLink to={"#addlandmark"} className="fas fa-trash">Delete</NavLink></button>
            </li>
          </ul>
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