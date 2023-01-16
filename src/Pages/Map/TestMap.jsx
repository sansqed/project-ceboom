// import "./Map.css"
import L, { latLng } from "leaflet"
import { useEffect } from "react";
import { useMap, MapContainer } from "react-leaflet";
import "leaflet-snap/leaflet.snap"
import "leaflet-geometryutil"


const TestMap = ({ children }) => {

  function MyMap (){
    const map = useMap()
    console.log('map center:', map.getCenter())

    

    // map.drawControl.setDrawingOptions({
    //   polyline: { guideLayers: guideLayers },
    //   polygon: { guideLayers: guideLayers, snapDistance: 5 },
    // });
    return null
  }

  // let map
  // useEffect(() => {

  //   if (map){
  //     map.remove();
  //     map.off();
  //   }

  //   // The <div id="map"> must be added to the dom before calling L.map('map')
  //     map = L.map('map', {
  //       center:[10.3157, 123.8854] ,
  //       zoom:9 ,
  //       minZoom:9,
  //       scrollWheelZoom:true
  //       // zoom: center_zoom
  //     });

  //     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //       attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //     }).addTo(map);

  // });






return (

    //   <div className="right-sidebar-container">
              
    //     <div id="map">
    //       <link 
    //       rel="stylesheet"
    //       href="https://unpkg.com/leaflet@1.9.0/dist/leaflet.css"
    //       />

    //     </div>
      
    // </div>

    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <MyMap />
    </MapContainer>

);



}

export default TestMap