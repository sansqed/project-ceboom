import React, { useState } from 'react';

// ! material UI icons and other stuff. please check docs. Material UI has many capabilities
// ! that are all worth checking out. 
import { Menu, Search, Route, AddLocation, Traffic } from "@mui/icons-material"
import { Box } from "@mui/system"
import { IconButton } from '@mui/material';

// ! routing
import { NavLink } from "react-router-dom"

// ! CSS
import './Sidebar.css'

// ! other imports
import CeboomLogo from '../../Assets/images/project_ceboom_logo.png'


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('MENU');
  const toggle = () => setIsOpen(!isOpen);

  const doubleToggle = () => {
    toggle();
    setSelectedMenuItem('MENU');
  }

  const menuItem = [
    {
      path: "#search",
      name: "Search",
      icon: <Search sx={{ fontSize: "3.5vh" }} />
    },
    {
      path: "#pathfinder",
      name: "Pathfinder",
      icon: <Route sx={{ fontSize: "3.5vh" }} />
    },
    {
      path: "#editmap",
      name: "Edit Map",
      icon: <AddLocation sx={{ fontSize: "3.5vh" }} />
    },
    {
      path: "#updatetraffic",
      name: "Update Traffic",
      icon: <Traffic sx={{ fontSize: "3.5vh" }} />
    },
  ]

  return (
    <div className="sidebar-container">
      <div style={{ width: isOpen ? "23vh" : "6.5vh" }} className="sidebar">
        <div className="sidebar-top-section">
          <div className="sidebar-hamburger">
            <Box>
              <IconButton>
                {" "}
                <Menu onClick={doubleToggle} sx={{ fontSize: "4vh" }} />
              </IconButton>
            </Box>
          </div>
          <div className="sidebar-display">
            <div style={{ display: isOpen ? "flex" : "none" }} className="sidebar-display-text">{selectedMenuItem}</div>
          </div>

        </div>
        <div className="sidebar-menu">
          {
            menuItem.map((item, index) => (
              <div to={item.path} key={index} className="sidebar-link" activeclassName="sidebar-active" onClick={() => {setSelectedMenuItem(item.name);setIsOpen(false)}}>
                <NavLink to={item.path}>
                  <Box>
                    <IconButton >
                      <div className="sidebar-icon">{item.icon}</div>
                    </IconButton>
                  </Box>
                </NavLink>
                <div style={{ display: isOpen ? "flex" : "none" }} className="sidebar-link_text">{item.name}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar;