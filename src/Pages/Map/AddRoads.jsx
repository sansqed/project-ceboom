// import "../../Components/Navbar/Sidebar.css"
import "leaflet-geometryutil"
import '@geoman-io/leaflet-geoman-free';  
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';  
import { useMap } from "react-leaflet"
import { CreateRoads } from "../../ApiCalls/RoadsAPI"
import { useState } from "react";
import { toastStyle } from "../../Helpers/Styles";
import toast from "react-hot-toast";
export const AddRoads = (allNodes) => {

    const [currRoad, setCurrRoad] = useState(null)

    // async function createRoads(newRoad){
    //     console.log("HERE ")
    //     console.log(newRoad)
    //     const response = await CreateRoads(newRoad)
    
    //     console.log(response)
    //     if (response.data.status !== 201){
    //       console.log("FAILED")
    //     } else {
    //       console.log("SUCCESS")
    //     }
    // }

    const map = useMap()
    map.pm.enableDraw('Line')
    console.log("drawing line")
    console.log(currRoad)
    
    map.on('pm:create', (e) => {
    console.log(e)
    console.log(allNodes)
    var lastVertex = e.layer._latlngs.at(-1)
    var firstVertex = e.layer._latlngs[0]
    var endMarker =  allNodes.find(({latitude, longitude}) => latitude == lastVertex.lat && longitude == lastVertex.lng)
    var startMarker = allNodes.find(({latitude, longitude}) => latitude == firstVertex.lat && longitude == firstVertex.lng)
    if (endMarker && startMarker){
        var newRoad = {
        leaflet_id: e.layer._leaflet_id,  
        endPointA: startMarker.id,
        endpointB: endMarker.id, 
        latlngs: e.layer._latlngs
        }
        console.log("SULOD BA")
        setCurrRoad(newRoad)
        const response = CreateRoads([newRoad])
        
        if(response !== 201){
            toast.error(response, {
                style: toastStyle()
              });
        }
        e.target.addLayer(e.layer.setStyle({color: 'white'}))
    } else {
        console.log("SHET")
        e.target.removeLayer(e.layer)

        toast.error("Road must start and end on a marker", {
            style: toastStyle()
        });
    }
    })
};