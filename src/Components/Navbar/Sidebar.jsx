import React, { useState } from 'react';

// ! material UI icons and other stuff. please check docs. Material UI has many capabilities
// ! that are all worth checking out. 
import { Menu, Search, Route, AddLocation, Traffic , AccountCircle} from "@mui/icons-material"
import { ThemeProvider } from "@mui/material/styles"

import { Box } from "@mui/system"
import { IconButton } from '@mui/material';
// import darkButton from '../../Themes/SidebarIconThemes/SidebarDark';
// ! routing
import { NavLink } from "react-router-dom"

// ! CSS
import './Sidebar.css'

// ! other imports
import CeboomLogo from '../../Assets/images/project_ceboom_logo.png'


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('MENU');
  const [usernameDisplay, setUsernameDisplay] = useState('Guest')
  const toggle = () => setIsOpen(!isOpen);

  const doubleToggle = () => {
    toggle();
    setSelectedMenuItem('MENU');
  }

  const menuItem = [
    {
      path: "#search",
      name: "Search",
      icon: <Search sx={{ fontSize: "3.5vh" }} style={{color: 'black'}}/>
    },
    {
      path: "#pathfinder",
      name: "Pathfinder",
      icon: <Route sx={{ fontSize: "3.5vh" }} style={{color: 'black'}}/>
    },
    {
      path: "#editmap",
      name: "Edit Map",
      icon: <AddLocation sx={{ fontSize: "3.5vh" }} style={{color: 'black'}}/>
    },
    {
      path: "#updatetraffic",
      name: "Update Traffic",
      icon: <Traffic sx={{ fontSize: "3.5vh" }} style={{color: 'black'}}/>
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
                <Menu onClick={doubleToggle} sx={{ fontSize: "4vh" }} style={{color: 'black'}}/>
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
              <NavLink to={item.path} style={{textDecoration: 'none'}}>
              <div to={item.path} key={index} className="sidebar-link" activeclassName="sidebar-active" onClick={() => {setSelectedMenuItem(item.name);setIsOpen(false)}}>
                
                  <Box>
                    <IconButton >
                      <div className="sidebar-icon">{item.icon}</div>
                    </IconButton>
                  </Box>
                
                <div to={item.path} style={{ display: isOpen ? "flex" : "none"}} className="sidebar-link_text">{item.name}</div>
              </div>
              </NavLink>
            ))
          }
          <div className="sidebar-bottom-section">
            <Box>
              <IconButton>
                <div className="sidebar-user-icon" onClick={() => setUsernameDisplay('Ryan D.')}>
                  {/* <ThemeProvider theme={darkButton}> */}
                    <AccountCircle sx={{fontSize: "3.5vh"}} style={{color: 'black'}}/>
                  {/* </ThemeProvider> */}
                </div>
              </IconButton>
            </Box>
            <div className = "sidebar-bottom-section-link-text"
                style={{display: isOpen? "flex": "none"}}>
              {usernameDisplay}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar;