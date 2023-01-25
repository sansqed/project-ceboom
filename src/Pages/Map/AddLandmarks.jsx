import "../../Components/Navbar/Sidebar.css"
import EditMap from "../EditMap/EditMap"
import "leaflet-geometryutil"
import '@geoman-io/leaflet-geoman-free';  
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';  
import {MapContainer, Marker, Popup, GeoJSON, FeatureGroup, TileLayer, Circle, Polyline, useMap, useMapEvents} from "react-leaflet"
import { useState, useEffect } from "react"

const AddLandmarks = (setNewLandmarks) => {
  console.log("add landmarks")

  const map = useMap()    

  map.pm.enableDraw('Marker')

  map.on('pm:create', (e)=>{
    console.log(e)
  })
  
};

export default AddLandmarks;