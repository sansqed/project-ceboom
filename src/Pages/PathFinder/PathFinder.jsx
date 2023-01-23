import React from 'react'
import Select, { components } from 'react-select'
import "./PathFinder.css"
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "../../Components/Navbar/Sidebar.css";
import "../../Components/SidebarCustomButton/SidebarCustomButton";
import SidebarCustomButton from "../../Components/SidebarCustomButton/SidebarCustomButton";

const PathFinder = ({ children }) => {
    const data = [
        {
          value: 1,
          label: "lahug brgy hall",
          location: "cebu city",
          type: "brgy hall"
        },
        {
          value: 2,
          label: "lahug center",
          location: "cebu city",
          type: "brgy hall"// <insert other data>
        }
    ]
    const fromLocation = (selectedOption) => {
        setFromLocation(() => [selectedOption.label]);
    }

    const towardsDestination = (selectedOption,) => {
        setToLocation(() => [selectedOption.label]);
    }

    const colorStyles = {
        control: (styles, {isFocused}) => ({...styles, backgroundColor: 'white', color: 'black', borderRadius: 16, border: "2px solid orange", padding: 3, 
        "&:hover": {borderColor: "orange"}, boxShadow: isFocused ? "0px 0px 6px #ff8b67" : "none",}),
        option: (styles, {isDisabled, isSelected}) => { return {...styles, backgroundColor: isDisabled ? 'white': '#F3AC4A', 
        backgroundColor: isSelected ? '#F3AC4A' : 'white'}},
        placeholder: (styles) => { return {...styles, color: 'solid black'}}
    }

    const DropdownIndicator = props => {
        return (
          <components.DropdownIndicator {...props}>
            <SearchIcon style = {{fill: "orange"}}/>
          </components.DropdownIndicator>
        );
      };
      

    const [from, setFromLocation] = useState('a');
    const [to, setToLocation] = useState('b');

  return(

    <div className="sidebar-submenu">
        <div className="pathfinder">

        <div className="page-title">
          <div className="page-title-text">
            Path Finder
          </div>
        </div>

                <div className="pathfinder-searchtitle"> Where would you like to go? </div>

                <div className="pathfinder-search">
                    <div className="pathfinder-fromsearchbar">
                        <div className="pathfinder-fromlabel"> From:</div>

                            <Select
                                className='fromsearch'
                                components={{ DropdownIndicator }}
                                options={data} 
                                onChange={(fromLocation)}
                                styles={colorStyles}
                            />

                        <div className="pathfinder-fromdescription"> You can type out a location, or you can click a landmark on the map. </div>
                    </div>

                    <div className="pathfinder-tosearchbar">
                        <div className="pathfinder-tolabel">To: </div>

                        <Select 
                            className='tosearch'
                            components={{ DropdownIndicator }}
                            options={data} 
                            onChange={towardsDestination} 
                            styles={colorStyles}
                        />

                        <div className="pathfinder-todescription">You can type out a location, or you can click a landmark on the map. </div>
                    </div>
                    
                    <div className="pathfinder-searchsubmit">
                        <button type="submit">
                        <p>GET DIRECTIONS</p>
                        </button>
                    </div>
                </div>

            <div className="pathfinder-recentsearches">
                Recent Searches
                <hr/>
                <p> {from} </p>
                <p> {to} </p>
            </div>
          
        </div>
    </div>
  )
}

export default PathFinder;