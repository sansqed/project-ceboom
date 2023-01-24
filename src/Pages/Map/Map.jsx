//CSV
import Papa from 'papaparse'
import data from '../../Assets/Data/CebuSouthLandmarks.csv'
// import data from '../../Assets/Data/brgy-lahug-landmarks.csv'
// import data from '../../Assets/Data/testData.csv'

import "./Map.css"
import {MapContainer, Marker, Popup, GeoJSON, FeatureGroup, TileLayer, Circle, Polyline, useMap, useMapEvents} from "react-leaflet"
import {CebuMap} from "../../Assets/CebuMap"
import {CebuRoads} from "../../Assets/CebuRoadsV2.js"
import SideBar from "../../Components/Navbar/Sidebar"
import { EditControl } from 'react-leaflet-draw';
import "leaflet-draw/dist/leaflet.draw.css"
import "leaflet/dist/leaflet.css"

import MarkerLayer from "../../Components/Markers/Markers"
import L, { latLng } from "leaflet"

import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import EditMap from "../EditMap/EditMap"
import AddLandmark from "../EditMap/AddLandmark"
import AddRoad from "../EditMap/AddRoad"
import EditLandmark from "../EditMap/EditLandmark"
import Search from "../Search/Search"
import PathFinder from "../PathFinder/PathFinder"
import UpdateTraffic from "../UpdateTraffic/UpdateTraffic"

import "leaflet-snap/leaflet.snap"
import "leaflet-geometryutil"

import '@geoman-io/leaflet-geoman-free';  
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';  

import {CreateNodes} from "../../ApiCalls/NodeAPI"
import {CreateRoads} from "../../ApiCalls/RoadsAPI"
import { MoveDownSharp } from '@mui/icons-material'


