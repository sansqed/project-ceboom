import "./Search.css"
import React from 'react'
import { nodesAll } from '../../Assets/Data/intersection-data.js'
import Select, { components } from 'react-select'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "../../Components/Navbar/Sidebar.css";
import "../../Components/CustomButton/CustomButton";

const Search = ({ children }) => {
  const [mark_name,setMarkerName] = useState('Name')
  const [mark_type,setMarkerType] = useState('Type')
  const [mark_location,setMarkerLocation] = useState('Location')

  function handleEvent(event){
    setMarkerName(event.label)
    setMarkerType(event.mType)
    setMarkerLocation(event.mLocation)
  }

  const colorStyles = {
    control: (styles, {isFocused}) => ({...styles, backgroundColor: 'white', color: 'black', borderRadius: 16, border: "2px solid orange", padding: 3, 
    "&:hover": {borderColor: "orange"}, boxShadow: isFocused ? "0px 0px 6px #ff8b67" : "none",}),
    option: (styles, {isFocused}) => { return {...styles, backgroundColor: isFocused ? '#F3AC4A' : 'white', color: isFocused ? 'white': 'solid black'}},
    placeholder: (styles) => { return {...styles, color: 'solid black'}}
}

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <SearchIcon style = {{fill: "orange"}}/>
      </components.DropdownIndicator>
    );
  };

  return(

    <div className="sidebar-submenu">
      <div className="page-title">
          <div className="page-title-text">
            Search Location
          </div>
        </div>
        <div className="pathfinder-searchtitle"> Inquire on a particular location </div>

    <div className="pathfinder-search">
        <div className="pathfinder-fromsearchbar">

                <Select
                    className='fromsearch'
                    components={{ DropdownIndicator }}
                    options={nodesAll.nodes.map(({name, landmark_type, location})=>({label: name, mType: landmark_type, mLocation: location}) )} 
                    onChange={handleEvent}
                    styles={colorStyles}
                />
        </div>
    </div>

    <div className="search-recentsearches">
    Location Information
    <hr/>
    <p> {mark_name}</p>
    <p> {mark_type}</p>
    <p> {mark_location}</p>
    </div>
    </div>
  )
}

export default Search;