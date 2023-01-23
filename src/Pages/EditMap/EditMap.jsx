import "./EditMap.css"
import "../../Components/Navbar/Sidebar.css"

const EditMap = ({ children }) => {

  console.log("edit")
  return(
    <div className="sidebar-submenu">
      <div className="editMap-Container">Edit Map</div>
          <div className="container">
            <a href = "#AddLandmark">Add Landmark</a>
            <a href= "#AddRoad">Add Road</a>
            <a href= "#EditLandmark">Edit Landmark</a>
          </div>
      </div>
  )
}
export default EditMap;