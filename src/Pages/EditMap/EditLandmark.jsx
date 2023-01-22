import "./EditLandmark.css"
import FormInput from "../EditMap/FormInput"
import {useState} from "react";

const EditLandmark = () => {
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
      name:"newlandmarkType",
      type:"newlandmarkType",
      placeholder:"Enter New Landmark Type",
      errorMessage: "This field is required.",
      label: "New Landmark Type",
      required: true,
    },
    {
      id: 3,
      name:"newlandmarkAddress",
      type:"newlandmarkAddress",
      placeholder:"Enter New Landmark Address",
      errorMessage: "This field is required.",
      label: "New Landmark Address",
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
      <div className="editLandmark">
        <form onSubmit={handleSubmit}>
          <h1> Edit Landmark </h1>
          {inputs.map((input) => (
            <FormInput key = {input.id} {...input} value = {values[input.name]} onChange={onChange}/>
          ))}
          <button onclick={afterSubmit}>Submit Editted Landmark</button>
        </form>
      </div>
    </div>
  );
};

export default EditLandmark;