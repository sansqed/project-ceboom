import React, { useState } from 'react';
import { Menu, Search } from "@mui/icons-material"
import { Box } from "@mui/system"
import { IconButton } from '@mui/material';

import { NavLink } from "react-router-dom"
import './sidebar.css'

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "#search",
      name: "Test",
      icon: <Search />
    },

  ]
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div classNmae="top-section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="menubars">
            <Box>
              <IconButton>
                {" "}
                <Menu onClick={toggle} />
              </IconButton>
            </Box>
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{ display: "none" }} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar;