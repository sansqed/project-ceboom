import React from 'react'
import { nodesAll } from '../../Assets/Data/intersection-data.js'
import Select, { components } from 'react-select'
import "./PathFinder.css"
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "../../Components/Navbar/Sidebar.css";
import "../../Components/CustomButton/CustomButton";
import CustomButton from "../../Components/CustomButton/CustomButton";

const PathFinder = ({ children }) => {
    const [from, setFromLocation] = useState('Location A');
    const [to, setToLocation] = useState('Location B');

    const fromLocation = (selectedOption) => {
        setFromLocation(selectedOption.label);
    }

    const towardsDestination = (selectedOption,) => {
        setToLocation(selectedOption.label);
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
      

    

    console.log(from, to)

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
                                options={nodesAll.nodes.map(({name, id})=>({label: name, value: id}) )} 
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
                            options={nodesAll.nodes.map(({name, id})=>({label: name, value: id}) )} 
                            onChange={towardsDestination} 
                            styles={colorStyles}
                        />

                        <div className="pathfinder-todescription">You can type out a location, or you can click a landmark on the map. </div>
                    </div>
                    
                    {/* <div className="pathfinder-searchsubmit">
                        <button type="submit">
                        <p>GET DIRECTIONS</p>
                        </button>
                        
                    </div> */}
                    {/* 
                    
                        PLEASE USE THIS BUTTON FOR ALL BUTTONS.
                        YOU CAN STILL CHANGE THE CSS USING THE CLASSNAME
                        THANKS

                        PLEASE CHECK src/Components/Button/Button.jsx

                         */}
                    <CustomButton 
                      divClassName="pathfinder-searchsubmit"
                      title="GET DIRECTIONS" className="pathfinder-searchsubmit-btn" 
                      type="submit"
                      />
                </div>

            <div className="pathfinder-recentsearches">
                Recent Searches
                <hr/>
                <p> {from} TO</p>
                <p> {to}</p>
            </div>
          
        </div>
    </div>
  )
}

export default PathFinder;