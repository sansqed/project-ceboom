//CSV
import Papa from 'papaparse'
// import data from '../../Assets/Data/CebuSouthLandmarks.csv'
// import data from '../../Assets/Data/brgy-lahug-landmarks.csv'
// import data from '../../Assets/Data/cebu-landmarks-minimal.csv'

import "./Map.css"
import {MapContainer, Marker, Popup, GeoJSON, Polyline, useMap, FeatureGroup, Tooltip} from "react-leaflet"
import {CebuMap} from "../../Assets/CebuMap"
import {CebuRoads} from "../../Assets/CebuRoadsV2.js"
import SideBar from "../../Components/Navbar/Sidebar"
import { EditControl } from 'react-leaflet-draw';
import "leaflet-draw/dist/leaflet.draw.css"
import "leaflet/dist/leaflet.css"

import MarkerLayer from "../../Components/Markers/Markers"
import L, { latLng } from "leaflet"

import { Navigate, useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

import EditMap from "../EditMap/EditMap"
import Search from "../Search/Search"
import PathFinder from "../PathFinder/PathFinder"
import UpdateTraffic from "../UpdateTraffic/UpdateTraffic"

import "leaflet-snap/leaflet.snap"
import "leaflet-geometryutil"

import '@geoman-io/leaflet-geoman-free';  
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';  

import {CreateNodes, GetNodes} from "../../ApiCalls/NodeAPI"
import {CreateRoads, GetRoads} from "../../ApiCalls/RoadsAPI"
import {AddLandmarkFn, EditLandmarkFn, RemoveLandmarkFn} from './EditLandmarksFn'
import AddLandmarksSidebar from '../EditMap/AddLandmarksSidebar'
import { AddRoads } from './AddRoads'
import { locationChecker } from '../../Components/Markers/Markers'

import Select, { components } from 'react-select'
import { landmarkAll } from '../../Assets/Data/landmarktype-data.js'
import { locationsAll } from '../../Assets/Data/location-data.js'
import { SetTraffic } from '../../ApiCalls/RoadsAPI'

import {FetchData} from '../../Helpers/FetchData'
import { ConstructionOutlined, Opacity } from '@mui/icons-material'

const Map = ({ children }) => {
  const location = useLocation()
  const subpage = location.hash  
  const [intersections, setIntersections] = useState([])
  const [landmarks, setLandmarks] = useState([])
  const [roads, setRoads] = useState([])
  const [currRoad, setCurrRoad] = useState(null)
  const [currNode, setCurrNode] = useState(null)
  const [isClicked, setIsClicked] = useState(false)
  const [editData, setEditData] = useState([])
  const [tempData, setTempData] = useState()
  const [editedNodes, setEditedNodes] = useState({created:[], deleted:[], edited:[]})
  const [editedEdges, setEditedEdges] = useState({created:[], deleted:[], edited:[]})
  const [allNodes, setAllNodes] = useState([])
  const [isFetchData, setIsFetchData] = useState(true)
  const [showTooltip, setShowToolTip] = useState(true)
  const [pathStartEnd, setPathStartEnd] = useState(null)
  const [showIntersections, setShowIntersections] = useState(false)
  const [roleId, setRoleId] = useState("-1")

  FetchData(landmarks, setLandmarks, intersections, setIntersections, setRoads, setAllNodes, isFetchData)

  const [path, setPath] = useState([]);

  useEffect(()=>{
    setRoleId(localStorage.getItem("role_id"))
  },[])

  const HandleSubpage = () => {
    if (subpage === "#addroads")
      setShowToolTip(false)
    else(
      setShowToolTip(true)
    )

    if (subpage !== "#pathfinder"){
      setPathStartEnd(null)
      setPath(null)
    }

    if (subpage === "#addroads" && roleId==="\"1\"")
      setShowIntersections(true)
    else
      setShowIntersections(false)

    if (subpage === "#editmap" && roleId==="\"1\""){
      return(<EditMap/>)
    }
    else if (subpage === "#search"){
      return(<Search landmarksData={landmarks} />)
    }
    else if (subpage === "#pathfinder"){
      return(<PathFinder setPath={setPath} landmarksData={landmarks} setPathStartEnd={setPathStartEnd}/>)
    }
    else if (subpage === "#updatetraffic" && roleId==="\"1\""){
      return(<UpdateTraffic roadInfo={currRoad}/>)
    }
    else if ((subpage === "#addlandmark" || subpage === "#addlandmark?adding" || subpage === "#addroads") && roleId==="\"1\""){
      return(<EditMap/>)
    }
  }
  console.log(currRoad)
  console.log(pathStartEnd)

  const handleUpdateTraffic = (road,status) => {
    if (status === "Light"){
      SetTraffic(road.id,0)      
    }
    else if (status === "Moderate"){
      SetTraffic(road.id,1000)
    }
    else if (status === "Heavy"){
      SetTraffic(road.id,2000)
    }

    console.log(road)
    setCurrRoad({oldTraffic: road?.traffic==2000? "Heavy":road?.traffic==1000? "Moderate":"Light", newTraffic: status})
    window.location.reload(false)
  }


  const MapMarkerId = () =>{
    let map = useMap()

    useEffect(()=>{
      if(landmarks.length > 0){
        map.eachLayer((layer) => {
          if(layer._latlng){
            let index = landmarks?.findIndex(({latitude,longitude}) => layer._latlng.lat==latitude && layer._latlng.lng==longitude)
            if (index != -1){
              landmarks[index]["leaflet_id"] = layer._leaflet_id
            } else { 
              index = intersections?.findIndex(({latitude,longitude}) => layer._latlng.lat==latitude && layer._latlng.lng==longitude)
              if (intersections != -1) {
                intersections["leaflet_id"] = layer._leaflet_id
              } 
            } 
          }
        })
      }

    },[landmarks,intersections,roads])
  }

  const nameIn = useRef(null)

  async function handleEditChange (data) {

    data.name = nameIn.current.value
    data.landmark_type = document.getElementsByClassName("landmark_type-select")[0].textContent
    data.location = document.getElementsByClassName("location-select")[0].textContent
    console.log(data)


    const response = await CreateNodes([data])
    console.log(response)

    if (response.data.status !== 201){
      console.log("FAILED")
    } else {
      console.log("SUCCESS")
    } 

  }

  const HandleMode = () => {
    const map = useMap()

    map.closePopupOnClick = false

    
    if(subpage==="#addlandmark?adding"){
      AddLandmarkFn(setCurrNode, editData)
      return(
        <div> 
          <Navigate to={"#addlandmark"}/>
          {currNode? 
          
            <Marker
              position={[currNode?.latitude, currNode?.longitude]}
              icon={currNode?.landmark_type}
            />
            :<></>
          }
        </div>
      )
    } 
    
    else if(subpage==="#addlandmark"){

      return(
        <div>
          {editData?.map((data, index)=>(
          
          <FeatureGroup >
            <Popup maxWidth={200} keepInView={true} interactive={true} closePopupOnClick={true} closeOnEscapeKey={false} autoClose={false} closeOnClick={false}>
              <label><span style={{color: "#EB811E", fontSize: "17px", fontWeight: "700"}}>Name</span></label>
              <input id={data.leaflet_id} ref={nameIn} name='name' autoComplete="off"/>
              <label>Type of Landmark</label>
              {/* <input id={data.leaflet_id} name='landmark_type' autoComplete='off' onChange={e => handleEditChange(e)}/> */}
							<Select
								className='landmark_type-select'
								options={landmarkAll.landmark.map(({label, value})=>({label, value}) )}
								onChange={e => e=>handleEditChange(e)}
							/>
              <label>Location</label>
              {/* <input id={data.leaflet_id} name='location' autoComplete='off' onChange={e => handleEditChange(e)}/> */}
							<Select
								className='location-select'
								options={locationsAll.location.map(({label, value})=>({label, value}) )}
								onChange={e => e=>handleEditChange(e)}
							/>
              <input id={data.leaflet_id} name={"submit-addlandmark"} type={"submit"} onClick={e=>handleEditChange(data)}/>
            </Popup>
            <Marker 
              key={data.leaflet_id}
              position={[data.latitude, data.longitude]} 
              icon={locationChecker(data.landmark_type)}
            />
          </FeatureGroup>
          ))}
        </div>
      )
    }

    // else if (subpage == "#removelandmark"){
    //   RemoveLandmarkFn(landmarks, editedNodes, setEditedNodes)
    // }
    else if (subpage == "#editlandmark"){
      EditLandmarkFn(landmarks, editedNodes, setEditedNodes)
    }

    else if (subpage == "#addroads"){
      AddRoads(allNodes)
    }
  }
  


  // MAPS LANDMARK ID TO LEAFLET ID
  // leaflet ID is essential for rendering
  const RenderRoads = () => {
    let map = useMap()
    const lightTraffic = {color: 'white', opacity: 0.5}
    const moderateTraffic = {color: 'orange', opacity: 0.5}
    const heavyTraffic = {color: 'red', opacity: 0.5}
    return(
      roads?.map((road) =>{

        let allPositions = road.latitudes.map((latitude,index) => 
          [latitude,road.longitudes[index]])
        let id = +road.id
        // console.log(allPositions)
        return(
          <FeatureGroup>
            {subpage==="#updatetraffic"? 
              <Popup>
              <div className = "changestatus">
                <b>Change Status to:</b>
                <div className = "tbutton-container">
                  <button className = "lightwrapper" onClick={(e) => handleUpdateTraffic(road, "Light")}>
                    <div className = "trafficstatus-light"></div>
                    <small className = "light">Light</small>    
                  </button>
                  <button className = "modwrapper" onClick={(e) => handleUpdateTraffic(road, "Moderate")}>
                    <div className = "trafficstatus-moderate"></div>
                    <small className = "moderate">Moderate</small>  
                  </button>
                  <button className = "heavywrapper" onClick={(e) => handleUpdateTraffic(road, "Heavy")}>
                    <div className = "trafficstatus-heavy"></div>
                    <small className = "heavy">Heavy</small>   
                  </button>
                </div>
              </div>
            </Popup>
            :<></>}
            <Polyline 
              key={id} 
              pathOptions={
                road.traffic==2000? heavyTraffic:road.traffic==1000? moderateTraffic:lightTraffic
              } 
              positions={allPositions}
            />
          </FeatureGroup>

        )
      })
    )    
  }

  const RenderShortPath = () => {
    const redOptions = { color: '#0079be', weight: 7 }
    console.log(path)

    return (
      path?.map((shortPath) => {

        let thisPath = shortPath.latitudes.map((latitude, index) =>
          [latitude, shortPath.longitudes[index]])
        let id = +shortPath.id
        
        if(subpage === "#pathfinder")
          return (
            <Polyline key={id} pathOptions={redOptions} positions={thisPath}>
            </Polyline>
          )
      }))}

    
  const RenderStartEndMarker = () => {
    console.log(path)
    if(path && path.length)
      return (
        <div>
          <MarkerLayer
            data={pathStartEnd.start}
            zIndexOffset={10000000000000}
            riseOnHover={true}
          />
          <MarkerLayer
            data={pathStartEnd.end}
            zIndexOffset={10000000000000}
            riseOnHover={true}
          />
        </div>
      )
  }
  console.log(allNodes)

  const DrawMap = () => {
    let map = useMap()

    map.eachLayer((layer)=>layer?.redraw())
    // map.pm.addControls({  
    //   position: 'topright',  
    //   // drawCircle: false,  
    // });  
  }
  
  return(

    <div className="map-container">

      <SideBar/>
      <HandleSubpage/>

      <link 
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.0/dist/leaflet.css"
      />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.min.css"/>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"/>

      <MapContainer 
        center={[10.3157, 123.8854]} 
        zoom={9} 
        minZoom={9}
        scrollWheelZoom={true}
        closePopupOnClick={false}
        
      >
          {/* <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className='leaflet-tiles'
          />  */}

        {/* Renders the map */}
        <GeoJSON 
          data={CebuMap.features}
          className="cebu-outline"
        />

        
        <MapMarkerId/>
        <HandleMode/>
        <RenderRoads/>
        {/* <DrawMap/> */}
        {landmarks?.map((landmark) =>{
          return(
            <MarkerLayer
            data = {landmark}
            showTooltip={showTooltip}
            zIndexOffset={10}
            />)
          })}
          <HandleMode/>

        {showIntersections && intersections?.map((landmark) => {
          return (
            <MarkerLayer
            data={landmark}
            
            />)
          })}
        {subpage==="#pathfinder"? 
          <div>
            <RenderStartEndMarker/>
            <RenderShortPath/>    
          </div>
        :<></>
        }
      </MapContainer>      
      
      </div>
  )
}

export default Map;