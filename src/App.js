import './App.css';
import {MapContainer, Marker, Popup, GeoJSON, FeatureGroup} from "react-leaflet"
import {CebuMap} from "./Assets/CebuMap.js"
import {CebuRoads} from "./Assets/CebuRoads.js"
import L from "leaflet"
import React, { useState } from 'react';

import { EditControl } from 'react-leaflet-draw';
import "leaflet-draw/dist/leaflet.draw.css"

import { useRef } from 'react';
// import TestSidebar from './components/navbar/test';
import Sidebar from './components/navbar/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';

function App() {
  
  const _onCreate = e => {
    console.log(e)
  }

  const _onEdited = e => {
    console.log(e)
  }

  const _onDeleted = e => {
    console.log(e)
  }

  const [roadsLayer, setRoadsLayer] = useState([CebuRoads])

  return (
    <div className="App">
      <link 
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.0/dist/leaflet.css"
      />
      {/* <testSidebar></testSidebar> */}

      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
      <MapContainer 
        center={[10.3157, 123.8854]} 
        zoom={9} 
        minZoom={9}
        scrollWheelZoom={true}>
      >
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className='leaflet-tiles'
        /> */}

        {/* Renders the map */}
        <GeoJSON 
          data={CebuMap.features}
          className="cebu-outline"
        />

        {/* Renders the road */}
        <GeoJSON
          data = {roadsLayer}
          className="cebu-roads"
        />
        
        {/* Editable layer */}
        <FeatureGroup>
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
        </FeatureGroup>


      </MapContainer>
    </div>
  );
}

export default App;
