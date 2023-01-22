import React from 'react';

// CSS file
import "./SidebarCustomButton.css"

const SidebarCustomButton = (props) => {
  return (
    <div className="sidebar-custombutton">
      <button type ="submit" className={props.className}>
        {props.text}
      </button>
    </div>
  );
}

export default SidebarCustomButton;