const Map = ({ children }) => {
  const location = useLocation()
  const subpage = location.hash  
  const [roads, setRoads] = useState([])
  const [currRoad, setCurrRoad] = useState(null)
  const [isClicked, setIsClicked] = useState(false)
  const [isStartValid, setIsStartValid] = useState(false)
  const [markerMapping, setMarkerMapping] = useState([])
  const [mode, setMode] = useState('Normal')


  const HandleSubpage = () => {
    if (subpage === "#editmap")
      return(<EditMap/>)
    else if (subpage === "#AddLandmark")
      return (<AddLandmark/>)
    else if (subpage === "#AddRoad")
      return (<AddRoad/>)
    else if (subpage === "EditLandmark")
      return (<EditLandmark/>)
    else if (subpage === "#search")
      return(<Search/>)
    else if (subpage === "#pathfinder")
      return(<PathFinder/>)
    else if (subpage === "#updatetraffic")
      return(<UpdateTraffic/>)
  }
    
  console.log("roads", roads)
  // console.log(isDrawMode)

  useEffect(()=>{
    if (currRoad != null){
      setRoads((prev) => [...prev, currRoad])
    }
  },[currRoad])
  
  // const HandleEditRoads = (newRoad) => {
  //   // useEffect(()=>{
  //   // roads.findIndex(newRoad)
  //   var tempRoads = roads
  //   try{
  //     var idx = tempRoads.findIndex(newRoad)
  //   } catch {
  //     var idx = -1
  //   }
    
  //   if (idx === -1){
  //     setRoads((prev) => [...prev, newRoad])
  //   }
  //   // },[])
  // }
  
  

  //convert csv to json
  const [locationData, setLocationData] = useState([]);
  
  useEffect(()=>{
    Papa.parse(data,{
      download: true,
      header: true,
      complete: function(results){
        setLocationData(results.data)
      }
    })
  },[]) 

  console.log("locationData", locationData)

  // HANDLES EDITING AND DRAWING OF MAP
  const DrawMap = () => {
    let map = useMap()  

    // ADDS EDIT CONTROLS
    map.pm.addControls({  
      position: 'topright',  
    });  

    // ON CREATE OF POLYLINE, CHECK IF START AND END POINTS ARE MARKERS
    map.on('pm:create', e => {
      console.log(e)
      var lastVertex = e.layer._latlngs.at(-1)
      var firstVertex = e.layer._latlngs[0]
      var endMarker =  locationData.find(({lat, lon}) => lat == lastVertex.lat && lon == lastVertex.lng)
      var startMarker = locationData.find(({lat, lon}) => lat == firstVertex.lat && lon == firstVertex.lng)
      if (endMarker && startMarker){
        var newRoad = {
          leaflet_id: e.layer._leaflet_id,  
          endPointA: startMarker.id,
          endpointB: endMarker.id, 
          latlngs: e.layer._latlngs
        }
        setCurrRoad(newRoad)
      } else {
        e.target.removeLayer(e.layer)
      }
    })

    // ON EDIT OF MARKERS, CHANGE COORDS IN locationData
    map.on('pm:globaldragmodetoggled', (e) => {
      console.log(e)
      map.eachLayer((layer) => {
        layer.on('pm:dragend', (e)=>{
          let moved = locationData.find(({leaflet_id})=> e.layer._leaflet_id == leaflet_id)
          if(moved){
            moved.lat = e.layer._latlng.lat.toString()
            moved.lon = e.layer._latlng.lng.toString()            
          }
        })
      })
    });

    // ON REMOVE OF MARKER
    map.on('pm:remove', (e) => {
      console.log(e)
      let targetId = e.layer._leaflet_id
      
      let toRemove = locationData.findIndex(({leaflet_id})=>leaflet_id==targetId)

      if(toRemove !== -1){
        locationData.splice(toRemove,1)
        console.log(locationData)
        return
      }
    });

    
    return null
  }

  // MAPS LANDMARK ID TO LEAFLET ID
  // leaflet ID is essential for rendering
  const MapMarkerId = () =>{
    let map = useMap()
    
    useEffect(()=>{
      if(locationData.length > 0){
        map.eachLayer((layer) => {
          if(layer._latlng){
            let corresLandmark = locationData?.find((loc) => layer._latlng.lat==loc.lat && layer._latlng.lng==loc.lon)
            if (corresLandmark){
              corresLandmark["leaflet_id"] = layer._leaflet_id
            }
          }
        })
      }
      
    },[locationData])
  }


  console.log(locationData)
  console.log("roads", roads)


  const RenderRoads = () => {
    const purpleOptions = { color: 'white', weight: 5 }
    return(
      roads.map((road)=>{
        return(
          <Polyline key={road.id} pathOptions={purpleOptions} positions={road.latlngs} />
        )
      })
    )
  }
  

  async function createNodes(){
  
    console.log("HERE ")
    console.log(locationData)
    const response = await CreateNodes(locationData)

    console.log(response)
    if (response.data.status !== 201){
      console.log("FAILED")
    } else {
      console.log("SUCCESS")
    }

  }

  async function createRoads(){
    console.log("HERE ")
    console.log(roads)
    const response = await CreateRoads(roads)

    console.log(response)
    if (response.data.status !== 201){
      console.log("FAILED")
    } else {
      console.log("SUCCESS")
    }
  }
  
  console.log(roads.map(x => [x.latlngs.map(y => [y.lat, y.lng])]))
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

        {/* Renders the road */}
        {/* <GeoJSON
          data = {CebuRoads}
          className="cebu-roads"
        /> */}
        
        {/* Renders markers*/}
        {locationData?.map((landmark) => (
         <MarkerLayer
          data = {landmark}
         />
        ))}

        <DrawMap/>
        <MapMarkerId/>
        <RenderRoads/>    


      </MapContainer>

      <button onClick={() => createNodes()}>
        Submit Nodes
      </button>
      <button onClick={()=> createRoads()}>
        Submit Roads
      </button>
      <button onClick={() => setMode("intersections")}>
        Create Intersections
      </button>
      <button onClick={() => setMode("landmarks")}>
        Create Landmarks
      </button>
      </div>
  )
}

export default Map;