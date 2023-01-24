import "./EditMap.css"
import "../../Components/Navbar/Sidebar.css"

const EditMap = ({ children }) => {

  console.log("edit")
  return(
    <div className="sidebar-submenu">
      <div className="page-title">
        <div className="page-title-text">Edit Map</div>
      </div>
        <p class="ridge"> 
          <div class = "header">Landmarks</div>
          <div className = "wrapper">
            <button class="button">Add</button>
            <button class="button">Edit</button>
            <button class="button">Delete</button>
          </div>
        </p>
        <p class="ridge"> 
          <div class = "header">Intersections</div>
          <div className = "wrapper">
            <button class="button">Add</button>
            <button class="button">Edit</button>
            <button class="button">Delete</button>
          </div>
        </p>
        <p class="ridge"> 
          <div class = "header">Roads</div>
          <div className = "wrapper">
            <button class="button">Add</button>
            <button class="button">Edit</button>
            <button class="button">Delete</button>
          </div>
        </p>
    </div>
  )
}
export default EditMap;