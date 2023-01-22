import "./AddRoad.css"
import FormInput from "../EditMap/FormInput"
import {useState} from "react";
import React from 'react';

const AddRoad = () => {
  const [values, setValues] = useState ({
    roadName:"",
    roadType:"",
    roadAddress:"",
    emailAddress:"",
  });

  const inputs = [
    {
      id: 1,
      name:"addRoad",
      type:"roadName",
      placeholder:"Enter Road Name",
      errorMessage: "This field is required.",
      label: "Road Name",
      required: true,
    },
    {
      id: 2,
      name:"roadType",
      type:"roadType",
      placeholder:"Enter Road Type",
      errorMessage: "This field is required.",
      label: "Road Type",
      required: true,
    },
    {
      id: 3,
      name:"roadAddress",
      type:"roadAddress",
      placeholder:"Enter Road Address",
      errorMessage: "This field is required.",
      label: "Road Address",
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const afterSubmit = () => {
    alert("Form has been submitted");
  };

  return (
    <div className="center">
      <div className="addRoad">
        <form onSubmit={handleSubmit}>
          <h1> Add Road </h1>
          {inputs.map((input) => (
            <FormInput key = {input.id} {...input} value = {values[input.name]} onChange={onChange}/>
          ))}
          <button onclick={afterSubmit}>Add Road</button>
        </form>
      </div>
    </div>
  );
};

export default AddRoad;