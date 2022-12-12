import './App.css';
import React, { useState } from 'react';

import MarkerLayer from './Components/Markers/Markers'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Map from "./Pages/Map/Map"
import Landing from './Pages/Landing/Landing';
import AboutUs from './Pages/AboutUs/AboutUs';

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
            <Route 
              path="/map:action" 
              element={<Map/>}  
            />
            <Route 
              path="/" 
              element={<Landing/>}  
            />
            <Route 
              path="/about-us" 
              element={<AboutUs/>}  
            />
          </Routes>
      </BrowserRouter>
      {/* <Map/> */}
    </div>
  );
}

export default App;
