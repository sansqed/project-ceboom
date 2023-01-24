//CSV
import Papa from 'papaparse'
// import data from '../../Assets/Data/CebuSouthLandmarks.csv'
import data from '../../Assets/Data/brgy-lahug-landmarks.csv'

import "./Map.css"
import {MapContainer, Marker, Popup, GeoJSON, FeatureGroup, TileLayer, Circle, Polyline, useMap} from "react-leaflet"
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

import {CreateNodes} from "../../ApiCalls/NodeAPI"

const Map = ({ children }) => {
  const location = useLocation()
  const subpage = location.hash  
  const [roads, setRoads] = useState([])
  const [currRoad, setCurrRoad] = useState(null)
  const [isClicked, setIsClicked] = useState(false)


  const HandleSubpage = () => {
    if (subpage === "#editmap")
      return(<EditMap/>)
    else if (subpage === "#AddLandmark")
      return (<AddLandmark/>)
    else if (subpage === "#AddRoad")
    else if (subpage === "#search")
      return(<Search/>)
    else if (subpage === "#pathfinder")
      return(<PathFinder/>)
    else if (subpage === "#updatetraffic")
      return(<UpdateTraffic/>)
  }

  const [markers, setMarkers] = useState([
    {
      id: 1,
      name: "Cebu South Medical Center",
      location: "Hospitals,Talisay",
      lat: 10.253780719586434,
      lon: 123.83846878657616
    },
    { 
      id: 2,
      name: "Simbajon Medical Clinic",
      location: "Health Centers,Talisay",
      lat: 10.261654916331313,
      lon: 123.83701029448979
    }
  ])

    
  console.log("roads", roads)
  // console.log(isDrawMode)

  useEffect(()=>{
    if (currRoad != null){
      setRoads((prev) => [...prev, currRoad])
    }
  },[currRoad])
  
  const HandleEditRoads = (newRoad) => {
    // useEffect(()=>{
    // roads.findIndex(newRoad)
    var tempRoads = roads
    try{
      var idx = tempRoads.findIndex(newRoad)
    } catch {
      var idx = -1
    }
    
    if (idx === -1){
      setRoads((prev) => [...prev, newRoad])
    }
    // },[])
  }
  
  

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

  // console.log(locationData)
  //console.log(location)

  const DrawMap = () => {
    let map = useMap()  
    // console.log(map)

    var lg = L.LayerGroup

    map.pm.setGlobalOptions({
      layerGroup: lg
    })

    // console.log(lg)

    map.addLayer(L.marker([10.419705993110673, 123.83194042326245]))
  
    // map.pm.enableDraw('Line', {
    //   snappable: true,
    //   snapDistance: 20,
    // });

    map.pm.addControls({  
      position: 'topright',  
      // drawCircle: false,  
    });  

    map.on('pm:drawstart', ({ workingLayer }) => {
      workingLayer.on('pm:vertexadded', (e) => {
        if (e.target._latlngs.length === 1){
          console.log("vertexadd", e)
          var start = locationData.find(({lat, lon}) => (lat == e.latlng.lat && lon == e.latlng.lng))
          console.log("start", start)
          // var start = locationData.find((loc) => loc.lat == e.latlng.lat && loc.lon == e.latlng.lng)
          if (start === undefined){
            console.log(workingLayer)
            map.pm.disableDraw()
          }
        }
      });
    });

    map.on('pm:create', e => {
      console.log(e)
      var last = e.layer._latlngs.at(-1)
      var first = e.layer._latlngs[0]
      var endMarker =  locationData.find(({lat, lon}) => lat == last.lat && lon == last.lng)
      var startMarker = locationData.find(({lat, lon}) => lat == first.lat && lon == first.lng)
      if (endMarker && startMarker){
        var newRoad = {
          id: e.layer._leaflet_id,  
          endPoints:[startMarker.id, endMarker.id], 
          latlngs: e.layer._latlngs
        }
        setCurrRoad(newRoad)
      } else {
        e.target.removeLayer(e.layer)
      }
    })
      
    return null
  }
  

  const _onCreate = e => {
    console.log(e)
    // const { layerType, layer } = e

    // if (layerType === "polyline"){
    //   const { _leaflet_id } = layer 

    //   setNewRoads((oldRoads) => [
    //     ...oldRoads,
    //     {id: _leaflet_id, latlngs: layer.getLatLngs()},
    //   ])
    // } 
  }

  // console.log(roads)

  console.log(locationData)


  const renderRoads = () => {
    const purpleOptions = { color: 'purple' }
    return(
      roads.map((road)=>{
        return(
          <Polyline key={road.id} pathOptions={purpleOptions} positions={road.latlngs} />
        )
      })
    )
  }

//   var editToolbar = new L.EditToolbar.SnapEdit(map, {
//     featureGroup: L.featureGroup([polyline]),
//     snapOptions: {
//        guideLayers: [guideLayer]
//     }
//  });

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
        <GeoJSON
          data = {CebuRoads}
          className="cebu-roads"
        />
        
        {/* Renders markers*/}
        {locationData?.map((landmark) => (
         <MarkerLayer
          data = {landmark}
         />
        ))}

        <DrawMap/>

        {
          markers.map((landmark) => (
            <MarkerLayer
              data = {landmark}
            />
          ))
        }


        {renderRoads()}


          


      </MapContainer>

      <button onClick={() => createNodes()}>
        Create Nodes
      </button>
      </div>
  )
}

export default Map;