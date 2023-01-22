import "./PathFinder.css"
import "../../Components/SidebarCustomButton/SidebarCustomButton"
import { Search } from "@mui/icons-material"
import SidebarCustomButton from "../../Components/SidebarCustomButton/SidebarCustomButton"

const PathFinder = ({ children }) => {

  return(

    <div className="sidebar-submenu">
      <div className="pathfinder">

        <div className="pathfinder-title">
          <div className="pathfinder-title-text">
            PATH FINDER
          </div>
        </div>

        <div className="pathfinder-searchtitle">
          Where would you like to go?
        </div>

        <div className="pathfinder-search">
      
          <div className="pathfinder-fromsearchbar">
            <div className="pathfinder-fromlabel">
              From:
            </div>
            <input type="text" placeholder="Choose source location..."/>
            <button type="submit">
              <Search sx={{ fontSize: "2rem" }} />
            </button>
            <div className="pathfinder-fromdescription">
              You can type out a location, or you can click a landmark on the map.
            </div>
          </div>

          <div className="pathfinder-tosearchbar">
            <div className="pathfinder-tolabel">
              To:
            </div>
            <input type="text" placeholder="Choose destination..."/>
            <button type="submit">
              <Search sx={{ fontSize: "2rem" }} />
            </button>
            <div className="pathfinder-todescription">
              You can type out a location, or you can click a landmark on the map.
            </div>
          </div>
          
          <div className="pathfinder-searchsubmit">
            <SidebarCustomButton text="GET DIRECTIONS" className="test-button"/>
          </div>
        </div>

        <div className="pathfinder-recentsearches">
          Recent Searches
          <hr/>
        </div>
        
      </div>
    </div>
  )
}

export default PathFinder;