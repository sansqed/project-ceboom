import "./EditMap.css"
import React, { useState } from 'react';
import "../../Components/Navbar/Sidebar.css"
import { NavLink, useLocation } from "react-router-dom"
import CustomButton from "../../Components/CustomButton/CustomButton"
import AddLandmarks from "../Map/AddLandmarksFn";


const AddLandmarksSidebar = (addedLandmarks) => {


  return(

    <div className="sidebar-submenu">
      <div className="editMap-Container">Add Location</div>
        {addedLandmarks && addedLandmarks?.length? addedLandmarks?.map((landmark)=>{
          console.log(landmark)
        }):<></>}
    
    </div>
  );
};

export default AddLandmarksSidebar;