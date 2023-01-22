import "./AddLandmark.css"
import FormInput from "../EditMap/FormInput"
import {useState} from "react";
import "../../Components/Markers/Markers.jsx"

const AddLandmark = () => {
  const [values, setValues] = useState ({
    landmarkName:"",
    landmarkType:"",
    landmarkAddress:"",
    emailAddress:"",
  });

  const inputs = [
    {
      id: 1,
      name:"addLandmark",
      type:"landmarkName",
      placeholder:"Enter Landmark Name",
      errorMessage: "This field is required.",
      label: "Landmark Name",
      required: true,
    },
    {
      id: 2,
      name:"landmarkType",
      type:"landmarkType",
      placeholder:"Enter Landmark Type",
      errorMessage: "This field is required.",
      label: "Landmark Type",
      required: true,
    },
    {
      id: 3,
      name:"landmarkAddress",
      type:"landmarkAddress",
      placeholder:"Enter Landmark Address",
      errorMessage: "This field is required.",
      label: "Landmark Address",
      required: true,
    },
    {
      id: 4,
      name:"email",
      type:"email",
      placeholder:"Your Email Address",
      errorMessage: "It should be a valid email address.",
      label: "Email Address",
      required: true,
    },
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
      <div className="addLandmark">
        <form onSubmit={handleSubmit}>
          <h1> Add Landmark </h1>
          {inputs.map((input) => (
            <FormInput key = {input.id} {...input} value = {values[input.name]} onChange={onChange}/>
          ))}
          <button onclick={afterSubmit}>Submit Landmark</button>
        </form>
      </div>
    </div>
  );
};

export default AddLandmark;