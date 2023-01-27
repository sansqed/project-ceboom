import './App.css';
import React from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Map from "./Pages/Map/Map"
import Landing from './Pages/Landing/Landing';
import AboutUs from './Pages/AboutUs/AboutUs';
import Registration from './Pages/Registration/Registration';
import LogIn from './Pages/LogIn/LogIn';

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
              path="/map:action=:subaction" 
              element={<Map/>}  
            />
            <Route 
              path="/" 
              element={<Landing/>}  
            />
            <Route 
              path="/login" 
              element={<LogIn/>}  
            />
            <Route 
              path="/about-us" 
              element={<AboutUs/>}  
            />  
            <Route
              path="/registration"
              element={<Registration/>}
            />
          </Routes>
      </BrowserRouter>
      {/* <Map/> */}
    </div>
  );
}

export default App;
