import "./Search.css"
import React from 'react'
import { nodesAll } from '../../Assets/Data/intersection-data.js'
import Select, { components } from 'react-select'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "../../Components/Navbar/Sidebar.css";
import "../../Components/CustomButton/CustomButton";
import CloseIcon from '@mui/icons-material/Close';

const Search = ({ children }) => {
  const [mark_name,setMarkerName] = useState('Name')
  const [mark_type,setMarkerType] = useState('Type')
  const [mark_location,setMarkerLocation] = useState('Location')
  const [mark_latitude,setMarkerLatitude] = useState('Latitude')
  const [mark_longitude,setMarkerLongitude] = useState('Longitude')
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  function handleEvent(event){
    setMarkerName(event.label)
    setMarkerType(event.mType)
    setMarkerLocation(event.mLocation)
    setMarkerLatitude(event.mLatitude)
    setMarkerLongitude(event.mLongitude)
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

    <div className="sidebar-submenu-search" style={{width: isOpen? "55vh" : "0vh"}} >
        <div className="page-title-search">
            <div className="page-title-text-search">
              Search Location
            </div>
            <CloseIcon className="Icon" onClick={toggle}></CloseIcon>
          </div>
          <div className="search-searchtitle"> Inquire on a particular location </div>

        <div className="search-search">
            <div className="search-fromsearchbar">
                    <Select
                        className='fromsearch'
                        components={{ DropdownIndicator }}
                        options={nodesAll.nodes.map(({name, landmark_type, location, latitude, longitude})=>({label: name, mType: landmark_type, mLocation: location,  mLatitude: latitude,  mLongitude: longitude}) )} 
                        onChange={handleEvent}
                        styles={colorStyles}
                    />
            </div>
        </div>

        <div className="search-recentsearches">
        <span style={{fontWeight: "700"}}>Location Information</span>
        <hr/>
        <p><span style={{color: "#EB811E", fontSize: "25px", fontWeight: "700"}}>{mark_name}</span></p>
        <p> {mark_type}</p>
        <p> {mark_location}</p>
        <p> ( {mark_latitude} , {mark_longitude} ) </p>
        </div>
    </div>
  )
}

export default Search;