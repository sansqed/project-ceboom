import "./EditMap.css"
import React, { useState } from 'react';
import "../../Components/Navbar/Sidebar.css"
import { NavLink, useLocation } from "react-router-dom"
import CustomButton from "../../Components/CustomButton/CustomButton"
import AddLandmarksSidebar from "./AddLandmarksSidebar";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { AddRoads } from "../Map/AddRoads";
import CloseIcon from '@mui/icons-material/Close';





const EditMap = ({children}) => {

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

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
    // 
    <div className="sidebar-submenu-edit" style={{width: isOpen? "55vh" : "0vh"}}>
        <div className="page-title-edit">
            <div className="page-title-text-edit">
              Edit Map
            </div>
            <CloseIcon className="Icon" onClick={toggle}></CloseIcon>
          </div>
          <div className="search-searchtitle"> Edit the Map's Node and Road </div>
      <div className="edit-buttons">
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

    </div>
  );
};

EditMap.propTypes = {
  editMode: PropTypes.string, 
  setEditMode: PropTypes.func, 
  editData: PropTypes.func
}


export default EditMap