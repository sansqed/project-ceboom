import "./EditMap.css"
import React, { useState } from 'react';
import "../../Components/Navbar/Sidebar.css"
import { NavLink, useLocation } from "react-router-dom"
import CustomButton from "../../Components/CustomButton/CustomButton"
import AddLandmarksSidebar from "./AddLandmarksSidebar";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { AddRoads } from "../Map/AddRoads";





const EditMap = ({children}) => {

  let navigate = useNavigate();
  const addLandmarkRoute = () => {
    let path = "#addlandmark?adding";
    navigate(path);
  }
  const addRoadRoute = () => {
    let path = "#addroads";
    navigate(path);
  }

  return(
    <div className="sidebar-submenu">
      <div className="editMap-Container">Edit Map</div>
      <CustomButton 
                      divClassName="edit-searchsubmit"
                      title="ADD NODES" className="edit-searchsubmit-btn" 
                      type="button"
                      onClick={addLandmarkRoute}
                      />
                      <br/>
      <CustomButton 
                      divClassName="edit-searchsubmit"
                      title="ADD ROADS" className="edit-searchsubmit-btn" 
                      type="button"
                      onClick={addRoadRoute}
                      />
    </div>
  );
};

EditMap.propTypes = {
  editMode: PropTypes.string, 
  setEditMode: PropTypes.func, 
  editData: PropTypes.func
}


export default EditMap