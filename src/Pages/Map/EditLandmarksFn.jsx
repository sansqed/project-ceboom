// import "../../Components/Navbar/Sidebar.css"
import "leaflet-geometryutil"
import '@geoman-io/leaflet-geoman-free';  
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';  
import { useMap } from "react-leaflet"


export const RemoveLandmarkFn = (landmarks, editedNodes, setEditedNodes) => {
  const map = useMap()
  map.pm.enableGlobalRemovalMode()
  console.log("here")

  map.on('pm:remove', (e)=>{
    let thisLayer = e.layer
    //setCurrNode(thisLayer)

    let toRemove = landmarks.findIndex(({leaflet_id})=>leaflet_id == thisLayer._leaflet_id)

    let temp = editedNodes.deleted
    temp.push(landmarks[toRemove])
    setEditedNodes((prev)=>({...prev, "deleted":temp}))

    if(toRemove != -1){
      landmarks.splice(toRemove,1)
      console.log(landmarks)      
    }
    
    })
};

export const EditLandmarkFn = (landmarks, editedNodes, setEditedNodes) => {
  const map = useMap()
  // map.pm.createCustomControl()
  console.log(map.pm.getGeomanLayers())
  
  console.log("not here")

  // map.eachLayer(map.on('pm:onClick'), (e)=>{
  //     console.log("yeet")
  //   })

  map.eachLayer(function(layer){
    layer.on('click', function(){
      console.log(layer)
      //alert(layer.leaflet_id)
    });
  });
};

export const AddLandmarkFn = (setCurrNode, editData) => {
  const map = useMap()
  map.pm.enableDraw('Marker',{continueDrawing:false})

  map.on('pm:create', (e)=>{
    let thisLayer = e.layer
    map.pm.disableDraw()
    setCurrNode(thisLayer)

    if(editData.find(({leaflet_id}) => leaflet_id==e.layer._leaflet_id) === undefined)
      editData.push({
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