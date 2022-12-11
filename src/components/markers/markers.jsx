import {Marker} from "react-leaflet"
import L from "leaflet"

import './markers.css'

var test = [{type: "Hospitals", cords: [10.253781, 123.838469]},
{type: "Cemetaries", cords: [10.263133, 123.839979]},
{type: "Barangay Halls", cords: [10.563133, 123.839979]}]

var markerIcon = L.Icon.extend({
    options:{
        iconSize: [35,35],
        shadowSize: [68,95]
    }
});

const airportIcon = new markerIcon({iconUrl: require('../../Assets/icons/Airport.png')}),
barIcon = new markerIcon({iconUrl: require('../../Assets/icons/Bar.png')}),
barangayHallIcon = new markerIcon({iconUrl: require('../../Assets/icons/BarangayHall.png')}),
busStationIcon = new markerIcon({iconUrl: require('../../Assets/icons/BusStation.png')}),
cemetaryIcon = new markerIcon({iconUrl: require('../../Assets/icons/Cemetery.png')}),
churchIcon = new markerIcon({iconUrl: require('../../Assets/icons/Church.png')}),
cityHallIcon = new markerIcon({iconUrl: require('../../Assets/icons/CityHall.png')}),
fireStationIcon = new markerIcon({iconUrl: require('../../Assets/icons/FireStation.png')}),
healthCenterIcon = new markerIcon({iconUrl: require('../../Assets/icons/HealthCenter.png')}),
hospitalIcon = new markerIcon({iconUrl: require('../../Assets/icons/Hospital.png')}),
mallDepartmentIcon = new markerIcon({iconUrl: require('../../Assets/icons/MallDepartment.png')}),
municipalHallIcon = new markerIcon({iconUrl: require('../../Assets/icons/MunicipalHall.png')}),
policeStationIcon = new markerIcon({iconUrl: require('../../Assets/icons/PoliceStation.png')}),
portIcon = new markerIcon({iconUrl: require('../../Assets/icons/Port.png')}),
publicMarketIcon = new markerIcon({iconUrl: require('../../Assets/icons/PublicMarket.png')}),
restaurantIcon = new markerIcon({iconUrl: require('../../Assets/icons/Restaurant.png')}),
schoolIcon = new markerIcon({iconUrl: require('../../Assets/icons/School.png')}),
templeIcon = new markerIcon({iconUrl: require('../../Assets/icons/Temple.png')}),
touristSpotIcon = new markerIcon({iconUrl: require('../../Assets/icons/TouristSpot.png')})

function locationChecker(location){
    if(location.type == "Hospitals"){
        return hospitalIcon
    }else if(location.type == "Health Centers"){
        return healthCenterIcon
    }else if(location.type == "Pharmacies"){
        return hospitalIcon
    }else if(location.type == "Barangay Halls"){
        return barangayHallIcon
    }else if(location.type == "Malls/Department Stores"){
        return mallDepartmentIcon
    }else if(location.type == "Markets"){
        return publicMarketIcon
    }else if(location.type == "City Halls"){
        return cityHallIcon
    }else if(location.type == "Schools"){
        return schoolIcon
    }else if(location.type == "Bars"){
        return barIcon
    }else if(location.type == "Police Stations"){
        return policeStationIcon
    }else if(location.type == "Fire Stations"){
        return fireStationIcon
    }else if(location.type == "Churches"){
        return churchIcon
    }else if(location.type == "Restaurants"){
        return restaurantIcon
    }else if(location.type == "Tourist Spots" || location.type == "Tourist spots"){
        return touristSpotIcon
    }else if(location.type == "Cemetaries"){
        return cemetaryIcon
    }else if(location.type == "Police Stations"){
        return policeStationIcon
    }else if(location.type == "Municipal Halls" || location.type == "Municipal halls"){
        return municipalHallIcon
    }else if(location.type == "Ports"){
        return portIcon
    }
}

const Marker = ({vars}) => {
    return (
        <div>{
            test.map((location) =>{
                return(
                    <Marker position={location.cords} icon = {locationChecker(location)}></Marker>
                )
            })
        }
        </div> 
    )
}

// var barangayHallIcon = new markerIcon({iconUrl: require('../../Assets/icons/Airport.png')});

export default Marker