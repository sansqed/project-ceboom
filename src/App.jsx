import './App.css';
import React, { useState } from 'react';

import MarkerLayer from './Components/Markers/Markers'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Map from "./Pages/Map/Map"

function App() {


  // const [roadsLayer, setRoadsLayer] = useState([CebuRoads])

  return (
    <div className="App">
      
      {/* <testSidebar></testSidebar> */}

      <BrowserRouter>
          <Routes>
            <Route 
              path="/map" 
              element={<Map/>}  
            />
            <Route 
              path="/map:action" 
              element={<Map/>}  
            />
          </Routes>
      </BrowserRouter>
      {/* <Map/> */}
    </div>
  );
}

export default App;
