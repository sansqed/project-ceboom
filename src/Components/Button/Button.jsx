import React from 'react';

// CSS file
// import "./Button.css"

const Button = (props) => {
  return (
    <div className={props.className}>
      <button type={props.type} onClick={props.onClick}  role={props.role}>
        {props.title}
      </button>
    </div>
  );
}

export default Button;