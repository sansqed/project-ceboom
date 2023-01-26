//CSV
import Papa from 'papaparse'
// import data from '../../Assets/Data/CebuSouthLandmarks.csv'
// import data from '../../Assets/Data/brgy-lahug-landmarks.csv'
import data from '../../Assets/Data/cebu-landmarks-minimal.csv'

import "./Map.css"
import {MapContainer, Marker, Popup, GeoJSON, Polyline, useMap, FeatureGroup} from "react-leaflet"
import {CebuMap} from "../../Assets/CebuMap"
import {CebuRoads} from "../../Assets/CebuRoadsV2.js"
import SideBar from "../../Components/Navbar/Sidebar"
import { EditControl } from 'react-leaflet-draw';
import "leaflet-draw/dist/leaflet.draw.css"
import "leaflet/dist/leaflet.css"

import MarkerLayer from "../../Components/Markers/Markers"
import L, { latLng } from "leaflet"

import { Navigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

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
import { MoveDownSharp } from '@mui/icons-material'
import {nodesAll} from "../../Assets/Data/intersection-data.js" 
import AddLandmarksFn from './AddLandmarksFn'
import AddLandmarksSidebar from '../EditMap/AddLandmarksSidebar'

import { intersectionsRaw } from '../../Assets/Data/intersectionsRaw'
import {landmarksRaw} from '../../Assets/Data/landmarksRaw'
import {edgesOld} from "../../Assets/Data/edgesOld"
import { edges } from '../../Assets/Data/edges'

import { locationChecker } from '../../Components/Markers/Markers'

const Map = ({ children }) => {
  const location = useLocation()
  const subpage = location.hash  
  const [nodes, setNodes] = useState([]);
  const [intersections, setIntersections] = useState([])
  const [landmarks, setLandmarks] = useState([])
  const [roads, setRoads] = useState([])
  const [currRoad, setCurrRoad] = useState(null)
  const [currNode, setCurrNode] = useState(null)
  const [isClicked, setIsClicked] = useState(false)
  const [editData, setEditData] = useState([])
  const [tempData, setTempData] = useState()

  const HandleSubpage = () => {
    if (subpage === "#editmap")
      return(<EditMap/>)
    else if (subpage === "#search")
      return(<Search/>)
    else if (subpage === "#pathfinder")
      return(<PathFinder/>)
    else if (subpage === "#updatetraffic")
      return(<UpdateTraffic/>)
    else if (subpage === "#addlandmark" || subpage === "#addlandmark?adding")
      return(<AddLandmarksSidebar editData={editData  } />)
  }

  // UNCOMMENT IF SERVER IS UP
  // const FetchNodes = () => {
  //   useEffect(() => {
  //     GetNodes()
  //       .then((response) => {
  //         console.log(response.data.data)
  //         setLandmarks(response.data.data.nodes)
  //         setIntersections(response.data.data.intersections)
  //       });

  //     // GetRoads().then((response)=>{
  //       // console.log(response)
  //       // setRoads(response.data.data.edges)
  //     // })
    
  //   }, []);
  // };
  // FetchNodes()

  // UNCOMMENT IF SERVER IS DOWN
  useEffect(()=>{
    setLandmarks(landmarksRaw)
    setIntersections(intersectionsRaw)
    setRoads(edges)
  },[])

  console.log(editData)



  const handleEditChange = (e) => {
    const {name, value, id} = e.target

    if(tempData?.id == id){

      setTempData((prev) => ({...prev, name:value}))

    } else {
      setTempData({
        id: id,
        name: value
      })
    }

    console.log(tempData)
    
  }

  console.log(editData)

  const HandleMode = () => {
    const map = useMap()
    // map.pm.addControls({  
    //   position: 'topright',  
    //   // drawCircle: false,  
    // });  

    map.closePopupOnClick = false

    
    if(subpage==="#addlandmark?adding"){
      AddLandmarksFn(setCurrNode, editData)
      return(
        <div> 
          <Navigate to={"#addlandmark"}/>
          {editData?.map((data)=>(
          <Marker 
            key={data.leaflet_id}
            position={[data.latitude, data.longitude]} 
            icon={locationChecker(data.landmark_type)}
          >
            <Popup>
              hellow
            </Popup>
          </Marker>))}
        </div>
      )
    } 
    
    else if(subpage==="#addlandmark")
      return(
        <div>
          {editData?.map((data, index)=>(
          
          <FeatureGroup >
            <Popup maxWidth={200} interactive={true} closeOnEscapeKey={false} autoClose={false} closeOnClick={false}>
              <label>Name</label>
              <input id={data.leaflet_id} name='name' autoComplete="off" onChange={e => handleEditChange(e)}/>
              <label>Type of Landmark</label>
              <input id={data.leaflet_id} name='landmark_type' autoComplete='off' onChange={e => handleEditChange(e)}/>
              <label>Location</label>
              <input id={data.leaflet_id} name='location' autoComplete='off' onChange={e => handleEditChange(e)}/>
              <input id={data.leaflet_id} name={"submit-addlandmark"} type={"submit"} onClick={e=>handleEditChange(e)}/>
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

  // // console.log(nodesAll.nodes)
  // useEffect(()=>{
  //   setNodes(nodesAll.nodes)
  // },[])

  // // handles addition of road
  // useEffect(()=>{
  //   if (currRoad != null){
  //     setRoads((prev) => [...prev, currRoad])
  //   }
  // },[currRoad])

  // useEffect(()=>{
  //   if (currNode != null){
  //     setNodes((prev) => [...prev, currNode])
  //   }
  // },[currNode])

  // HANDLES EDITING AND DRAWING OF MAP
  // const DrawMap = () => {
  //   let map = useMap()  

    // if(mode==="intersection"){
    //   map.pm.enableDraw('Marker')
    //   console.log("drawing marker")

    //   map.on('pm:create', (e) => {
    //     let thisInter = {
    //       leaflet_id: e.layer._leaflet_id,
    //       landmark_type: "intersection",
    //       location: null,
    //       latitude: e.layer._latlng.lat,
    //       longitude: e.layer._latlng.lng,
    //     }

    //     setCurrNode(thisInter)
    //   })
    // }

    // else if (mode === "roads"){
    //   map.pm.enableDraw('Line')
    //   console.log("drawing line")

    //   map.on('pm:create', (e) => {
    //     console.log(e)
    //     var lastVertex = e.layer._latlngs.at(-1)
    //     var firstVertex = e.layer._latlngs[0]
    //     var endMarker =  nodesAll.nodes.find(({latitude, longitude}) => latitude == lastVertex.lat && longitude == lastVertex.lng)
    //     var startMarker = nodesAll.nodes.find(({latitude, longitude}) => latitude == firstVertex.lat && longitude == firstVertex.lng)
    //     if (endMarker && startMarker){
    //       var newRoad = {
    //         leaflet_id: e.layer._leaflet_id,  
    //         endPointA: startMarker.id,
    //         endpointB: endMarker.id, 
    //         latlngs: e.layer._latlngs
    //       }
    //       setCurrRoad(newRoad)
    //     } else {
    //       e.target.removeLayer(e.layer)
    //     }
    //   })

      // map.on('pm:remove', (e) => {
      //   console.log(e)
      //   let targetId = e.layer._leaflet_id
        
      //   let toRemove = roads.findIndex(({leaflet_id})=>leaflet_id==targetId)
  
      //   if(toRemove !== -1){
      //     roads.splice(toRemove,1)
      //     console.log(roads)
      //     // return
      //   }
      // });

      // console.log(roads)
    // }
    

    // ADDS EDIT CONTROLS
    // map.pm.addControls({  
    //   position: 'topright',  
    // });  
    
  //   return null
  // }

  // MAPS LANDMARK ID TO LEAFLET ID
  // leaflet ID is essential for rendering

  const RenderRoads = () => {
    const purpleOptions = { color: 'white', weight: 5 }
    const lightTraffic = {color: 'white'}
    return(
      roads?.map((road) =>{

        let allPositions = road.latitudes.map((latitude,index) => 
          [latitude,road.longitudes[index]])
        let id = +road.id
        
        return(
          <Polyline key={id} pathOptions={purpleOptions} positions={allPositions}>
          <Popup>
            test
          </Popup>
          </Polyline>
        )
      })

      // edgesOld?.map((road)=>{
      //   return(
      //     <Polyline key={road.leaflet_id} pathOptions={purpleOptions} positions={road.latlngs} />
      //   )
      // })

      // edges?.map((road)=>{
      //   let allPositions = road.latitude.map((lat, index) => {
      //     return {lat: lat, lng:road.longitude[index]}
      //   })
      //   return(
      //     <Polyline key={road.leaflet_id} pathOptions={purpleOptions} positions={road.latlngs} />
      //   )
      // })
    )

    
  }

  // async function createNodes(){  
  //   console.log("HERE ")
  //   console.log(nodes)
  //   const response = await CreateNodes(nodes)

  //   console.log(response)
  //   if (response.data.status !== 201){
  //     console.log("FAILED")
  //   } else {
  //     console.log("SUCCESS")
  //   }

  // }

  // async function createRoads(){
  //   console.log("HERE ")
  //   console.log(edges)
  //   const response = await CreateRoads(edges)

  //   console.log(response)
  //   if (response.data.status !== 201){
  //     console.log("FAILED")
  //   } else {
  //     console.log("SUCCESS")
  //   }
  // }

  
  
  // console.log(roads.map(x => [x.latlngs.map(y => [y.lat, y.lng])]))
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
        
        {/* Renders markers*/}
        

        {/* <DrawMap/> */}
        {/* <MapMarkerId/> */}
        {/* <HandleEditModes/> */}
        <HandleMode/>
        <RenderRoads/>    
        {landmarks?.map((landmark) =>{
          return(
          <MarkerLayer
            data = {landmark}
          />)
        })}


      </MapContainer>


      {/* <input onChange={e}>test</input> */}
      {/* <button onClick={() => setEditMode("add-landmarks")}>
        Add landmarks
      </button> */}
      {/* <button onClick={() => mode === "intersection"? setMode("normal"):setMode("intersection")}>
        Intersections mode toggle
      </button>
      <button onClick={() => setMode("roads")}>
        roads mode 
      </button>
      <button onClick={() => FetchNodes()}>
        Fetch landmarks
      </button>
      <button onClick={() => createNodes()}>
        Submit Nodes to API
      </button>
      <button onClick={()=> createRoads()}>
        Submit Roads to API
      </button> */}
      
      
      </div>
  )
}

export default Map;