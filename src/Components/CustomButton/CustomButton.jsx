import React from 'react';

// CSS file
// import "./CustomButton.css"

const CustomButton = (props) => {
  return (
    <div className={props.divClassName}>
      <button className={props.className}type={props.type} onClick={props.onClick}  role={props.role}>
        {props.title}
      </button>
    </div>
  );
}

export default CustomButton;