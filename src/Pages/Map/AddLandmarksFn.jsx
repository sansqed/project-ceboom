// import "../../Components/Navbar/Sidebar.css"
import "leaflet-geometryutil"
import '@geoman-io/leaflet-geoman-free';  
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';  
import { useMap } from "react-leaflet"


export const AddLandmarksFn = (setCurrNode, editData) => {
  const map = useMap()
  map.pm.enableDraw('Marker',{continueDrawing:false})

  map.on('pm:create', (e)=>{
    let thisLayer = e.layer
    map.pm.disableDraw()
    // setCurrNode(thisLayer)

    setCurrNode({
      leaflet_id: thisLayer?._leaflet_id,
      name: "",
      location: "",
      landmark_type: "",
      latitude: thisLayer?._latlng.lat,
      longitude: thisLayer?._latlng.lng
    })

    map.removeLayer(thisLayer)
  })
};
