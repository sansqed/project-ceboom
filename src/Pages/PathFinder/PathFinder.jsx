import React, {useEffect, useState} from 'react'
import { nodesAll } from '../../Assets/Data/intersection-data.js'
import Select, { components } from 'react-select'
import "./PathFinder.css"
import SearchIcon from '@mui/icons-material/Search';
import "../../Components/Navbar/Sidebar.css";
import "../../Components/CustomButton/CustomButton";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { shortestPath } from '../../ApiCalls/RoadsAPI.jsx'
import { AddHistory, GetHistory } from '../../ApiCalls/HistoryAPI.jsx';
import { MapContainer, Marker, Popup, GeoJSON, Polyline, useMap, FeatureGroup } from "react-leaflet"

import CloseIcon from '@mui/icons-material/Close';

const PathFinder = ({setPath, landmarksData, setPathStartEnd}) => {
    const [from, setFromLocation] = useState('Location A');
    const [to, setToLocation] = useState('Location B');
    // const [user_id, setUserId] = useState(localStorage?.getItem("user_id")?.slice(1, -1));
    const [searchHistory, setSearchHistory] = useState([]);

    // const [path, setPath] = useState([]);
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    const fromLocation = (selectedOption) => {
        setFromLocation(selectedOption.value);
    }

    const towardsDestination = (selectedOption,) => {
        setToLocation(selectedOption.value);
    }
  
    // const getUserData = () => {
    //   if (localStorage.getItem("user") != null){
    //     setUserId(localStorage.getItem("user_id").slice(1,-1));
    //   }
    // }

    // async function getHistory(){
    //   const response = await GetHistory();
    //   console.log(response.data)
    // }

    // useEffect(()=>{
    //   getUserData()
    //   getHistory()
    // },[])

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

    async function FetchData (){
      const response = await shortestPath(from, to).then((data)=>{
        let start = landmarksData.find(({id})=>id == from)
        start.landmark_type = "Start"

        let end = landmarksData.find(({id}) => id == to)
        end.landmark_type = "End"

        setPathStartEnd({
          start: start,
          end: end,
        })
        console.log(data.data.data)
        
        setPath(data.data.data.data)

        
        // console.log(data.data.data.latitudes)
        // let shortPath = road.latitudes.map((latitude, index) =>
        //   [latitude, road.longitudes[index]])

        // return(
        //   <Polyline key={id} pathOptions = {purpleOptions} positions={shortPath}></Polyline>
        // )
      })
    }
    
    // async function SetHistory (){
    //   console.log(from, to, user_id);
    //   const response = await AddHistory(user_id, from, to);
      
    //   console.log(response);
    // }

    // console.log(from, to)

  return(

    <div className="sidebar-submenu-pathfinder" style={{width: isOpen? "55vh" : "0vh"}}>
        <div className="pathfinder">

        <div className="page-title-pathfinder">
          <div className="page-title-text-pathfinder">
            Path Finder
          </div>
          <CloseIcon className="pathfinder-close-icon" onClick={toggle}></CloseIcon>
        </div>

                <div className="pathfinder-searchtitle"> Where would you like to go? </div>

                <div className="pathfinder-search">
                    <div className="pathfinder-fromsearchbar">
                        <div className="pathfinder-fromlabel"> From:</div>

                            <Select
                                className='fromsearch'
                                components={{ DropdownIndicator }}
                                options={landmarksData?.map(({name, id})=>({label: name, value: id}) )} 
                                onChange={(fromLocation)}
                                styles={colorStyles}
                            />

                        <div className="pathfinder-fromdescription"> You can type out a location of the landmark. </div>
                    </div>

                    <div className="pathfinder-tosearchbar">
                        <div className="pathfinder-tolabel">To: </div>

                        <Select 
                            className='tosearch'
                            components={{ DropdownIndicator }}
                            options={landmarksData?.map(({name, id})=>({label: name, value: id}) )} 
                            onChange={towardsDestination} 
                            styles={colorStyles}
                        />

                        <div className="pathfinder-todescription">You can type out a location of the landmark. </div>
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
                      onClick={()=>{
                        FetchData();
                        // SetHistory()
                      }}
                      />
                </div>

            {/* <div className="pathfinder-recentsearches">
                Recent Searches
                <hr/>

                <p> <span style={{color: "#EB811E", fontSize: "25px", fontWeight: "700"}}>{from}</span></p>
                <p> TO</p>
                <p> <span style={{color: "#EB811E", fontSize: "25px", fontWeight: "700"}}>{to}</span></p>
            </div>
                    */}

          
        </div>
    </div>
  )
}

export default PathFinder;