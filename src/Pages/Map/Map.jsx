//CSV
import Papa from 'papaparse'
// import data from '../../Assets/Data/CebuSouthLandmarks.csv'
// import data from '../../Assets/Data/brgy-lahug-landmarks.csv'
import data from '../../Assets/Data/cebu-landmarks-minimal.csv'

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
import Search from "../Search/Search"
import PathFinder from "../PathFinder/PathFinder"
import UpdateTraffic from "../UpdateTraffic/UpdateTraffic"

import "leaflet-snap/leaflet.snap"
import "leaflet-geometryutil"

import '@geoman-io/leaflet-geoman-free';  
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';  

import {CreateNodes, GetNodes} from "../../ApiCalls/NodeAPI"
import {CreateRoads} from "../../ApiCalls/RoadsAPI"
import { MoveDownSharp } from '@mui/icons-material'
import {nodesAll} from "../../Assets/Data/intersection-data.js" 


const Map = ({ children }) => {
  const location = useLocation()
  const subpage = location.hash  
  const [nodes, setNodes] = useState([]);
  const [roads, setRoads] = useState([])
  const [currRoad, setCurrRoad] = useState(null)
  const [currNode, setCurrNode] = useState(null)
  const [isClicked, setIsClicked] = useState(false)
  const [mode, setMode] = useState('normal')


  const HandleSubpage = () => {
    if (subpage === "#editmap")
      return(<EditMap/>)
    else if (subpage === "#search")
      return(<Search/>)
    else if (subpage === "#pathfinder")
      return(<PathFinder/>)
    else if (subpage === "#updatetraffic")
      return(<UpdateTraffic/>)
  }

  // console.log(nodesAll.nodes)
  useEffect(()=>{
    setNodes(nodesAll.nodes)
  },[])

  // handles addition of road
  useEffect(()=>{
    if (currRoad != null){
      setRoads((prev) => [...prev, currRoad])
    }
  },[currRoad])

  useEffect(()=>{
    if (currNode != null){
      setNodes((prev) => [...prev, currNode])
    }
  },[currNode])

  //convert csv to json
  // useEffect(()=>{
  //   Papa.parse(data,{
  //     download: true,
  //     header: true,
  //     complete: function(results){
  //       setNodes(results.data)
  //     }
  //   })
  // },[]) 

  // useEffect(()=>{

  // },[nodesAll])

  console.log("nodes", nodesAll)



  // HANDLES EDITING AND DRAWING OF MAP
  const DrawMap = () => {
    let map = useMap()  

    if(mode==="intersection"){
      map.pm.enableDraw('Marker')
      console.log("drawing marker")

      map.on('pm:create', (e) => {
        let thisInter = {
          leaflet_id: e.layer._leaflet_id,
          landmark_type: "intersection",
          location: null,
          latitude: e.layer._latlng.lat,
          longitude: e.layer._latlng.lng,
        }

        setCurrNode(thisInter)
      })
    }

    else if (mode === "roads"){
      map.pm.enableDraw('Line')
      console.log("drawing line")

      map.on('pm:create', (e) => {
        console.log(e)
        var lastVertex = e.layer._latlngs.at(-1)
        var firstVertex = e.layer._latlngs[0]
        var endMarker =  nodesAll.nodes.find(({latitude, longitude}) => latitude == lastVertex.lat && longitude == lastVertex.lng)
        var startMarker = nodesAll.nodes.find(({latitude, longitude}) => latitude == firstVertex.lat && longitude == firstVertex.lng)
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

      map.on('pm:remove', (e) => {
        console.log(e)
        let targetId = e.layer._leaflet_id
        
        let toRemove = roads.findIndex(({leaflet_id})=>leaflet_id==targetId)
  
        if(toRemove !== -1){
          roads.splice(toRemove,1)
          console.log(roads)
          // return
        }
      });

      console.log(roads)
    }

    // ADDS EDIT CONTROLS
    map.pm.addControls({  
      position: 'topright',  
    });  

    // ON CREATE OF POLYLINE, CHECK IF START AND END POINTS ARE MARKERS
    // map.on('pm:create', e => {
    //   console.log(e)
    //   var lastVertex = e.layer._latlngs.at(-1)
    //   var firstVertex = e.layer._latlngs[0]
    //   var endMarker =  nodes.find(({lat, lon}) => lat == lastVertex.lat && lon == lastVertex.lng)
    //   var startMarker = nodes.find(({lat, lon}) => lat == firstVertex.lat && lon == firstVertex.lng)
    //   if (endMarker && startMarker){
    //     var newRoad = {
    //       leaflet_id: e.layer._leaflet_id,  
    //       endPointA: startMarker.id,
    //       endpointB: endMarker.id, 
    //       latlngs: e.layer._latlngs
    //     }
    //     setCurrRoad(newRoad)
    //   } else {
    //     e.target.removeLayer(e.layer)
    //   }
    // })

    // ON EDIT OF MARKERS, CHANGE COORDS IN nodes
    // map.on('pm:globaldragmodetoggled', (e) => {
    //   console.log(e)
    //   map.eachLayer((layer) => {
    //     layer.on('pm:dragend', (e)=>{
    //       let moved = nodes.find(({leaflet_id})=> e.layer._leaflet_id == leaflet_id)
    //       if(moved){
    //         moved.lat = e.layer._latlng.lat.toString()
    //         moved.lon = e.layer._latlng.lng.toString()            
    //       }
    //     })
    //   })
    // });

    // ON REMOVE OF MARKER
    

    
    return null
  }

  // MAPS LANDMARK ID TO LEAFLET ID
  // leaflet ID is essential for rendering
  const MapMarkerId = () =>{
    let map = useMap()
    
    useEffect(()=>{
      if(nodes.length > 0){
        map.eachLayer((layer) => {
          if(layer._latlng){
            let corresLandmark = nodes?.find((loc) => layer._latlng.lat==loc.lat && layer._latlng.lng==loc.lon)
            if (corresLandmark){
              corresLandmark["leaflet_id"] = layer._leaflet_id
            }
          }
        })
      }
      
    },[nodes])
  }


  // console.log(nodes)
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
    console.log(nodes)
    const response = await CreateNodes(nodes)

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

  const FetchNodes = () => {
    useEffect(() => {
      GetNodes()
        .then((response) => {
          console.log(response)
          // setData(response.data.data.companies[0]);
        });
    
    }, []);
  };

  FetchNodes()
  
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
      >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className='leaflet-tiles'
          /> 

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
        {nodesAll.nodes?.map((landmark) =>{
          // console.log(landmark)
          return(
          <MarkerLayer
            data = {landmark}
          />)
        })}

        <DrawMap/>
        <MapMarkerId/>
        <RenderRoads/>    


      </MapContainer>



      {/* <button onClick={() => }>
        Import landmarks
      </button> */}
      <button onClick={() => mode === "intersection"? setMode("normal"):setMode("intersection")}>
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
      </button>
      
      
      </div>
  )
}

export default Map;