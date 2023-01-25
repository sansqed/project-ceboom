import "../../Components/Navbar/Sidebar.css"
import EditMap from "../EditMap/EditMap"
import "leaflet-geometryutil"
import '@geoman-io/leaflet-geoman-free';  
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';  
import {MapContainer, Marker, Popup, GeoJSON, FeatureGroup, TileLayer, Circle, Polyline, useMap, useMapEvents} from "react-leaflet"
import { useState, useEffect } from "react"

const AddLandmarksFn = (handleAction) => {
  console.log("add landmarks")

  const map = useMap()    

  map.pm.enableDraw('Marker')

  map.on('pm:create', (e)=>{
    let thisLayer = e.layer
    // var popup = L.popup()
    // .setLatLng(thisLayer._latlng)
    // .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    // .openOn(map);
    
    thisLayer.bindPopup('<input>test</input>').openPopup()
    map.pm.disableDraw()
    // map.addLayer(thisLayer)
    // map.openPopup()
    
    

    // let thisLandmark = {
    //   latitude: e.layer._latlng.lat,
    //   longitude: e.layer._latlng.lng
    // }
    // console.log(thisLandmark)
  })  
};

export default AddLandmarksFn;