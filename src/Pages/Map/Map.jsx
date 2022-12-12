import "./Map.css"
import {MapContainer, Marker, Popup, GeoJSON, FeatureGroup, TileLayer} from "react-leaflet"
import {CebuMap} from "../../Assets/CebuMap"
import {CebuRoads} from "../../Assets/CebuRoadsV2.js"
import SideBar from "../../Components/Navbar/Sidebar"
import { EditControl } from 'react-leaflet-draw';
import "leaflet-draw/dist/leaflet.draw.css"
import MarkerLayer from "../../Components/Markers/Markers"

import { useLocation } from "react-router-dom"
import { useEffect } from "react"

import EditMap from "../EditMap/EditMap"
import Search from "../Search/Search"
import PathFinder from "../PathFinder/PathFinder"
import UpdateTraffic from "../UpdateTraffic/UpdateTraffic"

const Map = ({ children }) => {
  const location = useLocation()
  const subpage = location.hash  

  const handleSubpage = () => {
    if (subpage === "#editmap")
      return(<EditMap/>)
    else if (subpage === "#search")
      return(<Search/>)
    else if (subpage === "#pathfinder")
      return(<PathFinder/>)
    else if (subpage === "#updatetraffic")
      return(<UpdateTraffic/>)
  }


  console.log(action)

  const _onCreate = e => {
    console.log(e)
  }

  const _onEdited = e => {
    console.log(e)
  }

  const _onDeleted = e => {
    console.log(e)
  }



  return(

    <div className="map-container">

      <SideBar/>
      {handleAction()}

      <link 
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.0/dist/leaflet.css"
      />

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
        <MarkerLayer/>



        {/* Editable layer */}
        {/* <FeatureGroup>
          <EditControl
            position='topright'
            oncreated={_onCreate}
            onEdited={_onEdited}
            onDeleted={_onDeleted}
            draw={{
              // rectangle: true,
              // polyline: false,
              // circle: false,
              // circlemarker: false,
              // marker: true,
              // polygon: false,
            }}
          />
        </FeatureGroup> */}


      </MapContainer>
      </div>
  )
}

export default Map;