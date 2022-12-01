import './App.css';
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet"

import { useRef } from 'react';

function App() {
  return (
    
    <div className="App">
      <link 
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
      />

      <MapContainer center={[10.3157, 123.8854]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default App;
